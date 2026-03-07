"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface CheckoutItem {
  id: string;
  name: string;
  price: string;
  category?: string; // 🍏 추가!
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
    
    const isOpen = item !== null;
  
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

  const handleSecureEdition = async () => {
    if (!item) return;
    
    // 🍏 재고 소진 방어 로직
    if (remainingCount !== null && remainingCount <= 0) {
      alert("죄송합니다. 해당 에디션은 이미 100개가 모두 완판되었습니다.");
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
        status: 'pending_payment'
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
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !isSubmitting && onClose()} 
      />
      
      <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        {item && (
          <div className="relative">
            
            <div className={`transition-all duration-500 flex flex-col items-center ${isSuccess ? "opacity-0 absolute inset-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}>
              
              <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: dominantColor }} />
                
                {/* 🍏 아이콘 렌더링 로직 변경 */}
                {item.category === 'case' && (
                  <div className="w-8 h-14 border-2 rounded-[6px] relative flex justify-end p-1" style={{ borderColor: dominantColor }}>...</div>
                )}
                {item.category === 'frame' && (
                  <div className="w-12 h-14 border-2 border-zinc-700 rounded-sm relative flex items-center justify-center">...</div>
                )}
                {item.category === 'collar' && (
                  <div className="w-12 h-12 border-[3px] rounded-full relative">...</div>
                )}
                
                {/* Wallet 클로즈업 */}
                {item.category === 'wallet' && (
                  <div className="w-12 h-16 border-2 rounded-lg relative flex flex-col items-center pt-2" style={{ borderColor: dominantColor }}>
                    <div className="w-7 h-4 border-t-2 border-l-2 border-r-2 rounded-t opacity-60" style={{ borderColor: dominantColor }} />
                    <div className="w-10 h-0.5 mt-1.5 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-10 h-0.5 mt-2 opacity-40" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* Harness 클로즈업 */}
                {item.category === 'harness' && (
                  <div className="w-16 h-16 relative flex flex-col items-center mt-2">
                    <div className="w-7 h-5 border-2 border-b-0 rounded-t-full mt-2" style={{ borderColor: dominantColor }} />
                    <div className="w-2 h-4 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-14 h-4 border-2 rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="absolute top-0 w-3 h-2 border-2 border-zinc-400 rounded-t-sm" />
                  </div>
                )}

                {/* Keyring 클로즈업 */}
                {item.category === 'keyring' && (
                  <div className="w-12 h-16 relative flex flex-col items-center">
                    <div className="w-5 h-5 border-2 rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="w-1 h-3 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-8 h-8 border-2 rounded-sm rotate-45 mt-2 relative flex items-center justify-center" style={{ borderColor: dominantColor }}>
                      <div className="w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: dominantColor }} />
                    </div>
                  </div>
                )}

                {/* Pendant 클로즈업 */}
                {item.category === 'pendant' && (
                  <div className="w-14 h-16 relative flex flex-col items-center pt-1">
                    <div className="w-2.5 h-2.5 border-2 rounded-full z-10 bg-zinc-950" style={{ borderColor: dominantColor }} />
                    <div className="w-12 h-12 border-[3px] rounded-full -mt-1 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,255,255,0.05)]" style={{ borderColor: dominantColor }}>
                      <div className="w-8 h-8 border-[1.5px] border-dashed rounded-full opacity-50" style={{ borderColor: dominantColor }} />
                    </div>
                  </div>
                )}
                {/* Strap 클로즈업 */}
                {item.category === 'strap' && (
                  <div className="w-8 h-20 border-2 rounded-full relative flex flex-col items-center pt-1.5" style={{ borderColor: dominantColor }}>
                    <div className="w-5 h-4 border-2 rounded-sm" style={{ borderColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-3 opacity-50 transition-all duration-1000 animate-pulse" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 커스텀 다이아몬드 */}
                {!['case', 'frame', 'collar', 'wallet', 'harness', 'keyring', 'pendant','strap'].includes(item.category || '') && (
                   <div className="w-10 h-10 rotate-45 border-2" style={{ borderColor: dominantColor }}></div>
                )}
              </div>

              {/* 🍏 진정한 희소성의 시각화 (분모 포함) */}
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 relative" />
                <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
                  {remainingCount === null 
                    ? "Syncing Live Stock..." 
                    : remainingCount <= 0 
                      ? `Fully Sold Out (${totalEditions} Editions)` 
                      : `${remainingCount} / ${totalEditions} Editions Left`}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h2>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-700 px-2 py-0.5 rounded">
                  Bespoke Color: {dominantColor || "Signature"}
                </span>
              </div>

              <div className="w-full bg-black border border-zinc-800 rounded-3xl p-5 mb-4 flex justify-between items-center">
                <span className="text-xs text-zinc-500 tracking-widest uppercase font-bold">Exclusive Price</span>
                <span className="text-xl font-mono font-bold text-white">{item.price}</span>
              </div>

              {/* 🍏 장인의 여정 (Bespoke Process) 섹션 */}
            <div className="w-full mb-8 pt-6 border-t border-zinc-900">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Bespoke Journey</h3>
                <span className="text-[9px] text-zinc-600 font-mono">{item.category === 'frame' ? 'Artisan Grade' : 'Master Craftsmanship'}</span>
            </div>

            <div className="relative flex justify-between">
                {/* 단계별 연결선 */}
                <div className="absolute top-4 left-0 w-full h-[1px] bg-zinc-900 z-0" />
                
                {[
                { step: "01", label: "Consult", desc: "아우라 분석" },
                { step: "02", label: "Craft", desc: "장인 수작업" },
                { step: "03", label: "Inspect", desc: "품질 검수" },
                { step: "04", label: "Deliver", desc: "품격 있는 전달" }
                ].map((proc, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center group">
                    <div 
                    className="w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-3 transition-all duration-700 group-hover:border-zinc-400"
                    style={{ boxShadow: `0 0 15px rgba(0,0,0,1)` }}
                    >
                    <span className="text-[8px] font-mono text-zinc-500 group-hover:text-white">{proc.step}</span>
                    </div>
                    <span className="text-[9px] font-bold text-zinc-400 mb-1 uppercase tracking-tighter">{proc.label}</span>
                    <span className="text-[8px] text-zinc-600 break-keep text-center">{proc.desc}</span>
                    
                    {/* 현재 진행 중인 듯한 빛의 효과 (애니메이션) */}
                    {idx === 1 && (
                    <div className="absolute -top-1 w-1 h-1 rounded-full bg-white animate-ping" style={{ backgroundColor: dominantColor }} />
                    )}
                </div>
                ))}
            </div>

            {/* 제작 기간 및 장인 정보 (DB 데이터 연동) */}
            <div className="mt-8 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dominantColor }} />
                <div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed">
                    본 에디션은 <strong>LUMEN 파트너 장인</strong>의 엄격한 기준 아래 제작됩니다.
                    </p>
                    <p className="text-[10px] text-zinc-500 mt-1 font-light italic">
                    * {item.id ? '전시 현장 확인 후 즉시 제작 공정에 착수합니다.' : '제작 소요 기간: 약 2-3주'}
                    </p>
                </div>
                </div>
            </div>
            </div>

              <button 
                onClick={handleSecureEdition}
                disabled={isSubmitting || remainingCount === 0} // 🍏 완판 시 버튼 비활성화
                className={`w-full h-14 font-extrabold text-[12px] tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  remainingCount === 0 
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed shadow-none" 
                  : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">SECURING YOUR EDITION...</span>
                ) : remainingCount === 0 ? (
                  <>SOLD OUT (완판)</>
                ) : (
                  <>Secure My Edition (선점하기)</>
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
                  고객님의 에디션 1개가 <strong className="text-white font-bold">성공적으로 홀딩(선점)</strong> 되었습니다. 
                  <br/><br/>
                  페어 현장에 위치한 <strong className="text-white font-bold text-blue-400">LUMEN 컨시어지 데스크</strong>에 
                  이 화면을 보여주시고 결제를 완료하여 소유권을 최종 확정해 주십시오.
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full h-14 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-2xl active:scale-95 transition-all"
              >
                Return to Vault
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}