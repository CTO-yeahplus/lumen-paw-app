"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { track } from "@vercel/analytics"; // 상단에 임포트

export interface CheckoutItem {
  id: string;
  name: string;
  price: string;
  category?: string; // 🍏 추가!
  imageUrl?: string;
  // 🍏 [추가됨] DB에서 가져올 스펙 데이터
  material?: string;
  dimensions?: string;
  productImage?: string; // 상품 자체의 썸네일 이미지
  petName?: string;      // (기존 Vault에서 넘겨주는 이름)
  total_editions?: number;
}

interface CheckoutModalProps {
  item: CheckoutItem | null;
  dominantColor: string;
  onClose: () => void;
}

export default function CheckoutModal({ item, dominantColor, onClose }: CheckoutModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [remainingCount, setRemainingCount] = useState<number | null>(null);
    const [totalEditions, setTotalEditions] = useState<number>(100); // 🍏 분모(전체 수량) 상태 추가
    // 🍏 [방어선 1] 맞춤 제작 동의 상태 추가
    const [isAgreed, setIsAgreed] = useState(false);
    const isOpen = item !== null;
    // 🍏 [추가] 부모가 데이터를 안 넘겨줄 경우를 대비한 자체 보관소
    const [fetchedMaterial, setFetchedMaterial] = useState("");
    const [fetchedDimensions, setFetchedDimensions] = useState("");
    const [fetchedPetName, setFetchedPetName] = useState("");
    // 🍏 [추가] 두 사진을 교차하기 위한 스위치 상태
    const [showProductImage, setShowProductImage] = useState(true);
    // 🍏 [추가] 부모가 안 주면 내가 직접 찾아올 상품 사진 저장소
    const [fetchedProductImage, setFetchedProductImage] = useState("");

    // 💎 [수정] 3초마다 부드럽게 스위치를 넘기는 오토 타이머 (지능형 업데이트)
    useEffect(() => {
      // 🍏 부모가 준 사진뿐만 아니라, 내가 스스로 찾아온 사진(fetchedProductImage)도 확인합니다.
      const hasProductImage = item?.productImage || fetchedProductImage;

      // 상품 사진과 강아지 사진이 '둘 다' 존재할 때만 교차 타이머를 작동시킵니다.
      if (hasProductImage && item?.imageUrl) {
        const interval = setInterval(() => {
          setShowProductImage((prev) => !prev);
        }, 3000); // 3초 간격
        
        return () => clearInterval(interval);
      }
    }, [item, fetchedProductImage]); // 🚨 [핵심] 내가 사진을 찾아왔을 때도 타이머가 재시동되도록 의존성 배열에 추가합니다.

    // 💎 [추가] 모달이 열리면 스스로 부족한 데이터를 DB에서 찾아옵니다.
    useEffect(() => {
      if (!item) return;

      const fetchMissingDetails = async () => {
        // 1. 상품 스펙(소재, 사이즈)이 누락되었다면 products 테이블에서 찾아옵니다.
        if (!item.material || !item.dimensions) {
          const { data: productData } = await supabase
            .from("products")
            .select("material, dimensions")
            .eq("name", item.name)
            .maybeSingle();

          if (productData) {
            setFetchedMaterial(productData.material || "");
            setFetchedDimensions(productData.dimensions || "");
          }
        }

        // 2. 강아지 이름이 누락되었다면 고객의 가장 최근 갤러리(masterpieces)에서 찾아옵니다.
        if (!item.petName) {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            const { data: assetData } = await supabase
              .from("masterpieces")
              .select("pet_name")
              .eq("user_id", user.id)
              .order("created_at", { ascending: false })
              .limit(1)
              .maybeSingle();
            
            if (assetData && assetData.pet_name) {
              setFetchedPetName(assetData.pet_name);
            }
          }
        }
        // 3. 상품 스펙이나 '상품 사진'이 누락되었다면 products 테이블에서 찾아옵니다.
        if (!item.material || !item.dimensions || !item.productImage) {
          const { data: productData } = await supabase
            .from("products")
            // 🍏 image_url 을 추가로 select 합니다.
            .select("material, dimensions, image_url") 
            .eq("name", item.name)
            .maybeSingle();

          if (productData) {
            setFetchedMaterial(productData.material || "");
            setFetchedDimensions(productData.dimensions || "");
            // 🍏 DB에서 찾은 상품 사진을 저장합니다.
            setFetchedProductImage(productData.image_url || ""); 
          }
        }

      };

      fetchMissingDetails();
    }, [item]);
      
    // 🍏 1. 상품의 총 한정 수량과 현재 결제 완료된 수량을 동시에 스캔합니다.
    useEffect(() => {
      if (isOpen && item) {
        const fetchLiveInventory = async () => {
          // A. 상품의 총 한정 수량(분모) 가져오기
          const { data: productData } = await supabase
            .from('products')
            .select('total_editions')
            .eq('id', item.id)
            .single();
            
          const total = productData?.total_editions || 100;
          setTotalEditions(total);
  
          // B. 결제 완료된 수량 가져오기
          const { count, error } = await supabase
            .from('pre_orders')
            .select('*', { count: 'exact', head: true })
            .eq('item_id', item.id)
            .eq('status', 'paid');
  
          if (!error && count !== null) {
            const left = total - count;
            setRemainingCount(left < 0 ? 0 : left);
          }
        };
        
        fetchLiveInventory();
      } else {
        const timer = setTimeout(() => {
          setIsSuccess(false);
          setRemainingCount(null);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isOpen, item]);

    // 🍏 [추가] 동의 버튼 클릭 시 Vercel Analytics로 데이터를 쏘는 지능형 핸들러
    const handleToggleAgreement = () => {
      const newState = !isAgreed;
      setIsAgreed(newState);

      // 💎 고객이 동의를 눌렀는지(true), 아니면 망설이며 다시 취소했는지(false)까지 추적합니다.
      track("bespoke_agreement_toggled", {
        item_name: item?.name || "Unknown",
        is_agreed: newState, 
        color: dominantColor
      });
    };

  const handleSecureEdition = async () => {
    if (!item) return;

    track("checkout_initiated", { 
      item_name: item.name, 
      price: item.price,
      color: dominantColor 
    });
  
    console.log("결제 프로세스 진입:", item.name);
    
    // 🍏 재고 소진 방어 로직
    if (remainingCount !== null && remainingCount <= 0) {
      alert("죄송합니다. 해당 에디션은 이미 모두 완판되었습니다.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("멤버십 인증(로그인)이 만료되었습니다.");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from('pre_orders').insert({
        user_id: user.id,
        item_id: item.id,
        item_name: item.name,
        dominant_color: dominantColor || "#ffffff",
        status: 'pending',
        image_url: item.imageUrl
      });

      if (error) throw error;

      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      setIsSuccess(true);

    } catch (error: any) {
      console.error("예약 실패:", error);
      alert("에디션 선점 중 문제가 발생했습니다. 데스크에 문의해주십시오.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-1000 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !isSubmitting && onClose()} 
      />
      
      <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        
        {/* 💎 투박한 회색 손잡이를 제거하고, 프라이빗 컨시어지 느낌의 우아한 헤더로 교체합니다. */}
        <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase">Private Concierge</h3>
        </div>
        
        <button 
          onClick={onClose} 
          className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase border border-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
        >
          Close
        </button>
      </div>
        
        {item && (
          <div className="relative">
            
          <div className={`transition-all duration-500 flex flex-col ${isSuccess ? "opacity-0 absolute inset-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}>
            
            {/* 💎 1. 프라이빗 오더 티켓 (결제 확신을 주는 요약본) */}
            <div className="mb-8 p-5 bg-zinc-900/60 border border-zinc-800/80 rounded-[24px] backdrop-blur-md relative overflow-hidden shadow-2xl">
              {/* 상단 럭셔리 하이라이트 라인 */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50"></div>
              
              {/* 🍏 희소성 뱃지 (티켓 우측 상단에 절대 위치로 고정) */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 relative" />
                <span className="text-[8px] font-bold text-red-500 tracking-[0.2em] uppercase">
                  {remainingCount === null ? "Syncing..." : remainingCount <= 0 ? "Sold Out" : `${remainingCount} / ${totalEditions} Left`}
                </span>
              </div>

              <div className="flex gap-5 items-center mt-2">
                {/* 좌측: 상품 사진 ↔ 강아지 썸네일 크로스페이드 */}
                <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0 border border-zinc-700 bg-black shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    
                    {/* 💎 렌더링 직전에 부모가 준 사진이 없으면 내가 찾은 사진을 쓰도록 합의합니다. */}
                  {(() => {
                    const finalProductImage = item.productImage || fetchedProductImage;
                    
                    return (
                      <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0 border border-zinc-700 bg-black shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        {finalProductImage && item.imageUrl ? (
                          // 두 사진이 모두 존재할 경우: 크로스페이드
                          <>
                            <img 
                              src={finalProductImage} 
                              alt="Product" 
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${showProductImage ? 'opacity-100' : 'opacity-0'}`} 
                            />
                            <img 
                              src={item.imageUrl} 
                              alt="Pet" 
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${showProductImage ? 'opacity-0' : 'opacity-100'}`} 
                            />
                          </>
                        ) : finalProductImage || item.imageUrl ? (
                          // 한 장만 존재할 경우
                          <img src={finalProductImage || item.imageUrl} alt="Masterpiece" className="w-full h-full object-cover" />
                        ) : (
                          // 둘 다 없을 경우
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[8px] text-zinc-600 font-mono tracking-widest">NO ASSET</span>
                          </div>
                        )}

                        <div className="absolute inset-0 z-10 opacity-20 mix-blend-color transition-colors duration-1000 pointer-events-none" style={{ backgroundColor: dominantColor }} />
                      </div>
                    );
                  })()}

                    {/* 아우라 컬러 오버레이 틴트 (항상 맨 위에 고정) */}
                    <div className="absolute inset-0 z-10 opacity-20 mix-blend-color transition-colors duration-1000 pointer-events-none" style={{ backgroundColor: dominantColor }} />
                  </div>

                {/* 우측: 텍스트 요약 */}
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {/* 컬러 뱃지 */}
                    <div 
                      className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] transition-colors duration-1000" 
                      style={{ backgroundColor: dominantColor || '#ffffff', color: dominantColor || '#ffffff' }}
                    />
                    {/* 에셋 번호 */}
                    <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest truncate">
                      {item.id ? `ASSET-${item.id}` : "PRIVATE EDITION"}
                    </span>
                  </div>
                  
                  {/* 🍏 자체적으로 찾아온 강아지 이름(fetchedPetName)도 허용합니다 */}
                  {(item.petName || fetchedPetName) && (
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
                      Bespoke for {item.petName || fetchedPetName}
                    </p>
                  )}
                  
                  {/* 🍏 자체적으로 찾아온 스펙(fetchedMaterial, fetchedDimensions)도 렌더링합니다 */}
                  <div className="flex flex-col gap-0.5 mt-auto">
                    {(item.material || fetchedMaterial) && (
                      <span className="text-[9px] text-zinc-400 font-mono tracking-wider truncate">
                        · {item.material || fetchedMaterial}
                      </span>
                    )}
                    {(item.dimensions || fetchedDimensions) && (
                      <span className="text-[9px] text-zinc-400 font-mono tracking-wider truncate">
                        · {item.dimensions || fetchedDimensions}
                      </span>
                    )}
                    {/* 둘 다 끝끝내 없다면 최후의 방어선으로 기본 텍스트를 띄웁니다 */}
                    {!(item.material || fetchedMaterial) && !(item.dimensions || fetchedDimensions) && (
                      <span className="text-[9px] text-zinc-400 font-mono tracking-wider">
                        · Premium Material & Custom Fit
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 💎 2. 결제 가격 */}
            <div className="w-full bg-black border border-zinc-800 rounded-3xl p-5 mb-6 flex justify-between items-center shadow-lg">
              <span className="text-xs text-zinc-500 tracking-widest uppercase font-bold">Exclusive Price</span>
              <span className="text-2xl font-mono font-bold text-white">{item.price}</span>
            </div>

            {/* 💎 3. 장인의 여정 (Bespoke Process) 섹션 */}
            <div className="w-full mb-8 pt-6 border-t border-zinc-900 relative">
              <style>{`
                @keyframes sweep-light {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
                @keyframes sync-illuminate {
                  0%, 25%, 100% { 
                    opacity: 0.3;
                    filter: brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0));
                    transform: translateY(0) scale(1);
                  }
                  12.5% { 
                    opacity: 1;
                    filter: brightness(1.5) drop-shadow(0 0 12px var(--glow-color));
                    transform: translateY(-3px) scale(1.05);
                  }
                }
                @keyframes custom-ping {
                  0% { transform: scale(1); opacity: 1; }
                  15% { transform: scale(3.5); opacity: 0; }
                  100% { transform: scale(1); opacity: 0; }
                }
              `}</style>

              <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">수공예품 제작 과정</h3>
                  <span className="text-[9px] text-zinc-600 font-mono">{item.category === 'frame' ? 'Artisan Grade' : 'Master Craftsmanship'}</span>
              </div>

              <div className="relative flex justify-between">
                  <div className="absolute top-4 left-0 w-full h-[1px] bg-zinc-900 z-0" />
                  
                  <div 
                    className="absolute top-4 left-0 w-full h-[1.5px] z-0 opacity-80"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${dominantColor || '#ffffff'} 50%, transparent 100%)`,
                      backgroundSize: '200% 100%',
                      animation: 'sweep-light 8s linear infinite'
                    }}
                  />
                  
                  {[
                  { step: "01", label: "Consult", desc: "컬러 큐레이팅" },
                  { step: "02", label: "Craft", desc: "장인 제작" },
                  { step: "03", label: "Inspect", desc: "품질 검수" },
                  { step: "04", label: "Deliver", desc: "문앞까지 배송" }
                  ].map((proc, idx) => (
                  <div 
                    key={idx} 
                    className="relative z-10 flex flex-col items-center group cursor-default"
                    style={{
                      '--glow-color': dominantColor || '#ffffff',
                      animation: 'sync-illuminate 8s ease-in-out infinite',
                      animationDelay: `${idx * 2}s`
                    } as React.CSSProperties}
                  >
                      <div className="w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-3 transition-colors group-hover:border-zinc-500 relative">
                        <span className="text-[8px] font-mono text-zinc-400">{proc.step}</span>
                      </div>
                      
                      <span className="text-[9px] font-bold text-zinc-100 mb-1 uppercase tracking-tighter">{proc.label}</span>
                      <span className="text-[8px] text-zinc-500 break-keep text-center">{proc.desc}</span>
                      
                      <div 
                        className="absolute -top-1 w-1.5 h-1.5 rounded-full" 
                        style={{ 
                          backgroundColor: dominantColor || '#ffffff',
                          animation: 'custom-ping 8s cubic-bezier(0, 0, 0.2, 1) infinite',
                          animationDelay: `${idx * 2}s`     
                        }} 
                      />
                  </div>
                  ))}
              </div>
            </div>

            {/* 💎 4. 비스포크 맞춤 제작 동의 서약서 */}
            <div 
              className="mb-6 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 flex gap-3 items-start cursor-pointer hover:bg-zinc-900/60 transition-colors" 
              onClick={handleToggleAgreement}
            >
              <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all duration-300 ${isAgreed ? 'bg-white border-white text-black' : 'bg-black border-zinc-700 text-transparent'}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed tracking-wide">
                <span className="text-red-400 font-bold tracking-widest mr-1">[필수]</span> 
                본 에디션은 고객님의 반려견만을 위한 <strong className="text-zinc-200 font-bold">1:1 맞춤 세공(Bespoke)</strong> 작품입니다. 현장 결제 및 제작 착수 이후에는 <strong className="text-zinc-200 font-bold">단순 변심으로 인한 주문 취소 및 환불이 불가</strong>함을 확인하고 동의합니다.
              </p>
            </div>

            {/* 💎 5. 결제/예약 확정 버튼 */}
            <button 
              onClick={handleSecureEdition}
              disabled={isSubmitting || !isAgreed || remainingCount === 0} 
              className={`w-full h-14 font-extrabold text-[12px] tracking-[0.2em] uppercase rounded-2xl transition-all duration-500 flex items-center justify-center gap-2 ${
                remainingCount === 0 
                ? "bg-zinc-900 text-zinc-700 cursor-not-allowed shadow-none border border-zinc-800/50" 
                : !isAgreed
                ? "bg-zinc-900 text-zinc-500 cursor-not-allowed shadow-none border border-zinc-800"
                : "bg-white text-black hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">SECURING YOUR EDITION...</span>
              ) : remainingCount === 0 ? (
                <>SOLD OUT (완판)</>
              ) : !isAgreed ? (
                <>PLEASE AGREE TO CONTINUE</> 
              ) : (
                <>PAWTRAIT EDITION 예약하기</>
              )}
            </button>
          </div>

            {/* 성공 화면 상태 (이전과 동일) */}
            <div className={`transition-all duration-500 flex flex-col items-center ${isSuccess ? "opacity-100 scale-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none scale-105"}`}>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-green-500 mb-6 shadow-[0_0_40px_rgba(34,197,94,0.2)] bg-green-500/10 backdrop-blur-md">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-white mb-2 uppercase tracking-tight">Allocation Secured</h2>
              <p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-8 border border-zinc-800 px-3 py-1 rounded-full">
                {item.name}
              </p>
              
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center mb-6">
                <p className="text-sm text-zinc-300 font-light leading-relaxed break-keep">
                  고객님의 에디션 1개가 <strong className="text-white font-bold">성공적으로 예약</strong> 되었습니다. 
                  <br/><br/>
                  페어 현장에 위치한 <strong className="text-white font-bold text-blue-400">PAWTRAIT EDITION 컨시어지 데스크</strong>에 
                  이 화면을 보여주시고 결제를 완료하여 한정판 굿즈 최종 확정해 주십시오.
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full h-14 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-2xl active:scale-95 transition-all"
              >
                내 갤러리로 돌아가기
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}