"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditorialType { 
  id: string; 
  slug: string; 
  title: string; 
  image_url: string; 
  content: string; 
  created_at?: string; 
}

export default function EditorialTab({ editorials }: { editorials: EditorialType[] }) {
  const router = useRouter();
  
  // 🍏 처음에 보여줄 매거진의 개수 (예: 5개)
  const [visibleCount, setVisibleCount] = useState(5);

  // 🍏 전체 데이터 중 visibleCount 만큼만 잘라서 보여줍니다.
  const visibleEditorials = editorials.slice(0, visibleCount);

  // 🍏 더 보기 버튼을 누르면 보여줄 개수를 5개 더 늘립니다.
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="px-6 py-10 border-t border-zinc-900 bg-black">
      <div className="mb-12 text-center">
        <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">LUMEN Editorial</h3>
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">The Brand Storytelling</p>
      </div>
      
      <div className="flex flex-col gap-12">
        {/* 🍏 잘라낸 데이터(visibleEditorials)만 렌더링합니다 */}
        {visibleEditorials.map((edit) => (
          <article key={edit.id} className="cursor-pointer group animate-in fade-in slide-in-from-bottom-4 duration-700" onClick={() => router.push(`/editorial/${edit.slug}`)}>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 border border-zinc-800/50">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform grayscale duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
            </div>
            <div className="px-2">
              {edit.created_at && (
                <p className="text-[10px] text-zinc-500 font-mono mb-2 tracking-widest uppercase">
                  {new Date(edit.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              )}
              <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light">{edit.content}</p>
            </div>
          </article>
        ))}
      </div>

      {/* 🍏 숨겨진 데이터가 더 남아있을 때만 '더 보기' 버튼을 보여줍니다 */}
      {visibleCount < editorials.length && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Discover More</span>
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
      
      {/* 모든 글을 다 보았을 때 나타나는 우아한 마침표 */}
      {visibleCount >= editorials.length && editorials.length > 0 && (
        <div className="mt-20 text-center">
          <div className="w-1 h-1 bg-zinc-700 rounded-full mx-auto mb-4" />
          <p className="text-[9px] text-zinc-600 tracking-[0.4em] uppercase font-serif italic">End of Archive</p>
        </div>
      )}
    </div>
  );
}