# CLAUDE.md
# Quick Reference for Claude

> 프로젝트를 빠르게 파악하고 작업을 시작하기 위한 마스터 인덱스

---

## 📖 프로젝트 개요

**라온토탈솔루션 B2B 웹사이트**
- 정유·석유화학/조선 산업 타겟
- 30년 회전기계 전문성 전달
- 핵심 CTA: 상담 문의 / 제품 문의

**스택:** Next.js 16 + Tailwind v4 + shadcn/ui + TypeScript + Vercel

---

## 📂 문서 구조

### 루트 폴더
1. **`기획서 v1.0.md`** → 전체 콘텐츠, 페이지 구조, 기능 명세
2. **`Design Direction Overview.md`** → UI/UX 레이아웃, 컴포넌트 설계

### docs/ 폴더

| 문서 | 용도 | 언제 참고? |
|------|------|-----------|
| **01-PLAN.md** | 프로젝트 계획 (4 Phase) | 일정, 마일스톤 확인 |
| **02-TODO.md** | 작업 목록 (24개) | 다음 작업 확인 |
| **03-CHANGELOG.md** | 변경 기록 | 세션 정리 시 자동 업데이트 |
| **04-PRD.md** | 제품 요구사항 | 기능 명세, User Stories |
| **05-TRD.md** | 기술 명세서 | API 스펙, 기술 구현 |
| **06-DESIGN_SYSTEM.md** | 디자인 시스템 | 색상, 스타일, 컴포넌트 |
| **07-DEPLOYMENT.md** | 배포 가이드 | Vercel 배포 방법 |
| **08-MAINTENANCE.md** | 유지보수 | 운영, 장애 대응 |

---

## 🎨 핵심 디자인

### 색상
```
Navy: #0A1628 (Primary)
White: #FFFFFF
Blue: #3B82F6 (Gradient)
Red: #EF4444 (Accent)
```

### 그리드
- 모바일 1열 → 태블릿 2열 → 데스크톱 3열
- Max width: 1240px
- Section padding: 48px(mobile) / 120px(desktop)

---

## 🗂️ 페이지 구조

| 페이지 | 참고 문서 |
|--------|----------|
| HOME | 기획서 p.134-159 |
| COMPANY | 기획서 p.162-177 |
| INDUSTRIES | 기획서 p.180-202 |
| PRODUCTS | 기획서 p.204-251 |
| PARTNERS | 기획서 p.252-278 |
| CONTACT | 기획서 p.291-307 |

---

## 🚀 작업 시작 가이드

### 1. 새 작업 전
```
docs/02-TODO.md 확인 → 다음 작업 파악
```

### 2. 디자인 구현
```
docs/06-DESIGN_SYSTEM.md → 색상/스타일
Design Direction Overview.md → 레이아웃
```

### 3. 콘텐츠 작성
```
기획서 v1.0.md → 해당 페이지 섹션 복사
```

### 4. 기술 구현
```
docs/05-TRD.md → API 스펙, 기술 가이드
```

### 5. 세션 종료
```
"작업 정리해줘" → TODO/CHANGELOG 자동 업데이트
```

---

## 🔑 핵심 정보

### 주요 브랜드
SPXFLOW, NEUMAN & ESSER, CASTANET, WTQ, CP pump

### 주요 고객사
SK에너지, S-OIL, GS칼텍스, HD현대오일뱅크

### 연락처
- Email: sales@raontotalsolution.co.kr
- Tel: 02-575-3051

---

## 🛠️ 명령어

```bash
npm run dev          # 개발 서버
npm run build        # 빌드
git push origin main # 배포 (Vercel 자동)
```

---

**시작:** `docs/02-TODO.md` → 다음 작업 확인 → 작업 시작!

**Version:** 1.0 | **Last Updated:** 2025-11-18
