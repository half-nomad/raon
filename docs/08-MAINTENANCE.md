# Maintenance Guide
# Raon Total Solution B2B Website

**Last Updated:** 2025-11-18
**Document Version:** 1.0

## Overview

사이트 운영, 유지보수, 장애 대응 가이드

## Maintenance Schedule

### Weekly
- [ ] Error logs 확인 (Vercel Dashboard)
- [ ] Contact Form 문의 처리
- [ ] Performance 확인 (Lighthouse)

### Monthly
- [ ] Dependencies 업데이트 검토
- [ ] Security audit (`npm audit`)
- [ ] Lighthouse 전체 페이지 스캔
- [ ] Content 업데이트 (필요 시)

### Quarterly
- [ ] Documentation 업데이트
- [ ] 사용자 피드백 검토
- [ ] Phase 2 기능 계획

## Incidents

*긴급 상황 발생 시 기록*

### 템플릿
```markdown
- (YYYY-MM-DD HH:MM)
  Status: 🔴 진행중 / 🟢 해결됨
  Summary: [문제 요약]
  Impact: [영향]
  Resolution: [해결 방법]
```

## System Health

### Current Status
- **Overall:** 🟢 Healthy
- **Hosting:** Vercel
- **Uptime:** 99.9% (목표)

### Key Metrics
- **Page Load:** < 3s
- **Lighthouse Performance:** 90+
- **Error Rate:** < 0.1%

## Content Updates

### How to Update Content

**제품 정보 수정:**
```bash
# 1. 해당 파일 편집
# app/(routes)/products/page.tsx

# 2. Local 테스트
npm run dev

# 3. Commit & Push
git add .
git commit -m "docs: update product info"
git push origin main
```

**이미지 추가:**
```bash
# 1. 이미지를 /public/images/ 에 추가
# 2. next/image 컴포넌트 사용
# 3. WebP 포맷 권장
```

## Email Management

### Contact Form 문의 처리
- **수신:** sales@raontotalsolution.co.kr
- **응답 목표:** 24시간 이내
- **카테고리:** 압축기밸브, 링&패킹, 프레임부품 등

### Spam 방지
- Honeypot 필드 활성화
- Rate limiting (시간당 10회)

## Dependency Updates

### Check for Updates
```bash
npm outdated
```

### Update Process
```bash
# 1. Update dependencies
npm update

# 2. Security audit
npm audit
npm audit fix

# 3. Test locally
npm run dev
npm run build

# 4. Deploy
git push origin main
```

### Critical Dependencies
- Next.js
- Tailwind CSS
- shadcn/ui components
- Resend API

## Performance Monitoring

### Lighthouse Checks (Weekly)
```bash
# Run Lighthouse
npm run build
npm run start
# Open Chrome DevTools → Lighthouse
```

**Target Scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Vercel Analytics
- **Access:** Vercel Dashboard → Analytics
- **Metrics:** Page views, Core Web Vitals

## Security

### SSL Certificate
- **Provider:** Vercel (자동)
- **Status:** ✅ Auto-renewal

### Security Headers
- Vercel 기본 제공
- CSP, X-Frame-Options 등

### Vulnerability Scanning
```bash
npm audit
```

## Troubleshooting

### Common Issues

#### Contact Form Not Sending
**Check:**
1. Resend API key 확인
2. Vercel Environment Variables 확인
3. Email 수신함 확인 (스팸 폴더 포함)

#### Page Load Slow
**Solutions:**
1. Image 최적화 (WebP, lazy loading)
2. Vercel Analytics 확인
3. Code splitting 검토

#### Build Error
**Solutions:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Emergency Contacts

### Technical Support
- **Primary:** [Developer Email]
- **Vercel Support:** vercel.com/support

### Service Providers
- **Hosting:** Vercel
- **Email:** Resend API
- **Domain:** (도메인 등록 업체)

## Backup

### Source Code
- **Location:** GitHub (half-nomad/raon)
- **Branches:** main, feature/*
- **No database:** Static site (backup 불필요)

### Content Backup
- 모든 콘텐츠는 Git으로 관리
- GitHub가 자동 백업

## Change Log
- 2025-11-18: Initial version
