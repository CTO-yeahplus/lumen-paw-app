"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayConcept, setDisplayConcept] = useState<ConceptType | null>(null);
  
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [manualEmail, setManualEmail] = useState("");

  useEffect(() => {
    if (concept) setDisplayConcept(concept);
    
    if (isOpen) {
      checkUser();
    } else {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsAgreed(false);
        setManualEmail(""); 
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [concept, isOpen]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setCurrentUser({
        email: user.email || "", 
        name: user.user_metadata?.full_name || user.user_metadata?.name || "VIP Member"
      });
    } else {
      setCurrentUser(null);
    }
  };

  const handleSubmit = async () => {
    if (!displayConcept) return;
    
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      return;
    }

    const finalEmail = currentUser.email || manualEmail.trim();

    if (!finalEmail || !finalEmail.includes('@')) {
      alert("초대장을 수신할 정확한 이메일 주소를 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('waitlists')
        .insert([
          { 
            user_id: user?.id, 
            concept_id: displayConcept.id,
            contact_email: finalEmail,
            contact_name: currentUser.name 
          }
        ]);

      if (error) throw error;

      // 🍏 성공 시 상태 변경 (입력 폼은 숨기고, 중앙 모달을 띄웁니다)
      setIsSuccess(true);
      
      // 3.5초 후 우아하게 전체 모달 닫기
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 3500);

    } catch (error) {
      console.error("대기열 등록 실패:", error);
      alert("대기열 등록에 실패했습니다. (콘솔 로그 확인)");
      setIsSubmitting(false);
    }
  };

  const needsEmailInput = currentUser && !currentUser.email;

  return (
    <div className={`fixed inset-0 z-[200] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 어두운 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !isSuccess && onClose()} 
      />
      
      {/* 💎 1. 입력 폼 바텀 시트 (성공 시 아래로 스르륵 숨겨짐) */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen && !isSuccess ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
        
        <div className="mb-8">
          <span className="text-zinc-400 font-bold tracking-[0.3em] text-[10px] uppercase border border-zinc-800 bg-black px-3 py-1.5 rounded-full mb-4 inline-block shadow-inner">VIP Waitlist</span>
          <h2 className="text-3xl font-serif text-white mb-2 tracking-wide">{displayConcept?.name}</h2>
          <p className="text-zinc-500 text-xs leading-relaxed tracking-widest uppercase">{displayConcept?.desc}</p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-2xl p-5 mb-6">
          <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-3 border-b border-zinc-900 pb-2">초대장 수신 정보</p>
          {currentUser ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold border border-zinc-800">
                  {currentUser.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-white font-bold">{currentUser.name}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {currentUser.email ? currentUser.email : "카카오 간편 로그인 고객"}
                  </p>
                </div>
              </div>
              {needsEmailInput && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-500">
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                    초대장을 수신할 이메일을 입력해 주세요 <span className="text-amber-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="collector@example.com"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-white focus:bg-zinc-800 transition-colors"
                  />
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-red-400 italic">로그인이 필요한 서비스입니다.</p>
          )}
        </div>

        <label className="flex items-start gap-3 mb-8 cursor-pointer group">
          <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
            <input 
              type="checkbox" 
              className="peer appearance-none w-5 h-5 border border-zinc-600 rounded bg-black checked:bg-white checked:border-white transition-colors cursor-pointer"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1.5 5 5 8.5 12.5 1"></polyline>
            </svg>
          </div>
          <div className="flex-1">
            <p className={`text-xs transition-colors ${isAgreed ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
              [필수] 프라이빗 초대장 발송을 위한 이메일 수집 및 마케팅 수신에 동의합니다.
            </p>
          </div>
        </label>

        <button 
          onClick={handleSubmit}
          disabled={Boolean(isSubmitting || !isAgreed || !currentUser || (needsEmailInput && !manualEmail))}
          className={`w-full h-14 rounded-2xl flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 ${
            isAgreed && currentUser && (!needsEmailInput || manualEmail.includes('@')) && !isSubmitting
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-zinc-200 active:scale-[0.98]"
              : "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <span className="animate-pulse text-xs">Processing...</span>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-xs">우선 예약권 발급받기</span>
            </>
          )}
        </button>
      </div>

      {/* 💎 2. 시네마틱 성공 모달 (성공 시 화면 정중앙에 크게 등장) */}
      <div className={`fixed inset-0 z-[210] flex flex-col items-center justify-center transition-all duration-1000 ${isSuccess ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <div className={`relative z-10 flex flex-col items-center transform transition-all duration-1000 delay-100 ${isSuccess ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>
          <div className="w-28 h-28 rounded-full border border-zinc-800 bg-black flex items-center justify-center mb-10 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative">
            <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20" />
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-4xl font-serif text-white tracking-[0.2em] mb-6 uppercase text-center">Invitation<br/>Secured</h3>
          <p className="text-zinc-400 text-sm text-center px-8 leading-relaxed tracking-widest uppercase">
            귀하의 자리가 안전하게 확보되었습니다.<br/><br/>
            <span className="text-white font-mono text-base border-b border-zinc-800 pb-1 px-4">{currentUser?.email || manualEmail}</span><br/><br/>
            정식 런칭 시 가장 먼저 초대장을 발송해 드리겠습니다.
          </p>
        </div>
      </div>

    </div>
  );
}