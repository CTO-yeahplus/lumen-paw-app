"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { supabase } from "@/lib/supabase";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";

// 🍏 DB에서 불러올 매거진 타입 정의
interface EditorialType {
  id: string;
  slug: string;
  title: string;
  image_url: string;
  content: string;
}

export default function VaultPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"vault" | "collection">("vault");
  
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  const [userInitial, setUserInitial] = useState<string>("V");
  const [scanLog, setScanLog] = useState<string>("렌즈 스탠바이...");

  // 🍏 AI 에디토리얼 상태 추가
  const [editorials, setEditorials] = useState<EditorialType[]>([]);

  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    // 1. 세션 데이터 로드 (고객의 사진)
    const storedImg = sessionStorage.getItem("lumen_extracted_image");
    if (storedImg) setDisplayImage(storedImg);
    const storedId = sessionStorage.getItem("lumen_asset_id");
    if (storedId) setDisplayId(`ASSET-${storedId.substring(0, 4)}`);
    const storedDate = sessionStorage.getItem("lumen_asset_date");
    if (storedDate) setDisplayDate(storedDate);

    // 2. 프로필 로드
    const fetchUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email || "VIP";
        setUserInitial(name.substring(0, 1).toUpperCase());
      }
    };
    fetchUserProfile();

    // 🍏 3. 실시간 매거진 데이터 Fetching (최신 2개)
    const fetchEditorials = async () => {
      const { data } = await supabase
        .from("editorials")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(2);
      
      if (data && data.length > 0) {
        setEditorials(data);
      }
    };
    fetchEditorials();
  }, []);

  const concepts = {
    dogwick: { id: "dogwick", name: "Dog Wick (독윅)", desc: "거칠고 우아한 느와르 컨셉. 현재 완벽한 조명 대비를 위한 AI 렌더링 최적화 중입니다." },
    undercut: { id: "undercut", name: "Under-cut (견생밑컷)", desc: "강화유리 아래에서 포착하는 젤리 발바닥. 초소형견 앵글 마운트 테스트 중입니다." }
  };

  const openWaitlist = (concept: ConceptType) => {
    setSelectedConcept(concept);
    setIsWaitlistModalOpen(true);
  };

  // 🍏 2. 스캐너 로직 (문법 에러 해결 및 해상도 최적화)
  const startScanner = async () => {
    setIsScanning(true);
    setScanLog("카메라 예열 중...");
    
    try {
      setTimeout(async () => {
        const html5QrCode = new Html5Qrcode("user-reader", { verbose: false });
        scannerRef.current = html5QrCode;

        await html5QrCode.start(
          // 🍏 1. 에러 해결: 첫 번째 괄호에는 오직 '후면 카메라'라는 1개의 키만 넣습니다.
          { facingMode: { exact: "environment" }},
          // 🍏 2. 두 번째 괄호(설정값)에 해상도와 스캔 옵션을 분리하여 넣습니다.
          { 
            fps: 10,
            qrbox: { width: 250, height: 250 }, 
            aspectRatio: 1.0,
            videoConstraints: {
              width: { ideal: 1280 },
              height: { ideal: 720 }
            }
          },
          (decodedText) => {
            // ✅ QR 인식 성공 시
            setScanLog("✅ 마스터피스 확인 완료!");
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]); 
            stopScanner();
            router.push(`/claim?source_url=${encodeURIComponent(decodedText)}`);
          },
          (errorMessage) => {
            // 🚨 QR 인식 실패 로그 추적 (정상적인 스캔 과정)
            if (errorMessage.includes("NotFound")) {
              setScanLog("탐색 중... (약 20cm 거리를 유지하세요)");
            } else {
              setScanLog(`분석 중...`);
            }
          }
        );
      }, 300);
    } catch (err: any) {
      setScanLog(`치명적 에러: ${err.message || "카메라 권한 없음"}`);
      alert("카메라 권한을 허용해주세요.");
      setIsScanning(false);
    }
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        scannerRef.current?.clear();
        setIsScanning(false);
      }).catch(console.error);
    } else setIsScanning(false);
  };

  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-24 overflow-x-hidden font-sans relative">
      
      {/* 🍏 Header */}
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">
            {activeTab === "vault" ? "Private Vault" : "LUMEN Muse"}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight transition-all">
            {activeTab === "vault" ? "My Masterpieces" : "The Collection"}
          </h1>
        </div>
        <button onClick={() => setIsProfileModalOpen(true)} className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold shadow-lg hover:bg-zinc-700 transition-colors">
          {userInitial}
        </button>
      </header>

      {/* 🍏 Tab 1: Private Vault */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 py-6">
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900">
              <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${displayImage}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-6">
                <h3 className="text-3xl font-extrabold tracking-tighter mb-1 text-white">{displayId}</h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium">Synced · {displayDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🍏 Tab 2: The Collection (LUMEN Muse) */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "collection" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        
        {/* Waitlist (Dog Wick & Under-cut) */}
        <div className="flex flex-col gap-6 px-6 py-6">
          <h3 className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Upcoming Concepts</h3>
          
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-[4/3] w-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/dogwick_04.jpg')" }} />
            <div className="p-5 flex justify-between items-center bg-black">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest text-orange-500">Dog Wick</p>
              <button onClick={() => openWaitlist(concepts.dogwick)} className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full active:scale-95 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">예약하기</button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-[4/3] w-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/undercut_04.png')" }} />
            <div className="p-5 flex justify-between items-center bg-black border-t border-zinc-900">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest text-purple-500">Under-cut</p>
              <button onClick={() => openWaitlist(concepts.undercut)} className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full active:scale-95 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">예약하기</button>
            </div>
          </div>
        </div>

        {/* 🍏 LUMEN Editorial (DB 실시간 연동) */}
        <div className="px-6 py-10 border-t border-zinc-900 bg-zinc-950">
          <div className="mb-10 text-center">
            <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">LUMEN Editorial</h3>
            <p className="text-zinc-500 text-xs tracking-widest uppercase">The Curated Masterpieces</p>
          </div>
          
          <div className="flex flex-col gap-12">
            {editorials.length > 0 ? (
              // 🍏 DB에 발행된 잡지가 있을 경우 (클릭 시 라우팅 됨)
              editorials.map((edit) => (
                <article 
                  key={edit.id} 
                  className="cursor-pointer group"
                  onClick={() => router.push(`/editorial/${edit.slug}`)}
                >
                  <div className="aspect-[3/4] rounded-sm overflow-hidden relative mb-5 border border-zinc-800/50">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="px-2">
                    <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
                    {/* line-clamp를 사용해 본문은 두 줄까지만 보여주고 자름 */}
                    <p className="text-zinc-400 text-sm leading-relaxed word-break-keep font-light line-clamp-2">
                      {edit.content}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                      <span>Read Editorial</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              // 🍏 DB에 잡지가 하나도 없을 경우 (안전장치 폴백)
              <article className="cursor-pointer group" onClick={() => router.push(`/editorial/the-raw-elegance`)}>
                <div className="aspect-[3/4] rounded-sm overflow-hidden relative mb-5 border border-zinc-800/50">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('/images/img_01.png')" }} />
                </div>
                <div className="px-2">
                  <h4 className="text-white text-lg font-bold tracking-tight mb-2">The Raw Elegance</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed word-break-keep font-light">
                    어둠 속에서 피어나는 우아함. 완벽하게 통제된 빛과 그림자의 경계에서 반려견이 가진 원초적인 카리스마와 기품을 포착합니다.
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>

      {/* 스캐너 오버레이 */}
      <div className={`fixed inset-0 z-[200] bg-black flex flex-col transition-transform duration-500 ease-in-out ${isScanning ? "translate-y-0" : "translate-y-full pointer-events-none"}`}>
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-20">
          <h2 className="text-white font-bold tracking-widest uppercase text-xs">Sync New Asset</h2>
          <button onClick={stopScanner} className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center text-white border border-zinc-700 shadow-lg">✕</button>
        </div>
        
        {/* 스캐너 컨테이너 */}
        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
          
          <div 
            id="user-reader" 
            className={`absolute inset-0 w-full h-full flex items-center justify-center [&_video]:w-full [&_video]:h-full [&_video]:object-cover ${!isScanning && 'hidden'}`}
          ></div>
          
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10">
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
            
            <div className="w-[250px] h-[250px] border-2 border-white/20 rounded-3xl relative z-20">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-2xl"></div>
              {isScanning && <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-[scan_2s_ease-in-out_infinite]" />}
            </div>
            
            {/* 🍏 여기에 실시간 기계 로그(HUD)가 찍힙니다! */}
            <div className="mt-8 flex flex-col items-center z-20">
              <p className="text-white text-[11px] font-bold bg-black/60 px-6 py-3 rounded-full backdrop-blur-md tracking-[0.2em] uppercase mb-2">
                QR 코드를 중앙 사각형에 맞추세요
              </p>
              <p className="text-blue-400 text-[9px] font-mono bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 rounded-full animate-pulse">
                {scanLog}
              </p>
            </div>
          </div>
        </div>
        </div>

      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center px-8 z-30 pb-safe">
        <button onClick={() => setActiveTab("vault")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          <span className="text-[9px] font-bold tracking-wider">VAULT</span>
        </button>
        
        <button onClick={startScanner} className="relative -top-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10" rx="1"></rect></svg>
        </button>

        <button onClick={() => setActiveTab("collection")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "collection" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          <span className="text-[9px] font-bold tracking-wider">MUSE</span>
        </button>
      </nav>

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />

    </main>
  );
}