"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { supabase } from "@/lib/supabase";

import CheckoutModal, { CheckoutItem } from "@/components/modals/CheckoutModal";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";
import PrivateVaultTab from "@/components/vault/PrivateVaultTab";
import EditorialTab from "@/components/vault/EditorialTab";
import MuseTab from "@/components/vault/MuseTab";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function VaultPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  // 🍏 탭 상태: Vault(과거), Editorial(현재), Muse(미래) 3단 체제
  const [activeTab, setActiveTab] = useState<"vault" | "editorial" | "muse">("vault");
  
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number>(0);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  const [dominantColor, setDominantColor] = useState<string>("");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  
  const [userInitial, setUserInitial] = useState<string>("V");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);

  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);
  const [manualLink, setManualLink] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const loadAssetToView = (asset: any) => {
    const imgs = asset.images || [];
    setVaultImages(imgs);
    if (imgs.length > 0) setDisplayImage(imgs[0]);
    setDominantColor(asset.dominant_color || "#ffffff");
    setDisplayId(`ASSET-${asset.id.substring(0, 4).toUpperCase()}`);
    const dateObj = new Date(asset.created_at);
    setDisplayDate(`${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`);
  };

  useEffect(() => {
    const fetchAllVaultData = async () => {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsLoading(false);
        return; 
      }
      setUserInitial((user.user_metadata?.full_name || user.email || "V").substring(0, 1).toUpperCase());

      const { data: mpData, error: mpError } = await supabase
        .from('masterpieces')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!mpError && mpData && mpData.length > 0) {
        setMasterpieces(mpData);
        loadAssetToView(mpData[0]);
        setActiveAssetIndex(0);
      }

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

  if (isLoading) return <div className="min-h-[100dvh] bg-black flex items-center justify-center text-white text-[10px] tracking-widest animate-pulse">SYNCING VAULT...</div>;

  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-32 overflow-x-hidden font-sans relative">
      
      {/* 🍏 헤더: 탭에 따라 유동적인 타이틀 제공 */}
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-1">
            {activeTab === "vault" ? "Private Vault" : activeTab === "editorial" ? "LUMEN Magazine" : "The Future Vision"}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {activeTab === "vault" ? "Masterpieces" : activeTab === "editorial" ? "Story" : "Muse"}
          </h1>
        </div>
        <button onClick={() => setIsProfileModalOpen(true)} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold shadow-lg">{userInitial}</button>
      </header>

      {/* 🍏 Tab 1: Vault (나의 기록) */}
      <div className={activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}>
        <PrivateVaultTab 
          masterpieces={masterpieces}
          activeAssetIndex={activeAssetIndex}
          setActiveAssetIndex={setActiveAssetIndex}
          loadAssetToView={loadAssetToView}
          displayImage={displayImage}
          setDisplayImage={setDisplayImage}
          vaultImages={vaultImages}
          dominantColor={dominantColor}
          displayId={displayId}
          displayDate={displayDate}
          onCheckout={setCheckoutItem}
        />
      </div>

      {/* 🍏 Tab 2: Editorial (브랜드 스토리) */}
      <div className={activeTab === "editorial" ? "opacity-100 block" : "opacity-0 hidden"}>
        <EditorialTab editorials={editorials} />
      </div>

      {/* 🍏 Tab 3: Muse (미래의 예약) */}
      <div className={activeTab === "muse" ? "opacity-100 block" : "opacity-0 hidden"}>
        <MuseTab 
          onOpenWaitlist={(concept) => {
            setSelectedConcept(concept);
            setIsWaitlistModalOpen(true);
          }}
        />
      </div>

      {/* 하단 수동 테스트 Input */}
      <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
        <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
          <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
          <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
        </div>
      </div>

      {/* 🍏 네비게이션: 4-버튼 럭셔리 시스템 (Vault, Story, Scanner, Muse) */}
      <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-between items-center px-6 z-30 pb-safe">
        
        <button onClick={() => setActiveTab("vault")} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          <span className="text-[8px] font-bold tracking-widest">VAULT</span>
        </button>

        <button onClick={() => setActiveTab("editorial")} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "editorial" ? "text-white" : "text-zinc-600"}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span className="text-[8px] font-bold tracking-widest">STORY</span>
        </button>

        {/* 중앙 스캐너: 브랜드의 핵심 액션 */}
        <button onClick={() => setIsScanning(true)} className="relative -top-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 transition-transform shrink-0 mx-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
        </button>

        <button onClick={() => setActiveTab("muse")} className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "muse" ? "text-white" : "text-zinc-600"}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 16 12 12 16"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <span className="text-[8px] font-bold tracking-widest">MUSE</span>
        </button>

      </nav>

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}