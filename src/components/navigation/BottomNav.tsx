"use client";
import { LayoutGrid, BookOpen, ScanLine, Sparkles } from "lucide-react";

interface BottomNavProps {
  activeTab: "vault" | "editorial" | "muse";
  setActiveTab: (tab: "vault" | "editorial" | "muse") => void;
  onScanClick: () => void;
}

export default function BottomNav({ activeTab, setActiveTab, onScanClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-between items-center px-2 md:px-6 z-30 pb-safe">
      
      {/* 1. VAULT */}
      <button 
        onClick={() => setActiveTab("vault")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
      >
        <LayoutGrid strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">VAULT</span>
      </button>

      {/* 2. STORY */}
      <button 
        onClick={() => setActiveTab("editorial")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "editorial" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
      >
        <BookOpen strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">STORY</span>
      </button>

      {/* 3. SCANNER (조화로운 밸런스 유지) */}
      <button 
        onClick={onScanClick} 
        className="flex-1 flex flex-col items-center gap-1.5 transition-all group"
      >
        <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)] group-active:scale-90 transition-transform">
          <ScanLine strokeWidth={2.5} size={18} />
        </div>
        <span className="text-[8px] font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">SCAN</span>
      </button>

      {/* 4. MUSE */}
      <button 
        onClick={() => setActiveTab("muse")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "muse" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
      >
        <Sparkles strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">MUSE</span>
      </button>

    </nav>
  );
}