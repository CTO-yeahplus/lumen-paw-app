"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface PrivateArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  dominantColor: string;
}

export default function PrivateArchiveModal({ isOpen, onClose, dominantColor }: PrivateArchiveProps) {
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [preOrders, setPreOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🍏 모달이 열릴 때마다 고객의 실제 마스터피스와 선주문(pre_orders) 내역을 가져옵니다.
  useEffect(() => {
    if (isOpen) {
      fetchArchiveData();
    }
  }, [isOpen]);

  const fetchArchiveData = async () => {
    setIsLoading(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // 1. 유저의 마스터피스 (이전 스키마 기준 + assets 스캔 정보 결합 가능)
    const { data: mpData } = await supabase
      .from("masterpieces")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    if (mpData) {
      // 🍏 [핵심] extracts 버킷에서 Public URL을 동적으로 조합하는 마법의 로직
      const mpWithUrls = mpData.map(mp => {
        let rawPath = mp.source_url || (mp.images && (mp.images.url || mp.images.original));
        let finalUrl = "/placeholder-image.jpg"; // 로딩 실패 시 대비용
        
        if (rawPath) {
          // 이미 완벽한 인터넷 주소(http)라면 그대로 사용하고,
          if (rawPath.startsWith('http')) {
            finalUrl = rawPath;
          } else {
            // 파일명만 있다면 extracts 버킷의 Public 주소로 변환합니다.
            const { data } = supabase.storage.from('extracts').getPublicUrl(rawPath);
            finalUrl = data.publicUrl;
          }
        }
        return { ...mp, display_url: finalUrl };
      });
      
      setMasterpieces(mpWithUrls);
    }

    // 2. 유저의 선주문 내역 (pre_orders 테이블 직접 호출)
    const { data: orderData } = await supabase
      .from("pre_orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (orderData) setPreOrders(orderData);
    
    setIsLoading(false);
  };

  // 🍏 텍스트 기반의 status를 진행 단계(1~4)로 변환하는 헬퍼 함수
  const getStepFromStatus = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('pending') || s.includes('paid')) return 1; // 분석 및 대기
    if (s.includes('craft') || s.includes('making') || s.includes('process')) return 2; // 장인 제작
    if (s.includes('inspect') || s.includes('qc') || s.includes('ready')) return 3; // 검수
    if (s.includes('ship') || s.includes('deliver') || s.includes('complete')) return 4; // 배송
    return 1; // 기본값
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
      {/* 배경 블러 및 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-5xl h-[85vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-500">
        
        {/* 🍏 Header: 갤러리 입장 */}
        <header className="flex justify-between items-center p-8 border-b border-zinc-900 relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: dominantColor }} />
          <div>
            <h2 className="text-2xl font-serif text-white tracking-widest uppercase">Private Archive</h2>
            <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">당신의 빛이 기록된 영원한 금고</p>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Close</button>
        </header>

        {/* 🍏 Body: 스크롤 가능한 갤러리 영역 */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-12 custom-scrollbar">
          
          {/* 💎 Section 1: The Soul (마스터피스 & 에셋 리스트) */}
          <section className="flex-1 min-w-[300px] flex flex-col">
            <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] mb-6 border-b border-zinc-800 pb-2 shrink-0">The Digital Soul</h3>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {isLoading ? (
                <div className="animate-pulse h-96 bg-zinc-900 rounded-2xl" />
              ) : masterpieces.length > 0 ? (
                masterpieces.map((mp) => (
                  <div key={mp.id} className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-zinc-800 shadow-xl">
                    <img 
                        src={mp.display_url} /* 🍏 이제 완벽한 주소가 여기에 들어갑니다 */
                        alt={mp.pet_name || "PAWTRAIT EDITION Aura"} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        onError={(e) => {
                            // 🍏 만약의 오류에도 엑스박스가 뜨지 않도록 우아하게 감춤
                            (e.target as HTMLImageElement).style.opacity = '0';
                        }}
                    />
                    <div className="absolute inset-0 opacity-20 mix-blend-color transition-opacity duration-1000 group-hover:opacity-40" style={{ backgroundColor: mp.dominant_color || dominantColor }} />
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <span className="text-[10px] font-mono text-zinc-400 mb-1 block" style={{ color: mp.dominant_color || dominantColor }}>
                        AURA: {mp.dominant_color || 'EXTRACTED'}
                      </span>
                      <h4 className="text-xl font-serif text-white">{mp.pet_name || "Masterpiece"}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{new Date(mp.created_at).toLocaleDateString('ko-KR')}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center border border-dashed border-zinc-800 rounded-2xl">
                  <p className="text-zinc-600 text-xs tracking-widest uppercase">기록된 영혼이 없습니다</p>
                </div>
              )}
            </div>
          </section>

          {/* 💎 Section 2: The Vessel (물리적 굿즈 트래킹 - pre_orders 연동) */}
          <section className="flex-[1.5] min-w-[400px] flex flex-col">
            <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] mb-6 border-b border-zinc-800 pb-2 shrink-0">The Physical Vessel</h3>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 pb-10">
              {isLoading ? (
                <div className="animate-pulse h-64 bg-zinc-900 rounded-2xl" />
              ) : preOrders.length > 0 ? (
                preOrders.map((order) => {
                  const currentStep = getStepFromStatus(order.status);
                  const orderColor = order.dominant_color || dominantColor;
                  
                  return (
                    <div key={order.id} className="bg-black border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group">
                      {/* 개별 주문의 아우라 컬러 백라이트 */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10" style={{ backgroundColor: orderColor }} />
                      
                      <div className="flex justify-between items-start mb-8 border-b border-zinc-900 pb-6 relative z-10">
                        <div className="flex items-center gap-6">
                          {/* 🍏 CSS 아이콘 */}
                          <div className="w-12 h-16 border-[2px] rounded-md relative flex flex-col items-center justify-center" style={{ borderColor: orderColor }}>
                             <div className="w-6 h-6 rounded-sm opacity-60 border" style={{ borderColor: orderColor }} />
                             <div className="w-6 h-1 mt-2 opacity-80" style={{ backgroundColor: orderColor }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white uppercase tracking-widest">{order.item_name}</h4>
                            <p className="text-[10px] text-zinc-500 mt-1 uppercase">ITEM ID: {order.item_id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-400 font-mono tracking-widest uppercase">
                            {order.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      {/* 🍏 장인의 여정 트래킹 (상태 기반 자동 점등) */}
                      <div className="space-y-6 relative z-10">
                        {[
                          { step: 1, label: "Aura Confirmed", desc: "결제 및 아우라 데이터 확정" },
                          { step: 2, label: "Master Crafting", desc: "장인 수작업 진행 중" },
                          { step: 3, label: "Quality Control", desc: "PAWTRAIT EDITION 최종 검수" },
                          { step: 4, label: "Delivery", desc: "품격 있는 전달" }
                        ].map((process) => (
                          <div key={process.step} className="flex items-start gap-4">
                            <div className="relative flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full border border-zinc-800 z-10 transition-colors duration-500 ${currentStep >= process.step ? 'bg-white' : 'bg-zinc-900'}`} style={currentStep === process.step ? { backgroundColor: orderColor, boxShadow: `0 0 10px ${orderColor}` } : {}} />
                              {process.step < 4 && <div className={`w-0.5 h-10 -mt-1 ${currentStep > process.step ? 'bg-zinc-600' : 'bg-zinc-900'}`} />}
                            </div>
                            <div>
                              <p className={`text-xs font-bold uppercase tracking-widest ${currentStep >= process.step ? 'text-white' : 'text-zinc-600'}`}>{process.label}</p>
                              <p className="text-[10px] text-zinc-500 mt-1">{process.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex items-center justify-center border border-dashed border-zinc-800 rounded-2xl p-10 text-center">
                  <div>
                    <div className="w-10 h-10 mx-auto border border-zinc-800 rounded-full flex items-center justify-center mb-4">
                      <span className="text-zinc-600 text-xs">?</span>
                    </div>
                    <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">진행 중인 여정이 없습니다</p>
                    <p className="text-[10px] text-zinc-600">선주문(Pre-order)을 통해 당신만의 굿즈를 소유해 보세요.</p>
                  </div>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}