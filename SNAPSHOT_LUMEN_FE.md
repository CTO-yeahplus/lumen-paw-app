# 🧠 Deep Context Snapshot

**Generated at:** 2026-03-06 20:14:03
**Project:** lumen-app (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS, Supabase

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 25

```text
.
│   ├── next-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   public/
│   │   ├── manifest.json
│   │   images/
│   │   icons/
│   src/
│   │   app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── globals.css
│   │   │   editorial/
│   │   │   │   [slug]/
│   │   │   │   │   ├── page.tsx
│   │   │   admin/
│   │   │   │   ├── page.tsx
│   │   │   │   editor/
│   │   │   │   │   ├── page.tsx
│   │   │   api/
│   │   │   │   extract/
│   │   │   │   │   ├── route.ts
│   │   │   │   editor/
│   │   │   │   │   ├── route.ts
│   │   │   claim/
│   │   │   │   ├── page.tsx
│   │   │   vault/
│   │   │   │   ├── page.tsx
│   │   components/
│   │   │   navigation/
│   │   │   │   ├── BottomNav.tsx
│   │   │   modals/
│   │   │   │   ├── LoginModal.tsx
│   │   │   │   ├── ProfileModal.tsx
│   │   │   │   ├── CheckoutModal.tsx
│   │   │   │   ├── WaitlistModal.tsx
│   │   │   vault/
│   │   │   │   ├── LumenCustomSection.tsx
│   │   │   │   ├── EditorialTab.tsx
│   │   │   │   ├── PrivateVaultTab.tsx
│   │   │   │   ├── MuseTab.tsx
│   │   lib/
│   │   │   ├── supabase.ts
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "lumen-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "@supabase/supabase-js": "^2.98.0",
    "html5-qrcode": "^2.3.8",
    "jszip": "^3.10.1",
    "lucide-react": "^0.577.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

        ### 📄 public/manifest.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "name": "LUMEN Vault",
    "short_name": "LUMEN",
    "description": "Premium Pet IP Assetization",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#000000",
    "icons": [
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
        ### 📄 src/app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/font/google`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
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
    <html lang="ko" className="dark">
      <body className={`${inter.className} bg-black text-white flex justify-center min-h-screen`}>
        {/* 🍏 데스크탑에서 열어도 아이폰 비율(max-w-md) 유지 */}
        <div className="w-full max-w-md bg-zinc-950 min-h-screen relative shadow-2xl overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
        ### 📄 src/app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/components/modals/LoginModal`
* 🧩 **Component (Default):** `ClaimPage`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import LoginModal from "@/components/modals/LoginModal";

export default function ClaimPage() {
  const [isSyncing, setIsSyncing] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSyncing(false);
      setIsLoginModalOpen(true); // 2.5초 뒤 싱크가 끝나면 모달을 띄웁니다.
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-[100dvh] bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* 배경 에셋 (항상 유지) */}
      <div className="absolute inset-0 bg-cover bg-center grayscale scale-105" style={{ backgroundImage: "url('/images/img_04.png')" }} />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Syncing Animation */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ${isSyncing ? "opacity-100" : "opacity-0"}`}>
        <div className="relative w-32 h-32 flex items-center justify-center mb-10">
          <div className="absolute inset-0 border-[3px] border-zinc-800 rounded-full animate-ping opacity-30" />
          <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.6)]" />
        </div>
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-3 text-zinc-300">Synchronizing Vault</h2>
      </div>

      {/* 🍏 분리된 로그인 모달 호출 */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />

    </main>
  );
}
        ### 📄 src/app/globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

/* 시스템 설정을 덮어씌움 */
body {
  background-color: black !important;
  color: white !important;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

        ### 📄 src/app/editorial/[slug]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `EditorialPage`
* ww **Hooks:** `useEffect, useParams, useState, useRouter`

        ```typescript
        "use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditorialPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [data, setData] = useState<{ title: string; image_url: string; content: string } | null>(null);
  const [brandColor, setBrandColor] = useState<string>("#ffffff");
  const [palette, setPalette] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 현재 선택된 배경 오라(Aura) 상태
  const [activeAura, setActiveAura] = useState<string>("black");

  useEffect(() => {
    if (!slug) return;

    const fetchEditorialData = async () => {
      setIsLoading(true);
      const { data: editorial, error } = await supabase
        .from('editorials')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (editorial) {
        setData(editorial);
        setBrandColor(editorial.brand_color || "#ffffff");
        setPalette(editorial.color_palette || []);
      } else if (error) {
        console.error("Editorial fetch error:", error);
      }
      setIsLoading(false);
    };

    fetchEditorialData();
  }, [slug]);

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xs tracking-widest animate-pulse">LOADING MASTERPIECE...</div>;
  if (!data) return <div className="min-h-screen bg-black text-white p-10">매거진을 찾을 수 없습니다.</div>;

  const parts = data.content.split('\n\n');
  const quote = parts.length > 0 && parts[0].startsWith('"') ? parts[0] : "";
  const bodyParts = quote ? parts.slice(1) : parts;

  // 🍏 핵심 로직: 현재 선택된 오라가 'black'(초기화 상태)이면 원래의 브랜드 컬러를 쓰고, 
  // 다른 컬러가 선택되었다면 텍스트 포인트도 그 색상으로 따라가도록 동기화합니다.
  const activeAccentColor = activeAura === "black" ? brandColor : activeAura;

  return (
    <main 
      className="w-full min-h-screen text-white font-sans relative pb-20 transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: activeAura === "black" ? "#000000" : `${activeAura}15` }}
    >
      
      {/* 닫기 버튼 */}
      <button onClick={() => router.back()} className="fixed top-8 left-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>

      {/* 매거진 풀스크린 커버 */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-cover object-cover grayscale bg-center" style={{ backgroundImage: `url('${data.image_url}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-12 left-8 right-8">
          {/* 🍏 포인트 동기화: 부제목 컬러 */}
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block transition-colors duration-1000" style={{ color: activeAccentColor }}>
            LUMEN Editorial
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight text-white shadow-black drop-shadow-2xl mb-6 word-break-keep">
            {data.title}
          </h1>
          {/* 🍏 포인트 동기화: 밑줄 컬러 */}
          <div className="w-16 h-1.5 rounded-full transition-colors duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: activeAccentColor }} />
        </div>
      </div>

      {/* AI가 작성한 본문 */}
      <article className="px-8 py-16 md:px-24 md:py-24 max-w-3xl mx-auto">
        
        {quote && (
          // 🍏 포인트 동기화: 인용구 좌측 테두리
          <blockquote className="mb-14 border-l-4 pl-6 py-2 transition-colors duration-1000" style={{ borderColor: activeAccentColor }}>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-zinc-200 word-break-keep">{quote}</p>
          </blockquote>
        )}
        
        <div className="space-y-10 text-zinc-400 text-base md:text-lg font-light leading-[2.2] word-break-keep">
          {bodyParts.map((paragraph, idx) => {
            if (!paragraph.trim()) return null;

            if (idx === 0) {
              return (
                <div key={idx}>
                  <p className="text-zinc-300">
                    {/* 🍏 포인트 동기화: 첫 글자(Drop-cap) 컬러 */}
                    <span className="float-left text-6xl font-serif mt-2 mr-4 font-bold transition-colors duration-1000" style={{ color: activeAccentColor }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.substring(1)}
                  </p>
                  
                  {/* 인터랙티브 컬러 팔레트 (The Aura Palette) */}
                  <div className="my-16 py-12 border-y border-zinc-900 flex flex-col items-center bg-zinc-950/30 rounded-3xl backdrop-blur-sm">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-8">
                      Select Your Identity Aura
                    </span>
                    
                    <div className="flex flex-wrap gap-5 md:gap-8 justify-center w-full px-4">
                      {palette.slice(0, 8).map((colorHex, i) => (
                        <div 
                          key={i} 
                          onClick={() => setActiveAura(colorHex)}
                          className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                          <div 
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-700 
                              ${activeAura === colorHex ? 'scale-110 border-2 border-white' : 'border border-zinc-800 opacity-60 hover:opacity-100'}
                            `} 
                            style={{ 
                              backgroundColor: colorHex,
                              boxShadow: activeAura === colorHex ? `0 0 25px ${colorHex}80` : 'none'
                            }} 
                          />
                          <span className={`text-[9px] font-mono uppercase tracking-wider transition-colors ${activeAura === colorHex ? 'text-white font-bold' : 'text-zinc-600'}`}>
                            {colorHex}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setActiveAura("black")}
                      className="mt-10 text-[8px] text-zinc-500 border border-zinc-800 px-4 py-1.5 rounded-full hover:text-white hover:border-zinc-500 transition-all uppercase tracking-widest"
                    >
                      Reset to Pure Black
                    </button>

                    <p className="mt-6 text-[10px] text-zinc-600 tracking-widest uppercase">
                      Based on AI Color Extraction
                    </p>
                  </div>
                </div>
              );
            }

            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
          <span>AI Vision Analysis by LK Ventures</span>
          <span>Photographed by 견생네컷</span>
        </div>
      </article>

      <div className="px-8 pb-32 pt-10 flex justify-center">
        <button 
          onClick={() => router.push('/vault?tab=editorial')}
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Back to Collection</span>
        </button>
      </div>
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => { navigator.clipboard.writeText(window.location.href); alert("링크가 복사되었습니다. 인스타그램에 공유해보세요!"); }}
          className="bg-black/80 backdrop-blur-xl border border-zinc-700 text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)] whitespace-nowrap"
        >
          Share this Editorial
        </button>
      </div>

    </main>
  );
}
        ### 📄 src/app/admin/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, html5-qrcode`
* 🧩 **Component (Default):** `AdminSenderPage`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";
import { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function AdminSenderPage() {
  const [phone, setPhone] = useState("");
  const [assetId, setAssetId] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  
  // 🍏 QR 스캐너 상태 관리
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  // 🍏 QR 스캔 성공 시 실행될 마법의 함수
  const onScanSuccess = (decodedText: string) => {
    try {
      // 스캐너 중지 및 비프음(진동) 피드백
      stopScanner();
      if (navigator.vibrate) navigator.vibrate(200);

      // 1. 인생네컷 URL인지 확인
      if (decodedText.includes("download.life4cut.net")) {
        const urlObj = new URL(decodedText);
        const folderPath = urlObj.searchParams.get("folderPath") || "";
        const extractedId = folderPath.split("/").pop() || "";
        
        // 2. Asset ID 파싱 후 폼에 자동 입력 (앞 8자리 절사)
        const finalId = extractedId.substring(0, 8).toUpperCase();
        setAssetId(finalId);
      } else {
        // 알 수 없는 QR일 경우 그대로 입력
        setAssetId(decodedText);
      }
    } catch (error) {
      console.error("QR 파싱 에러:", error);
      alert("유효하지 않은 QR 코드입니다.");
    }
  };

  // 스캐너 시작
  const startScanner = async () => {
    setIsScanning(true);
    try {
      const html5QrCode = new Html5Qrcode("reader");
      scannerRef.current = html5QrCode;
      
      await html5QrCode.start(
        { facingMode: "environment" }, // 후면 카메라 우선
        { fps: 10, qrbox: { width: 250, height: 250 } },
        onScanSuccess,
        (errorMessage) => { /* 인식 중 에러는 무시 (계속 탐색함) */ }
      );
    } catch (err) {
      console.error("카메라 시작 실패:", err);
      alert("카메라 권한을 허용해주세요.");
      setIsScanning(false);
    }
  };

  // 스캐너 중지
  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        scannerRef.current?.clear();
        setIsScanning(false);
      }).catch(err => console.error(err));
    } else {
      setIsScanning(false);
    }
  };

  // 컴포넌트 언마운트 시 카메라 끄기 방어 코드
  useEffect(() => {
    return () => {
      if (scannerRef.current && isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [isScanning]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return alert("전화번호를 정확히 입력해주세요.");
    if (!assetId) return alert("Asset ID를 입력하거나 스캔해주세요.");
    
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setPhone(""); 
      setAssetId("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1000);
  };

  return (
    <main className="w-full min-h-[100dvh] bg-zinc-950 text-white flex flex-col font-sans pb-10">
      
      <header className="bg-black border-b border-zinc-800 p-6 pt-12 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-1">Casting Director Only</div>
            <h1 className="text-xl font-bold">LUMEN Quick Sender</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 flex flex-col justify-center max-w-md mx-auto w-full">
        
        {/* 🍏 QR Scanner Area */}
        <div className="mb-6">
          <div className={`relative overflow-hidden bg-black border border-zinc-800 rounded-3xl transition-all duration-500 ${isScanning ? 'h-[350px] shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'h-20'}`}>
            
            {/* 스캐너 UI가 렌더링될 div */}
            <div id="reader" className={`w-full h-full ${!isScanning && 'hidden'}`}></div>
            
            {/* 스캔 라인 애니메이션 (HUD 효과) */}
            {isScanning && (
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-[scan_2s_ease-in-out_infinite]" />
            )}

            {/* 스캐너 켜기/끄기 토글 버튼 */}
            {!isScanning ? (
              <button 
                onClick={startScanner}
                className="w-full h-full flex items-center justify-center gap-3 text-blue-400 font-bold hover:bg-zinc-900 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                카메라 켜기 (인화지 QR 스캔)
              </button>
            ) : (
              <button 
                onClick={stopScanner}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold border border-zinc-700"
              >
                스캔 취소
              </button>
            )}
          </div>
        </div>

        {/* 🍏 Sender Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">
          {/* 스캔 완료 시 반짝이는 효과 */}
          <div className={`absolute inset-0 border-2 border-blue-500 rounded-3xl pointer-events-none transition-opacity duration-1000 ${assetId && !isScanning ? 'opacity-100' : 'opacity-0'}`} />

          <form onSubmit={handleSend} className="space-y-5 relative z-10">
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest">1. Asset ID (사진 고유번호)</label>
                {assetId && <span className="text-blue-400 text-[10px] font-bold">✔ SCANNED</span>}
              </div>
              <input 
                type="text" 
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)}
                placeholder="QR 스캔 시 자동 입력됩니다"
                className={`w-full bg-black border ${assetId ? 'border-blue-500/50 text-blue-400' : 'border-zinc-700 text-white'} rounded-xl h-14 px-4 font-mono text-lg focus:outline-none transition-colors`}
                required
              />
            </div>

            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">2. 고객 전화번호 (- 제외)</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01012345678"
                className="w-full bg-black border border-zinc-700 text-white rounded-xl h-14 px-4 text-xl tracking-wider focus:outline-none focus:border-[#FEE500] transition-colors"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className={`w-full h-16 mt-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                status === "success" 
                  ? "bg-green-500 text-black" 
                  : "bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 active:scale-[0.98]"
              }`}
            >
              {status === "idle" && (
                <>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3C6.477 3 2 6.58 2 11c0 2.825 1.763 5.3 4.417 6.81l-1.127 4.125c-.062.227.195.404.382.268l4.757-3.15c.504.062 1.028.097 1.571.097 5.523 0 10-3.58 10-8s-4.477-8-10-8z"/></svg>
                  알림톡 발송하기
                </>
              )}
              {status === "sending" && <span className="animate-pulse">발송 중...</span>}
              {status === "success" && "발송 완료!"}
            </button>
          </form>
        </div>

      </div>

      {/* 스캔 애니메이션 CSS 추가 */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </main>
  );
}
        ### 📄 src/app/admin/editor/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `AIEditorAdmin`
* ww **Hooks:** `useState, useEffect, useSearchParams, useRouter`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function AIEditorAdmin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams ? searchParams.get('id') : null;

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // 🍏 Data States
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brandColor, setBrandColor] = useState<string>(""); 
  const [colorPalette, setColorPalette] = useState<string[]>([]); // 컬러 팔레트 전체 배열
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  
  // 🍏 Loading States
  const [isUploading, setIsUploading] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false); 
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // 🍏 삭제 로딩 상태 추가

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🍏 Archive & Search States
  const [editorialsList, setEditorialsList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/vault");
        return;
      }
      setIsAuthorized(true);
      setIsCheckingAuth(false);
    };
    checkAdminAuth();
  }, [router]);

  const fetchEditorialsList = async () => {
    const { data } = await supabase
      .from('editorials')
      .select('id, title, slug, created_at')
      .order('created_at', { ascending: false });
    if (data) setEditorialsList(data);
  };

  useEffect(() => {
    fetchEditorialsList();
  }, []);

  useEffect(() => {
    if (editId) {
      const fetchExistingData = async () => {
        const { data } = await supabase.from('editorials').select('*').eq('id', editId).single();
        if (data) {
          setTitle(data.title);
          setSlug(data.slug);
          setImageUrl(data.image_url);
          setContent(data.content);
          setBrandColor(data.brand_color || "");
          setColorPalette(data.color_palette || []);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };
      fetchExistingData();
    } else {
      setTitle(""); setSlug(""); setImageUrl(""); setContent(""); 
      setBrandColor(""); setColorPalette([]); setSourceUrl("");
    }
  }, [editId]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage.from('editorials').upload(fileName, file);
      if (error) throw error;
      const { data } = supabase.storage.from('editorials').getPublicUrl(fileName);
      setImageUrl(data.publicUrl);
    } catch (e) { alert("업로드 실패"); }
    setIsUploading(false);
  };

  const handleUrlExtract = async () => {
    if (!sourceUrl || !sourceUrl.includes("chemistry")) return alert("유효한 인생네컷 URL을 입력하세요.");
    setIsExtracting(true); // 🍏 추출 애니메이션 트리거
    try {
      const res = await fetch("/api/extract", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sourceUrl }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "추출 실패");
      
      if (data.images && data.images.length > 0) setImageUrl(data.images[0]);
      if (data.colorChips && data.colorChips.length > 0) {
        setBrandColor(data.colorChips[0]);
        setColorPalette(data.colorChips);
      }
    } catch (e: any) { alert(`🚨 추출 에러:\n${e.message}`); }
    setIsExtracting(false); // 🍏 추출 애니메이션 종료
  };

  const handleGenerate = async () => {
    if (!imageUrl) return alert("이미지를 먼저 준비하세요.");
    setIsGenerating(true);
    try {
      const res = await fetch("/api/editor", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ imageUrl, brandColor, colorPalette }) 
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "서버 통신 실패");
      
      setTitle(data.title || "THE UNTITLED MASTERPIECE");
      setContent(data.content || "본문 생성에 실패했습니다.");
      setSlug((data.title || "untitled").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    } catch (e: any) { alert(`🚨 에러 발생:\n${e.message}`); }
    setIsGenerating(false);
  };

  const handleSave = async () => {
    if (!title || !slug || !imageUrl || !content) return alert("모든 항목을 입력하세요.");
    setIsSaving(true);
    
    const payload = { 
      title, slug, image_url: imageUrl, content,
      brand_color: brandColor, color_palette: colorPalette 
    };

    try {
      if (editId) {
        const { error } = await supabase.from('editorials').update(payload).eq('id', editId);
        if (error) throw error;
        alert("수정 완료!");
      } else {
        const { error } = await supabase.from('editorials').insert([payload]);
        if (error) throw error;
        alert("발행 완료!");
        router.push('/admin/editor');
      }
      fetchEditorialsList(); 
    } catch (e) { alert("발행 실패: URL SLUG 중복 등을 확인하세요."); }
    setIsSaving(false);
  };

  // 🍏 삭제 로직 추가
  const handleDelete = async () => {
    if (!editId) return;
    const isConfirmed = window.confirm("정말로 이 잡지를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.");
    if (!isConfirmed) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase.from('editorials').delete().eq('id', editId);
      if (error) throw error;
      alert("성공적으로 삭제되었습니다.");
      router.push('/admin/editor'); // 새 글 작성 모드로 리다이렉트
      fetchEditorialsList(); // 리스트 갱신
    } catch (error: any) {
      alert(`삭제 실패: ${error.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const filteredEditorials = editorialsList.filter((item) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-6 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">LUMEN STUDIO</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-zinc-500 uppercase hidden md:inline-block">AI Editorial Desk</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[9px] md:text-[10px] font-bold text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
            AUTHORIZED: {ADMIN_EMAIL}
          </div>
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">✕</button>
        </div>
      </nav>

      <main className="w-full px-6 lg:px-16 py-10 md:py-16">
        
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 tracking-tight">
                  {editId ? "Edit Masterpiece" : "New Masterpiece"}
                </h1>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase">
                  {editId ? `Editing ID: ${editId.substring(0, 8)}...` : "Drafting Mode"}
                </p>
              </div>
              
              {/* 🍏 삭제 및 새 글 작성 버튼 (수정 모드일 때만 표시) */}
              {editId && (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleDelete} 
                    disabled={isDeleting}
                    className="text-[10px] font-bold text-red-500 uppercase tracking-widest border border-red-500/30 px-6 py-3 rounded-full hover:bg-red-500/10 transition-colors shrink-0 flex items-center gap-2"
                  >
                    {isDeleting ? "DELETING..." : "DELETE POST"}
                  </button>
                  <button 
                    onClick={() => router.push('/admin/editor')} 
                    className="text-[10px] font-bold text-white uppercase tracking-widest border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
                  >
                    + Create New Post
                  </button>
                </div>
              )}
            </div>

            {/* Asset Injection */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 lg:p-10">
              <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">1. Asset Injection</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <div className="space-y-3">
                  <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">LIFE4CUT QR URL</label>
                  <div className="flex gap-2">
                    <input value={sourceUrl} onChange={e => setSourceUrl(e.target.value)} className="flex-1 bg-black border border-zinc-800 rounded-xl p-4 text-xs text-white focus:border-zinc-500 transition-all" placeholder="Paste URL here..." />
                    
                    {/* 🍏 추출 버튼 시각적 피드백 개선 */}
                    <button onClick={handleUrlExtract} disabled={isExtracting || !sourceUrl} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-6 rounded-xl disabled:opacity-30 flex items-center justify-center gap-2 min-w-[100px] transition-all">
                      {isExtracting ? (
                        <><span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>...</>
                      ) : "Extract"}
                    </button>
                  </div>
                </div>
                <div>
                  <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
                  <button onClick={() => fileInputRef.current?.click()} className="w-full h-14 rounded-xl border border-dashed border-zinc-700 text-xs font-bold text-zinc-500 tracking-widest hover:border-zinc-500 hover:text-white transition-colors">
                    {isUploading ? "UPLOADING..." : "+ MANUAL S3 UPLOAD"}
                  </button>
                </div>
              </div>
              
              {/* 컬러 팔레트 표시 영역 */}
              {colorPalette.length > 0 && (
                <div className="mt-8">
                  <p className="text-[9px] font-bold text-zinc-500 tracking-widest mb-3 uppercase">Extracted Aura Palette</p>
                  <div className="flex gap-3 flex-wrap bg-black p-4 rounded-xl border border-zinc-800 w-fit">
                    {colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 group">
                        <div 
                          className="w-8 h-8 rounded-full border border-zinc-700 shadow-lg transition-transform group-hover:scale-110" 
                          style={{ backgroundColor: color }} 
                        />
                        <span className="text-[8px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4 bg-black px-1 rounded">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* AI Metadata & Content */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 lg:p-10 space-y-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">2. Metadata & Content</h3>
                <button onClick={handleGenerate} disabled={isGenerating || !imageUrl} className="bg-white text-black text-[9px] font-bold tracking-widest uppercase px-5 py-3 rounded-full disabled:opacity-30 hover:bg-zinc-200 transition-colors shadow-lg flex items-center gap-2">
                  {isGenerating ? "ANALYZING..." : "AI Auto Write"}
                </button>
              </div>
              
              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">MAGAZINE TITLE</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-transparent border-b border-zinc-800 pb-3 text-3xl lg:text-4xl text-white focus:border-zinc-500 transition-all focus:outline-none" placeholder="Enter Title Here" />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">URL SLUG</label>
                <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-zinc-400 font-mono focus:border-zinc-500 transition-all focus:outline-none" placeholder="e.g. the-silent-noir" />
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-bold text-zinc-500 ml-1 tracking-widest">EDITORIAL CONTENT</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full h-80 lg:h-[600px] bg-black border border-zinc-800 rounded-2xl p-6 lg:p-8 text-base text-zinc-300 leading-[2] focus:outline-none focus:border-zinc-500 transition-all resize-none word-break-keep" placeholder="본문을 작성하세요..." />
              </div>

              <div className="pt-4">
                <button onClick={handleSave} disabled={!content || isSaving} className="w-full md:w-auto px-12 h-16 bg-blue-600 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-blue-500 active:scale-[0.98] transition-all disabled:opacity-30 disabled:bg-zinc-800 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {isSaving ? "SAVING..." : editId ? "UPDATE MASTERPIECE" : "PUBLISH TO GLOBAL"}
                </button>
              </div>
            </section>
          </div>

          {/* Right: Live App Preview */}
          <div className="w-full xl:w-[400px] shrink-0">
            <div className="sticky top-24 flex flex-col items-center xl:items-end">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-6 w-full max-w-[380px] text-center xl:text-left">Live App Preview</h3>
              <div className="w-full max-w-[380px] bg-black border-[10px] border-zinc-900 rounded-[50px] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col relative aspect-[9/19.5]">
                
                {/* 🍏 로딩 오버레이 (Extracting & Generating 통합) */}
                {(isGenerating || isExtracting) && (
                  <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
                    <p className="text-[10px] font-bold text-white tracking-[0.3em] uppercase animate-pulse mb-2">
                      {isExtracting ? "Extracting Asset..." : "Editor is writing..."}
                    </p>
                    <p className="text-[10px] text-zinc-500 tracking-widest uppercase">
                      {isExtracting ? "Syncing with S3 Vault" : "AI Vision Analysis"}
                    </p>
                  </div>
                )}

<div className="flex-1 overflow-y-auto scrollbar-hide bg-[#050505]">
                  <div className="relative h-[55%] w-full">
                      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${imageUrl || "/images/img_01.png"}')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[8px] font-bold tracking-[0.4em] uppercase mb-2 transition-colors duration-1000" style={{ color: brandColor || "#a1a1aa" }}>LUMEN EDITORIAL</p>
                        <h1 className="text-3xl font-serif font-bold text-white leading-[1.1] shadow-black drop-shadow-2xl mb-4 line-clamp-3">{title || "THE MASTERPIECE"}</h1>
                        <div className="w-10 h-1 rounded-full transition-colors duration-1000" style={{ backgroundColor: brandColor || "#ffffff" }} />
                      </div>
                  </div>
                  
                  {/* 🍏 매거진 본문 영역 */}
                  <div className="p-6 pb-12">
                      <div className="text-sm text-zinc-300 leading-[2.2] font-light word-break-keep whitespace-pre-wrap">
                        {content || "이미지와 브랜드 컬러 분석을 시작하면, 이 스크린 위에 우아하게 렌더링됩니다."}
                      </div>

                      {/* 🍏 원형 컬러칩 UI (The Aura Palette) - 본문 하단에 럭셔리하게 배치 */}
                      {colorPalette.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col items-center">
                          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-6">
                            The Identity Aura
                          </span>
                          <div className="flex flex-wrap gap-4 justify-center w-full px-2">
                            {colorPalette.slice(0, 8).map((colorHex, i) => (
                              <div key={i} className="flex flex-col items-center gap-3">
                                <div 
                                  className="w-10 h-10 rounded-full border border-zinc-800 shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
                                  style={{ backgroundColor: colorHex }} 
                                />
                                <span className="text-[7px] font-mono uppercase tracking-widest text-zinc-600">
                                  {colorHex}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl z-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: The Archive */}
        <section className="mt-24 pt-16 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">The Archive</h3>
              <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-mono">
                {editorialsList.length} Published Editorials
              </p>
            </div>
            
            <div className="relative w-full md:w-[400px]">
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                placeholder="Search by title or slug..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-14 pr-6 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredEditorials.map((item) => (
              <div 
                key={item.id}
                onClick={() => router.push(`/admin/editor?id=${item.id}`)}
                className={`p-6 md:p-8 border rounded-3xl cursor-pointer transition-all group
                  ${editId === item.id ? 'bg-zinc-900 border-zinc-500 shadow-xl scale-[1.02]' : 'bg-black border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/30'}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className={`text-lg font-bold line-clamp-2 transition-colors leading-snug ${editId === item.id ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                    {item.title}
                  </h4>
                  {editId === item.id && <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] shrink-0 ml-3 mt-1" />}
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-zinc-500">{formatDate(item.created_at)}</span>
                  <span className="text-[10px] text-zinc-600 truncate">/{item.slug}</span>
                </div>
              </div>
            ))}
            
            {filteredEditorials.length === 0 && (
              <div className="col-span-full py-20 text-center text-sm text-zinc-600 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/50">
                {searchQuery ? "검색 결과가 없습니다." : "발행된 글이 없습니다."}
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
        ### 📄 src/app/api/extract/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, jszip, @/lib/supabase`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // src/app/api/extract/route.ts
import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import { supabase } from '@/lib/supabase'; 

export async function POST(req: Request) {
  console.log("=====================================");
  console.log("🚀 [LUMEN S3] 데이터 추출 파이프라인 가동");

  try {
    const { sourceUrl } = await req.json();
    console.log("📍 [STEP 1] 타겟 URL 수신:", sourceUrl);

    const urlObj = new URL(sourceUrl);
    const bucket = urlObj.searchParams.get('bucket');
    const region = urlObj.searchParams.get('region');
    const folderPath = urlObj.searchParams.get('folderPath');

    if (!bucket || !region || !folderPath) {
      throw new Error("유효하지 않은 인생네컷 QR 주소입니다.");
    }

    const baseUrl = `https://${bucket}.s3.${region}.amazonaws.com${folderPath}`;
    const zipUrl = `${baseUrl}/original.zip`;
    const jsonUrl = `${baseUrl}/json.json`;
    
    // 🍏 [해결 1] JSON 컬러칩 오브젝트 분해 로직
    console.log("📍 [STEP 2] json.json 파일 다운로드 및 컬러칩 추출...");
    let colorChips: string[] = [];
    try {
      const jsonResp = await fetch(jsonUrl);
      if (jsonResp.ok) {
        const jsonData = await jsonResp.json();
        if (jsonData.colorChips && Array.isArray(jsonData.colorChips)) {
          // 객체 {hexColor, title...} 에서 'hexColor' 문자열만 핀셋으로 뽑아냅니다.
          colorChips = jsonData.colorChips.map((c: any) => c.hexColor || c);
        }
      }
    } catch (e) {
      console.log("⚠️ 컬러칩 JSON 추출 실패 (무시하고 진행)");
    }

    console.log("📍 [STEP 3] original.zip 다운로드 중...");
    const zipResp = await fetch(zipUrl);
    if (!zipResp.ok) throw new Error("ZIP 파일을 찾을 수 없습니다.");
    const zipBuffer = await zipResp.arrayBuffer();
    
    console.log("📍 [STEP 4] ZIP 압축 해제 및 이미지 색출 중...");
    const zip = await JSZip.loadAsync(zipBuffer);
    const extractedImages: string[] = [];

    // 🍏 [해결 2] ArrayBuffer 변환 및 extracts 버킷으로 업로드
    for (const [filename, fileData] of Object.entries(zip.files)) {
      if (!fileData.dir && filename.match(/\.(jpg|jpeg|png)$/i)) {
        
        // Next.js 환경에서 가장 안전한 버퍼 타입인 ArrayBuffer를 사용합니다.
        const content = await fileData.async('arraybuffer'); 
        const uniqueName = `extracted_${Date.now()}_${filename}`;
        
        console.log(`   - 📸 발견: ${filename} (Cloud 업로드 중...)`);
        
        // 🚨 관리자 전용인 'editorials' 대신, 방금 연 'extracts' 창고에 넣습니다.
        const { error } = await supabase.storage.from('extracts').upload(uniqueName, content, {
          contentType: 'image/jpeg'
        });

        if (error) {
          console.error(`   - 🚨 업로드 실패 (${filename}):`, error.message);
        } else {
          const { data } = supabase.storage.from('extracts').getPublicUrl(uniqueName);
          extractedImages.push(data.publicUrl);
        }
      }
    }

    console.log(`✅ [SUCCESS] 총 ${extractedImages.length}장의 원본 이미지 및 컬러 추출 완료!`);
    console.log("=====================================");

    return NextResponse.json({ 
      images: extractedImages,
      colorChips: colorChips 
    });

  } catch (error: any) {
    console.error("🚨 추출 에러:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
        ### 📄 src/app/api/editor/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @google/generative-ai`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  console.log("=====================================");
  console.log("🚀 [LUMEN AI] 에디터 파이프라인 가동 시작");
  
  try {
    const { imageUrl, brandColor } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY가 환경 변수에 없습니다.");

    const imageResp = await fetch(imageUrl);
    if (!imageResp.ok) throw new Error(`다운로드 실패: HTTP ${imageResp.status}`);

    const mimeType = imageResp.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await imageResp.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-1.5-pro-latest";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName }); 

    // 🍏 프롬프트에 컬러 정보를 주입하여 맞춤형 예술 평론을 작성하도록 강제합니다.
    const prompt = `
      당신은 Vogue/GQ 수석 에디터이자 반려견 역사 전문가입니다. 
      첨부된 흑백 사진을 분석하여 다음 형식을 엄격히 지켜 답변하십시오.
      
      [필수 참조 정보]
      이 반려견의 브랜드 퍼스널 컬러(Hex Code)는 '${brandColor || "알 수 없음"}' 입니다. 
      본문을 작성할 때, 이 색상이 주는 심리적, 예술적 느낌(예: 따뜻함, 강렬함, 우아함 등)을 
      사진 속 반려견의 성격이나 질감과 연결하여 한 문장 이상 반드시 우아하게 표현하십시오.

      **주의: TITLE을 제외한 QUOTE와 CONTENT는 반드시 아름답고 유려한 '한국어(Korean)'로 작성하십시오.**

      출력 형식:
      TITLE: [2~4단어 사이의 압도적인 영문 잡지 타이틀]
      QUOTE: [사진의 분위기와 완벽하게 어울리는 반려견 관련 역사적 명언이나 지혜 (한국어 번역)]
      CONTENT: [빛의 명암, 피사체의 털 질감, 시선의 우아함, 그리고 주어진 '브랜드 컬러'를 극찬하는 2문단의 예술 평론 (한국어)]
    `;

    const imageParts = [{ inlineData: { data: buffer.toString("base64"), mimeType: mimeType } }];
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const fullText = response.text();

    // 🍏 정규식으로 3파트를 완벽하게 분리 추출
    const titleMatch = fullText.match(/TITLE:\s*(.*)/);
    const quoteMatch = fullText.match(/QUOTE:\s*(.*)/);
    const contentMatch = fullText.match(/CONTENT:\s*([\s\S]*)/);

    const safeTitle = titleMatch ? titleMatch[1].trim() : "THE UNTITLED";
    const safeQuote = quoteMatch ? quoteMatch[1].trim() : "";
    const safeContent = contentMatch ? contentMatch[1].trim() : fullText;

    // 🍏 DB에 저장하기 편하도록 명언과 본문을 엔터 2개(\n\n)로 아름답게 결합
    const combinedContent = safeQuote 
      ? `"${safeQuote}"\n\n${safeContent}`
      : safeContent;

    return NextResponse.json({ 
      title: safeTitle,
      content: combinedContent 
    });

  } catch (error: any) {
    console.error("🚨 [FATAL ERROR]:", error.message || error);
    return NextResponse.json({ error: error.message || "AI 분석 에러" }, { status: 500 });
  }
}
        ### 📄 src/app/claim/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase, @/components/modals/LoginModal`
* 🧩 **Component (Default):** `ClaimPage`
* ww **Hooks:** `useState, useEffect, useSearchParams, useRouter`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
// 🍏 LoginModal 컴포넌트를 불러옵니다. (경로가 다르면 수정해주세요)
import LoginModal from "@/components/modals/LoginModal"; 

function ClaimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get("source_url");

  const [images, setImages] = useState<string[]>([]);
  const [colorChips, setColorChips] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0]);

  // 기존 상태들 아래에 추가
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState(""); // 예: 2023.05.12

  // 🍏 로그인 모달 표시 여부를 관리하는 상태
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const checkAuthAndExtract = async () => {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // 🚨 쫓아내지 않습니다! 현재 주소를 티켓으로 저장한 뒤, 모달을 바로 띄웁니다.
        sessionStorage.setItem("lumen_redirect_after_login", window.location.href);
        setIsLoading(false);
        setIsLoginModalOpen(true);
        return; // 여기서 로직 정지
      }

      if (!sourceUrl) {
        setErrorMsg("유효한 QR URL이 없습니다.");
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/extract", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sourceUrl })
        });
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error);

        setImages(data.images || []);
        setColorChips(data.colorChips || []);
      } catch (err: any) {
        setErrorMsg(err.message || "데이터 추출에 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndExtract();
  }, [sourceUrl]);

  const toggleSelection = (idx: number) => {
    if (selectedIndexes.includes(idx)) {
      if (selectedIndexes.length === 1) return;
      setSelectedIndexes(selectedIndexes.filter(i => i !== idx));
    } else {
      setSelectedIndexes([...selectedIndexes, idx]);
    }
  };

  // 🍏 꼼수(Session)를 버리고 Supabase DB에 완벽하게 영구 저장합니다.
  const handleSaveToVault = async () => {
    if (images.length === 0 || selectedIndexes.length === 0) return;
    
    // 버튼 상태를 로딩으로 바꾸기 위해 상태 하나를 추가하는 것을 권장합니다 (예: setIsSaving(true))
    const selectedImages = selectedIndexes.map(i => images[i]);
    const dominantColor = colorChips.length > 0 ? colorChips[0] : "#ffffff";

    try {
      // 1. 현재 로그인한 VIP 고객의 ID를 확인합니다.
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("로그인 세션이 만료되었습니다.");
        router.push("/");
        return;
      }

      // 2. Supabase DB에 영구 기록합니다.
      const { error } = await supabase.from('masterpieces').insert({
        user_id: user.id,
        source_url: sourceUrl, // S3 원본 URL
        images: selectedImages,
        color_palette: colorChips,
        dominant_color: dominantColor,
        pet_name: petName || "UNKNOWN",
        pet_birth_date: petBirthDate || "202X.XX.XX"
      });

      if (error) throw error;

      // 3. 기록이 완료되면 비로소 금고로 안내합니다.
      router.push("/vault");
      
    } catch (error: any) {
      alert(`금고 저장 실패: ${error.message}`);
    }
  };

  if (isLoading) return <div className="min-h-screen bg-black flex flex-col items-center justify-center"><div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" /><p className="text-[10px] text-white tracking-[0.3em] font-bold animate-pulse">VERIFYING MEMBERSHIP...</p></div>;
  if (errorMsg && !isLoginModalOpen) return <div className="min-h-screen bg-black flex items-center justify-center text-red-500">{errorMsg}</div>;

  return (
    <div className="min-h-[100dvh] bg-black text-white relative">
      
      {/* 🍏 로그인이 완료되어 모달이 닫혀있을 때만 추출된 화면을 보여줍니다 */}
      {!isLoginModalOpen && images.length > 0 && (
        <div className="p-8 pb-32">
          <header className="mb-10 text-center pt-8">
            <h2 className="text-[10px] text-blue-500 font-bold tracking-[0.4em] uppercase mb-2">Sync Complete</h2>
            <h1 className="text-3xl font-serif font-bold tracking-tight">Select Masterpieces</h1>
            <p className="text-[10px] text-zinc-500 mt-3 tracking-widest">금고에 보관할 사진들을 선택하십시오</p>
          </header>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {images.map((imgUrl, idx) => {
              const isSelected = selectedIndexes.includes(idx);
              return (
                <div key={idx} onClick={() => toggleSelection(idx)} className={`aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border-2 cursor-pointer transition-all duration-300 relative group ${isSelected ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]' : 'border-zinc-800 opacity-50'}`}>
                  {isSelected && (<div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center z-20 shadow-lg"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>)}
                  <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full z-10 text-[8px] font-mono text-zinc-300">IMG_{idx + 1}</div>
                  <img src={imgUrl} alt={`Extracted ${idx}`} className={`w-full h-full object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale'}`} />
                </div>
              );
            })}
          </div>

          {/* 🍏 강아지 정보 입력 폼 */}
            <div className="mt-8 space-y-5 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Companion Profile</h3>
                
                <div>
                <label className="block text-[9px] font-bold text-zinc-400 tracking-widest mb-2">NAME (이름)</label>
                <input 
                    type="text" 
                    value={petName} 
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="강아지 이름을 입력하세요 (ex. MAX)"
                    className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-white focus:border-white transition-colors uppercase"
                />
                </div>

                <div>
                <label className="block text-[9px] font-bold text-zinc-400 tracking-widest mb-2">BIRTH DATE (생년월일)</label>
                <input 
                    type="text" 
                    value={petBirthDate} 
                    onChange={(e) => setPetBirthDate(e.target.value)}
                    placeholder="YYYY.MM.DD (ex. 2021.04.15)"
                    className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-sm text-white focus:border-white transition-colors"
                />
                </div>
            </div>

          {/* 🍏 수정됨: Brand Color Palette 화면 이탈 방지 및 다중 배열(Wrap) 적용 */}
          {colorChips.length > 0 && (
            <div className="mb-12 border-t border-zinc-900 pt-8 px-4">
              <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-6 text-center">Brand Color Palette</h3>
              
              {/* flex-wrap을 추가하여 넘치면 아랫줄로 자연스럽게 떨어지게 만듭니다 */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                {colorChips.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    {/* 모바일에서는 w-8(32px), PC에서는 w-10(40px)으로 반응형 크기 조절 */}
                    <div 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-700 shadow-lg shrink-0" 
                      style={{ backgroundColor: color }} 
                    />
                    <span className="text-[7px] md:text-[8px] font-mono text-zinc-500 uppercase">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent z-50">
            <button onClick={handleSaveToVault} className="w-full h-16 bg-white text-black font-extrabold text-[11px] tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 transition-transform">
              Add {selectedIndexes.length} Assets to Vault
            </button>
          </div>
        </div>
      )}

      {/* 🍏 매직 라우팅을 위해 컴포넌트 최상단에 로그인 모달 배치 */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => router.push("/vault")} // 모달 바깥을 눌러 닫으면 일반 금고로 이동
        isFromQR={true} 
      />
    </div>
  );
}

export default function ClaimPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] tracking-[0.3em] font-bold animate-pulse">PREPARING WORMHOLE...</p>
      </div>
    }>
      <ClaimContent />
    </Suspense>
  );
}
        ### 📄 src/app/vault/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, html5-qrcode, @/lib/supabase, @/components/modals/ProfileModal`...
* 🧩 **Component (Default):** `VaultPage`
* ww **Hooks:** `useEffect, useState, useRouter`

        ```typescript
        "use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Html5Qrcode } from "html5-qrcode";
import { supabase } from "@/lib/supabase";

import CheckoutModal, { CheckoutItem } from "@/components/modals/CheckoutModal";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";
import PrivateVaultTab from "@/components/vault/PrivateVaultTab";
import EditorialTab from "@/components/vault/EditorialTab";
import MuseTab from "@/components/vault/MuseTab";
import BottomNav from "@/components/navigation/BottomNav";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function VaultPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  // 🍏 탭 상태: Vault(과거), Editorial(현재), Muse(미래) 3단 체제
  const [activeTab, setActiveTab] = useState<"vault" | "editorial" | "muse">("vault");
  
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number>(0);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  const [dominantColor, setDominantColor] = useState<string>("");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  
  const [userInitial, setUserInitial] = useState<string>("V");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);

  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);
  const [manualLink, setManualLink] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [displayPetName, setDisplayPetName] = useState("COMPANION");
  const [displayPetBirth, setDisplayPetBirth] = useState("202X.XX.XX");

  const loadAssetToView = (asset: any) => {
    const imgs = asset.images || [];
    setVaultImages(imgs);
    if (imgs.length > 0) setDisplayImage(imgs[0]);
    setDominantColor(asset.dominant_color || "#ffffff");
    setDisplayId(`ASSET-${asset.id.substring(0, 4).toUpperCase()}`);
    const dateObj = new Date(asset.created_at);
    setDisplayDate(`${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`);
        
    // 🍏 DB에서 가져온 이름과 생일 세팅
    setDisplayPetName(asset.pet_name || "MY DOG");
    setDisplayPetBirth(asset.pet_birth_date || "UNKNOWN DATE");
  };

  // 🍏 신규: 컴포넌트가 로드될 때 주소창의 꼬리표(?tab=...)를 확인하여 탭을 강제 이동시킵니다.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    
    if (tab === "editorial") {
      setActiveTab("editorial");
    } else if (tab === "muse") {
      setActiveTab("muse");
    }
    
    // 탭 이동 후에는 주소창을 깔끔하게 정리해줍니다 (선택 사항)
    if (tab) {
      window.history.replaceState(null, '', '/vault');
    }
  }, []);

  useEffect(() => {
    const fetchAllVaultData = async () => {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsLoading(false);
        return; 
      }
      setUserInitial((user.user_metadata?.full_name || user.email || "V").substring(0, 1).toUpperCase());

      const { data: mpData, error: mpError } = await supabase
        .from('masterpieces')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (!mpError && mpData && mpData.length > 0) {
        setMasterpieces(mpData);
        loadAssetToView(mpData[0]);
        setActiveAssetIndex(0);
      }

      const { data: edData } = await supabase.from("editorials").select("*").order("created_at", { ascending: false }).limit(2);
      if (edData) setEditorials(edData);
      setIsLoading(false);
    };
    fetchAllVaultData();
  }, []);

  const handleInjectLink = () => {
    if (!manualLink || !manualLink.includes("chemistry")) return alert("유효하지 않은 URL입니다.");
    router.push(`/claim?source_url=${encodeURIComponent(manualLink)}`);
  };

  if (isLoading) return <div className="min-h-[100dvh] bg-black flex items-center justify-center text-white text-[10px] tracking-widest animate-pulse">SYNCING VAULT...</div>;

  return (
    <main className="w-full min-h-[100dvh] bg-black text-white pb-32 overflow-x-hidden font-sans relative">
      
      {/* 🍏 헤더: 탭에 따라 유동적인 타이틀 제공 */}
      <header className="px-6 pt-16 pb-6 flex justify-between items-end bg-black/80 backdrop-blur-xl sticky top-0 z-40 border-b border-zinc-900">
        <div>
          <h2 className="text-zinc-500 text-[9px] font-bold tracking-[0.4em] uppercase mb-1">
            {activeTab === "vault" ? "Private Vault" : activeTab === "editorial" ? "LUMEN Magazine" : "The Future Vision"}
          </h2>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {activeTab === "vault" ? "Masterpieces" : activeTab === "editorial" ? "Story" : "Muse"}
          </h1>
        </div>
        <button onClick={() => setIsProfileModalOpen(true)} className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold shadow-lg">{userInitial}</button>
      </header>

      {/* 🍏 Tab 1: Vault (나의 기록) */}
      <div className={activeTab === "vault" ? "opacity-100 block" : "opacity-0 hidden"}>
        <PrivateVaultTab 
          masterpieces={masterpieces}
          activeAssetIndex={activeAssetIndex}
          setActiveAssetIndex={setActiveAssetIndex}
          loadAssetToView={loadAssetToView}
          displayImage={displayImage}
          setDisplayImage={setDisplayImage}
          vaultImages={vaultImages}
          dominantColor={dominantColor}
          displayId={displayId}
          displayDate={displayDate}
          onCheckout={setCheckoutItem}
          // 🍏 추가됨: 부모가 가진 강아지 이름과 생일을 자식에게 건네줍니다.
          displayPetName={displayPetName}
          displayPetBirth={displayPetBirth}
        />
      </div>

      {/* 🍏 Tab 2: Editorial (브랜드 스토리) */}
      <div className={activeTab === "editorial" ? "opacity-100 block" : "opacity-0 hidden"}>
        <EditorialTab editorials={editorials} />
      </div>

      {/* 🍏 Tab 3: Muse (미래의 예약) */}
      <div className={activeTab === "muse" ? "opacity-100 block" : "opacity-0 hidden"}>
        <MuseTab 
          onOpenWaitlist={(concept) => {
            setSelectedConcept(concept);
            setIsWaitlistModalOpen(true);
          }}
        />
      </div>

      {/* 하단 수동 테스트 Input */}
      <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
        <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
          <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
          <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
        </div>
      </div>

      {/* 🍏 네비게이션 모듈화 적용 */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onScanClick={() => setIsScanning(true)} 
      />

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}
        ### 📄 src/components/navigation/BottomNav.tsx
        > **Context Summary**
        * 🔗 **Imports:** `lucide-react`
* 🧩 **Component (Default):** `BottomNav`

        ```typescript
        "use client";
import { LayoutGrid, BookOpen, ScanLine, Sparkles } from "lucide-react";

interface BottomNavProps {
  activeTab: "vault" | "editorial" | "muse";
  setActiveTab: (tab: "vault" | "editorial" | "muse") => void;
  onScanClick: () => void;
}

export default function BottomNav({ activeTab, setActiveTab, onScanClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-between items-center px-6 z-30 pb-safe">
      
      {/* 1. VAULT */}
      <button 
        onClick={() => setActiveTab("vault")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600"}`}
      >
        <LayoutGrid strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">VAULT</span>
      </button>

      {/* 2. STORY */}
      <button 
        onClick={() => setActiveTab("editorial")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "editorial" ? "text-white" : "text-zinc-600"}`}
      >
        <BookOpen strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">STORY</span>
      </button>

      {/* 3. SCANNER (중앙 핵심 액션) */}
      <button 
        onClick={onScanClick} 
        className="relative -top-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 transition-transform shrink-0 mx-2"
      >
        <ScanLine strokeWidth={2.5} size={24} />
      </button>

      {/* 4. MUSE */}
      <button 
        onClick={() => setActiveTab("muse")} 
        className={`flex-1 flex flex-col items-center gap-1 transition-colors ${activeTab === "muse" ? "text-white" : "text-zinc-600"}`}
      >
        <Sparkles strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">MUSE</span>
      </button>

    </nav>
  );
}
        ### 📄 src/components/modals/LoginModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* 🧩 **Component (Default):** `LoginModal`

        ```typescript
        "use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFromQR?: boolean; // 🍏 QR 진입 여부를 판단하는 Prop
}

export default function LoginModal({ isOpen, onClose, isFromQR = false }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState<"idle" | "kakao" | "google">("idle");

  // 🍏 [핵심] 매직 라우팅 목적지 판별 함수
  // 주머니(SessionStorage)에 딥링크 티켓이 있으면 그곳으로, 없으면 일반 금고(vault)로 보냅니다.
  const getRedirectUrl = () => {
    if (typeof window !== "undefined") {
      const ticketUrl = sessionStorage.getItem("lumen_redirect_after_login");
      if (ticketUrl) {
        // 로그인 도중 취소할 경우를 대비해 티켓을 지우지는 않습니다. (덮어씌워지므로 안전함)
        return ticketUrl;
      }
      return `${window.location.origin}/vault`;
    }
    return '';
  };

  // 🍏 카카오 간편 로그인 트리거
  const handleKakaoLogin = async () => {
    setIsLoading("kakao");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          // 동적으로 목적지를 할당하여 매직 라우팅을 완성합니다.
          redirectTo: getRedirectUrl() 
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error("Kakao 로그인 에러:", error);
      alert("카카오 로그인 중 문제가 발생했습니다.");
      setIsLoading("idle");
    }
  };

  // 🍏 구글 간편 로그인 트리거
  const handleGoogleLogin = async () => {
    setIsLoading("google");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          // 동적으로 목적지를 할당하여 매직 라우팅을 완성합니다.
          redirectTo: getRedirectUrl() 
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error("Google 로그인 에러:", error);
      alert("구글 로그인 중 문제가 발생했습니다.");
      setIsLoading("idle");
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 다크 블러 배경 */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => isLoading === "idle" && onClose()} 
      />
      
      {/* 로그인 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}>
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-8" />
        <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 shadow-xl">
            {isFromQR ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            {isFromQR ? (
              <>마스터피스가<br/>준비되었습니다.</>
            ) : (
              <>프라이빗 금고에<br/>오신 것을 환영합니다.</>
            )}
          </h2>
          <p className="text-zinc-400 text-sm">
            {isFromQR ? "로그인하여 디지털 금고를 열어주십시오." : "LUMEN 멤버십 인증을 진행해 주십시오."}
          </p>
        </div>

        <div className="space-y-3">
          
          {/* 카카오 로그인 버튼 */}
          <button 
            onClick={handleKakaoLogin}
            disabled={isLoading !== "idle"}
            className="w-full bg-[#FEE500] text-[#191919] h-14 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
          >
            {isLoading === "kakao" ? (
              <span className="animate-pulse">카카오 인증 중...</span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 3C6.477 3 2 6.58 2 11c0 2.825 1.763 5.3 4.417 6.81l-1.127 4.125c-.062.227.195.404.382.268l4.757-3.15c.504.062 1.028.097 1.571.097 5.523 0 10-3.58 10-8s-4.477-8-10-8z"/></svg>
                카카오톡으로 1초 로그인
              </>
            )}
          </button>

          {/* 구글 로그인 버튼 */}
          <button 
            onClick={handleGoogleLogin} 
            disabled={isLoading !== "idle"}
            className="w-full bg-zinc-900 text-white border border-zinc-800 h-14 rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
          >
            {isLoading === "google" ? (
               <span className="animate-pulse">구글 인증 중...</span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google 계정으로 계속하기
              </>
            )}
          </button>
        </div>
        
        <p className="text-center text-zinc-600 text-[10px] mt-6">가입 시 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</p>
      </div>
    </div>
  );
}
        ### 📄 src/components/modals/ProfileModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `ProfileModal`
* ww **Hooks:** `useEffect, useState, useRouter`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; initial: string } | null>(null);

  // 🍏 모달이 열릴 때마다 최신 유저 정보를 가져옵니다
  useEffect(() => {
    if (isOpen) {
      const fetchUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const name = user.user_metadata?.full_name || user.user_metadata?.name || "VIP Member";
          const email = user.email || "No email provided";
          const initial = name.substring(0, 1).toUpperCase();
          setUserData({ name, email, initial });
        }
      };
      fetchUser();
    }
  }, [isOpen]);

  // 🍏 완벽한 로그아웃(Sign Out) 처리
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      
      // 로그아웃 완료 시 임시 저장된 사진 데이터도 날려버림 (보안)
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      
      // 첫 화면(로그인/클레임)으로 쫓아냄
      router.push("/"); 
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("로그아웃 중 문제가 발생했습니다.");
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[150] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 다크 블러 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => !isLoggingOut && onClose()}
      />
      
      {/* 프로필 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
        
        {/* 🍏 VIP ID 카드 UI */}
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 mb-8 relative overflow-hidden">
          {/* 장식용 빛 반사 효과 */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {userData?.initial || "V"}
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-1">
                LUMEN Black Member
              </div>
              <h3 className="text-xl font-bold text-white mb-0.5">{userData?.name}</h3>
              <p className="text-xs text-zinc-400">{userData?.email}</p>
            </div>
          </div>
        </div>

        {/* 🍏 메뉴 리스트 */}
        <div className="space-y-2 mb-8">
          <button className="w-full flex justify-between items-center p-4 bg-black border border-zinc-800 rounded-2xl text-sm font-bold text-white hover:bg-zinc-900 transition-colors">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>원본 다운로드 내역</span>
            </div>
            <span className="text-zinc-600">준비 중</span>
          </button>
          <button className="w-full flex justify-between items-center p-4 bg-black border border-zinc-800 rounded-2xl text-sm font-bold text-white hover:bg-zinc-900 transition-colors">
            <div className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>나의 예약 대기열 (Waitlist)</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* 로그아웃 버튼 */}
        <button 
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full h-14 bg-zinc-900 text-red-400 border border-zinc-800 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors active:scale-[0.98]"
        >
          {isLoggingOut ? "보안 연결 해제 중..." : "안전하게 로그아웃"}
        </button>
      </div>
    </div>
  );
}
        ### 📄 src/components/modals/CheckoutModal.tsx
        > **Context Summary**
        * wb **Type/Intf:** `CheckoutItem`
