"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminWaitlistPage() {
  const [waitlist, setWaitlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const fetchWaitlist = async () => {
    const { data, error } = await supabase
      .from("waitlists")
      .select(`
        *,
        users (full_name, email)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("데이터 로딩 실패:", error);
    } else if (data) {
      setWaitlist(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    // 🍏 1. 상태가 변경될 유저의 데이터를 미리 찾아둡니다 (이메일 발송용)
    const targetUser = waitlist.find(u => u.id === id);

    // 2. UI 즉각 반영 (Optimistic UI)
    setWaitlist((prev) => 
      prev.map((user) => user.id === id ? { ...user, status: newStatus } : user)
    );

    // 3. DB 업데이트
    const { error } = await supabase
      .from("waitlists")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      alert(`업데이트 실패: ${error.message}`);
      fetchWaitlist(); // 롤백
    } else if (newStatus !== 'pending' && targetUser) {
      // 🍏 4. [핵심 교정] DB 업데이트가 성공하면, 이메일 발송 웹훅을 호출합니다!
      const joinedUser = Array.isArray(targetUser.users) ? targetUser.users[0] : targetUser.users;
      const targetName = targetUser.contact_name || joinedUser?.full_name || 'VIP Member';
      const targetEmail = targetUser.contact_email || joinedUser?.email;

      try {
        await fetch('/api/webhook/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: id, // 대기열 ID를 전달
            status: newStatus, // 'contacted' 또는 'reserved'
            customerName: targetName,
            customerEmail: targetEmail,
            itemName: "LUMEN VIP Private Invitation" // 대기열에 맞는 아이템 명칭 부여
          }),
        });
        console.log(`🍏 Waitlist Webhook triggered for ${newStatus}`);
      } catch (err) {
        console.error('Failed to trigger webhook', err);
      }
    }
  };

  const deleteEntry = async (id: string) => {
    if (confirm("정말 이 대기자를 삭제하시겠습니까?")) {
      
      // 🍏 [핵심 교정]: DB의 응답을 기다리지 않고, 화면에서 즉시 먼저 지워버립니다 (UX 극대화)
      setWaitlist((prev) => prev.filter((user) => user.id !== id));

      // 🍏 백그라운드에서 조용히 DB 삭제를 수행합니다
      const { error } = await supabase.from("waitlists").delete().eq("id", id);
      
      if (error) {
        console.error("🍏 [삭제 에러]:", error);
        alert(`삭제 실패: ${error.message}`);
        fetchWaitlist(); // 에러가 나면 지웠던 화면을 원래대로 복구(롤백)합니다.
      } else {
        console.log("🍏 [삭제 완료]");
        // 혹시 모를 '조용한 실패'를 방지하기 위해 백그라운드에서 데이터를 한번 더 동기화합니다.
        fetchWaitlist(); 
      }
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 selection:bg-zinc-800">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">VIP Waitlist</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            현재 대기 인원: <span className="text-white">{waitlist.length}</span>명
          </p>
        </div>
        <button 
          onClick={fetchWaitlist}
          className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs rounded-full hover:text-white transition-colors"
        >
          새로고침
        </button>
      </header>

      <div className="overflow-x-auto bg-zinc-950 border border-zinc-800 rounded-3xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900/50 border-b border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
              <th className="py-4 px-6 font-bold">가입 일시</th>
              <th className="py-4 px-6 font-bold">성함 / 컬렉터</th>
              <th className="py-4 px-6 font-bold">이메일</th>
              <th className="py-4 px-6 font-bold">상태 (Status)</th>
              <th className="py-4 px-6 font-bold text-right">관리</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {waitlist.map((user) => {
              // 🍏 [핵심 교정]: 데이터가 배열로 오든, 객체로 오든, 직접 저장된 값이든 기어코 찾아냅니다.
              const joinedUser = Array.isArray(user.users) ? user.users[0] : user.users;
              const displayName = user.contact_name || joinedUser?.full_name || '미입력 (VIP)';
              const displayEmail = user.contact_email || joinedUser?.email || '이메일 없음';

              return (
                <tr key={user.id} className="border-b border-zinc-900/50 hover:bg-zinc-900 transition-colors group">
                  <td className="py-6 px-6 text-zinc-500 font-mono text-xs">
                    {new Date(user.created_at).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="py-6 px-6">
                    <span className="text-white font-bold">{displayName}</span>
                  </td>
                  <td className="py-6 px-6">
                    <div className="text-zinc-400 text-xs">{displayEmail}</div>
                  </td>
                  <td className="py-6 px-6">
                    <select 
                      value={user.status}
                      onChange={(e) => updateStatus(user.id, e.target.value)}
                      className={`bg-black border rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider outline-none cursor-pointer transition-colors ${
                        user.status === 'pending' ? 'border-amber-500/50 text-amber-500' : 
                        user.status === 'contacted' ? 'border-blue-500/50 text-blue-500' : 
                        'border-green-500/50 text-green-500'
                      }`}
                    >
                      <option value="pending">Pending (대기중)</option>
                      <option value="contacted">Contacted (연락완료)</option>
                      <option value="reserved">Reserved (예약확정)</option>
                    </select>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button 
                      onClick={() => deleteEntry(user.id)}
                      className="text-zinc-600 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {waitlist.length === 0 && !loading && (
          <div className="py-20 text-center text-zinc-700 text-sm uppercase tracking-widest font-serif italic">
            명단이 비어 있습니다.
          </div>
        )}
      </div>
    </div>
  );
}