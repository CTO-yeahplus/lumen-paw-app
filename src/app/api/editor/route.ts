import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  console.log("=====================================");
  console.log("🚀 [LUMEN AI] 에디터 파이프라인 가동 시작");
  
  try {
    const { imageUrl } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY가 환경 변수에 없습니다.");

    const imageResp = await fetch(imageUrl);
    if (!imageResp.ok) throw new Error(`다운로드 실패: HTTP ${imageResp.status}`);

    const mimeType = imageResp.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await imageResp.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-1.5-pro-latest";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName }); 

    // 🍏 [핵심] 구조를 3단계로 분리하고, 무조건 '한국어'로 작성하도록 강력히 통제
    const prompt = `
      당신은 Vogue/GQ 수석 에디터이자 반려견 역사 전문가입니다. 
      첨부된 흑백 사진을 분석하여 다음 형식을 엄격히 지켜 답변하십시오.
      **주의: TITLE을 제외한 QUOTE와 CONTENT는 반드시 아름답고 유려한 '한국어(Korean)'로 작성하십시오.**

      출력 형식:
      TITLE: [2~4단어 사이의 압도적인 영문 잡지 타이틀]
      QUOTE: [사진의 분위기와 완벽하게 어울리는 반려견 관련 역사적 명언이나 지혜 (한국어 번역)]
      CONTENT: [빛의 명암, 피사체의 털 질감, 시선의 우아함을 극찬하는 2문단의 예술 평론 (한국어)]
    `;

    const imageParts = [{ inlineData: { data: buffer.toString("base64"), mimeType: mimeType } }];
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const fullText = response.text();

    // 🍏 정규식으로 3파트를 완벽하게 분리 추출
    const titleMatch = fullText.match(/TITLE:\s*(.*)/);
    const quoteMatch = fullText.match(/QUOTE:\s*(.*)/);
    const contentMatch = fullText.match(/CONTENT:\s*([\s\S]*)/);

    const safeTitle = titleMatch ? titleMatch[1].trim() : "THE UNTITLED";
    const safeQuote = quoteMatch ? quoteMatch[1].trim() : "";
    const safeContent = contentMatch ? contentMatch[1].trim() : fullText;

    // 🍏 DB에 저장하기 편하도록 명언과 본문을 엔터 2개(\n\n)로 아름답게 결합
    const combinedContent = safeQuote 
      ? `"${safeQuote}"\n\n${safeContent}`
      : safeContent;

    return NextResponse.json({ 
      title: safeTitle,
      content: combinedContent 
    });

  } catch (error: any) {
    console.error("🚨 [FATAL ERROR]:", error.message || error);
    return NextResponse.json({ error: error.message || "AI 분석 에러" }, { status: 500 });
  }
}