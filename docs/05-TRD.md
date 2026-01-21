# Technical Requirements Document (TRD)
# Raon Total Solution B2B Website

**Document Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Approved

## Technical Overview

### System Architecture
**Architecture Type:** Static Site Generation (SSG) + Server-Side Rendering (SSR)
**Pattern:** Jamstack Architecture

```
┌─────────────────┐
│   Client        │
│  (Browser)      │
└────────┬────────┘
         │
         ├─── Static Assets (CDN)
         │
         ├─── Next.js App Router (Vercel)
         │    ├─ Pages (SSG/SSR)
         │    ├─ API Routes (Contact Form)
         │    └─ shadcn/ui Components
         │
         └─── Email Service (Resend/Nodemailer)
```

### Technology Stack

#### Frontend
- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript 5.x
- **UI Library:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Framer Motion (optional, basic transitions only)
- **Image Optimization:** next/image with WebP
- **Icons:** Lucide React

#### Backend (Minimal)
- **API:** Next.js API Routes (App Router `/app/api`)
- **Email Service:** Resend API 또는 Nodemailer
- **Form Validation:** Zod (shadcn/ui Form integration)
- **No Database:** 정적 콘텐츠만 사용 (CMS 없음, Phase 1)

#### Infrastructure
- **Hosting:** Vercel (추천) 또는 Netlify
- **CI/CD:** Vercel Auto Deploy (GitHub integration)
- **CDN:** Vercel Edge Network (자동 제공)
- **Domain:** raontotalsolution.com (예정)
- **SSL:** Automatic (Vercel 제공)

#### Development Tools
- **Version Control:** Git + GitHub
- **AI Assistant:** Claude Code (Pair Programming)
- **Package Manager:** npm (default)
- **Linting:** ESLint (Next.js 기본 설정)
- **Formatting:** Prettier (선택)

## System Components

### Component 1: Header Navigation
**Purpose:** 고정 헤더, 스크롤 시 배경 전환, 모바일 햄버거 메뉴
**Technology:** React Server Component + Client Component (Sheet)
**Structure:**
```tsx
<Header>
  <Logo />
  <DesktopNav> {/* 1024px+ */}
    <NavLinks />
    <CTAButton /> {/* 상담 문의 */}
  </DesktopNav>
  <MobileNav> {/* < 1024px */}
    <HamburgerButton />
    <Sheet> {/* shadcn/ui */}
      <NavAccordion /> {/* 2 Depth 메뉴 */}
    </Sheet>
  </MobileNav>
</Header>
```

### Component 2: Contact Form
**Purpose:** 문의 폼 (견적/상담 요청)
**Technology:** shadcn/ui Form + Zod + Next.js API Route
**Data Flow:**
1. 사용자 폼 입력 (이름, 회사명, 이메일, 전화, 내용, 파일 첨부)
2. Zod 스키마 유효성 검사
3. API Route (`/api/contact`) 호출
4. Resend API로 이메일 전송 (`sales@raontotalsolution.com`)
5. 성공/실패 응답 → 사용자 피드백

### Component 3: Logo Carousel
**Purpose:** 파트너사/고객사 로고 슬라이더
**Technology:** Embla Carousel (shadcn/ui Carousel) 또는 Swiper
**Features:**
- Autoplay (4초 간격)
- Hover 시 일시정지
- 무한 루프
- 모바일에서 스와이프 가능

### Component 4: Placeholder Image
**Purpose:** 라이선스 확보 전 이미지 대체
**Technology:** React Component
**Style:**
```tsx
<div className="placeholder-image aspect-[4/3] border-2 border-dashed">
  <span>이미지 삽입 예정</span>
</div>
```

## API Specifications

### Contact Form API

#### POST /api/contact
**Description:** 문의 폼 제출 및 이메일 전송
**Authentication:** Not Required (공개 API)

**Request Body:**
```json
{
  "category": "압축기밸브" | "압축기 링&패킹" | "프레임부품" | "수리서비스" | "소재" | "일반문의",
  "name": "홍길동",
  "company": "(주)라온",
  "email": "contact@example.com",
  "phone": "010-1234-5678",
  "message": "견적 요청 드립니다.",
  "attachments": ["file1.pdf", "file2.jpg"], // 선택
  "agreePrivacy": true
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "문의가 성공적으로 전송되었습니다."
}
```