* 🧩 **Component (Default):** `CheckoutModal`

        ```typescript
        // src/components/modals/CheckoutModal.tsx
"use client";

// 어떤 상품인지 정의하는 타입
export interface CheckoutItem {
  id: string;
  name: string;
  price: string;
}

interface CheckoutModalProps {
  item: CheckoutItem | null;
  dominantColor: string;
  onClose: () => void;
}

export default function CheckoutModal({ item, dominantColor, onClose }: CheckoutModalProps) {
  // item이 존재하면 열린 상태
  const isOpen = item !== null;

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 다크 블러 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose} 
      />
      
      {/* 결제 바텀 시트 */}
      <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        {item && (
          <div className="flex flex-col items-center">
            
            {/* 🍏 선택된 상품의 추상화 아이콘 렌더링 */}
            <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: dominantColor }} />
              
              {item.id === 'case' && (
                 <div className="w-8 h-14 border-2 rounded-[6px] relative flex justify-end p-1" style={{ borderColor: dominantColor }}>
                   <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: dominantColor }} />
                 </div>
              )}
              {item.id === 'frame' && (
                 <div className="w-12 h-14 border-2 border-zinc-700 rounded-sm relative flex items-center justify-center">
                   <div className="w-8 h-10 border border-dashed flex items-center justify-center" style={{ borderColor: dominantColor }}>
                     <div className="w-4 h-4 rounded-full opacity-60" style={{ backgroundColor: dominantColor }} />
                   </div>
                 </div>
              )}
              {item.id === 'collar' && (
                 <div className="w-12 h-12 border-[3px] rounded-full relative" style={{ borderColor: dominantColor }}>
                   <div className="absolute -right-1.5 top-1 w-3 h-5 bg-zinc-400 rounded-sm border-2 border-zinc-800" />
                 </div>
              )}
            </div>

            {/* 상품 메타데이터 */}
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-2">Pre-Order Edition</span>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h2>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-700 px-2 py-0.5 rounded">
                Color: {dominantColor || "Signature"}
              </span>
            </div>

            {/* 가격 및 간편 결제 버튼 */}
            <div className="w-full bg-black border border-zinc-800 rounded-3xl p-5 mb-4 flex justify-between items-center">
              <span className="text-xs text-zinc-500 tracking-widest uppercase font-bold">Total Price</span>
              <span className="text-xl font-mono font-bold text-white">{item.price}</span>
            </div>

            {/* Apple Pay 스타일의 One-Tap 버튼 */}
            <button 
              onClick={() => {
                alert("Apple Pay / 카카오페이 간편 결제 API가 연동될 자리입니다.");
                onClose(); // 결제 완료 후 모달 닫기
              }}
              className="w-full h-14 bg-white text-black font-extrabold text-[12px] tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
              Double Click to Pay
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
}
        ### 📄 src/components/modals/WaitlistModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* wb **Type/Intf:** `ConceptType`
* 🧩 **Component (Default):** `WaitlistModal`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface ConceptType {
  id: string;
  name: string;
  desc: string;
}

interface WaitlistModalProps {
  isOpen: boolean;
  concept: ConceptType | null;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, concept, onClose }: WaitlistModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayConcept, setDisplayConcept] = useState<ConceptType | null>(null);

  useEffect(() => {
    if (concept) setDisplayConcept(concept);
    if (!isOpen) {
      const timer = setTimeout(() => setIsSuccess(false), 500);
      return () => clearTimeout(timer);
    }
  }, [concept, isOpen]);

  // 🍏 진짜 데이터베이스(DB)에 Insert 하는 로직
  const handleSubmit = async () => {
    if (!displayConcept) return;
    setIsSubmitting(true);

    try {
      // 1. 현재 로그인한 유저 정보 가져오기
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert("로그인이 필요합니다.");
        setIsSubmitting(false);
        return;
      }

      // 2. Supabase DB의 'waitlists' 테이블에 데이터 밀어넣기
      const { error } = await supabase
        .from('waitlists')
        .insert([
          { user_id: user.id, concept_id: displayConcept.id }
        ]);

      if (error) throw error;

      // 3. 성공 시 성공 화면 연출
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 2500);

    } catch (error) {
      console.error("대기열 등록 실패:", error);
      alert("대기열 등록에 실패했습니다. 다시 시도해주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => !isSuccess && onClose()} />
      
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-700 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        <div className={`transition-all duration-300 ${isSuccess ? "opacity-0 hidden" : "opacity-100 block"}`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase border border-zinc-700 bg-black px-2 py-1 rounded-full mb-3 inline-block">VIP Waitlist</span>
              <h2 className="text-2xl font-bold text-white mb-2">{displayConcept?.name}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{displayConcept?.desc}</p>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-14 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-[0.98] transition-all"
          >
            {isSubmitting ? (
              <span className="animate-pulse">데이터 암호화 및 등록 중...</span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                VIP 우선 예약권 발급받기
              </>
            )}
          </button>
        </div>

        <div className={`flex flex-col items-center justify-center py-8 transition-all duration-300 ${isSuccess ? "opacity-100 block" : "opacity-0 hidden"}`}>
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mb-4 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">발급이 완료되었습니다.</h3>
          <p className="text-zinc-400 text-sm text-center">정식 런칭 시 가장 먼저 초대장을 보내드리겠습니다.</p>
        </div>

      </div>
    </div>
  );
}
        ### 📄 src/components/vault/LumenCustomSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/components/modals/CheckoutModal`
