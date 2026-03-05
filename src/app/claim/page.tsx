"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
// 🍏 LoginModal 컴포넌트를 불러옵니다. (경로가 다르면 수정해주세요)
import LoginModal from "@/components/modals/LoginModal"; 

function ClaimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get("source_url");

  const [images, setImages] = useState<string[]>([]);
  const [colorChips, setColorChips] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0]);

  // 🍏 로그인 모달 표시 여부를 관리하는 상태
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const checkAuthAndExtract = async () => {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // 🚨 쫓아내지 않습니다! 현재 주소를 티켓으로 저장한 뒤, 모달을 바로 띄웁니다.
        sessionStorage.setItem("lumen_redirect_after_login", window.location.href);
        setIsLoading(false);
        setIsLoginModalOpen(true);
        return; // 여기서 로직 정지
      }

      if (!sourceUrl) {
        setErrorMsg("유효한 QR URL이 없습니다.");
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sourceUrl })
        });
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error);

        setImages(data.images || []);
        setColorChips(data.colorChips || []);
      } catch (err: any) {
        setErrorMsg(err.message || "데이터 추출에 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndExtract();
  }, [sourceUrl]);

  const toggleSelection = (idx: number) => {
    if (selectedIndexes.includes(idx)) {
      if (selectedIndexes.length === 1) return;
      setSelectedIndexes(selectedIndexes.filter(i => i !== idx));
    } else {
      setSelectedIndexes([...selectedIndexes, idx]);
    }
  };

  const handleSaveToVault = () => {
    if (images.length > 0 && selectedIndexes.length > 0) {
      const selectedImages = selectedIndexes.map(i => images[i]);
      sessionStorage.setItem("lumen_extracted_images", JSON.stringify(selectedImages));
      sessionStorage.setItem("lumen_extracted_image", selectedImages[0]); 
      
      if (colorChips.length > 0) {
        sessionStorage.setItem("lumen_dominant_color", colorChips[0]); 
        sessionStorage.setItem("lumen_color_palette", JSON.stringify(colorChips)); 
      }

      sessionStorage.setItem("lumen_asset_id", Date.now().toString());
      sessionStorage.setItem("lumen_asset_date", new Date().toISOString().split('T')[0].replace(/-/g, '.'));
    }
    router.push("/vault");
  };

  if (isLoading) return <div className="min-h-screen bg-black flex flex-col items-center justify-center"><div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" /><p className="text-[10px] text-white tracking-[0.3em] font-bold animate-pulse">VERIFYING MEMBERSHIP...</p></div>;
  if (errorMsg && !isLoginModalOpen) return <div className="min-h-screen bg-black flex items-center justify-center text-red-500">{errorMsg}</div>;

  return (
    <div className="min-h-[100dvh] bg-black text-white relative">
      
      {/* 🍏 로그인이 완료되어 모달이 닫혀있을 때만 추출된 화면을 보여줍니다 */}
      {!isLoginModalOpen && images.length > 0 && (
        <div className="p-8 pb-32">
          <header className="mb-10 text-center pt-8">
            <h2 className="text-[10px] text-blue-500 font-bold tracking-[0.4em] uppercase mb-2">Sync Complete</h2>
            <h1 className="text-3xl font-serif font-bold tracking-tight">Select Masterpieces</h1>
            <p className="text-[10px] text-zinc-500 mt-3 tracking-widest">금고에 보관할 사진들을 선택하십시오</p>
          </header>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {images.map((imgUrl, idx) => {
              const isSelected = selectedIndexes.includes(idx);
              return (
                <div key={idx} onClick={() => toggleSelection(idx)} className={`aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border-2 cursor-pointer transition-all duration-300 relative group ${isSelected ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]' : 'border-zinc-800 opacity-50'}`}>
                  {isSelected && (<div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center z-20 shadow-lg"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>)}
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full z-10 text-[8px] font-mono text-zinc-300">IMG_{idx + 1}</div>
                  <img src={imgUrl} alt={`Extracted ${idx}`} className={`w-full h-full object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale'}`} />
                </div>
              );
            })}
          </div>

          {colorChips.length > 0 && (
            <div className="mb-12 border-t border-zinc-900 pt-8">
              <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-4 text-center">Brand Color Palette</h3>
              <div className="flex justify-center gap-4">
                {colorChips.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-zinc-700 shadow-lg" style={{ backgroundColor: color }} />
                    <span className="text-[8px] font-mono text-zinc-500 uppercase">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent z-50">
            <button onClick={handleSaveToVault} className="w-full h-16 bg-white text-black font-extrabold text-[11px] tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 transition-transform">
              Add {selectedIndexes.length} Assets to Vault
            </button>
          </div>
        </div>
      )}

      {/* 🍏 매직 라우팅을 위해 컴포넌트 최상단에 로그인 모달 배치 */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => router.push("/vault")} // 모달 바깥을 눌러 닫으면 일반 금고로 이동
        isFromQR={true} 
      />
    </div>
  );
}

export default function ClaimPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] tracking-[0.3em] font-bold animate-pulse">PREPARING WORMHOLE...</p>
      </div>
    }>
      <ClaimContent />
    </Suspense>
  );
}