**Error (400):**
```json
{
  "success": false,
  "error": "필수 항목을 입력해주세요."
}
```

**Error (500):**
```json
{
  "success": false,
  "error": "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요."
}
```

**Implementation Details:**
- Rate Limiting: IP당 시간당 10회 제한 (스팸 방지)
- File Upload: 최대 10MB, PDF/JPG/PNG만 허용
- Email Service: Resend API 또는 Nodemailer (SMTP)

## Security Requirements

### Data Protection
- **HTTPS Only:** Vercel 자동 SSL 인증서
- **Form Validation:** Zod 스키마 검증 (클라이언트 + 서버)
- **Spam Prevention:** Honeypot 필드 또는 reCAPTCHA v3
- **File Upload Security:** MIME type 검증, 파일 크기 제한

### API Security
- **Rate Limiting:** 시간당 10회 (IP 기반)
- **CORS:** 자체 도메인만 허용
- **Input Sanitization:** HTML/Script 태그 제거
- **개인정보 보호:** 이메일 전송 후 서버에 저장하지 않음

### Environment Variables
```bash
# .env.local (Git에 커밋하지 않음)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=sales@raontotalsolution.com
NEXT_PUBLIC_SITE_URL=https://raontotalsolution.com
```

## Performance Requirements

### Response Times
- **Homepage (SSG):** < 1.5s (LCP)
- **Other Pages:** < 2s
- **Contact Form Submit:** < 3s
- **Image Loading:** Progressive (lazy loading)

### Lighthouse Targets
- **Performance:** 90+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimization Strategies
- **Image Optimization:** WebP 포맷, next/image, lazy loading
- **Code Splitting:** Automatic (Next.js)
- **Static Generation:** 모든 페이지 SSG (Contact Form은 CSR)
- **Bundle Size:** < 200KB initial load

## Testing Strategy

### Unit Tests (선택, Phase 2)
- Framework: Jest + React Testing Library
- Coverage: 주요 컴포넌트 및 유틸 함수
- Run: `npm test`

### Manual Testing (Phase 1)
- **Browser Testing:** Chrome, Safari, Firefox, Edge
- **Device Testing:** iPhone, Android, iPad, Desktop
- **Functionality Testing:**
  - [ ] 모든 페이지 네비게이션 작동
  - [ ] Contact Form 제출 성공
  - [ ] 이메일 수신 확인
  - [ ] 파일 첨부 기능
  - [ ] 모바일 햄버거 메뉴
  - [ ] Logo Carousel autoplay

### Accessibility Testing
- **Tools:** Lighthouse, axe DevTools
- **Checklist:**
  - [ ] 키보드 네비게이션
  - [ ] 스크린 리더 호환성
  - [ ] Color Contrast (AA 이상)
  - [ ] Focus States 명확
  - [ ] ARIA Labels

## Deployment Architecture

### Environments
1. **Development:** `localhost:3000`
2. **Preview:** Vercel Preview Deployment (PR별)
3. **Production:** `https://raontotalsolution.com`

### Deployment Process (Vercel)
1. GitHub에 `main` 브랜치 푸시
2. Vercel Auto Deploy 트리거
3. Build (`next build`)
4. Deploy to Edge Network
5. Health Check
6. DNS 업데이트 (자동)

**Deployment Time:** 평균 2~3분

### Rollback Strategy
- Vercel Dashboard에서 이전 배포 버전으로 Instant Rollback
- 또는 Git revert → 재배포

## Troubleshooting

*디버깅 및 문제 해결 기록 (세션 정리 시 자동 추가됨)*

### Common Issues

#### Issue: Tailwind v4 CSS Variables not working
- (2025-11-18) Issue: globals.css에서 @theme inline 사용 시 변수 인식 안됨 | Cause: Tailwind v4 syntax 변경 | Fix: @import "tailwindcss" 먼저 선언, @theme inline으로 변수 정의

