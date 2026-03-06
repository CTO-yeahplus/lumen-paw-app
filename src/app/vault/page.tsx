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
import BottomNav from "@/components/navigation/BottomNav";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function VaultPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  
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

  // 🍏 카메라 작동 로직
  const onScanSuccess = (decodedText: string) => {
    // 1. 스캔 성공 시 즉시 카메라 끄기 & 진동 피드백
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        scannerRef.current?.clear();
        setIsScanning(false);
      }).catch(console.error);
    }
    if (navigator.vibrate) navigator.vibrate(200);

    // 2. 올바른 인생네컷 QR인지 검증 후 웜홀(Claim)로 이동
    if (decodedText.includes("download.life4cut.net")) {
      router.push(`/claim?source_url=${encodeURIComponent(decodedText)}`);
    } else {
      alert("LUMEN과 호환되지 않는 QR 코드입니다.");
    }
  };

  useEffect(() => {
    if (isScanning) {
      const html5QrCode = new Html5Qrcode("vault-scanner");
      scannerRef.current = html5QrCode;
      html5QrCode.start(
        { facingMode: "environment" }, // 후면 카메라 
        { fps: 15, qrbox: { width: 250, height: 250 } },
        onScanSuccess,
        () => {} // 인식 중 에러는 무시
      ).catch(err => {
        console.error(err);
        alert("카메라 권한을 허용해주십시오.");
        setIsScanning(false);
      });
    } else {
      // isScanning이 false가 되면 카메라를 안전하게 끕니다.
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    }
    
    // 컴포넌트가 꺼질 때 메모리 누수 방지
    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [isScanning]);

  // 🍏 신규: 컴포넌트가 로드될 때 주소창의 꼬리표(?tab=...)를 확인하여 탭을 강제 이동시킵니다.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    
    if (tab === "editorial") {
      setActiveTab("editorial");
    } else if (tab === "muse") {
      setActiveTab("muse");
    }
    
    // 탭 이동 후에는 주소창을 깔끔하게 정리해줍니다 (선택 사항)
    if (tab) {
      window.history.replaceState(null, '', '/vault');
    }
  }, []);

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

      {/* 🍏 풀스크린 QR 스캐너 뷰파인더 */}
      {isScanning && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
          <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-10">
            <div>
              <h2 className="text-white font-bold tracking-widest text-sm uppercase">Scan Masterpiece</h2>
              <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase mt-1">LUMEN Vision Sensor</p>
            </div>
            <button 
              onClick={() => setIsScanning(false)} 
              className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-white active:scale-95"
            >
              ✕
            </button>
          </div>
          
          <div className="relative w-full max-w-sm aspect-square rounded-[40px] overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            {/* 실제 카메라 화면이 렌더링 될 공간 */}
            <div id="vault-scanner" className="w-full h-full object-cover bg-zinc-950"></div>
            
            {/* 뷰파인더 스캔 애니메이션 (HUD 효과) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_20px_#ffffff] animate-[scan_2s_ease-in-out_infinite]" />
            <div className="absolute inset-0 border-[4px] border-white/20 rounded-[40px] pointer-events-none" />
          </div>
          
          <p className="mt-12 text-zinc-400 text-xs tracking-widest uppercase font-mono">
            인화지 상단의 QR 코드를 인식하십시오
          </p>
          
          <style jsx global>{`
            /* 🍏 1. 스캐너 컨테이너의 기본 잡음(테두리 등) 제거 */
            #vault-scanner {
              width: 100% !important;
              height: 100% !important;
              border: none !important;
            }
            
            /* 🍏 2. 내부 렌즈(비디오)가 1:1 영역을 꽉 채우도록 강제 (블랙바 제거) */
            #vault-scanner video {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important; /* 남는 공간 없이 꽉 채우고 넘치면 자름 */
            }

            /* 🍏 3. 스캔 바 애니메이션 */
            @keyframes scan {
              0% { top: 0; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          `}</style>
        </div>
      )}

      {/* 🍏 네비게이션 모듈화 적용 */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onScanClick={() => setIsScanning(true)} 
      />

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}