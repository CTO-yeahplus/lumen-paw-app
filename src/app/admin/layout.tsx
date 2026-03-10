"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // 🍏 사이드바 메뉴 리스트
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: "◱" },
    { name: "VIP Waitlist", path: "/admin/waitlist", icon: "🗝️" },
    { name: "Manage Orders", path: "/admin/manage_orders", icon: "⚒️" },
    { name: "General Orders", path: "/admin/orders", icon: "📦" },
    { name: "Products", path: "/admin/products", icon: "💎" },
    { name: "Editorials", path: "/admin/editor", icon: "🖋️" },
  ];

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden selection:bg-zinc-800">
      
      {/* 💎 Left Sidebar: 중앙 관제 네비게이션 */}
      <aside className="w-64 shrink-0 border-r border-zinc-900 bg-black flex flex-col justify-between z-50">
        <div>
          {/* 로고 영역 */}
          <div className="h-24 flex items-center px-8 border-b border-zinc-900">
            <h1 className="text-xl font-serif tracking-[0.3em] uppercase text-white">
            PAWTRAIT EDITION<span className="text-zinc-600 text-[9px] ml-2 font-sans tracking-widest font-bold">ADMIN</span>
            </h1>
          </div>

          {/* 메뉴 영역 */}
          <nav className="p-4 space-y-2 mt-4">
            {menuItems.map((item) => {
              // 현재 접속 중인 URL과 메뉴의 경로가 일치하는지 확인 (불빛 켜기)
              const isActive = pathname === item.path;
              
              return (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                    isActive 
                      ? 'bg-zinc-900 text-white shadow-inner' 
                      : 'text-zinc-500 hover:bg-zinc-950 hover:text-zinc-300'
                  }`}
                >
                  <span className={`text-lg transition-transform duration-300 ${isActive ? 'scale-110 grayscale-0' : 'grayscale opacity-70 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-white' : ''}`}>
                    {item.name}
                  </span>
                  
                  {/* 활성화된 메뉴 우측의 우아한 불빛(Indicator) */}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)] animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 하단 푸터 (버전 및 시스템 정보) */}
        <div className="p-8 border-t border-zinc-900">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
             <p className="text-[9px] text-zinc-500 tracking-[0.2em] uppercase font-bold">System Online</p>
           </div>
           <p className="text-[10px] text-zinc-700 tracking-widest font-serif italic">Bespoke Control Tower</p>
        </div>
      </aside>

      {/* 💎 Right Main Content Area: 선택된 메뉴의 실제 페이지가 그려지는 캔버스 */}
      <main className="flex-1 overflow-y-auto bg-zinc-950 relative custom-scrollbar">
        {/* 🍏 이 {children} 안으로 page.tsx (Dashboard), waitlist/page.tsx 등이 
          자동으로 교체되며 들어옵니다. 깜빡임이 전혀 없습니다!
        */}
        {children}
      </main>
      
    </div>
  );
}