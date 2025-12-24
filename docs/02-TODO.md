# Todo List
# Raon Total Solution B2B Website

**Last Updated:** 2025-12-24
**Total Tasks:** 48
**Completed:** 48
**In Progress:** 0

**Note:** 전체 프로젝트 계획은 `docs/01-PLAN.md` 참조. 완료된 작업의 릴리스 기록은 `docs/03-CHANGELOG.md` 참조.

## 📥 Inbox

*새로 추가된 작업들 (아직 시작 전)*

### 🌐 다국어 (i18n) 구현 (Week 5-6)
**URL 구조:** 서브디렉터리 (`/ko/`, `/en/`)
**루트 처리:** 브라우저 언어 감지 → 자동 리다이렉트
**기술:** next-intl v4.x

#### Phase 1: 기반 구축 (순차) ✅ 완료
- [x] [Feature] next-intl 라이브러리 설치 (done:2025-12-24)
- [x] [Feature] i18n config 파일 생성 (i18n/, middleware.ts) (done:2025-12-24)
- [x] [Refactor] 디렉터리 구조 변경 - [locale] 동적 라우트 (15개 페이지) (done:2025-12-24)

#### Phase 2: 콘텐츠 & SEO (병렬 가능) ✅ 완료
- [x] [Feature] 번역 파일 생성 - messages/ko.json (done:2025-12-24)
- [x] [Feature] 번역 파일 생성 - messages/en.json (done:2025-12-24)
- [x] [Feature] sitemap.ts 다국어화 (hreflang 포함) (done:2025-12-24)
- [x] [Feature] 메타데이터 다국어화 (layout.tsx) (done:2025-12-24)

#### Phase 3: UI & 테스트 (순차) ✅ 완료
- [x] [Feature] 언어 스위처 컴포넌트 (Header에 추가) (done:2025-12-24)
- [x] [Test] 다국어 라우팅 테스트 (done:2025-12-24)

#### Phase 4: 페이지 본문 콘텐츠 다국어화 ✅ 완료
- [x] [Feature] 홈페이지 컴포넌트 6개 다국어화 (hero, industries-highlight, products-snapshot, partners-clients, contact-cta, footer) (done:2025-12-24)
- [x] [Feature] Company 페이지 및 컴포넌트 다국어화 (ceo-message, history-timeline, location) (done:2025-12-24)
- [x] [Feature] Industries 페이지 2개 다국어화 (oil-refinery, shipbuilding) (done:2025-12-24)
- [x] [Feature] Products 페이지 8개 다국어화 (메인 + 7개 제품 상세) (done:2025-12-24)
- [x] [Feature] Partners 페이지 다국어화 (done:2025-12-24)
- [x] [Feature] Contact 페이지 및 폼 다국어화 (done:2025-12-24)

### 기타 SEO & 디자인
- [ ] [Design] OG 이미지 13개 제작 (디자이너 협업 필요) (p:Medium, added:2025-12-18)
- [ ] [Feature] SEO Phase 3 - Naver Search Advisor 등록 (도메인 연결 후) (p:Low, added:2025-12-18)
- [ ] [Feature] SEO Phase 3 - Google Search Console 등록 (도메인 연결 후) (p:Low, added:2025-12-18)

### Phase 4: 테스트 & 배포 (Week 7-8)
- [ ] [Test] 모바일/태블릿/데스크톱 반응형 테스트 (p:High, added:2025-11-18)
- [ ] [Test] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge) (p:Medium, added:2025-11-18)
- [ ] [Deploy] Vercel 프로덕션 배포 (p:Critical, added:2025-11-18)

### 작업 타입
- `[Feature]` - 새로운 기능
- `[Bug]` - 버그 수정
- `[Refactor]` - 코드 리팩토링
- `[Docs]` - 문서 작업
- `[Test]` - 테스트 작성
- `[Deploy]` - 배포 관련
- `[Chore]` - 기타 작업

### 우선순위
- `p:Critical` - 즉시 처리 필요
- `p:High` - 높은 우선순위
- `p:Medium` - 보통 (기본값)
- `p:Low` - 낮은 우선순위

## 🔄 In Progress

*현재 작업 중인 항목들*

<!-- 작업 시작 시 여기로 이동 -->

## ✅ Done

*완료된 작업들 (최근 완료 순)*

