"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function ConciergeDesk() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]); // 🍏 등록된 상품 리스트 상태 추가
  const [isLoading, setIsLoading] = useState(false);

  // 🍏 1. 관리자 권한 체크
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
      fetchOrders();
    };
    checkAdminAuth();
  }, [router]);

  const fetchOrders = async () => {
    setIsLoading(true);
    
    // 🍏 1. 상품 마스터 데이터 가져오기 (총 수량 등)
    const { data: productsData } = await supabase.from('products').select('*').order('created_at', { ascending: true });
    if (productsData) setProducts(productsData);

    // 🍏 2. 라이브 오더 데이터 가져오기
    const { data: ordersData, error } = await supabase
      .from('pre_orders')
      .select(`*, users ( full_name, email )`)
      .order('created_at', { ascending: false });

    if (ordersData) setOrders(ordersData);
    if (error) console.error("오더 로딩 에러:", error);
    setIsLoading(false);
  };

  // 🍏 3. 결제 상태 원터치 변경 로직
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    const { error } = await supabase
      .from('pre_orders')
      .update({ status: newStatus })
      .eq('id', orderId);

    if (error) {
      alert("상태 변경에 실패했습니다.");
    } else {
      fetchOrders(); // 변경 후 리스트 즉시 새로고침
    }
  };

  // 🍏 3. 아이템별 재고(통계) 동적 계산기
  const getStats = (itemId: string, totalEditions: number) => {
    const itemOrders = orders.filter(o => o.item_id === itemId);
    const paid = itemOrders.filter(o => o.status === 'paid').length;
    const pending = itemOrders.filter(o => o.status === 'pending_payment').length;
    return { paid, pending, total: paid + pending, remaining: totalEditions - paid };
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-6 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">PAWTRAIT CONCIERGE</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Live Allocation Desk</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchOrders} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 1 0 2.13-5.83L2 12"></path></svg>
            새로고침
          </button>
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">✕</button>
        </div>
      </nav>

      <main className="w-full px-6 lg:px-12 py-10 mx-auto">
        
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Fair Inventory Status</h1>
          <p className="text-xs text-zinc-500 tracking-widest uppercase">실시간 100개 한정 에디션 재고 현황</p>
        </header>

        {/* 🍏 통계 대시보드 (하드코딩 제거, DB 데이터 매핑) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map(item => {
            const stats = getStats(item.id, item.total_editions);
            const progress = (stats.paid / item.total_editions) * 100;
            return (
              <div key={item.id} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                  <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${progress}%` }} />
                </div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.name}</h3>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-bold text-white">{stats.paid}</span>
                  <span className="text-sm text-zinc-500 font-mono mb-1">/ {item.total_editions} Paid</span>
                </div>
                <div className="flex gap-4 text-xs font-mono">
                  <span className="text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Pending: {stats.pending}</span>
                  <span className="text-zinc-500 bg-zinc-900 px-2 py-1 rounded">Remain: {stats.remaining}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🍏 실시간 주문 리스트 (Live Order Stream) */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Live Allocations</h2>
            <span className="text-[10px] bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full uppercase tracking-widest">Total {orders.length} Records</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-500 bg-black/50">
                  <th className="p-4 pl-6 font-medium">Time</th>
                  <th className="p-4 font-medium">VIP Member</th>
                  <th className="p-4 font-medium">Edition / Color</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 pr-6 font-medium text-right">Concierge Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-zinc-800/50">
                {orders.length === 0 && (
                  <tr><td colSpan={5} className="p-8 text-center text-zinc-600">아직 예약된 에디션이 없습니다.</td></tr>
                )}
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-900/30 transition-colors">
                    {/* 시간 */}
                    <td className="p-4 pl-6 font-mono text-[10px] text-zinc-500">
                      {new Date(order.created_at).toLocaleTimeString('ko-KR', { hour: '2-digit', minute:'2-digit' })}
                    </td>
                    {/* 고객 정보 */}
                    <td className="p-4">
                      <div className="font-bold text-zinc-300">{order.users?.full_name || 'VIP Member'}</div>
                      <div className="text-[10px] text-zinc-600">{order.users?.email || 'No email provided'}</div>
                    </td>
                    {/* 에디션 및 컬러 */}
                    <td className="p-4">
                      <div className="font-bold text-white text-xs mb-1">{order.item_name}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full border border-zinc-700" style={{ backgroundColor: order.dominant_color }} />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">{order.dominant_color}</span>
                      </div>
                    </td>
                    {/* 상태 뱃지 */}
                    <td className="p-4">
                      {order.status === 'pending_payment' && <span className="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">결제 대기</span>}
                      {order.status === 'paid' && <span className="text-[10px] font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">결제 완료</span>}
                      {order.status === 'canceled' && <span className="text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">취소됨</span>}
                    </td>
                    {/* 액션 버튼 */}
                    <td className="p-4 pr-6 text-right">
                      {order.status === 'pending_payment' && (
                        <div className="flex justify-end gap-2">
                          <button onClick={() => updateOrderStatus(order.id, 'paid')} className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-zinc-200 active:scale-95 transition-all">
                            현장 결제 완료
                          </button>
                          <button onClick={() => updateOrderStatus(order.id, 'canceled')} className="bg-transparent border border-zinc-700 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg hover:text-red-400 hover:border-red-500/50 active:scale-95 transition-all">
                            취소
                          </button>
                        </div>
                      )}
                      {order.status === 'paid' && (
                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Action Closed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}