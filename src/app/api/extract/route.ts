import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  console.log("=====================================");
  console.log("🚀 [PAWTRAIT EDITION S3] 정식 데이터 추출 파이프라인 가동");

  try {
    const { sourceUrl } = await req.json();

    // 💎 1. 단축 URL 완벽 확장 (테스트 검증 완료)
    let finalUrl = sourceUrl;
    if (sourceUrl.includes("api.life4cut.net")) {
      try {
        const expandRes = await fetch(sourceUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15'
          },
          redirect: 'follow'
        });
        finalUrl = expandRes.url;
      } catch (e) {
        console.log("⚠️ URL 확장 중 에러 발생, 원본 URL 유지");
      }
    }

    // 💎 2. URL 파싱
    const urlObj = new URL(finalUrl);
    const bucket = urlObj.searchParams.get('bucket');
    const region = urlObj.searchParams.get('region');
    const folderPath = urlObj.searchParams.get('folderPath');

    if (!bucket || !region || !folderPath) {
      throw new Error("유효하지 않은 인생네컷 QR 주소입니다.");
    }

    // 💎 3. AWS S3 주소 조립
    const baseUrl = `https://${bucket}.s3.${region}.amazonaws.com${folderPath}`;
    const zipUrl = `${baseUrl}/original.zip`;
    const jsonUrl = `${baseUrl}/json.json`;
    
    // 💎 4. 컬러칩 추출 (선택사항)
    let colorChips: string[] = [];
    try {
      const jsonResp = await fetch(jsonUrl);
      if (jsonResp.ok) {
        const jsonData = await jsonResp.json();
        if (jsonData.colorChips && Array.isArray(jsonData.colorChips)) {
          colorChips = jsonData.colorChips.map((c: any) => c.hexColor || c);
        }
      }
    } catch (e) {
      console.log("⚠️ 컬러칩 추출 실패 (무시하고 진행)");
    }

    // 💎 5. 원본 ZIP 파일 다운로드
    console.log("📍 원본 ZIP 다운로드 중...");
    const zipResp = await fetch(zipUrl);
    if (!zipResp.ok) throw new Error("원본 ZIP 파일을 찾을 수 없습니다.");
    const zipBuffer = await zipResp.arrayBuffer();
    
    // 💎 6. 압축 해제 및 Supabase 금고 업로드
    console.log("📍 압축 해제 및 금고 저장 중...");
    const zip = await JSZip.loadAsync(zipBuffer);
    const extractedImages: string[] = [];

    for (const [filename, fileData] of Object.entries(zip.files)) {
      if (!fileData.dir && filename.match(/\.(jpg|jpeg|png)$/i)) {
        const content = await fileData.async('arraybuffer'); 
        const uniqueName = `extracted_${Date.now()}_${filename}`;
        
        // Supabase Storage (extracts 버킷) 에 업로드
        const { error } = await supabase.storage.from('extracts').upload(uniqueName, content, {
          contentType: 'image/jpeg'
        });

        if (error) {
          console.error(`🚨 업로드 실패 (${filename}):`, error.message);
        } else {
          // 업로드 성공 시 공개 URL을 받아와 배열에 저장
          const { data } = supabase.storage.from('extracts').getPublicUrl(uniqueName);
          extractedImages.push(data.publicUrl);
        }
      }
    }

    console.log(`✅ 성공적으로 ${extractedImages.length}장의 사진을 추출했습니다.`);
    console.log("=====================================");

    // 💎 7. 프론트엔드(화면)로 실제 사진 URL 전달
    return NextResponse.json({ 
      images: extractedImages,
      colorChips: colorChips 
    });

  } catch (error: any) {
    console.error("🚨 추출 에러:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}