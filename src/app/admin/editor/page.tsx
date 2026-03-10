"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

function AIEditorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams ? searchParams.get('id') : null;

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // 🍏 Data States
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brandColor, setBrandColor] = useState<string>(""); 
  const [colorPalette, setColorPalette] = useState<string[]>([]); // 컬러 팔레트 전체 배열
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  
  // 🍏 Loading States
  const [isUploading, setIsUploading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false); 
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // 🍏 삭제 로딩 상태 추가

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🍏 Archive & Search States
  const [editorialsList, setEditorialsList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const fetchEditorialsList = async () => {
    const { data } = await supabase
      .from('editorials')
      .select('id, title, slug, created_at')
      .order('created_at', { ascending: false });
    if (data) setEditorialsList(data);
  };

  useEffect(() => {
    fetchEditorialsList();
  }, []);

  useEffect(() => {
    if (editId) {
      const fetchExistingData = async () => {
        const { data } = await supabase.from('editorials').select('*').eq('id', editId).single();
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setImageUrl(data.image_url);
          setContent(data.content);
          setBrandColor(data.brand_color || "");
          setColorPalette(data.color_palette || []);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      fetchExistingData();
    } else {
      setTitle(""); setSlug(""); setImageUrl(""); setContent(""); 
      setBrandColor(""); setColorPalette([]); setSourceUrl("");
    }
  }, [editId]);

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

  const handleUrlExtract = async () => {
    if (!sourceUrl || !sourceUrl.includes("chemistry")) return alert("유효한 인생네컷 URL을 입력하세요.");
    setIsExtracting(true); // 🍏 추출 애니메이션 트리거
    try {
      const res = await fetch("/api/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sourceUrl }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "추출 실패");
      
      if (data.images && data.images.length > 0) setImageUrl(data.images[0]);
      if (data.colorChips && data.colorChips.length > 0) {
        setBrandColor(data.colorChips[0]);
        setColorPalette(data.colorChips);
      }
    } catch (e: any) { alert(`🚨 추출 에러:\n${e.message}`); }
    setIsExtracting(false); // 🍏 추출 애니메이션 종료
  };

  const handleGenerate = async () => {
    if (!imageUrl) return alert("이미지를 먼저 준비하세요.");
    setIsGenerating(true);
    try {
      const res = await fetch("/api/editor", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ imageUrl, brandColor, colorPalette }) 
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "서버 통신 실패");
      
      setTitle(data.title || "THE UNTITLED MASTERPIECE");
      setContent(data.content || "본문 생성에 실패했습니다.");
      setSlug((data.title || "untitled").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    } catch (e: any) { alert(`🚨 에러 발생:\n${e.message}`); }
    setIsGenerating(false);
  };

  const handleSave = async () => {
    if (!title || !slug || !imageUrl || !content) return alert("모든 항목을 입력하세요.");
    setIsSaving(true);
    
    const payload = { 
      title, slug, image_url: imageUrl, content,
      brand_color: brandColor, color_palette: colorPalette 
    };

    try {
      if (editId) {
        const { error } = await supabase.from('editorials').update(payload).eq('id', editId);
        if (error) throw error;
        alert("수정 완료!");
      } else {
        const { error } = await supabase.from('editorials').insert([payload]);
        if (error) throw error;
        alert("발행 완료!");
        router.push('/admin/editor');
      }
      fetchEditorialsList(); 
    } catch (e) { alert("발행 실패: URL SLUG 중복 등을 확인하세요."); }
    setIsSaving(false);
  };

  // 🍏 삭제 로직 추가
  const handleDelete = async () => {
    if (!editId) return;
    const isConfirmed = window.confirm("정말로 이 잡지를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.");
    if (!isConfirmed) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase.from('editorials').delete().eq('id', editId);
      if (error) throw error;
      alert("성공적으로 삭제되었습니다.");
      router.push('/admin/editor'); // 새 글 작성 모드로 리다이렉트
      fetchEditorialsList(); // 리스트 갱신
    } catch (error: any) {
      alert(`삭제 실패: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredEditorials = editorialsList.filter((item) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-6 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">PAWTRAIT EDITION STUDIO</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-zinc-500 uppercase hidden md:inline-block">AI Editorial Desk</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[9px] md:text-[10px] font-bold text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            AUTHORIZED: {ADMIN_EMAIL}
          </div>
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">✕</button>
        </div>
      </nav>

      <main className="w-full px-6 lg:px-16 py-10 md:py-16">
        
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight">
                  {editId ? "Edit Masterpiece" : "New Masterpiece"}
                </h1>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase">
                  {editId ? `Editing ID: ${editId.substring(0, 8)}...` : "Drafting Mode"}
                </p>
              </div>
              
              {/* 🍏 삭제 및 새 글 작성 버튼 (수정 모드일 때만 표시) */}
              {editId && (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleDelete} 
                    disabled={isDeleting}
                    className="text-[10px] font-bold text-red-500 uppercase tracking-widest border border-red-500/30 px-6 py-3 rounded-full hover:bg-red-500/10 transition-colors shrink-0 flex items-center gap-2"
                  >
                    {isDeleting ? "DELETING..." : "DELETE POST"}
                  </button>
                  <button 
                    onClick={() => router.push('/admin/editor')} 
                    className="text-[10px] font-bold text-white uppercase tracking-widest border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
                  >
                    + Create New Post
                  </button>
                </div>
              )}
            </div>

            {/* Asset Injection */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 lg:p-10">
              <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">1. Asset Injection</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <div className="space-y-3">
                  <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">LIFE4CUT QR URL</label>
                  <div className="flex gap-2">
                    <input value={sourceUrl} onChange={e => setSourceUrl(e.target.value)} className="flex-1 bg-black border border-zinc-800 rounded-xl p-4 text-xs text-white focus:border-zinc-500 transition-all" placeholder="Paste URL here..." />
                    
                    {/* 🍏 추출 버튼 시각적 피드백 개선 */}
                    <button onClick={handleUrlExtract} disabled={isExtracting || !sourceUrl} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-6 rounded-xl disabled:opacity-30 flex items-center justify-center gap-2 min-w-[100px] transition-all">
                      {isExtracting ? (
                        <><span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>...</>
                      ) : "Extract"}
                    </button>
                  </div>
                </div>
                <div>
                  <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                  <button onClick={() => fileInputRef.current?.click()} className="w-full h-14 rounded-xl border border-dashed border-zinc-700 text-xs font-bold text-zinc-500 tracking-widest hover:border-zinc-500 hover:text-white transition-colors">
                    {isUploading ? "UPLOADING..." : "+ MANUAL S3 UPLOAD"}
                  </button>
                </div>
              </div>
              
              {/* 컬러 팔레트 표시 영역 */}
              {colorPalette.length > 0 && (
                <div className="mt-8">
                  <p className="text-[9px] font-bold text-zinc-500 tracking-widest mb-3 uppercase">Extracted Aura Palette</p>
                  <div className="flex gap-3 flex-wrap bg-black p-4 rounded-xl border border-zinc-800 w-fit">
                    {colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 group">
                        <div 
                          className="w-8 h-8 rounded-full border border-zinc-700 shadow-lg transition-transform group-hover:scale-110" 
                          style={{ backgroundColor: color }} 
                        />
                        <span className="text-[8px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 bg-black px-1 rounded">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* AI Metadata & Content */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 lg:p-10 space-y-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">2. Metadata & Content</h3>
                <button onClick={handleGenerate} disabled={isGenerating || !imageUrl} className="bg-white text-black text-[9px] font-bold tracking-widest uppercase px-5 py-3 rounded-full disabled:opacity-30 hover:bg-zinc-200 transition-colors shadow-lg flex items-center gap-2">
                  {isGenerating ? "ANALYZING..." : "AI Auto Write"}
                </button>
              </div>
              
              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">MAGAZINE TITLE</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-transparent border-b border-zinc-800 pb-3 text-3xl lg:text-4xl text-white focus:border-zinc-500 transition-all focus:outline-none" placeholder="Enter Title Here" />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">URL SLUG</label>
                <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 font-mono focus:border-zinc-500 transition-all focus:outline-none" placeholder="e.g. the-silent-noir" />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">EDITORIAL CONTENT</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full h-80 lg:h-[600px] bg-black border border-zinc-800 rounded-2xl p-6 lg:p-8 text-base text-zinc-300 leading-[2] focus:outline-none focus:border-zinc-500 transition-all resize-none word-break-keep" placeholder="본문을 작성하세요..." />
              </div>

              <div className="pt-4">
                <button onClick={handleSave} disabled={!content || isSaving} className="w-full md:w-auto px-12 h-16 bg-blue-600 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-blue-500 active:scale-[0.98] transition-all disabled:opacity-30 disabled:bg-zinc-800 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {isSaving ? "SAVING..." : editId ? "UPDATE MASTERPIECE" : "PUBLISH TO GLOBAL"}
                </button>
              </div>
            </section>
          </div>

          {/* Right: Live App Preview */}
          <div className="w-full xl:w-[400px] shrink-0">
            <div className="sticky top-24 flex flex-col items-center xl:items-end">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6 w-full max-w-[380px] text-center xl:text-left">Live App Preview</h3>
              <div className="w-full max-w-[380px] bg-black border-[10px] border-zinc-900 rounded-[50px] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative aspect-[9/19.5]">
                
                {/* 🍏 로딩 오버레이 (Extracting & Generating 통합) */}
                {(isGenerating || isExtracting) && (
                  <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
                    <p className="text-[10px] font-bold text-white tracking-[0.3em] uppercase animate-pulse mb-2">
                      {isExtracting ? "Extracting Asset..." : "Editor is writing..."}
                    </p>
                    <p className="text-[10px] text-zinc-500 tracking-widest uppercase">
                      {isExtracting ? "Syncing with S3 Vault" : "AI Vision Analysis"}
                    </p>
                  </div>
                )}

<div className="flex-1 overflow-y-auto scrollbar-hide bg-[#050505]">
                  <div className="relative h-[55%] w-full">
                      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${imageUrl || "/images/img_01.png"}')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[8px] font-bold tracking-[0.4em] uppercase mb-2 transition-colors duration-1000" style={{ color: brandColor || "#a1a1aa" }}>PAWTRAIT EDITORIAL</p>
                        <h1 className="text-3xl font-serif font-bold text-white leading-[1.1] shadow-black drop-shadow-2xl mb-4 line-clamp-3">{title || "THE MASTERPIECE"}</h1>
                        <div className="w-10 h-1 rounded-full transition-colors duration-1000" style={{ backgroundColor: brandColor || "#ffffff" }} />
                      </div>
                  </div>
                  
                  {/* 🍏 매거진 본문 영역 */}
                  <div className="p-6 pb-12">
                      <div className="text-sm text-zinc-300 leading-[2.2] font-light word-break-keep whitespace-pre-wrap">
                        {content || "이미지와 브랜드 컬러 분석을 시작하면, 이 스크린 위에 우아하게 렌더링됩니다."}
                      </div>

                      {/* 🍏 원형 컬러칩 UI (The Aura Palette) - 본문 하단에 럭셔리하게 배치 */}
                      {colorPalette.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col items-center">
                          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-6">
                            The Identity Aura
                          </span>
                          <div className="flex flex-wrap gap-4 justify-center w-full px-2">
                            {colorPalette.slice(0, 8).map((colorHex, i) => (
                              <div key={i} className="flex flex-col items-center gap-3">
                                <div 
                                  className="w-10 h-10 rounded-full border border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                                  style={{ backgroundColor: colorHex }} 
                                />
                                <span className="text-[7px] font-mono uppercase tracking-widest text-zinc-600">
                                  {colorHex}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: The Archive */}
        <section className="mt-24 pt-16 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">The Archive</h3>
              <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-mono">
                {editorialsList.length} Published Editorials
              </p>
            </div>
            
            <div className="relative w-full md:w-[400px]">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder="Search by title or slug..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-14 pr-6 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredEditorials.map((item) => (
              <div 
                key={item.id}
                onClick={() => router.push(`/admin/editor?id=${item.id}`)}
                className={`p-6 md:p-8 border rounded-3xl cursor-pointer transition-all group
                  ${editId === item.id ? 'bg-zinc-900 border-zinc-500 shadow-xl scale-[1.02]' : 'bg-black border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/30'}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-lg font-bold line-clamp-2 transition-colors leading-snug ${editId === item.id ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                    {item.title}
                  </h4>
                  {editId === item.id && <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] shrink-0 ml-3 mt-1" />}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-zinc-500">{formatDate(item.created_at)}</span>
                  <span className="text-[10px] text-zinc-600 truncate">/{item.slug}</span>
                </div>
              </div>
            ))}
            
            {filteredEditorials.length === 0 && (
              <div className="col-span-full py-20 text-center text-sm text-zinc-600 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/50">
                {searchQuery ? "검색 결과가 없습니다." : "발행된 글이 없습니다."}
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}

export default function AIEditorAdmin() {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
          <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
          <p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase animate-pulse">
            Loading Studio...
          </p>
        </div>
      }>
        <AIEditorContent />
      </Suspense>
    );
  }