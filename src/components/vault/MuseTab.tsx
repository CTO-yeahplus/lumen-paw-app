"use client";

import { useState } from "react";
import { ConceptType } from "@/components/modals/WaitlistModal";

interface MuseTabProps {
  onOpenWaitlist: (concept: ConceptType) => void;
}

// 🍏 개별 컨셉 카드를 관리하는 독립된 슬라이더 컴포넌트
function ConceptCard({ concept, onOpenWaitlist }: { concept: any, onOpenWaitlist: (concept: ConceptType) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = concept.models[activeIndex];

  // 🍏 [핵심] 사진을 터치하면 다음 사진으로 부드럽게 넘어갑니다 (마지막 사진이면 다시 처음으로)
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (concept.models.length > 1) {
      setActiveIndex((prev) => (prev + 1) % concept.models.length);
    }
  };

  return (
    <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
      
      {/* 1. Header */}
      <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center border border-zinc-800 transition-all duration-700" 
            style={{ backgroundImage: `url('${activeModel.imageUrl}')` }} 
          />
          <div className="text-sm font-bold text-white transition-all duration-300">
            {activeModel.modelName} 
            <span className="text-zinc-500 font-normal text-[10px] ml-1.5 uppercase tracking-widest">{activeModel.breed}</span>
          </div>
        </div>
        <div className={`${concept.tagColor} text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full`}>
          {concept.name}
        </div>
      </div>

      {/* 2. Main Image Slider (사진 전체가 거대한 '다음 버튼'이 됩니다) */}
      <div 
        className="relative aspect-square w-full overflow-hidden group bg-zinc-900 cursor-pointer"
        onClick={handleNextImage} 
      >
        {concept.models.map((model: any, idx: number) => (
          <div 
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out
              ${idx === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
            style={{ backgroundImage: `url('${model.imageUrl}')` }}
            // 기존에 있던 onClick(모달 호출)은 여기서 완전히 삭제했습니다.
          />
        ))}

        {/* 💎 럭셔리 네비게이션 도트 (시각적 안내 역할 + 터치 영역 대폭 확대) */}
        {concept.models.length > 1 && (
          <div className="absolute bottom-5 left-0 w-full flex justify-center gap-1 z-20">
                {concept.models.map((_: any, idx: number) => (
                <button
                key={idx}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setActiveIndex(idx); 
                }}
                className="p-2" // 터치하기 쉽게 투명한 패딩 영역을 넓혔습니다.
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/40 w-1.5'
                }`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Footer & Action */}
      <div className="p-5 flex flex-col gap-5 bg-black/60 backdrop-blur-md border-t border-zinc-900">
        <p className="text-xs text-zinc-300 font-light tracking-wide leading-relaxed min-h-[40px] transition-all duration-300">
          {activeModel.desc}
        </p>
        {/* 🍏 모달은 오직 이 버튼을 눌렀을 때만 열립니다. */}
        <button 
          onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: activeModel.desc })}
          className="w-full h-12 text-[11px] font-bold tracking-[0.2em] uppercase bg-white text-black rounded-2xl active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Reserve This Concept
        </button>
      </div>
    </div>
  );
}

export default function MuseTab({ onOpenWaitlist }: MuseTabProps) {
  // 🍏 럭셔리 갤러리 데이터 구조로 전면 개편
  const museumConcepts = [
    {
      id: "dogwick",
      name: "Dog Wick",
      tagColor: "text-orange-500 border-orange-500/30 bg-orange-500/10",
      models: [
        {
          modelName: "JJANGU",
          breed: "Pomeranian",
          desc: "어둠 속에서 빛나는 강렬한 눈빛, 누아르의 정석.",
          imageUrl: "/images/dogwick/dogwick_01.jpg",
        },
        {
          modelName: "MAKDUNG",
          breed: "Maltese",
          desc: "순백의 코트 뒤에 감춰진 묵직하고 서늘한 카리스마.",
          imageUrl: "/images/dogwick/dogwick_02.jpg",
        },
        {
          modelName: "MONGSOON",
          breed: "Poodle",
          desc: "어둠을 가르는 우아하고 날카로운 실루엣의 완성.",
          imageUrl: "/images/dogwick/dogwick_03.jpg",
        },
        {
          modelName: "LAND",
          breed: "Retriever",
          desc: "흔들림 없는 눈빛이 뿜어내는 범접할 수 없는 아우라.",
          imageUrl: "/images/dogwick/dogwick_04.jpg",
        },
        {
          modelName: "JOY",
          breed: "Bichon Frise",
          desc: "부드러움 속에 숨겨진 강인하고 에너제틱한 생명력.",
          imageUrl: "/images/dogwick/dogwick_05.jpg",
        }
      ]
    },
    {
      id: "undercut",
      name: "Under-cut",
      tagColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
      models: [
        {
          modelName: "LUNA",
          breed: "Pomeranian",
          desc: "강화유리 아래에서 포착된 가장 순수하고 유니크한 시선.",
          imageUrl: "/images/undercut_04.png",
        }
      ]
    }
  ];

  return (
    <div className="transition-all duration-500 ease-in-out">
      {/* Muse Intro */}
      <div className="px-6 pt-10 pb-2 text-zinc-400 text-sm word-break-keep leading-relaxed">
        견생네컷 X 사진작가의 콜라보에서 탄생할 최상위 1% 마스터피스들을 감상하십시오. 해당 컨셉의 <b>VIP 우선 예약 대기열(Waitlist)</b>에 등록할 수 있습니다.
      </div>

      {/* Feed List */}
      <div className="flex flex-col gap-10 px-6 py-8 pb-24">
        {museumConcepts.map((concept) => (
          <ConceptCard 
            key={concept.id} 
            concept={concept} 
            onOpenWaitlist={onOpenWaitlist} 
          />
        ))}
      </div>
    </div>
  );
}