* 🧩 **Component (Default):** `LumenCustomSection`
* ww **Hooks:** `useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { CheckoutItem } from "@/components/modals/CheckoutModal";

interface LumenCustomSectionProps {
  dominantColor: string;
  onCheckout: (item: CheckoutItem) => void;
}

export default function LumenCustomSection({ dominantColor, onCheckout }: LumenCustomSectionProps) {
  const [copyIndex, setCopyIndex] = useState<number>(0);

  useEffect(() => {
    setCopyIndex(Math.floor(Math.random() * 3));
  }, []);

  const copywritingList = [
    {
      quote: '"사진은 기억을 남기지만, 오브제는 시간을 만질 수 있게 합니다."',
      text1: '반려견의 시간은 우리보다 빠르게 흐르기에, 눈부신 찰나를 기록한 지금 이 순간은 그 자체로 완벽한 마스터피스입니다.',
      text2: '클라우드에 갇힌 아이의 온기를 장인의 손길을 거친 실물 오브제로 꺼내어 주십시오. 아이를 상징하는 고유한 컬러',
      text3: '로 빚어내어, 언제든 손끝으로 쓰다듬을 수 있는 영원한 곁이 됩니다.'
    },
    {
      quote: '"예술은 눈으로 보지만, 진정한 마스터피스는 손끝에서 완성됩니다."',
      text1: '다시 오지 않을 우리 아이의 가장 아름다운 순간. 디지털 데이터로만 남겨두기엔 너무나 소중한 이 기록을 장인의 묵직한 수작업을 통해 현실로 가져오십시오.',
      text2: '가장 아름다운 찰나의 순간에, 아이의 영혼이 담긴 컬러',
      text3: '가 당신의 일상 공간에 깊이 스며듭니다.'
    },
    {
      quote: '"가장 소중한 것은 눈에 보이지 않지만, 우리는 그것을 손으로 곁에 둘 수 있습니다."',
      text1: '아이와의 벅찬 교감을 담아낸 이 사진은 그 자체로 이미 걸작입니다. 이제 이 찰나의 기적에 장인의 온기를 더해, 당신이 직접 만질 수 있는 물리적 오브제로 소유하십시오.',
      text2: '아이만의 시그니처 컬러',
      text3: '로 세공된 이 작품은 당신과 아이의 유대를 영원히 증명합니다.'
    }
  ];

  const currentCopy = copywritingList[copyIndex];

  if (!dominantColor) return null;

  return (
    <div className="mt-6 p-6 rounded-[32px] border border-zinc-800/50 bg-zinc-900/40 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundColor: dominantColor }} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: dominantColor, color: dominantColor }} />
          <h3 className="text-zinc-400 text-[9px] font-bold tracking-[0.3em] uppercase">Physical Extension</h3>
        </div>
        <h2 className="text-2xl font-serif font-bold text-white mb-4">LUMEN Custom</h2>
        
        <p className="text-xs text-zinc-400 font-light leading-[1.8] mb-8 word-break-keep transition-opacity duration-1000">
          <strong className="text-white font-serif italic text-sm block mb-3">{currentCopy.quote}</strong>
          {currentCopy.text1}<br/><br/>{currentCopy.text2}
          <span className="font-mono font-bold px-1.5 py-0.5 rounded-md bg-black/50 border border-zinc-800 text-[10px] mx-1 shadow-lg relative inline-block -translate-y-[1px]" style={{color: dominantColor}}>
            {dominantColor}
          </span>
          {currentCopy.text3}
        </p>

        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => onCheckout({ id: 'case', name: 'Bespoke Phone Case', price: '₩ 45,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-7 h-12 border-[1.5px] rounded-[6px] relative flex justify-end p-1 transition-colors duration-500" style={{ borderColor: dominantColor }}>
              <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: dominantColor }} />
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Case</span>
          </button>

          <button onClick={() => onCheckout({ id: 'frame', name: 'LUMEN Art Frame', price: '₩ 120,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-10 h-12 border-[1.5px] border-zinc-700 rounded-sm relative flex items-center justify-center transition-colors duration-500 group-hover:border-zinc-500">
              <div className="w-6 h-8 border border-dashed flex items-center justify-center" style={{ borderColor: dominantColor }}><div className="w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: dominantColor }} /></div>
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Frame</span>
          </button>

          <button onClick={() => onCheckout({ id: 'collar', name: 'Bespoke Leather Collar', price: '₩ 85,000' })} className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />
            <div className="w-10 h-10 border-[2px] rounded-full relative transition-transform duration-700 group-hover:rotate-12" style={{ borderColor: dominantColor }}>
              <div className="absolute -right-1 top-1 w-2 h-4 bg-zinc-400 rounded-sm border border-zinc-800" /><div className="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-zinc-500" />
            </div>
            <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors">Collar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
        ### 📄 src/components/vault/EditorialTab.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/navigation`
