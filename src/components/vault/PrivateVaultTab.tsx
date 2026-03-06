"use client";

import { useState } from "react";
import { CheckoutItem } from "@/components/modals/CheckoutModal";
import LumenCustomSection from "@/components/vault/LumenCustomSection";

interface PrivateVaultTabProps {
  masterpieces: any[];
  activeAssetIndex: number;
  setActiveAssetIndex: (idx: number) => void;
  loadAssetToView: (asset: any) => void;
  displayImage: string;
  setDisplayImage: (url: string) => void;
  vaultImages: string[];
  dominantColor: string;
  displayId: string;
  displayDate: string;
  onCheckout: (item: CheckoutItem) => void;
  displayPetName: string;
  displayPetBirth: string;
}

export default function PrivateVaultTab({
  masterpieces,
  activeAssetIndex,
  setActiveAssetIndex,
  loadAssetToView,
  displayImage,
  setDisplayImage,
  vaultImages,
  dominantColor,
  displayId,
  displayDate,
  onCheckout,
  displayPetName,
  displayPetBirth
}: PrivateVaultTabProps) {
  
  // 🍏 Z축 아카이브 서랍을 열고 닫는 상태
  const [isArchiveSheetOpen, setIsArchiveSheetOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  };

  const currentImgIndex = vaultImages.indexOf(displayImage);

  const handleNextImage = () => {
    if (vaultImages.length <= 1) return;
    const nextIndex = (currentImgIndex + 1) % vaultImages.length;
    setDisplayImage(vaultImages[nextIndex]);
  };

  if (masterpieces.length === 0) {
    return (
      <div className="px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full border border-dashed border-zinc-700 flex items-center justify-center mb-6 text-zinc-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        <h3 className="text-zinc-400 text-lg font-serif mb-2">금고가 비어있습니다</h3>
        <p className="text-zinc-600 text-xs">오프라인 스튜디오에서 스캔하여 마스터피스를 보관하세요.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      
      {/* 1. 메인 디스플레이 */}
      <div 
        className="relative group cursor-pointer transition-all duration-700 active:scale-[0.98]"
        onClick={handleNextImage}
      >
        <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10 transition-colors duration-1000" style={{ boxShadow: `0 20px 50px -20px ${dominantColor}40` }}>
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${displayImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          {/* 🍏 감성적으로 재배치된 텍스트 영역 */}
            <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
                <div>
                {/* 1. 원래 크던 ASSET ID를 작고 은은하게 위로 올림 */}
                <p className="text-[9px] font-mono text-white/50 tracking-widest mb-1.5">
                    ID: {displayId}
                </p>
                
                {/* 2. 강아지 이름을 거대한 메인 타이틀로 승격 */}
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-xl tracking-tighter uppercase mb-1">
                    {displayPetName}
                </h2>
                
                {/* 3. 생년월일을 우아한 서브 타이틀로 배치 */}
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                    BORN {displayPetBirth}
                </p>
                </div>

                {/* 우측 하단: 브랜드 오라(Aura) 컬러칩 */}
                <div className="flex flex-col items-center gap-2">
                <div 
                    className="w-10 h-10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md" 
                    style={{ backgroundColor: dominantColor }} 
                />
                <span className="text-[7px] font-mono text-white/70 tracking-widest uppercase">
                    Aura
                </span>
                </div>
            </div>
        </div>
      </div>

      {/* 🍏 2. 아카이브 서랍을 여는 '브릿지(Bridge)' 버튼 */}
      {masterpieces.length > 1 && (
        <div 
          onClick={() => setIsArchiveSheetOpen(true)}
          className="mt-6 flex items-center justify-between border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-4 cursor-pointer active:scale-[0.98] transition-transform hover:bg-zinc-900/60"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-black">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"></path></svg>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-0.5">Archive Index</p>
              <p className="text-xs text-white font-medium">{masterpieces.length} Masterpieces</p>
            </div>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Open</span>
        </div>
      )}

      {/* 3. 커머스 섹션 (이제 바로 눈앞에 있습니다) */}
      <div className="mt-2">
        <LumenCustomSection dominantColor={dominantColor} onCheckout={onCheckout} />
      </div>

      {/* 🍏 4. Z축 아카이브 서랍 (Bottom Sheet Modal) */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isArchiveSheetOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        
        {/* 다크 블러 배경 (클릭 시 닫힘) */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isArchiveSheetOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsArchiveSheetOpen(false)} 
        />
        
        {/* 아카이브 리스트 시트 */}
        <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-8 pb-16 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isArchiveSheetOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
          <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-8" />
          
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif font-bold text-white">The Archive</h3>
            <button onClick={() => setIsArchiveSheetOpen(false)} className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase border border-zinc-800 px-3 py-1.5 rounded-full">Close</button>
          </div>
          
          <ul className="flex flex-col max-h-[50vh] overflow-y-auto scrollbar-hide pr-2">
            {masterpieces.map((mp, idx) => {
              const isActive = activeAssetIndex === idx;
              return (
                <li 
                  key={mp.id} 
                  onClick={() => {
                    setActiveAssetIndex(idx);
                    loadAssetToView(mp);
                    setIsArchiveSheetOpen(false); // 🍏 에셋을 고르면 서랍이 우아하게 닫힙니다.
                  }} 
                  className={`flex items-center justify-between py-5 border-b border-zinc-900/50 cursor-pointer transition-all duration-300 group
                    ${isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'}
                  `}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] opacity-50">
                      {(masterpieces.length - idx).toString().padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-2 h-2 rounded-full transition-opacity duration-500 ${isActive ? 'opacity-100 shadow-[0_0_10px_currentColor]' : 'opacity-0 group-hover:opacity-50'}`} 
                        style={{ backgroundColor: mp.dominant_color || '#ffffff', color: mp.dominant_color || '#ffffff' }}
                      />
                      <span className={`tracking-widest text-[12px] uppercase ${isActive ? 'font-bold' : 'font-medium'}`}>
                        ASSET-{mp.id.substring(0,4).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono opacity-60">
                    {formatDate(mp.created_at)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    </div>
  );
}