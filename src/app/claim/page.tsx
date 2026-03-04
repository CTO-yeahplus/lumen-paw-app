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

        setAssetData({ id: finalId, chemistry: chemistry, timestamp: formattedDate });
        sessionStorage.setItem("lumen_asset_id", finalId);
        sessionStorage.setItem("lumen_asset_date", formattedDate);

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
          sessionStorage.setItem("lumen_extracted_image", localImageUrl);

          // 🍏 [핵심] 원본 이미지를 추출해낸 순간 햅틱 피드백(두둥!) 발동
          if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate([100, 50, 150]); 
          }
        }
      } catch (error) {
        console.error("Asset Decryption Failed:", error);
      } finally {
        setTimeout(() => {
          setIsSyncing(false);
          setIsLoginModalOpen(true);
          // 🍏 모달이 올라올 때 한 번 더 짧은 진동
          if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(50);
        }, 2000); 
      }
    };

    processAsset();
  }, [sourceUrl]);

  return (
    <main className="relative w-full h-[100dvh] bg-black text-white overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* 🍏 기본 이미지 경로 변경 */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale blur-2xl scale-105 transition-all duration-1000" 
        style={{ backgroundImage: extractedImageUrl ? `url('${extractedImageUrl}')` : "url('/images/img_01.png')" }} 
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Syncing Animation State (이전과 동일) */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full px-6 transition-opacity duration-1000 ${isSyncing ? "opacity-100" : "opacity-0"}`}>
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping opacity-50" style={{ animationDuration: '2s' }} />
          <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.8)]" />
        </div>
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-8 text-white">Decrypting Asset</h2>
        <div className="w-full max-w-sm bg-black/60 border border-zinc-800 rounded-3xl p-6 backdrop-blur-xl font-mono text-sm text-zinc-400 flex flex-col gap-4 shadow-2xl">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
            <span>CONNECTION</span>
            <span className="text-green-400 flex items-center gap-1.5 font-bold"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> SECURE</span>
          </div>
          <div className="flex justify-between items-center">
            <span>ASSET_ID</span><span className="text-white font-bold">{assetData.id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>DATE</span><span className="text-white">{assetData.timestamp}</span>
          </div>
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

      {/* 🍏 QR 진입이므로 isFromQR={true} 전달 */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} isFromQR={true} />
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