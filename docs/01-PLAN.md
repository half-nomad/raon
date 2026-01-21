# Project Plan - 라온토탈솔루션 웹사이트

> **시작일**: 2025-11-18
> **1차 배포**: 2025-12-24 ✅
> **현재 상태**: 2차 개선 진행 중

---

## 프로젝트 목표

정유·석유화학 및 조선 산업 B2B 고객에게 라온토탈솔루션의 30년 회전기계 전문성을 전달하고, 견적 문의 및 기술 상담 리드를 극대화하는 전문 기업 웹사이트 구축

### 성공 지표

- [ ] 월 100건 이상의 견적/상담 문의 확보
- [x] 모바일 반응형 100% 구현
- [x] 핵심 페이지 로딩 속도 3초 이내
- [x] 주요 고객사 및 파트너사 신뢰도 시각화

---

## 마일스톤

### Phase 1: 기본 구조 및 공통 컴포넌트 ✅

- [x] 색상 시스템 구축 및 Tailwind 설정
- [x] Header + Footer 컴포넌트
- [x] CTA 버튼 시스템 (상담/제품 문의)
- [x] Placeholder 이미지 컴포넌트
- [x] Logo Carousel 컴포넌트

### Phase 2: 핵심 페이지 개발 ✅

- [x] HOME 페이지 (Hero + Industries + Products + Partners)
- [x] COMPANY 페이지 (인사말 + 연혁 + 오시는 길)
- [x] INDUSTRIES 페이지 (정유·석유화학 / 조선)
- [x] PRODUCTS 페이지 (7개 제품군 + Accordion)

### Phase 3: 기능 페이지 및 최적화 ✅

- [x] PARTNERS 페이지 (글로벌 파트너 + 고객사)
- [x] PARTNERS 로고 이미지 삽입 (16개)
- [x] CONTACT 페이지 (문의 폼 + 이메일 연동)
- [x] SEO 최적화 및 메타 태그 설정
- [x] 성능 최적화 및 이미지 최적화

### Phase 4: 다국어 및 배포 ✅

- [x] next-intl 다국어 지원 (ko/en)
- [x] 번역 파일 생성 (850+ 키)
- [x] Vercel 프로덕션 배포
- [x] 도메인 연결 (raontotalsolution.co.kr)

### Phase 5: 2차 리뉴얼 (진행 중) 🔄

콘텐츠 가이드: [UI_guide_2nd_organized.md](./UI_guide_2nd_organized.md)

#### 5.1 완료된 작업
- [x] 번역 키 누락 오류 수정
- [x] 영문 레이아웃 깨짐 수정
- [x] GNB 메뉴 개편
- [x] UI/UX 디자인 개선
- [x] SEO 기반 작업 (도메인 수정, verification 태그, 등록 가이드)

#### 5.2 구조 변경 (P0) ✅
- [x] 번역 키 추가 (messages/ko.json, en.json) - ~50개
- [x] Header 네비게이션 수정 (Products 5개 드롭다운, Industries 3개)
- [x] Products 메인 페이지 수정 (7개 → 5개 카테고리)

#### 5.3 핵심 콘텐츠 (P1) 🔄
- [x] Products 페이지 공통 레이아웃 구현 (상단 2컬럼: 갤러리+설명)
- [x] Compressor 페이지 재구성 (서브메뉴 탭 구조)
- [x] Pump 페이지 재구성 (서브메뉴 탭 구조)
- [x] Mixer 페이지 재구성 (SPXFlow 5개 브랜드)
- [x] Motor 페이지 재구성 (서브메뉴 탭 구조)
- [ ] Bearing & Lubrication 통합 페이지 완성 (Oil Purifier 통합)

#### 5.4 확장 기능 (P2)
- [ ] Power Plant 페이지 신규 생성
- [ ] Industries 메인 페이지 3영역 확장
- [ ] Partners 페이지 카테고리별 그룹핑
- [ ] URL 리다이렉트 설정 (기존 URL 호환)

#### 5.5 외부 자료 반영 (P3) - 자료 수급 후
- [ ] 파트너사별 상세 설명 삽입
- [ ] 제품 이미지 교체
- [ ] 파트너사 로고 고화질 교체

#### 파일 변경 요약
| 구분 | 개수 | 상세 |
|------|------|------|
| 수정 | 12개 | header, products/*, industries/*, partners, messages, config |
| 신규 | 2개 | bearing-lubrication, power-plant |
| 삭제 | 3개 | bearing, cylinder-liner, oil-purifier → 통합

---

## 진행 현황

| 구분 | 완료 | 전체 | 상태 |
|------|------|------|------|
| Phase 1 | 5 | 5 | ✅ 완료 |
| Phase 2 | 4 | 4 | ✅ 완료 |
| Phase 3 | 5 | 5 | ✅ 완료 |
| Phase 4 | 4 | 4 | ✅ 완료 |
| Phase 5 | 28 | 34 | 🔄 진행 중 (82%) |
| **합계** | **46** | **52** | **88%** |

---

## 기술 스택

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: shadcn/ui + Tailwind CSS v4
- **i18n**: next-intl v4.x (ko/en)
- **Email**: Resend API
- **Hosting**: Vercel
- **Domain**: raontotalsolution.co.kr

---

## 범위

### In Scope

- 7개 주요 페이지 (HOME, COMPANY, INDUSTRIES, PRODUCTS, PARTNERS, CONTACT)
- 모바일 반응형 디자인
- 문의 폼 (이메일 전송)
- SEO 기본 최적화
- 다국어 지원 (한국어/영어)

### Out of Scope

- RESOURCES 페이지 (카탈로그, Case Study, FAQ)
- 관리자 페이지
- 실시간 채팅 기능
- 회원 시스템

---

## 참조 문서

| 문서 | 용도 |
|------|------|
| [02-TODO.md](./02-TODO.md) | 작업 목록 |
| [03-CHANGELOG.md](./03-CHANGELOG.md) | 변경 기록 |
| [04-PRD.md](./04-PRD.md) | 제품 요구사항 |
| [06-DESIGN_SYSTEM.md](./06-DESIGN_SYSTEM.md) | 디자인 시스템 |
| [UI_guide_2nd_organized.md](./UI_guide_2nd_organized.md) | Products 메뉴 구조/콘텐츠 가이드 |
