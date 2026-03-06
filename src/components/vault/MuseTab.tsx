"use client";

import { ConceptType } from "@/components/modals/WaitlistModal";

interface MuseTabProps {
  onOpenWaitlist: (concept: ConceptType) => void;
}

export default function MuseTab({ onOpenWaitlist }: MuseTabProps) {
  // 🍏 예약 모델 데이터 정의
  const museumConcepts = [
    {
      id: "dogwick",
      name: "Dog Wick",
      modelName: "MAX",
      breed: "Poodle",
      desc: "카리스마 넘치는 느와르 컨셉",
      imageUrl: "/images/dogwick_04.jpg",
      tagColor: "text-orange-500 border-orange-500/30 bg-orange-500/10"
    },
    {
      id: "undercut",
      name: "Under-cut",
      modelName: "LUNA",
      breed: "Pomeranian",
      desc: "강화유리 아래에서 본 젤리 발바닥",
      imageUrl: "/images/undercut_04.png",
      tagColor: "text-purple-500 border-purple-500/30 bg-purple-500/10"
    }
  ];

  return (
    <div className="transition-all duration-500 ease-in-out">
      {/* Muse Intro */}
      <div className="px-6 pt-10 pb-2 text-zinc-400 text-sm word-break-keep leading-relaxed">
        LUMEN 스튜디오에서 탄생한 최상위 1% 마스터피스들을 감상하십시오. 사진을 터치하면 해당 컨셉의 <b>우선 예약 대기열(Waitlist)</b>에 등록할 수 있습니다.
      </div>

      {/* Feed List */}
      <div className="flex flex-col gap-8 px-6 py-6 pb-20">
        {museumConcepts.map((concept) => (
          <div 
            key={concept.id} 
            className="relative rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center border border-zinc-800" 
                  style={{ backgroundImage: `url('${concept.imageUrl}')` }} 
                />
                <div className="text-sm font-bold text-white">
                  {concept.modelName} <span className="text-zinc-500 font-normal text-[10px] ml-1 uppercase tracking-widest">{concept.breed}</span>
                </div>
              </div>
              <div className={`${concept.tagColor} text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full`}>
                {concept.name}
              </div>
            </div>

            {/* Main Image */}
            <div 
              className="aspect-square w-full bg-cover bg-center hover:grayscale-0 transition-all duration-1000 cursor-pointer" 
              style={{ backgroundImage: `url('${concept.imageUrl}')` }}
              onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: concept.desc })}
            />

            {/* Footer & Action */}
            <div className="p-5 flex flex-col gap-4 bg-black/60 backdrop-blur-md border-t border-zinc-900">
              <p className="text-xs text-zinc-400 font-light tracking-wide">{concept.desc}</p>
              <button 
                onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: concept.desc })}
                className="w-full h-12 text-[11px] font-bold tracking-[0.2em] uppercase bg-white text-black rounded-2xl active:scale-[0.98] transition-all shadow-lg"
              >
                Reserve This Concept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}