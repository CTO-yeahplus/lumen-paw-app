"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function VIPInvitationPage() {
  const params = useParams();
  const guestId = params.guest as string; // 'dogweek', 'mitcut' 등 URL에서 추출
  
  // 🍏 파트너별 맞춤 데이터 세팅
  const guestData: Record<string, { name: string, title: string, color: string }> = {
    dogweek: { name: "DOGWEEK", title: "반려견 문화의 패러다임", color: "#F59E0B" }, // 앰버 (Gold)
    mitcut: { name: "MITCUT", title: "시각적 미학의 정점", color: "#3B82F6" },      // 블루 (Blue)
    default: { name: "VIP GUEST", title: "PAWTRAIT EDITION Private Preview", color: "#FFFFFF" }
  };

  const guest = guestData[guestId] || guestData.default;
  const [isReady, setIsReady] = useState(false);

  // 🍏 진입 시 극적인 페이드인 연출을 위한 타이머
  useEffect(() => {
    setTimeout(() => setIsReady(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative selection:bg-zinc-800">
      
      {/* 🍏 배경의 거대한 '빛(Aura)' 연출 */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 transition-all duration-[3000ms] ease-out ${isReady ? 'scale-100' : 'scale-50 opacity-0'}`}
        style={{ backgroundColor: guest.color }}
      />

      <div className={`relative z-10 flex flex-col items-center transition-all duration-[2000ms] ease-out delay-500 ${isReady ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* 상단 레이블 */}
        <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-12">
          Strictly Private Invitation
        </span>

        {/* 🍏 인터랙티브 티켓 캔버스 */}
        <div className="relative group w-80 h-[450px] cursor-pointer perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-between transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-zinc-600 shadow-2xl">
            
            {/* 티켓 내부 빛 반사 효과 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, ${guest.color}, transparent 70%)` }} />

            <div className="w-full text-center mt-8">
              <div className="w-1 h-12 mx-auto mb-6 opacity-50" style={{ backgroundColor: guest.color }} />
              <h1 className="text-3xl font-serif text-white tracking-widest mb-2">PAWTRAIT EDITION</h1>
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em]">The Soul of Data</p>
            </div>

            <div className="w-full text-center z-10">
              <p className="text-[11px] text-zinc-400 mb-2 font-light">To our esteemed partner,</p>
              <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-1">{guest.name}</h2>
              <p className="text-xs text-zinc-500 italic">"{guest.title}"</p>
            </div>

            <div className="w-full text-center mb-4">
              <button className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors">
                Accept Invitation
              </button>
            </div>
            
          </div>
        </div>

        {/* 하단 텍스트 */}
        <p className="mt-12 text-[10px] text-zinc-600 tracking-[0.2em] uppercase max-w-xs text-center leading-relaxed">
          본 링크는 귀하만을 위해 생성된 고유 암호화 링크입니다. 타인과 공유할 수 없습니다.
        </p>

      </div>
    </div>
  );
}