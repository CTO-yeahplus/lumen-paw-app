"use client";
import { useEffect, useRef } from "react";
// 파일 최상단
import { Html5Qrcode } from "html5-qrcode";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (decodedText: string) => void;
}

export default function QRScannerModal({ isOpen, onClose, onScanSuccess }: QRScannerModalProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isScanningRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    // 🍏 모달 애니메이션이 끝난 후, DOM이 완전히 그려진 뒤에 스캐너를 켭니다.
    const timer = setTimeout(() => {
      // 🍏 1. 엔진 조립 (초기화): 복잡한 포맷 설정을 빼고, 가장 순수하고 안정적인 기본 상태로 생성합니다.
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("lumen-qr-reader");
      }

      if (!isScanningRef.current) {
        // 🍏 2. 엔진 시동: 프레임과 렌즈 비율만 하이엔드로 유지합니다.
        scannerRef.current.start(
          { facingMode: "environment" },
          { 
            fps: 10, 
            qrbox: { width: 280, height: 280 }, 
            aspectRatio: 1.0 
          },
          (decodedText) => {
            if (isScanningRef.current) {
              onScanSuccess(decodedText);
            }
          },
          (errorMessage) => { /* 무시 */ }
        ).then(() => {
          isScanningRef.current = true;
        }).catch(err => {
          console.error("카메라 시작 에러:", err);
          alert("카메라 접근 권한을 허용해주십시오.");
          onClose();
        });
      }
    }, 300); // 0.3초 대기

    return () => {
      clearTimeout(timer);
      if (scannerRef.current && isScanningRef.current) {
        scannerRef.current.stop().then(() => {
          scannerRef.current?.clear();
          isScanningRef.current = false;
        }).catch(console.error);
      }
    };
  }, [isOpen, onClose, onScanSuccess]);

  return (
    <div className={`fixed inset-0 z-[200] bg-black transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      
      {/* 헤더 바 */}
      <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-50">
        <div>
          <h2 className="text-white font-bold tracking-widest text-sm uppercase">Scan Masterpiece</h2>
          <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase mt-1">LUMEN Vision Sensor</p>
        </div>
        <button 
          onClick={onClose} 
          className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
        >
          ✕
        </button>
      </div>
      
      {/* 뷰파인더 영역 */}
      <div className="flex flex-col items-center justify-center w-full h-full pt-16">
        <div className="relative w-full max-w-[320px] aspect-square rounded-[40px] overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(255,255,255,0.1)] bg-zinc-950">
          
          {/* 실제 카메라 화면 렌더링 공간 */}
          <div id="lumen-qr-reader" className="w-full h-full"></div>
          
          {/* HUD 스캔 애니메이션 오버레이 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_20px_#ffffff] animate-[scan_2s_ease-in-out_infinite] z-10 pointer-events-none" />
          <div className="absolute inset-0 border-[4px] border-white/20 rounded-[40px] pointer-events-none z-10" />
        </div>
        
        <p className="mt-12 text-zinc-400 text-xs tracking-widest uppercase font-mono px-6 text-center">
          인화지 상단의 QR 코드를 인식하십시오
        </p>
      </div>
      
      {/* 🍏 스캐너 전용 CSS 격리 */}
      <style jsx global>{`
        #lumen-qr-reader {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
        }
        #lumen-qr-reader video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}