"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    waitlist: 0,
    manageOrders: 0,
    orders: 0,
    products: 0,
    editorials: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    setIsLoading(true);
    
    // 🍏 다중 비동기 쿼리로 각 테이블의 총 데이터 개수(Count)를 동시에 가져옵니다.
    const [
      { count: waitlistCount },
      { count: preOrdersCount },
      { count: ordersCount },
      { count: productsCount },
      { count: editorialsCount }
    ] = await Promise.all([
      supabase.from('waitlists').select('*', { count: 'exact', head: true }),
      supabase.from('pre_orders').select('*', { count: 'exact', head: true }),
      supabase.from('orders').select('*', { count: 'exact', head: true }),
      supabase.from('products').select('*', { count: 'exact', head: true }),
      supabase.from('editorials').select('*', { count: 'exact', head: true })
    ]);

    setStats({
      waitlist: waitlistCount || 0,
      manageOrders: preOrdersCount || 0,
      orders: ordersCount || 0,
      products: productsCount || 0,
      editorials: editorialsCount || 0,
    });
    
    setIsLoading(false);
  };

  // 🍏 럭셔리 카드 UI 렌더링 함수
  const DashboardCard = ({ title, desc, count, href, icon, color }: any) => (
    <Link href={href} className="block group">
      <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] h-full flex flex-col justify-between min-h-[200px]">
        {/* 호버 시 은은하게 빛나는 백라이트 */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} style={{ backgroundColor: color }} />
        
        <div className="relative z-10 flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div className="text-right">
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block mb-1">Total Records</span>
            <span className="text-3xl font-serif text-white group-hover:text-white transition-colors duration-300">
              {isLoading ? "-" : count}
            </span>
          </div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-lg font-bold text-white tracking-widest uppercase mb-1">{title}</h2>
          <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">{desc}</p>
        </div>

        {/* 하단 화살표 인터랙션 */}
        <div className="absolute bottom-8 right-8 text-zinc-700 group-hover:text-white transition-colors duration-300 translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
          &rarr;
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 font-sans selection:bg-zinc-800">
      <header className="mb-16 flex justify-between items-end border-b border-zinc-900 pb-8">
        <div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-wide">Executive Dashboard</h1>
          <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase">
          PAWTRAIT EDITION Control Tower &bull; {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <button 
          onClick={fetchDashboardStats}
          disabled={isLoading}
          className={`w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-all ${isLoading ? 'animate-spin' : ''}`}
        >
          ↻
        </button>
      </header>

      {/* 🍏 그리드 레이아웃: 전략적 중요도에 따라 카드 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <DashboardCard 
          title="VIP Waitlist" 
          desc="초대 대기 및 승인 명단" 
          count={stats.waitlist} 
          href="/admin/waitlist" 
          icon="🗝️" 
          color="#F59E0B" // 앰버
        />

        <DashboardCard 
          title="Manage Orders" 
          desc="장인 공정 및 선주문 관제" 
          count={stats.manageOrders} 
          href="/admin/manage_orders" 
          icon="⚒️" 
          color="#3B82F6" // 블루
        />

        <DashboardCard 
          title="General Orders" 
          desc="일반 굿즈 결제 내역" 
          count={stats.orders} 
          href="/admin/orders" 
          icon="📦" 
          color="#10B981" // 에메랄드
        />

        <DashboardCard 
          title="Products" 
          desc="비스포크 라인업 관리" 
          count={stats.products} 
          href="/admin/products" 
          icon="💎" 
          color="#8B5CF6" // 퍼플
        />

        <DashboardCard 
          title="Editorials" 
          desc="브랜드 저널 및 매거진" 
          count={stats.editorials} 
          href="/admin/editor" 
          icon="🖋️" 
          color="#EC4899" // 핑크
        />

      </div>

      {/* 하단 장식용 카피 */}
      <div className="mt-20 text-center">
        <p className="text-[9px] text-zinc-700 tracking-[0.4em] uppercase font-serif">
          Data translates into Color. Color translates into Eternity.
        </p>
      </div>
    </div>
  );
}