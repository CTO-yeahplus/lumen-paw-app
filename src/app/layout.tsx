import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper"; // 🍏 새로 만들 컴포넌트

const inter = Inter({ subsets: ["latin"] });

// 🍏 서버 컴포넌트에서만 허용되는 Metadata (정상 작동)
export const metadata: Metadata = {
  title: "LUMEN",
  description: "My Private Vault",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LUMEN",
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
        {/* 🍏 너비 조절 로직만 전담하는 클라이언트 래퍼로 감쌉니다. */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}