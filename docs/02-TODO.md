# TODO - 라온토탈솔루션 웹사이트

> **최종 수정**: 2026-01-21
> **진행률**: 25/33 완료 (76%) - Phase 5.2 완료

---

## 진행 현황

| 구분 | 완료 | 전체 | 진행률 |
|------|------|------|--------|
| P0 Critical | 9 | 9 | 100% |
| P1 High | 6 | 7 | 86% |
| P2 Medium | 6 | 8 | 75% |
| P3 Low | 0 | 9 | 0% |

---

## 즉시 가능한 작업

의존성 없이 바로 진행 가능한 작업:

### 1. 모바일 가독성 재점검 (P2) ✅ 코드 검증 완료
- [x] 모바일 메뉴 UI 검수 (코드 기반)
- [x] 폰트 크기 / 터치 영역 확인 → **P0 이슈 발견 (아래 참조)**
- [ ] 테스트: iOS Safari, Android Chrome (실기 테스트 필요)

### 2. 터치 영역 수정 (P0) ✅ 완료
- [x] 모바일 메뉴 버튼: `size-9` → `size-11` (44px)
- [x] CTA 버튼: `py-3` → `py-4 min-h-11` (44px)
- [x] 상세: [QA_REPORT.md](./QA_REPORT.md) 참조

### 3. SEO 등록 (P3) ✅ 코드 준비 완료
- [x] 도메인 .co.kr → .com 수정 (sitemap, robots, layout)
- [x] Verification 메타태그 placeholder 추가
- [x] 등록 가이드 작성 → [SEO-REGISTRATION-GUIDE.md](./SEO-REGISTRATION-GUIDE.md)
- [ ] Naver Search Advisor 등록 (고객 계정 필요)
- [ ] Google Search Console 등록 (고객 계정 필요)

### 4. 브라우저 호환성 테스트 ✅ 코드 검증 완료
- [x] Chrome, Safari, Firefox, Edge 호환성 (코드 기반)
- [x] 모바일/태블릿/데스크톱 반응형 (코드 기반)
- [ ] 실제 브라우저 수동 테스트 (실기 필요)

---

## 외부 의존성 대기 작업

고객사 확인/자료 필요:

### B2 대기 (부품 사진 + 텍스트)
- [ ] 파트너사 로고 화질 개선 (P1)
- [ ] 부품 사진 누끼 작업 (P3)
- [ ] 파트너사별 소개 내용 삽입 (P3) → [UI 가이드 참조](./UI_guide_2nd_organized.md#7-business-partners)
- [ ] 아이템별 상세 설명 텍스트 (P3) → [UI 가이드 참조](./UI_guide_2nd_organized.md)

### B6 대기 (공식 CI 로고)
- [ ] 스크롤 시 로고 노출 방식 최적화 (P2)
- [ ] 상단/하단 CI 로고 교체 (P3)

### 기타 대기
- [ ] AI 생성 이미지 교체 (P3)
- [ ] 기계 도면 고감도 컨셉 (P3)
- [ ] 산업별 개별 페이지 생성 (P3) → [UI 가이드 #6](./UI_guide_2nd_organized.md#6-business-area)
  - Power plant(발전소) 섹션 추가 포함
- [ ] 라온 회사 소개서 다운로드 버튼 (P3)
- [ ] 글로벌 파트너사 카탈로그 링크 (P3) → [파트너 목록](./UI_guide_2nd_organized.md#7-business-partners)

---

## Blockers (고객사 확인 필요)

| ID | 내용 | 영향 범위 | 상태 |
|----|------|----------|------|
| B1 | 파트너사 클릭 UI 방식 (사이드 카드 vs 팝업) | 파트너 상세 | 대기 |
| B2 | 부품 사진 + 상세 텍스트 전달 | P1, P3 다수 | 대기 |
| B3 | 다국어 병기 방식 확정 | SEO 전략 | 대기 |
| B4 | 로그인/회원가입 기능 필요 여부 | 향후 기능 | 대기 |
| B5 | 메일 발송 유료 플랜 승인 (주 100건 초과 시) | Resend API | 대기 |
| B6 | 공식 CI 로고 파일 전달 | P2, P3 로고 | 대기 |

---

## 완료된 작업

### P0 - Critical (100%)
- [x] 번역 키 누락 오류 수정 (products, footer)
- [x] 영문 전환 시 레이아웃 깨짐 수정
- [x] 스크롤 애니메이션 버그 수정
- [x] 외부 링크/버튼 활성화 (Privacy/Terms 페이지)

### P1 - High (86%)
- [x] GNB 메뉴명 변경 (Industry → Business Field, Product → Business Item)
- [x] 회사 소개 하위 메뉴 추가 (인사말, 연혁, 찾아오시는 길)
- [x] 푸터에 사업자 정보, 대표자, 정보관리책임자 기재
- [x] 전문 용어 번역 오타 수정
- [x] 수신 메일 주소 통일 (rts@raontotalsolution.co.kr)

### P2 - Medium (75%)
- [x] 대화면 여백 문제 해결 (section-container 반응형 클래스)
- [x] 비즈니스 파트너 섹션 크기 축소
- [x] 히어로 섹션 밝은 톤 변경
- [x] 배경 여백 보완 (파트너 섹션 배경색)
- [x] 문의 카테고리 리스트 연동 (9개)
- [x] 방문 상담 메뉴 상단 배치

### Phase 1-4: 기반 구축 ~ 다국어 (100%)
- [x] 색상 시스템 + Tailwind 설정
- [x] Header/Footer + CTA 버튼 시스템
- [x] HOME/COMPANY/INDUSTRIES/PRODUCTS 페이지
- [x] PARTNERS/CONTACT 페이지 + 이메일 연동
- [x] next-intl 다국어 지원 (ko/en)
- [x] Vercel 프로덕션 배포 (raontotalsolution.co.kr)

---

## 작업 순서 가이드

```
1. 즉시 가능 작업 완료
   ├─ 모바일 가독성 검수
   ├─ SEO 등록 (Naver, Google)
   └─ 브라우저 호환성 테스트

2. 고객사 Blocker 해결 요청
   ├─ B2: 부품 사진 + 텍스트
   └─ B6: CI 로고 파일

3. 자료 확보 후 P1/P2/P3 진행
   └─ 로고 교체, 이미지 개선, 콘텐츠 확장
```

---

## 참조

- **프로젝트 계획**: [01-PLAN.md](./01-PLAN.md) - Phase 5에 2차 리뉴얼 계획 포함
- **변경 기록**: [03-CHANGELOG.md](./03-CHANGELOG.md)
- **콘텐츠 가이드**: [UI_guide_2nd_organized.md](./UI_guide_2nd_organized.md) - Products 메뉴 구조 및 콘텐츠
- **QA 리포트**: [QA_REPORT.md](./QA_REPORT.md) - 브라우저 호환성 및 모바일 UX 테스트 결과
- **SEO 등록 가이드**: [SEO-REGISTRATION-GUIDE.md](./SEO-REGISTRATION-GUIDE.md) - Naver/Google 등록 방법
