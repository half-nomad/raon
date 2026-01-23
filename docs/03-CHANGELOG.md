# Changelog
# Raon Total Solution B2B Website

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3] - 2026-01-23

### Changed
- **디자인 시스템 문서 통합** (`docs/06-DESIGN_SYSTEM.md` v2.0)
  - UI_guide_2nd_organized.md 콘텐츠 통합 (Products 콘텐츠 가이드)
  - PRODUCTS-REDESIGN-GUIDE.md 레이아웃 패턴 통합 (태산 스타일)
  - 색상 정책 통일: 모든 페이지 브랜드 색상 적용 (Blue/Red)
  - 아이콘 사용 최소화 정책 추가
  - 기존 문서 → `docs/archive/`로 이동

---

## [1.1.2] - 2026-01-23

### Changed
- **PUMP 페이지 태산 스타일 적용** (`app/[locale]/products/pump/page.tsx`)
  - "use client" 추가 (SSR → CSR 변환)
  - Header/Footer 컴포넌트 추가
  - ProductIntro 컴포넌트 추가
  - Fixed Sub-Nav (PUMP SOLUTION / TROUBLE SHOOTING / 파트너 / 문의하기)
  - 배경색 패턴 변경: 전체 다크 → white/slate-50 교대
  - 녹색(green) 완전 제거 → 브랜드 컬러 적용 (아이콘: #3B82F6, 액센트: #EF4444)
  - CTA 섹션 Red 그래디언트 (#EF4444 → #DC2626)

---

## [1.1.1] - 2026-01-23

### Changed
- **MIXER 페이지 태산 스타일 적용** (`app/[locale]/products/mixer/page.tsx`)
  - ProductIntro 컴포넌트 추가
  - Header/Footer 컴포넌트 추가
  - Fixed Sub-Nav (섹션 내 앵커 스크롤) 구현
  - 배경색 패턴 변경: 어두운 배경 → white/slate-50 교대
  - 5개 브랜드 카드 accent color 적용

---

## [1.0.0] - 2026-01-21

### Added - Phase 5.3 Products 페이지 재설계
- **Products 공통 레이아웃 구현**
  - 상단 2컬럼 구조 (갤러리 + 설명)
  - shadcn/ui Tabs 컴포넌트 서브메뉴 탭 구조
  - `components/products/ProductPageLayout.tsx` 공통 레이아웃
  - `components/products/ProductGallery.tsx` 이미지 갤러리
  - `components/ui/tabs.tsx` 탭 컴포넌트 추가

- **Compressor 페이지 재구성**
  - 서브메뉴 탭: NEW / SPARE PARTS / TROUBLE SHOOTING / M&R
  - 기존 Accordion → 탭 기반 구조로 변경

- **Pump 페이지 재구성**
  - 서브메뉴 탭: PUMP SOLUTION / TROUBLE SHOOTING
  - CP Pumpen 브랜드 콘텐츠 구조화

- **Mixer 페이지 재구성**
  - SPXFlow 5개 브랜드: Lightnin, Plenty, Philadelphia, Stelzer, Uutechnic
  - 브랜드별 탭 기반 콘텐츠

- **Motor 페이지 재구성**
  - 서브메뉴 탭: SPARE PARTS / 방폭인증서비스
  - NIDEC 브랜드 콘텐츠 구조화

- **가이드 문서 추가**
  - `docs/PRODUCTS-REDESIGN-GUIDE.md` - 페이지 레이아웃 및 서브메뉴 구조

### Changed
- 4개 Products 페이지 코드 대폭 간소화 (총 -930 라인)
- next.config.ts 이미지 도메인 설정 업데이트

### Technical
- 빌드 성공 (42 pages generated)
- shadcn/ui Tabs 컴포넌트 활용
- 일관된 UI 패턴 적용
- Phase 5.3 P1 83% 완료

---

## [0.9.0] - 2025-12-24

### Added - i18n & Production Deployment
- **다국어 지원 (i18n) 완전 구현**
  - next-intl v4.x 라이브러리 적용
  - URL 구조: 서브디렉터리 (`/ko/`, `/en/`)
  - 브라우저 언어 감지 자동 리다이렉트
  - 번역 파일: ko.json (~850개 키), en.json (~470개 키)
  - 13개 페이지 + 7개 컴포넌트 다국어화
  - sitemap.xml 다국어 hreflang 태그
  - 언어 스위처 컴포넌트 (Header 데스크톱/모바일)

- **Vercel 프로덕션 배포**
  - 배포 레포: raontotalsolution/raon
  - 프로덕션 도메인: https://raontotalsolution.com
  - DNS: 가비아 A 레코드 (76.76.21.21)
  - 자동 배포: main 브랜치 푸시 시

- **Git Dual Push 설정**
  - origin → half-nomad/raon + raontotalsolution/raon 동시 푸시
  - `git push origin main` 한 번으로 양쪽 배포

### Changed
- 디렉터리 구조: `app/` → `app/[locale]/` 동적 라우트
- middleware.ts 추가 (next-intl 라우팅)
- 메타데이터 다국어화 (generateMetadata 함수)

### Technical
- 빌드 성공 (36 routes)
- Next.js 16.0.7 + Turbopack
- TypeScript 타입 안전성 유지

## [0.8.0] - 2025-12-18

### Added - SEO Optimization Phase 2
- **Product Schema (7개 제품)**
  - `components/seo/product-schema.tsx` - Reusable Product Schema component
  - Schema.org Product type with name, description, category, manufacturers
  - Offers, brand, seller information included
  - Applied to: Compressor, Mixer, Motor, Pump, Bearing, Cylinder Liner, Oil Purifier
- **Page-specific Metadata (9개 페이지)**
  - 제품 페이지 7개: 각 제품별 맞춤 title, description, keywords, OpenGraph
  - 산업 페이지 2개: 정유·석유화학, 조선 산업별 최적화된 메타데이터
  - 모든 페이지에 BreadcrumbList Schema 추가
- **OG Image Guide Document**
  - `docs/OG_IMAGE_GUIDE.md` - 13개 OG 이미지 제작 가이드
  - 디자인 규격 (1200x630px), 안전 영역, 브랜드 가이드
  - 템플릿 A/B/C 레이아웃, 제품별 텍스트 명세
  - 무료 이미지 소스 및 제작 도구 가이드

### Changed
- 제품 페이지 7개: SEO 메타데이터 및 Schema 추가
  - [app/products/compressor/page.tsx](app/products/compressor/page.tsx)
  - [app/products/mixer/page.tsx](app/products/mixer/page.tsx)
  - [app/products/motor/page.tsx](app/products/motor/page.tsx)
  - [app/products/pump/page.tsx](app/products/pump/page.tsx)
  - [app/products/bearing/page.tsx](app/products/bearing/page.tsx)
  - [app/products/cylinder-liner/page.tsx](app/products/cylinder-liner/page.tsx)
  - [app/products/oil-purifier/page.tsx](app/products/oil-purifier/page.tsx)
- 산업 페이지 2개: SEO 메타데이터 및 BreadcrumbSchema 추가
  - [app/industries/oil-refinery/page.tsx](app/industries/oil-refinery/page.tsx)
  - [app/industries/shipbuilding/page.tsx](app/industries/shipbuilding/page.tsx)

### Fixed
- `components/seo/organization-schema.tsx` - slogan 필드 따옴표 문법 오류 수정

### Technical
- Schema.org JSON-LD format (Product, BreadcrumbList)
- Next.js Metadata API 활용한 페이지별 SEO 최적화
- TypeScript 타입 안전성 유지
- 빌드 성공 (21/21 pages generated)

## [0.7.0] - 2025-12-18

### Added - SEO Optimization Phase 1
- Enhanced metadata in `app/layout.tsx`
  - `metadataBase` URL 설정 (https://raontotalsolution.com)
  - Template-based title system (`'%s | 라온토탈솔루션'`)
  - Comprehensive `description` and `keywords` for B2B industrial target
  - Full OpenGraph metadata (type, locale, siteName, images)
  - Twitter Card metadata (summary_large_image)
  - Enhanced robots configuration (googleBot settings)
- Schema.org structured data components
  - `components/seo/organization-schema.tsx` - Company info (name, address, contact, founding date)
  - `components/seo/breadcrumb-schema.tsx` - Navigation breadcrumbs
- SEO infrastructure files
  - `app/sitemap.ts` - 15 pages sitemap (static pages + 7 products)
  - `app/robots.ts` - Crawler configuration (allow all except /api/)
- Comprehensive SEO strategy document (`docs/08-SEO-STRATEGY.md`)
  - 4-phase implementation roadmap
  - Target keyword strategy (Naver & Google)
  - Current state analysis
  - KPI monitoring guidelines

### Technical
- Next.js 16 MetadataRoute API 활용
- Schema.org JSON-LD format
- 검색 엔진 최적화 기반 마련 (Phase 1 완료)
- Phase 2-4 작업 항목 TODO에 추가

## [0.6.2] - 2025-12-10

### Security
- React Server Components 보안 취약점 패치 (CVE-2025-55182)
  - 심각도: CVSS 10.0 (Critical) - 원격 코드 실행 취약점
  - Next.js 16.0.3 → 16.0.7 업그레이드
  - React 19.2.0 → 19.2.1 업그레이드
  - React-dom 19.2.0 → 19.2.1 업그레이드
  - npm audit 결과: 0 vulnerabilities

### Fixed
- Resend API 타입 에러 수정
  - CreateEmailResponse 타입 처리 개선
  - app/api/contact/route.ts:165 에러 해결
  - Error destructuring 패턴 적용
- Zod validation 스키마 업데이트
  - Zod v4 API 변경사항 반영
  - `required_error` → `message` + `min(1)` 패턴으로 변경
  - app/contact/page.tsx:30 타입 에러 해결

### Technical
- 빌드 성공 확인 (17개 routes)
- Next.js 16.0.7 (Turbopack) 호환성 검증 완료
- TypeScript 컴파일 오류 해결

## [0.6.1] - 2025-11-19

### Fixed - Header Navigation
- Header INDUSTRIES 드롭다운 메뉴 호버 버그 수정
  - 문제: 버튼에서 드롭다운 메뉴로 커서 이동 시 메뉴가 사라지는 현상
  - 해결: 드롭다운 컨테이너에 `onMouseEnter/onMouseLeave` 이벤트 추가
  - 보이지 않는 hover 브릿지 추가 (8px 높이)
  - 부모 div와 드롭다운 컨테이너 모두 state 동기화
- components/layout/header.tsx 수정 (77-128번 줄)

### Technical
- JavaScript state 기반 hover 제어 개선
- 브릿지 요소로 hover 영역 연속성 확보
- 사용자 경험 개선 (메뉴 안정성 향상)

## [0.6.0] - 2025-11-18

### Added - PARTNERS Page
- PARTNERS 페이지 (`/partners`)
  - 글로벌 파트너 섹션 (10개 파트너사)
    - SPXFLOW, NEUMAN & ESSER, CASTANET, KB DELTA
    - TURBO LINK, WTQ, CP Pumpen, FIMA, NIDEC, 삼영필텍 (SYT)
    - 각 파트너사별 정보: 국가, 계약 연도, 관계, 설명, 제품군
  - 파트너십의 강점 (6개 카드)
    - 공식 대리점 계약, 글로벌 네트워크, 기술 지원
    - 안정적 공급, 경쟁력 있는 가격, 품질 보증
  - 주요 고객사 섹션 (7개 고객사)
    - 정유: SK에너지, S-OIL, GS칼텍스, HD현대오일뱅크
    - 화학·중공업: TKG, Hanwha, 휴켐스
    - 고객사 로고 그리드 (7개)
  - 신뢰 지표 (Trust Indicators)
    - 30+ 년 업력, 10+ 글로벌 파트너사, 7+ 주요 고객사

### Technical
- 총 17개 routes 빌드 성공
- 파트너사 정보 구조화 (10개 객체)
- 고객사 산업별 분류 필터링
- 반응형 로고 그리드 (2/4/7 열)

## [0.5.0] - 2025-11-18

### Added - PRODUCTS 전체 완료 (Phase 2 완료)
- Pump 상세 페이지 (`/products/pump`)
  - CP Pumpen (스위스) 브랜드 소개
  - 15개 펌프 모델 Accordion (MKP, MKPL, MKP-S, MKPD, MKPV, CPP, MSP, ASP, PGP, GP, LP, PP, SP, DP, VP)
  - 105개 이상 펌프 사이즈 제공
  - 6개 핵심 특징 (누출 방지, 내화학성, 유지보수 최소화, 다양한 사이즈, 고온·고압 대응, 인증)
  - 8개 적용 산업 (석유화학, 화학, 제약, 식품, 수처리, 반도체, 도료·페인트, 환경·에너지)
  - 기술 사양 (유량, 압력, 온도, 재질)
- Bearing 상세 페이지 (`/products/bearing`)
  - 터보링크 (TURBO LINK) 브랜드 소개
  - 3개 베어링 제품군 (TILTING PAD THRUST, VERTICAL, JOURNAL & THRUST COMBINED)
  - 각 제품군별 사양 (회전속도, 하중, 직경)
  - 6개 강점 (고속 회전, 고하중, 자동 정렬, 온도 안정성, 긴 수명, 국내 제작)
  - 6개 적용 산업 (정유·석유화학, 발전, 조선·해양, 중공업, 공조·환경, 연구소)
- Cylinder Liner for Ship 상세 페이지 (`/products/cylinder-liner`)
  - WTQ (Yangzhou Wuting Qiao) 브랜드 소개
  - 4개 핵심 역할 (엔진 보호, 마모 저감, 열 관리, 교체 용이)
  - 기술 사양 (재질, 표면 처리, 엔진 타입, 사이즈)
  - 4개 적용 선박 (화물선, 여객선, 특수 선박, 중소형 선박)
  - 제작 공정 5단계 (주조 → 열처리 → 가공 → 표면 처리 → 품질 검사)
  - 국제 인증 (ISO 9001, CCS, ABS, DNV-GL, LR) 및 호환 엔진 (MAN, Wärtsilä, Mitsubishi 등)
- Oil Purifier 상세 페이지 (`/products/oil-purifier`)
  - 삼영필텍 (SYT) 브랜드 소개
  - 4개 주요 기능 (수분 제거, 불순물 제거, 오일 수명 연장, 설비 보호)
  - 9개 모델 스펙 테이블 (DVEFB-10-PW ~ DVEFB-CO-PW)
    - 청정 유량 (10~200 L/min), 크기, 소비 전력 명시
    - 맞춤 제작 (DVEFB-CO-PW) 옵션 제공
  - 오일 정화 원리 5단계 (흡입 → 1차 여과 → 진공 증발 → 정밀 여과 → 배출)
  - 6개 적용 분야 (터빈, 유압, 압축기, 변압기, 기어, 선박 엔진 오일)
  - 기술 사양 (수분 제거율 99%, 여과 정밀도 1μm, 운전 조건, 안전 기능)

### Technical
- 총 16개 routes 빌드 성공
- PRODUCTS 7개 상세 페이지 모두 완료
- Phase 2 (핵심 페이지) 100% 완료
- shadcn/ui Accordion 활용한 일관된 UI 패턴
- 반응형 테이블 (Oil Purifier 모델 스펙)

## [0.4.0] - 2025-11-18

### Added - PRODUCTS Pages
- PRODUCTS 메인 페이지 (`/products`)
  - 7개 제품군 카드 그리드 (2열 반응형 레이아웃)
  - 각 제품군별 브랜드, 설명, 주요 특징 표시
  - 상세 페이지 링크 연결
- Compressor & Spare parts 상세 페이지 (`/products/compressor`)
  - 6개 주요 섹션 Accordion 구조
  - Cylinder liner (WTQ), Piston (Castanet SA), Piston Rod, Crosshead
  - Consumable parts (4개 하위 Accordion): Piston ring, Rider ring, Packing Cup/Ring, Oil Scraper
  - Valve Assy & Internal Parts (KB Delta)
- Mixer & Agitator 상세 페이지 (`/products/mixer`)
  - SPX FLOW (Lightnin, Plenty, Stelzer) 브랜드 소개
  - 6개 적용 분야 카드 (석유화학, 제약·화학, 식품·음료, 도료·코팅, 수처리, 기타)
  - 기술 사양 (혼합 용량, 구동 방식, 임펠러 타입, 재질)
- Motor 상세 페이지 (`/products/motor`)
  - NIDEC 브랜드 소개 및 8개 제품군 Accordion
  - Inverter, Vector, Three-phase, Anti-explosion, High-efficiency, Servo, Geared, DC Brushless
  - 6개 적용 분야 및 기술 사양 (출력 범위, 전압, 보호 등급, 에너지 효율)

### Changed - Documentation
- 문서 구조 개선: PLAN/TODO/CHANGELOG 중복 제거
  - CHANGELOG "Unreleased" 섹션 삭제 → TODO 참조
  - PLAN 주간 세부 내역 간소화 → TODO 참조
  - 각 문서 간 상호 링크 추가
- MAINTENANCE.md 아카이브 이동 (`docs/archive/`)
- CLAUDE.md 업데이트 규칙 명시

### Technical
- 총 12개 routes 빌드 성공
- Accordion 컴포넌트 활용 (shadcn/ui)
- Nested Accordion 구현 (Consumable parts)
- 반응형 디자인 적용 (모바일 → 태블릿 → 데스크톱)

## [0.3.1] - 2025-11-18

### Fixed - Header Navigation
- Header의 INDUSTRIES 드롭다운 메뉴 구현 완료
  - 데스크톱: JavaScript 기반 hover 드롭다운 (onMouseEnter/onMouseLeave)
  - 모바일: Accordion 메뉴
  - 정유·석유화학 / 조선 2개 링크 추가
- shadcn/ui navigation-menu 컴포넌트 설치
- 모바일 메뉴 URL 수정 (`/industries/refinery` → `/industries/oil-refinery`)
- `.next` 빌드 캐시 삭제 후 재빌드로 문제 해결

### Technical
- NavigationMenu 컴포넌트 시도 후 JavaScript state 기반으로 변경
- Hot Module Replacement 이슈 해결
- 브라우저 캐시 문제 해결

## [0.3.0] - 2025-11-18

### Added - HOME Page (Complete)
- HeroSection 컴포넌트 (배경 비디오 placeholder, CTA 버튼 2개)
- IndustriesHighlight 컴포넌트 (정유·석유화학, 조선 카드)
- ProductsSnapshot 컴포넌트 (5개 제품군 카드)
- PartnersClients 컴포넌트 (로고 슬라이더 + 고객사 그리드)
- ContactCTA 컴포넌트 (문의 유도 배너 + Scroll-to-top 버튼)

### Added - COMPANY Page (Complete)
- CEOMessage 컴포넌트 (대표이사 인사말, 2열 레이아웃)
- HistoryTimeline 컴포넌트 (2020~2025 연혁, 반응형 타임라인)
- Location 컴포넌트 (오시는 길, 지도 placeholder, 연락처 정보)
- COMPANY 메인 페이지 (`/company`)

### Added - INDUSTRIES Pages (Complete)
- IndustryHero 공통 컴포넌트
- 정유·석유화학 페이지 (`/industries/oil-refinery`)
  - 30년 노하우 강조
  - 6개 주요 서비스 그리드
  - 3개 핵심 특징 카드
  - 관련 제품 링크
- 조선 페이지 (`/industries/shipbuilding`)
  - WTQ 대리점 소개
  - 제품 사양 (직경 480~1500mm)
  - 4개 주요 서비스
  - 3개 핵심 특징 카드

### Changed
- CTA 버튼 컴포넌트에 `size` prop 추가 (default, large)
- PlaceholderImage를 인라인 div로 교체 (props 단순화)

### Technical
- 모든 페이지 빌드 성공 확인 (7/7 routes)
- 반응형 디자인 적용 (모바일 → 태블릿 → 데스크톱)
- Client/Server 컴포넌트 최적화
- 로고 슬라이더 애니메이션 구현 (RequestAnimationFrame)

## [0.2.0] - 2025-11-18

### Added
- 라온 브랜드 색상 시스템 (Navy #0A1628, Blue #3B82F6, Red #EF4444)
- Pretendard Variable 폰트 적용 (CDN)
- Header 컴포넌트 (고정 헤더, 스크롤 효과)
- Footer 컴포넌트 (4열 그리드 레이아웃)
- CTA 버튼 컴포넌트 2종 (Primary, Secondary)
- PlaceholderImage 컴포넌트 (3가지 비율)
- 모바일 Sheet 메뉴 (Accordion 포함)
- shadcn/ui 컴포넌트 설치 (Button, Sheet, Accordion)
- HOME 페이지 임시 콘텐츠 (Hero, Industries)

### Changed
- globals.css - 라온 브랜드 색상 변수 추가
- layout.tsx - Pretendard 폰트 및 메타데이터 업데이트
- page.tsx - 임시 Hero 섹션 및 Industries 카드

### Technical
- 모바일 우선 반응형 디자인 구현
- 스크롤 시 헤더 배경 전환 효과
- Tailwind CSS 커스텀 색상 변수 적용

## [0.1.0] - 2025-11-18

### Added
- Next.js 16.0.3 프로젝트 초기 설정
- Tailwind CSS v4 설치 및 설정
- shadcn/ui 초기화 (New York style, Neutral color)
- 프로젝트 문서 시스템 구축
  - `docs/01-PLAN.md` (프로젝트 계획)
  - `docs/04-PRD.md` (제품 요구사항)
  - `docs/06-DESIGN_SYSTEM.md` (디자인 시스템)
  - `docs/05-TRD.md` (기술 명세서)
  - `docs/02-TODO.md` (작업 목록)
  - `docs/03-CHANGELOG.md` (변경 기록)
- Git 초기화 및 GitHub 리포지토리 생성 (`half-nomad/raon`)
- 기획서 문서 2개 추가
  - `(주)라온토탈솔루션 웹사이트 최종 통합 기획서 v1.0.md`
  - `Design Direction Overview.md`

### Changed
- `app/globals.css` - Tailwind v4 @theme inline 사용, shadcn/ui CSS 변수 추가

### Technical Decisions
- Next.js 16 App Router 선택
- Tailwind CSS v4 사용
- shadcn/ui 컴포넌트 라이브러리 채택
- 색상 시스템: 짙은 네이비 + 화이트 + 블루 그라디언트 + 레드 악센트
- Vercel 호스팅 결정
- Resend API 이메일 서비스 선택

## [0.0.1] - 2025-11-18

### Added
- Create Next App 초기 프로젝트 생성

---

## Version Guidelines

### Semantic Versioning
- **MAJOR** (X.0.0): Breaking changes (API 변경, 구조적 변경)
- **MINOR** (0.X.0): New features (새 페이지, 새 기능 추가)
- **PATCH** (0.0.X): Bug fixes (버그 수정, 작은 개선)

### 릴리스 계획
- **v0.1.0** (2025-11-18): 프로젝트 초기 설정 ✅
- **v0.2.0** (2025-11-29): 공통 컴포넌트 완료 (Header, Footer, CTA)
- **v0.3.0** (2025-12-06): HOME 페이지 완료
- **v0.4.0** (2025-12-13): COMPANY, INDUSTRIES, PRODUCTS 완료
- **v0.5.0** (2025-12-20): PARTNERS, CONTACT 완료
- **v0.9.0** (2025-12-27): SEO 최적화 및 테스트 완료
- **v1.0.0** (2026-01-10): 프로덕션 배포 (정식 릴리스)

### Category Guidelines

#### Added
새로운 기능이나 페이지가 추가된 경우
- 새 페이지
- 새 컴포넌트
- 새 기능
- 새 문서

#### Changed
기존 기능이 변경된 경우
- 컴포넌트 개선
- 디자인 수정
- 성능 향상
- 콘텐츠 업데이트

#### Deprecated
곧 제거될 기능 (현재는 작동)
- 레거시 컴포넌트
- 오래된 API

#### Removed
제거된 기능
- 불필요한 컴포넌트 삭제
- 파일 정리

#### Fixed
버그 수정
- UI 버그
- 기능 오류
- 레이아웃 깨짐
- 성능 이슈

#### Security
보안 관련 변경
- 보안 취약점 수정
- 스팸 방지 기능
- 데이터 보호 개선

## Usage

### 자동 업데이트
세션 종료 시 "작업 정리해줘" 명령으로 자동 업데이트됩니다.

### 수동 추가
특정 항목을 직접 추가하려면:
```
"CHANGELOG에 [내용] 추가해줘"
```

### 버전 릴리스
새 버전 릴리스 시:
```
"v0.2.0 릴리스해줘"
```

## Notes
- **Unreleased 섹션**: 다음 릴리스 예정 항목
- **릴리스 시**: Unreleased → 버전 번호로 변경
- **날짜 형식**: YYYY-MM-DD
- **커밋과 연동**: Git 커밋 메시지와 일관성 유지
