# Design System
# Raon Total Solution B2B Website

**Version:** 2.0
**Last Updated:** 2026-01-23
**Status:** Active

---

## Overview

라온토탈솔루션 웹사이트의 UI/UX 일관성을 위한 통합 디자인 시스템입니다.
Tailwind CSS v4 및 shadcn/ui를 기반으로 B2B 기술 기업의 전문성과 신뢰감을 전달합니다.

---

## 1. Design Principles

1. **Professional & Trustworthy**: 깔끔하고 신뢰감 있는 B2B 기술 기업 이미지
2. **Clear Information Hierarchy**: 정보의 우선순위가 명확히 드러나는 구조
3. **Mobile First**: 모바일 경험을 최우선으로 설계하고 데스크톱으로 확장
4. **Simplicity**: 아이콘 사용 최소화, 텍스트와 이미지 중심 디자인

---

## 2. Brand Identity

### Brand Values
- 30년 업력의 신뢰성
- 글로벌 파트너십
- 기술 전문성
- 고객 최우선

### Tone and Voice
- **Tone:** Professional, Reliable, Approachable
- 전문적이지만 과도하게 기술적이지 않음
- 명확하고 직접적인 메시지
- 고객 니즈 중심의 커뮤니케이션

---

## 3. Color System

### 3.1 Primary Colors

```css
/* Deep Navy - Main Brand Color */
--color-primary: #0A1628;
--color-primary-light: #1A2D47;
--color-primary-dark: #000814;

/* White - Background & Text */
--color-white: #FFFFFF;
--color-off-white: #F8FAFC;
```

### 3.2 Secondary Colors

```css
/* Bright Blue - Interactive Elements */
--color-secondary: #3B82F6;
--color-secondary-light: #60A5FA;
--color-secondary-lighter: #93C5FD;

/* Sky Blue - Background Accent */
--color-accent-bg: #E0F2FE;
--color-accent-bg-light: #F0F9FF;
```

### 3.3 Accent Colors

```css
/* Vibrant Red - CTA & Emphasis */
--color-accent-red: #EF4444;
--color-accent-red-dark: #DC2626;
--color-accent-red-light: #F87171;
--color-accent-red-bg: #FEF2F2;
```

### 3.4 Neutral Colors

```css
/* Backgrounds */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F1F5F9;      /* slate-100 */
--color-bg-tertiary: #E2E8F0;       /* slate-200 */

/* Text */
--color-text-primary: #0F172A;      /* Almost black */
--color-text-secondary: #475569;    /* Gray 600 */
--color-text-tertiary: #94A3B8;     /* Gray 400 */

/* Borders */
--color-border: #CBD5E1;            /* Gray 300 */
--color-border-light: #E2E8F0;      /* Gray 200 */
```

### 3.5 Semantic Colors (상태 표시 전용)

```css
--color-success: #10B981;    /* 성공/완료 상태 */
--color-warning: #F59E0B;    /* 경고 상태 */
--color-error: #EF4444;      /* 오류 상태 */
--color-info: #3B82F6;       /* 정보 표시 */
```

### 3.6 색상 사용 정책 (통일)

| 요소 | 색상 | 용도 |
|------|------|------|
| Primary Navy | #0A1628 | Header, Footer, Sub-Nav 배경 |
| Secondary Blue | #3B82F6 | 링크, 호버 효과 |
| Accent Red | #EF4444 | CTA 버튼, 활성 탭 표시, 강조 |
| White/Slate | #FFFFFF / #F8FAFC | 섹션 배경 (교차) |

