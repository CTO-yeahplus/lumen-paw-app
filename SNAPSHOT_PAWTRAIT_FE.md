# 🧠 Deep Context Snapshot

**Generated at:** 2026-03-10 20:01:36
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
**Total Files Scanned:** 37

```text
.
│   ├── SNAPSHOT_LUMEN_FE.md
│   ├── next-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   public/
│   │   ├── manifest.json
│   │   images/
│   │   │   dogwick/
│   │   icons/
│   src/
│   │   app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── globals.css
│   │   │   vip/
│   │   │   │   [guest]/
│   │   │   │   │   ├── page.tsx
│   │   │   editorial/
│   │   │   │   [slug]/
│   │   │   │   │   ├── page.tsx
│   │   │   admin/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   waitlist/
│   │   │   │   │   ├── page.tsx
│   │   │   │   manage_orders/
│   │   │   │   │   ├── page.tsx
│   │   │   │   products/
│   │   │   │   │   ├── page.tsx
│   │   │   │   orders/
│   │   │   │   │   ├── page.tsx
│   │   │   │   editor/
│   │   │   │   │   ├── page.tsx
│   │   │   api/
│   │   │   │   webhook/
│   │   │   │   │   status/
│   │   │   │   │   │   ├── route.ts
│   │   │   │   extract/
│   │   │   │   │   ├── route.ts
│   │   │   │   editor/
│   │   │   │   │   ├── route.ts
│   │   │   claim/
│   │   │   │   ├── page.tsx
│   │   │   │   address/
│   │   │   │   │   ├── page.tsx
│   │   │   vault/
│   │   │   │   ├── page.tsx
│   │   components/
│   │   │   layout/
│   │   │   │   ├── LayoutWrapper.tsx
│   │   │   navigation/
│   │   │   │   ├── BottomNav.tsx
│   │   │   modals/
│   │   │   │   ├── LoginModal.tsx
│   │   │   │   ├── PrivateArchiveModal.tsx
│   │   │   │   ├── QRScannerModal.tsx
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

        ### 📄 SNAPSHOT_LUMEN_FE.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
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
        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

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
    "@vercel/analytics": "^1.6.1",
    "html5-qrcode": "^2.3.8",
    "jszip": "^3.10.1",
    "lucide-react": "^0.577.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "resend": "^6.9.3"
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
    "name": "Pawtrait Edition",
    "short_name": "Pawtrait Edition",
    "description": "Premium Pet IP Assetization",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#000000",
    "icons": [
      {
        "src": "/icons/icon-192x192_dark.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icons/icon-512x512_dark.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
        ### 📄 src/app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/font/google, @/components/layout/LayoutWrapper, @vercel/analytics/next`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper"; // 🍏 새로 만들 컴포넌트
import { Analytics } from "@vercel/analytics/next"; // 🍏 1. Analytics 임포트

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
        {/* 🍏 너비 조절 로직만 전담하는 클라이언트 래퍼로 감쌉니다. */}
        <LayoutWrapper>
          {children}
          <Analytics />
        </LayoutWrapper>
      </body>
    </html>
  );
}
        ### 📄 src/app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/components/modals/LoginModal, @/lib/supabase, next/navigation`
* 🧩 **Component (Default):** `ClaimPage`
* ww **Hooks:** `useRouter, useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import LoginModal from "@/components/modals/LoginModal";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ClaimPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [isSyncing, setIsSyncing] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // 🍏 [핵심] 로비(메인 페이지)에 들어오자마자 VIP 여부를 검사합니다.
  useEffect(() => {
    const checkVipStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // 이미 로그인된 VIP라면, 로그인 창을 띄우지 않고 흔적 없이 금고로 보냅니다.
        router.replace('/vault'); 
      } else {
        // 로그인이 안 된 일반 방문자에게만 로비(랜딩 페이지)를 보여줍니다.
        setIsChecking(false);
      }
    };
    
    checkVipStatus();
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSyncing(false);
      setIsLoginModalOpen(true); // 2.5초 뒤 싱크가 끝나면 모달을 띄웁니다.
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // 🍏 검사하는 아주 짧은 찰나의 순간 동안 하얀 화면(플리커링)이나 로그인 버튼이 보이지 않도록 암전 처리합니다.
  if (isChecking) {
    return <div className="min-h-screen bg-black" />;
  }

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

        ### 📄 src/app/vip/[guest]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation`
