"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditorialPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<{ title: string; image_url: string; content: string } | null>(null);
  const [brandColor, setBrandColor] = useState<string>("#ffffff");
  
  // 🍏 매거진 중간에 삽입될 4개의 컬러 팔레트 배열 상태 추가
  const [palette, setPalette] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // 1. 메인 브랜드 컬러
    const storedColor = sessionStorage.getItem("lumen_dominant_color") || "#ffffff";
    setBrandColor(storedColor);

    // 🍏 2. 하드코딩 완전 삭제! 고객의 원본 json.json 컬러칩을 그대로 가져옵니다.
    const storedPalette = sessionStorage.getItem("lumen_color_palette");
    if (storedPalette) {
      try {
        const parsedPalette = JSON.parse(storedPalette);
        // 원본 배열이 있으면 디자인 밸런스를 위해 최대 4개까지만 잘라서 뿌려줍니다.
        setPalette(parsedPalette.slice(0, 4));
      } catch(e) {
        setPalette([storedColor]); // 에러 시 메인 컬러만
      }
    } else {
      setPalette([storedColor]); // 저장된 팔레트가 없을 경우의 대비책
    }

    const fetchEditorial = async () => {
      const { data: editorial } = await supabase
        .from('editorials')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (editorial) setData(editorial);
      setIsLoading(false);
    };
    fetchEditorial();
  }, [slug]);

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xs tracking-widest animate-pulse">LOADING MASTERPIECE...</div>;
  if (!data) return <div className="min-h-screen bg-black text-white p-10">매거진을 찾을 수 없습니다.</div>;

  const parts = data.content.split('\n\n');
  const quote = parts.length > 0 && parts[0].startsWith('"') ? parts[0] : "";
  const bodyParts = quote ? parts.slice(1) : parts;

  return (
    <main className="w-full min-h-screen bg-black text-white font-sans relative pb-20">
      
      {/* 닫기 / 뒤로가기 버튼 */}
      <button onClick={() => router.back()} className="fixed top-8 left-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>

      {/* 매거진 풀스크린 커버 */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${data.image_url}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
        
        <div className="absolute bottom-12 left-8 right-8">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block transition-colors duration-1000" style={{ color: brandColor }}>
            LUMEN Editorial
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight text-white shadow-black drop-shadow-2xl mb-6 word-break-keep">
            {data.title}
          </h1>
          <div className="w-16 h-1.5 rounded-full transition-colors duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: brandColor }} />
        </div>
      </div>

      {/* AI가 작성한 본문 */}
      <article className="px-8 py-16 md:px-24 md:py-24 max-w-3xl mx-auto bg-[#050505]">
        
        {quote && (
          <blockquote className="mb-14 border-l-4 pl-6 py-2 transition-colors duration-1000" style={{ borderColor: brandColor }}>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-zinc-200 word-break-keep">{quote}</p>
          </blockquote>
        )}
        
        <div className="space-y-10 text-zinc-400 text-base md:text-lg font-light leading-[2.2] word-break-keep">
          {bodyParts.map((paragraph, idx) => {
            if (!paragraph.trim()) return null;

            // 첫 번째 문단 렌더링 시, 그 바로 아래에 🍏 [브랜드 컬러 팔레트 블록]을 우아하게 삽입합니다.
            if (idx === 0) {
              return (
                <div key={idx}>
                  <p className="text-zinc-300">
                    <span className="float-left text-6xl font-serif mt-2 mr-4 font-bold transition-colors duration-1000" style={{ color: brandColor }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.substring(1)}
                  </p>
                  
                  {/* 🍏 매거진 내장 컬러 팔레트 (Editorial Palette) */}
                  <div className="my-16 py-12 border-y border-zinc-900 flex flex-col items-center bg-zinc-950/30 rounded-3xl">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-8">
                      The Identity Palette
                    </span>
                    <div className="flex gap-5 md:gap-8 justify-center w-full px-4">
                      {palette.map((colorHex, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                          <div 
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl transition-transform duration-700 group-hover:scale-110 ${i === 0 ? 'border-2 border-white' : 'border border-zinc-700'}`} 
                            style={{ backgroundColor: colorHex }} 
                          />
                          <span className={`text-[9px] font-mono uppercase tracking-wider ${i === 0 ? 'text-white font-bold' : 'text-zinc-600'}`}>
                            {colorHex}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-[10px] text-zinc-600 tracking-widest uppercase">
                      Based on AI Color Extraction
                    </p>
                  </div>
                </div>
              );
            }

            // 나머지 문단 렌더링
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
          <span>AI Vision Analysis by Gemini</span>
          <span>Photographed by LUMEN</span>
        </div>
      </article>
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => { navigator.clipboard.writeText(window.location.href); alert("링크가 복사되었습니다. 인스타그램에 공유해보세요!"); }}
          className="bg-black/80 backdrop-blur-xl border border-zinc-700 text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)] whitespace-nowrap"
        >
          Share this Editorial
        </button>
      </div>

    </main>
  );
}