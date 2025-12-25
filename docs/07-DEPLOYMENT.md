# Deployment Guide
# Raon Total Solution B2B Website

**Last Updated:** 2025-12-24
**Document Version:** 2.0

## Overview

Vercel을 통한 자동 배포 및 프로덕션 운영 가이드

## Environments

### 1. Development (Local)
- **URL:** http://localhost:3000
- **Branch:** feature/*, fix/*
- **Command:** `npm run dev`

### 2. Preview (Vercel)
- **URL:** Auto-generated (PR별)
- **Branch:** All branches (PR 생성 시)
- **Purpose:** PR 리뷰용 미리보기

### 3. Production ✅ 배포 완료
- **URL:** https://raontotalsolution.co.kr
- **Branch:** main
- **Hosting:** Vercel
- **Repository:** raontotalsolution/raon
- **DNS Provider:** 가비아

## Prerequisites

### Required
- [x] Git
- [x] Node.js 18+
- [x] npm
- [x] Vercel CLI (선택)
- [x] GitHub 계정

### Environment Variables
```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=sales@raontotalsolution.co.kr
NEXT_PUBLIC_SITE_URL=https://raontotalsolution.co.kr
```

## Deployment Process

### Production Deployment (Vercel)

**자동 배포 (Dual Push):**
1. `main` 브랜치에 push (양쪽 레포 동시)
2. raontotalsolution/raon에서 Vercel 자동 빌드 트리거
3. 빌드 성공 시 자동 배포
4. 평균 소요 시간: 2~3분

```bash
git add .
git commit -m "feat: add feature"
git push origin main   # half-nomad/raon + raontotalsolution/raon 동시 푸시
```

**Git Remote 설정:**
```
origin (fetch) → https://github.com/half-nomad/raon.git
origin (push)  → https://github.com/half-nomad/raon.git
origin (push)  → https://github.com/raontotalsolution/raon.git
```

**수동 배포 (Vercel CLI):**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### Preview Deployment
```bash
# Create PR → Vercel auto-deploys preview
git checkout -b feature/new-feature
git push origin feature/new-feature
# Create PR on GitHub
```

## Build Process

### Local Build Test
```bash
npm run build
npm run start
```

### Build Output
- **Framework:** Next.js Static Export
- **Output:** `.next/` directory
- **Assets:** Optimized, CDN-ready

## Rollback Procedure

### Vercel Dashboard
1. Vercel Dashboard 접속
2. Deployments 탭
3. 이전 배포 버전 선택
4. "Promote to Production" 클릭

### Git Revert
```bash
git revert HEAD
git push origin main
# Vercel auto-redeploys
```

## DNS Configuration (가비아)

### DNS 레코드 설정
| 타입 | 호스트 | 값 | TTL |
|------|--------|-----|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

### 설정 경로
가비아 → My가비아 → 서비스 관리 → 도메인 → DNS 설정

## Post-Deployment Checklist

- [x] 사이트 접속 확인 (https://raontotalsolution.co.kr)
- [x] Vercel 프로젝트 연결
- [x] DNS 레코드 설정
- [ ] 모든 페이지 로딩 확인
- [ ] Contact Form 제출 테스트
- [ ] 모바일 반응형 확인
- [ ] Lighthouse 점수 확인 (90+)
- [ ] 에러 로그 확인 (Vercel Dashboard)

## Monitoring

### Vercel Analytics (기본 제공)
- **실시간 트래픽**
- **Core Web Vitals**
- **Error 로그**

**Access:** Vercel Dashboard → Analytics

## Common Issues

### Issue: Build Failed
**Solution:**
```bash
# Clear cache locally
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Environment Variables Not Working
**Solution:**
1. Vercel Dashboard → Settings → Environment Variables
2. 변수 추가/확인
3. Redeploy

### Issue: 502 Error After Deploy
**Solution:**
- Check build logs (Vercel Dashboard)
- Verify API routes are working
- Check environment variables

## Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Production build
npm run start            # Start production server

# Deployment (Vercel CLI)
vercel                   # Deploy to preview
vercel --prod            # Deploy to production
vercel logs              # View logs
```

## Change Log
- 2025-12-24: v2.0 - 프로덕션 배포 완료, DNS 설정, Dual Push 문서화
- 2025-11-18: v1.0 - Initial version (Vercel 배포 가이드)
