"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // 🍏 보안 검사 상태 (기본적으로 문을 잠가둡니다)
  const [isChecking, setIsChecking] = useState(true);

  const isAdminPage = pathname?.startsWith("/admin");
  const isPublicPage = pathname === "/"; // 로비(로그인) 화면만 유일한 퍼블릭 구역입니다.

  useEffect(() => {
    const checkVIPAccess = async () => {
      setIsChecking(true);
      const { data: { session } } = await supabase.auth.getSession();

      if (!session && !isPublicPage) {
        router.replace("/"); 
      } else {
        setIsChecking(false);
      }
    };

    checkVIPAccess();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session && !isPublicPage) {
        router.replace("/");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router, isPublicPage]);

  // 🍏 심사가 끝난 VIP에게만 허락되는 공간
  return (
    <div className="flex justify-center min-h-screen w-full bg-black">
      <div className={`w-full ${isAdminPage ? "" : "max-w-md shadow-2xl"} bg-zinc-950 min-h-screen relative overflow-hidden transition-all duration-500`}>
        
        {/* 💎 [핵심 교정] children을 자르지 않고, 그 위를 '암전 커튼'으로 완벽히 덮어버립니다. */}
        {isChecking && !isPublicPage && (
          <div className="absolute inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
             <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-ping" />
          </div>
        )}

        {/* 🍏 Next.js의 내부 라우터가 담긴 children은 어떤 상황에서도 무조건 렌더링되어 척추를 유지합니다. */}
        {children}
        
      </div>
    </div>
  );
}