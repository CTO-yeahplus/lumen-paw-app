// src/app/api/auth/delete/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 💎 관리자(Service Role) 키를 사용하여 유저를 강제 삭제하는 우회로입니다.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 반드시 Service Role Key를 사용해야 합니다!
);

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // 1. Supabase Auth(인증) 시스템에서 유저 영구 삭제
    const { error: deleteAuthError } = await supabaseAdmin.auth.admin.deleteUser(userId);
    
    if (deleteAuthError) {
      console.error("Auth Deletion Error:", deleteAuthError);
      throw deleteAuthError;
    }

    // (참고: DB에 user_id를 외래키(ON DELETE CASCADE)로 설정해 두셨다면 
    // Auth에서 삭제될 때 masterpieces 데이터 등도 자동으로 연쇄 삭제됩니다.)

    return NextResponse.json({ success: true, message: "Account successfully deleted." });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}