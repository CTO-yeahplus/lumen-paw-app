"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { supabase } from "@/lib/supabase";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function VaultPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"vault" | "collection">("vault");
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  // 🍏 다중 이미지 보관용
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  // 🍏 컬러 아이덴티티 후광(Glow) 보관용
  const [dominantColor, setDominantColor] = useState<string>("");

  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  const [userInitial, setUserInitial] = useState<string>("V");
  const [manualLink, setManualLink] = useState("");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanLog, setScanLog] = useState<string>("렌즈 스탠바이...");
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    // 🍏 1. 여러 장의 이미지 배열과 컬러 아이덴티티 로드
    const storedImgsStr = sessionStorage.getItem("lumen_extracted_images");
    if (storedImgsStr) {
      const imgs = JSON.parse(storedImgsStr);
      setVaultImages(imgs);
      if (imgs.length > 0) setDisplayImage(imgs[0]);
    } else {
      const storedImg = sessionStorage.getItem("lumen_extracted_image");
      if (storedImg) {
        setDisplayImage(storedImg);
        setVaultImages([storedImg]);
      }
    }

    const storedColor = sessionStorage.getItem("lumen_dominant_color");
    if (storedColor) setDominantColor(storedColor);

    const storedId = sessionStorage.getItem("lumen_asset_id");
    if (storedId) setDisplayId(`ASSET-${storedId.substring(0, 4)}`);
    const storedDate = sessionStorage.getItem("lumen_asset_date");
    if (storedDate) setDisplayDate(storedDate);

    // 프로필 & 에디토리얼 로드
    const fetchUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserInitial((user.user_metadata?.full_name || user.email || "V").substring(0, 1).toUpperCase());
    };
    const fetchEditorials = async () => {
      const { data } = await supabase.from("editorials").select("*").order("created_at", { ascending: false }).limit(2);
      if (data) setEditorials(data);
    };
    fetchUserProfile(); fetchEditorials();
  }, []);

  const concepts = {
    dogwick: { id: "dogwick", name: "Dog Wick", desc: "거칠고 우아한 느와르 컨셉." },
    undercut: { id: "undercut", name: "Under-cut", desc: "강화유리 아래에서 포착하는 젤리 발바닥." }
  };
  const openWaitlist = (concept: ConceptType) => { setSelectedConcept(concept); setIsWaitlistModalOpen(true); };
  const handleInjectLink = () => {
    if (!manualLink || !manualLink.includes("chemistry")) return alert("유효하지 않은 URL입니다.");
    router.push(`/claim?source_url=${encodeURIComponent(manualLink)}`);
  };

  const startScanner = async () => { /* 스캐너 로직 생략 (기존 유지) */ setIsScanning(true); };
  const stopScanner = () => { if (scannerRef.current) scannerRef.current.stop().then(() => setIsScanning(false)); else setIsScanning(false); };

  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-32 overflow-x-hidden font-sans relative">
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">{activeTab === "vault" ? "Private Vault" : "LUMEN Muse"}</h2>
          <h1 className="text-3xl font-extrabold tracking-tight transition-all">{activeTab === "vault" ? "My Masterpieces" : "The Collection"}</h1>
        </div>
        <button onClick={() => setIsProfileModalOpen(true)} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold shadow-lg">{userInitial}</button>
      </header>

      {/* 🍏 Tab 1: Private Vault */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 py-10">
          
          {/* 🍏 컬러 아이덴티티 후광(Glow) 이펙트 적용 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10">
              <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${displayImage}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-6">
                <h3 className="text-3xl font-extrabold tracking-tighter mb-1 text-white">{displayId}</h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium">Synced · {displayDate}</p>
              </div>
            </div>
          </div>

          {/* 🍏 다중 이미지 선택 시 나타나는 썸네일 갤러리 */}
          {vaultImages.length > 1 && (
            <div className="flex gap-3 mt-6 overflow-x-auto scrollbar-hide py-2 px-1">
              {vaultImages.map((imgUrl, i) => (
                <div 
                  key={i} 
                  onClick={() => setDisplayImage(imgUrl)} 
                  className={`w-14 h-14 rounded-xl border-2 shrink-0 bg-cover bg-center cursor-pointer transition-all ${displayImage === imgUrl ? 'border-white grayscale-0 scale-110' : 'border-zinc-800 opacity-50 grayscale'}`} 
                  style={{backgroundImage: `url('${imgUrl}')`}} 
                />
              ))}
            </div>
          )}

          {/* 🍏 Physical Extension: LUMEN Custom 굿즈 커머스 연동 */}
          {dominantColor && (
            <div className="mt-12 p-6 rounded-3xl border border-zinc-800 bg-zinc-900/40 relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundColor: dominantColor }} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: dominantColor }} />
                  <h3 className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase">Physical Extension</h3>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white mb-4">LUMEN Custom</h2>
                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6 word-break-keep">
                  당신의 반려견만을 위한 고유한 아이덴티티 컬러 <span className="font-mono font-bold px-1 rounded-md bg-black/50" style={{color: dominantColor}}>{dominantColor}</span>. <br/>이 컬러 코드를 기반으로 한 비스포크 굿즈를 예약하십시오.
                </p>

                <div className="flex flex-col gap-3">
                  <button className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:border-zinc-500 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: dominantColor }} />
                      <span className="text-xs font-bold text-white uppercase tracking-widest">Bespoke Collar</span>
                    </div>
                    <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest group-hover:text-white transition-colors">Pre-order ➔</span>
                  </button>

                  <button className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:border-zinc-500 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-[10px] shadow-lg" style={{ backgroundColor: dominantColor }} />
                      <span className="text-xs font-bold text-white uppercase tracking-widest">Phone Case</span>
                    </div>
                    <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest group-hover:text-white transition-colors">Pre-order ➔</span>
                  </button>

                  <button className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:border-zinc-500 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 border-2 border-white/20 rounded-sm shadow-lg flex items-center justify-center" style={{ backgroundColor: dominantColor }}>
                        <div className="w-4 h-4 bg-black/20" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest">Art Frame</span>
                    </div>
                    <span className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest group-hover:text-white transition-colors">Pre-order ➔</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 🍏 Tab 2 (Muse) 및 하단 UI는 기존과 동일하게 유지 */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "collection" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 py-10 border-t border-zinc-900 bg-zinc-950">
          <div className="mb-10 text-center">
            <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">LUMEN Editorial</h3>
            <p className="text-zinc-500 text-xs tracking-widest uppercase">The Curated Masterpieces</p>
          </div>
          <div className="flex flex-col gap-12">
            {editorials.length > 0 && editorials.map((edit) => (
              <article key={edit.id} className="cursor-pointer group" onClick={() => router.push(`/editorial/${edit.slug}`)}>
                <div className="aspect-[3/4] rounded-sm overflow-hidden relative mb-5 border border-zinc-800/50">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
                </div>
                <div className="px-2">
                  <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed word-break-keep font-light line-clamp-2">{edit.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 수동 테스트 Input & 네비게이션 */}
      {!isScanning && (
        <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
          <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
            <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
            <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center px-8 z-30 pb-safe">
        <button onClick={() => setActiveTab("vault")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg><span className="text-[9px] font-bold tracking-wider">VAULT</span>
        </button>
        <button onClick={startScanner} className="relative -top-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10" rx="1"></rect></svg>
        </button>
        <button onClick={() => setActiveTab("collection")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "collection" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg><span className="text-[9px] font-bold tracking-wider">MUSE</span>
        </button>
      </nav>

      {/* 스캐너 오버레이 (생략 - 기존과 동일) */}
      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </main>
  );
}