**모든 Products 페이지에 동일한 색상 정책 적용**
- 활성 탭 하단 라인: Red (#EF4444)
- CTA 섹션 배경: Red gradient
- 섹션 배경: White ↔ Slate-50 교차

---

## 4. Typography

### Font Families

```css
--font-family-primary: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
                       'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes

```css
--font-size-h1: clamp(2rem, 5vw, 3rem);       /* 32px ~ 48px */
--font-size-h2: clamp(1.75rem, 4vw, 2.5rem);  /* 28px ~ 40px */
--font-size-h3: clamp(1.5rem, 3vw, 2rem);     /* 24px ~ 32px */
--font-size-h4: clamp(1.25rem, 2.5vw, 1.5rem);/* 20px ~ 24px */
--font-size-base: 1rem;                        /* 16px */
--font-size-small: 0.875rem;                   /* 14px */
```

### Font Weights

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

---

## 5. Spacing & Layout

### Spacing Scale

```css
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Section Spacing

```css
--section-padding-y-desktop: 96px;   /* py-24 */
--section-padding-y-mobile: 64px;    /* py-16 */
```

### Container

```css
--container-max: 1280px;             /* max-w-7xl */
--container-padding: 1rem;           /* px-4 */
```

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

---

## 6. Components

### 6.1 Buttons

**Primary CTA (Navy)**
```css
.btn-primary {
  background: #0A1628;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
}
```

**Accent CTA (Red)**
```css
.btn-accent {
  background: #EF4444;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
}
```

### 6.2 Cards

```css
.card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```

### 6.3 Header

```css
.header {
  height: 72px;
  position: fixed;
  z-index: 50;
}
```

---

## 7. Products 페이지 디자인 패턴

### 7.1 태산 스타일 개요

| 기존 방식 | 신규 방식 |
|----------|----------|
| 탭 클릭 → 해당 콘텐츠만 표시 | 모든 섹션 Full-page 노출 |
| 숨겨진 콘텐츠 | 스크롤로 전체 탐색 |
| 동적 탭 전환 | 앵커 네비게이션 + 스크롤 추적 |

### 7.2 레이아웃 구조

```
┌─────────────────────────────────────────────────────────────┐
│  Header (z-50)                                   height: 72px │
├─────────────────────────────────────────────────────────────┤
│  Sub-Nav (z-40, fixed, top: 72px)               height: 56px │
│  ┌──────────┬──────────┬──────────┬──────────┐              │
│  │ 섹션 1   │  섹션 2  │  섹션 3  │  섹션 4  │              │
│  └──────────┴──────────┴──────────┴──────────┘              │
│  - 배경: Navy (#0A1628)                                      │
│  - 활성 탭: Red 하단 라인 (#EF4444)                          │
├─────────────────────────────────────────────────────────────┤
│  [ProductIntro] - 상단 2컬럼: 갤러리 + 설명                   │
├─────────────────────────────────────────────────────────────┤
│  [Section 1] bg-white                                        │
│  ┌────────────────┐  ┌──────────────────────────┐           │
│  │    이미지      │  │   텍스트 설명             │           │
│  └────────────────┘  └──────────────────────────┘           │
├─────────────────────────────────────────────────────────────┤
│  [Section 2] bg-slate-50 (지그재그)                          │
│  ┌──────────────────────────┐  ┌────────────────┐           │
│  │   텍스트 설명             │  │    이미지      │           │
│  └──────────────────────────┘  └────────────────┘           │
├─────────────────────────────────────────────────────────────┤
│  [CTA Section] bg-gradient red                               │
│  - 상담 문의 / 제품 문의 버튼                                 │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                      │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Sub-Navigation 스타일

```tsx
<nav className="fixed top-[72px] left-0 right-0 z-40 bg-[#0A1628] border-b border-[#1a2942]">
  <button className={`px-6 py-4 text-sm font-medium ${
    active ? "text-white border-b-2 border-[#EF4444]" : "text-gray-300"
  }`}>
    {label}
  </button>
</nav>
```

### 7.4 섹션 배경 패턴

| 순서 | 배경 |
|------|------|
| 홀수 섹션 | `bg-white` |
| 짝수 섹션 | `bg-slate-50` |
| CTA 섹션 | `bg-gradient-to-br from-[#EF4444] to-[#DC2626]` |

---

## 8. Products 콘텐츠 가이드

### 8.1 페이지 구조

| 카테고리 | URL | 섹션 수 |
|---------|-----|--------|
| COMPRESSOR | /products/compressor | 4 |
| PUMP | /products/pump | 2 |
| MIXER | /products/mixer | 2 |
| BEARING & LUBRICATION | /products/bearing-lubrication | 2 |
| MOTOR | /products/motor | 2 |

---

### 8.2 COMPRESSOR

**URL:** `/products/compressor`

**메인 소개:**
> RTS는 30년 경력의 해외 제작사와 영업 기술 지원에 대한 경험을 바탕으로 왕복동압축기 부품, Turbo Compressor(원심 및 블로워) 신규 기계 공급 및 부품에 대한 SOLUTION을 제공하고 있습니다.

**Sub-Menu:**

| 섹션 ID | 라벨 |
|---------|------|
| `new` | NEW COMPRESSOR |
| `spares` | RECIPROCATING SPARE PARTS |
| `troubleshooting` | TROUBLE SHOOTING |
| `maintenance` | M&R |

**Section 1: NEW COMPRESSOR SOLUTION**
- 파트너: FIMA Maschinenbau GmbH (독일)
- 정유, 석유화학, 에너지 외 특수 산업 분야의 Process Application에 최적화된 Turbo Blower 및 Compressor 공급
- 제품군: TURBO COMPRESSORS, SPECIAL PURPOSE BLOWERS, EXPLOSION PROOF BLOWERS, HERMETICALLY ENCAPSULATED BLOWERS

**Section 2: RECIPROCATING SPARE PARTS**
- 30년 경험 기반 왕복동압축기 부품 공급
- 모든 제작사의 CAPITAL PARTS 및 CONSUMABLE PARTS 공급
- 부품: CYLINDER LINER, PISTON, PISTON ROD, PISTON RING & RIDER RING, STUFFING BOX, OIL SCRAPER, VALVE ASSY

**Section 3: TROUBLE SHOOTING**
- TURBO COMPRESSOR 및 왕복 압축기 부품 TROUBLE 발생 시
- GLOBAL OEM 및 SUB-SUPPLIER, 국내 SERVICE NETWORK를 통한 최적화된 SOLUTION 제안

**Section 4: M&R (MAINTENANCE & REPAIR)**
- 현지 정비업체와의 SERVICE PARTNERSHIP
- 신규 기계 설치 공사, 회전기계 정비작업, 부품 수리 SOLUTION

---

### 8.3 PUMP

**URL:** `/products/pump`

**메인 소개:**
> 스위스에 소재한 CP Pump의 국내대리점으로써 Magnetic Driven(Sealess) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공하고 있습니다.

**Sub-Menu:**

| 섹션 ID | 라벨 |
|---------|------|
| `solution` | PUMP SOLUTION |
| `troubleshooting` | TROUBLE SHOOTING |

**Section 1: PUMP SOLUTION**
- 파트너: CP PUMP (스위스)
- 정유, 석유화학, 바이오, F&B 등 모든 산업 분야에 최적의 PUMP 공급
- CP Pump 베어링 특허 디자인: 이물질(1mm 이내) 30%까지 Magnetic Driven Pump로 이송 가능

**Magnetic Driven Pump (Sealless) 제품군:**
- MKP: Metal(SS, Hastelloy) Chemical Process Pump
- MKPL: PFA Lined Chemical Process Pump
- MKP-Bio: Stainless Steel Biotech Process Pump
- MSKS/MSKP/MSKPP: Solid PTFE Chemical Process Pump 시리즈
- MKTP/MKP-S/MKPL-S/SZMK/MKPP: 특수 용도 펌프

**Double Mechanical Seal Pump:**
- ZMP: Stainless Steel Chemical Process Crushing Pump
- ET: Ceramic-Lined Chemical Process Pump
- EB: PFA-Lined Chemical Process Pump

**Section 2: TROUBLE SHOOTING**
- 혹독한 부식성(황산) 유체 / Slurry(이물질)로 인한 부품 손상 해결
- 솔루션: PFA Lined Pump, 특수재질(Hastelloy C22) PUMP
- CP Pump 특허 기술로 이물질 문제 해결

---

### 8.4 MIXER

**URL:** `/products/mixer`

**메인 소개:**
> SPXFLOW의 국내 마스터 대리점으로써 현대 산업 전반에 걸쳐 중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급하고 있으며 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공하고 있습니다.

**Sub-Menu:**

| 섹션 ID | 라벨 |
|---------|------|
| `solution` | Mixing Solution |
| `brands` | SPXFlow Mixer Brands |

**파트너:** SPXFLOW

**Section 1: Mixing Solution**
- 다양한 산업 분야의 혼합 공정 솔루션
- 생산성 향상, 에너지 절감, 비용 절감

**Section 2: SPXFlow Mixer Brands (5개 브랜드 카드)**

| 브랜드 | 태그라인 | 주요 용도 |
|--------|---------|----------|
| **LIGHTNIN** | 첨단 기술 기반의 고효율 혼합 솔루션 | 폐수/수처리, 화학, 바이오 연료, 제약 공정 |
| **PLENTY** | 70년 전통의 유체 역학 전문가 | 저장 탱크 혼합/균질화, 슬러지 침전 방지 |
| **PHILADELPHIA** | 혁신적인 R&D와 고객 맞춤형 설계 | 화학 공정 및 일반 산업 특수 혼합 |
| **STELZER** | 엄격한 위생과 정밀한 공정 노하우 (독일) | 유제품, 제약, 식품 제조 |
| **UUTECHNIC** | 특수 교반 솔루션 | 산업용 특수 혼합 |

---

### 8.5 BEARING & LUBRICATION

**URL:** `/products/bearing-lubrication`

**메인 소개:**
> 국내 BEARING 제작사 '터보링크'와 윤활 정제기 제작사 '삼영필텍'의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공하고 있습니다.

**Sub-Menu:**

| 섹션 ID | 라벨 |
|---------|------|
| `bearing` | BEARING SOLUTION |
| `lubrication` | LUBRICATION SOLUTION |

**Section 1: BEARING SOLUTION**
- 파트너: 터보링크 TURBOLINK (국내)
- 고속 고하중 회전기계의 유체윤활베어링 설계 및 제조 전문
- 65,000rpm급 초고속 터보압축기 베어링 ~ 수백톤 고하중 터빈 발전기 베어링
- 서비스: BEARING REPAIR, REVERSE ENGINEERING, TROUBLE SHOOTING → NEW DESIGN
- 제품군: TILTING PAD JOURNAL/THRUST BEARING, COMBINED BEARING, VERTICAL GUIDE, FIXED PROFILE BEARING

**Section 2: LUBRICATION SOLUTION**
- 파트너: 삼영필텍 SAMYOUNG FILTECH (국내)
- 특허 기술: 이중 진공 시스템 + 전기 필터
- 수분 제거, 이물질 및 바니쉬 신속 제거 → Bearing 수명 연장
- 서비스: 윤활유 정제 서비스, 플러싱 서비스, 윤활유 정제기 공급
- 제품: Oil Purifier, Oil Purifier Rental Service, Oil Flushing Service

---

### 8.6 MOTOR

**URL:** `/products/motor`

**메인 소개:**
> 정유, 석유화학에 30년의 왕복동압축기 공급 실적으로 현장에 설치된 외산 모터에 대한 부품 공급 및 방폭 인증(KOSHA/KGS/KTL)에 대한 SOLUTION을 제공하고 있습니다.

**Sub-Menu:**

| 섹션 ID | 라벨 |
|---------|------|
| `spares` | MOTOR SPARE PARTS |
| `certification` | 방폭인증서비스 |

**Section 1: MOTOR SPARE PARTS SOLUTION**
- 파트너: LDW (독일), NIDEC (舊 Ansaldo, 이탈리아)
- 해외 OEM 왕복동압축기에 공급되는 외산 Motor의 Aftermarket 국내대리점
- 서비스: 국내 설치 Motor 기술지원, Supervisor 파견, Spare Parts 공급

**Section 2: 방폭인증서비스 SOLUTION**
- 국내 방폭 지역 설치 외산 수입 모터 → 국내 인증 필수
- 인증 기관: KOSHA(한국산업안전보건공단), KTL(한국산업기술시험원), KGS(한국가스안전공사)
- 서비스: 방폭 인증 필요 유무 판단, 인증 절차 컨설팅
- 국내 정유/석유화학 신설 프로젝트 다수 방폭 기계 설치 경험 보유

---

## 9. Business Partners 요약

| 카테고리 | 파트너 | 국가 |
|---------|--------|------|
| COMPRESSOR | FIMA, NEUMAN & ESSER | 독일 |
| | CASTANET | 프랑스 |
| | KB DELTA | 미국 |
| | WTQ | 중국 |
| PUMP | CP PUMP | 스위스 |
| MIXER | SPXFLOW (5개 브랜드) | 글로벌 |
| BEARING | 터보링크 | 국내 |
| LUBRICATION | 삼영필텍 | 국내 |
| MOTOR | LDW | 독일 |
| | NIDEC | 이탈리아 |

---

## 10. Business Area

| 영역 | 설명 |
|------|------|
| Oil & Gas | 정유/석유화학 |
| Power Plant | 발전소 |
| Shipbuilding | 조선 |

---

## 11. 이미지 에셋

### 디렉토리 구조

```
public/images/
├── hero/               # 메인 히어로 배경
├── industries/         # 산업별 섹션 이미지
├── products/           # 제품군 이미지
│   ├── compressor/     # 37장
│   ├── pump/           # 3장 (pump_1 누락)
│   ├── mixer/          # 4장
│   ├── bearing/        # 4장
│   ├── oil-purifier/   # 4장
│   └── motor/          # 2장 (motor_1 누락)
├── partners/           # 파트너사 로고
├── clients/            # 주요 고객사 로고
└── company/            # 회사 로고, CEO 사진
```

### 이미지 요구사항

| 용도 | 포맷 | 크기 |
|------|------|------|
| Hero | JPG/MP4 | 1920x1080px |
| Product | JPG | 800x600px (4:3) |
| Logo | PNG (투명) | 200x100px |

---

## Changelog

- **2026-01-23: v2.0** - 통합 디자인 시스템
  - UI_guide_2nd_organized.md 콘텐츠 통합
  - PRODUCTS-REDESIGN-GUIDE.md 레이아웃 패턴 통합
  - 색상 정책 통일 (브랜드 색상: Blue/Red)
  - 아이콘 사용 최소화 정책 추가
- 2025-12-15: v1.1 - Image Asset System
- 2025-11-18: v1.0 - Initial version
