import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend 초기화 (API 키 연동)
const resend = new Resend(process.env.RESEND_API_KEY);

// 🍏 상태값에 따른 럭셔리 메시지 및 스텝 맵핑
const statusMessages: Record<string, { title: string, desc: string, step: string }> = {
  pending_payment: {
    step: "STEP 01 : PAYMENT CONFIRMED",
    title: "Payment Confirmed",
    desc: "귀하께서 주문하신 결제 내역과 비스포크 데이터가 완벽하게 확인되었습니다. 이제 LUMEN의 전담 장인이 오직 한 사람만을 위한 숭고한 수작업 공정에 착수할 준비를 마쳤습니다."
  },
  crafting: {
    step: "STEP 02 : CRAFTING",
    title: "Master Crafting",
    desc: "컬렉터님의 아우라 데이터가 장인의 아틀리에로 전달되어, 물리적 구조를 입는 숭고한 수작업 공정이 시작되었습니다."
  },
  qc_inspect: {
    step: "STEP 03 : INSPECTION",
    title: "Quality Control",
    desc: "장인의 손길을 거친 마스터피스가 LUMEN의 엄격한 검수 센터에 도착하여, 완벽한 무결성을 확인하고 있습니다."
  },
  shipping: {
    step: "STEP 04 : DELIVERY",
    title: "Delivery Initiated",
    desc: "모든 공정을 마친 컬렉터님의 에디션이 프리미엄 패키징을 마치고 마침내 당신의 곁으로 향합니다."
  },
  contacted: {
    step: "VIP WAITLIST : CONTACTED",
    title: "Private Contact",
    desc: "귀하의 VIP 대기열 등록이 확인되었습니다. LUMEN의 전담 컨시어지가 귀하의 컬렉션 합류를 위해 조만간 프라이빗한 연락을 드릴 예정입니다. 조금만 기다려 주십시오."
  },
  reserved: {
    step: "VIP WAITLIST : RESERVED",
    title: "Invitation Confirmed",
    desc: "축하합니다. 귀하의 LUMEN VIP 우선 예약이 최종 확정되었습니다. 정식 런칭 시, 전 세계 그 누구보다 가장 먼저 마스터피스를 소유할 수 있는 절대적인 권한이 부여됩니다."
  },
};

// 💎 블랙 플래티넘 HTML 이메일 제너레이터
const generateLuxuryEmailHtml = (customerName: string, itemName: string, messageData: any) => {
  // 🍏 [핵심] 1단계일 때는 '배송지 입력창'으로, 나머지는 '아카이브(Vault)'로 동적 연결합니다.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const isPaymentConfirmed = messageData.step === "STEP 01 : PAYMENT CONFIRMED";
  
  const targetUrl = isPaymentConfirmed ? `${baseUrl}/claim/address?order=${messageData.orderId}` : `${baseUrl}/vault`;
  const buttonText = isPaymentConfirmed ? "프라이빗 배송지 입력하기" : "Private Archive 입장하기";

  return `
    <!DOCTYPE html>
    <html lang="ko">
    <body style="margin: 0; padding: 0; background-color: #000000; text-align: center;">
      <div style="background-color: #000000; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 60px 20px; text-align: center; -webkit-font-smoothing: antialiased;">
        
        <div style="max-width: 500px; margin: 0 auto; border: 1px solid #27272a; border-radius: 24px; padding: 50px 40px; background-color: #09090b; box-shadow: 0 20px 40px rgba(0,0,0,0.8);">
          
          <div style="width: 30px; height: 2px; background-color: #ffffff; margin: 0 auto 30px auto;"></div>
          <h1 style="font-size: 26px; letter-spacing: 6px; font-weight: 300; margin-bottom: 8px; text-transform: uppercase; color: #ffffff;">LUMEN</h1>
          <p style="font-size: 10px; color: #71717a; letter-spacing: 4px; text-transform: uppercase; margin-top: 0;">The Soul of Data</p>
          
          <div style="margin-top: 60px; margin-bottom: 50px;">
            <p style="font-size: 11px; color: #a1a1aa; letter-spacing: 3px; margin-bottom: 12px; font-weight: bold;">${messageData.step}</p>
            <h2 style="font-size: 24px; font-weight: normal; letter-spacing: 1px; margin-bottom: 30px; color: #ffffff;">${messageData.title}</h2>
            
            <p style="font-size: 14px; color: #d4d4d8; line-height: 1.8; margin-bottom: 40px; word-break: keep-all;">
              <strong style="color: #ffffff; font-weight: bold;">${customerName}</strong> 컬렉터님,<br><br>
              ${messageData.desc}
            </p>
            
            <div style="background-color: #000000; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 40px;">
              <p style="font-size: 10px; color: #71717a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 2px;">Bespoke Edition</p>
              <p style="font-size: 16px; color: #ffffff; font-weight: 300; margin: 0; letter-spacing: 1px;">${itemName}</p>
            </div>
          </div>
          
          <a href="${targetUrl}" style="display: inline-block; background-color: #ffffff; color: #000000; text-decoration: none; padding: 18px 36px; border-radius: 30px; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; transition: opacity 0.3s;">
            ${buttonText}
          </a>
          
          <div style="margin-top: 60px; border-top: 1px solid #27272a; padding-top: 30px;">
            <p style="font-size: 10px; color: #52525b; letter-spacing: 1px; line-height: 1.6;">
              본 메일은 발신 전용이며 회신되지 않습니다.<br>
              당신의 빛이 영원토록 기록되길 바랍니다.<br><br>
              © 2026 LUMEN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, status, customerName, customerEmail, itemName } = body;

    if (!statusMessages[status]) {
      return NextResponse.json({ success: true, message: "알림 대상 상태가 아님" });
    }

    // 🍏 [핵심 교정] 이메일 생성기에 주문 ID(orderId)를 넘겨주기 위해 객체를 결합합니다.
    const messageData = { ...statusMessages[status], orderId };
    
    // 수신자 강제 세팅 (라이브 시 customerEmail 로 변경 필요)
    const targetEmail = "cto@yeahplus.co.kr"; 

    const { data, error } = await resend.emails.send({
      from: 'LUMEN Concierge <onboarding@resend.dev>',
      to: targetEmail,
      subject: `[LUMEN] ${messageData.title}: 여정의 업데이트`,
      html: generateLuxuryEmailHtml(customerName, itemName, messageData),
    });

    if (error) {
      console.error("Resend 발송 에러:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    console.log(`[LUMEN Email Sent] ID: ${data?.id} | To: ${targetEmail}`);
    return NextResponse.json({ success: true, message: "Notification sent successfully." });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}