* 🧩 **Component (Default):** `EditorialTab`
* ww **Hooks:** `useRouter`

        ```typescript
        "use client";
import { useRouter } from "next/navigation";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function EditorialTab({ editorials }: { editorials: EditorialType[] }) {
  const router = useRouter();

  return (
    <div className="px-6 py-10 border-t border-zinc-900 bg-black">
      <div className="mb-12 text-center">
        <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">LUMEN Editorial</h3>
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">The Brand Storytelling</p>
      </div>
      
      <div className="flex flex-col gap-12">
        {editorials.map((edit) => (
          <article key={edit.id} className="cursor-pointer group" onClick={() => router.push(`/editorial/${edit.slug}`)}>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 border border-zinc-800/50">
              <div className="absolute inset-0 bg-cover bg-center  group-hover:scale-105 transition-transform grayscale duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
            </div>
            <div className="px-2">
              <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light">{edit.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
        ### 📄 src/components/vault/PrivateVaultTab.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/components/modals/CheckoutModal, @/components/vault/LumenCustomSection`
* 🧩 **Component (Default):** `PrivateVaultTab`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import { useState } from "react";
import { CheckoutItem } from "@/components/modals/CheckoutModal";
import LumenCustomSection from "@/components/vault/LumenCustomSection";

interface PrivateVaultTabProps {
  masterpieces: any[];
  activeAssetIndex: number;
  setActiveAssetIndex: (idx: number) => void;
  loadAssetToView: (asset: any) => void;
  displayImage: string;
  setDisplayImage: (url: string) => void;
  vaultImages: string[];
  dominantColor: string;
  displayId: string;
  displayDate: string;
  onCheckout: (item: CheckoutItem) => void;
  displayPetName: string;
  displayPetBirth: string;
}

