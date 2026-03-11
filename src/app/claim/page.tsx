"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LoginModal from "@/components/modals/LoginModal";
import Image from "next/image"; // 🍏 파일 맨 위에 추가

function ClaimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get("source_url");

  // 데이터 상태
  const [images, setImages] = useState<string[]>([]);
  const [colorChips, setColorChips] = useState<string[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0]);
  
  // 폼 상태
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");

  // 💎 [방어막 1] 생년월일 자동 포맷팅 (YYYY.MM.DD)
  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자만 남기고 다 지웁니다.
    let val = e.target.value.replace(/[^0-9]/g, '');
    
    // 길이에 맞춰 자동으로 마침표(.)를 찍어줍니다.
    if (val.length > 4 && val.length <= 6) {
      val = val.slice(0, 4) + '.' + val.slice(4);
    } else if (val.length > 6) {
      val = val.slice(0, 4) + '.' + val.slice(4, 6) + '.' + val.slice(6, 8);
    }
    setPetBirthDate(val);
  };

  // 💎 [방어막 2] 필수 입력 검증 (이름과 생일 10자리가 꽉 차야만 true)
  const isFormValid = petName.trim().length > 0 && petBirthDate.length === 10;

  // UI 상태
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // 1. 게이트 검문: 로그인 확인 및 데이터 추출
  useEffect(() => {
    const checkAuthAndExtract = async () => {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      // 로그인이 안 되어 있다면, 현재 딥링크 주소를 티켓으로 쥐여주고 모달을 엽니다.
      if (!session) {
        sessionStorage.setItem("lumen_redirect_after_login", window.location.href);
        setIsLoading(false);
        setIsLoginModalOpen(true);
        return; 
      }

      // 로그인이 되어 있다면 QR URL 확인 후 추출 API 호출
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

  // 2. 사진 다중 선택 로직
  const toggleSelection = (idx: number) => {
    if (selectedIndexes.includes(idx)) {
      if (selectedIndexes.length === 1) return; // 최소 1장은 선택해야 함
      setSelectedIndexes(selectedIndexes.filter(i => i !== idx));
    } else {
      setSelectedIndexes([...selectedIndexes, idx]);
    }
  };

  // 3. 마스터피스 금고 영구 저장 로직
  const handleSaveToVault = async () => {
    if (images.length === 0 || selectedIndexes.length === 0 || !isFormValid) return;
    setIsSaving(true);
    
    const selectedImages = selectedIndexes.map(i => images[i]);
    const dominantColor = colorChips.length > 0 ? colorChips[0] : "#ffffff";

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("세션이 만료되었습니다. 다시 로그인해 주십시오.");
        router.push("/");
        return;
      }

      // 💎 DB에 완벽하게 꽂아 넣습니다.
      const { error } = await supabase.from('masterpieces').insert({
        user_id: user.id,
        source_url: sourceUrl,
        images: selectedImages,
        color_palette: colorChips,
        dominant_color: dominantColor,
        pet_name: petName || "UNKNOWN",
        pet_birth_date: petBirthDate || "202X.XX.XX"
      });

      if (error) throw error;

      // 💎 완벽하게 저장되면 금고 화면으로 리다이렉트
      //router.push("/vault");
      
      // 💎 [수정 후] 현재의 /claim 방문 기록을 /vault로 덮어씌워 버립니다!
      router.replace("/vault");
      
    } catch (error: any) {
      alert(`저장에 실패했습니다: ${error.message}`);
      setIsSaving(false);
    }
  };

  // UI 분기 1: 로딩 중
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] text-zinc-500 tracking-[0.3em] font-bold animate-pulse">VERIFYING VIP MEMBERSHIP...</p>
      </div>
    );
  }

  // UI 분기 2: 에러 발생 (로그인 모달이 안 떠있을 때만)
  if (errorMsg && !isLoginModalOpen) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-zinc-400 p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <p className="text-sm font-light tracking-wide">{errorMsg}</p>
        <button onClick={() => router.push('/vault')} className="mt-8 px-6 py-2 border border-zinc-800 rounded-full text-xs hover:bg-white hover:text-black transition-colors">
          Return to Vault
        </button>
      </div>
    );
  }

  // 메인 UI: 로그인 모달 또는 추출 결과 화면
  return (
    <div className="min-h-screen bg-black text-white relative">
      
      {/* 🍏 로그인 모달 (세션이 없을 때 화면 정중앙에 뜹니다) */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => router.push("/vault")} 
        isFromQR={true} 
      />

      {/* 🍏 로그인이 완료되고 데이터가 성공적으로 뽑혔을 때의 화면 */}
      {!isLoginModalOpen && images.length > 0 && (
        <div className="p-6 pb-40 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <header className="mb-10 text-center pt-8">
            <h2 className="text-[9px] text-zinc-500 font-bold tracking-[0.4em] uppercase mb-2">아카이브 준비 완료</h2>
            <h1 className="text-3xl font-serif font-bold tracking-tight">ORIGINAL</h1>
            <p className="text-xs text-zinc-400 font-light mt-3">내 갤러리에 소장할 아름다운 순간을 선택해 주십시오.</p>
          </header>

          {/* 강아지 프로필 입력 폼 */}
          <div className="mb-10 space-y-5 bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 backdrop-blur-md relative overflow-hidden">
            {/* 럭셔리한 필수 입력 강조 이펙트 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50"></div>
            
            <h3 className="flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> 프로필
              </span>
              <span className="text-red-500/70 text-[8px] tracking-widest bg-red-500/10 px-2 py-0.5 rounded-sm">REQUIRED</span>
            </h3>
            
            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-zinc-500 tracking-widest ml-1">이름 NAME</label>
              <input 
                type="text" 
                value={petName} 
                onChange={(e) => setPetName(e.target.value)}
                placeholder="반려동물의 이름 (ex. MAX)"
                maxLength={20}
                className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-zinc-500 tracking-widest ml-1">생일 BORN DATE</label>
              <input 
                type="text" 
                value={petBirthDate} 
                onChange={handleBirthDateChange} // 🍏 스마트 마스킹 함수 연결
                placeholder="YYYYMMDD (숫자만 입력 )"
                maxLength={10} // 10자리까지만 입력 가능
                className={`w-full bg-black/50 border rounded-2xl px-5 py-4 text-sm text-white focus:outline-none transition-colors placeholder:text-zinc-600 font-mono ${petBirthDate.length > 0 && petBirthDate.length < 10 ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-800 focus:border-white'}`}
              />
              {petBirthDate.length > 0 && petBirthDate.length < 10 && (
                <p className="text-red-500/70 text-[8px] pl-2 mt-1 tracking-wider">정확한 연월일 8자리를 입력해주십시오.</p>
              )}
            </div>
          </div>

          {/* 사진 선택 그리드 */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {images.map((imgUrl, idx) => {
              const isSelected = selectedIndexes.includes(idx);
              return (
                <div 
                  key={idx} 
                  onClick={() => toggleSelection(idx)} 
                  className={`aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border transition-all duration-300 relative cursor-pointer group ${isSelected ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' : 'border-zinc-800 opacity-60 hover:opacity-100'}`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center z-20 shadow-lg">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm z-10 text-[8px] font-mono tracking-widest text-zinc-300">
                    IMG_{String(idx + 1).padStart(2, '0')}
                  </div>
                    <Image 
                    src={imgUrl} 
                    alt={`Extracted ${idx}`} 
                    width={1500} 
                    height={1000} 
                    quality={85} // 화질 85% (육안으로 차이 없으나 용량은 1/10)
                    className="w-full h-full object-cover transition-all duration-700" 
                    />                </div>
              );
            })}
          </div>

          

          {/* 브랜드 컬러 팔레트 */}
          {colorChips.length > 0 && (
            <div className="pt-8 border-t border-zinc-900/50">
              <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-6 text-center">Color Palette</h3>
              <div className="flex flex-wrap justify-center gap-5">
                {colorChips.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                    <div 
                      className="w-10 h-10 rounded-full border border-zinc-700 shadow-lg group-hover:scale-110 transition-transform duration-500" 
                      style={{ backgroundColor: color }} 
                    />
                    <span className="text-[8px] font-mono text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 💎 하단 고정 저장 버튼 (조건 미충족 시 비활성화) */}
          <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none">
            <button 
              onClick={handleSaveToVault} 
              disabled={isSaving || !isFormValid} // 🍏 폼이 완성되지 않으면 버튼 클릭 불가
              className={`w-full h-16 font-bold text-[11px] tracking-[0.2em] uppercase rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all pointer-events-auto 
                ${isFormValid && !isSaving 
                  ? 'bg-white text-black active:scale-[0.98]' 
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }
              `}
            >
              {isSaving ? "Securing Data..." : !isFormValid ? "Complete Profile to Save" : `Add ${selectedIndexes.length} Assets to Vault`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 💎 Vercel 배포를 무사히 통과하기 위한 최상위 Suspense 래퍼
export default function ClaimPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] tracking-[0.3em] text-zinc-500 font-bold animate-pulse uppercase">Opening Secure Link...</p>
      </div>
    }>
      <ClaimContent />
    </Suspense>
  );
}