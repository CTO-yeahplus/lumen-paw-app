import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper"; // 🍏 새로 만들 컴포넌트
import { Analytics } from "@vercel/analytics/next"; // 🍏 1. Analytics 임포트
import KakaoEscape from "@/components/layout/KakaoEscape"; // 🍏 1. 요원 호출

const inter = Inter({ subsets: ["latin"] });

// 🍏 서버 컴포넌트에서만 허용되는 Metadata (정상 작동)
export const metadata: Metadata = {
  title: "pawtraitedition",
  description: "당신의 반려동물을 위한 단 하나의 비스포크 마스터피스",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "pawtraitedition",
  },
  
  // 💎 [핵심] 링크 공유 시 보여질 황금빛 초대장 세팅 (Open Graph)
  openGraph: {
    title: "pawtraitedition",
    description: "당신의 반려동물을 위한 단 하나의 비스포크 마스터피스",
    url: "https://pawtraitedition.com",
    siteName: "pawtraitedition",
    images: [
      {
        url: "https://pawtraitedition.com/images/og-image.png", // Step 1에서 저장한 이미지 경로
        width: 1200,
        height: 630,
        alt: "Pawtrait Edition Bespoke Pet Masterpiece",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  
  // (선택) 트위터 등 일부 플랫폼을 위한 세팅
  twitter: {
    card: "summary_large_image",
    title: "pawtraitedition",
    description: "당신의 반려동물을 위한 단 하나의 비스포크 마스터피스",
    images: ["https://pawtraitedition.com/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {/* 🍏 2. 투명한 카카오톡 강제 탈출 스크립트 가동 */}
        <KakaoEscape />
        {/* 🍏 너비 조절 로직만 전담하는 클라이언트 래퍼로 감쌉니다. */}
        <LayoutWrapper>
          {children}
          <Analytics />
        </LayoutWrapper>
      </body>
    </html>
  );
}