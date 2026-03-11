"use client";

import { useState } from "react";
import { CheckoutItem } from "@/components/modals/CheckoutModal";
import LumenCustomSection from "@/components/vault/LumenCustomSection";
import Image from "next/image"; // 🍏 파일 맨 위에 추가

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
  setDominantColor: (color: string) => void; // 🍏 추가됨
  colorPalette: string[];                    // 🍏 추가됨
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
  displayPetBirth,
  setDominantColor,
  colorPalette
}: PrivateVaultTabProps) {
  
  // 🍏 Z축 아카이브 서랍을 열고 닫는 상태
  const [isArchiveSheetOpen, setIsArchiveSheetOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false); // 🍏 추가: 팔레트 팝업 상태
  // 🍏 [추가] 스와이프 감지를 위한 터치 시작 Y좌표
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchCurrentY - touchStartY;

    // 💎 손가락을 80px 이상 아래로 끌어내렸다면 우아하게 서랍을 닫습니다.
    if (deltaY > 80) {
      setIsArchiveSheetOpen(false);
      setTouchStartY(null); // 중복 실행 방지
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

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
        onClick={() => {
          setIsPaletteOpen(false); // 🍏 사진을 넘길 때는 열려있던 팔레트를 닫습니다.
          handleNextImage();
        }}
      >
        <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10 transition-colors duration-1000" style={{ boxShadow: `0 20px 50px -20px ${dominantColor}40` }}>
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${displayImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-[9px] font-mono text-white/50 tracking-widest mb-1.5">
                    ID: {displayId}
                </p>
                
                {/* 🍏 색상 동기화: 강아지 이름에 dominantColor 적용 */}
                <h2 
                  className="text-4xl md:text-5xl font-serif font-bold drop-shadow-xl tracking-tighter uppercase mb-1 transition-colors duration-1000"
                  style={{ color: dominantColor || "#ffffff" }}
                >
                    {displayPetName}
                </h2>
                
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                    BORN {displayPetBirth}
                </p>
              </div>

              {/* 🍏 인터랙티브 오라(Aura) 팝업 메뉴 */}
              <div className="relative flex flex-col items-center gap-2">
                
                {/* 숨겨진 팔레트 리스트 */}
                <div className={`absolute bottom-full mb-3 right--1 flex flex-col gap-2 p-2.5 bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-full transition-all duration-500 origin-bottom ${isPaletteOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
                  {colorPalette.map((color, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation(); // 🍏 클릭 시 사진이 넘어가는 것을 방지
                        setDominantColor(color); // 🍏 색상 변경 리모컨 작동!
                        setIsPaletteOpen(false);
                      }}
                      className="w-8 h-8 rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-90 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* 메인 Aura 버튼 */}
                <div 
                    onClick={(e) => {
                      e.stopPropagation(); // 🍏 클릭 시 사진 넘김 방지
                      setIsPaletteOpen(!isPaletteOpen); // 팝업 토글
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer active:scale-95 transition-all duration-500" 
                    style={{ backgroundColor: dominantColor }} 
                />
                <span className="text-[7px] font-mono text-white/70 tracking-widest uppercase">
                    Aura
                </span>
              </div>
          </div>

          {/* 🍏 색상 동기화: 다이내믹 모션 인디케이터에 dominantColor 적용 */}
          {vaultImages.length > 1 && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 z-20">
              {vaultImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    idx === currentImgIndex 
                      ? 'w-8' 
                      : 'w-1.5 bg-white/40'
                  }`} 
                  style={idx === currentImgIndex ? { 
                    backgroundColor: dominantColor || '#ffffff',
                    boxShadow: `0 0 15px ${dominantColor}80` 
                  } : {}}
                />
              ))}
            </div>
          )}

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
        <LumenCustomSection dominantColor={dominantColor} imageUrl={displayImage} onCheckout={onCheckout} />
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
          {/* 💎 [스와이프 센서 구역] 스크롤 리스트와 충돌하지 않도록 헤더 부분에만 센서를 부착합니다. */}
          <div 
            className="pb-8 -mt-4 pt-4 cursor-grab active:cursor-grabbing touch-none"
          >

            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-serif font-bold text-white">The Archive</h3>
              <button 
                onClick={() => setIsArchiveSheetOpen(false)} 
                // 닫기 버튼을 누를 때 스와이프 이벤트와 겹치지 않도록 z-index와 stopPropagation 추가
                onTouchStart={(e) => e.stopPropagation()} 
                className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase border border-zinc-800 px-3 py-1.5 rounded-full relative z-10"
              >
                Close
              </button>
            </div>
          </div>
          
          <ul className="flex flex-col max-h-[50vh] overflow-y-auto scrollbar-hide pr-2">
            {masterpieces.map((mp, idx) => {
              const isActive = activeAssetIndex === idx;
              // 🍏 [핵심 수술] 어떤 기형적인 데이터가 들어와도 완벽하게 걸러내는 3중 방어막
              let thumbUrl = '/images/img_01.png'; // 1. 기본값 세팅
              // 🍏 첫 번째 이미지를 썸네일로 사용 (없으면 기본 이미지)
              try {
                if (Array.isArray(mp.images) && mp.images.length > 0 && mp.images[0]) {
                  thumbUrl = mp.images[0]; // 정상적인 배열일 경우
                } else if (typeof mp.images === 'string') {
                  // DB에서 텍스트(JSON)로 꼬여서 넘어왔을 경우를 대비한 파싱
                  const parsed = JSON.parse(mp.images);
                  if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]) {
                    thumbUrl = parsed[0];
                  }
                }
                
                // 최종 검문: URL이 http나 / 로 시작하지 않는 이상한 문자열이면 기본값으로 강제 회귀
                if (typeof thumbUrl !== 'string' || (!thumbUrl.startsWith('http') && !thumbUrl.startsWith('/'))) {
                  thumbUrl = '/images/img_01.png';
                }
              } catch (e) {
                // 파싱하다 에러가 나도 화면을 터뜨리지 않고 조용히 기본 이미지를 띄웁니다.
                thumbUrl = '/images/img_01.png';
              }
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

                    {/* 💎 추가된 썸네일 렌즈 구역 */}
                    <div className={`relative w-10 h-12 rounded-lg overflow-hidden shrink-0 border transition-all duration-500 ${isActive ? 'border-zinc-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'border-zinc-800 opacity-60 group-hover:opacity-100'}`}>
                      <Image 
                        src={thumbUrl} 
                        alt="Asset Thumbnail" 
                        fill
                        sizes="40px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                      {/* 아우라 컬러 틴트 오버레이 */}
                      <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ backgroundColor: mp.dominant_color || '#ffffff' }} />
                    </div>

                    <div className="flex flex-col gap-1 ml-2">
                      <div className="flex items-center gap-2">
                        <div 
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'scale-125 shadow-[0_0_10px_currentColor]' : 'opacity-50 group-hover:opacity-100'}`} 
                          style={{ backgroundColor: mp.dominant_color || '#ffffff', color: mp.dominant_color || '#ffffff' }}
                        />
                        <span className={`tracking-widest text-[11px] uppercase ${isActive ? 'font-bold' : 'font-medium'}`}>
                          ASSET-{mp.id.substring(0,4).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-[9px] text-zinc-500 font-mono pl-3.5">
                        {mp.pet_name || "UNKNOWN"}
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