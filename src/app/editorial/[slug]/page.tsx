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
  const [palette, setPalette] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🍏 신규: 현재 선택된 배경 오라(Aura) 상태
  const [activeAura, setActiveAura] = useState<string>("black");

  useEffect(() => {
    if (!slug) return;

    const fetchAllData = async () => {
      setIsLoading(true);
      
      // 1. 사용자 인증 확인
      const { data: { user } } = await supabase.auth.getUser();
      
      // 2. DB에서 마스터피스 데이터(컬러칩) 가져오기 (영구 저장소)
      if (user) {
        const { data: mpData } = await supabase
          .from('masterpieces')
          .select('color_palette, dominant_color')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1);

        if (mpData && mpData.length > 0) {
          setBrandColor(mpData[0].dominant_color || "#ffffff");
          setPalette(mpData[0].color_palette || []);
        }
      }

      // 3. 에디토리얼 본문 데이터 가져오기
      const { data: editorial } = await supabase
        .from('editorials')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (editorial) setData(editorial);
      setIsLoading(false);
    };

    fetchAllData();
  }, [slug]);

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xs tracking-widest animate-pulse">LOADING MASTERPIECE...</div>;
  if (!data) return <div className="min-h-screen bg-black text-white p-10">매거진을 찾을 수 없습니다.</div>;

  const parts = data.content.split('\n\n');
  const quote = parts.length > 0 && parts[0].startsWith('"') ? parts[0] : "";
  const bodyParts = quote ? parts.slice(1) : parts;

  return (
    // 🍏 강제 다크모드: 기본 bg-black 설정 및 선택한 컬러에 따른 오라(Aura) 효과 (농도 15% 적용)
    <main 
      className="w-full min-h-screen text-white font-sans relative pb-20 transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: activeAura === "black" ? "#000000" : `${activeAura}15` }}
    >
      
      {/* 닫기 버튼 */}
      <button onClick={() => router.back()} className="fixed top-8 left-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>

      {/* 매거진 풀스크린 커버 */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${data.image_url}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
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
      {/* 🍏 배경을 투명하게 설정하여 main의 오라 컬러가 투과되도록 함 */}
      <article className="px-8 py-16 md:px-24 md:py-24 max-w-3xl mx-auto">
        
        {quote && (
          <blockquote className="mb-14 border-l-4 pl-6 py-2 transition-colors duration-1000" style={{ borderColor: brandColor }}>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-zinc-200 word-break-keep">{quote}</p>
          </blockquote>
        )}
        
        <div className="space-y-10 text-zinc-400 text-base md:text-lg font-light leading-[2.2] word-break-keep">
          {bodyParts.map((paragraph, idx) => {
            if (!paragraph.trim()) return null;

            if (idx === 0) {
              return (
                <div key={idx}>
                  <p className="text-zinc-300">
                    <span className="float-left text-6xl font-serif mt-2 mr-4 font-bold transition-colors duration-1000" style={{ color: brandColor }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.substring(1)}
                  </p>
                  
                  {/* 🍏 인터랙티브 컬러 팔레트 (The Aura Palette) */}
                  <div className="my-16 py-12 border-y border-zinc-900 flex flex-col items-center bg-zinc-950/30 rounded-3xl backdrop-blur-sm">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-8">
                      Select Your Identity Aura
                    </span>
                    
                    <div className="flex flex-wrap gap-5 md:gap-8 justify-center w-full px-4">
                      {palette.slice(0, 8).map((colorHex, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActiveAura(colorHex)}
                          className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                          <div 
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-700 
                              ${activeAura === colorHex ? 'scale-110 border-2 border-white' : 'border border-zinc-800 opacity-60 hover:opacity-100'}
                            `} 
                            style={{ 
                              backgroundColor: colorHex,
                              boxShadow: activeAura === colorHex ? `0 0 25px ${colorHex}80` : 'none'
                            }} 
                          />
                          <span className={`text-[9px] font-mono uppercase tracking-wider transition-colors ${activeAura === colorHex ? 'text-white font-bold' : 'text-zinc-600'}`}>
                            {colorHex}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* 오라 초기화 버튼 */}
                    <button 
                      onClick={() => setActiveAura("black")}
                      className="mt-10 text-[8px] text-zinc-500 border border-zinc-800 px-4 py-1.5 rounded-full hover:text-white hover:border-zinc-500 transition-all uppercase tracking-widest"
                    >
                      Reset to Pure Black
                    </button>

                    <p className="mt-6 text-[10px] text-zinc-600 tracking-widest uppercase">
                      Based on AI Color Extraction
                    </p>
                  </div>
                </div>
              );
            }

            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
          <span>AI Vision Analysis by LK Ventures</span>
          <span>Photographed by 견생네컷</span>
        </div>
      </article>

      {/* 컬렉션 복귀 버튼 */}
      <div className="px-8 pb-32 pt-10 flex justify-center">
        <button 
          onClick={() => router.push('/vault')}
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Back to Collection</span>
        </button>
      </div>
      
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