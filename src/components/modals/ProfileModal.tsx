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
        </div>
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