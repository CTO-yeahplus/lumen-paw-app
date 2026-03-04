"use client";
import { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function AdminSenderPage() {
  const [phone, setPhone] = useState("");
  const [assetId, setAssetId] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  
  // 🍏 QR 스캐너 상태 관리
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  // 🍏 QR 스캔 성공 시 실행될 마법의 함수
  const onScanSuccess = (decodedText: string) => {
    try {
      // 스캐너 중지 및 비프음(진동) 피드백
      stopScanner();
      if (navigator.vibrate) navigator.vibrate(200);

      // 1. 인생네컷 URL인지 확인
      if (decodedText.includes("download.life4cut.net")) {
        const urlObj = new URL(decodedText);
        const folderPath = urlObj.searchParams.get("folderPath") || "";
        const extractedId = folderPath.split("/").pop() || "";
        
        // 2. Asset ID 파싱 후 폼에 자동 입력 (앞 8자리 절사)
        const finalId = extractedId.substring(0, 8).toUpperCase();
        setAssetId(finalId);
      } else {
        // 알 수 없는 QR일 경우 그대로 입력
        setAssetId(decodedText);
      }
    } catch (error) {
      console.error("QR 파싱 에러:", error);
      alert("유효하지 않은 QR 코드입니다.");
    }
  };

  // 스캐너 시작
  const startScanner = async () => {
    setIsScanning(true);
    try {
      const html5QrCode = new Html5Qrcode("reader");
      scannerRef.current = html5QrCode;
      
      await html5QrCode.start(
        { facingMode: "environment" }, // 후면 카메라 우선
        { fps: 10, qrbox: { width: 250, height: 250 } },
        onScanSuccess,
        (errorMessage) => { /* 인식 중 에러는 무시 (계속 탐색함) */ }
      );
    } catch (err) {
      console.error("카메라 시작 실패:", err);
      alert("카메라 권한을 허용해주세요.");
      setIsScanning(false);
    }
  };

  // 스캐너 중지
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        scannerRef.current?.clear();
        setIsScanning(false);
      }).catch(err => console.error(err));
    } else {
      setIsScanning(false);
    }
  };

  // 컴포넌트 언마운트 시 카메라 끄기 방어 코드
  useEffect(() => {
    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [isScanning]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return alert("전화번호를 정확히 입력해주세요.");
    if (!assetId) return alert("Asset ID를 입력하거나 스캔해주세요.");
    
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setPhone(""); 
      setAssetId("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1000);
  };

  return (
    <main className="w-full min-h-[100dvh] bg-zinc-950 text-white flex flex-col font-sans pb-10">
      
      <header className="bg-black border-b border-zinc-800 p-6 pt-12 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-1">Casting Director Only</div>
            <h1 className="text-xl font-bold">LUMEN Quick Sender</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 flex flex-col justify-center max-w-md mx-auto w-full">
        
        {/* 🍏 QR Scanner Area */}
        <div className="mb-6">
          <div className={`relative overflow-hidden bg-black border border-zinc-800 rounded-3xl transition-all duration-500 ${isScanning ? 'h-[350px] shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'h-20'}`}>
            
            {/* 스캐너 UI가 렌더링될 div */}
            <div id="reader" className={`w-full h-full ${!isScanning && 'hidden'}`}></div>
            
            {/* 스캔 라인 애니메이션 (HUD 효과) */}
            {isScanning && (
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-[scan_2s_ease-in-out_infinite]" />
            )}

            {/* 스캐너 켜기/끄기 토글 버튼 */}
            {!isScanning ? (
              <button 
                onClick={startScanner}
                className="w-full h-full flex items-center justify-center gap-3 text-blue-400 font-bold hover:bg-zinc-900 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                카메라 켜기 (인화지 QR 스캔)
              </button>
            ) : (
              <button 
                onClick={stopScanner}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold border border-zinc-700"
              >
                스캔 취소
              </button>
            )}
          </div>
        </div>

        {/* 🍏 Sender Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">
          {/* 스캔 완료 시 반짝이는 효과 */}
          <div className={`absolute inset-0 border-2 border-blue-500 rounded-3xl pointer-events-none transition-opacity duration-1000 ${assetId && !isScanning ? 'opacity-100' : 'opacity-0'}`} />

          <form onSubmit={handleSend} className="space-y-5 relative z-10">
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">1. Asset ID (사진 고유번호)</label>
                {assetId && <span className="text-blue-400 text-[10px] font-bold">✔ SCANNED</span>}
              </div>
              <input 
                type="text" 
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)}
                placeholder="QR 스캔 시 자동 입력됩니다"
                className={`w-full bg-black border ${assetId ? 'border-blue-500/50 text-blue-400' : 'border-zinc-700 text-white'} rounded-xl h-14 px-4 font-mono text-lg focus:outline-none transition-colors`}
                required
              />
            </div>

            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">2. 고객 전화번호 (- 제외)</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01012345678"
                className="w-full bg-black border border-zinc-700 text-white rounded-xl h-14 px-4 text-xl tracking-wider focus:outline-none focus:border-[#FEE500] transition-colors"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className={`w-full h-16 mt-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                status === "success" 
                  ? "bg-green-500 text-black" 
                  : "bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 active:scale-[0.98]"
              }`}
            >
              {status === "idle" && (
                <>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3C6.477 3 2 6.58 2 11c0 2.825 1.763 5.3 4.417 6.81l-1.127 4.125c-.062.227.195.404.382.268l4.757-3.15c.504.062 1.028.097 1.571.097 5.523 0 10-3.58 10-8s-4.477-8-10-8z"/></svg>
                  알림톡 발송하기
                </>
              )}
              {status === "sending" && <span className="animate-pulse">발송 중...</span>}
              {status === "success" && "발송 완료!"}
            </button>
          </form>
        </div>

      </div>

      {/* 스캔 애니메이션 CSS 추가 */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </main>
  );
}