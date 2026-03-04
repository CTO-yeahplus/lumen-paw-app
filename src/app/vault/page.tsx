"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";

export default function VaultPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"vault" | "collection">("vault");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);

  const [displayImage, setDisplayImage] = useState<string>("/images/model_01.png");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");

  // 🍏 고객용 QR 스캐너 상태 관리
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const storedImg = sessionStorage.getItem("lumen_extracted_image");
    if (storedImg) setDisplayImage(storedImg);

    const storedId = sessionStorage.getItem("lumen_asset_id");
    if (storedId) setDisplayId(`ASSET-${storedId.substring(0, 4)}`);

    const storedDate = sessionStorage.getItem("lumen_asset_date");
    if (storedDate) setDisplayDate(storedDate);
  }, []);

  const concepts = {
    dogwick: { id: "dogwick", name: "Dog Wick (독윅)", desc: "거칠고 우아한 느와르 컨셉. 현재 완벽한 조명 대비를 위한 AI 렌더링 최적화 중입니다." },
    undercut: { id: "undercut", name: "Under-cut (견생밑컷)", desc: "강화유리 아래에서 포착하는 젤리 발바닥. 초소형견 앵글 마운트 테스트 중입니다." }
  };

  const openWaitlist = (concept: ConceptType) => {
    setSelectedConcept(concept);
    setIsModalOpen(true);
  };

  // 🍏 스캐너 시작 로직
  const startScanner = async () => {
    setIsScanning(true);
    try {
      const html5QrCode = new Html5Qrcode("user-reader");
      scannerRef.current = html5QrCode;
      
      await html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          // 스캔 성공 시
          if (navigator.vibrate) navigator.vibrate(200);
          stopScanner(); // 스캐너 즉시 끄기

          // 🍏 스캔된 URL을 들고 앞서 만든 Claim(웜홀) 페이지로 던져버림!
          router.push(`/claim?source_url=${encodeURIComponent(decodedText)}`);
        },
        (errorMessage) => { /* 인식 중 에러 무시 */ }
      );
    } catch (err) {
      console.error("카메라 시작 실패:", err);
      alert("카메라 권한을 허용해주세요.");
      setIsScanning(false);
    }
  };

  // 🍏 스캐너 중지 로직
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        scannerRef.current?.clear();
        setIsScanning(false);
      }).catch(console.error);
    } else {
      setIsScanning(false);
    }
  };

  // 언마운트 시 방어 코드
  useEffect(() => {
    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [isScanning]);


  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-24 overflow-x-hidden font-sans relative">
      
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">
            {activeTab === "vault" ? "Private Vault" : "LUMEN Muse"}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight transition-all">
            {activeTab === "vault" ? "My Masterpieces" : "The Collection"}
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold shadow-lg">CJ</div>
      </header>

      {/* Tab 1: Private Vault */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold tracking-wide">Latest Capture</h3>
            <span className="text-blue-500 text-xs font-bold bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-500/20">New</span>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale" 
                style={{ backgroundImage: `url('${displayImage}')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">#Warm_Ivory</span>
              </div>
              <div className="absolute bottom-8 left-6">
                <h3 className="text-3xl font-extrabold tracking-tighter mb-1 text-white">{displayId}</h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium">Synced · {displayDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Archives */}
        <div className="px-6 py-4 border-t border-zinc-900 mt-4">
          <h3 className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Archives</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden relative border border-zinc-800 bg-zinc-900">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('/images/model_02.png')" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <div className="text-white text-xs font-bold">25.12.24</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab 2: The Collection */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "collection" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="flex flex-col gap-8 px-6 py-6 pt-4">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-square w-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_02.png')" }} />
            <div className="p-5 flex justify-between items-center bg-black">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest text-orange-500">Dog Wick</p>
              <button onClick={() => openWaitlist(concepts.dogwick)} className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full active:scale-95 transition-transform">이 컨셉 예약하기</button>
            </div>
          </div>
        </div>
      </div>

      {/* 🍏 고객용 풀스크린 스캐너 오버레이 (HUD) */}
      <div className={`fixed inset-0 z-[200] bg-black flex flex-col transition-transform duration-500 ease-in-out ${isScanning ? "translate-y-0" : "translate-y-full pointer-events-none"}`}>
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-10">
          <h2 className="text-white font-bold tracking-widest uppercase text-xs">Sync New Asset</h2>
          <button onClick={stopScanner} className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center text-white border border-zinc-700">
            ✕
          </button>
        </div>
        
        {/* 카메라 뷰 */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
          <div id="user-reader" className={`w-full h-full max-h-[80vh] ${!isScanning && 'hidden'}`}></div>
          
          {/* 스캐너 가이드라인 UI */}
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
            <div className="w-[250px] h-[250px] border-2 border-white/50 rounded-3xl relative">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-blue-500 rounded-tr-xl"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-blue-500 rounded-bl-xl"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-blue-500 rounded-br-xl"></div>
              {isScanning && <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-[scan_2s_ease-in-out_infinite]" />}
            </div>
            <p className="text-white mt-10 text-sm font-bold bg-black/50 px-6 py-3 rounded-full backdrop-blur-md">
              인화지의 QR 코드를 스캔하십시오
            </p>
          </div>
        </div>
      </div>

      {/* Global Bottom Nav (스캐너 버튼 추가) */}
      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center px-8 z-30 pb-safe">
        <button onClick={() => setActiveTab("vault")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          <span className="text-[9px] font-bold tracking-wider">VAULT</span>
        </button>
        
        {/* 🍏 Center FAB (Floating Action Button) - 스캐너 켜기 */}
        <button 
          onClick={startScanner}
          className="relative -top-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10" rx="1"></rect></svg>
        </button>

        <button onClick={() => setActiveTab("collection")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "collection" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          <span className="text-[9px] font-bold tracking-wider">MUSE</span>
        </button>
      </nav>

      <WaitlistModal isOpen={isModalOpen} concept={selectedConcept} onClose={() => setIsModalOpen(false)} />

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