import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 🍏 iOS 네이티브 앱처럼 보이게 만드는 마법의 태그들
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

// 🍏 핀치 줌(확대)을 막아서 웹페이지 느낌을 지움
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
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white flex justify-center min-h-screen`}>
        {/* 🍏 데스크탑에서 열어도 아이폰 비율(max-w-md) 유지 */}
        <div className="w-full max-w-md bg-zinc-950 min-h-screen relative shadow-2xl overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}