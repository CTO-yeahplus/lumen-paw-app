"use client";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter();

  const handleLogin = () => {
    // 실제 구현 시 여기서 Auth 처리를 진행합니다.
    router.push("/vault");
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 다크 블러 배경 */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      
      {/* 로그인 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}>
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-8" />
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">마스터피스가<br/>준비되었습니다.</h2>
          <p className="text-zinc-400 text-sm">로그인하여 디지털 금고를 열어주십시오.</p>
        </div>

        <div className="space-y-3">
          {/* Kakao Login */}
          <button onClick={handleLogin} className="w-full bg-[#FEE500] text-[#191919] h-14 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 3C6.477 3 2 6.58 2 11c0 2.825 1.763 5.3 4.417 6.81l-1.127 4.125c-.062.227.195.404.382.268l4.757-3.15c.504.062 1.028.097 1.571.097 5.523 0 10-3.58 10-8s-4.477-8-10-8z"/></svg>
            카카오톡으로 1초 로그인
          </button>

          {/* Google Login */}
          <button onClick={handleLogin} className="w-full bg-zinc-900 text-white border border-zinc-800 h-14 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google 계정으로 계속하기
          </button>
        </div>
        <p className="text-center text-zinc-600 text-[10px] mt-6">가입 시 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</p>
      </div>
    </div>
  );
}