"use client";
import { useState, useEffect } from "react";
import LoginModal from "@/components/modals/LoginModal";

export default function ClaimPage() {
  const [isSyncing, setIsSyncing] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSyncing(false);
      setIsLoginModalOpen(true); // 2.5초 뒤 싱크가 끝나면 모달을 띄웁니다.
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-[100dvh] bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* 배경 에셋 (항상 유지) */}
      <div className="absolute inset-0 bg-cover bg-center grayscale scale-105" style={{ backgroundImage: "url('/images/img_04.png')" }} />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Syncing Animation */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ${isSyncing ? "opacity-100" : "opacity-0"}`}>
        <div className="relative w-32 h-32 flex items-center justify-center mb-10">
          <div className="absolute inset-0 border-[3px] border-zinc-800 rounded-full animate-ping opacity-30" />
          <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.6)]" />
        </div>
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-3 text-zinc-300">Synchronizing Vault</h2>
      </div>

      {/* 🍏 분리된 로그인 모달 호출 */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

    </main>
  );
}