## Technical Decisions

### Decision 1: Next.js App Router vs Pages Router
**Date:** 2025-11-18
**Context:** Next.js 16에서 App Router가 안정화되어 선택지 고려
**Decision:** App Router 사용
**Alternatives Considered:**
- Pages Router: 익숙하지만 레거시, 새 프로젝트에는 비추천
- App Router: React Server Components, 최신 기능, 더 나은 성능

### Decision 2: Tailwind CSS v4
**Date:** 2025-11-18
**Context:** shadcn/ui와 함께 사용할 CSS 프레임워크 선택
**Decision:** Tailwind CSS v4 (최신 버전)
**Reasons:**
- shadcn/ui 공식 지원
- CSS Variables 기반으로 디자인 시스템 구축 용이
- 성능 개선 (PostCSS 대신 Oxide 엔진)

### Decision 3: Email Service (Resend)
**Date:** 2025-11-18
**Context:** Contact Form 이메일 전송 방법
**Decision:** Resend API 사용
**Alternatives Considered:**
- Nodemailer + SMTP: 설정 복잡, 스팸 필터링 위험
- SendGrid: 유료, 과한 기능
- Resend: 간단, Next.js 친화적, 무료 티어 제공

### Decision 4: No CMS (Phase 1)
**Date:** 2025-11-18
**Context:** 콘텐츠 관리 방법
**Decision:** 하드코딩 (코드 내 콘텐츠)
**Reasons:**
- Phase 1에서는 콘텐츠 변경 빈도 낮음
- CMS 도입 시 복잡도 증가
- Phase 2에서 필요 시 Contentful/Sanity 고려

## Third-Party Services

### Service 1: Resend (Email API)
**Purpose:** Contact Form 이메일 전송
**API Key:** `RESEND_API_KEY` (환경변수)
**Documentation:** https://resend.com/docs
**Free Tier:** 월 3,000 emails

### Service 2: Vercel (Hosting & CDN)
**Purpose:** 웹사이트 호스팅, 자동 배포, CDN
**Pricing:** Hobby Plan (무료, 개인/소규모)
**Features:**
- Auto SSL
- Edge Network (전 세계 CDN)
- GitHub Integration
- Analytics (선택)

### Service 3: Google Fonts (선택)
**Purpose:** Pretendard 폰트 대체 (CDN)
**Alternative:** Self-hosted fonts in `/public/fonts`

## Development Guidelines

### Code Standards
- **ESLint:** Next.js 기본 설정 (`eslint-config-next`)
- **TypeScript:** Strict mode 사용
- **Component Structure:** Server Component 우선, 필요시 Client Component
- **File Naming:** kebab-case (파일), PascalCase (컴포넌트)

### Folder Structure
```
/app
  /api
    /contact
      route.ts          # Contact Form API
  /(routes)
    /company
      page.tsx
    /industries
      page.tsx
    ...
  layout.tsx
  page.tsx              # Home
  globals.css

/components
  /ui                   # shadcn/ui components
  /layout
    header.tsx
    footer.tsx
  /sections
    hero.tsx
    industries-highlight.tsx
  ...

/lib
  utils.ts              # cn() helper
  validations.ts        # Zod schemas

/public
  /images
  /logos

/docs                   # Project documentation
```

### Git Workflow
- **Branch Naming:** `feature/header`, `fix/contact-form`
- **Commit Message:** Conventional Commits
  - `feat: add header navigation`
  - `fix: resolve email sending error`
  - `docs: update TRD`
- **Pull Request:** Feature → `main` (PR 필수)

### AI-Assisted Development
- **Claude Code:** 구현, 디버깅, 리팩토링
- **Claude Chat:** 아키텍처 결정, 문서 작성
- **Code Review:** AI 생성 코드 항상 리뷰 후 커밋

## 다국어 (i18n) 구현 명세

### 개요
**라이브러리:** next-intl v4.x
**지원 언어:** 한국어 (ko), 영어 (en)
**URL 구조:** 서브디렉터리 방식 (`/ko/`, `/en/`)
**기본 언어:** 브라우저 Accept-Language 헤더로 자동 감지

