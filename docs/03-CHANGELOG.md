# Changelog
# Raon Total Solution B2B Website

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned for v1.0.0
- HOME 페이지 전체 섹션 완성
- COMPANY 페이지 (인사말, 연혁, 오시는 길)
- INDUSTRIES 페이지 (정유·석유화학, 조선)
- PRODUCTS 페이지 (7개 제품군)
- PARTNERS 페이지
- CONTACT 페이지 및 문의 폼
- SEO 기본 최적화

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
