"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function EditionDropDesk() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. 상태 추가
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "₩ ",
    total_editions: 100,
    category: "case", // 🍏 기본 카테고리
    craftsmanship: "이탈리아산 프리미엄 베지터블 레더",
    lead_time: "주문 확인 후 장인의 수작업으로 3주 소요"
  });
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  // 🍏 상품 전시 상태 토글 (Publish / Unpublish)
  const toggleActiveStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('products')
      .update({ is_active: !currentStatus })
      .eq('id', id);
    
    if (!error) fetchProducts();
  };

  // 권한 체크 및 목록 불러오기
  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        alert("접근 권한이 없습니다.");
        router.replace("/vault");
        return;
      }
      setIsAuthorized(true);
      setIsCheckingAuth(false);
      fetchProducts();
    };
    checkAdminAuth();
  }, [router]);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (data) setProducts(data);
  };

  const handleDropEdition = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.price) {
      alert("필수 정보를 모두 입력해주십시오.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('products').insert([formData]);
      if (error) {
        if (error.code === '23505') throw new Error("이미 존재하는 에디션 ID입니다.");
        throw error;
      }
      
      alert("새로운 에디션이 성공적으로 런칭되었습니다.");
      setFormData({ ...formData, id: "", name: "", price: "₩ " }); // 폼 초기화
      fetchProducts(); // 리스트 새로고침
    } catch (error: any) {
      alert(error.message || "에디션 런칭 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`정말로 이 에디션(${id})을 삭제하시겠습니까? 관련된 예약 내역이 꼬일 수 있습니다.`)) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchProducts();
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-8 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">LUMEN CONCIERGE</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Edition Drop Manager</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/orders')} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
            주문 데스크로 이동 ↗
          </button>
        </div>
      </nav>

      <main className="w-full px-8 lg:px-12 py-10 flex flex-col lg:flex-row gap-12">
        
        {/* 🍏 좌측: 새로운 에디션 기획 (Launch Pad) */}
        <section className="w-full lg:w-1/3">
          <div className="sticky top-24">
            <header className="mb-8">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Launch Edition</h1>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">새로운 비스포크 상품 런칭</p>
            </header>

            <form onSubmit={handleDropEdition} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Edition ID (영문/숫자 고유값)</label>
                <input type="text" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} placeholder="e.g., silver_frame_01" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Edition Title (상품명)</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g., LUMEN Signature Art Frame" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>



              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Category (제품군)</label>
                  <select 
                    value={isCustomCategory ? 'custom' : formData.category}
                    onChange={(e) => {
                      if (e.target.value === 'custom') {
                        setIsCustomCategory(true);
                        setFormData({...formData, category: ""});
                      } else {
                        setIsCustomCategory(false);
                        setFormData({...formData, category: e.target.value});
                      }
                    }}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none mb-2"
                  >
                    <option value="case">Phone Case (케이스)</option>
                    <option value="frame">Art Frame (액자)</option>
                    <option value="collar">Pet Collar (목줄)</option>
                    {/* 🍏 새롭게 추가된 럭셔리 라인업 */}
                    <option value="wallet">Card Wallet (카드지갑)</option>
                    <option value="harness">Pet Harness (하네스)</option>
                    <option value="keyring">Keyring (키링)</option>
                    <option value="pendant">Name Pendant (팬던트)</option>
                    {/* 🍏 새롭게 추가된 스트랩 라인업 */}
                    <option value="strap">Leather Strap (가죽 스트랩)</option>
                    <option value="custom">+ 새로운 카테고리 생성</option>
                  </select>
                  
                  {/* 직접 입력 시 나타나는 인풋 */}
                  {isCustomCategory && (
                    <input 
                      type="text" 
                      value={formData.category} 
                      onChange={e => setFormData({...formData, category: e.target.value})} 
                      placeholder="새 카테고리 영문명 (e.g., ring, bag)" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-yellow-500 focus:border-yellow-400 outline-none transition-colors" 
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Craftsmanship (소재 및 마감)</label>
                <textarea value={formData.craftsmanship} onChange={e => setFormData({...formData, craftsmanship: e.target.value})} rows={2} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors resize-none" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Lead Time (제작 소요 기간)</label>
                <input type="text" value={formData.lead_time} onChange={e => setFormData({...formData, lead_time: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>

              <button disabled={isSubmitting} className="w-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.2em] py-4 rounded-xl mt-4 active:scale-95 transition-all">
                {isSubmitting ? "Launching..." : "Drop Edition"}
              </button>
            </form>
          </div>
        </section>

        {/* 🍏 우측: 런칭된 에디션 라인업 */}
        <section className="w-full lg:w-2/3">
          <header className="mb-8">
            <h2 className="text-xl font-serif font-bold text-white mb-2">Current Bespoke Lineup</h2>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">현재 등록된 총 {products.length}개의 에디션</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
              <div key={product.id} className={`bg-zinc-950 border rounded-3xl p-6 relative group transition-all duration-300 ${product.is_active ? 'border-zinc-700 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'border-zinc-800 opacity-50'}`}>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {/* 🍏 전시 상태 토글 스위치 */}
                    <button 
                      onClick={() => toggleActiveStatus(product.id, product.is_active)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${product.is_active ? 'bg-green-500' : 'bg-zinc-800'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${product.is_active ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {product.is_active ? 'Live (전시중)' : 'Hidden (숨김)'}
                    </span>
                  </div>
                  
                  <button onClick={() => handleDelete(product.id)} className="text-zinc-600 hover:text-red-500 transition-colors text-xs font-bold">Delete</button>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm font-mono text-zinc-400 mb-6">{product.price}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="block text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Total Supply</span>
                    <p className="text-xs text-white font-mono">{product.total_editions} Editions Only</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}