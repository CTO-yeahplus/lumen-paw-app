"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function AIEditorAdmin() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  
  const [isUploading, setIsUploading] = useState(false);
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

  const handleGenerate = async () => {
    if (!imageUrl) return alert("이미지를 먼저 업로드하세요.");
    setIsGenerating(true); // 🍏 로딩 애니메이션 시작
    try {
      const res = await fetch("/api/editor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "서버 통신 실패");

      setTitle(data.title || "THE UNTITLED MASTERPIECE");
      setContent(data.content || "본문 생성에 실패했습니다.");
      setSlug((data.title || "untitled").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    } catch (e: any) { 
      alert(`🚨 에러 발생:\n${e.message}`);
    }
    setIsGenerating(false); // 🍏 로딩 애니메이션 종료
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
    // 🍏 글로벌 레이아웃의 max-width 제약을 부수고 모니터 전체를 덮는 fixed w-screen 아키텍처
    <div className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-[#0a0a0a] text-zinc-300 font-sans flex flex-col overflow-hidden">
      
      {/* 🍏 Top Navigation Bar */}
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
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">
            ✕
          </button>
        </div>
      </nav>

      {/* 🍏 Main Workspace Grid (모니터 가로를 전부 사용) */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full">
        
        {/* 🍏 Left Panel: Input & Controls (4 Columns) */}
        <div className="lg:col-span-4 p-8 border-r border-zinc-800 space-y-8 overflow-y-auto bg-black/40 h-full scrollbar-hide">
          
          <section>
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">1. Visual Asset</h3>
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-video rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-600 transition-all overflow-hidden group relative"
            >
              {imageUrl ? (
                <>
                  <img src={imageUrl} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-sm transition-opacity">
                    <span className="text-white text-xs font-bold tracking-widest">CHANGE IMAGE</span>
                  </div>
                </>
              ) : (
                <span className="text-xs font-bold text-zinc-500 tracking-widest">+ UPLOAD S3 IMAGE</span>
              )}
            </div>
            {isUploading && <p className="text-[10px] text-blue-500 mt-3 font-bold animate-pulse tracking-widest">SECURE UPLOADING...</p>}
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">2. AI Metadata & Content</h3>
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">MAGAZINE TITLE</label>
              <input value={title || ""} onChange={e => setTitle(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-zinc-500 transition-all" placeholder="Title (e.g. THE SILENT NOIR)" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">URL SLUG</label>
              <input value={slug || ""} onChange={e => setSlug(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 font-mono" placeholder="the-silent-noir" />
            </div>
            <div className="space-y-2 pt-2">
              <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">EDITORIAL CONTENT (AI GENERATED)</label>
              {/* 🍏 좌측 패널에서도 직접 글을 수정할 수 있도록 textarea 추가 */}
              <textarea 
                value={content} 
                onChange={e => setContent(e.target.value)} 
                className="w-full h-40 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-300 focus:outline-none focus:border-zinc-500 transition-all resize-none leading-relaxed word-break-keep" 
                placeholder="AI가 분석한 역사적 명언과 평론이 이곳에 입력됩니다." 
              />
            </div>
          </section>

          <div className="pt-4 space-y-3 pb-10">
            <button 
              onClick={handleGenerate} 
              disabled={isGenerating || !imageUrl}
              className="w-full h-16 bg-white text-black font-black text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-30 disabled:active:scale-100 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              {isGenerating ? "AI ANALYZING MASTERPIECE..." : "Request AI Analysis"}
            </button>
            <button 
              onClick={handlePublish}
              disabled={!content || isSaving}
              className="w-full h-14 bg-blue-600 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-blue-500 active:scale-[0.98] transition-all disabled:opacity-30 disabled:bg-zinc-800"
            >
              {isSaving ? "PUBLISHING..." : "Publish to Global"}
            </button>
          </div>
        </div>

        {/* 🍏 Right Panel: Live Mobile Preview (8 Columns) - 중앙 정렬 */}
        <div className="lg:col-span-8 p-10 bg-[#050505] overflow-y-auto h-full flex flex-col items-center">
          
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-8 mt-4">Live App Preview</h3>

          {/* iPhone Mockup Container */}
          <div className="w-full max-w-[420px] bg-black border-[8px] border-zinc-900 rounded-[50px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative shrink-0 aspect-[9/19.5]">
            {/* 🍏 AI 작업 중일 때 나타나는 럭셔리 로딩 오버레이 */}
            {isGenerating && (
              <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
                <p className="text-[10px] font-bold text-white tracking-[0.3em] uppercase animate-pulse mb-2">Editor is writing</p>
                <p className="text-[10px] text-zinc-500">Gemini Pro Vision Analysis</p>
              </div>
            )}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
               {/* Cover Image */}
               <div className="relative h-[55%] w-full">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl || "/images/img_01.png"}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Headline Overlaid */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[8px] font-bold tracking-[0.4em] text-zinc-400 uppercase mb-2">LUMEN EDITORIAL</p>
                    <h1 className="text-4xl font-serif font-bold text-white leading-[1.1] shadow-black drop-shadow-2xl">
                      {title || "THE MASTERPIECE"}
                    </h1>
                  </div>
               </div>
               
               {/* Magazine Body */}
               <div className="p-8 space-y-6 bg-black">
                  <div className="w-8 h-0.5 bg-white/40" />
                  <div className="text-[13px] text-zinc-300 leading-[2.2] font-light word-break-keep whitespace-pre-wrap">
                    {content || "이미지 분석을 시작하면, 애견사의 위대한 명언을 인용한 하이엔드 예술 평론이 이 스크린 위에 우아하게 렌더링됩니다."}
                  </div>
                  <div className="pt-10 flex justify-between items-center opacity-40">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-zinc-400">Gemini AI Editor</span>
                    <span className="text-[8px] font-bold tracking-widest uppercase text-zinc-400">LUMEN Studio</span>
                  </div>
               </div>
            </div>

            {/* Hardware Notch (Visual Detail) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-50"></div>
          </div>
          
          <p className="mt-8 text-zinc-600 text-xs font-mono">Mobile Viewport: 420x900</p>
        </div>
      </div>
    </div>
  );
}