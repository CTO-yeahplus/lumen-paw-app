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