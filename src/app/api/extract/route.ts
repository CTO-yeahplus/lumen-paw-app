// src/app/api/extract/route.ts
import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import { supabase } from '@/lib/supabase'; 

export async function POST(req: Request) {
  console.log("=====================================");
  console.log("🚀 [PAWTRAIT EDITION S3] 데이터 추출 파이프라인 가동");

  try {
    const { sourceUrl } = await req.json();
    console.log("📍 [STEP 1] 타겟 URL 수신:", sourceUrl);

    const urlObj = new URL(sourceUrl);
    const bucket = urlObj.searchParams.get('bucket');
    const region = urlObj.searchParams.get('region');
    const folderPath = urlObj.searchParams.get('folderPath');

    if (!bucket || !region || !folderPath) {
      throw new Error("유효하지 않은 인생네컷 QR 주소입니다.");
    }

    const baseUrl = `https://${bucket}.s3.${region}.amazonaws.com${folderPath}`;
    const zipUrl = `${baseUrl}/original.zip`;
    const jsonUrl = `${baseUrl}/json.json`;
    
    // 🍏 [해결 1] JSON 컬러칩 오브젝트 분해 로직
    console.log("📍 [STEP 2] json.json 파일 다운로드 및 컬러칩 추출...");
    let colorChips: string[] = [];
    try {
      const jsonResp = await fetch(jsonUrl);
      if (jsonResp.ok) {
        const jsonData = await jsonResp.json();
        if (jsonData.colorChips && Array.isArray(jsonData.colorChips)) {
          // 객체 {hexColor, title...} 에서 'hexColor' 문자열만 핀셋으로 뽑아냅니다.
          colorChips = jsonData.colorChips.map((c: any) => c.hexColor || c);
        }
      }
    } catch (e) {
      console.log("⚠️ 컬러칩 JSON 추출 실패 (무시하고 진행)");
    }

    console.log("📍 [STEP 3] original.zip 다운로드 중...");
    const zipResp = await fetch(zipUrl);
    if (!zipResp.ok) throw new Error("ZIP 파일을 찾을 수 없습니다.");
    const zipBuffer = await zipResp.arrayBuffer();
    
    console.log("📍 [STEP 4] ZIP 압축 해제 및 이미지 색출 중...");
    const zip = await JSZip.loadAsync(zipBuffer);
    const extractedImages: string[] = [];

    // 🍏 [해결 2] ArrayBuffer 변환 및 extracts 버킷으로 업로드
    for (const [filename, fileData] of Object.entries(zip.files)) {
      if (!fileData.dir && filename.match(/\.(jpg|jpeg|png)$/i)) {
        
        // Next.js 환경에서 가장 안전한 버퍼 타입인 ArrayBuffer를 사용합니다.
        const content = await fileData.async('arraybuffer'); 
        const uniqueName = `extracted_${Date.now()}_${filename}`;
        
        console.log(`   - 📸 발견: ${filename} (Cloud 업로드 중...)`);
        
        // 🚨 관리자 전용인 'editorials' 대신, 방금 연 'extracts' 창고에 넣습니다.
        const { error } = await supabase.storage.from('extracts').upload(uniqueName, content, {
          contentType: 'image/jpeg'
        });

        if (error) {
          console.error(`   - 🚨 업로드 실패 (${filename}):`, error.message);
        } else {
          const { data } = supabase.storage.from('extracts').getPublicUrl(uniqueName);
          extractedImages.push(data.publicUrl);
        }
      }
    }

    console.log(`✅ [SUCCESS] 총 ${extractedImages.length}장의 원본 이미지 및 컬러 추출 완료!`);
    console.log("=====================================");

    return NextResponse.json({ 
      images: extractedImages,
      colorChips: colorChips 
    });

  } catch (error: any) {
    console.error("🚨 추출 에러:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}