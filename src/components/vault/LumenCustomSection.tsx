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
      quote: '"디지털의 정교함에 장인의 무게를 더하다."',
      text1: '클라우드에 저장된 네 컷의 고해상도 이미지가 PAWTRAIT EDITION 장인의 손길을 거쳐 프리미엄 실물 오브제로 재탄생합니다. 변치 않는 최고급 소재 위에 아이와의 특별한 순간을 각인하십시오.',
      text2: '시스템이 정밀하게 분석한 아이의 시그니처 컬러 ',
      text3: '가 제품의 마감재로 적용되어, 시각적 아름다움과 촉각적 품격을 동시에 만족시키는 마스터피스가 완성됩니다.'
    },
    {
      quote: '"단 하나의 데이터를 바탕으로 완성되는 완벽한 비스포크 오브제."',
      text1: '네 컷의 사진으로 완성된 고품질의 데이터를 기반으로, PAWTRAIT EDITION 전담 장인의 맞춤 제작 공정이 시작됩니다. 가장 소중한 순간을 가장 견고하고 아름다운 형태로 간직하십시오.',
      text2: '사진에서 추출된 아이의 아우라 컬러 ',
      text3: '가 제품의 디테일로 세공되어, 세상에 단 하나뿐인 프라이빗 에디션이 탄생합니다.'
    },
    {
      quote: '"변하지 않는 가치를 담아, 가장 직관적인 형태로 소유하십시오."',
      text1: '데이터는 휘발될 수 있지만, 정교하게 만들어진 실물 오브제는 오랜 시간 곁에 남습니다. 아이의 모습이 담긴 사진을 최고급 소재에 결합하여, 언제든 눈으로 보고 손으로 질감을 느낄 수 있는 실물로 제작합니다.',
      text2: '주문과 동시에 아이의 고유 컬러 ',
      text3: '를 반영한 맞춤 공정이 시작되며, 일상에 품격을 더하는 특별한 마스터피스로 배송됩니다.'
    },
    {
      quote: '"오직 하나의 데이터로 완성되는 프라이빗 컬렉션."',
      text1: '원본 사진의 디테일을 한 치의 손상 없이 보존하며, 이를 물리적인 한정판 에디션으로 확장합니다. 당신의 갤러리 속 소장품이 완벽한 형태를 갖춘 실물 작품으로 완성되는 과정을 경험하십시오.',
      text2: '아이의 사진에서 도출된 고유한 브랜드 컬러 ',
      text3: '가 제품 전반에 고급스럽게 스며들어, 다른 누구도 소유할 수 없는 당신만의 독보적인 아카이브가 탄생합니다.'
    },
    {
      quote: '"당신의 가장 사적인 기록이 일상의 럭셔리가 됩니다."',
      text1: '단순히 사진을 촬영하는 것을 넘어, 아이와의 교감이 담긴 데이터를 당신의 라이프스타일에 걸맞은 하이엔드 에디션으로 직조해 냅니다. 주문이 확인되는 즉시 오직 한 분을 위한 1:1 맞춤 세공이 시작됩니다.',
      text2: '수많은 색채 중 오직 아이만을 위해 추출된 아우라 컬러 ',
      text3: '를 디자인의 핵심 요소로 배치하여, 일상 속에서도 그 특별한 존재감을 매일 경험할 수 있습니다.'
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
          <h3 className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase">실물 에디션 제작</h3>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white mb-4">퍼스널 맞춤 제작</h2>
        
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