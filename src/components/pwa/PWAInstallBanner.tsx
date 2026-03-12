"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // 🍏 Next.js 이미지 컴포넌트 임포트
import { X } from "lucide-react";

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // 1. iOS Safari 감지
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // 2. Android/Chrome 등에서 보내는 기본 설치 팝업 가로채기
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault(); // 기본 팝업 차단
      setDeferredPrompt(e); // 이벤트 저장
      
      // Vault(금고) 진입 후 3초 뒤에 우아하게 배너 노출
      setTimeout(() => setShowBanner(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // iOS 전용 수동 안내 (PWA 모드가 아닐 때만)
    if (isIosDevice && !window.matchMedia('(display-mode: standalone)').matches) {
      setTimeout(() => setShowBanner(true), 3000);
    }

    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // 저장해둔 프로세스 실행
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      // iOS 고객을 위한 컨시어지 안내
      alert("Safari 하단의 [공유] 아이콘을 누른 후, [홈 화면에 추가]를 선택해 주십시오.");
    }
  };

  if (!showBanner) return null;

  return (
    // 하단 탭바(BottomNav) 위에 뜨도록 bottom-28 설정
    <div className="fixed bottom-28 left-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700 pointer-events-auto">
      <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-4">
          {/* 💎 글자 'P' 대신 실제 다크 모드 앱 아이콘을 사용합니다. */}
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-zinc-800 shrink-0 overflow-hidden">
            <Image 
              src="/icons/icon-192x192_dark.png" // public 폴더 기준 경로
              alt="Pawtrait Edition Icon"
              width={40} // w-10 = 40px
              height={40} // h-10 = 40px
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs font-bold text-white tracking-wide">PAWTRAIT EDITION</h4>
            <p className="text-[10px] text-zinc-400">홈 화면에 프라이빗 갤러리 추가</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleInstallClick}
            className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-transform active:scale-95 shadow-md"
          >
            Add
          </button>
          <button 
            onClick={() => setShowBanner(false)}
            className="text-zinc-600 hover:text-white p-1 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}