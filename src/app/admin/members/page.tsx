// src/app/admin/members/page.tsx
"use client";
import { useState, useEffect } from 'react';

interface Member {
  id: string;
  email: string;
  name: string;
  joinedAt: string;
  lastLoginAt: string;
  orderCount: number;
  assetCount: number;
}

export default function MemberManagementPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch('/api/admin/members');
        const data = await res.json();
        if (data.success) {
          setMembers(data.members);
        } else {
          throw new Error(data.error);
        }
      } catch (err) {
        console.error("멤버 리스트 로드 실패:", err);
        alert("컬렉터 명부를 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMembers();
  }, []);

  // 💎 이메일이나 이름으로 컬렉터를 즉시 찾아내는 검색 필터
  const filteredMembers = members.filter(member => 
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-zinc-200 p-8 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* 💎 1. 헤더 및 검색 영역 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-white tracking-wide mb-2">Collector Registry</h1>
            <p className="text-sm text-zinc-500 tracking-widest uppercase">VIP 회원 및 자산 현황 관리</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search by Email or Name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-5 py-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* 💎 2. 통계 대시보드 (Summary) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2">Total Collectors</p>
            <p className="text-3xl font-mono font-bold text-white">{members.length}</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2">Total Assets in Vault</p>
            <p className="text-3xl font-mono font-bold text-white">{members.reduce((acc, curr) => acc + curr.assetCount, 0)}</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2">Total Orders</p>
            <p className="text-3xl font-mono font-bold text-white">{members.reduce((acc, curr) => acc + curr.orderCount, 0)}</p>
          </div>
        </div>

        {/* 💎 3. 컬렉터 명부 테이블 */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-400">
              <thead className="text-[10px] text-zinc-600 uppercase tracking-widest bg-zinc-900/40 border-b border-zinc-900">
                <tr>
                  <th className="px-6 py-5 font-bold">Collector Info</th>
                  <th className="px-6 py-5 font-bold">Joined / Last Active</th>
                  <th className="px-6 py-5 font-bold text-center">Vault Assets</th>
                  <th className="px-6 py-5 font-bold text-center">Orders</th>
                  <th className="px-6 py-5 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/50">
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-zinc-600 animate-pulse tracking-widest text-xs">
                      LOADING REGISTRY...
                    </td>
                  </tr>
                ) : filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-zinc-600 tracking-widest text-xs">
                      NO COLLECTORS FOUND.
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-zinc-900/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-serif font-bold">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-white font-bold">{member.name}</p>
                            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs text-zinc-300">{new Date(member.joinedAt).toLocaleDateString('ko-KR')}</p>
                        <p className="text-[10px] text-zinc-600 font-mono mt-0.5">
                          {member.lastLoginAt ? new Date(member.lastLoginAt).toLocaleDateString('ko-KR') : 'Never'}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono ${member.assetCount > 0 ? 'bg-white/10 text-white' : 'bg-zinc-900 text-zinc-600'}`}>
                          {member.assetCount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-mono ${member.orderCount > 0 ? 'bg-blue-500/10 text-blue-400' : 'bg-zinc-900 text-zinc-600'}`}>
                          {member.orderCount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}