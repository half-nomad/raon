# TODO - 라온토탈솔루션 웹사이트

> **최종 수정**: 2025-12-27
> **진행률**: 53/59 완료 (90%) - 2차 개선 P1 진행 중

---

## 현재 진행 중

### 2차 개선 작업 (고객 미팅 2025.12.26)

상세 내용은 [tasks_2nd.md](./tasks_2nd.md) 참조

#### P0 - Critical ✅ 완료
- [x] 번역 키 누락 오류 수정 (products, footer)
- [x] 영문 전환 시 레이아웃 깨짐 수정 (문제 없음 확인)
- [x] 스크롤 애니메이션 버그 수정
- [x] 외부 링크/버튼 활성화 (Footer 링크 + Privacy/Terms 페이지 생성)

#### P1 - High (진행 중)
- [x] GNB 메뉴명 변경: Industry → Business Field
- [x] GNB 메뉴명 변경: Product → Business Item
- [x] 회사 소개 하위 메뉴 추가 (인사말, 연혁, 찾아오시는 길)
- [x] 푸터에 사업자 정보, 대표자, 정보관리책임자 기재
- [x] 전문 용어(부품명) 번역 오타 수정
- [ ] 파트너사 로고 화질 개선

---

## 완료된 작업

### Phase 4: 다국어 (i18n) - 완료 ✅

- [x] next-intl 라이브러리 설치
- [x] i18n config 파일 생성 (i18n/, middleware.ts)
- [x] 디렉터리 구조 변경 - [locale] 동적 라우트 (15개 페이지)
- [x] 번역 파일 생성 (ko.json, en.json)
- [x] sitemap.ts 다국어화 (hreflang 포함)
- [x] 메타데이터 다국어화 (layout.tsx)
- [x] 언어 스위처 컴포넌트 (Header)
- [x] 전체 페이지 본문 콘텐츠 다국어화 (21개 컴포넌트)

### Phase 3: 기능 페이지 - 완료 ✅

- [x] PARTNERS 페이지 (글로벌 파트너 + 고객사)
- [x] PARTNERS 로고 이미지 삽입 (16개)
- [x] CONTACT 페이지 (문의 폼 + 이메일 연동)
- [x] 파일 첨부 기능 (PDF, 이미지, Word)
- [x] SEO 최적화 및 메타 태그 설정
- [x] 성능 최적화 및 이미지 최적화

### Phase 2: 핵심 페이지 - 완료 ✅

- [x] HOME 페이지 (Hero + Industries + Products + Partners)
- [x] COMPANY 페이지 (인사말 + 연혁 + 오시는 길)
- [x] INDUSTRIES 페이지 (정유·석유화학 / 조선)
- [x] PRODUCTS 페이지 (7개 제품군 상세)

### Phase 1: 기반 구축 - 완료 ✅

- [x] 색상 시스템 구축 및 Tailwind 설정
- [x] Header + Footer 컴포넌트
- [x] CTA 버튼 시스템
- [x] 모바일 Sheet 메뉴

### 배포 - 완료 ✅

- [x] Vercel 프로덕션 배포 (raontotalsolution.co.kr)
- [x] DNS 설정 (가비아 A 레코드)
- [x] Git Dual Push 설정

---

## 대기 중

### SEO 추가 작업

- [ ] OG 이미지 13개 제작 (디자이너 협업 필요)
- [ ] Naver Search Advisor 등록
- [ ] Google Search Console 등록

### 테스트

- [ ] 모바일/태블릿/데스크톱 반응형 테스트
- [ ] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)

---

## 작업 타입

- `[Feature]` 새로운 기능
- `[Bug]` 버그 수정
- `[Refactor]` 코드 리팩토링
- `[Style]` 스타일/디자인 변경
- `[Docs]` 문서 작업
- `[Test]` 테스트
- `[Deploy]` 배포
- `[Chore]` 기타

---

## 참조 문서

- 전체 계획: [01-PLAN.md](./01-PLAN.md)
- 변경 기록: [03-CHANGELOG.md](./03-CHANGELOG.md)
- 2차 개선: [tasks_2nd.md](./tasks_2nd.md)
