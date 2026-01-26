# TODO - 라온토탈솔루션 웹사이트

> **최종 수정**: 2026-01-26
> **진행률**: 45/52 완료 (87%) - Power Plant 페이지 + 홈 페이지 개선

---

## 진행 현황

| 구분 | 완료 | 전체 | 진행률 |
|------|------|------|--------|
| P0 Critical | 9 | 9 | 100% |
| P1 High | 14 | 14 | 100% |
| P2 Medium | 18 | 18 | 100% |
| P3 Low | 2 | 9 | 22% |

---

## 🆕 Phase 5.3: Products 페이지 재설계 (✅ 완료)

> **가이드 문서**: [06-DESIGN_SYSTEM.md](./06-DESIGN_SYSTEM.md) 섹션 7-8 참조
> **목표**: 태산 스타일 (Full-page + Anchor scroll) 적용

### 5.3a - 콘텐츠 구현 (✅ 완료)

| ID | 작업 | 상태 | 비고 |
|----|------|------|------|
| P5.3-01 | Products 페이지 공통 레이아웃 (상단 2컬럼: 갤러리+설명) | ✅ done | ProductIntro 컴포넌트 |
| P5.3-02 | COMPRESSOR 콘텐츠 + 태산 스타일 | ✅ done | Full-page + Anchor 완료 |
| P5.3-03 | PUMP 콘텐츠 구현 | ✅ done | 탭 방식 |
| P5.3-04 | MIXER 콘텐츠 구현 (5개 브랜드) | ✅ done | 탭 방식 |
| P5.3-05 | bearing-lubrication 통합 페이지 생성 | ✅ done | 탭 방식 |
| P5.3-06 | MOTOR 콘텐츠 구현 | ✅ done | 탭 방식 |

### 5.3b - 태산 스타일 적용 (✅ 완료)

| ID | 작업 | 상태 | 비고 |
|----|------|------|------|
| P5.3-07 | PUMP 태산 스타일 변환 | ✅ done | Full-page + Anchor + ProductIntro 완료 (2026-01-23) |
| P5.3-08 | MIXER 태산 스타일 변환 | ✅ done | Full-page + Anchor + ProductIntro 완료 (2026-01-23) |
| P5.3-09 | MOTOR 태산 스타일 변환 | ✅ done | Full-page + Anchor + ProductIntro 완료 (2026-01-23) |
| P5.3-10 | BEARING-LUBRICATION 태산 스타일 변환 | ✅ done | Full-page + Anchor + ProductIntro 완료 (2026-01-23) |

**기준 패턴:** COMPRESSOR/MIXER (ProductIntro + Header/Footer + 밝은 배경 교대)

### 5.3c - P2 정리 작업 (✅ 완료)

| ID | 작업 | 상태 | 비고 |
|----|------|------|------|
| P5.3-11 | cylinder-liner 페이지 삭제 + redirect 설정 | ✅ done | 삭제 완료, redirect는 기존 설정 (2026-01-23) |
| P5.3-12 | bearing, oil-purifier 페이지 삭제 + redirect 설정 | ✅ done | 삭제 완료, redirect는 기존 설정 (2026-01-23) |
| P5.3-13 | 각 페이지 메인 설명문 반영 (30년 경력 + 카테고리 소개) | ✅ done | pump, mixer, bearing-lubrication 반영 (2026-01-23) |

### 5.3d - Compressor 스타일 통합 (✅ 완료)

**목표**: Compressor 페이지 디자인 패턴을 나머지 제품 페이지에 적용

**적용 패턴**:
1. Sub Nav sticky 위치 조정
2. 섹션 색상 반전 (홀수 Navy, 짝수 White)
3. 강조 카드 Navy 배경 유지
4. ProductIntro 갤러리 균등 카드 스타일
5. 서비스 카드 이미지 구조 추가
6. CTA 배경 무늬 적용

| ID | 작업 | 상태 | 비고 |
|----|------|------|------|
| P5.3-14 | Compressor 페이지 디자인 수정 | ✅ done | Sub Nav sticky, 섹션 반전, 갤러리, M&R 이미지, CTA 배경 (2026-01-25) |
| P5.3-15 | Pump 페이지 Compressor 스타일 적용 | ✅ done | Sub Nav sticky, 섹션 Navy-White 교차, 카드 Navy, 호버 효과 (2026-01-25) |
| P5.3-16 | Mixer 페이지 Compressor 스타일 적용 | ✅ done | Sub Nav sticky, 섹션 Navy-White 교차, 카드 Navy, 호버 효과 (2026-01-25) |
| P5.3-17 | Motor 페이지 Compressor 스타일 적용 | ✅ done | Sub Nav sticky, 섹션 Navy-White 교차, 카드 Navy, 호버 효과 (2026-01-25) |
| P5.3-18 | Bearing-Lubrication 페이지 Compressor 스타일 적용 | ✅ done | Sub Nav sticky, 섹션 Navy-White 교차, 카드 Navy, 호버 효과 (2026-01-25) |

### P3 - 낮은 우선순위

| ID | 작업 | 상태 | 의존성 |
|----|------|------|--------|
| P5.3-19 | 누락 이미지 추가 (motor_1.jpg) | pending | - |
| P5.3-20 | 누락 이미지 추가 (pump_1.jpg) | pending | - |
| P5.3-21 | en.json industries 섹션 번역 키 보완 | pending | - |

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
- [ ] 파트너사별 소개 내용 삽입 (P3) → [디자인 시스템 #9 참조](./06-DESIGN_SYSTEM.md#9-business-partners-요약)
- [ ] 아이템별 상세 설명 텍스트 (P3) → [디자인 시스템 #8 참조](./06-DESIGN_SYSTEM.md#8-products-콘텐츠-가이드)

### B6 대기 (공식 CI 로고)
- [ ] 스크롤 시 로고 노출 방식 최적화 (P2)
- [ ] 상단/하단 CI 로고 교체 (P3)

### 기타 대기
- [ ] AI 생성 이미지 교체 (P3)
- [ ] 기계 도면 고감도 컨셉 (P3)
- [x] 산업별 개별 페이지 생성 (P3) → [디자인 시스템 #10 참조](./06-DESIGN_SYSTEM.md#10-business-area)
  - Power plant(발전소) 페이지 생성 완료 (2026-01-26)
- [ ] 라온 회사 소개서 다운로드 버튼 (P3)
- [ ] 글로벌 파트너사 카탈로그 링크 (P3) → [디자인 시스템 #9 참조](./06-DESIGN_SYSTEM.md#9-business-partners-요약)

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
- **🆕 디자인 시스템 (통합)**: [06-DESIGN_SYSTEM.md](./06-DESIGN_SYSTEM.md) - 색상/레이아웃/콘텐츠 통합 가이드 v2.0
- **QA 리포트**: [QA_REPORT.md](./QA_REPORT.md) - 브라우저 호환성 및 모바일 UX 테스트 결과
- **SEO 등록 가이드**: [SEO-REGISTRATION-GUIDE.md](./SEO-REGISTRATION-GUIDE.md) - Naver/Google 등록 방법
- **Archive**: [archive/](./archive/) - 이전 문서 (UI_guide, PRODUCTS-REDESIGN-GUIDE)