- [x] [Feature] i18n Phase 4 - 전체 페이지 본문 콘텐츠 다국어화 (21개 컴포넌트/페이지) (done:2025-12-24)
- [x] [Test] i18n 다국어 라우팅 테스트 (라우트, 메타데이터, hreflang 검증) (done:2025-12-24)
- [x] [Feature] i18n Phase 3 - 언어 스위처 컴포넌트 (Header 데스크톱/모바일) (done:2025-12-24)
- [x] [Feature] i18n Phase 2 - 번역 파일(ko/en.json), sitemap 다국어화, 메타데이터 다국어화 (done:2025-12-24)
- [x] [Feature] i18n Phase 1 - next-intl 설치, config, 디렉터리 구조 변경 ([locale] 동적 라우트) (done:2025-12-24)
- [x] [Feature] History Timeline 스크롤 인터랙티브 프로그레스 바 (다크테마, 지그재그, IntersectionObserver) (done:2025-12-24)
- [x] [Feature] Contact 오시는 길 지도 삽입 (구글 iframe + 카카오/네이버 이미지 탭) (done:2025-12-23)
- [x] [Style] Company 연혁 타임라인 redesign (내림차순, 지그재그, 전파 효과) (done:2025-12-23)
- [x] [Feature] Company 페이지 연혁 Framer Motion 애니메이션 적용 (done:2025-12-23)
- [x] [Feature] BackButton & Breadcrumb 컴포넌트 생성 (dark/light variant) (done:2025-12-23)
- [x] [Feature] 제품 상세 페이지 7개에 뒤로가기 버튼 + Breadcrumb 추가 (done:2025-12-23)
- [x] [Refactor] Partners 페이지 이모지 6개를 lucide-react 아이콘으로 교체 (done:2025-12-23)
- [x] [Feature] CONTACT - 파일 첨부 기능 (PDF, 이미지, Word, 최대 5MB, 3개) (done:2025-12-23)
- [x] [Style] 문의 이메일 템플릿 테이블 형식으로 개선 (가시성 향상) (done:2025-12-23)
- [x] [Refactor] 전체 코드베이스 lucide-react 아이콘 적용 (14개 파일, 이모지 50개 제거) (done:2025-12-23)
- [x] [Feature] Industries 페이지 대표 이미지 추가 (정유·석유화학, 조선) (done:2025-12-23)
- [x] [Feature] Partners 페이지 파트너/클라이언트 로고 16개 삽입 (done:2025-12-23)
- [x] [Refactor] 클라이언트 데이터 정리 (TKG+휴켐스 → TJG Huchems 통합) (done:2025-12-23)
- [x] [Chore] 산업별 이미지 최적화 (shipbuilding 7.4MB→1.6MB, oil-refinery 6.2MB→1.3MB) (done:2025-12-22)
- [x] [Feature] Motor 제품 통합 (제품 상세/메인/Products 페이지에 이미지 적용) (done:2025-12-22)
- [x] [Refactor] Motor 페이지 구조 변경 (파트너 중심→제품 중심, ImageGallery 적용) (done:2025-12-22)
- [x] [Feature] 전체 제품 이미지 적용 (Products & Solutions 7개, 주요 제품 6개) (done:2025-12-22)
- [x] [Feature] SEO Phase 2 - Product Schema 7개 제품 추가 (done:2025-12-18)
- [x] [Feature] SEO Phase 2 - 페이지별 맞춤 메타 태그 (제품 7개 + 산업 2개) (done:2025-12-18)
- [x] [Docs] OG 이미지 제작 가이드 작성 (13개 이미지 스펙) (done:2025-12-18)
- [x] [Feature] SEO Phase 1 - 메타 태그, Schema, Sitemap 구현 (done:2025-12-18)
- [x] [Style] PRODUCTS, PARTNERS, CONTACT 페이지 히어로 섹션 가운데 정렬 (done:2025-12-15)
- [x] [Style] 전체 페이지 통일 (Header, Footer, 배경 무늬 패턴 추가) (done:2025-12-15)
- [x] [Feature] Resend API 이메일 전송 연동 (rts@raontotalsolution.co.kr) (done:2025-12-15)
- [x] [Feature] CONTACT - API Route 구현 (/api/contact) (done:2025-12-15)
- [x] [Feature] CONTACT - 문의 폼 (shadcn Form + Zod) (done:2025-12-15)
- [x] [Feature] PARTNERS - 주요 고객사 그리드 (7개 고객사) (done:2025-11-18)
- [x] [Feature] PARTNERS - 글로벌 파트너 섹션 (10개 파트너사) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Oil Purifier 상세 페이지 (삼영필텍, 모델 스펙 테이블) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Cylinder Liner for Ship 상세 페이지 (WTQ) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Bearing 상세 페이지 (터보링크, 3개 제품군) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Pump 상세 페이지 (CP Pumpen, 15개 모델) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Motor 상세 페이지 (NIDEC, 8개 제품군) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Mixer & Agitator 상세 페이지 (SPX FLOW) (done:2025-11-18)
- [x] [Feature] PRODUCTS - Compressor 상세 (6개 섹션, Consumable parts 4개 하위 Accordion) (done:2025-11-18)
- [x] [Feature] PRODUCTS - 메인 페이지 (7개 제품군 카드) (done:2025-11-18)
- [x] [Docs] 문서 구조 개선 (PLAN/TODO/CHANGELOG 중복 제거) (done:2025-11-18)
- [x] [Feature] Header INDUSTRIES 드롭다운 메뉴 (done:2025-11-18)
- [x] [Feature] INDUSTRIES - 조선 페이지 (done:2025-11-18)
- [x] [Feature] INDUSTRIES - 정유·석유화학 페이지 (done:2025-11-18)
- [x] [Feature] INDUSTRIES - 메인 페이지 리다이렉트 구현 (done:2025-11-18)
- [x] [Feature] COMPANY - 오시는 길 (지도 placeholder) (done:2025-11-18)
- [x] [Feature] COMPANY - 연혁 타임라인 (2020~2025) (done:2025-11-18)
- [x] [Feature] COMPANY - CEO 인사말 섹션 (done:2025-11-18)
- [x] [Feature] HOME - Partners & Clients (로고 슬라이더) (done:2025-11-18)
- [x] [Feature] HOME - Products Snapshot (5개 제품군 카드) (done:2025-11-18)
- [x] [Feature] HOME - Industries Highlight (2개 카드) (done:2025-11-18)
- [x] [Feature] HOME - Hero 섹션 (배경 비디오 placeholder + CTA) (done:2025-11-18)
- [x] [Feature] 모바일 Sheet 메뉴 (shadcn Sheet + Accordion) (done:2025-11-18)
- [x] [Feature] PlaceholderImage 컴포넌트 (done:2025-11-18)
- [x] [Feature] CTA 버튼 컴포넌트 2종 (상담/제품 문의) (done:2025-11-18)
- [x] [Feature] Footer 컴포넌트 구현 (done:2025-11-18)
- [x] [Feature] Header 컴포넌트 구현 (고정, 스크롤 효과) (done:2025-11-18)
- [x] [Feature] Pretendard Variable 폰트 설치 및 설정 (done:2025-11-18)
- [x] [Feature] 색상 시스템 globals.css 업데이트 (done:2025-11-18)
- [x] [Chore] Tailwind CSS v4 + shadcn/ui 설치 (done:2025-11-18)
- [x] [Docs] 프로젝트 문서 생성 (PLAN, PRD, DESIGN_SYSTEM) (done:2025-11-18)
- [x] [Chore] Git 초기화 및 GitHub 리포지토리 생성 (done:2025-11-18)

