"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AddressClaimPage() {
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