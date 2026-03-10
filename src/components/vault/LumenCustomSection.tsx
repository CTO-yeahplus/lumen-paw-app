"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CheckoutItem } from "@/components/modals/CheckoutModal";

interface LumenCustomSectionProps {
  dominantColor: string;
  imageUrl: string;
  onCheckout: (item: CheckoutItem) => void;
}

export default function LumenCustomSection({ dominantColor, imageUrl, onCheckout }: LumenCustomSectionProps) {
  const [copyIndex, setCopyIndex] = useState<number>(0);
  // 🍏 어드민에서 활성화된 상품들을 담을 상태
  const [liveEditions, setLiveEditions] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<CheckoutItem | null>(null);

  // 🍏 금고가 열릴 때, '전시 중(is_active=true)'인 상품만 은밀하게 불러옵니다.
  useEffect(() => {
    const fetchLiveEditions = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true }); // 등록순 정렬

      if (data && !error) {
        setLiveEditions(data);
      }
    };
    fetchLiveEditions();
  }, []);

  useEffect(() => {
    setCopyIndex(Math.floor(Math.random() * 3));
  }, []);

  const copywritingList = [
    {
      quote: '"사진은 기억을 남기지만, 오브제는 시간을 만질 수 있게 합니다."',
      text1: '반려견의 시간은 우리보다 빠르게 흐르기에, 눈부신 찰나를 기록한 지금 이 순간은 그 자체로 완벽한 마스터피스입니다.',
      text2: '클라우드에 갇힌 아이의 온기를 장인의 손길을 거친 실물 오브제로 꺼내어 주십시오. 아이를 상징하는 고유한 컬러',
      text3: '로 빚어내어, 언제든 손끝으로 쓰다듬을 수 있는 영원한 곁이 됩니다.'
    },
    {
      quote: '"예술은 눈으로 보지만, 진정한 마스터피스는 손끝에서 완성됩니다."',
      text1: '다시 오지 않을 우리 아이의 가장 아름다운 순간. 디지털 데이터로만 남겨두기엔 너무나 소중한 이 기록을 장인의 묵직한 수작업을 통해 현실로 가져오십시오.',
      text2: '가장 아름다운 찰나의 순간에, 아이의 영혼이 담긴 컬러',
      text3: '가 당신의 일상 공간에 깊이 스며듭니다.'
    },
    {
      quote: '"가장 소중한 것은 눈에 보이지 않지만, 곁에 둘 수 있습니다."',
      text1: '아이와의 벅찬 교감을 담아낸 이 사진은 그 자체로 이미 걸작입니다. 이제 이 찰나의 기적에 장인의 온기를 더해, 당신이 직접 만질 수 있는 물리적 오브제로 소유하십시오.',
      text2: '아이만의 시그니처 컬러',
      text3: '로 세공된 이 작품은 당신과 아이의 유대를 영원히 증명합니다.'
    }
  ];

  const currentCopy = copywritingList[copyIndex];

  if (!dominantColor) return null;

  return (
    <div className="mt-6 p-6 rounded-[32px] border border-zinc-800/50 bg-zinc-900/40 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundColor: dominantColor }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: dominantColor, color: dominantColor }} />
          <h3 className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase">Physical Extension</h3>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white mb-4">PAWTRAIT EDITION Custom</h2>
        
        <p className="text-xs text-zinc-400 font-light leading-[1.8] mb-8 word-break-keep transition-opacity duration-1000">
          <strong className="text-white font-serif italic text-sm block mb-3">{currentCopy.quote}</strong>
          {currentCopy.text1}<br/><br/>{currentCopy.text2}
          <span className="font-mono font-bold px-1.5 py-0.5 rounded-md bg-black/50 border border-zinc-800 text-[10px] mx-1 shadow-lg relative inline-block -translate-y-[1px]" style={{color: dominantColor}}>
            {dominantColor}
          </span>
          {currentCopy.text3}
        </p>

        <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-12 relative z-10">
        {liveEditions.length === 0 ? (
          <div className="col-span-3 text-center text-zinc-600 text-xs tracking-widest uppercase py-10">
            현재 런칭된 에디션이 없습니다.
          </div>
        ) : (
          liveEditions.map((edition) => {
            const cat = edition.category || edition.id;

            return (
              <button
                key={edition.id}
                // 🍏 핵심: 클릭 시 부모(Vault)가 관리하는 우아한 바텀 시트 모달을 호출합니다.
                onClick={() => onCheckout({
                  id: edition.id,
                  name: edition.name,
                  price: edition.price,
                  category: edition.category,
                  imageUrl: imageUrl
                })}
                className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95"
              >
                {/* 배경 컬러 레이어 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />

                {/* 🍏 카테고리 1: Case (호버 시 렌즈 쪽으로 살짝 기울어지며 입체감 부여) */}
                {cat === 'case' && (
                <div 
                    className="w-7 h-12 border-[1.5px] rounded-[6px] relative flex justify-end p-1 transition-all duration-500 group-hover:border-white group-hover:scale-105 group-hover:-rotate-2 shadow-2xl" 
                    style={{ borderColor: dominantColor }}
                >
                    <div className="w-1.5 h-1.5 rounded-sm transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: dominantColor }} />
                </div>
                )}

                {/* 🍏 카테고리 2: Frame (호버 시 액자 속 사진이 줌인(Zoom-in)되는 듯한 효과) */}
                {cat === 'frame' && (
                <div className="w-10 h-12 border-[1.5px] border-zinc-700 rounded-sm relative flex items-center justify-center transition-all duration-500 group-hover:border-zinc-500 group-hover:scale-105">
                    <div 
                    className="w-6 h-8 border border-dashed flex items-center justify-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ borderColor: dominantColor }}
                    >
                    <div 
                        className="w-3 h-3 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-100" 
                        style={{ backgroundColor: dominantColor }} 
                    />
                    </div>
                </div>
                )}

                {/* Collar */}
                {cat === 'collar' && (
                  <div className="w-10 h-10 border-[2px] rounded-full relative transition-transform duration-700 group-hover:rotate-12" style={{ borderColor: dominantColor }}>
                    <div className="absolute -right-1 top-1 w-2 h-4 bg-zinc-400 rounded-sm border border-zinc-800" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-zinc-500" />
                  </div>
                )}

                {/* 🍏 카테고리 4: Card Wallet (카드지갑 - 포켓과 카드의 우아한 겹침) */}
                {cat === 'wallet' && (
                  <div className="w-9 h-12 border-[1.5px] rounded-md relative flex flex-col items-center pt-1.5 transition-transform duration-500 group-hover:-translate-y-1" style={{ borderColor: dominantColor }}>
                    <div className="w-5 h-3 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] rounded-t-sm transition-opacity duration-500 group-hover:opacity-100 opacity-60" style={{ borderColor: dominantColor }} />
                    <div className="w-7 h-[1.5px] mt-1 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-7 h-[1.5px] mt-1.5 opacity-40" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 🍏 카테고리 5: Pet Harness (하네스 - 곡선 스트랩과 D링의 구조미) */}
                {cat === 'harness' && (
                  <div className="w-12 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:scale-110">
                    <div className="w-5 h-4 border-[2px] border-b-0 rounded-t-full mt-1.5 transition-colors duration-500" style={{ borderColor: dominantColor }} />
                    <div className="w-1.5 h-3 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-10 h-3 border-[2px] rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="absolute top-0 w-2.5 h-1.5 border-[1.5px] border-zinc-400 rounded-t-sm" />
                  </div>
                )}

                {/* 🍏 카테고리 6: Keyring (키링 - 체인과 마름모 참의 찰랑거림) */}
                {cat === 'keyring' && (
                  <div className="w-8 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:rotate-12 group-hover:translate-x-1">
                    <div className="w-3.5 h-3.5 border-[2px] rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="w-0.5 h-2.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-5 h-5 border-[1.5px] rounded-sm rotate-45 mt-1 relative flex items-center justify-center" style={{ borderColor: dominantColor }}>
                      <div className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: dominantColor }} />
                    </div>
                  </div>
                )}

                {/* 🍏 카테고리 7: Name Pendant (팬던트 - 정교하게 세공된 금속 네임택) */}
                {cat === 'pendant' && (
                  <div className="w-9 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:rotate-[15deg]">
                    <div className="w-1.5 h-1.5 border-[1.5px] rounded-full z-10 bg-zinc-950" style={{ borderColor: dominantColor }} />
                    <div className="w-8 h-8 border-[2px] rounded-full -mt-0.5 flex items-center justify-center relative shadow-[0_0_10px_rgba(255,255,255,0.05)]" style={{ borderColor: dominantColor }}>
                      <div className="w-5 h-5 border border-dashed rounded-full opacity-50 transition-transform duration-1000 group-hover:rotate-90" style={{ borderColor: dominantColor }} />
                    </div>
                  </div>
                )}
                {/* 🍏 카테고리 8: Leather Strap (가죽 스트랩 - 버클과 길게 뻗은 실루엣) */}
                {cat === 'strap' && (
                  <div className="w-5 h-14 border-[1.5px] rounded-full relative flex flex-col items-center pt-1 transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:rotate-3" style={{ borderColor: dominantColor }}>
                    <div className="w-3.5 h-2.5 border-[1.5px] rounded-sm" style={{ borderColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-1.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-1.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 🍏 예외: 알 수 없는 카테고리를 위한 다이아몬드 (기존 배열에 4개 추가) */}
                {!['case', 'frame', 'collar', 'wallet', 'harness', 'keyring', 'pendant','strap'].includes(cat) && (
                  <div className="w-8 h-8 rotate-45 border-[1.5px] transition-colors duration-500" style={{ borderColor: dominantColor }}></div>
                )}

                {/* 텍스트 라벨 (DB에 저장된 카테고리명을 표시) */}
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">
                  {cat}
                </span>
              </button>
            );
          })
        )}
      </div>
      </div>
    </div>
  );
}