"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsRefreshing(true);
    // 🍏 pre_orders와 users 테이블을 조인하여 주문자와 주문내역을 함께 불러옵니다.
    const { data, error } = await supabase
      .from("pre_orders")
      .select(`
        *,
        users (full_name, email)
      `)
      .order("created_at", { ascending: false });

    if (!error && data) setOrders(data);
    setLoading(false);
    
    // 너무 빨리 끝나면 시각적 만족감이 없으므로, 아주 살짝(0.5초) 딜레이를 주어 우아함을 유지합니다.
    setTimeout(() => setIsRefreshing(false), 500); 
  };

  const updateOrderStatus = async (order: any, newStatus: string) => {
    // 1. 데이터베이스 상태 업데이트
    const { error } = await supabase
      .from("pre_orders")
      .update({ status: newStatus })
      .eq("id", order.id);
      
    if (!error) {
      // 2. 로컬 화면 즉시 반영 (Optimistic UI)
      setOrders(orders.map(o => o.id === order.id ? { ...o, status: newStatus } : o));
      
      // 🍏 [핵심] 상태가 'pending'(0단계)이 아닐 때만 웹훅(이메일 발송)을 트리거합니다!
      if (newStatus !== 'pending') {
        const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
        const targetName = order.contact_name || joinedUser?.full_name || 'VIP Member';
        const targetEmail = order.contact_email || joinedUser?.email;

        try {
          await fetch('/api/webhook/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: order.id,
              status: newStatus,
              customerName: targetName,
              customerEmail: targetEmail,
              itemName: order.item_name
            }),
          });
          console.log(`🍏 Webhook triggered for ${newStatus}`);
        } catch (err) {
          console.error('Failed to trigger webhook', err);
        }
      } else {
        // 0단계로 변경하거나 머무를 때는 이메일을 보내지 않고 침묵합니다.
        console.log("🍏 0. Pending 상태이므로 이메일을 발송하지 않습니다.");
      }
      
    } else {
      alert("상태 업데이트에 실패했습니다.");
    }
  };
  
  return (
    <div className="min-h-screen bg-black p-8 md:p-12 font-sans selection:bg-zinc-800">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Bespoke Orders</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            전체 선주문 내역: <span className="text-white">{orders.length}</span>건
          </p>
        </div>

        <button 
          onClick={fetchOrders}
          disabled={isRefreshing}
          className={`px-4 py-2 border text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
            isRefreshing 
              ? 'bg-white text-black border-white cursor-wait' 
              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500'
          }`}
        >
          {isRefreshing ? (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-ping" />
              Refreshing...
            </span>
          ) : (
            "Refresh Data"
          )}
        </button>
      </header>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl custom-scrollbar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-zinc-900/50 border-b border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                <th className="py-4 px-6 font-bold">주문 일시</th>
                <th className="py-4 px-6 font-bold">컬렉터 (고객)</th>
                <th className="py-4 px-6 font-bold">주문 제품 (Item)</th>
                <th className="py-4 px-6 font-bold">주문 금액 (Price)</th>
                <th className="py-4 px-6 font-bold">아우라 컬러</th>
                <th className="py-4 px-6 font-bold text-right">진행 상태 (Status Control)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-zinc-600 animate-pulse uppercase tracking-widest text-xs">
                    Loading Database...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-zinc-600 uppercase tracking-widest text-xs font-serif italic">
                    접수된 선주문이 없습니다.
                  </td>
                </tr>
              ) : (
                orders.map((order) => {
                  // 🍏 [핵심 방어 로직] 데이터가 배열이든 객체이든 무조건 이름을 찾아냅니다.
                  const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
                  const displayName = order.contact_name || joinedUser?.full_name || 'VIP Member';
                  const displayEmail = order.contact_email || joinedUser?.email || 'No email';

                  return (
                    <tr key={order.id} className="border-b border-zinc-900/50 hover:bg-zinc-900 transition-colors group">
                      <td className="py-6 px-6 text-zinc-500 font-mono text-xs">
                        {new Date(order.created_at).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-white font-bold">{displayName}</div>
                        <div className="text-zinc-500 text-[10px] mt-0.5">{displayEmail}</div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-zinc-300 font-bold uppercase tracking-wide text-xs">{order.item_name}</div>
                        <div className="text-zinc-600 font-mono text-[9px] mt-1">{order.item_id}</div>
                      </td>
                      <td className="py-6 px-6">
                        {/* 🍏 가격 정보 렌더링 (DB에 price 컬럼이 있을 경우 포맷팅, 없으면 대체 텍스트) */}
                        <div className="text-zinc-300 font-mono text-xs">
                          {order.price ? `₩${order.price.toLocaleString()}` : '-'}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm" style={{ backgroundColor: order.dominant_color }} />
                          <span className="text-zinc-400 font-mono text-[10px] uppercase">{order.dominant_color}</span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-right">
                        <select 
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order, e.target.value)}
                          className={`bg-black border rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider outline-none cursor-pointer transition-colors ${
                            order.status === 'pending' ? 'border-red-500/50 text-red-500' : 
                            order.status === 'pending_payment' ? 'border-amber-500/50 text-amber-500' : 
                            order.status === 'crafting' ? 'border-blue-500/50 text-blue-500' : 
                            order.status === 'qc_inspect' ? 'border-purple-500/50 text-purple-500' :
                            order.status === 'shipping' ? 'border-green-500/50 text-green-500' :
                            'border-zinc-700 text-zinc-400'
                          }`}
                        >
                          {/* 🍏 0. Pending 상태 추가 */}
                          <option value="pending">0. Pending (결제 대기)</option>
                          <option value="pending_payment">1. 결제/데이터 확인</option>
                          <option value="crafting">2. 장인 수작업 중</option>
                          <option value="qc_inspect">3. LUMEN 품질 검수</option>
                          <option value="shipping">4. 배송 및 패키징</option>
                        </select>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}