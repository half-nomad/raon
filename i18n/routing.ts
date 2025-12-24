import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 지원 언어
  locales: ['ko', 'en'],

  // 기본 언어
  defaultLocale: 'ko',

  // URL prefix 설정 (항상 표시)
  localePrefix: 'always',

  // 언어 감지 활성화 (Accept-Language 헤더, 쿠키)
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
