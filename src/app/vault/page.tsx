"use client";
import { useState } from "react";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal"; // 🍏 모달 컴포넌트 임포트

export default function VaultPage() {
  const [activeTab, setActiveTab] = useState<"vault" | "collection">("vault");
  
  // 🍏 모달 제어 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);

  // 컨셉 데이터
  const concepts = {
    dogwick: { id: "dogwick", name: "Dog Wick (독윅)", desc: "거칠고 우아한 느와르 컨셉. 현재 완벽한 조명 대비를 위한 AI 렌더링 최적화 중입니다." },
    undercut: { id: "undercut", name: "Under-cut (견생밑컷)", desc: "강화유리 아래에서 포착하는 젤리 발바닥. 초소형견 앵글 마운트 테스트 중입니다." }
  };

  // 모달 열기 함수
  const openWaitlist = (concept: ConceptType) => {
    setSelectedConcept(concept);
    setIsModalOpen(true);
  };

  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-24 overflow-x-hidden font-sans relative">
      
      {/* Top Header */}
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-xs font-bold tracking-[0.3em] uppercase mb-1">
            {activeTab === "vault" ? "Private Vault" : "LUMEN Muse"}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight transition-all">
            {activeTab === "vault" ? "My Masterpieces" : "The Collection"}
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold shadow-lg">CJ</div>
      </header>

      {/* Tab 1: Private Vault */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold tracking-wide">Latest Capture</h3>
            <span className="text-blue-500 text-xs font-bold bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-500/20">New</span>
          </div>
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_01.png')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full">#Warm_Ivory</span>
              </div>
              <div className="absolute bottom-8 left-6">
                <h3 className="text-4xl font-extrabold tracking-tighter mb-1">COCO</h3>
                <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium">Maltipoo · 2026.03.04</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-zinc-900 mt-4">
          <h3 className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">Archives</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden relative border border-zinc-800">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('/images/model_02.png')" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <div className="text-white text-xs font-bold">25.12.24</div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative border border-zinc-800">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-70" style={{ backgroundImage: "url('/images/model_03.png')" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <div className="text-white text-xs font-bold">25.08.15</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab 2: The Collection */}
      <div className={`transition-all duration-500 ease-in-out ${activeTab === "collection" ? "opacity-100 block" : "opacity-0 hidden"}`}>
        <div className="px-6 pt-6 pb-2 text-zinc-400 text-sm word-break-keep leading-relaxed">
          LUMEN 스튜디오에서 탄생한 최상위 1% 마스터피스들을 감상하십시오. 아직 정식 출시되지 않은 컨셉의 <b>우선 예약권</b>을 발급받을 수 있습니다.
        </div>

        <div className="flex flex-col gap-8 px-6 py-6">
          {/* Feed Item 1 (Dog Wick) */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_02.png')" }} />
                <div className="text-sm font-bold text-white">MAX</div>
              </div>
              <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/30">Dog Wick</div>
            </div>
            <div className="aspect-square w-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_02.png')" }} />
            <div className="p-5 flex justify-between items-center bg-black">
              <p className="text-xs text-zinc-400">카리스마 넘치는 느와르 컨셉</p>
              {/* 🍏 리팩토링된 모달 호출 함수 사용 */}
              <button 
                onClick={() => openWaitlist(concepts.dogwick)}
                className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full active:scale-95 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                이 컨셉 예약하기
              </button>
            </div>
          </div>

          {/* Feed Item 2 (Under-cut) */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_04.png')" }} />
                <div className="text-sm font-bold text-white">LUNA</div>
              </div>
              <div className="text-purple-500 text-[10px] font-bold uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/30">Under-cut</div>
            </div>
            <div className="aspect-square w-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('/images/model_04.png')" }} />
            <div className="p-5 flex justify-between items-center bg-black">
              <p className="text-xs text-zinc-400">강화유리 아래 젤리 발바닥</p>
              {/* 🍏 리팩토링된 모달 호출 함수 사용 */}
              <button 
                onClick={() => openWaitlist(concepts.undercut)}
                className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full active:scale-95 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                이 컨셉 예약하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-xl border-t border-zinc-900 flex justify-around items-center px-10 z-30 pb-safe">
        <button onClick={() => setActiveTab("vault")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          <span className="text-[9px] font-bold tracking-wider">VAULT</span>
        </button>
        <button onClick={() => setActiveTab("collection")} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === "collection" ? "text-white" : "text-zinc-600"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          <span className="text-[9px] font-bold tracking-wider">MUSE</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span className="text-[9px] font-bold tracking-wider">PROFILE</span>
        </button>
      </nav>

      {/* 🍏 분리된 컴포넌트 마운트 (단 한 줄로 깔끔하게 정리됨) */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        concept={selectedConcept} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
}