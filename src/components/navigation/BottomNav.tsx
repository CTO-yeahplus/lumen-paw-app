"use client";
import { LayoutGrid, BookOpen, ScanLine, Sparkles } from "lucide-react";

interface BottomNavProps {
  activeTab: "vault" | "editorial" | "muse";
  setActiveTab: (tab: "vault" | "editorial" | "muse") => void;
  onScanClick: () => void;
}

export default function BottomNav({ activeTab, setActiveTab, onScanClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-between items-center px-6 z-30 pb-safe">
      
      {/* 1. VAULT */}
      <button 
        onClick={() => setActiveTab("vault")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}
      >
        <LayoutGrid strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">VAULT</span>
      </button>

      {/* 2. STORY */}
      <button 
        onClick={() => setActiveTab("editorial")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "editorial" ? "text-white" : "text-zinc-600"}`}
      >
        <BookOpen strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">STORY</span>
      </button>

      {/* 3. SCANNER (중앙 핵심 액션) */}
      <button 
        onClick={onScanClick} 
        className="relative -top-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 transition-transform shrink-0 mx-2"
      >
        <ScanLine strokeWidth={2.5} size={24} />
      </button>

      {/* 4. MUSE */}
      <button 
        onClick={() => setActiveTab("muse")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "muse" ? "text-white" : "text-zinc-600"}`}
      >
        <Sparkles strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">MUSE</span>
      </button>

    </nav>
  );
}