## 📊 Statistics

### This Week (2025-12-23 ~ 2025-12-24)
**Completed:** 16 tasks
**Added:** 6 tasks
**Average Completion Time:** ~30분/작업

### This Month (2025-12)
**Completed:** 21 tasks
**Bugs Fixed:** 0
**Features Added:** 14
**Tests Added:** 1
**Docs Added:** 1
**Style Updates:** 2
**Refactoring:** 3
**Chore:** 1

## 🗓️ Scheduled Tasks

### Week 1-2 (2025-11-18 ~ 2025-11-29)
- [ ] 색상 시스템 및 공통 컴포넌트 완료 (due:2025-11-29)

### Week 3-4 (2025-12-02 ~ 2025-12-13)
- [ ] 핵심 페이지 4개 완료 (HOME, COMPANY, INDUSTRIES, PRODUCTS) (due:2025-12-13)

### Week 5-6 (2025-12-16 ~ 2025-12-27)
- [ ] PARTNERS, CONTACT 페이지 및 SEO 최적화 (due:2025-12-27)

### Week 7-8 (2025-12-30 ~ 2026-01-10)
- [ ] 테스트 및 프로덕션 배포 (due:2026-01-10)

## 🔖 Notes

### 작업 규칙
1. 새 작업은 Inbox에 추가
2. 시작할 때 In Progress로 이동
3. 완료 시 Done으로 이동 (자동 날짜 기록)
4. Critical 우선순위는 즉시 처리

### 사용 방법
- **작업 추가:** "TODO에 [작업명] 추가해줘"
- **작업 시작:** "[작업명] 시작했어"
- **작업 완료:** "[작업명] 완료했어"
- **긴급 버그:** "버그 기록해줘: [내용]"

### 주요 마일스톤
- **2025-11-29:** Phase 1 완료 (공통 컴포넌트)
- **2025-12-13:** Phase 2 완료 (핵심 페이지)
- **2025-12-27:** Phase 3 완료 (기능 페이지)
- **2026-01-10:** Phase 4 완료 (배포)