* 🧩 **Component (Default):** `VIPInvitationPage`
* ww **Hooks:** `useEffect, useState, useParams`

        ```typescript
        "use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function VIPInvitationPage() {
  const params = useParams();
  const guestId = params.guest as string; // 'dogweek', 'mitcut' 등 URL에서 추출
  
  // 🍏 파트너별 맞춤 데이터 세팅
  const guestData: Record<string, { name: string, title: string, color: string }> = {
    dogweek: { name: "DOGWEEK", title: "반려견 문화의 패러다임", color: "#F59E0B" }, // 앰버 (Gold)
    mitcut: { name: "MITCUT", title: "시각적 미학의 정점", color: "#3B82F6" },      // 블루 (Blue)
    default: { name: "VIP GUEST", title: "PAWTRAIT EDITION Private Preview", color: "#FFFFFF" }
  };

  const guest = guestData[guestId] || guestData.default;
  const [isReady, setIsReady] = useState(false);

  // 🍏 진입 시 극적인 페이드인 연출을 위한 타이머
  useEffect(() => {
    setTimeout(() => setIsReady(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative selection:bg-zinc-800">
      
      {/* 🍏 배경의 거대한 '빛(Aura)' 연출 */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 transition-all duration-[3000ms] ease-out ${isReady ? 'scale-100' : 'scale-50 opacity-0'}`}
        style={{ backgroundColor: guest.color }}
      />

      <div className={`relative z-10 flex flex-col items-center transition-all duration-[2000ms] ease-out delay-500 ${isReady ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* 상단 레이블 */}
        <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-12">
          Strictly Private Invitation
        </span>

        {/* 🍏 인터랙티브 티켓 캔버스 */}
        <div className="relative group w-80 h-[450px] cursor-pointer perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-between transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-zinc-600 shadow-2xl">
            
            {/* 티켓 내부 빛 반사 효과 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl" style={{ backgroundImage: `radial-gradient(circle at 50% 0%, ${guest.color}, transparent 70%)` }} />

            <div className="w-full text-center mt-8">
              <div className="w-1 h-12 mx-auto mb-6 opacity-50" style={{ backgroundColor: guest.color }} />
              <h1 className="text-3xl font-serif text-white tracking-widest mb-2">PAWTRAIT EDITION</h1>
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em]">The Soul of Data</p>
            </div>

            <div className="w-full text-center z-10">
              <p className="text-[11px] text-zinc-400 mb-2 font-light">To our esteemed partner,</p>
              <h2 className="text-xl font-bold text-white tracking-widest uppercase mb-1">{guest.name}</h2>
              <p className="text-xs text-zinc-500 italic">"{guest.title}"</p>
            </div>

            <div className="w-full text-center mb-4">
              <button className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors">
                Accept Invitation
              </button>
            </div>
            
          </div>
        </div>

        {/* 하단 텍스트 */}
        <p className="mt-12 text-[10px] text-zinc-600 tracking-[0.2em] uppercase max-w-xs text-center leading-relaxed">
          본 링크는 귀하만을 위해 생성된 고유 암호화 링크입니다. 타인과 공유할 수 없습니다.
        </p>

      </div>
    </div>
  );
}
        ### 📄 src/app/editorial/[slug]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `EditorialPage`
* ww **Hooks:** `useRouter, useEffect, useState, useParams`

        ```typescript
        // src/app/editorial/[slug]/page.tsx

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

  // 🍏 모바일 네이티브 시스템 공유 모달 호출 로직
  const handleShare = async () => {
    const shareData = {
      title: data?.title || "PAWTRAIT Editorial",
      text: "PAWTRAIT EDITION의 프라이빗 매거진을 확인해보세요.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("공유가 취소되었거나 실패했습니다.", error);
      }
    } else {
      // 데스크탑 등 지원하지 않는 환경을 위한 폴백 (클립보드 복사)
      navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다. 인스타그램에 공유해보세요!");
    }
  };

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xs tracking-widest animate-pulse">LOADING MASTERPIECE...</div>;
  if (!data) return <div className="min-h-screen bg-black text-white p-10">매거진을 찾을 수 없습니다.</div>;

  const parts = data.content.split('\n\n');
  const quote = parts.length > 0 && parts[0].startsWith('"') ? parts[0] : "";
  const bodyParts = quote ? parts.slice(1) : parts;
  const activeAccentColor = activeAura === "black" ? brandColor : activeAura;

  return (
    <main 
      className="w-full min-h-screen text-white font-sans relative pb-20 transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: activeAura === "black" ? "#000000" : `${activeAura}15` }}
    >
      
      <button onClick={() => router.back()} className="fixed top-8 left-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </button>

      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-cover object-cover grayscale bg-center" style={{ backgroundImage: `url('${data.image_url}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-12 left-8 right-8">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block transition-colors duration-1000" style={{ color: activeAccentColor }}>
          PAWTRAIT Editorial
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight text-white shadow-black drop-shadow-2xl mb-6 word-break-keep">
            {data.title}
          </h1>
          <div className="w-16 h-1.5 rounded-full transition-colors duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: activeAccentColor }} />
        </div>
      </div>

      <article className="px-8 py-16 md:px-24 md:py-24 max-w-3xl mx-auto">
        
        {quote && (
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
                    <span className="float-left text-6xl font-serif mt-2 mr-4 font-bold transition-colors duration-1000" style={{ color: activeAccentColor }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.substring(1)}
                  </p>
                  
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
        {/* 🍏 교체된 공유 버튼 (handleShare 실행) */}
        <button 
          onClick={handleShare}
          className="bg-black/80 backdrop-blur-xl border border-zinc-700 text-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)] whitespace-nowrap"
        >
          Share this Editorial
        </button>
      </div>

    </main>
  );
}
        ### 📄 src/app/admin/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/link, next/navigation, react`
* 🧩 **Component (Default):** `AdminLayout`
* ww **Hooks:** `usePathname`

        ```typescript
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
        ### 📄 src/app/admin/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/link, @/lib/supabase`
* 🧩 **Component (Default):** `AdminDashboard`
* ww **Hooks:** `useState, useEffect`

        ```typescript
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
          Data translates into Aura. Aura translates into Eternity.
        </p>
      </div>
    </div>
  );
}
        ### 📄 src/app/admin/waitlist/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* 🧩 **Component (Default):** `AdminWaitlistPage`
* ww **Hooks:** `useState, useEffect`
* ⚡ **API Route / Server Action Detected**

        ```typescript
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
            itemName: "PAWTRAIT EDITION VIP Private Invitation" // 대기열에 맞는 아이템 명칭 부여
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
        ### 📄 src/app/admin/manage_orders/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* 🧩 **Component (Default):** `AdminOrdersPage`
* ww **Hooks:** `useState, useEffect`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setIsRefreshing(true);
    const { data, error } = await supabase
      .from("pre_orders")
      .select(`
        *,
        users (full_name, email)
      `)
      .order("created_at", { ascending: false });

    if (!error && data) setOrders(data);
    setLoading(false);
    setTimeout(() => setIsRefreshing(false), 500); 
  };

  const updateOrderStatus = async (order: any, newStatus: string) => {
    const { error } = await supabase
      .from("pre_orders")
      .update({ status: newStatus })
      .eq("id", order.id);
      
    if (!error) {
      setOrders(orders.map(o => o.id === order.id ? { ...o, status: newStatus } : o));
      
      if (newStatus !== 'pending') {
        const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
        const targetName = order.contact_name || joinedUser?.full_name || 'VIP Member';
        const targetEmail = order.contact_email || joinedUser?.email;

        try {
          await fetch('/api/webhook/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: order.id,
              status: newStatus,
              customerName: targetName,
              customerEmail: targetEmail,
              itemName: order.item_name
            }),
          });
          console.log(`🍏 Webhook triggered for ${newStatus}`);
        } catch (err) {
          console.error('Failed to trigger webhook', err);
        }
      } else {
        console.log("🍏 0. Pending 상태이므로 이메일을 발송하지 않습니다.");
      }
    } else {
      alert("상태 업데이트에 실패했습니다.");
    }
  };
  
  return (
    <div className="min-h-screen bg-black p-8 md:p-12 font-sans selection:bg-zinc-800">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Bespoke Orders</h1>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            전체 선주문 내역: <span className="text-white">{orders.length}</span>건
          </p>
        </div>

        <button 
          onClick={fetchOrders}
          disabled={isRefreshing}
          className={`px-4 py-2 border text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
            isRefreshing 
              ? 'bg-white text-black border-white cursor-wait' 
              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500'
          }`}
        >
          {isRefreshing ? (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-ping" />
              Refreshing...
            </span>
          ) : (
            "Refresh Data"
          )}
        </button>
      </header>

      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl custom-scrollbar">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-zinc-900/50 border-b border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                <th className="py-4 px-6 font-bold">주문 일시</th>
                <th className="py-4 px-6 font-bold">사진 (Photo)</th>
                <th className="py-4 px-6 font-bold">컬렉터 (고객)</th>
                <th className="py-4 px-6 font-bold">주문 제품 (Item)</th>
                <th className="py-4 px-6 font-bold">아우라 컬러</th>
                <th className="py-4 px-6 font-bold">배송 정보 (Shipping)</th>
                <th className="py-4 px-6 font-bold text-right">진행 상태 (Status Control)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-zinc-600 animate-pulse uppercase tracking-widest text-xs">
                    Loading Database...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-zinc-600 uppercase tracking-widest text-xs font-serif italic">
                    접수된 선주문이 없습니다.
                  </td>
                </tr>
              ) : (
                orders.map((order) => {
                  const joinedUser = Array.isArray(order.users) ? order.users[0] : order.users;
                  const displayName = order.contact_name || joinedUser?.full_name || 'VIP Member';
                  const displayEmail = order.contact_email || joinedUser?.email || 'No email';

                  return (
                    <tr key={order.id} className="border-b border-zinc-900/50 hover:bg-zinc-900 transition-colors group">
                      <td className="py-6 px-6 text-zinc-500 font-mono text-xs">
                        {new Date(order.created_at).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      {/* 💎 럭셔리 사진 썸네일 뷰어 이식 */}
                      <td className="py-6 px-6">
                        {order.image_url ? (
                          <a 
                            href={order.image_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-700 bg-cover bg-center hover:border-white transition-all shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative group" 
                            style={{ backgroundImage: `url(${order.image_url})` }}
                            title="원본 사진 보기"
                          >
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg backdrop-blur-[2px]">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                            </div>
                          </a>
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-zinc-900/40 border border-zinc-800/50 flex flex-col items-center justify-center text-[7px] text-zinc-600 font-mono tracking-widest text-center break-keep">
                            <span>NO</span>
                            <span>PHOTO</span>
                          </div>
                        )}
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-white font-bold">{displayName}</div>
                        <div className="text-zinc-500 text-[10px] mt-0.5">{displayEmail}</div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-zinc-300 font-bold uppercase tracking-wide text-xs">{order.item_name}</div>
                        <div className="text-zinc-600 font-mono text-[9px] mt-1">{order.item_id}</div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm" style={{ backgroundColor: order.dominant_color }} />
                          <span className="text-zinc-400 font-mono text-[10px] uppercase">{order.dominant_color}</span>
                        </div>
                      </td>
                      
                      {/* 💎 럭셔리 배송지 표기 패널 이식 */}
                      <td className="py-6 px-6">
                        {order.shipping_address ? (
                          <div className="space-y-1.5 text-xs text-zinc-300 break-keep min-w-[200px] max-w-[280px]">
                            <p>
                              <span className="inline-block w-10 text-zinc-500 font-bold text-[9px] uppercase tracking-widest">TEL</span> 
                              <span className="text-white font-mono">{order.contact_number}</span>
                            </p>
                            <p className="flex items-start">
                              <span className="inline-block w-10 text-zinc-500 font-bold text-[9px] uppercase tracking-widest mt-0.5 shrink-0">ADDR</span> 
                              <span className="text-white leading-relaxed">{order.shipping_address}</span>
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-[10px] text-amber-500/80 font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-2 rounded-full w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            프라이빗 주소 대기중
                          </div>
                        )}
                      </td>

                      <td className="py-6 px-6 text-right">
                        <select 
                          value={order.status || 'pending'}
                          onChange={(e) => updateOrderStatus(order, e.target.value)}
                          className={`bg-black border rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider outline-none cursor-pointer transition-colors ${
                            order.status === 'pending' ? 'border-red-500/50 text-red-500' : 
                            order.status === 'pending_payment' ? 'border-amber-500/50 text-amber-500' : 
                            order.status === 'crafting' ? 'border-blue-500/50 text-blue-500' : 
                            order.status === 'qc_inspect' ? 'border-purple-500/50 text-purple-500' :
                            order.status === 'shipping' ? 'border-green-500/50 text-green-500' :
                            'border-zinc-700 text-zinc-400'
                          }`}
                        >
                          <option value="pending">0. Pending (결제 대기)</option>
                          <option value="pending_payment">1. 결제/데이터 확인</option>
                          <option value="crafting">2. 장인 수작업 중</option>
                          <option value="qc_inspect">3. PAWTRAIT EDITION 품질 검수</option>
                          <option value="shipping">4. 배송 및 패키징</option>
                        </select>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
        ### 📄 src/app/admin/products/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `EditionDropDesk`
* ww **Hooks:** `useRouter, useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function EditionDropDesk() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [products, setProducts] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. 상태 추가
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "₩ ",
    total_editions: 100,
    category: "case", // 🍏 기본 카테고리
    craftsmanship: "이탈리아산 프리미엄 베지터블 레더",
    lead_time: "주문 확인 후 장인의 수작업으로 3주 소요"
  });
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  // 🍏 상품 전시 상태 토글 (Publish / Unpublish)
  const toggleActiveStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('products')
      .update({ is_active: !currentStatus })
      .eq('id', id);
    
    if (!error) fetchProducts();
  };

  // 권한 체크 및 목록 불러오기
  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        alert("접근 권한이 없습니다.");
        router.replace("/vault");
        return;
      }
      setIsAuthorized(true);
      setIsCheckingAuth(false);
      fetchProducts();
    };
    checkAdminAuth();
  }, [router]);

  const fetchProducts = async () => {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (data) setProducts(data);
  };

  const handleDropEdition = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id || !formData.name || !formData.price) {
      alert("필수 정보를 모두 입력해주십시오.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('products').insert([formData]);
      if (error) {
        if (error.code === '23505') throw new Error("이미 존재하는 에디션 ID입니다.");
        throw error;
      }
      
      alert("새로운 에디션이 성공적으로 런칭되었습니다.");
      setFormData({ ...formData, id: "", name: "", price: "₩ " }); // 폼 초기화
      fetchProducts(); // 리스트 새로고침
    } catch (error: any) {
      alert(error.message || "에디션 런칭 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`정말로 이 에디션(${id})을 삭제하시겠습니까? 관련된 예약 내역이 꼬일 수 있습니다.`)) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchProducts();
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-8 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">PAWTRAIT CONCIERGE</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Edition Drop Manager</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/orders')} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
            주문 데스크로 이동 ↗
          </button>
        </div>
      </nav>

      <main className="w-full px-8 lg:px-12 py-10 flex flex-col lg:flex-row gap-12">
        
        {/* 🍏 좌측: 새로운 에디션 기획 (Launch Pad) */}
        <section className="w-full lg:w-1/3">
          <div className="sticky top-24">
            <header className="mb-8">
              <h1 className="text-3xl font-serif font-bold text-white mb-2">Launch Edition</h1>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">새로운 비스포크 상품 런칭</p>
            </header>

            <form onSubmit={handleDropEdition} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Edition ID (영문/숫자 고유값)</label>
                <input type="text" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} placeholder="e.g., silver_frame_01" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Edition Title (상품명)</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g., PAWTRAIT EDITION Signature Art Frame" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>



              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Category (제품군)</label>
                  <select 
                    value={isCustomCategory ? 'custom' : formData.category}
                    onChange={(e) => {
                      if (e.target.value === 'custom') {
                        setIsCustomCategory(true);
                        setFormData({...formData, category: ""});
                      } else {
                        setIsCustomCategory(false);
                        setFormData({...formData, category: e.target.value});
                      }
                    }}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none mb-2"
                  >
                    <option value="case">Phone Case (케이스)</option>
                    <option value="frame">Art Frame (액자)</option>
                    <option value="collar">Pet Collar (목줄)</option>
                    {/* 🍏 새롭게 추가된 럭셔리 라인업 */}
                    <option value="wallet">Card Wallet (카드지갑)</option>
                    <option value="harness">Pet Harness (하네스)</option>
                    <option value="keyring">Keyring (키링)</option>
                    <option value="pendant">Name Pendant (팬던트)</option>
                    {/* 🍏 새롭게 추가된 스트랩 라인업 */}
                    <option value="strap">Leather Strap (가죽 스트랩)</option>
                    <option value="custom">+ 새로운 카테고리 생성</option>
                  </select>
                  
                  {/* 직접 입력 시 나타나는 인풋 */}
                  {isCustomCategory && (
                    <input 
                      type="text" 
                      value={formData.category} 
                      onChange={e => setFormData({...formData, category: e.target.value})} 
                      placeholder="새 카테고리 영문명 (e.g., ring, bag)" 
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-yellow-500 focus:border-yellow-400 outline-none transition-colors" 
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Craftsmanship (소재 및 마감)</label>
                <textarea value={formData.craftsmanship} onChange={e => setFormData({...formData, craftsmanship: e.target.value})} rows={2} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors resize-none" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Lead Time (제작 소요 기간)</label>
                <input type="text" value={formData.lead_time} onChange={e => setFormData({...formData, lead_time: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-white outline-none transition-colors" />
              </div>

              <button disabled={isSubmitting} className="w-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.2em] py-4 rounded-xl mt-4 active:scale-95 transition-all">
                {isSubmitting ? "Launching..." : "Drop Edition"}
              </button>
            </form>
          </div>
        </section>

        {/* 🍏 우측: 런칭된 에디션 라인업 */}
        <section className="w-full lg:w-2/3">
          <header className="mb-8">
            <h2 className="text-xl font-serif font-bold text-white mb-2">Current Bespoke Lineup</h2>
            <p className="text-xs text-zinc-500 tracking-widest uppercase">현재 등록된 총 {products.length}개의 에디션</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
              <div key={product.id} className={`bg-zinc-950 border rounded-3xl p-6 relative group transition-all duration-300 ${product.is_active ? 'border-zinc-700 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'border-zinc-800 opacity-50'}`}>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {/* 🍏 전시 상태 토글 스위치 */}
                    <button 
                      onClick={() => toggleActiveStatus(product.id, product.is_active)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${product.is_active ? 'bg-green-500' : 'bg-zinc-800'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${product.is_active ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {product.is_active ? 'Live (전시중)' : 'Hidden (숨김)'}
                    </span>
                  </div>
                  
                  <button onClick={() => handleDelete(product.id)} className="text-zinc-600 hover:text-red-500 transition-colors text-xs font-bold">Delete</button>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-sm font-mono text-zinc-400 mb-6">{product.price}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="block text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Total Supply</span>
                    <p className="text-xs text-white font-mono">{product.total_editions} Editions Only</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
        ### 📄 src/app/admin/orders/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `ConciergeDesk`
* ww **Hooks:** `useRouter, useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

export default function ConciergeDesk() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]); // 🍏 등록된 상품 리스트 상태 추가
  const [isLoading, setIsLoading] = useState(false);

  // 🍏 1. 관리자 권한 체크
  useEffect(() => {
    const checkAdminAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.email !== ADMIN_EMAIL) {
        alert("접근 권한이 없습니다.");
        router.replace("/vault");
        return;
      }
      setIsAuthorized(true);
      setIsCheckingAuth(false);
      fetchOrders();
    };
    checkAdminAuth();
  }, [router]);

  const fetchOrders = async () => {
    setIsLoading(true);
    
    // 🍏 1. 상품 마스터 데이터 가져오기 (총 수량 등)
    const { data: productsData } = await supabase.from('products').select('*').order('created_at', { ascending: true });
    if (productsData) setProducts(productsData);

    // 🍏 2. 라이브 오더 데이터 가져오기
    const { data: ordersData, error } = await supabase
      .from('pre_orders')
      .select(`*, users ( full_name, email )`)
      .order('created_at', { ascending: false });

    if (ordersData) setOrders(ordersData);
    if (error) console.error("오더 로딩 에러:", error);
    setIsLoading(false);
  };

  // 🍏 3. 결제 상태 원터치 변경 로직
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    const { error } = await supabase
      .from('pre_orders')
      .update({ status: newStatus })
      .eq('id', orderId);

    if (error) {
      alert("상태 변경에 실패했습니다.");
    } else {
      fetchOrders(); // 변경 후 리스트 즉시 새로고침
    }
  };

  // 🍏 3. 아이템별 재고(통계) 동적 계산기
  const getStats = (itemId: string, totalEditions: number) => {
    const itemOrders = orders.filter(o => o.item_id === itemId);
    const paid = itemOrders.filter(o => o.status === 'paid').length;
    const pending = itemOrders.filter(o => o.status === 'pending_payment').length;
    return { paid, pending, total: paid + pending, remaining: totalEditions - paid };
  };

  if (isCheckingAuth) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans pb-32">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 h-16 border-b border-zinc-800 flex items-center justify-between px-6 lg:px-12 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">PAWTRAIT CONCIERGE</span>
          <span className="h-4 w-px bg-zinc-800"></span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Live Allocation Desk</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchOrders} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 1 0 2.13-5.83L2 12"></path></svg>
            새로고침
          </button>
          <button onClick={() => router.push('/vault')} className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 hover:bg-white hover:text-black transition-all">✕</button>
        </div>
      </nav>

      <main className="w-full px-6 lg:px-12 py-10 mx-auto">
        
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Fair Inventory Status</h1>
          <p className="text-xs text-zinc-500 tracking-widest uppercase">실시간 100개 한정 에디션 재고 현황</p>
        </header>

        {/* 🍏 통계 대시보드 (하드코딩 제거, DB 데이터 매핑) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map(item => {
            const stats = getStats(item.id, item.total_editions);
            const progress = (stats.paid / item.total_editions) * 100;
            return (
              <div key={item.id} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                  <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${progress}%` }} />
                </div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.name}</h3>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-4xl font-bold text-white">{stats.paid}</span>
                  <span className="text-sm text-zinc-500 font-mono mb-1">/ {item.total_editions} Paid</span>
                </div>
                <div className="flex gap-4 text-xs font-mono">
                  <span className="text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Pending: {stats.pending}</span>
                  <span className="text-zinc-500 bg-zinc-900 px-2 py-1 rounded">Remain: {stats.remaining}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🍏 실시간 주문 리스트 (Live Order Stream) */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Live Allocations</h2>
            <span className="text-[10px] bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full uppercase tracking-widest">Total {orders.length} Records</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-500 bg-black/50">
                  <th className="p-4 pl-6 font-medium">Time</th>
                  <th className="p-4 font-medium">VIP Member</th>
                  <th className="p-4 font-medium">Edition / Aura</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 pr-6 font-medium text-right">Concierge Action</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-zinc-800/50">
                {orders.length === 0 && (
                  <tr><td colSpan={5} className="p-8 text-center text-zinc-600">아직 예약된 에디션이 없습니다.</td></tr>
                )}
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-zinc-900/30 transition-colors">
                    {/* 시간 */}
                    <td className="p-4 pl-6 font-mono text-[10px] text-zinc-500">
                      {new Date(order.created_at).toLocaleTimeString('ko-KR', { hour: '2-digit', minute:'2-digit' })}
                    </td>
                    {/* 고객 정보 */}
                    <td className="p-4">
                      <div className="font-bold text-zinc-300">{order.users?.full_name || 'VIP Member'}</div>
                      <div className="text-[10px] text-zinc-600">{order.users?.email || 'No email provided'}</div>
                    </td>
                    {/* 에디션 및 컬러 */}
                    <td className="p-4">
                      <div className="font-bold text-white text-xs mb-1">{order.item_name}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full border border-zinc-700" style={{ backgroundColor: order.dominant_color }} />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">{order.dominant_color}</span>
                      </div>
                    </td>
                    {/* 상태 뱃지 */}
                    <td className="p-4">
                      {order.status === 'pending_payment' && <span className="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">결제 대기</span>}
                      {order.status === 'paid' && <span className="text-[10px] font-bold text-green-500 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">결제 완료</span>}
                      {order.status === 'canceled' && <span className="text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full uppercase tracking-wider">취소됨</span>}
                    </td>
                    {/* 액션 버튼 */}
                    <td className="p-4 pr-6 text-right">
                      {order.status === 'pending_payment' && (
                        <div className="flex justify-end gap-2">
                          <button onClick={() => updateOrderStatus(order.id, 'paid')} className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-zinc-200 active:scale-95 transition-all">
                            현장 결제 완료
                          </button>
                          <button onClick={() => updateOrderStatus(order.id, 'canceled')} className="bg-transparent border border-zinc-700 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg hover:text-red-400 hover:border-red-500/50 active:scale-95 transition-all">
                            취소
                          </button>
                        </div>
                      )}
                      {order.status === 'paid' && (
                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Action Closed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
        ### 📄 src/app/admin/editor/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `AIEditorAdmin`
* ww **Hooks:** `useRouter, useState, useSearchParams, useEffect`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "cto@yeahplus.co.kr";

function AIEditorContent() {
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
          <span className="text-white font-bold tracking-tighter text-sm md:text-lg">PAWTRAIT EDITION STUDIO</span>
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
                        <p className="text-[8px] font-bold tracking-[0.4em] uppercase mb-2 transition-colors duration-1000" style={{ color: brandColor || "#a1a1aa" }}>PAWTRAIT EDITORIAL</p>
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

export default function AIEditorAdmin() {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
          <div className="w-10 h-10 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
          <p className="text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase animate-pulse">
            Loading Studio...
          </p>
        </div>
      }>
        <AIEditorContent />
      </Suspense>
    );
  }
        ### 📄 src/app/api/webhook/status/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, resend`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend 초기화 (API 키 연동)
const resend = new Resend(process.env.RESEND_API_KEY);

// 🍏 상태값에 따른 럭셔리 메시지 및 스텝 맵핑
const statusMessages: Record<string, { title: string, desc: string, step: string }> = {
  pending_payment: {
    step: "STEP 01 : PAYMENT CONFIRMED",
    title: "Payment Confirmed",
    desc: "귀하께서 주문하신 결제 내역과 비스포크 데이터가 완벽하게 확인되었습니다. 이제 PAWTRAIT EDITION의 전담 장인이 오직 한 사람만을 위한 숭고한 수작업 공정에 착수할 준비를 마쳤습니다."
  },
  crafting: {
    step: "STEP 02 : CRAFTING",
    title: "Master Crafting",
    desc: "컬렉터님의 아우라 데이터가 장인의 아틀리에로 전달되어, 물리적 구조를 입는 숭고한 수작업 공정이 시작되었습니다."
  },
  qc_inspect: {
    step: "STEP 03 : INSPECTION",
    title: "Quality Control",
    desc: "장인의 손길을 거친 마스터피스가 PAWTRAIT EDITION의 엄격한 검수 센터에 도착하여, 완벽한 무결성을 확인하고 있습니다."
  },
  shipping: {
    step: "STEP 04 : DELIVERY",
    title: "Delivery Initiated",
    desc: "모든 공정을 마친 컬렉터님의 에디션이 프리미엄 패키징을 마치고 마침내 당신의 곁으로 향합니다."
  },
  contacted: {
    step: "VIP WAITLIST : CONTACTED",
    title: "Private Contact",
    desc: "귀하의 VIP 대기열 등록이 확인되었습니다. PAWTRAIT EDITION의 전담 컨시어지가 귀하의 컬렉션 합류를 위해 조만간 프라이빗한 연락을 드릴 예정입니다. 조금만 기다려 주십시오."
  },
  reserved: {
    step: "VIP WAITLIST : RESERVED",
    title: "Invitation Confirmed",
    desc: "축하합니다. 귀하의 PAWTRAIT EDITION VIP 우선 예약이 최종 확정되었습니다. 정식 런칭 시, 전 세계 그 누구보다 가장 먼저 마스터피스를 소유할 수 있는 절대적인 권한이 부여됩니다."
  },
};

// 💎 블랙 플래티넘 HTML 이메일 제너레이터
const generateLuxuryEmailHtml = (customerName: string, itemName: string, messageData: any) => {
  // 🍏 [핵심] 1단계일 때는 '배송지 입력창'으로, 나머지는 '아카이브(Vault)'로 동적 연결합니다.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const isPaymentConfirmed = messageData.step === "STEP 01 : PAYMENT CONFIRMED";
  
  const targetUrl = isPaymentConfirmed ? `${baseUrl}/claim/address?order=${messageData.orderId}` : `${baseUrl}/vault`;
  const buttonText = isPaymentConfirmed ? "프라이빗 배송지 입력하기" : "Private Archive 입장하기";

  return `
    <!DOCTYPE html>
    <html lang="ko">
    <body style="margin: 0; padding: 0; background-color: #000000; text-align: center;">
      <div style="background-color: #000000; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 60px 20px; text-align: center; -webkit-font-smoothing: antialiased;">
        
        <div style="max-width: 500px; margin: 0 auto; border: 1px solid #27272a; border-radius: 24px; padding: 50px 40px; background-color: #09090b; box-shadow: 0 20px 40px rgba(0,0,0,0.8);">
          
          <div style="width: 30px; height: 2px; background-color: #ffffff; margin: 0 auto 30px auto;"></div>
          <h1 style="font-size: 26px; letter-spacing: 6px; font-weight: 300; margin-bottom: 8px; text-transform: uppercase; color: #ffffff;">PAWTRAIT EDITION</h1>
          <p style="font-size: 10px; color: #71717a; letter-spacing: 4px; text-transform: uppercase; margin-top: 0;">The Soul of Data</p>
          
          <div style="margin-top: 60px; margin-bottom: 50px;">
            <p style="font-size: 11px; color: #a1a1aa; letter-spacing: 3px; margin-bottom: 12px; font-weight: bold;">${messageData.step}</p>
            <h2 style="font-size: 24px; font-weight: normal; letter-spacing: 1px; margin-bottom: 30px; color: #ffffff;">${messageData.title}</h2>
            
            <p style="font-size: 14px; color: #d4d4d8; line-height: 1.8; margin-bottom: 40px; word-break: keep-all;">
              <strong style="color: #ffffff; font-weight: bold;">${customerName}</strong> 컬렉터님,<br><br>
              ${messageData.desc}
            </p>
            
            <div style="background-color: #000000; border: 1px solid #27272a; border-radius: 12px; padding: 24px; margin-bottom: 40px;">
              <p style="font-size: 10px; color: #71717a; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 2px;">Bespoke Edition</p>
              <p style="font-size: 16px; color: #ffffff; font-weight: 300; margin: 0; letter-spacing: 1px;">${itemName}</p>
            </div>
          </div>
          
          <a href="${targetUrl}" style="display: inline-block; background-color: #ffffff; color: #000000; text-decoration: none; padding: 18px 36px; border-radius: 30px; font-size: 11px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase; transition: opacity 0.3s;">
            ${buttonText}
          </a>
          
          <div style="margin-top: 60px; border-top: 1px solid #27272a; padding-top: 30px;">
            <p style="font-size: 10px; color: #52525b; letter-spacing: 1px; line-height: 1.6;">
              본 메일은 발신 전용이며 회신되지 않습니다.<br>
              당신의 빛이 영원토록 기록되길 바랍니다.<br><br>
              © 2026 PAWTRAIT EDITION. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, status, customerName, customerEmail, itemName } = body;

    if (!statusMessages[status]) {
      return NextResponse.json({ success: true, message: "알림 대상 상태가 아님" });
    }

    // 🍏 [핵심 교정] 이메일 생성기에 주문 ID(orderId)를 넘겨주기 위해 객체를 결합합니다.
    const messageData = { ...statusMessages[status], orderId };
    
    // 수신자 강제 세팅 (라이브 시 customerEmail 로 변경 필요)
    const targetEmail = "cto@yeahplus.co.kr"; 

    const { data, error } = await resend.emails.send({
      from: 'PAWTRAIT EDITION Concierge <concierge@pawtraitedition.com>',
      to: targetEmail,
      subject: `[PAWTRAIT EDITION] ${messageData.title}: 여정의 업데이트`,
      html: generateLuxuryEmailHtml(customerName, itemName, messageData),
    });

    if (error) {
      console.error("Resend 발송 에러:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    console.log(`[PAWTRAIT EDITION Email Sent] ID: ${data?.id} | To: ${targetEmail}`);
    return NextResponse.json({ success: true, message: "Notification sent successfully." });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
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
  console.log("🚀 [PAWTRAIT EDITION S3] 데이터 추출 파이프라인 가동");

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
  console.log("🚀 [PAWTRAIT EDITION AI] 에디터 파이프라인 가동 시작");
  
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
* ww **Hooks:** `useRouter, useState, useSearchParams, useEffect`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import LoginModal from "@/components/modals/LoginModal";

function ClaimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get("source_url");

  // 데이터 상태
  const [images, setImages] = useState<string[]>([]);
  const [colorChips, setColorChips] = useState<string[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0]);
  
  // 폼 상태
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");

  // UI 상태
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // 1. 게이트 검문: 로그인 확인 및 데이터 추출
  useEffect(() => {
    const checkAuthAndExtract = async () => {
      setIsLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      // 로그인이 안 되어 있다면, 현재 딥링크 주소를 티켓으로 쥐여주고 모달을 엽니다.
      if (!session) {
        sessionStorage.setItem("lumen_redirect_after_login", window.location.href);
        setIsLoading(false);
        setIsLoginModalOpen(true);
        return; 
      }

      // 로그인이 되어 있다면 QR URL 확인 후 추출 API 호출
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

  // 2. 사진 다중 선택 로직
  const toggleSelection = (idx: number) => {
    if (selectedIndexes.includes(idx)) {
      if (selectedIndexes.length === 1) return; // 최소 1장은 선택해야 함
      setSelectedIndexes(selectedIndexes.filter(i => i !== idx));
    } else {
      setSelectedIndexes([...selectedIndexes, idx]);
    }
  };

  // 3. 마스터피스 금고 영구 저장 로직
  const handleSaveToVault = async () => {
    if (images.length === 0 || selectedIndexes.length === 0) return;
    setIsSaving(true);
    
    const selectedImages = selectedIndexes.map(i => images[i]);
    const dominantColor = colorChips.length > 0 ? colorChips[0] : "#ffffff";

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("세션이 만료되었습니다. 다시 로그인해 주십시오.");
        router.push("/");
        return;
      }

      // 💎 DB에 완벽하게 꽂아 넣습니다.
      const { error } = await supabase.from('masterpieces').insert({
        user_id: user.id,
        source_url: sourceUrl,
        images: selectedImages,
        color_palette: colorChips,
        dominant_color: dominantColor,
        pet_name: petName || "UNKNOWN",
        pet_birth_date: petBirthDate || "202X.XX.XX"
      });

      if (error) throw error;

      // 💎 완벽하게 저장되면 금고 화면으로 리다이렉트
      router.push("/vault");
      
    } catch (error: any) {
      alert(`저장에 실패했습니다: ${error.message}`);
      setIsSaving(false);
    }
  };

  // UI 분기 1: 로딩 중
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] text-zinc-500 tracking-[0.3em] font-bold animate-pulse">VERIFYING VIP MEMBERSHIP...</p>
      </div>
    );
  }

  // UI 분기 2: 에러 발생 (로그인 모달이 안 떠있을 때만)
  if (errorMsg && !isLoginModalOpen) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-zinc-400 p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <p className="text-sm font-light tracking-wide">{errorMsg}</p>
        <button onClick={() => router.push('/vault')} className="mt-8 px-6 py-2 border border-zinc-800 rounded-full text-xs hover:bg-white hover:text-black transition-colors">
          Return to Vault
        </button>
      </div>
    );
  }

  // 메인 UI: 로그인 모달 또는 추출 결과 화면
  return (
    <div className="min-h-screen bg-black text-white relative">
      
      {/* 🍏 로그인 모달 (세션이 없을 때 화면 정중앙에 뜹니다) */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => router.push("/vault")} 
        isFromQR={true} 
      />

      {/* 🍏 로그인이 완료되고 데이터가 성공적으로 뽑혔을 때의 화면 */}
      {!isLoginModalOpen && images.length > 0 && (
        <div className="p-6 pb-40 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <header className="mb-10 text-center pt-8">
            <h2 className="text-[9px] text-zinc-500 font-bold tracking-[0.4em] uppercase mb-2">Sync Complete</h2>
            <h1 className="text-3xl font-serif font-bold tracking-tight">Select Masterpieces</h1>
            <p className="text-xs text-zinc-400 font-light mt-3">금고에 보관할 사진들을 선택하십시오</p>
          </header>

          {/* 사진 선택 그리드 */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {images.map((imgUrl, idx) => {
              const isSelected = selectedIndexes.includes(idx);
              return (
                <div 
                  key={idx} 
                  onClick={() => toggleSelection(idx)} 
                  className={`aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border transition-all duration-300 relative cursor-pointer group ${isSelected ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-[1.02]' : 'border-zinc-800 opacity-60 hover:opacity-100'}`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center z-20 shadow-lg">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm z-10 text-[8px] font-mono tracking-widest text-zinc-300">
                    IMG_{String(idx + 1).padStart(2, '0')}
                  </div>
                  <img src={imgUrl} alt={`Extracted ${idx}`} className={`w-full h-full object-cover transition-all duration-700 ${isSelected ? 'grayscale-0' : 'grayscale'}`} />
                </div>
              );
            })}
          </div>

          {/* 강아지 프로필 입력 폼 */}
          <div className="mb-10 space-y-5 bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 backdrop-blur-md">
            <h3 className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" /> Companion Profile
            </h3>
            
            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-zinc-500 tracking-widest ml-1">NAME</label>
              <input 
                type="text" 
                value={petName} 
                onChange={(e) => setPetName(e.target.value)}
                placeholder="반려동물의 이름 (ex. MAX)"
                className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-zinc-500 tracking-widest ml-1">BORN DATE</label>
              <input 
                type="text" 
                value={petBirthDate} 
                onChange={(e) => setPetBirthDate(e.target.value)}
                placeholder="YYYY.MM.DD"
                className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 font-mono"
              />
            </div>
          </div>

          {/* 브랜드 컬러 팔레트 */}
          {colorChips.length > 0 && (
            <div className="pt-8 border-t border-zinc-900/50">
              <h3 className="text-[10px] text-zinc-500 font-bold tracking-[0.3em] uppercase mb-6 text-center">Aura Palette</h3>
              <div className="flex flex-wrap justify-center gap-5">
                {colorChips.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                    <div 
                      className="w-10 h-10 rounded-full border border-zinc-700 shadow-lg group-hover:scale-110 transition-transform duration-500" 
                      style={{ backgroundColor: color }} 
                    />
                    <span className="text-[8px] font-mono text-zinc-600 uppercase group-hover:text-zinc-400 transition-colors">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 하단 고정 저장 버튼 */}
          <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none">
            <button 
              onClick={handleSaveToVault} 
              disabled={isSaving}
              className="w-full h-16 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-all pointer-events-auto disabled:opacity-50 disabled:cursor-wait"
            >
              {isSaving ? "Securing Data..." : `Add ${selectedIndexes.length} Assets to Vault`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 💎 Vercel 배포를 무사히 통과하기 위한 최상위 Suspense 래퍼
export default function ClaimPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-2 border-zinc-700 border-t-white rounded-full animate-spin mb-6" />
        <p className="text-[10px] tracking-[0.3em] text-zinc-500 font-bold animate-pulse uppercase">Opening Secure Link...</p>
      </div>
    }>
      <ClaimContent />
    </Suspense>
  );
}
        ### 📄 src/app/claim/address/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase`
* 🧩 **Component (Default):** `AddressClaimPage`
* ww **Hooks:** `useRouter, useState, useSearchParams, useEffect`

        ```typescript
        "use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function AddressClaimContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderItem, setOrderItem] = useState<string>("Bespoke Masterpiece");

  const [formData, setFormData] = useState({
    recipientName: "",
    contactNumber: "",
    shippingAddress: ""
  });

  // 🍏 1. 주문 번호 확인 및 제품명 가져오기
  useEffect(() => {
    if (!orderId) {
      alert("유효하지 않은 접근입니다.");
      router.push("/");
      return;
    }

    const fetchOrder = async () => {
      const { data, error } = await supabase
        .from("pre_orders")
        .select("item_name, shipping_address")
        .eq("id", orderId)
        .single();

      if (data) {
        setOrderItem(data.item_name);
        // 이미 주소가 입력된 경우 방어
        if (data.shipping_address) {
          setIsSuccess(true);
        }
      }
      setIsLoading(false);
    };

    fetchOrder();
  }, [orderId, router]);

  // 🍏 2. 배송지 저장 로직
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from("pre_orders")
      .update({
        shipping_address: formData.shippingAddress,
        contact_number: formData.contactNumber,
      })
      .eq("id", orderId);

    if (error) {
      alert("정보 저장에 실패했습니다. 다시 시도해 주십시오.");
      setIsSubmitting(false);
    } else {
      setIsSuccess(true);
    }
  };

  if (isLoading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-[10px] tracking-widest animate-pulse">VERIFYING VIP IDENTITY...</div>;

  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* 백그라운드 아우라 효과 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {isSuccess ? (
          <div className="text-center p-12 border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl rounded-[32px] shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-tight mb-4">Destination Secured</h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-light break-keep">
              마스터피스가 안착할 프라이빗 갤러리의 위치가 완벽하게 수신되었습니다.<br/>
              모든 공정이 완료되는 대로 안전하게 모시겠습니다.
            </p>
            <button onClick={() => router.push('/vault')} className="mt-10 px-8 py-3 rounded-full border border-zinc-700 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 hover:text-white hover:border-white transition-all">
              Return to Vault
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-8" />
              <h2 className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-3">Delivery Information</h2>
              <h1 className="text-3xl font-serif font-bold tracking-tight mb-4">프라이빗 배송지 입력</h1>
              <p className="text-zinc-400 text-xs font-light tracking-wide">
                <strong className="text-white font-medium">{orderItem}</strong> 에디션을 안전하게 전달받으실 자택의 주소와 연락처를 남겨주십시오.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-2">Recipient Name</label>
                <input required type="text" placeholder="수령인 성함" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors" value={formData.recipientName} onChange={(e) => setFormData({...formData, recipientName: e.target.value})} />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-2">Contact Number</label>
                <input required type="tel" placeholder="연락처 (예: 010-1234-5678)" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors" value={formData.contactNumber} onChange={(e) => setFormData({...formData, contactNumber: e.target.value})} />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold ml-2">Shipping Address</label>
                <textarea required placeholder="상세 주소 (우편번호 포함)" rows={3} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none" value={formData.shippingAddress} onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})} />
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full mt-8 bg-white text-black font-bold text-[11px] tracking-[0.2em] uppercase py-5 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all disabled:opacity-50">
                {isSubmitting ? "Securing Data..." : "Confirm Destination"}
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
// 💎 [핵심] Vercel의 빌드를 통과하기 위한 최상위 페이지 (Suspense 대기실 적용)
export default function AddressClaimPage() {
    return (
      <main className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* 백그라운드 아우라 효과 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none" />
  
        {/* 🍏 이 안의 내용물은 URL에 주문번호가 들어올 때까지 안전하게 대기합니다. */}
        <Suspense fallback={<div className="text-[10px] tracking-widest text-zinc-500 animate-pulse z-10">LOADING SECURE VAULT...</div>}>
          <AddressClaimContent />
        </Suspense>
      </main>
    );
  }
        ### 📄 src/app/vault/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase, @/components/modals/QRScannerModal, @/components/modals/ProfileModal`...
* 🧩 **Component (Default):** `VaultPage`
* ww **Hooks:** `useRouter, useState, useSearchParams, useEffect`

        ```typescript
        "use client";
import { useState, useEffect, useRef,Suspense } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import QRScannerModal from "@/components/modals/QRScannerModal";

import CheckoutModal, { CheckoutItem } from "@/components/modals/CheckoutModal";
import WaitlistModal, { ConceptType } from "@/components/modals/WaitlistModal";
import ProfileModal from "@/components/modals/ProfileModal";
import PrivateVaultTab from "@/components/vault/PrivateVaultTab";
import EditorialTab from "@/components/vault/EditorialTab";
import MuseTab from "@/components/vault/MuseTab";
import BottomNav from "@/components/navigation/BottomNav";
import { useSearchParams } from "next/navigation"; // 🍏 1. URL 꼬리표를 읽는 훅 추가

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }
type TabType = "vault" | "editorial" | "muse";

function VaultContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as TabType | null;
  // 🍏 탭 상태: Vault(과거), Editorial(현재), Muse(미래) 3단 체제
  const [activeTab, setActiveTab] = useState<TabType>(tabParam || "vault");
  
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number>(0);

  const [displayImage, setDisplayImage] = useState<string>("/images/img_01.png");
  const [vaultImages, setVaultImages] = useState<string[]>([]);
  const [dominantColor, setDominantColor] = useState<string>("");
  const [displayId, setDisplayId] = useState<string>("COCO");
  const [displayDate, setDisplayDate] = useState<string>("2026.03.04");
  
  const [userInitial, setUserInitial] = useState<string>("V");
  const [editorials, setEditorials] = useState<EditorialType[]>([]);
  const [colorPalette, setColorPalette] = useState<string[]>([]); // 🍏 추가: 팔레트 전체 배열

  const [checkoutItem, setCheckoutItem] = useState<CheckoutItem | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | null>(null);
  const [manualLink, setManualLink] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [displayPetName, setDisplayPetName] = useState("COMPANION");
  const [displayPetBirth, setDisplayPetBirth] = useState("202X.XX.XX");
  const [userEmail, setUserEmail] = useState<string>(""); // 🍏 추가: 유저 이메일을 담을 바구니

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
    setColorPalette(asset.color_palette || []); // 🍏 추가: DB에서 팔레트를 꺼냅니다
  };

  // 🍏 스캔 성공 시 웜홀 이동 로직 (디버깅 모드)
  const handleScanSuccess = (decodedText: string) => {
    setIsScanning(false); // 모달 닫기
    if (navigator.vibrate) navigator.vibrate(200);

    // 1. 조건 완화: 'life4cut' 이나 'chemistry' 가 포함되어 있으면 무조건 통과
    if (decodedText.includes("life4cut.net") || decodedText.includes("chemistry")) {
      router.push(`/claim?source_url=${encodeURIComponent(decodedText)}`);
    } else {
      // 2. 실패 시 렌즈가 무엇을 보았는지 정확히 출력합니다 (원인 파악용)
      alert(`🚨 렌즈가 인식한 텍스트:\n\n${decodedText}\n\nPAWTRAIT EDITION과 호환되지 않는 QR 코드입니다.`);
    }
  };

  // 🍏 3. 핵심 교정: URL 꼬리표 감지 및 상태 전환
  useEffect(() => {
    if (tabParam) {
      // 1. 정확한 탭으로 화면 전환
      if (tabParam === "editorial") setActiveTab("editorial");
      else if (tabParam === "muse") setActiveTab("muse");
      else setActiveTab("vault");

      // 2. 🍏 [핵심] Next.js 몰래 주소를 바꾸지 않고, 공식 라우터를 통해 부드럽게 꼬리표를 뗍니다.
      // 약간의 딜레이(100ms)를 주어 탭 상태가 완벽히 렌더링된 후 주소창을 청소합니다.
      const timeout = setTimeout(() => {
        router.replace('/vault', { scroll: false });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [tabParam, router]);

  useEffect(() => {
    const fetchAllVaultData = async () => {
      setIsLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsLoading(false);
        return; 
      }
      setUserInitial((user.user_metadata?.full_name || user.email || "V").substring(0, 1).toUpperCase());
      setUserEmail(user.email || ""); // 🍏 추가: 로그인한 유저의 이메일을 세팅합니다.

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

      const { data: edData } = await supabase.from("editorials").select("*").order("created_at", { ascending: false });
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
            {activeTab === "vault" ? "Private Vault" : activeTab === "editorial" ? " Magazine" : "The Future Vision"}
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
          setDominantColor={setDominantColor} // 🍏 추가: 색상을 바꿀 수 있는 리모컨
          colorPalette={colorPalette}
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

      {/* 🍏 하단 수동 테스트 Input (관리자 전용 은밀한 백도어) */}
      {userEmail === "cto@yeahplus.co.kr" && (
      <div className="fixed bottom-24 left-0 right-0 p-4 bg-black/90 border-t border-zinc-900 z-50">
        <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-lg">
          <input type="text" value={manualLink} onChange={(e) => setManualLink(e.target.value)} placeholder="Paste life4cut QR link here..." className="flex-1 bg-transparent px-4 text-xs text-white focus:outline-none placeholder:text-zinc-600" />
          <button onClick={handleInjectLink} className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full active:scale-95 transition-transform">LINK INJECT</button>
        </div>
      </div>
      )}

      {/* 🍏 분리된 스캐너 모달 호출 */}
      <QRScannerModal 
        isOpen={isScanning} 
        onClose={() => setIsScanning(false)} 
        onScanSuccess={handleScanSuccess} 
      />

      {/* 🍏 네비게이션 모듈화 적용 */}
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onScanClick={() => setIsScanning(true)} 
      />

      <WaitlistModal isOpen={isWaitlistModalOpen} concept={selectedConcept} onClose={() => setIsWaitlistModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} dominantColor={dominantColor}/>
      <CheckoutModal item={checkoutItem} dominantColor={dominantColor} onClose={() => setCheckoutItem(null)} />
    </main>
  );
}

// 💎 [핵심] Vercel의 빌드를 통과하기 위한 최상위 껍데기 (Suspense 대기실 적용)
export default function VaultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-[10px] tracking-widest text-zinc-500 uppercase animate-pulse">
        Opening Private Vault...
      </div>
    }>
      <VaultContent />
    </Suspense>
  );
}
        ### 📄 src/components/layout/LayoutWrapper.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/navigation, react, @/lib/supabase`
* 🧩 **Component (Default):** `LayoutWrapper`
* ww **Hooks:** `useRouter, usePathname, useState, useEffect`

        ```typescript
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
    <nav className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-xl border-t border-zinc-900 flex justify-between items-center px-2 md:px-6 z-30 pb-safe">
      
      {/* 1. VAULT */}
      <button 
        onClick={() => setActiveTab("vault")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "vault" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
      >
        <LayoutGrid strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">VAULT</span>
      </button>

      {/* 2. STORY */}
      <button 
        onClick={() => setActiveTab("editorial")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "editorial" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
      >
        <BookOpen strokeWidth={2.5} size={20} />
        <span className="text-[8px] font-bold tracking-widest">STORY</span>
      </button>

      {/* 3. SCANNER (조화로운 밸런스 유지) */}
      <button 
        onClick={onScanClick} 
        className="flex-1 flex flex-col items-center gap-1.5 transition-all group"
      >
        <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)] group-active:scale-90 transition-transform">
          <ScanLine strokeWidth={2.5} size={18} />
        </div>
        <span className="text-[8px] font-bold tracking-widest text-zinc-300 group-hover:text-white transition-colors">SCAN</span>
      </button>

      {/* 4. MUSE */}
      <button 
        onClick={() => setActiveTab("muse")} 
        className={`flex-1 flex flex-col items-center gap-1.5 transition-colors ${activeTab === "muse" ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
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
            {isFromQR ? "로그인하여 디지털 금고를 열어주십시오." : "PAWTRAIT EDITION 멤버십 인증을 진행해 주십시오."}
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
        ### 📄 src/components/modals/PrivateArchiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* 🧩 **Component (Default):** `PrivateArchiveModal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface PrivateArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  dominantColor: string;
}

export default function PrivateArchiveModal({ isOpen, onClose, dominantColor }: PrivateArchiveProps) {
  const [masterpieces, setMasterpieces] = useState<any[]>([]);
  const [preOrders, setPreOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🍏 모달이 열릴 때마다 고객의 실제 마스터피스와 선주문(pre_orders) 내역을 가져옵니다.
  useEffect(() => {
    if (isOpen) {
      fetchArchiveData();
    }
  }, [isOpen]);

  const fetchArchiveData = async () => {
    setIsLoading(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // 1. 유저의 마스터피스 (이전 스키마 기준 + assets 스캔 정보 결합 가능)
    const { data: mpData } = await supabase
      .from("masterpieces")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    if (mpData) {
      // 🍏 [핵심] extracts 버킷에서 Public URL을 동적으로 조합하는 마법의 로직
      const mpWithUrls = mpData.map(mp => {
        let rawPath = mp.source_url || (mp.images && (mp.images.url || mp.images.original));
        let finalUrl = "/placeholder-image.jpg"; // 로딩 실패 시 대비용
        
        if (rawPath) {
          // 이미 완벽한 인터넷 주소(http)라면 그대로 사용하고,
          if (rawPath.startsWith('http')) {
            finalUrl = rawPath;
          } else {
            // 파일명만 있다면 extracts 버킷의 Public 주소로 변환합니다.
            const { data } = supabase.storage.from('extracts').getPublicUrl(rawPath);
            finalUrl = data.publicUrl;
          }
        }
        return { ...mp, display_url: finalUrl };
      });
      
      setMasterpieces(mpWithUrls);
    }

    // 2. 유저의 선주문 내역 (pre_orders 테이블 직접 호출)
    const { data: orderData } = await supabase
      .from("pre_orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (orderData) setPreOrders(orderData);
    
    setIsLoading(false);
  };

  // 🍏 텍스트 기반의 status를 진행 단계(1~4)로 변환하는 헬퍼 함수
  const getStepFromStatus = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('pending') || s.includes('paid')) return 1; // 분석 및 대기
    if (s.includes('craft') || s.includes('making') || s.includes('process')) return 2; // 장인 제작
    if (s.includes('inspect') || s.includes('qc') || s.includes('ready')) return 3; // 검수
    if (s.includes('ship') || s.includes('deliver') || s.includes('complete')) return 4; // 배송
    return 1; // 기본값
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
      {/* 배경 블러 및 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-5xl h-[85vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-500">
        
        {/* 🍏 Header: 갤러리 입장 */}
        <header className="flex justify-between items-center p-8 border-b border-zinc-900 relative overflow-hidden shrink-0">
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: dominantColor }} />
          <div>
            <h2 className="text-2xl font-serif text-white tracking-widest uppercase">Private Archive</h2>
            <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">당신의 빛이 기록된 영원한 금고</p>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Close</button>
        </header>

        {/* 🍏 Body: 스크롤 가능한 갤러리 영역 */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-12 custom-scrollbar">
          
          {/* 💎 Section 1: The Soul (마스터피스 & 에셋 리스트) */}
          <section className="flex-1 min-w-[300px] flex flex-col">
            <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] mb-6 border-b border-zinc-800 pb-2 shrink-0">The Digital Soul</h3>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {isLoading ? (
                <div className="animate-pulse h-96 bg-zinc-900 rounded-2xl" />
              ) : masterpieces.length > 0 ? (
                masterpieces.map((mp) => (
                  <div key={mp.id} className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-zinc-800 shadow-xl">
                    <img 
                        src={mp.display_url} /* 🍏 이제 완벽한 주소가 여기에 들어갑니다 */
                        alt={mp.pet_name || "PAWTRAIT EDITION Aura"} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        onError={(e) => {
                            // 🍏 만약의 오류에도 엑스박스가 뜨지 않도록 우아하게 감춤
                            (e.target as HTMLImageElement).style.opacity = '0';
                        }}
                    />
                    <div className="absolute inset-0 opacity-20 mix-blend-color transition-opacity duration-1000 group-hover:opacity-40" style={{ backgroundColor: mp.dominant_color || dominantColor }} />
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <span className="text-[10px] font-mono text-zinc-400 mb-1 block" style={{ color: mp.dominant_color || dominantColor }}>
                        AURA: {mp.dominant_color || 'EXTRACTED'}
                      </span>
                      <h4 className="text-xl font-serif text-white">{mp.pet_name || "Masterpiece"}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{new Date(mp.created_at).toLocaleDateString('ko-KR')}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center border border-dashed border-zinc-800 rounded-2xl">
                  <p className="text-zinc-600 text-xs tracking-widest uppercase">기록된 영혼이 없습니다</p>
                </div>
              )}
            </div>
          </section>

          {/* 💎 Section 2: The Vessel (물리적 굿즈 트래킹 - pre_orders 연동) */}
          <section className="flex-[1.5] min-w-[400px] flex flex-col">
            <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] mb-6 border-b border-zinc-800 pb-2 shrink-0">The Physical Vessel</h3>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 pb-10">
              {isLoading ? (
                <div className="animate-pulse h-64 bg-zinc-900 rounded-2xl" />
              ) : preOrders.length > 0 ? (
                preOrders.map((order) => {
                  const currentStep = getStepFromStatus(order.status);
                  const orderColor = order.dominant_color || dominantColor;
                  
                  return (
                    <div key={order.id} className="bg-black border border-zinc-800 rounded-2xl p-6 relative overflow-hidden group">
                      {/* 개별 주문의 아우라 컬러 백라이트 */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10" style={{ backgroundColor: orderColor }} />
                      
                      <div className="flex justify-between items-start mb-8 border-b border-zinc-900 pb-6 relative z-10">
                        <div className="flex items-center gap-6">
                          {/* 🍏 CSS 아이콘 */}
                          <div className="w-12 h-16 border-[2px] rounded-md relative flex flex-col items-center justify-center" style={{ borderColor: orderColor }}>
                             <div className="w-6 h-6 rounded-sm opacity-60 border" style={{ borderColor: orderColor }} />
                             <div className="w-6 h-1 mt-2 opacity-80" style={{ backgroundColor: orderColor }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white uppercase tracking-widest">{order.item_name}</h4>
                            <p className="text-[10px] text-zinc-500 mt-1 uppercase">ITEM ID: {order.item_id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] px-2 py-1 rounded-full border border-zinc-800 text-zinc-400 font-mono tracking-widest uppercase">
                            {order.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>

                      {/* 🍏 장인의 여정 트래킹 (상태 기반 자동 점등) */}
                      <div className="space-y-6 relative z-10">
                        {[
                          { step: 1, label: "Aura Confirmed", desc: "결제 및 아우라 데이터 확정" },
                          { step: 2, label: "Master Crafting", desc: "장인 수작업 진행 중" },
                          { step: 3, label: "Quality Control", desc: "PAWTRAIT EDITION 최종 검수" },
                          { step: 4, label: "Delivery", desc: "품격 있는 전달" }
                        ].map((process) => (
                          <div key={process.step} className="flex items-start gap-4">
                            <div className="relative flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full border border-zinc-800 z-10 transition-colors duration-500 ${currentStep >= process.step ? 'bg-white' : 'bg-zinc-900'}`} style={currentStep === process.step ? { backgroundColor: orderColor, boxShadow: `0 0 10px ${orderColor}` } : {}} />
                              {process.step < 4 && <div className={`w-0.5 h-10 -mt-1 ${currentStep > process.step ? 'bg-zinc-600' : 'bg-zinc-900'}`} />}
                            </div>
                            <div>
                              <p className={`text-xs font-bold uppercase tracking-widest ${currentStep >= process.step ? 'text-white' : 'text-zinc-600'}`}>{process.label}</p>
                              <p className="text-[10px] text-zinc-500 mt-1">{process.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex items-center justify-center border border-dashed border-zinc-800 rounded-2xl p-10 text-center">
                  <div>
                    <div className="w-10 h-10 mx-auto border border-zinc-800 rounded-full flex items-center justify-center mb-4">
                      <span className="text-zinc-600 text-xs">?</span>
                    </div>
                    <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">진행 중인 여정이 없습니다</p>
                    <p className="text-[10px] text-zinc-600">선주문(Pre-order)을 통해 당신만의 굿즈를 소유해 보세요.</p>
                  </div>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
        ### 📄 src/components/modals/QRScannerModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, html5-qrcode, @vercel/analytics`
* 🧩 **Component (Default):** `QRScannerModal`
* ww **Hooks:** `useRef, useEffect`

        ```typescript
        "use client";
import { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { track } from "@vercel/analytics";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (decodedText: string) => void;
}

export default function QRScannerModal({ isOpen, onClose, onScanSuccess }: QRScannerModalProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isScanningRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    // 🍏 모달 애니메이션이 끝난 후, DOM이 완전히 그려진 뒤에 스캐너를 켭니다.
    const timer = setTimeout(() => {
      // 🍏 1. 엔진 조립 (초기화): 복잡한 포맷 설정을 빼고, 가장 순수하고 안정적인 기본 상태로 생성합니다.
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("lumen-qr-reader");
      }

      if (!isScanningRef.current) {
        // 🍏 2. 엔진 시동: 프레임과 렌즈 비율만 하이엔드로 유지합니다.
        scannerRef.current.start(
          { facingMode: "environment" },
          { 
            fps: 10, 
            qrbox: { width: 280, height: 280 }, 
            aspectRatio: 1.0 
          },
          (decodedText) => {
            if (isScanningRef.current) {
              onScanSuccess(decodedText);
              track("qr_scan_success", { 
                scanned_url: decodedText 
              });
            }
          },
          (errorMessage) => { /* 무시 */ }
        ).then(() => {
          isScanningRef.current = true;
        }).catch(err => {
          console.error("카메라 시작 에러:", err);
          alert("카메라 접근 권한을 허용해주십시오.");
          onClose();
        });
      }
    }, 300); // 0.3초 대기

    return () => {
      clearTimeout(timer);
      if (scannerRef.current && isScanningRef.current) {
        scannerRef.current.stop().then(() => {
          scannerRef.current?.clear();
          isScanningRef.current = false;
        }).catch(console.error);
      }
    };
  }, [isOpen, onClose, onScanSuccess]);

  return (
    //<div className={`relative overflow-hidden bg-black border border-zinc-800 rounded-3xl transition-all duration-500 ${isOpen ? 'h-[350px] shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'h-20'}`}>
    <div className={`fixed inset-0 z-[200] bg-black transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

      {/* 헤더 바 */}
      <div className="absolute top-12 left-6 right-6 flex justify-between items-center z-50">
        <div>
          <h2 className="text-white font-bold tracking-widest text-sm uppercase">Scan Masterpiece</h2>
          <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase mt-1">PAWTRAIT EDITION Vision Sensor</p>
        </div>
        <button 
          onClick={onClose} 
          className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
        >
          ✕
        </button>
      </div>
      
      {/* 뷰파인더 영역 */}
      <div className="flex flex-col items-center justify-center w-full h-full pt-16">
        <div className="relative w-full max-w-[320px] aspect-square rounded-[40px] overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(255,255,255,0.1)] bg-zinc-950">
          
          {/* 실제 카메라 화면 렌더링 공간 */}
          <div id="lumen-qr-reader" className="w-full h-full"></div>
          
          {/* HUD 스캔 애니메이션 오버레이 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_20px_#ffffff] animate-[scan_2s_ease-in-out_infinite] z-10 pointer-events-none" />
          <div className="absolute inset-0 border-[4px] border-white/20 rounded-[40px] pointer-events-none z-10" />
        </div>
        
        <p className="mt-12 text-zinc-400 text-xs tracking-widest uppercase font-mono px-6 text-center">
          인화지 상단의 QR 코드를 인식하십시오
        </p>
      </div>
      
      {/* 🍏 스캐너 전용 CSS 격리 */}
      <style jsx global>{`
        #lumen-qr-reader {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
        }
        #lumen-qr-reader video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
        ### 📄 src/components/modals/ProfileModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, @/lib/supabase, @/components/modals/PrivateArchiveModal`
* 🧩 **Component (Default):** `ProfileModal`
* ww **Hooks:** `useRouter, useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import PrivateArchiveModal from "@/components/modals/PrivateArchiveModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  dominantColor: string;
}

export default function ProfileModal({ isOpen, onClose, dominantColor }: ProfileModalProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; initial: string } | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

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

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem("lumen_extracted_image");
      sessionStorage.removeItem("lumen_asset_id");
      sessionStorage.removeItem("lumen_asset_date");
      router.push("/"); 
    } catch (error) {
      console.error("로그아웃 에러:", error);
      alert("로그아웃 중 문제가 발생했습니다.");
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      {/* 🍏 1. 프로필 바텀 시트 레이어 (z-[150]) */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        
        {/* 다크 블러 배경 (클릭 시 ProfileModal만 닫힘) */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => !isLoggingOut && onClose()}
        />
        
        {/* 프로필 바텀 시트 */}
        <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
          <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
          
          {/* 💎 플래티넘 블랙 카드 UI (Platinum Black Card) */}
          <div className="relative w-full aspect-[1.586/1] rounded-2xl p-6 mb-8 overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-zinc-700/50 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
            {/* 메탈릭 빛 반사 효과 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none" />
            
            {/* 🍏 고객 고유의 아우라 컬러 백라이트 */}
            <div className="absolute -top-16 -right-16 w-40 h-40 blur-[50px] opacity-40 pointer-events-none" style={{ backgroundColor: dominantColor }} />

            {/* 스마트 IC 칩 디테일 (플래티넘 카드의 시그니처) */}
            <div className="w-10 h-8 border border-zinc-600/50 rounded-md mb-6 flex flex-col justify-between p-1 opacity-70">
              <div className="w-full h-[1px] bg-zinc-600/50" />
              <div className="w-full h-[1px] bg-zinc-600/50" />
              <div className="w-full h-[1px] bg-zinc-600/50" />
            </div>

            {/* 카드 정보 */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-1 drop-shadow-md">
                PAWTRAIT EDITION Black Platinum
                </div>
                <h3 className="text-xl font-serif text-white tracking-widest drop-shadow-md">{userData?.name || "VIP GUEST"}</h3>
              </div>
              
              {/* 카드 우측 하단: 아우라 엠블럼 */}
              <div className="w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-black/50 backdrop-blur-sm" style={{ borderColor: dominantColor }}>
                <div className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: dominantColor, color: dominantColor }} />
              </div>
            </div>
          </div>

          {/* 🍏 메뉴 리스트: Private Archive 버튼의 대형화 */}
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => setIsArchiveOpen(true)}
              className="w-full h-16 bg-black border border-zinc-800 hover:border-zinc-500 rounded-2xl flex items-center justify-between px-6 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: dominantColor }} />
                <span className="text-sm font-bold text-white tracking-widest uppercase">Private Archive</span>
              </div>
              <span className="text-[10px] text-zinc-500 tracking-[0.2em] group-hover:text-white transition-colors">Enter &rarr;</span>
            </button>
          </div>

          {/* 로그아웃 버튼 (톤다운하여 럭셔리함 유지) */}
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full h-14 bg-zinc-950 text-zinc-600 border border-zinc-900 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-red-400 transition-colors active:scale-[0.98]"
          >
            {isLoggingOut ? "Disconnecting..." : "Sign Out"}
          </button>
        </div>
      </div>

      {/* 🍏 2. 아카이브 모달 레이어 (z-[200]으로 완전히 분리하여 얼어붙는 버그 원천 차단) */}
      <div className="relative z-[200]">
        <PrivateArchiveModal 
          isOpen={isArchiveOpen} 
          onClose={() => setIsArchiveOpen(false)} 
          dominantColor={dominantColor} 
        />
      </div>
    </>
  );
}
        ### 📄 src/components/modals/CheckoutModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase, @vercel/analytics`
* wb **Type/Intf:** `CheckoutItem`
* 🧩 **Component (Default):** `CheckoutModal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { track } from "@vercel/analytics"; // 상단에 임포트

export interface CheckoutItem {
  id: string;
  name: string;
  price: string;
  category?: string; // 🍏 추가!
  imageUrl?: string;
}

interface CheckoutModalProps {
  item: CheckoutItem | null;
  dominantColor: string;
  onClose: () => void;
}

export default function CheckoutModal({ item, dominantColor, onClose }: CheckoutModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [remainingCount, setRemainingCount] = useState<number | null>(null);
    const [totalEditions, setTotalEditions] = useState<number>(100); // 🍏 분모(전체 수량) 상태 추가
    
    const isOpen = item !== null;
      
    // 🍏 1. 상품의 총 한정 수량과 현재 결제 완료된 수량을 동시에 스캔합니다.
    useEffect(() => {
      if (isOpen && item) {
        const fetchLiveInventory = async () => {
          // A. 상품의 총 한정 수량(분모) 가져오기
          const { data: productData } = await supabase
            .from('products')
            .select('total_editions')
            .eq('id', item.id)
            .single();
            
          const total = productData?.total_editions || 100;
          setTotalEditions(total);
  
          // B. 결제 완료된 수량 가져오기
          const { count, error } = await supabase
            .from('pre_orders')
            .select('*', { count: 'exact', head: true })
            .eq('item_id', item.id)
            .eq('status', 'paid');
  
          if (!error && count !== null) {
            const left = total - count;
            setRemainingCount(left < 0 ? 0 : left);
          }
        };
        
        fetchLiveInventory();
      } else {
        const timer = setTimeout(() => {
          setIsSuccess(false);
          setRemainingCount(null);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isOpen, item]);

  const handleSecureEdition = async () => {
    if (!item) return;

    track("checkout_initiated", { 
      item_name: item.name, 
      price: item.price,
      color: dominantColor 
    });
  
    console.log("결제 프로세스 진입:", item.name);
    
    // 🍏 재고 소진 방어 로직
    if (remainingCount !== null && remainingCount <= 0) {
      alert("죄송합니다. 해당 에디션은 이미 100개가 모두 완판되었습니다.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("멤버십 인증(로그인)이 만료되었습니다.");
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from('pre_orders').insert({
        user_id: user.id,
        item_id: item.id,
        item_name: item.name,
        dominant_color: dominantColor || "#ffffff",
        status: 'pending',
        image_url: item.imageUrl
      });

      if (error) throw error;

      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      setIsSuccess(true);

    } catch (error: any) {
      console.error("예약 실패:", error);
      alert("에디션 선점 중 문제가 발생했습니다. 데스크에 문의해주십시오.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !isSubmitting && onClose()} 
      />
      
      <div className={`absolute bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        
        <div className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-6" />
        
        {item && (
          <div className="relative">
            
            <div className={`transition-all duration-500 flex flex-col items-center ${isSuccess ? "opacity-0 absolute inset-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}>
              
              <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: dominantColor }} />
                
                {/* 🍏 아이콘 렌더링 로직 변경 */}
                {item.category === 'case' && (
                  <div className="w-8 h-14 border-2 rounded-[6px] relative flex justify-end p-1" style={{ borderColor: dominantColor }}>...</div>
                )}
                {item.category === 'frame' && (
                  <div className="w-12 h-14 border-2 border-zinc-700 rounded-sm relative flex items-center justify-center">...</div>
                )}
                {item.category === 'collar' && (
                  <div className="w-12 h-12 border-[3px] rounded-full relative">...</div>
                )}
                
                {/* Wallet 클로즈업 */}
                {item.category === 'wallet' && (
                  <div className="w-12 h-16 border-2 rounded-lg relative flex flex-col items-center pt-2" style={{ borderColor: dominantColor }}>
                    <div className="w-7 h-4 border-t-2 border-l-2 border-r-2 rounded-t opacity-60" style={{ borderColor: dominantColor }} />
                    <div className="w-10 h-0.5 mt-1.5 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-10 h-0.5 mt-2 opacity-40" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* Harness 클로즈업 */}
                {item.category === 'harness' && (
                  <div className="w-16 h-16 relative flex flex-col items-center mt-2">
                    <div className="w-7 h-5 border-2 border-b-0 rounded-t-full mt-2" style={{ borderColor: dominantColor }} />
                    <div className="w-2 h-4 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-14 h-4 border-2 rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="absolute top-0 w-3 h-2 border-2 border-zinc-400 rounded-t-sm" />
                  </div>
                )}

                {/* Keyring 클로즈업 */}
                {item.category === 'keyring' && (
                  <div className="w-12 h-16 relative flex flex-col items-center">
                    <div className="w-5 h-5 border-2 rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="w-1 h-3 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-8 h-8 border-2 rounded-sm rotate-45 mt-2 relative flex items-center justify-center" style={{ borderColor: dominantColor }}>
                      <div className="w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: dominantColor }} />
                    </div>
                  </div>
                )}

                {/* Pendant 클로즈업 */}
                {item.category === 'pendant' && (
                  <div className="w-14 h-16 relative flex flex-col items-center pt-1">
                    <div className="w-2.5 h-2.5 border-2 rounded-full z-10 bg-zinc-950" style={{ borderColor: dominantColor }} />
                    <div className="w-12 h-12 border-[3px] rounded-full -mt-1 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,255,255,0.05)]" style={{ borderColor: dominantColor }}>
                      <div className="w-8 h-8 border-[1.5px] border-dashed rounded-full opacity-50" style={{ borderColor: dominantColor }} />
                    </div>
                  </div>
                )}
                {/* Strap 클로즈업 */}
                {item.category === 'strap' && (
                  <div className="w-8 h-20 border-2 rounded-full relative flex flex-col items-center pt-1.5" style={{ borderColor: dominantColor }}>
                    <div className="w-5 h-4 border-2 rounded-sm" style={{ borderColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-3 opacity-50 transition-all duration-1000 animate-pulse" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1.5 h-1.5 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 커스텀 다이아몬드 */}
                {!['case', 'frame', 'collar', 'wallet', 'harness', 'keyring', 'pendant','strap'].includes(item.category || '') && (
                   <div className="w-10 h-10 rotate-45 border-2" style={{ borderColor: dominantColor }}></div>
                )}
              </div>

              {/* 🍏 진정한 희소성의 시각화 (분모 포함) */}
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 relative" />
                <span className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase">
                  {remainingCount === null 
                    ? "Syncing Live Stock..." 
                    : remainingCount <= 0 
                      ? `Fully Sold Out (${totalEditions} Editions)` 
                      : `${remainingCount} / ${totalEditions} Editions Left`}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h2>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-700 px-2 py-0.5 rounded">
                  Bespoke Color: {dominantColor || "Signature"}
                </span>
              </div>

              <div className="w-full bg-black border border-zinc-800 rounded-3xl p-5 mb-4 flex justify-between items-center">
                <span className="text-xs text-zinc-500 tracking-widest uppercase font-bold">Exclusive Price</span>
                <span className="text-xl font-mono font-bold text-white">{item.price}</span>
              </div>

              {/* 🍏 장인의 여정 (Bespoke Process) 섹션 */}
              <div className="w-full mb-8 pt-6 border-t border-zinc-900 relative">
                
                {/* 💎 1. 시네마틱 궤적과 텍스트 도미노 점화를 위한 수학적 키프레임 */}
                <style>{`
                  @keyframes sweep-light {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                  }
                  /* 🍏 빛이 닿는 0.75초 동안만 글자와 노드가 공중으로 살짝 뜨며 빛을 발산합니다 */
                  @keyframes sync-illuminate {
                    0%, 25%, 100% { 
                      opacity: 0.3; /* 기본 상태는 어둡게 대기 */
                      filter: brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0));
                      transform: translateY(0) scale(1);
                    }
                    12.5% { 
                      opacity: 1; /* 빛이 닿는 정점 */
                      filter: brightness(1.5) drop-shadow(0 0 12px var(--glow-color));
                      transform: translateY(-3px) scale(1.05);
                    }
                  }
                  /* 🍏 텍스트가 점화될 때 파동(Ping)도 같은 속도로 터지게 맞춤 설계 */
                  @keyframes custom-ping {
                    0% { transform: scale(1); opacity: 1; }
                    15% { transform: scale(3.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 0; }
                  }
                `}</style>

                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Bespoke Journey</h3>
                    <span className="text-[9px] text-zinc-600 font-mono">{item.category === 'frame' ? 'Artisan Grade' : 'Master Craftsmanship'}</span>
                </div>

                <div className="relative flex justify-between">
                    {/* 2. 어두운 기본 뼈대 선 */}
                    <div className="absolute top-4 left-0 w-full h-[1px] bg-zinc-900 z-0" />
                    
                    {/* 3. 💎 파이프라인 빛의 궤적 (3초 동안 왼쪽에서 오른쪽으로 관통) */}
                    <div 
                      className="absolute top-4 left-0 w-full h-[1.5px] z-0 opacity-80"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${dominantColor || '#ffffff'} 50%, transparent 100%)`,
                        backgroundSize: '200% 100%',
                        animation: 'sweep-light 8s linear infinite'
                      }}
                    />
                    
                    {[
                    { step: "01", label: "Consult", desc: "아우라 분석" },
                    { step: "02", label: "Craft", desc: "장인 수작업" },
                    { step: "03", label: "Inspect", desc: "품질 검수" },
                    { step: "04", label: "Deliver", desc: "품격 있는 전달" }
                    ].map((proc, idx) => (
                    <div 
                      key={idx} 
                      className="relative z-10 flex flex-col items-center group cursor-default"
                      style={{
                        /* 4. 💎 전체 컨테이너에 도미노 일루미네이션 적용 (2초 간격으로 점화) */
                        '--glow-color': dominantColor || '#ffffff',
                        animation: 'sync-illuminate 8s ease-in-out infinite',
                        animationDelay: `${idx * 2}s`
                      } as React.CSSProperties}
                    >
                        
                        {/* 노드 원형 */}
                        <div className="w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-3 transition-colors group-hover:border-zinc-500 relative">
                          <span className="text-[8px] font-mono text-zinc-400">{proc.step}</span>
                        </div>
                        
                        {/* 텍스트 영역 (빛을 받으면 밝기(Brightness)가 증폭되며 화이트톤으로 변함) */}
                        <span className="text-[9px] font-bold text-zinc-400 mb-1 uppercase tracking-tighter">{proc.label}</span>
                        <span className="text-[8px] text-zinc-500 break-keep text-center">{proc.desc}</span>
                        
                        {/* 5. 💎 텍스트가 점화될 때 정수리에서 정확히 함께 터지는 빛의 파동 */}
                        <div 
                          className="absolute -top-1 w-1.5 h-1.5 rounded-full" 
                          style={{ 
                            backgroundColor: dominantColor || '#ffffff',
                            animation: 'custom-ping 8s cubic-bezier(0, 0, 0.2, 1) infinite',
                            animationDelay: `${idx * 2}s`     
                          }} 
                        />
                    </div>
                    ))}
                </div>
              </div>

              <button 
                onClick={handleSecureEdition}
                disabled={isSubmitting || remainingCount === 0} // 🍏 완판 시 버튼 비활성화
                className={`w-full h-14 font-extrabold text-[12px] tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  remainingCount === 0 
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed shadow-none" 
                  : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">SECURING YOUR EDITION...</span>
                ) : remainingCount === 0 ? (
                  <>SOLD OUT (완판)</>
                ) : (
                  <>Secure My Edition (선점하기)</>
                )}
              </button>
            </div>

            {/* 성공 화면 상태 (이전과 동일) */}
            <div className={`transition-all duration-500 flex flex-col items-center ${isSuccess ? "opacity-100 scale-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none scale-105"}`}>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-green-500 mb-6 shadow-[0_0_40px_rgba(34,197,94,0.2)] bg-green-500/10 backdrop-blur-md">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-white mb-2 uppercase tracking-tight">Allocation Secured</h2>
              <p className="text-[10px] font-bold text-zinc-500 tracking-[0.3em] uppercase mb-8 border border-zinc-800 px-3 py-1 rounded-full">
                {item.name}
              </p>
              
              <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center mb-6">
                <p className="text-sm text-zinc-300 font-light leading-relaxed break-keep">
                  고객님의 에디션 1개가 <strong className="text-white font-bold">성공적으로 홀딩(선점)</strong> 되었습니다. 
                  <br/><br/>
                  페어 현장에 위치한 <strong className="text-white font-bold text-blue-400">PAWTRAIT EDITION 컨시어지 데스크</strong>에 
                  이 화면을 보여주시고 결제를 완료하여 소유권을 최종 확정해 주십시오.
                </p>
              </div>

              <button 
                onClick={onClose}
                className="w-full h-14 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-2xl active:scale-95 transition-all"
              >
                Return to Vault
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
        ### 📄 src/components/modals/WaitlistModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase, @vercel/analytics`
* wb **Type/Intf:** `ConceptType`
* 🧩 **Component (Default):** `WaitlistModal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { track } from "@vercel/analytics";

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
  
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const [isAgreed, setIsAgreed] = useState(false);
  const [manualEmail, setManualEmail] = useState("");
  // 🍏 중복 예약 토스트 알림을 제어하는 스위치
  const [showDuplicateToast, setShowDuplicateToast] = useState(false);

  useEffect(() => {
    if (concept) setDisplayConcept(concept);
    
    if (isOpen) {
      checkUser();
    } else {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsAgreed(false);
        setManualEmail(""); 
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [concept, isOpen]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setCurrentUser({
        email: user.email || "", 
        name: user.user_metadata?.full_name || user.user_metadata?.name || "VIP Member"
      });
    } else {
      setCurrentUser(null);
    }
  };

  const handleSubmit = async () => {
    if (!displayConcept) return;
    
    if (!currentUser) {
      alert("로그인이 필요합니다.");
      return;
    }

    const finalEmail = currentUser.email || manualEmail.trim();

    if (!finalEmail || !finalEmail.includes('@')) {
      alert("초대장을 수신할 정확한 이메일 주소를 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // 🍏 [핵심 1] 중복 예약 검사: 이 유저가 해당 컨셉(제품)에 이미 줄을 섰는지 명부를 확인합니다.
      const { data: existingEntry } = await supabase
        .from('waitlists')
        .select('id')
        .eq('user_id', user?.id)
        .eq('concept_id', displayConcept.id);

      // 🍏 [핵심 2] 이미 예약 기록이 있다면, 우아하게 토스트를 띄웁니다.
      if (existingEntry && existingEntry.length > 0) {
        setShowDuplicateToast(true); // 토스트 스위치 ON
        setIsSubmitting(false);
        
        // 3초 뒤에 토스트가 사라지며 모달도 부드럽게 닫히도록 세팅
        setTimeout(() => {
          setShowDuplicateToast(false);
          onClose(); 
        }, 3000);
        return;
      }

      // 🍏 [핵심 3] 기록이 없다면 정상적으로 금고(DB)에 명단을 넣습니다.
      const { error } = await supabase
        .from('waitlists')
        .insert([
          { 
            user_id: user?.id, 
            concept_id: displayConcept.id,
            contact_email: finalEmail,
            contact_name: currentUser.name 
          }
        ]);

      if (error) throw error;

      // 성공 시 상태 변경 (입력 폼은 숨기고, 중앙 시네마틱 모달을 띄웁니다)
      setIsSuccess(true);
      
      // 3.5초 후 우아하게 전체 모달 닫기
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
      }, 3500);

    } catch (error) {
      console.error("대기열 등록 실패:", error);
      alert("대기열 등록에 실패했습니다. (콘솔 로그 확인)");
      setIsSubmitting(false);
    }
  };

  const needsEmailInput = currentUser && !currentUser.email;

  return (
    <div className={`fixed inset-0 z-[200] transition-all duration-500 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* 어두운 배경 (클릭 시 닫힘) */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={() => !isSuccess && onClose()} 
      />
      
      {/* 💎 1. 입력 폼 바텀 시트 (성공 시 아래로 스르륵 숨겨짐) */}
      <div className={`absolute bottom-0 left-0 w-full bg-zinc-950 border-t border-zinc-800 rounded-t-[32px] p-6 pb-12 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen && !isSuccess ? "translate-y-0" : "translate-y-full"} shadow-[0_-20px_50px_rgba(0,0,0,0.8)]`}>
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto mb-8" />
        
        <div className="mb-8">
          <span className="text-zinc-400 font-bold tracking-[0.3em] text-[10px] uppercase border border-zinc-800 bg-black px-3 py-1.5 rounded-full mb-4 inline-block shadow-inner">VIP Waitlist</span>
          <h2 className="text-3xl font-serif text-white mb-2 tracking-wide">{displayConcept?.name}</h2>
          <p className="text-zinc-500 text-xs leading-relaxed tracking-widest uppercase">{displayConcept?.desc}</p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-2xl p-5 mb-6">
          <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase mb-3 border-b border-zinc-900 pb-2">초대장 수신 정보</p>
          {currentUser ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold border border-zinc-800">
                  {currentUser.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-white font-bold">{currentUser.name}</p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {currentUser.email ? currentUser.email : "카카오 간편 로그인 고객"}
                  </p>
                </div>
              </div>
              {needsEmailInput && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-500">
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                    초대장을 수신할 이메일을 입력해 주세요 <span className="text-amber-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="collector@example.com"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-white focus:bg-zinc-800 transition-colors"
                  />
                </div>
              )}
            </div>
          ) : (
            <p className="text-xs text-red-400 italic">로그인이 필요한 서비스입니다.</p>
          )}
        </div>

        <label className="flex items-start gap-3 mb-8 cursor-pointer group">
          <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
            <input 
              type="checkbox" 
              className="peer appearance-none w-5 h-5 border border-zinc-600 rounded bg-black checked:bg-white checked:border-white transition-colors cursor-pointer"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <svg className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1.5 5 5 8.5 12.5 1"></polyline>
            </svg>
          </div>
          <div className="flex-1">
            <p className={`text-xs transition-colors ${isAgreed ? 'text-white font-bold' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
              [필수] 프라이빗 초대장 발송을 위한 이메일 수집 및 마케팅 수신에 동의합니다.
            </p>
          </div>
        </label>

        <button 
          onClick={handleSubmit}
          disabled={Boolean(isSubmitting || !isAgreed || !currentUser || (needsEmailInput && !manualEmail))}
          className={`w-full h-14 rounded-2xl flex items-center justify-center gap-2 font-bold tracking-widest uppercase transition-all duration-300 ${
            isAgreed && currentUser && (!needsEmailInput || manualEmail.includes('@')) && !isSubmitting
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-zinc-200 active:scale-[0.98]"
              : "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? (
            <span className="animate-pulse text-xs">Processing...</span>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span className="text-xs">VIP 우선 예약권 발급받기</span>
            </>
          )}
        </button>
      </div>

      {/* 💎 2. 시네마틱 성공 모달 (성공 시 화면 정중앙에 크게 등장) */}
      <div className={`fixed inset-0 z-[210] flex flex-col items-center justify-center transition-all duration-1000 ${isSuccess ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <div className={`relative z-10 flex flex-col items-center transform transition-all duration-1000 delay-100 ${isSuccess ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}>
          <div className="w-28 h-28 rounded-full border border-zinc-800 bg-black flex items-center justify-center mb-10 shadow-[0_0_80px_rgba(255,255,255,0.15)] relative">
            <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20" />
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 className="text-4xl font-serif text-white tracking-[0.2em] mb-6 uppercase text-center">Invitation<br/>Secured</h3>
          <p className="text-zinc-400 text-sm text-center px-8 leading-relaxed tracking-widest uppercase">
            귀하의 자리가 안전하게 확보되었습니다.<br/><br/>
            <span className="text-white font-mono text-base border-b border-zinc-800 pb-1 px-4">{currentUser?.email || manualEmail}</span><br/><br/>
            정식 런칭 시 가장 먼저 초대장을 발송해 드리겠습니다.
          </p>
        </div>
      </div>

      {/* 💎 럭셔리 중복 예약 안내 토스트 */}
      {showDuplicateToast && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-zinc-900/98 backdrop-blur-2xl border border-zinc-600 text-center px-8 py-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-[100] animate-in slide-in-from-bottom-12 fade-in duration-500">
          
          <div className="w-10 h-1 bg-zinc-500 rounded-full mx-auto mb-6" />
          
          <p className="text-xs md:text-sm text-white font-bold tracking-[0.3em] uppercase mb-3">
            Already Reserved
          </p>
          
          {/* 🍏 [핵심] 유저의 이름이 있으면 "Eugene 컬렉터님,", 없으면 "컬렉터님," 으로 우아하게 출력됩니다. */}
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed break-keep font-light">
            <strong className="text-white font-medium">{currentUser?.name ? `${currentUser.name} ` : ''}</strong>
            컬렉터님, 이미 해당 에디션의 VIP 우선 예약이 완벽하게 완료된 상태입니다.
          </p>
          
        </div>
      )}

    </div>
  );
}
        ### 📄 src/components/vault/LumenCustomSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase, @/components/modals/CheckoutModal`
* 🧩 **Component (Default):** `LumenCustomSection`
* ww **Hooks:** `useEffect`

        ```typescript
        "use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CheckoutItem } from "@/components/modals/CheckoutModal";

interface LumenCustomSectionProps {
  dominantColor: string;
  imageUrl: string;
  onCheckout: (item: CheckoutItem) => void;
}

export default function LumenCustomSection({ dominantColor, imageUrl, onCheckout }: LumenCustomSectionProps) {
  const [copyIndex, setCopyIndex] = useState<number>(0);
  // 🍏 어드민에서 활성화된 상품들을 담을 상태
  const [liveEditions, setLiveEditions] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<CheckoutItem | null>(null);

  // 🍏 금고가 열릴 때, '전시 중(is_active=true)'인 상품만 은밀하게 불러옵니다.
  useEffect(() => {
    const fetchLiveEditions = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true }); // 등록순 정렬

      if (data && !error) {
        setLiveEditions(data);
      }
    };
    fetchLiveEditions();
  }, []);

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
      quote: '"가장 소중한 것은 눈에 보이지 않지만, 곁에 둘 수 있습니다."',
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
        <h2 className="text-2xl font-serif font-bold text-white mb-4">PAWTRAIT EDITION Custom</h2>
        
        <p className="text-xs text-zinc-400 font-light leading-[1.8] mb-8 word-break-keep transition-opacity duration-1000">
          <strong className="text-white font-serif italic text-sm block mb-3">{currentCopy.quote}</strong>
          {currentCopy.text1}<br/><br/>{currentCopy.text2}
          <span className="font-mono font-bold px-1.5 py-0.5 rounded-md bg-black/50 border border-zinc-800 text-[10px] mx-1 shadow-lg relative inline-block -translate-y-[1px]" style={{color: dominantColor}}>
            {dominantColor}
          </span>
          {currentCopy.text3}
        </p>

        <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-12 relative z-10">
        {liveEditions.length === 0 ? (
          <div className="col-span-3 text-center text-zinc-600 text-xs tracking-widest uppercase py-10">
            현재 런칭된 에디션이 없습니다.
          </div>
        ) : (
          liveEditions.map((edition) => {
            const cat = edition.category || edition.id;

            return (
              <button
                key={edition.id}
                // 🍏 핵심: 클릭 시 부모(Vault)가 관리하는 우아한 바텀 시트 모달을 호출합니다.
                onClick={() => onCheckout({
                  id: edition.id,
                  name: edition.name,
                  price: edition.price,
                  category: edition.category,
                  imageUrl: imageUrl
                })}
                className="relative h-28 bg-black/60 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-zinc-500 hover:bg-zinc-900/80 transition-all group overflow-hidden active:scale-95"
              >
                {/* 배경 컬러 레이어 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: dominantColor }} />

                {/* 🍏 카테고리 1: Case (호버 시 렌즈 쪽으로 살짝 기울어지며 입체감 부여) */}
                {cat === 'case' && (
                <div 
                    className="w-7 h-12 border-[1.5px] rounded-[6px] relative flex justify-end p-1 transition-all duration-500 group-hover:border-white group-hover:scale-105 group-hover:-rotate-2 shadow-2xl" 
                    style={{ borderColor: dominantColor }}
                >
                    <div className="w-1.5 h-1.5 rounded-sm transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: dominantColor }} />
                </div>
                )}

                {/* 🍏 카테고리 2: Frame (호버 시 액자 속 사진이 줌인(Zoom-in)되는 듯한 효과) */}
                {cat === 'frame' && (
                <div className="w-10 h-12 border-[1.5px] border-zinc-700 rounded-sm relative flex items-center justify-center transition-all duration-500 group-hover:border-zinc-500 group-hover:scale-105">
                    <div 
                    className="w-6 h-8 border border-dashed flex items-center justify-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ borderColor: dominantColor }}
                    >
                    <div 
                        className="w-3 h-3 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-100" 
                        style={{ backgroundColor: dominantColor }} 
                    />
                    </div>
                </div>
                )}

                {/* Collar */}
                {cat === 'collar' && (
                  <div className="w-10 h-10 border-[2px] rounded-full relative transition-transform duration-700 group-hover:rotate-12" style={{ borderColor: dominantColor }}>
                    <div className="absolute -right-1 top-1 w-2 h-4 bg-zinc-400 rounded-sm border border-zinc-800" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-zinc-500" />
                  </div>
                )}

                {/* 🍏 카테고리 4: Card Wallet (카드지갑 - 포켓과 카드의 우아한 겹침) */}
                {cat === 'wallet' && (
                  <div className="w-9 h-12 border-[1.5px] rounded-md relative flex flex-col items-center pt-1.5 transition-transform duration-500 group-hover:-translate-y-1" style={{ borderColor: dominantColor }}>
                    <div className="w-5 h-3 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] rounded-t-sm transition-opacity duration-500 group-hover:opacity-100 opacity-60" style={{ borderColor: dominantColor }} />
                    <div className="w-7 h-[1.5px] mt-1 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-7 h-[1.5px] mt-1.5 opacity-40" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 🍏 카테고리 5: Pet Harness (하네스 - 곡선 스트랩과 D링의 구조미) */}
                {cat === 'harness' && (
                  <div className="w-12 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:scale-110">
                    <div className="w-5 h-4 border-[2px] border-b-0 rounded-t-full mt-1.5 transition-colors duration-500" style={{ borderColor: dominantColor }} />
                    <div className="w-1.5 h-3 opacity-80" style={{ backgroundColor: dominantColor }} />
                    <div className="w-10 h-3 border-[2px] rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="absolute top-0 w-2.5 h-1.5 border-[1.5px] border-zinc-400 rounded-t-sm" />
                  </div>
                )}

                {/* 🍏 카테고리 6: Keyring (키링 - 체인과 마름모 참의 찰랑거림) */}
                {cat === 'keyring' && (
                  <div className="w-8 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:rotate-12 group-hover:translate-x-1">
                    <div className="w-3.5 h-3.5 border-[2px] rounded-full" style={{ borderColor: dominantColor }} />
                    <div className="w-0.5 h-2.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-5 h-5 border-[1.5px] rounded-sm rotate-45 mt-1 relative flex items-center justify-center" style={{ borderColor: dominantColor }}>
                      <div className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: dominantColor }} />
                    </div>
                  </div>
                )}

                {/* 🍏 카테고리 7: Name Pendant (팬던트 - 정교하게 세공된 금속 네임택) */}
                {cat === 'pendant' && (
                  <div className="w-9 h-12 relative flex flex-col items-center transition-transform duration-700 group-hover:rotate-[15deg]">
                    <div className="w-1.5 h-1.5 border-[1.5px] rounded-full z-10 bg-zinc-950" style={{ borderColor: dominantColor }} />
                    <div className="w-8 h-8 border-[2px] rounded-full -mt-0.5 flex items-center justify-center relative shadow-[0_0_10px_rgba(255,255,255,0.05)]" style={{ borderColor: dominantColor }}>
                      <div className="w-5 h-5 border border-dashed rounded-full opacity-50 transition-transform duration-1000 group-hover:rotate-90" style={{ borderColor: dominantColor }} />
                    </div>
                  </div>
                )}
                {/* 🍏 카테고리 8: Leather Strap (가죽 스트랩 - 버클과 길게 뻗은 실루엣) */}
                {cat === 'strap' && (
                  <div className="w-5 h-14 border-[1.5px] rounded-full relative flex flex-col items-center pt-1 transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:rotate-3" style={{ borderColor: dominantColor }}>
                    <div className="w-3.5 h-2.5 border-[1.5px] rounded-sm" style={{ borderColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-2 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-1.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                    <div className="w-1 h-1 rounded-full mt-1.5 opacity-50" style={{ backgroundColor: dominantColor }} />
                  </div>
                )}

                {/* 🍏 예외: 알 수 없는 카테고리를 위한 다이아몬드 (기존 배열에 4개 추가) */}
                {!['case', 'frame', 'collar', 'wallet', 'harness', 'keyring', 'pendant','strap'].includes(cat) && (
                  <div className="w-8 h-8 rotate-45 border-[1.5px] transition-colors duration-500" style={{ borderColor: dominantColor }}></div>
                )}

                {/* 텍스트 라벨 (DB에 저장된 카테고리명을 표시) */}
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">
                  {cat}
                </span>
              </button>
            );
          })
        )}
      </div>
      </div>
    </div>
  );
}
        ### 📄 src/components/vault/EditorialTab.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/navigation, react`
* 🧩 **Component (Default):** `EditorialTab`
* ww **Hooks:** `useRouter, useState`

        ```typescript
        "use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface EditorialType { 
  id: string; 
  slug: string; 
  title: string; 
  image_url: string; 
  content: string; 
  created_at?: string; 
}

export default function EditorialTab({ editorials }: { editorials: EditorialType[] }) {
  const router = useRouter();
  
  // 🍏 처음에 보여줄 매거진의 개수 (예: 5개)
  const [visibleCount, setVisibleCount] = useState(5);

  // 🍏 전체 데이터 중 visibleCount 만큼만 잘라서 보여줍니다.
  const visibleEditorials = editorials.slice(0, visibleCount);

  // 🍏 더 보기 버튼을 누르면 보여줄 개수를 5개 더 늘립니다.
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="px-6 py-10 border-t border-zinc-900 bg-black">
      <div className="mb-12 text-center">
        <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">PAWTRAIT Editorial</h3>
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">The Brand Storytelling</p>
      </div>
      
      <div className="flex flex-col gap-12">
        {/* 🍏 잘라낸 데이터(visibleEditorials)만 렌더링합니다 */}
        {visibleEditorials.map((edit) => (
          <article key={edit.id} className="cursor-pointer group animate-in fade-in slide-in-from-bottom-4 duration-700" onClick={() => router.push(`/editorial/${edit.slug}`)}>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 border border-zinc-800/50">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform grayscale duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
            </div>
            <div className="px-2">
              {edit.created_at && (
                <p className="text-[10px] text-zinc-500 font-mono mb-2 tracking-widest uppercase">
                  {new Date(edit.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              )}
              <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light">{edit.content}</p>
            </div>
          </article>
        ))}
      </div>

      {/* 🍏 숨겨진 데이터가 더 남아있을 때만 '더 보기' 버튼을 보여줍니다 */}
      {visibleCount < editorials.length && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Discover More</span>
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
      
      {/* 모든 글을 다 보았을 때 나타나는 우아한 마침표 */}
      {visibleCount >= editorials.length && editorials.length > 0 && (
        <div className="mt-20 text-center">
          <div className="w-1 h-1 bg-zinc-700 rounded-full mx-auto mb-4" />
          <p className="text-[9px] text-zinc-600 tracking-[0.4em] uppercase font-serif italic">End of Archive</p>
        </div>
      )}
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
  setDominantColor: (color: string) => void; // 🍏 추가됨
  colorPalette: string[];                    // 🍏 추가됨
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
  displayPetBirth,
  setDominantColor,
  colorPalette
}: PrivateVaultTabProps) {
  
  // 🍏 Z축 아카이브 서랍을 열고 닫는 상태
  const [isArchiveSheetOpen, setIsArchiveSheetOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false); // 🍏 추가: 팔레트 팝업 상태

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
        onClick={() => {
          setIsPaletteOpen(false); // 🍏 사진을 넘길 때는 열려있던 팔레트를 닫습니다.
          handleNextImage();
        }}
      >
        <div className="aspect-[3/4] rounded-[32px] overflow-hidden border border-zinc-800 relative shadow-2xl bg-zinc-900 z-10 transition-colors duration-1000" style={{ boxShadow: `0 20px 50px -20px ${dominantColor}40` }}>
          <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url('${displayImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-[9px] font-mono text-white/50 tracking-widest mb-1.5">
                    ID: {displayId}
                </p>
                
                {/* 🍏 색상 동기화: 강아지 이름에 dominantColor 적용 */}
                <h2 
                  className="text-4xl md:text-5xl font-serif font-bold drop-shadow-xl tracking-tighter uppercase mb-1 transition-colors duration-1000"
                  style={{ color: dominantColor || "#ffffff" }}
                >
                    {displayPetName}
                </h2>
                
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                    BORN {displayPetBirth}
                </p>
              </div>

              {/* 🍏 인터랙티브 오라(Aura) 팝업 메뉴 */}
              <div className="relative flex flex-col items-center gap-2">
                
                {/* 숨겨진 팔레트 리스트 */}
                <div className={`absolute bottom-full mb-3 right--1 flex flex-col gap-2 p-2.5 bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-full transition-all duration-500 origin-bottom ${isPaletteOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
                  {colorPalette.map((color, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation(); // 🍏 클릭 시 사진이 넘어가는 것을 방지
                        setDominantColor(color); // 🍏 색상 변경 리모컨 작동!
                        setIsPaletteOpen(false);
                      }}
                      className="w-8 h-8 rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-90 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* 메인 Aura 버튼 */}
                <div 
                    onClick={(e) => {
                      e.stopPropagation(); // 🍏 클릭 시 사진 넘김 방지
                      setIsPaletteOpen(!isPaletteOpen); // 팝업 토글
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer active:scale-95 transition-all duration-500" 
                    style={{ backgroundColor: dominantColor }} 
                />
                <span className="text-[7px] font-mono text-white/70 tracking-widest uppercase">
                    Aura
                </span>
              </div>
          </div>

          {/* 🍏 색상 동기화: 다이내믹 모션 인디케이터에 dominantColor 적용 */}
          {vaultImages.length > 1 && (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 z-20">
              {vaultImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    idx === currentImgIndex 
                      ? 'w-8' 
                      : 'w-1.5 bg-white/40'
                  }`} 
                  style={idx === currentImgIndex ? { 
                    backgroundColor: dominantColor || '#ffffff',
                    boxShadow: `0 0 15px ${dominantColor}80` 
                  } : {}}
                />
              ))}
            </div>
          )}

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
        <LumenCustomSection dominantColor={dominantColor} imageUrl={displayImage} onCheckout={onCheckout} />
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
        * 🔗 **Imports:** `react, @/components/modals/WaitlistModal`
* 🧩 **Component (Default):** `MuseTab`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import { useState } from "react";
import { ConceptType } from "@/components/modals/WaitlistModal";

interface MuseTabProps {
  onOpenWaitlist: (concept: ConceptType) => void;
}

// 🍏 개별 컨셉 카드를 관리하는 독립된 슬라이더 컴포넌트
function ConceptCard({ concept, onOpenWaitlist }: { concept: any, onOpenWaitlist: (concept: ConceptType) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = concept.models[activeIndex];

  // 🍏 [핵심] 사진을 터치하면 다음 사진으로 부드럽게 넘어갑니다 (마지막 사진이면 다시 처음으로)
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (concept.models.length > 1) {
      setActiveIndex((prev) => (prev + 1) % concept.models.length);
    }
  };

  return (
    <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
      
      {/* 1. Header */}
      <div className="px-5 py-4 flex justify-between items-center border-b border-zinc-900 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full bg-zinc-800 bg-cover bg-center border border-zinc-800 transition-all duration-700" 
            style={{ backgroundImage: `url('${activeModel.imageUrl}')` }} 
          />
          <div className="text-sm font-bold text-white transition-all duration-300">
            {activeModel.modelName} 
            <span className="text-zinc-500 font-normal text-[10px] ml-1.5 uppercase tracking-widest">{activeModel.breed}</span>
          </div>
        </div>
        <div className={`${concept.tagColor} text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full`}>
          {concept.name}
        </div>
      </div>

      {/* 2. Main Image Slider (사진 전체가 거대한 '다음 버튼'이 됩니다) */}
      <div 
        className="relative aspect-square w-full overflow-hidden group bg-zinc-900 cursor-pointer"
        onClick={handleNextImage} 
      >
        {concept.models.map((model: any, idx: number) => (
          <div 
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out
              ${idx === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
            style={{ backgroundImage: `url('${model.imageUrl}')` }}
            // 기존에 있던 onClick(모달 호출)은 여기서 완전히 삭제했습니다.
          />
        ))}

        {/* 💎 럭셔리 네비게이션 도트 (시각적 안내 역할 + 터치 영역 대폭 확대) */}
        {concept.models.length > 1 && (
          <div className="absolute bottom-5 left-0 w-full flex justify-center gap-1 z-20">
                {concept.models.map((_: any, idx: number) => (
                <button
                key={idx}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setActiveIndex(idx); 
                }}
                className="p-2" // 터치하기 쉽게 투명한 패딩 영역을 넓혔습니다.
              >
                <div className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'bg-white w-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/40 w-1.5'
                }`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Footer & Action */}
      <div className="p-5 flex flex-col gap-5 bg-black/60 backdrop-blur-md border-t border-zinc-900">
        <p className="text-xs text-zinc-300 font-light tracking-wide leading-relaxed min-h-[40px] transition-all duration-300">
          {activeModel.desc}
        </p>
        {/* 🍏 모달은 오직 이 버튼을 눌렀을 때만 열립니다. */}
        <button 
          onClick={() => onOpenWaitlist({ id: concept.id, name: concept.name, desc: activeModel.desc })}
          className="w-full h-12 text-[11px] font-bold tracking-[0.2em] uppercase bg-white text-black rounded-2xl active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          Reserve This Concept
        </button>
      </div>
    </div>
  );
}

export default function MuseTab({ onOpenWaitlist }: MuseTabProps) {
  // 🍏 럭셔리 갤러리 데이터 구조로 전면 개편
  const museumConcepts = [
    {
      id: "dogwick",
      name: "Dog Wick",
      tagColor: "text-orange-500 border-orange-500/30 bg-orange-500/10",
      models: [
        {
          modelName: "JJANGU",
          breed: "Pomeranian",
          desc: "어둠 속에서 빛나는 강렬한 눈빛, 누아르의 정석.",
          imageUrl: "/images/dogwick/dogwick_01.jpg",
        },
        {
          modelName: "MAKDUNG",
          breed: "Maltese",
          desc: "순백의 코트 뒤에 감춰진 묵직하고 서늘한 카리스마.",
          imageUrl: "/images/dogwick/dogwick_02.jpg",
        },
        {
          modelName: "MONGSOON",
          breed: "Poodle",
          desc: "어둠을 가르는 우아하고 날카로운 실루엣의 완성.",
          imageUrl: "/images/dogwick/dogwick_03.jpg",
        },
        {
          modelName: "LAND",
          breed: "Retriever",
          desc: "흔들림 없는 눈빛이 뿜어내는 범접할 수 없는 아우라.",
          imageUrl: "/images/dogwick/dogwick_04.jpg",
        },
        {
          modelName: "JOY",
          breed: "Bichon Frise",
          desc: "부드러움 속에 숨겨진 강인하고 에너제틱한 생명력.",
          imageUrl: "/images/dogwick/dogwick_05.jpg",
        }
      ]
    },
    {
      id: "undercut",
      name: "Under-cut",
      tagColor: "text-purple-500 border-purple-500/30 bg-purple-500/10",
      models: [
        {
          modelName: "LUNA",
          breed: "Pomeranian",
          desc: "강화유리 아래에서 포착된 가장 순수하고 유니크한 시선.",
          imageUrl: "/images/undercut_04.png",
        }
      ]
    }
  ];

  return (
    <div className="transition-all duration-500 ease-in-out">
      {/* Muse Intro */}
      <div className="px-6 pt-10 pb-2 text-zinc-400 text-sm word-break-keep leading-relaxed">
        견생네컷 X 사진작가의 콜라보에서 탄생할 최상위 1% 마스터피스들을 감상하십시오. 해당 컨셉의 <b>VIP 우선 예약 대기열(Waitlist)</b>에 등록할 수 있습니다.
      </div>

      {/* Feed List */}
      <div className="flex flex-col gap-10 px-6 py-8 pb-24">
        {museumConcepts.map((concept) => (
          <ConceptCard 
            key={concept.id} 
            concept={concept} 
            onOpenWaitlist={onOpenWaitlist} 
          />
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