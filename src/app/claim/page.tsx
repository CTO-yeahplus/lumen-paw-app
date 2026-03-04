"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import JSZip from "jszip";
import LoginModal from "@/components/modals/LoginModal";

function ClaimContent() {
  const searchParams = useSearchParams();
  const sourceUrl = searchParams.get("source_url");
  
  const [isSyncing, setIsSyncing] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [assetData, setAssetData] = useState({ id: "Unknown", chemistry: "passion", timestamp: "Unknown" });
  const [extractedImageUrl, setExtractedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const processAsset = async () => {
      if (!sourceUrl) return;

      try {
        const decodedUrl = decodeURIComponent(sourceUrl);
        const urlObj = new URL(decodedUrl);
        
        const folderPath = urlObj.searchParams.get("folderPath") || "";
        const chemistry = urlObj.searchParams.get("chemistry") || "passion";
        const dateStr = urlObj.searchParams.get("date");
        const extractedId = folderPath.split("/").pop() || "LM-ASSET";
        
        const dateObj = dateStr ? new Date(parseInt(dateStr)) : new Date();
        const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;
        
        const finalId = extractedId.substring(0, 8).toUpperCase();

        setAssetData({
          id: finalId,
          chemistry: chemistry,
          timestamp: formattedDate
        });

        // 🍏 1. 세션 스토리지에 텍스트 데이터 1차 저장 (Vault에서 쓰기 위함)
        sessionStorage.setItem("lumen_asset_id", finalId);
        sessionStorage.setItem("lumen_asset_date", formattedDate);

        // ZIP 해제 로직
        const zipUrl = `https://release-renewal-s3.s3.ap-northeast-2.amazonaws.com${folderPath}/original.zip`;
        const response = await fetch(zipUrl);
        const blob = await response.blob();
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(blob);
        
        const files = Object.keys(loadedZip.files);
        const imageFileKey = files.find(filename => filename.match(/\.(jpg|jpeg|png)$/i));
        
        if (imageFileKey) {
          const imageBlob = await loadedZip.files[imageFileKey].async("blob");
          const localImageUrl = URL.createObjectURL(imageBlob);
          setExtractedImageUrl(localImageUrl);
          
          // 🍏 2. 추출된 이미지 주소(Blob)를 세션 스토리지에 저장!
          sessionStorage.setItem("lumen_extracted_image", localImageUrl);
        }

      } catch (error) {
        console.error("Asset Decryption Failed:", error);
      } finally {
        setTimeout(() => {
          setIsSyncing(false);
          setIsLoginModalOpen(true);
        }, 2000); 
      }
    };

    processAsset();
  }, [sourceUrl]);

  return (
    <main className="relative w-full h-[100dvh] bg-black text-white overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* 🍏 배경 이미지에 블러를 주고 은은하게 비치게 만듦 */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale blur-2xl scale-105 transition-all duration-1000" 
        style={{ backgroundImage: extractedImageUrl ? `url('${extractedImageUrl}')` : "url('/images/model_01.png')" }} 
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Syncing Animation State */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full px-6 transition-opacity duration-1000 ${isSyncing ? "opacity-100" : "opacity-0"}`}>
        
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping opacity-50" style={{ animationDuration: '2s' }} />
          <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.8)]" />
        </div>

        <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-8 text-white">Decrypting Asset</h2>
        
        <div className="w-full max-w-sm bg-black/60 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl font-mono text-sm text-zinc-400 flex flex-col gap-4 shadow-2xl">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <span>CONNECTION</span>
            <span className="text-green-400 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> SECURE
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>ASSET_ID</span>
            <span className="text-white font-bold">{assetData.id}</span>
          </div>
          {/* 🍏 날짜 데이터 UI 추가 */}
          <div className="flex justify-between items-center">
            <span>DATE</span>
            <span className="text-white">{assetData.timestamp}</span>
          </div>
          
          {/* 🍏 심장 펄스와 함께 커진 Fetching UI */}
          <div className="mt-6 flex items-center justify-center gap-3 bg-zinc-900/50 py-3 rounded-xl border border-zinc-800">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" style={{ animationDuration: '1s' }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            <span className="text-white font-bold tracking-widest text-xs animate-pulse">
              {extractedImageUrl ? "ASSET SECURED" : "FETCHING HIGH-RES DATA..."}
            </span>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </main>
  );
}

export default function ClaimPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ClaimContent />
    </Suspense>
  );
}