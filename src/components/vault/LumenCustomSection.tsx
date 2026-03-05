"use client";
import { useState, useEffect } from "react";
import { CheckoutItem } from "@/components/modals/CheckoutModal";

interface LumenCustomSectionProps {
  dominantColor: string;
  onCheckout: (item: CheckoutItem) => void;
}

export default function LumenCustomSection({ dominantColor, onCheckout }: LumenCustomSectionProps) {
  const [copyIndex, setCopyIndex] = useState<number>(0);

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
      quote: '"가장 소중한 것은 눈에 보이지 않지만, 우리는 그것을 손으로 곁에 둘 수 있습니다."',
      text1: '아이와의 벅찬 교감을 담아낸 이 사진은 그 자체로 이미 걸작입니다. 이제 이 찰나의 기적에 장인의 온기를 더해, 당신이 직접 만질 수 있는 물리적 오브제로 소유하십시오.',
      text2: '아이만의 시그니처 컬러',
      text3: '로 세공된 이 작품은 당신과 아이의 유대를 영원히 증명합니다.'
    }
  ];

  const currentCopy = copywritingList[copyIndex];

  if (!dominantColor) return null;

  return (
    <div className="mt-12 p-6 rounded-[32px] border border-zinc-800/50 bg-zinc-900/40 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundColor: dominantColor }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: dominantColor, color: dominantColor }} />
          <h3 className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase">Physical Extension</h3>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white mb-4">LUMEN Custom</h2>
        
        <p className="text-xs text-zinc-400 font-light leading-[1.8] mb-8 word-break-keep transition-opacity duration-1000">
          <strong className="text-white font-serif italic text-sm block mb-3">{currentCopy.quote}</strong>
          {currentCopy.text1}<br/><br/>{currentCopy.text2}
          <span className="font-mono font-bold px-1.5 py-0.5 rounded-md bg-black/50 border border-zinc-800 text-[10px] mx-1 shadow-lg relative inline-block -translate-y-[1px]" style={{color: dominantColor}}>
            {dominantColor}
          </span>
          {currentCopy.text3}
        </p>

        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => onCheckout({ id: 'case', name: 'Bespoke Phone Case', price: '₩ 45,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-7 h-12 border-[1.5px] rounded-[6px] relative flex justify-end p-1 transition-colors duration-500" style={{ borderColor: dominantColor }}>
              <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: dominantColor }} />
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Case</span>
          </button>

          <button onClick={() => onCheckout({ id: 'frame', name: 'LUMEN Art Frame', price: '₩ 120,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-10 h-12 border-[1.5px] border-zinc-700 rounded-sm relative flex items-center justify-center transition-colors duration-500 group-hover:border-zinc-500">
              <div className="w-6 h-8 border border-dashed flex items-center justify-center" style={{ borderColor: dominantColor }}><div className="w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: dominantColor }} /></div>
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Frame</span>
          </button>

          <button onClick={() => onCheckout({ id: 'collar', name: 'Bespoke Leather Collar', price: '₩ 85,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-10 h-10 border-[2px] rounded-full relative transition-transform duration-700 group-hover:rotate-12" style={{ borderColor: dominantColor }}>
              <div className="absolute -right-1 top-1 w-2 h-4 bg-zinc-400 rounded-sm border border-zinc-800" /><div className="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-zinc-500" />
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Collar</span>
          </button>
        </div>
      </div>
    </div>
  );
}