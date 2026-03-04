"use client";
import { useState } from "react";

export default function AdminSenderPage() {
  const [phone, setPhone] = useState("");
  const [assetId, setAssetId] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return alert("전화번호를 정확히 입력해주세요.");
    
    setStatus("sending");
    
    // 실제로는 여기서 백엔드(FCM/Alimtalk API) 호출
    setTimeout(() => {
      setStatus("success");
      setPhone(""); // 초기화
      setAssetId("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1000);
  };

  return (
    <main className="w-full min-h-[100dvh] bg-zinc-950 text-white flex flex-col font-sans">
      
      {/* 🍏 Admin Header */}
      <header className="bg-black border-b border-zinc-800 p-6 pt-12">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-500 font-bold text-[10px] tracking-widest uppercase mb-1">Staff Only</div>
            <h1 className="text-xl font-bold">LUMEN Quick Sender</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        </div>
      </header>

      {/* 🍏 Sender Form */}
      <div className="flex-1 p-6 flex flex-col justify-center max-w-md mx-auto w-full">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
          <h2 className="text-lg font-bold mb-6 text-center">알림톡 발송 (디지털 금고)</h2>
          
          <form onSubmit={handleSend} className="space-y-5">
            
            {/* Asset ID Input */}
            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">1. 사진 고유번호 (Asset ID)</label>
              <input 
                type="text" 
                value={assetId}
                onChange={(e) => setAssetId(e.target.value)}
                placeholder="예: LM-00123"
                className="w-full bg-black border border-zinc-700 text-white rounded-xl h-14 px-4 font-mono text-lg focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            {/* Phone Input */}
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

            {/* Submit Button */}
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
                  카카오 알림톡 전송
                </>
              )}
              {status === "sending" && <span className="animate-pulse">발송 중...</span>}
              {status === "success" && "발송 완료!"}
            </button>
          </form>
        </div>

        {/* 발송 가이드 */}
        <div className="mt-8 text-center text-zinc-500 text-xs leading-relaxed">
          고객에게 알림톡이 전송되면, 고객은 카카오톡 대화창 내의<br/>
          <b className="text-zinc-300">[내 디지털 금고 열기]</b> 버튼을 눌러 앱으로 즉시 진입합니다.
        </div>
      </div>
    </main>
  );
}