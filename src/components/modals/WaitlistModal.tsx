"use client";
import { useState, useEffect } from "react";

// 🍏 모달이 받을 데이터 타입 정의
export interface ConceptType {
  id: string;
  name: string;
  desc: string;
}

interface WaitlistModalProps {
  isOpen: boolean;
  concept: ConceptType | null;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, concept, onClose }: WaitlistModalProps) {
  // 모달 내부의 성공 상태 관리
  const [isSuccess, setIsSuccess] = useState(false);
  
  // 모달이 닫힐 때 잔상이 남지 않도록 이전 데이터를 임시 보관
  const [displayConcept, setDisplayConcept] = useState<ConceptType | null>(null);

  useEffect(() => {
    if (concept) setDisplayConcept(concept);
    if (!isOpen) {
      // 모달이 닫히면 0.5초 뒤 성공 상태 초기화 (다음 열림을 대비)
      const timer = setTimeout(() => setIsSuccess(false), 500);
      return () => clearTimeout(timer);
    }
  }, [concept, isOpen]);

  // 대기열 신청 로직
  const handleSubmit = () => {
    setIsSuccess(true);
    // 2.5초간 성공 화면을 보여준 뒤 모달 닫기
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 🍏 다크 블러 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => !isSuccess && onClose()}
      />
      
      {/* 🍏 모달 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-700 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        {/* 1. 대기열 신청 폼 */}
        <div className={`transition-all duration-300 ${isSuccess ? "opacity-0 hidden" : "opacity-100 block"}`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase border border-zinc-700 bg-black px-2 py-1 rounded-full mb-3 inline-block">
                VIP Waitlist
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">{displayConcept?.name}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed word-break-keep">{displayConcept?.desc}</p>
            </div>
          </div>

          <div className="bg-black border border-zinc-800 rounded-2xl p-4 mb-6">
            <h3 className="text-white text-sm font-bold mb-2">프리미어 런칭 시 혜택</h3>
            <ul className="text-xs text-zinc-400 space-y-2">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 런칭 즉시 1순위 촬영 예약권 발송</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 첫 촬영 50% 할인 쿠폰 (자동 지급)</li>
            </ul>
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full h-14 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
            VIP 우선 예약권 발급받기
          </button>
        </div>

        {/* 2. 대기열 신청 완료 (Success State) */}
        <div className={`flex flex-col items-center justify-center py-8 transition-all duration-300 ${isSuccess ? "opacity-100 block" : "opacity-0 hidden"}`}>
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-4 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">발급이 완료되었습니다.</h3>
          <p className="text-zinc-400 text-sm text-center">정식 런칭 시 LUMEN 앱 푸시 알림으로<br/>가장 먼저 초대장을 보내드리겠습니다.</p>
        </div>

      </div>
    </div>
  );
}