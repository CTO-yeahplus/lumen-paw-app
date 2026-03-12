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
    
    // 🍏 [원상 복구] 무리한 JOIN을 제거하고, 원래의 빠르고 안정적인 쿼리로 되돌립니다.
    const { data, error } = await supabase
      .from("pre_orders")
      .select(`
        *,
        users (full_name, email)
      `)
      .order("created_at", { ascending: false });

    // 에러가 났을 경우 콘솔에 띄워줍니다 (화면 백지화 방지)
    if (error) console.error("🚨 주문 목록 로딩 에러:", error.message);
    if (!error && data) setOrders(data);
    
    setLoading(false);
    setTimeout(() => setIsRefreshing(false), 500); 
  };

  const updateOrderStatus = async (order: any, newStatus: string) => {
    const { error } = await supabase
      .from("pre_orders")
      .update({ status: newStatus })
      .eq("id", order.id);
      
    if (!error) {
      setOrders(orders.map(o => o.id === order.id ? { ...o, status: newStatus } : o));
      
      if (newStatus !== 'pending') {
        const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
        const targetName = order.contact_name || joinedUser?.full_name || 'VIP Member';
        const targetEmail = order.contact_email || joinedUser?.email;
        
        // 💎 [정밀 타격 로직] 기존 코드에 total_editions 를 추가로 가져옵니다.
        let artistEmail = "", productImage = "", material = "", dimensions = "", totalEditions = 100;
        try {
          const { data: productData } = await supabase
            .from("products")
            // 🍏 total_editions를 SELECT 명단에 추가합니다.
            .select("artist_email, image_url, material, dimensions, total_editions") 
            .eq("name", order.item_name)
            .maybeSingle(); 
            
          if (productData) {
            artistEmail = productData.artist_email || "";
            productImage = productData.image_url || "";
            material = productData.material || "";
            dimensions = productData.dimensions || "";
            totalEditions = productData.total_editions || 100; // 🍏 한정 수량 확보
          }
        } catch (err) {
          console.error("⚠️ 상품 스펙 추출 실패:", err);
        }

        try {
          await fetch('/api/webhook/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: order.id,
              status: newStatus,
              customerName: targetName,
              customerEmail: targetEmail,
              itemName: order.item_name,
              artistEmail: artistEmail,
              petName: order.pet_name || "",
              petBirth: order.pet_birth || "",
              brandColor: order.dominant_color || order.brand_color || "", 
              petImage: order.image_url || order.target_image || "",
              productImage,
              material,
              dimensions,
              totalEditions // 💎 확보한 한정 수량을 웹훅 상자에 탑재!
            }),
          });
          console.log(`🍏 Webhook triggered for ${newStatus} (Artist: ${artistEmail || "None"})`);
        } catch (err) {
          console.error('Failed to trigger webhook', err);
        }
      } else {
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
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-zinc-900/50 border-b border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                <th className="py-4 px-6 font-bold">주문 일시</th>
                <th className="py-4 px-6 font-bold">사진 (Photo)</th>
                <th className="py-4 px-6 font-bold">컬렉터 (고객)</th>
                <th className="py-4 px-6 font-bold">주문 제품 (Item)</th>
                <th className="py-4 px-6 font-bold text-right">진행 상태 (Status Control)</th>

                <th className="py-4 px-6 font-bold">아우라 컬러</th>
                <th className="py-4 px-6 font-bold">배송 정보 (Shipping)</th>
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
                  const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
                  const displayName = order.contact_name || joinedUser?.full_name || 'VIP Member';
                  const displayEmail = order.contact_email || joinedUser?.email || 'No email';

                  return (
                    <tr key={order.id} className="border-b border-zinc-900/50 hover:bg-zinc-900 transition-colors group">
                      <td className="py-6 px-6 text-zinc-500 font-mono text-xs">
                        {new Date(order.created_at).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      {/* 💎 럭셔리 사진 썸네일 뷰어 이식 */}
                      <td className="py-6 px-6">
                        {order.image_url ? (
                          <a 
                            href={order.image_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-700 bg-cover bg-center hover:border-white transition-all shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative group" 
                            style={{ backgroundImage: `url(${order.image_url})` }}
                            title="원본 사진 보기"
                          >
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg backdrop-blur-[2px]">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                            </div>
                          </a>
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-zinc-900/40 border border-zinc-800/50 flex flex-col items-center justify-center text-[7px] text-zinc-600 font-mono tracking-widest text-center break-keep">
                            <span>NO</span>
                            <span>PHOTO</span>
                          </div>
                        )}
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-white font-bold">{displayName}</div>
                        <div className="text-zinc-500 text-[10px] mt-0.5">{displayEmail}</div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-zinc-300 font-bold uppercase tracking-wide text-xs">{order.item_name}</div>
                        <div className="text-zinc-600 font-mono text-[9px] mt-1">{order.item_id}</div>
                      </td>
                      <td className="py-6 px-6 text-right">
                        <select 
                          value={order.status || 'pending'}
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
                          <option value="pending">0. Pending (결제 대기)</option>
                          <option value="pending_payment">1. 결제/데이터 확인</option>
                          <option value="crafting">2. 장인 수작업 중</option>
                          <option value="qc_inspect">3. PAWTRAIT EDITION 품질 검수</option>
                          <option value="shipping">4. 배송 및 패키징</option>
                        </select>
                      </td>

                      <td className="py-6 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm" style={{ backgroundColor: order.dominant_color }} />
                          <span className="text-zinc-400 font-mono text-[10px] uppercase">{order.dominant_color}</span>
                        </div>
                      </td>
                      
                      {/* 💎 럭셔리 배송지 표기 패널 이식 */}
                      <td className="py-6 px-6">
                        {order.shipping_address ? (
                          <div className="space-y-1.5 text-xs text-zinc-300 break-keep min-w-[200px] max-w-[280px]">
                            <p>
                              <span className="inline-block w-10 text-zinc-500 font-bold text-[9px] uppercase tracking-widest">TEL</span> 
                              <span className="text-white font-mono">{order.contact_number}</span>
                            </p>
                            <p className="flex items-start">
                              <span className="inline-block w-10 text-zinc-500 font-bold text-[9px] uppercase tracking-widest mt-0.5 shrink-0">ADDR</span> 
                              <span className="text-white leading-relaxed">{order.shipping_address}</span>
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-[10px] text-amber-500/80 font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-2 rounded-full w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            프라이빗 주소 대기중
                          </div>
                        )}
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