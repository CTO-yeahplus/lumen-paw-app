"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { supabase } from "@/lib/supabase";

// 🍏 모듈화된 하이엔드 컴포넌트들 수입
import CheckoutModal, { CheckoutItem } from "@/components/modals/CheckoutModal";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";
import LumenCustomSection from "@/components/vault/LumenCustomSection";
import MuseTab from "@/components/vault/MuseTab";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function VaultPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"vault" | "collection">("vault");

  // 데이터 상태
  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  const [dominantColor, setDominantColor] = useState<string>("");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  const [userInitial, setUserInitial] = useState<string>("V");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);

  // 모달 및 스캐너 상태
  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);
  const [manualLink, setManualLink] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  // 🍏 완벽한 DB Data Fetching 로직 (SessionStorage 완전 제거)
  useEffect(() => {
    const fetchAllVaultData = async () => {
      setIsLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsLoading(false);
        return; 
      }

      // 1. 유저 프로필(이니셜) 세팅
      setUserInitial((user.user_metadata?.full_name || user.email || "V").substring(0, 1).toUpperCase());

      // 2. 고객의 최신 마스터피스 DB에서 끌어오기
      const { data: mpData, error: mpError } = await supabase
        .from('masterpieces')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!mpError && mpData && mpData.length > 0) {
        const latestAsset = mpData[0];
        const imgs = latestAsset.images || [];
        
        setVaultImages(imgs);
        if (imgs.length > 0) setDisplayImage(imgs[0]);
        setDominantColor(latestAsset.dominant_color || "#ffffff");
        setDisplayId(`ASSET-${latestAsset.id.substring(0, 4).toUpperCase()}`);
        
        // 날짜 포맷팅 (YYYY.MM.DD)
        const dateObj = new Date(latestAsset.created_at);
        setDisplayDate(`${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`);
      }

      // 3. 에디토리얼(잡지) 데이터 끌어오기
      const { data: edData } = await supabase.from("editorials").select("*").order("created_at", { ascending: false }).limit(2);
      if (edData) setEditorials(edData);

      setIsLoading(false);
    };

    fetchAllVaultData();
  }, []);

  const handleInjectLink = () => {
    if (!manualLink || !manualLink.includes("chemistry")) return alert("유효하지 않은 URL입니다.");
    router.push(`/claim?source_url=${encodeURIComponent(manualLink)}`);
  };

  const startScanner = async () => { setIsScanning(true); };

  if (isLoading) return <div className="min-h-[100dvh] bg-black flex items-center justify-center text-white text-[10px] tracking-widest animate-pulse">SYNCING VAULT...</div>;

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
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${displayImage}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-6">
                <h3 className="text-3xl font-extrabold tracking-tighter mb-1 text-white">{displayId}</h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium">Synced · {displayDate}</p>
              </div>
            </div>
          </div>

          {vaultImages.length > 1 && (
            <div className="flex gap-3 mt-6 overflow-x-auto scrollbar-hide py-2 px-1">
              {vaultImages.map((imgUrl, i) => (
                <div key={i} onClick={() => setDisplayImage(imgUrl)} className={`w-14 h-14 rounded-xl border-2 shrink-0 bg-cover bg-center cursor-pointer transition-all ${displayImage === imgUrl ? 'border-white grayscale-0 scale-110' : 'border-zinc-800 opacity-50 grayscale'}`} style={{backgroundImage: `url('${imgUrl}')`}} />
              ))}
            </div>
          )}

          {/* 🍏 압도적으로 분리된 커머스 섹션 컴포넌트 호출 */}
          <LumenCustomSection dominantColor={dominantColor} onCheckout={setCheckoutItem} />
        </div>
      </div>

      {/* 🍏 Tab 2: Muse Tab 모듈화 호출 */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "collection" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <MuseTab editorials={editorials} />
      </div>

      {/* 하단 수동 테스트 Input */}
      {!isScanning && (
        <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
          <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
            <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
            <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
          </div>
        </div>
      )}

      {/* 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center px-8 z-30 pb-safe">
        <button onClick={() => setActiveTab("vault")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg><span className="text-[9px] font-bold tracking-wider">VAULT</span></button>
        <button onClick={startScanner} className="relative -top-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-transform"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect x="7" y="7" width="10" height="10" rx="1"></rect></svg></button>
        <button onClick={() => setActiveTab("collection")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "collection" ? "text-white" : "text-zinc-600"}`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg><span className="text-[9px] font-bold tracking-wider">MUSE</span></button>
      </nav>

      {/* 모달 호출부 */}
      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}