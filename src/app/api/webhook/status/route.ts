import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend 초기화 (API 키 연동)
const resend = new Resend(process.env.RESEND_API_KEY);

// 🍏 상태값에 따른 럭셔리 메시지 및 스텝 맵핑
const statusMessages: Record<string, { title: string, desc: string, step: string }> = {
  pending_payment: {
    step: "STEP 01 : PAYMENT CONFIRMED",
    title: "결제 완료(Payment Confirmed)",
    desc: "귀하께서 주문하신 결제 내역과 비스포크 데이터가 완벽하게 확인되었습니다. 이제 PAWTRAIT EDITION의 전담 장인이 오직 한 사람만을 위한 숭고한 수작업 공정에 착수할 준비를 마쳤습니다."
  },
  crafting: {
    step: "STEP 02 : CRAFTING",
    title: "장인 제작 중(Master Crafting)",
    desc: "컬렉터님이 주문하신 데이터가 장인에게 전달되어, 맞춤형 수작업 공정이 시작되었습니다."
  },
  qc_inspect: {
    step: "STEP 03 : INSPECTION",
    title: "Quality Control",
    desc: "장인의 손길을 거친 마스터피스가 PAWTRAIT EDITION의 엄격한 검수 센터에 도착하여, 품질 검수 중에 있습니다."
  },
  shipping: {
    step: "STEP 04 : DELIVERY",
    title: "Delivery Initiated",
    desc: "모든 공정을 마친 컬렉터님의 에디션이 프리미엄 패키징을 마치고 마침내 당신의 곁으로 향합니다."
  },
  contacted: {
    step: "VIP WAITLIST : CONTACTED",
    title: "Private Contact",
    desc: "귀하의 VIP 대기열 등록이 확인되었습니다. PAWTRAIT EDITION의 전담 컨시어지가 귀하의 컬렉션 합류를 위해 조만간 프라이빗한 연락을 드릴 예정입니다. 조금만 기다려 주십시오."
  },
  reserved: {
    step: "VIP WAITLIST : RESERVED",
    title: "Invitation Confirmed",
    desc: "축하합니다. 귀하의 PAWTRAIT EDITION VIP 우선 예약이 최종 확정되었습니다. 정식 런칭 시, 전 세계 그 누구보다 가장 먼저 마스터피스를 소유할 수 있는 절대적인 권한이 부여됩니다."
  },
};

// 💎 [업그레이드] 작가에게 보내는 럭셔리 작업 지시서(Work Order) HTML 템플릿
const generateArtistCardHtml = (
  orderId: string, 
  itemName: string, 
  customerName: string,
  petName: string,
  petBirth: string,
  brandColor: string,
  petImage: string,
  productImage: string, 
  material: string, 
  dimensions: string,
  totalEditions: number) => `
  <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 40px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; border-radius: 16px; border: 1px solid #27272a;">
    <p style="color: #a1a1aa; font-size: 10px; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 8px;">New Work Order</p>
    <h1 style="font-size: 22px; margin-top: 0; margin-bottom: 24px; font-weight: 600;">새로운 마스터피스 의뢰가 도착했습니다.</h1>
    
    ${petImage ? `<img src="${petImage}" alt="Reference Image" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 24px; border: 1px solid #27272a;" />` : ''}
    
    <div style="background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
  
      <p style="color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px 0;">Product Specifications</p>
      
      <p style="font-size: 16px; font-weight: bold; margin: 0 0 8px 0; color: #ffffff;">${itemName}</p>
      ${totalEditions ? `
        <p style="color: #ef4444; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 20px 0;">
          [전 세계 ${totalEditions}개 한정 생산 작품]
        </p>
      ` : ''}
      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
        ${productImage ? `<img src="${productImage}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid #3f3f46;" />` : ''}
        <div style="font-size: 13px; color: #e4e4e7; padding-top: 4px;">
          <p style="margin: 0 0 6px 0;"><strong>Material:</strong> ${material || '기본 프리미엄 원단'}</p>
          <p style="margin: 0 0 6px 0;"><strong>Dimensions:</strong> ${dimensions || '기본 사이즈'}</p>
        </div>
      </div>
      
      <div style="height: 1px; background-color: #27272a; margin: 20px 0;"></div>

      <p style="color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px 0;">Edition Title</p>
      <p style="font-size: 16px; font-weight: bold; margin: 0 0 20px 0;">${itemName}</p>
      
      <p style="color: #a1a1aa; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px 0;">Order ID & Client</p>
      <p style="font-family: monospace; font-size: 14px; margin: 0; color: #3b82f6;">${orderId} <span style="color: #71717a; margin: 0 8px;">|</span> <span style="color: #ffffff;">${customerName} 님</span></p>
    </div>

    <a href="https://pawtraitedition.com/admin/orders" style="display: inline-block; background-color: #ffffff; color: #000000; padding: 14px 24px; text-decoration: none; font-weight: bold; font-size: 12px; border-radius: 8px; letter-spacing: 1px; text-transform: uppercase;">작업 대시보드 열기 &rarr;</a>
  </div>
