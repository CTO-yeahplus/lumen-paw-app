import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // 💎 [추가] 외부 저장소의 이미지를 Vercel이 압축할 수 있도록 허용합니다.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // Supabase 금고 도메인 허용
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // AWS S3 도메인 허용
      }
    ],
  },
};

export default nextConfig;