"use client";
import { useEffect } from "react";

export default function KakaoEscape() {
  useEffect(() => {
    // 🍏 고객이 접속한 브라우저의 신분증(User-Agent)을 검사합니다.
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;

    // 🚨 'kakaotalk' 이라는 단어가 발견되면 즉시 탈출을 시도합니다.
    if (userAgent.match(/kakaotalk/i)) {
      if (userAgent.match(/android/i)) {
        // 안드로이드: 크롬(Chrome) 브라우저를 강제로 깨워서 앱 밖으로 던집니다.
        window.location.href = `intent://${targetUrl.replace(/https?:\/\//i, '')}#Intent;scheme=https;package=com.android.chrome;end`;
      } else if (userAgent.match(/iphone|ipad|ipod/i)) {
        // 아이폰(iOS): 카카오톡에 내장된 '외부 브라우저 열기' 명령어를 강제로 실행시킵니다.
        window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`;
      }
    }
  }, []);

  // 이 컴포넌트는 화면에 아무것도 그리지 않는 투명한 암살자입니다.
  return null; 
}