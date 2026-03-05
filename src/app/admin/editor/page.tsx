// src/app/admin/editor/page.tsx

"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function AIEditorAdmin() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // 🍏 Data States
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brandColor, setBrandColor] = useState<string>(""); // 🍏 추출된 컬러 상태 추가
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  
  // 🍏 Loading States
  const [isUploading, setIsUploading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false); // 🍏 추출 로딩 상태
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/vault");
        return;
      }
      setIsAuthorized(true);
      setIsCheckingAuth(false);
    };
    checkAdminAuth();
  }, [router]);

  // 🍏 1. 수동 파일 업로드 로직 (기존 유지)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage.from('editorials').upload(fileName, file);
      if (error) throw error;
      const { data } = supabase.storage.from('editorials').getPublicUrl(fileName);
      setImageUrl(data.publicUrl);
    } catch (e) { alert("업로드 실패"); }
    setIsUploading(false);
  };

  // 🍏 2. QR URL 자동 추출 로직 (신규 추가)
  const handleUrlExtract = async () => {
    if (!sourceUrl || !sourceUrl.includes("chemistry")) return alert("유효한 인생네컷 URL을 입력하세요.");
    setIsExtracting(true);
    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sourceUrl })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "추출 실패");

      // 추출된 이미지 중 가장 첫 번째 이미지를 에디토리얼 커버로 사용
      if (data.images && data.images.length > 0) setImageUrl(data.images[0]);
      // 추출된 컬러칩의 첫 번째 색상을 브랜드 컬러로 저장
      if (data.colorChips && data.colorChips.length > 0) setBrandColor(data.colorChips[0]);
      
      alert("S3 데이터 추출 및 컬러 분석이 완료되었습니다.");
    } catch (e: any) { 
      alert(`🚨 추출 에러:\n${e.message}`);
    }
    setIsExtracting(false);
  };

  // 🍏 3. AI 제너레이터 실행 (컬러 데이터 함께 전송)
  const handleGenerate = async () => {
    if (!imageUrl) return alert("이미지를 먼저 준비하세요.");
    setIsGenerating(true);
    try {
      // API로 이미지 URL뿐만 아니라 추출된 brandColor도 함께 넘겨줍니다.
      const res = await fetch("/api/editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, brandColor }) 
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "서버 통신 실패");

      setTitle(data.title || "THE UNTITLED MASTERPIECE");
      setContent(data.content || "본문 생성에 실패했습니다.");
      setSlug((data.title || "untitled").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    } catch (e: any) { 
      alert(`🚨 에러 발생:\n${e.message}`);
    }
    setIsGenerating(false);
  };

  const handlePublish = async () => {
    if (!title || !slug || !imageUrl || !content) return alert("모든 항목을 입력하세요.");
    setIsSaving(true);
    try {
      const { error } = await supabase.from('editorials').insert([{ title, slug, image_url: imageUrl, content }]);
      if (error) throw error;
      alert("발행 완료!");
    } catch (e) { alert("발행 실패: URL SLUG가 중복되었는지 확인하세요."); }
    setIsSaving(false);
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-black" />;

  return (
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-[#0a0a0a] text-zinc-300 font-sans flex flex-col overflow-hidden">
      
      <nav className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-black/80 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold tracking-tighter text-lg">LUMEN STUDIO</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">AI Editorial Desk</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            AUTHORIZED: {ADMIN_EMAIL}
          </div>
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">✕</button>
        </div>
      </nav>

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full">
        
        {/* Left Panel */}
        <div className="lg:col-span-4 p-8 border-r border-zinc-800 space-y-8 overflow-y-auto bg-black/40 h-full scrollbar-hide">
          
          <section>
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">1. Asset Injection</h3>
            
            {/* 🍏 S3 URL 자동 추출 영역 추가 */}
            <div className="space-y-2 mb-6">
              <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">LIFE4CUT QR URL</label>
              <div className="flex gap-2">
                <input 
                  value={sourceUrl} 
                  onChange={e => setSourceUrl(e.target.value)} 
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:border-zinc-500 transition-all" 
                  placeholder="Paste URL here..." 
                />
                <button 
                  onClick={handleUrlExtract}
                  disabled={isExtracting || !sourceUrl}
                  className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 rounded-xl disabled:opacity-30"
                >
                  {isExtracting ? "..." : "Extract"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <span className="text-[9px] font-bold text-zinc-600 tracking-widest uppercase">OR MANUAL UPLOAD</span>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>

            {/* 수동 업로드 (기존) */}
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
            <div onClick={() => fileInputRef.current?.click()} className="aspect-video rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-600 transition-all overflow-hidden group relative">
              {imageUrl ? (
                <><img src={imageUrl} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" /><div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-sm transition-opacity"><span className="text-white text-xs font-bold tracking-widest">CHANGE IMAGE</span></div></>
              ) : <span className="text-xs font-bold text-zinc-500 tracking-widest">+ UPLOAD IMAGE</span>}
            </div>
            
            {/* 🍏 추출된 컬러칩 표시 영역 */}
            {brandColor && (
              <div className="mt-4 flex items-center gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                <div className="w-6 h-6 rounded-full border border-zinc-700" style={{ backgroundColor: brandColor }} />
                <span className="text-[10px] text-zinc-400 font-mono">EXTRACTED COLOR: {brandColor}</span>
              </div>
            )}
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">2. AI Metadata & Content</h3>
            <div className="space-y-2"><label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">MAGAZINE TITLE</label><input value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-zinc-500 transition-all" placeholder="Title (e.g. THE SILENT NOIR)" /></div>
            <div className="space-y-2"><label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">URL SLUG</label><input value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 font-mono" placeholder="the-silent-noir" /></div>
            <div className="space-y-2 pt-2">
              <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">EDITORIAL CONTENT (AI GENERATED)</label>
              <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full h-40 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-300 focus:outline-none focus:border-zinc-500 transition-all resize-none leading-relaxed word-break-keep" placeholder="AI가 분석한 역사적 명언과 평론이 이곳에 입력됩니다." />
            </div>
          </section>

          <div className="pt-4 space-y-3 pb-10">
            <button onClick={handleGenerate} disabled={isGenerating || !imageUrl} className="w-full h-16 bg-white text-black font-black text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-30 disabled:active:scale-100 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              {isGenerating ? "AI ANALYZING MASTERPIECE..." : "Request AI Analysis"}
            </button>
            <button onClick={handlePublish} disabled={!content || isSaving} className="w-full h-14 bg-blue-600 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-blue-500 active:scale-[0.98] transition-all disabled:opacity-30 disabled:bg-zinc-800">
              {isSaving ? "PUBLISHING..." : "Publish to Global"}
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-8 p-10 bg-[#050505] overflow-y-auto h-full flex flex-col items-center relative">
          
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8 mt-4">Live App Preview</h3>

          <div className="w-full max-w-[420px] bg-black border-[8px] border-zinc-900 rounded-[50px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative shrink-0 aspect-[9/19.5]">
            
            {isGenerating && (
              <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
                <p className="text-[10px] font-bold text-white tracking-[0.3em] uppercase animate-pulse mb-2">Editor is writing</p>
                <p className="text-[10px] text-zinc-500">Gemini Pro Vision Analysis</p>
              </div>
            )}

            <div className="flex-1 overflow-y-auto scrollbar-hide">
               <div className="relative h-[55%] w-full">
                  <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${imageUrl || "/images/img_01.png"}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    {/* 🍏 타이틀 색상에 추출된 brandColor 실시간 반영 */}
                    <p className="text-[8px] font-bold tracking-[0.4em] uppercase mb-2 transition-colors duration-1000" style={{ color: brandColor || "#a1a1aa" }}>
                      LUMEN EDITORIAL
                    </p>
                    <h1 className="text-4xl font-serif font-bold text-white leading-[1.1] shadow-black drop-shadow-2xl mb-4">
                      {title || "THE MASTERPIECE"}
                    </h1>
                    {/* 🍏 밑줄 색상 실시간 반영 */}
                    <div className="w-12 h-1 rounded-full transition-colors duration-1000" style={{ backgroundColor: brandColor || "#ffffff" }} />
                  </div>
               </div>
               
               <div className="p-8 space-y-6 bg-black">
                  <div className="text-[13px] text-zinc-300 leading-[2.2] font-light word-break-keep whitespace-pre-wrap">
                    {content || "이미지와 브랜드 컬러 분석을 시작하면, 이 스크린 위에 우아하게 렌더링됩니다."}
                  </div>
               </div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}