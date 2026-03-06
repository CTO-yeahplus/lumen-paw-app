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

  // 기존 상태들 아래에 추가
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState(""); // 예: 2023.05.12

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

  // 🍏 꼼수(Session)를 버리고 Supabase DB에 완벽하게 영구 저장합니다.
  const handleSaveToVault = async () => {
    if (images.length === 0 || selectedIndexes.length === 0) return;
    
    // 버튼 상태를 로딩으로 바꾸기 위해 상태 하나를 추가하는 것을 권장합니다 (예: setIsSaving(true))
    const selectedImages = selectedIndexes.map(i => images[i]);
    const dominantColor = colorChips.length > 0 ? colorChips[0] : "#ffffff";

    try {
      // 1. 현재 로그인한 VIP 고객의 ID를 확인합니다.
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("로그인 세션이 만료되었습니다.");
        router.push("/");
        return;
      }

      // 2. Supabase DB에 영구 기록합니다.
      const { error } = await supabase.from('masterpieces').insert({
        user_id: user.id,
        source_url: sourceUrl, // S3 원본 URL
        images: selectedImages,
        color_palette: colorChips,
        dominant_color: dominantColor,
        pet_name: petName || "UNKNOWN",
        pet_birth_date: petBirthDate || "202X.XX.XX"
      });

      if (error) throw error;

      // 3. 기록이 완료되면 비로소 금고로 안내합니다.
      router.push("/vault");
      
    } catch (error: any) {
      alert(`금고 저장 실패: ${error.message}`);
    }
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

          {/* 🍏 강아지 정보 입력 폼 */}
            <div className="mt-8 space-y-5 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Companion Profile</h3>
                
                <div>
                <label className="block text-[9px] font-bold text-zinc-400 tracking-widest mb-2">NAME (이름)</label>
                <input 
                    type="text" 
                    value={petName} 
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="강아지 이름을 입력하세요 (ex. MAX)"
                    className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-white focus:border-white transition-colors uppercase"
                />
                </div>

                <div>
                <label className="block text-[9px] font-bold text-zinc-400 tracking-widest mb-2">BIRTH DATE (생년월일)</label>
                <input 
                    type="text" 
                    value={petBirthDate} 
                    onChange={(e) => setPetBirthDate(e.target.value)}
                    placeholder="YYYY.MM.DD (ex. 2021.04.15)"
                    className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-white focus:border-white transition-colors"
                />
                </div>
            </div>

          {/* 🍏 수정됨: Brand Color Palette 화면 이탈 방지 및 다중 배열(Wrap) 적용 */}
          {colorChips.length > 0 && (
            <div className="mb-12 border-t border-zinc-900 pt-8 px-4">
              <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-6 text-center">Brand Color Palette</h3>
              
              {/* flex-wrap을 추가하여 넘치면 아랫줄로 자연스럽게 떨어지게 만듭니다 */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                {colorChips.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    {/* 모바일에서는 w-8(32px), PC에서는 w-10(40px)으로 반응형 크기 조절 */}
                    <div 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-700 shadow-lg shrink-0" 
                      style={{ backgroundColor: color }} 
                    />
                    <span className="text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase">{color}</span>
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