`;

// 💎 블랙 플래티넘 HTML 이메일 제너레이터
const generateLuxuryEmailHtml = (customerName: string, itemName: string, messageData: any,
  productImage: string, 
  material: string, 
  dimensions: string,
  totalEditions?: number) => {
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
          <h1 style="font-size: 26px; letter-spacing: 6px; font-weight: 300; margin-bottom: 8px; text-transform: uppercase; color: #ffffff;">PAWTRAIT EDITION</h1>
          <p style="font-size: 10px; color: #71717a; letter-spacing: 4px; text-transform: uppercase; margin-top: 0;">The Soul of Data</p>
          
          <div style="margin-top: 60px; margin-bottom: 50px;">
            <p style="font-size: 11px; color: #a1a1aa; letter-spacing: 3px; margin-bottom: 12px; font-weight: bold;">${messageData.step}</p>
            <h2 style="font-size: 24px; font-weight: normal; letter-spacing: 1px; margin-bottom: 30px; color: #ffffff;">${messageData.title}</h2>
            
            <p style="font-size: 14px; color: #d4d4d8; line-height: 1.8; margin-bottom: 40px; word-break: keep-all;">
              <strong style="color: #ffffff; font-weight: bold;">${customerName}</strong> 컬렉터님,<br><br>
              ${messageData.desc}
            </p>
            
            <p style="color: #71717a; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 16px 0;">
            Private Order Details
          </p>

          ${totalEditions ? `
            <div style="display: inline-block; background-color: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 4px 12px; border-radius: 20px; margin-bottom: 16px;">
              <span style="color: #ef4444; font-size: 10px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">
                Strictly Limited to ${totalEditions} Editions
              </span>
            </div>
          ` : ''}

            <div style="background-color: #000000; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 40px;">
              <p style="font-size: 10px; color: #71717a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 2px;">Bespoke Edition</p>
              <p style="font-size: 16px; color: #ffffff; font-weight: 300; margin: 0; letter-spacing: 1px;">${itemName}</p>
            </div>
            <p style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0; letter-spacing: -0.5px;">${itemName}</p>
                  
                  ${productImage ? `
                    <div style="margin-bottom: 24px;">
                      <img src="${productImage}" alt="${itemName}" style="max-width: 100%; height: auto; border-radius: 12px; border: 1px solid #27272a;" />
                    </div>
                  ` : ''}
                  
                  ${material ? `<p style="color: #a1a1aa; font-size: 12px; margin: 0 0 24px 0;">${material} &middot; ${dimensions}</p>` : ''}

          </div>
          
          <a href="${targetUrl}" style="display: inline-block; background-color: #ffffff; color: #000000; text-decoration: none; padding: 18px 36px; border-radius: 30px; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; transition: opacity 0.3s;">
            ${buttonText}
          </a>
          
          <div style="margin-top: 60px; border-top: 1px solid #27272a; padding-top: 30px;">
            <p style="font-size: 10px; color: #52525b; letter-spacing: 1px; line-height: 1.6;">
              본 메일은 발신 전용이며 회신되지 않습니다.<br>
              당신의 빛이 영원토록 기록되길 바랍니다.<br><br>
              © 2026 PAWTRAIT EDITION. All rights reserved.
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
    // 🍏 프론트엔드에서 넘어오는 작가 정보(artistEmail)를 추가로 받습니다.
    const { orderId, status, customerName, customerEmail, itemName, artistEmail, petName, petBirth, brandColor, petImage, productImage, material, dimensions, totalEditions } = body;
    console.log("🚨 [WEBHOOK X-RAY] 수신된 데이터 상태:");
    console.log(`- 현재 상태(status): ${status}`);
    console.log(`- 작가 이메일(artistEmail): ${artistEmail || "❌ 데이터 없음 (프론트에서 안 보냄!)"}`);

    if (!statusMessages[status]) {
      return NextResponse.json({ success: true, message: "알림 대상 상태가 아님" });
    }

    const messageData = { ...statusMessages[status], orderId };
    const targetEmail = customerEmail; 

    if (!targetEmail) {
      return NextResponse.json({ success: false, error: "No target email provided" }, { status: 400 });
    }

    // 1. 고객에게 보내는 메일 (기존 로직)
    await resend.emails.send({
      from: 'PAWTRAIT EDITION Concierge <concierge@pawtraitedition.com>',
      to: targetEmail,
      subject: `[PAWTRAIT EDITION] ${messageData.title}: 여정의 업데이트`,
      html: generateLuxuryEmailHtml(customerName, itemName, messageData, productImage, material, dimensions,totalEditions),
    });
    console.log(`[Email Sent] VIP Customer: ${targetEmail}`);

    // 💎 작가에게 보내는 작업 지시서 메일 발송 로직 (새로운 파라미터 추가)
    if (status === 'crafting' && artistEmail) {
      await resend.emails.send({
        from: 'PAWTRAIT EDITION Work Desk <concierge@pawtraitedition.com>',
        to: artistEmail,
        subject: `[작업 지시서] ${itemName} 의뢰가 도착했습니다.`,
        html: generateArtistCardHtml(orderId, itemName, customerName, petName, petBirth, brandColor, petImage, productImage, material, dimensions,totalEditions),
      });
      console.log(`[Email Sent] Artist Work Order: ${artistEmail}`);
    }

    return NextResponse.json({ success: true, message: "Notification sent successfully." });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}