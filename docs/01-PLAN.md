# Project Plan - Raon Total Solution

## Project Overview
**Project Name:** 라온토탈솔루션 B2B 웹사이트
**Start Date:** 2025-11-18
**Target Release:** 2025-12-31 (Phase 1: MVP)
**Current Status:** In Development

## Goals and Objectives

### Primary Goal
정유·석유화학 및 조선 산업 B2B 고객에게 라온토탈솔루션의 30년 회전기계 전문성을 전달하고, 견적 문의 및 기술 상담 리드를 극대화하는 전문 기업 웹사이트 구축

### Success Metrics
- [ ] 월 100건 이상의 견적/상담 문의 확보
- [ ] 모바일 반응형 100% 구현
- [ ] 핵심 페이지 로딩 속도 3초 이내
- [ ] 주요 고객사 및 파트너사 신뢰도 시각화

## Milestones

### Phase 1: 기본 구조 및 공통 컴포넌트 (Week 1-2)
- [ ] 색상 시스템 구축 및 Tailwind 설정 (완료일: 2025-11-25)
- [ ] Header + Footer 컴포넌트 (완료일: 2025-11-25)
- [ ] CTA 버튼 시스템 (상담/제품 문의) (완료일: 2025-11-25)
- [ ] Placeholder 이미지 컴포넌트 (완료일: 2025-11-26)
- [ ] Logo Carousel 컴포넌트 (완료일: 2025-11-27)

### Phase 2: 핵심 페이지 개발 (Week 3-4)
- [ ] HOME 페이지 (Hero + Industries + Products + Partners) (완료일: 2025-12-05)
- [ ] COMPANY 페이지 (인사말 + 연혁 타임라인 + 오시는 길) (완료일: 2025-12-08)
- [ ] INDUSTRIES 페이지 (정유·석유화학 / 조선) (완료일: 2025-12-10)
- [ ] PRODUCTS 페이지 (7개 제품군 + Accordion) (완료일: 2025-12-12)

### Phase 3: 기능 페이지 및 최적화 (Week 5-6)
- [ ] PARTNERS 페이지 (글로벌 파트너 + 고객사) (완료일: 2025-12-15)
- [ ] CONTACT 페이지 (문의 폼 + 이메일 연동) (완료일: 2025-12-17)
- [ ] SEO 최적화 및 메타 태그 설정 (완료일: 2025-12-19)
- [ ] 성능 최적화 및 이미지 최적화 (완료일: 2025-12-20)

### Phase 4: 테스트 및 배포 (Week 7-8)
- [ ] 모바일/태블릿/데스크톱 테스트 (완료일: 2025-12-23)
- [ ] 브라우저 호환성 테스트 (완료일: 2025-12-24)
- [ ] 문의 폼 기능 테스트 (완료일: 2025-12-26)
- [ ] 프로덕션 배포 (완료일: 2025-12-31)

## Progress Tracking

### Overall Progress
**현재 진행률:** 5%
**완료된 마일스톤:** 0 / 17
**예상 완료일:** 2025-12-31

### Weekly Progress

#### Week of 2025-11-18
**진행률:** 0% → 5%
**완료:**
- Tailwind CSS v4 + shadcn/ui 설치
- 프로젝트 구조 설정
- Git 초기화 및 GitHub 리포지토리 생성

**이슈:**
- 없음

**다음 주 계획:**
- 색상 시스템 구축
- Header/Footer 컴포넌트 개발
- HOME 페이지 Hero 섹션 시작

## Scope

### In Scope (Phase 1)
- 7개 주요 페이지 (HOME, COMPANY, INDUSTRIES, PRODUCTS, PARTNERS, CONTACT, RESOURCES 일부)
- 모바일 반응형 디자인
- 문의 폼 (이메일 전송)
- SEO 기본 최적화
- shadcn/ui 컴포넌트 활용
- 라이트 모드 (다크 모드 지원)

### Out of Scope (Phase 1)
- RESOURCES 페이지 전체 (카탈로그 다운로드, Case Study, FAQ는 Phase 2)
- 관리자 페이지
- 다국어 지원 (영문 버전은 Phase 2)
- 실시간 채팅 기능
- 복잡한 애니메이션 (기본 Framer Motion만 사용)

## Risks and Mitigation

### Technical Risks
**Risk:** 이미지 라이선스 확보 지연
**Impact:** Medium
**Mitigation:** Placeholder 이미지 컴포넌트 사용, 파트너사 공식 이미지 우선 확보, 유료 스톡 이미지 준비

**Risk:** 문의 폼 스팸 메일 발생 가능성
**Impact:** Low
**Mitigation:** reCAPTCHA 또는 간단한 honeypot 필드 추가

### Schedule Risks
**Risk:** 제품 상세 콘텐츠 작성 지연
**Impact:** Medium
**Mitigation:** 기획서 기반 1차 초안 작성 후 점진적 업데이트

**Risk:** 실제 고객사/파트너사 로고 확보 지연
**Impact:** Low
**Mitigation:** 텍스트 기반 리스트로 우선 구현, 로고는 순차적으로 업데이트

## Resources

### Team
- **Developer:** 1인 개발자 (Full-stack)
- **AI Assistant:** Claude (Pair Programming, 문서 관리)

### Tools and Technologies
- **Framework:** Next.js 16.0.3 (App Router)
- **UI Library:** shadcn/ui + Tailwind CSS v4
- **Database:** 없음 (정적 사이트, 문의 폼은 이메일 전송)
- **Hosting:** Vercel (예정)
- **Version Control:** Git + GitHub
- **AI Tools:** Claude Code

## Notes
- 모든 콘텐츠는 기획서 및 Design Direction Overview 문서 기반
- 색상: 짙은 네이비(#0A1628) + 화이트 + 블루 그라디언트(#3B82F6~#60A5FA) + 레드 악센트(#EF4444)
- 모바일 우선 설계 (Mobile First)
- CTA는 2종: "상담 문의" / "제품 문의"
