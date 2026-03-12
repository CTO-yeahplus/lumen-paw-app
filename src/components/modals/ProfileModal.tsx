"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import PrivateArchiveModal from "@/components/modals/PrivateArchiveModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  dominantColor: string;
}

export default function ProfileModal({ isOpen, onClose, dominantColor }: ProfileModalProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; initial: string } | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  // 🍏 [추가] 회원 탈퇴 로딩 상태
  const [isDeleting, setIsDeleting] = useState(false);
  // 🍏 [추가] 커스텀 탈퇴 경고창을 제어하는 상태
  const [isExitPromptOpen, setIsExitPromptOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const name = user.user_metadata?.full_name || user.user_metadata?.name || "VIP Member";
          const email = user.email || "No email provided";
          const initial = name.substring(0, 1).toUpperCase();
          setUserData({ name, email, initial });
        }
      };
      fetchUser();
    }
  }, [isOpen]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      router.push("/"); 
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("로그아웃 중 문제가 발생했습니다.");
      setIsLoggingOut(false);
    }
  };

  // 💎 [핵심 수술] 관리자 API를 호출하여 내 갤러리와 데이터를 영구 파기하는 함수
  const handleDeleteAccount = async () => {
    const isConfirmed = window.confirm(
      "정말 PAWTRAIT EDITION 프라이빗 갤러리를 영구 폐쇄하시겠습니까?\n\n소장 중인 모든 마스터피스 데이터가 즉시 파기되며 복구할 수 없습니다."
    );

    if (!isConfirmed) return;

    setIsDeleting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("로그인 정보를 찾을 수 없습니다.");

      // 앞서 만든 관리자 API 호출
      const res = await fetch('/api/auth/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "탈퇴 처리 중 문제가 발생했습니다.");
      }

      // 데이터가 완벽히 지워지면 로그아웃과 동일하게 세션을 지우고 대문으로 쫓아냄
      await supabase.auth.signOut();
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      
      alert("갤러리가 성공적으로 폐쇄되었습니다. 그동안 함께해주셔서 감사합니다.");
      router.push("/"); 

    } catch (err: any) {
      alert(err.message);
      setIsDeleting(false);
    }
  };

  // 💎 1. 버튼을 누르면 브라우저 팝업 대신 우리가 만든 럭셔리 경고창을 엽니다.
  const handleOpenExitPrompt = () => {
    setIsExitPromptOpen(true);
  };

  // 💎 2. 경고창에서 'Confirm'을 눌렀을 때만 실행되는 실제 파기 로직 (window.confirm 제거)
  const executeDeleteAccount = async () => {
    setIsDeleting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("로그인 정보를 찾을 수 없습니다.");

      const res = await fetch('/api/auth/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "탈퇴 처리 중 문제가 발생했습니다.");
      }

      await supabase.auth.signOut();
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      
      alert("갤러리가 성공적으로 폐쇄되었습니다. 그동안 함께해주셔서 감사합니다.");
      router.push("/"); 

    } catch (err: any) {
      alert(err.message);
      setIsDeleting(false);
      setIsExitPromptOpen(false);
    }
  };

  return (
    <>
      {/* 🍏 1. 프로필 바텀 시트 레이어 (z-[150]) */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        
        {/* 다크 블러 배경 (클릭 시 ProfileModal만 닫힘) */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => !isLoggingOut && onClose()}
        />
        
        {/* 프로필 바텀 시트 */}
        <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
          <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
          
          {/* 💎 플래티넘 블랙 카드 UI (Platinum Black Card) */}
          <div className="relative w-full aspect-[1.586/1] rounded-2xl p-6 mb-8 overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-zinc-700/50 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
            {/* 메탈릭 빛 반사 효과 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
            
            {/* 🍏 고객 고유의 아우라 컬러 백라이트 */}
            <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] opacity-40 pointer-events-none" style={{ backgroundColor: dominantColor }} />

            {/* 스마트 IC 칩 디테일 (플래티넘 카드의 시그니처) */}
            <div className="w-10 h-8 border border-zinc-600/50 rounded-md mb-6 flex flex-col justify-between p-1 opacity-70">
              <div className="w-full h-[1px] bg-zinc-600/50" />
              <div className="w-full h-[1px] bg-zinc-600/50" />
              <div className="w-full h-[1px] bg-zinc-600/50" />
            </div>

            {/* 카드 정보 */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-1 drop-shadow-md">
                PAWTRAIT EDITION Black Platinum
                </div>
                <h3 className="text-xl font-serif text-white tracking-widest drop-shadow-md">{userData?.name || "VIP GUEST"}</h3>
              </div>
              
              {/* 카드 우측 하단: 아우라 엠블럼 */}
              <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black/50 backdrop-blur-sm" style={{ borderColor: dominantColor }}>
                <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: dominantColor, color: dominantColor }} />
              </div>
            </div>
          </div>

          {/* 🍏 메뉴 리스트: Private Archive 버튼의 대형화 */}
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => setIsArchiveOpen(true)}
              className="w-full h-16 bg-black border border-zinc-800 hover:border-zinc-500 rounded-2xl flex items-center justify-between px-6 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: dominantColor }} />
                <span className="text-sm font-bold text-white tracking-widest uppercase">Private Archive</span>
              </div>
              <span className="text-[10px] text-zinc-500 tracking-[0.2em] group-hover:text-white transition-colors">Enter &rarr;</span>
            </button>
          </div>

          {/* 로그아웃 버튼 (톤다운하여 럭셔리함 유지) */}
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full h-14 bg-zinc-950 text-zinc-600 border border-zinc-900 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-red-400 transition-colors active:scale-[0.98]"
          >
            {isLoggingOut ? "Disconnecting..." : "Sign Out"}
          </button>

          {/* 우아한 퇴장 버튼 (onClick 함수 변경) */}
          <div className="text-center pt-2">
            <button 
              onClick={handleOpenExitPrompt} // 🍏 변경됨
              disabled={isDeleting || isLoggingOut}
              className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5"
            >
              Close Private Gallery (회원 탈퇴)
            </button>
          </div>
        </div>

        {/* 💎 [핵심 수술] 럭셔리 엑시트 룸 (isExitPromptOpen이 true일 때만 모달 전체를 덮음) */}
        {isExitPromptOpen && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in-95 duration-300">
            {/* 경고 아이콘 */}
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <span className="text-red-500 font-serif italic text-xl">!</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white mb-4 tracking-wide">Gallery Closure</h3>
            
            <p className="text-xs text-zinc-400 text-center leading-relaxed mb-10 tracking-wide">
              정말 PAWTRAIT EDITION 프라이빗 갤러리를<br />영구 폐쇄하시겠습니까?<br /><br />
              <span className="text-red-400 font-bold">소장 중인 모든 마스터피스 데이터가<br />즉시 파기되며 복구할 수 없습니다.</span>
            </p>
            
            <div className="flex gap-3 w-full max-w-[280px]">
              <button 
                onClick={() => setIsExitPromptOpen(false)} 
                disabled={isDeleting}
                className="flex-1 h-12 rounded-xl bg-zinc-900 text-zinc-400 font-bold text-[10px] tracking-widest uppercase hover:bg-zinc-800 hover:text-white transition-colors"
              >
                한번 더 생각하기
              </button>
              <button 
                onClick={executeDeleteAccount} 
                disabled={isDeleting} 
                className="flex-1 h-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 font-bold text-[10px] tracking-widest uppercase hover:bg-red-500 hover:text-white transition-all active:scale-95"
              >
                {isDeleting ? "Processing..." : "회원탈퇴 확인"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 🍏 2. 아카이브 모달 레이어 (z-[200]으로 완전히 분리하여 얼어붙는 버그 원천 차단) */}
      <div className="relative z-[200]">
        <PrivateArchiveModal 
          isOpen={isArchiveOpen} 
          onClose={() => setIsArchiveOpen(false)} 
          dominantColor={dominantColor} 
        />
      </div>
    </>
  );
}