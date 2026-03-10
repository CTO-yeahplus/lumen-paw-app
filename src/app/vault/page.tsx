"use client";
import { useState, useEffect, useRef,Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";
import QRScannerModal from "@/components/modals/QRScannerModal";

import CheckoutModal, { CheckoutItem } from "@/components/modals/CheckoutModal";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";
import PrivateVaultTab from "@/components/vault/PrivateVaultTab";
import EditorialTab from "@/components/vault/EditorialTab";
import MuseTab from "@/components/vault/MuseTab";
import BottomNav from "@/components/navigation/BottomNav";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }
type TabType = "vault" | "editorial" | "muse";

function VaultContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  // 🍏 1. 현재 주소('/vault')를 정확히 파악합니다.
  const pathname = usePathname();
  const tabParam = searchParams.get("tab") as TabType | null;
  // 🍏 탭 상태: Vault(과거), Editorial(현재), Muse(미래) 3단 체제
  const [activeTab, setActiveTab] = useState<TabType>(tabParam || "vault");
  
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number>(0);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  const [dominantColor, setDominantColor] = useState<string>("");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  
  const [userInitial, setUserInitial] = useState<string>("V");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);
  const [colorPalette, setColorPalette] = useState<string[]>([]); // 🍏 추가: 팔레트 전체 배열

  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);
  const [manualLink, setManualLink] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [displayPetName, setDisplayPetName] = useState("COMPANION");
  const [displayPetBirth, setDisplayPetBirth] = useState("202X.XX.XX");
  const [userEmail, setUserEmail] = useState<string>(""); // 🍏 추가: 유저 이메일을 담을 바구니

  const loadAssetToView = (asset: any) => {
    const imgs = asset.images || [];
    setVaultImages(imgs);
    if (imgs.length > 0) setDisplayImage(imgs[0]);
    setDominantColor(asset.dominant_color || "#ffffff");
    setDisplayId(`ASSET-${asset.id.substring(0, 4).toUpperCase()}`);
    const dateObj = new Date(asset.created_at);
    setDisplayDate(`${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`);
        
    // 🍏 DB에서 가져온 이름과 생일 세팅
    setDisplayPetName(asset.pet_name || "MY DOG");
    setDisplayPetBirth(asset.pet_birth_date || "UNKNOWN DATE");
    setColorPalette(asset.color_palette || []); // 🍏 추가: DB에서 팔레트를 꺼냅니다
  };

  // 🍏 스캔 성공 시 웜홀 이동 로직 (디버깅 모드)
  const handleScanSuccess = (decodedText: string) => {
    setIsScanning(false); // 모달 닫기
    if (navigator.vibrate) navigator.vibrate(200);

    // 1. 조건 완화: 'life4cut' 이나 'chemistry' 가 포함되어 있으면 무조건 통과
    if (decodedText.includes("life4cut.net") || decodedText.includes("chemistry")) {
      router.push(`/claim?source_url=${encodeURIComponent(decodedText)}`);
    } else {
      // 2. 실패 시 렌즈가 무엇을 보았는지 정확히 출력합니다 (원인 파악용)
      alert(`🚨 렌즈가 인식한 텍스트:\n\n${decodedText}\n\nPAWTRAIT EDITION과 호환되지 않는 QR 코드입니다.`);
    }
  };

  // 🍏 3. 핵심 교정: URL 꼬리표 감지 및 상태 전환
  useEffect(() => {
    if (tabParam) {
      // 1. 정확한 탭으로 화면 전환
      if (tabParam === "editorial") setActiveTab("editorial");
      else if (tabParam === "muse") setActiveTab("muse");
      else setActiveTab("vault");

      // 2. 🍏 [핵심] Next.js 몰래 주소를 바꾸지 않고, 공식 라우터를 통해 부드럽게 꼬리표를 뗍니다.
      // 약간의 딜레이(100ms)를 주어 탭 상태가 완벽히 렌더링된 후 주소창을 청소합니다.
      //const timeout = setTimeout(() => {
      //  router.replace('/vault', { scroll: false });
      //}, 100);

      //return () => clearTimeout(timeout);
    }
  }, [tabParam, router]);

  // 🍏 2. 탭 이동 함수 교정
  const handleTabChange = (newTab: TabType) => {
    setActiveTab(newTab);
    // 💎 [핵심] 그냥 '?tab=muse'가 아니라, '/vault?tab=muse' 형식으로 정확히 꽂아줍니다!
    router.push(`${pathname}?tab=${newTab}`, { scroll: false }); 
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
      setUserEmail(user.email || ""); // 🍏 추가: 로그인한 유저의 이메일을 세팅합니다.

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

      const { data: edData } = await supabase.from("editorials").select("*").order("created_at", { ascending: false });
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
            {activeTab === "vault" ? "Private Vault" : activeTab === "editorial" ? " Magazine" : "The Future Vision"}
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
          setDominantColor={setDominantColor} // 🍏 추가: 색상을 바꿀 수 있는 리모컨
          colorPalette={colorPalette}
          displayId={displayId}
          displayDate={displayDate}
          onCheckout={setCheckoutItem}
          // 🍏 추가됨: 부모가 가진 강아지 이름과 생일을 자식에게 건네줍니다.
          displayPetName={displayPetName}
          displayPetBirth={displayPetBirth}

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

      {/* 🍏 하단 수동 테스트 Input (관리자 전용 은밀한 백도어) */}
      {userEmail === "cto@yeahplus.co.kr" && (
      <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
        <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
          <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
          <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
        </div>
      </div>
      )}

      {/* 🍏 분리된 스캐너 모달 호출 */}
      <QRScannerModal 
        isOpen={isScanning} 
        onClose={() => setIsScanning(false)} 
        onScanSuccess={handleScanSuccess} 
      />

      {/* 🍏 네비게이션 모듈화 적용 */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        onScanClick={() => setIsScanning(true)} 
      />

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} dominantColor={dominantColor}/>
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}

// 💎 [핵심] Vercel의 빌드를 통과하기 위한 최상위 껍데기 (Suspense 대기실 적용)
export default function VaultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-[10px] tracking-widest text-zinc-500 uppercase animate-pulse">
        Opening Private Vault...
      </div>
    }>
      <VaultContent />
    </Suspense>
  );
}