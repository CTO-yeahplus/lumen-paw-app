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
      // 1. 게이트 진입 시 문을 일단 잠그고 멤버십(세션)을 확인합니다.
      setIsChecking(true);
      const { data: { session } } = await supabase.auth.getSession();

      // 2. 멤버십이 없는데 프라이빗 구역(/vault, /claim 등)에 들어오려 할 경우
      if (!session && !isPublicPage) {
        router.replace("/"); // 로비로 가차 없이 쫓아냅니다.
      } else {
        // 3. 확인 완료 (문을 엽니다)
        setIsChecking(false);
      }
    };

    checkVIPAccess();

    // 4. 실시간 감시 카메라 (머무는 동안 로그인 만료/로그아웃 시 즉각 추방)
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session && !isPublicPage) {
        router.replace("/");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router, isPublicPage]);

  // 🍏 철저한 암전 (Zero Flash): 
  // 심사 중일 때는 내부 화면을 1밀리초도 보여주지 않고 럭셔리한 로딩 점만 띄웁니다.
  if (isChecking && !isPublicPage) {
    return (
      <div className="flex justify-center min-h-screen w-full bg-black">
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
           <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-ping" />
        </div>
      </div>
    );
  }

  // 🍏 심사가 끝난 VIP에게만 허락되는 공간
  return (
    <div className="flex justify-center min-h-screen w-full bg-black">
      <div className={`w-full ${isAdminPage ? "" : "max-w-md shadow-2xl"} bg-zinc-950 min-h-screen relative overflow-hidden transition-all duration-500`}>
        {children}
      </div>
    </div>
  );
}