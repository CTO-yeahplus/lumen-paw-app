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

  useEffect(() => {
    if (concept) setDisplayConcept(concept);
    if (!isOpen) {
      const timer = setTimeout(() => setIsSuccess(false), 500);
      return () => clearTimeout(timer);
    }
  }, [concept, isOpen]);

  // 🍏 진짜 데이터베이스(DB)에 Insert 하는 로직
  const handleSubmit = async () => {
    if (!displayConcept) return;
    setIsSubmitting(true);

    try {
      // 1. 현재 로그인한 유저 정보 가져오기
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("로그인이 필요합니다.");
        setIsSubmitting(false);
        return;
      }

      // 2. Supabase DB의 'waitlists' 테이블에 데이터 밀어넣기
      const { error } = await supabase
        .from('waitlists')
        .insert([
          { user_id: user.id, concept_id: displayConcept.id }
        ]);

      if (error) throw error;

      // 3. 성공 시 성공 화면 연출
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 2500);

    } catch (error) {
      console.error("대기열 등록 실패:", error);
      alert("대기열 등록에 실패했습니다. 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => !isSuccess && onClose()} />
      
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-700 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        <div className={`transition-all duration-300 ${isSuccess ? "opacity-0 hidden" : "opacity-100 block"}`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase border border-zinc-700 bg-black px-2 py-1 rounded-full mb-3 inline-block">VIP Waitlist</span>
              <h2 className="text-2xl font-bold text-white mb-2">{displayConcept?.name}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{displayConcept?.desc}</p>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-14 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="animate-pulse">데이터 암호화 및 등록 중...</span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                VIP 우선 예약권 발급받기
              </>
            )}
          </button>
        </div>

        <div className={`flex flex-col items-center justify-center py-8 transition-all duration-300 ${isSuccess ? "opacity-100 block" : "opacity-0 hidden"}`}>
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-4 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">발급이 완료되었습니다.</h3>
          <p className="text-zinc-400 text-sm text-center">정식 런칭 시 가장 먼저 초대장을 보내드리겠습니다.</p>
        </div>

      </div>
    </div>
  );
}