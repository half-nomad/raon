import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 다음 경로는 미들웨어에서 제외:
  // - /api, /trpc, /_next, /_vercel로 시작하는 경로
  // - 파일 확장자가 있는 경로 (정적 파일)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