export default function PrivateVaultTab({
  masterpieces,
  activeAssetIndex,
  setActiveAssetIndex,
  loadAssetToView,
  displayImage,
  setDisplayImage,
  vaultImages,
  dominantColor,
  displayId,
  displayDate,
  onCheckout,
  displayPetName,
  displayPetBirth
}: PrivateVaultTabProps) {
  
  // 🍏 Z축 아카이브 서랍을 열고 닫는 상태
  const [isArchiveSheetOpen, setIsArchiveSheetOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
  };

  const currentImgIndex = vaultImages.indexOf(displayImage);

  const handleNextImage = () => {
    if (vaultImages.length <= 1) return;
    const nextIndex = (currentImgIndex + 1) % vaultImages.length;
    setDisplayImage(vaultImages[nextIndex]);
  };

  if (masterpieces.length === 0) {
    return (
      <div className="px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full border border-dashed border-zinc-700 flex items-center justify-center mb-6 text-zinc-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>
        <h3 className="text-zinc-400 text-lg font-serif mb-2">금고가 비어있습니다</h3>
        <p className="text-zinc-600 text-xs">오프라인 스튜디오에서 스캔하여 마스터피스를 보관하세요.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      
      {/* 1. 메인 디스플레이 */}
      <div 
        className="relative group cursor-pointer transition-all duration-700 active:scale-[0.98]"
        onClick={handleNextImage}
      >
        <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10 transition-colors duration-1000" style={{ boxShadow: `0 20px 50px -20px ${dominantColor}40` }}>
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${displayImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          {/* 🍏 감성적으로 재배치된 텍스트 영역 */}
            <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
                <div>
                {/* 1. 원래 크던 ASSET ID를 작고 은은하게 위로 올림 */}
                <p className="text-[9px] font-mono text-white/50 tracking-widest mb-1.5">
                    ID: {displayId}
                </p>
                
                {/* 2. 강아지 이름을 거대한 메인 타이틀로 승격 */}
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-xl tracking-tighter uppercase mb-1">
                    {displayPetName}
                </h2>
                
                {/* 3. 생년월일을 우아한 서브 타이틀로 배치 */}
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                    BORN {displayPetBirth}
                </p>
                </div>

                {/* 우측 하단: 브랜드 오라(Aura) 컬러칩 */}
                <div className="flex flex-col items-center gap-2">
                <div 
                    className="w-10 h-10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md" 
                    style={{ backgroundColor: dominantColor }} 
                />
                <span className="text-[7px] font-mono text-white/70 tracking-widest uppercase">
                    Aura
                </span>
                </div>
            </div>
        </div>
      </div>

      {/* 🍏 2. 아카이브 서랍을 여는 '브릿지(Bridge)' 버튼 */}
      {masterpieces.length > 1 && (
        <div 
          onClick={() => setIsArchiveSheetOpen(true)}
          className="mt-6 flex items-center justify-between border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-4 cursor-pointer active:scale-[0.98] transition-transform hover:bg-zinc-900/60"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-black">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"></path></svg>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-0.5">Archive Index</p>
              <p className="text-xs text-white font-medium">{masterpieces.length} Masterpieces</p>
            </div>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Open</span>
        </div>
      )}

      {/* 3. 커머스 섹션 (이제 바로 눈앞에 있습니다) */}
      <div className="mt-2">
        <LumenCustomSection dominantColor={dominantColor} onCheckout={onCheckout} />
      </div>

      {/* 🍏 4. Z축 아카이브 서랍 (Bottom Sheet Modal) */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isArchiveSheetOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        
        {/* 다크 블러 배경 (클릭 시 닫힘) */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isArchiveSheetOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsArchiveSheetOpen(false)} 
        />
        
        {/* 아카이브 리스트 시트 */}
        <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-8 pb-16 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isArchiveSheetOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
          <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-8" />
          
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif font-bold text-white">The Archive</h3>
            <button onClick={() => setIsArchiveSheetOpen(false)} className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase border border-zinc-800 px-3 py-1.5 rounded-full">Close</button>
          </div>
          
          <ul className="flex flex-col max-h-[50vh] overflow-y-auto scrollbar-hide pr-2">
            {masterpieces.map((mp, idx) => {
              const isActive = activeAssetIndex === idx;
              return (
                <li 
                  key={mp.id} 
                  onClick={() => {
                    setActiveAssetIndex(idx);
                    loadAssetToView(mp);
                    setIsArchiveSheetOpen(false); // 🍏 에셋을 고르면 서랍이 우아하게 닫힙니다.
                  }} 
                  className={`flex items-center justify-between py-5 border-b border-zinc-900/50 cursor-pointer transition-all duration-300 group
                    ${isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'}
                  `}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] opacity-50">
                      {(masterpieces.length - idx).toString().padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-2 h-2 rounded-full transition-opacity duration-500 ${isActive ? 'opacity-100 shadow-[0_0_10px_currentColor]' : 'opacity-0 group-hover:opacity-50'}`} 
                        style={{ backgroundColor: mp.dominant_color || '#ffffff', color: mp.dominant_color || '#ffffff' }}
                      />
                      <span className={`tracking-widest text-[12px] uppercase ${isActive ? 'font-bold' : 'font-medium'}`}>
                        ASSET-{mp.id.substring(0,4).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono opacity-60">
                    {formatDate(mp.created_at)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    </div>
  );
}
        ### 📄 src/components/vault/MuseTab.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/modals/WaitlistModal`
* 🧩 **Component (Default):** `MuseTab`

        ```typescript
        "use client";

import { ConceptType } from "@/components/modals/WaitlistModal";

interface MuseTabProps {
  onOpenWaitlist: (concept: ConceptType) => void;
}

export default function MuseTab({ onOpenWaitlist }: MuseTabProps) {
  // 🍏 예약 모델 데이터 정의
  const museumConcepts = [
    {
      id: "dogwick",
      name: "Dog Wick",
      modelName: "MAX",
      breed: "Poodle",
      desc: "카리스마 넘치는 느와르 컨셉",
      imageUrl: "/images/dogwick_04.jpg",
      tagColor: "text-orange-500 border-orange-500/30 bg-orange-500/10"
    },
    {
      id: "undercut",
      name: "Under-cut",
      modelName: "LUNA",
      breed: "Pomeranian",
      desc: "강화유리 아래에서 본 젤리 발바닥",
      imageUrl: "/images/undercut_04.png",
      tagColor: "text-purple-500 border-purple-500/30 bg-purple-500/10"
    }
  ];

  return (
    <div className="transition-all duration-500 ease-in-out">
      {/* Muse Intro */}
      <div className="px-6 pt-10 pb-2 text-zinc-400 text-sm word-break-keep leading-relaxed">
        LUMEN 스튜디오에서 탄생한 최상위 1% 마스터피스들을 감상하십시오. 사진을 터치하면 해당 컨셉의 <b>우선 예약 대기열(Waitlist)</b>에 등록할 수 있습니다.
      </div>

      {/* Feed List */}
      <div className="flex flex-col gap-8 px-6 py-6 pb-20">
        {museumConcepts.map((concept) => (
          <div 
            key={concept.id} 
            className="relative rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center border border-zinc-800" 
                  style={{ backgroundImage: `url('${concept.imageUrl}')` }} 
                />
                <div className="text-sm font-bold text-white">
                  {concept.modelName} <span className="text-zinc-500 font-normal text-[10px] ml-1 uppercase tracking-widest">{concept.breed}</span>
                </div>
              </div>
              <div className={`${concept.tagColor} text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full`}>
                {concept.name}
              </div>
            </div>

            {/* Main Image */}
            <div 
              className="aspect-square w-full bg-cover bg-center hover:grayscale-0 transition-all duration-1000 cursor-pointer" 
              style={{ backgroundImage: `url('${concept.imageUrl}')` }}
              onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: concept.desc })}
            />

            {/* Footer & Action */}
            <div className="p-5 flex flex-col gap-4 bg-black/60 backdrop-blur-md border-t border-zinc-900">
              <p className="text-xs text-zinc-400 font-light tracking-wide">{concept.desc}</p>
              <button 
                onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: concept.desc })}
                className="w-full h-12 text-[11px] font-bold tracking-[0.2em] uppercase bg-white text-black rounded-2xl active:scale-[0.98] transition-all shadow-lg"
              >
                Reserve This Concept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
        ### 📄 src/lib/supabase.ts
        > **Context Summary**
        * 🔗 **Imports:** `@supabase/supabase-js`

        ```ts
        // src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);