// src/app/api/admin/members/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 💎 관리자 전용 마스터키(Service Role Key)를 사용하여 최고 권한으로 접근합니다.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    // 1. Supabase Auth 시스템에서 가입된 모든 유저 명부를 가져옵니다.
    const { data: { users }, error: authError } = await supabaseAdmin.auth.admin.listUsers();
    if (authError) throw authError;

    // 2. 각 유저가 보유한 자산(마스터피스)과 결제 내역(프리오더) 데이터를 한 번에 쓸어옵니다.
    const { data: orders } = await supabaseAdmin.from('pre_orders').select('user_id, status, item_name');
    const { data: masterpieces } = await supabaseAdmin.from('masterpieces').select('user_id');

    // 3. 유저 명부와 통계 데이터를 우아하게 병합합니다.
    const members = users.map(user => {
      const userOrders = orders?.filter(o => o.user_id === user.id) || [];
      const userMasterpieces = masterpieces?.filter(m => m.user_id === user.id) || [];
      
      return {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name || 'Unknown VIP',
        joinedAt: user.created_at,
        lastLoginAt: user.last_sign_in_at,
        orderCount: userOrders.length,
        assetCount: userMasterpieces.length,
      };
    });

    // 가입일 기준 최신순으로 정렬
    members.sort((a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime());

    return NextResponse.json({ success: true, members });

  } catch (error: any) {
    console.error("Admin Members API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}