### 디렉터리 구조
```
app/
├── [locale]/             # 언어 동적 라우트 (ko, en)
│   ├── layout.tsx        # 언어별 레이아웃
│   ├── page.tsx          # Home
│   ├── company/
│   ├── industries/
│   │   ├── oil-refinery/
│   │   └── shipbuilding/
│   ├── products/
│   │   ├── compressor/
│   │   ├── mixer/
│   │   ├── motor/
│   │   ├── pump/
│   │   ├── bearing/
│   │   ├── cylinder-liner/
│   │   └── oil-purifier/
│   ├── partners/
│   └── contact/
├── sitemap.ts            # 다국어 sitemap (hreflang 포함)
└── robots.ts

i18n/
├── config.ts             # 언어 설정, 기본값
├── request.ts            # 서버 요청 설정
└── routing.ts            # 라우팅 설정

messages/
├── ko.json               # 한국어 번역
└── en.json               # 영어 번역

middleware.ts             # 언어 감지 및 리다이렉트
```

### URL 매핑
| 페이지 | 한국어 | 영어 |
|--------|--------|------|
| Home | `/ko` | `/en` |
| Company | `/ko/company` | `/en/company` |
| Industries | `/ko/industries` | `/en/industries` |
| 정유·석유화학 | `/ko/industries/oil-refinery` | `/en/industries/oil-refinery` |
| 조선 | `/ko/industries/shipbuilding` | `/en/industries/shipbuilding` |
| Products | `/ko/products` | `/en/products` |
| Compressor | `/ko/products/compressor` | `/en/products/compressor` |
| Mixer | `/ko/products/mixer` | `/en/products/mixer` |
| Motor | `/ko/products/motor` | `/en/products/motor` |
| Pump | `/ko/products/pump` | `/en/products/pump` |
| Bearing | `/ko/products/bearing` | `/en/products/bearing` |
| Cylinder Liner | `/ko/products/cylinder-liner` | `/en/products/cylinder-liner` |
| Oil Purifier | `/ko/products/oil-purifier` | `/en/products/oil-purifier` |
| Partners | `/ko/partners` | `/en/partners` |
| Contact | `/ko/contact` | `/en/contact` |

### 미들웨어 로직
```typescript
// middleware.ts
1. Accept-Language 헤더 확인
2. 쿠키에 저장된 언어 우선 적용
3. 지원 언어 매칭 (ko, en)
4. 매칭 없으면 기본값 (ko) 적용
5. /로 접속 시 감지된 언어로 리다이렉트
```

### SEO 최적화
- **hreflang 태그:** 모든 페이지에 자동 삽입
- **Canonical URL:** 언어별 정규 URL 설정
- **다국어 Sitemap:** xhtml:link로 언어 연결

---

## Known Limitations

### Current Limitations (Phase 1)
- CMS 없음 (콘텐츠 하드코딩)
- 실시간 채팅 기능 없음
- 카탈로그 다운로드 기능 없음 (RESOURCES 페이지 제외)
- 사용자 인증 없음

### Future Improvements
- [x] 영문 버전 추가 (i18n) - 2025-12-24 구현 중
- [ ] Headless CMS 도입 (Contentful/Sanity)
- [ ] Analytics 추가 (Google Analytics 4)
- [ ] 카탈로그 다운로드 기능 (RESOURCES)
- [ ] 실시간 채팅 (Intercom/Tawk.to)

## Glossary
- **SSG:** Static Site Generation (빌드 타임에 HTML 생성)
- **SSR:** Server-Side Rendering (요청 시 서버에서 HTML 생성)
- **RSC:** React Server Components (서버에서만 실행되는 컴포넌트)
- **Jamstack:** JavaScript, APIs, Markup 기반 아키텍처

## References
- Next.js 16 Documentation: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com
- Resend API: https://resend.com/docs
- Vercel Deployment: https://vercel.com/docs

## Change Log
- 2025-11-18: Initial version (v1.0)
  - Next.js 16 + Tailwind v4 + shadcn/ui 스택 확정
  - Resend API 이메일 서비스 선택
  - Vercel 호스팅 결정
