"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; initial: string } | null>(null);

  // 🍏 모달이 열릴 때마다 최신 유저 정보를 가져옵니다
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

  // 🍏 완벽한 로그아웃(Sign Out) 처리
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      
      // 로그아웃 완료 시 임시 저장된 사진 데이터도 날려버림 (보안)
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      
      // 첫 화면(로그인/클레임)으로 쫓아냄
      router.push("/"); 
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("로그아웃 중 문제가 발생했습니다.");
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[150] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 다크 블러 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => !isLoggingOut && onClose()}
      />
      
      {/* 프로필 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
        
        {/* 🍏 VIP ID 카드 UI */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 mb-8 relative overflow-hidden">
          {/* 장식용 빛 반사 효과 */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {userData?.initial || "V"}
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-1">
                LUMEN Black Member
              </div>
              <h3 className="text-xl font-bold text-white mb-0.5">{userData?.name}</h3>
              <p className="text-xs text-zinc-400">{userData?.email}</p>
            </div>
          </div>
        </div>

        {/* 🍏 메뉴 리스트 */}
        <div className="space-y-2 mb-8">
          <button className="w-full flex justify-between items-center p-4 bg-black border border-zinc-800 rounded-2xl text-sm font-bold text-white hover:bg-zinc-900 transition-colors">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>원본 다운로드 내역</span>
            </div>
            <span className="text-zinc-600">준비 중</span>
          </button>
          <button className="w-full flex justify-between items-center p-4 bg-black border border-zinc-800 rounded-2xl text-sm font-bold text-white hover:bg-zinc-900 transition-colors">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>나의 예약 대기열 (Waitlist)</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* 로그아웃 버튼 */}
        <button 
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full h-14 bg-zinc-900 text-red-400 border border-zinc-800 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors active:scale-[0.98]"
        >
          {isLoggingOut ? "보안 연결 해제 중..." : "안전하게 로그아웃"}
        </button>
      </div>
    </div>
  );
}