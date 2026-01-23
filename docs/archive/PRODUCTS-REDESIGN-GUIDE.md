# Products 페이지 재설계 가이드

> 태산 스타일 디자인 + UI_guide_2nd_organized.md 기준 페이지 재구조화

**Version:** 2.0
**Last Updated:** 2026-01-21

---

## 1. 개요

### 목적
- 태산(Taesan) 웹사이트 디자인 패턴 벤치마킹 적용
- `docs/UI_guide_2nd_organized.md` 기준으로 Products 페이지 구조 재설계
- 탭 기반 → **Full-page sections + Anchor scroll** 방식 전환

### 범위
5개 카테고리 페이지 재구조화
- COMPRESSOR
- PUMP
- MIXER
- BEARING & LUBRICATION (통합)
- MOTOR

### 디자인 변경 핵심
| 기존 방식 | 신규 방식 (태산 스타일) |
|----------|----------------------|
| 탭 클릭 → 해당 콘텐츠만 표시 | 모든 섹션 Full-page 노출 |
| 숨겨진 콘텐츠 | 스크롤로 전체 탐색 가능 |
| 동적 탭 전환 | 앵커 네비게이션 + 스크롤 추적 |

### 파일 구조 변경
```
[기존 8개 페이지] → [신규 5개 페이지]

products/
├── compressor/           ✅ 유지 (Cylinder Liner 통합)
├── pump/                 ✅ 유지
├── mixer/                ✅ 유지
├── bearing-lubrication/  🆕 신규 (Bearing + Oil Purifier 통합)
├── motor/                ✅ 유지
├── bearing/              ❌ 삭제 (→ bearing-lubrication)
├── oil-purifier/         ❌ 삭제 (→ bearing-lubrication)
└── cylinder-liner/       ❌ 삭제 (→ compressor)
```

---

## 2. 태산 스타일 디자인 패턴

### 2.1 벤치마킹 분석 결과
**분석 URL:**
- https://taesan21.co.kr/products/compressor_intro/intro.php
- https://taesan21.co.kr/business/oil/oil.php

### 2.2 핵심 디자인 요소

#### Fixed Sub-Navigation (상단 고정 네비게이션)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  Header (z-50)                                              height: 72px │
├─────────────────────────────────────────────────────────────────────────┤
│  Sub-Nav (z-40, fixed, top: 72px)                          height: 56px │
│  ┌────────────┬────────────┬────────────┬────────────┐                 │
│  │  섹션 1    │   섹션 2   │   섹션 3   │   섹션 4   │  ← 클릭 시 스크롤 │
│  └────────────┴────────────┴────────────┴────────────┘                 │
│  - Navy 배경 (#0A1628)                                                  │
│  - 활성 탭: Red 하단 라인 (#EF4444)                                     │
│  - 스크롤 시 자동 활성 탭 업데이트                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Full-Page Sections (전체 페이지 섹션)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Hero Section]                                                         │
│  - 대형 배경 이미지                                                      │
│  - 카테고리 타이틀 + 간략 소개                                           │
├─────────────────────────────────────────────────────────────────────────┤
│  [Section 1] id="section-1"                                             │
│  ┌────────────────────────┐  ┌────────────────────────────────────┐    │
│  │                        │  │                                    │    │
│  │   이미지               │  │   텍스트 설명                       │    │
│  │                        │  │   - 파트너사 정보                   │    │
│  │                        │  │   - 제품 목록                       │    │
│  └────────────────────────┘  └────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────────────┤
│  [Section 2] id="section-2" (역방향 - 지그재그 레이아웃)                  │
│  ┌────────────────────────────────────┐  ┌────────────────────────┐    │
│  │                                    │  │                        │    │
│  │   텍스트 설명                       │  │   이미지               │    │
│  │   - 서비스 내용                     │  │                        │    │
│  │   - 부품 목록                       │  │                        │    │
│  └────────────────────────────────────┘  └────────────────────────┘    │
├─────────────────────────────────────────────────────────────────────────┤
│  [Section 3] ... (반복)                                                 │
├─────────────────────────────────────────────────────────────────────────┤
│  [CTA Section]                                                          │
│  - 상담 문의 버튼                                                        │
│  - 제품 문의 버튼                                                        │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.3 스타일 가이드

| 요소 | 스타일 |
|------|--------|
| Sub-Nav 배경 | `bg-[#0A1628]` (Navy) |
| Sub-Nav 텍스트 | `text-gray-300` → hover: `text-white` |
| 활성 탭 표시 | 하단 `border-b-2 border-[#EF4444]` (Red) |
| 섹션 배경 교차 | White ↔ Light Gray (`bg-gray-50`) |
| 섹션 패딩 | `py-16 md:py-24` |
| 지그재그 레이아웃 | 홀수: 이미지 좌 / 짝수: 이미지 우 |

### 2.4 구현 코드 패턴

#### Fixed Sub-Navigation
```tsx
<nav className="fixed top-[72px] left-0 right-0 z-40 bg-[#0A1628] border-b border-[#1a2942]">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-center">
      {subNavItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`px-6 py-4 text-sm font-medium transition-colors ${
            activeSection === item.id
              ? "text-white border-b-2 border-[#EF4444]"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</nav>
```

#### Scroll Tracking (Intersection Observer)
```tsx
useEffect(() => {
  const handleScroll = () => {
    const sections = subNavItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 200; // offset

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(subNavItems[i].id);
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

#### Smooth Scroll to Section
```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 140; // Header(72px) + SubNav(56px) + margin
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  }
};
```

---

## 3. 카테고리별 콘텐츠 (UI_guide 원본)

### 3.1 COMPRESSOR (`/products/compressor`)

#### 메인 소개
> RTS는 30년 경력의 해외 제작사와 영업 기술 지원에 대한 경험을 바탕으로 왕복동압축기 부품, Turbo Compressor(원심 및 블로워) 신규 기계 공급 및 부품에 대한 SOLUTION을 제공하고 있습니다.

#### Sub-Menu (4개 섹션)
| 섹션 ID | 라벨 |
|---------|------|
| `new` | NEW COMPRESSOR |
| `spares` | RECIPROCATING SPARE PARTS |
| `troubleshooting` | TROUBLE SHOOTING |
| `maintenance` | M&R |

---

#### Section 1: NEW COMPRESSOR SOLUTION

**파트너:** FIMA Maschinenbau GmbH (독일)

**설명:**
정유, 석유화학, 에너지 외 특수 산업 분야의 Process Application에 최적화된 Turbo Blower 및 Compressor(Internally Geared Technology) 공급

**제품군:**
- TURBO COMPRESSORS
- SPECIAL PURPOSE BLOWERS
- EXPLOSION PROOF BLOWERS
- HERMETICALLY ENCAPSULATED BLOWERS AND COMPRESSOR

---

#### Section 2: RECIPROCATING COMPRESSOR SPARE PARTS SOLUTION

**설명:**
30년 경험 기반 왕복동압축기 부품 공급
모든 제작사의 CAPITAL PARTS 및 CONSUMABLE PARTS 공급

**부품 목록:**
- CYLINDER LINER
- PISTON
- PISTON ROD
- PISTON RING & RIDER RING
- STUFFING BOX(PACKING CUP) & INTERNAL PARTS
- OIL SCRAPER PACKING CUP & INTERNAL PARTS
- VALVE ASSY & INTERNAL PARTS (VALVE PLATE, SPRING, ETC)

---

#### Section 3: TROUBLE SHOOTING SOLUTION

**설명:**
TURBO COMPRESSOR 및 왕복 압축기 부품 TROUBLE 발생 시
GLOBAL OEM 및 SUB-SUPPLIER, 국내 SERVICE NETWORK를 통한 최적화된 SOLUTION 제안

---

#### Section 4: MAINTENANCE & REPAIR (M&R)

**설명:**
현지 정비업체와의 SERVICE PARTNERSHIP을 통해:
- 신규 기계 설치 공사
- 회전기계 정비작업
- 부품 수리 SOLUTION

---

### 3.2 PUMP (`/products/pump`)

#### 메인 소개
> 스위스에 소재한 CP Pump의 국내대리점으로써 Magnetic Driven(Sealess) Pump 전문 업체로 Metal 및 PFA Lined PUMP SOLUTION을 제공하고 있습니다.

#### Sub-Menu (2개 섹션)
| 섹션 ID | 라벨 |
|---------|------|
| `solution` | PUMP SOLUTION |
| `troubleshooting` | TROUBLE SHOOTING SOLUTION |

---

#### Section 1: PUMP SOLUTION

**파트너:** CP PUMP (스위스)

**설명:**
정유, 석유화학, 바이오, F&B 등 모든 산업 분야에 최적의 PUMP 공급
CP Pump 베어링 특허 디자인: 이물질(1mm 이내) 30%까지 Magnetic Driven Pump로 이송 가능

**Magnetic Driven Pump (Sealless) 제품군:**
| 모델 | 설명 |
|------|------|
| MKP | Metal(SS, Hastelloy) Chemical Process Pump |
| MKPL | PFA Lined Chemical Process Pump |
| MKP-Bio | Stainless Steel Biotech Process Pump |
| MSKS | Self Priming Solid PTFE Chemical Process Pump |
| MSKP | Solid PTFE Chemical Process Pump |
| MSKPP | Solid PTFE Chemical Process Peripheral Pump |
| MKTP | Stainless Steel Chemical Process Sump Pump |
| MKP-S | Stainless Steel Self Priming Chemical Process Pump |
| MKPL-S | PFA Lined Self Priming Chemical Process Pump |
| SZMK | Stainless Steel In-Line Chemical Process Pump |
| MKPP | Stainless Steel In-Line Chemical Process Peripheral |

**Double Mechanical Seal Pump 제품군:**
| 모델 | 설명 |
|------|------|
| ZMP | Stainless Steel Chemical Process Crushing Pump |
| ET | Ceramic-Lined Chemical Process Pump |
| EB | PFA-Lined Chemical Process Pump |

---

#### Section 2: TROUBLE SHOOTING SOLUTION

**설명:**
혹독한 부식성(황산) 유체 / Slurry(이물질)로 인한 부품 손상 해결

**솔루션:**
- PFA Lined Pump
- 특수재질(Hastelloy C22) PUMP

**★ 이물질에 Magnetic Pump 사용 불가? → CP Pump 특허 기술로 해결!**

---

### 3.3 MIXER (`/products/mixer`)

#### 메인 소개
> SPXFLOW의 국내 마스터 대리점으로써 현대 산업 전반에 걸쳐 중요한 제조 라인인 다양한 혼합 공정에 필요한 MIXER를 설계 제작하여 공급하고 있으며 생산성 향상, 에너지 절감 및 비용 절감을 위한 고객 맞춤형 MIXING SOLUTION을 제공하고 있습니다.

#### Sub-Menu (2개 섹션)
| 섹션 ID | 라벨 |
|---------|------|
| `solution` | Mixing Solution |
| `brands` | SPXFlow Mixer Brands |

**파트너:** SPXFLOW
**브랜드:** Lightnin | Plenty | Philadelphia | Stelzer | Uutechnic

---

#### LIGHTNIN

**태그라인:** "첨단 기술 기반의 고효율 혼합 솔루션"

**주요 용도:**
- 폐수/수처리
- 화학
- 바이오 연료
- 제약 공정
- 휴대용 유닛 ~ 대형 고정식 유닛 포트폴리오

**핵심 가치:**
독자적 기어박스와 임펠러 기술 → 더 작고 강력하며, 전력 효율 극대화

**강점:**
Anti-fouling 메커니즘 적용 → 장비 수명 연장, 가동 중단 최소화

---

#### PLENTY

**태그라인:** "70년 전통의 유체 역학 전문가"

**주요 용도:**
- 저장 탱크 내 액체 혼합/균질화
- 슬러지 침전 방지

**핵심 가치:**
Fixed(고정각)/Swivel(가변각) 다양한 Side-Entry 믹서 설계

**강점:**
- 탱크를 비우지 않고 수리 가능한 혁신적 설계
- 타사 노후 장비 → 최신 고성능 모델 교체 프로그램

---

#### PHILADELPHIA

**태그라인:** "혁신적인 R&D와 고객 맞춤형 설계" (2021년 SPX FLOW 합류)

**주요 용도:**
화학 공정 및 일반 산업 전반의 특수 혼합 공정

**핵심 가치:**
- 65년 경력 + Philadelphia Gear Corporation 기술 계승
- 최첨단 테스트와 공정 모델링 수행

**강점:**
- 전 세계 거점(미국, 영국, 인도) 신속한 현장 지원
- 고객별 100% 맞춤형 솔루션 구축

---

#### STELZER

**태그라인:** "엄격한 위생과 정밀한 공정 노하우" (독일)

**주요 용도:**
- 유제품 공정
- 제약
- 식품 제조
- 고도의 세척/연마 공정

**핵심 가치:**
- DIN EN ISO 9001:2015 표준 준수
- CFD(전산유체역학) 시뮬레이션 역량 보유

**강점:**
- 1946년부터 축적된 위생 설계 기술
- 국제 표준 준수 프로젝트 맞춤형 교반기 제작

---

#### UUTECHNIC

(정보 추가 필요)

---

### 3.4 BEARING & LUBRICATION (`/products/bearing-lubrication`)

#### 메인 소개
> 국내 BEARING 제작사, '터보링크'와 윤활 정제기 제작사'삼영필텍'의 영업대리점으로써 BEARING과 LUBRICATION에 대한 SOLUTION을 제공하고 있습니다.

#### Sub-Menu (2개 섹션)
| 섹션 ID | 라벨 |
|---------|------|
| `bearing` | BEARING SOLUTION |
| `lubrication` | LUBRICATION SOLUTION |

---

#### Section 1: BEARING SOLUTION

**파트너:** 터보링크 TURBOLINK (국내)

**설명:**
고속 고하중 회전기계의 유체윤활베어링 설계 및 제조 전문
65,000rpm급 초고속 터보압축기 베어링 ~ 축 하중 수백톤 고하중 터빈 발전기 베어링까지

**서비스:**
- BEARING REPAIR
- REVERSE ENGINEERING을 통한 BEARING 공급
- TROUBLE SHOOTING → NEW DESIGN 개선 BEARING 공급

**제품군:**
- TILTING PAD JOURNAL BEARING
- TILTING PAD THRUST BEARING
- JOURNAL & THRUST COMBINED BEARING
- VERTICAL GUIDE & THRUST BEARING
- FIXED PROFILE BEARING
- SERVICE: REPAIR, RETROFIT, REPLACEMENT

---

#### Section 2: LUBRICATION SOLUTION

**파트너:** 삼영필텍 SAMYOUNG FILTECH (국내)

**특허 기술:**
이중 진공 시스템 + 전기 필터
→ 수분 제거, 이물질 및 바니쉬 신속 제거
→ 윤활유 청정도 유지 → Bearing 수명 반영구적 연장

**서비스:**
- 모든 회전기계 윤활유 정제 서비스
- 배관 청소를 위한 플러싱 서비스
- 윤활유 정제기 공급

**제품/서비스:**
- Oil Purifier
- Oil Purifier Rental Service
- Oil Flushing Service

---

### 3.5 MOTOR (`/products/motor`)

#### 메인 소개
> 정유, 석유화학에 30년의 왕복동압축기 공급 실적으로 현장에 설치된 외산 모터에 대한 부품 공급 및 방폭 인증(KOSHA/KGS/KTL)에 대한 SOLUTION을 제공하고 있습니다.

#### Sub-Menu (2개 섹션)
| 섹션 ID | 라벨 |
|---------|------|
| `spares` | MOTOR SPARE PARTS SOLUTION |
| `certification` | 방폭인증서비스 SOLUTION |

---

#### Section 1: MOTOR SPARE PARTS SOLUTION

**파트너:**
- LDW (독일)
- NIDEC (舊 Ansaldo, 이탈리아)

**설명:**
해외 OEM(HTC) 왕복동압축기에 동력원으로 공급되는 외산 Motor의 Aftermarket 국내대리점

**서비스:**
- 국내 설치 LDW / NIDEC Motor 기술지원
- Supervisor 파견
- Spare Parts(부품) 공급

---

#### Section 2: 방폭인증서비스 (Explosion Proof Certification) SOLUTION

**설명:**
국내 방폭 지역 설치 외산 수입 모터 → 국내 인증 필수

**인증 기관:**
| 기관 | 명칭 |
|------|------|
| KOSHA | 한국산업안전보건공단 |
| KTL | 한국산업기술시험원 |
| KGS | 한국가스안전공사 |

**서비스:**
- 방폭 인증 필요 유무 판단
- 인증 절차 컨설팅

**★ 국내 정유/석유화학 신설 프로젝트 다수 방폭 기계 설치 경험 보유**

---

## 4. BUSINESS AREA

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Oil & Gas     │  │   Power Plant   │  │  Shipbuilding   │
│   정유/석유화학 │  │     발전소      │  │      조선       │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 5. BUSINESS PARTNERS (파트너사 상세)

### 5.1 COMPRESSOR 파트너

#### FIMA (독일)
- TURBO COMPRESSOR & BLOWER 제조사
- 독일/중국 공장 보유, 국내외 프로젝트 신규 기계 공급
- 국내 설치 기계 After Service 지원

#### NEUMAN & ESSER (독일)
- RECIPROCATING COMPRESSOR 제조사
- 울산 지역 영업 대리점 (SK, S-OIL)
- 기술지원, Trouble Shooting, Repair, Maintenance, Spare Parts

#### CASTANET (프랑스)
- 왕복동압축기 부품 제작사
- OEM Original 부품 + Reverse Engineering 통한 부품 공급

#### KB DELTA (미국)
- 왕복동압축기 Valve 및 Internal Parts 제작사
- Reverse Engineering 통한 합리적 가격 부품 공급

#### WTQ (중국)
- Cylinder Liner 제작사 (70년 역사)
- 원심 주조 단일 품목 전문, 글로벌 선박엔진/압축기 OEM 공급

---

### 5.2 PUMP 파트너

#### CP PUMP (스위스)
- Magnetic Driven Pump 제작사
- 고객 만족 최우선, Trouble Shooting 통한 PUMP 공급

---

### 5.3 MIXER 파트너

#### SPXFLOW
- 브랜드: LIGHTNIN, STELZER, PLENTY, PHILADELPHIA, UUTECHNIC
- 수세기 경험 기반 맞춤형 Mixing Solution 개발 공급
- Process 속도↑, 생산량↑, 에너지↓, 비용↓

---

### 5.4 BEARING & LUBRICATION 파트너

#### 터보링크 TURBOLINK (국내)
- 유체윤활베어링 설계/제조 전문
- 65,000rpm 초고속 ~ 수백톤 고하중 베어링
- Repair, Trouble Shooting, Reverse Engineering

#### 삼영필텍 SAMYOUNG FILTECH (국내)
- 윤활유 청정도 유지 전문
- 국내 특허: 수분제거, 이중 고진공시스템, 바니쉬 제거, 전기필터

---

### 5.5 MOTOR 파트너

#### LDW - Lloyd Dynamowerke GmbH (독일)
- 대형 Synchronous 및 Induction Motor 제작사
- 국내 정유/석유화학 공장 설치, 기술지원/Supervisor/부품 공급

#### NIDEC (舊 Ansaldo, 이탈리아)
- 대형 Synchronous 및 Induction Motor 제작사
- 국내 정유/석유화학 공장 설치, 기술지원/Supervisor/부품 공급

---

## 6. 마이그레이션 체크리스트

### 6.1 페이지 구현 상태

| 작업 | 콘텐츠 | 태산 스타일 | 비고 |
|------|--------|------------|------|
| compressor/page.tsx | ✅ 완료 | ✅ 완료 | Full-page + Anchor scroll (액센트: #EF4444) |
| pump/page.tsx | ✅ 완료 | ✅ 완료 | Full-page + Anchor scroll (액센트: #3B82F6) |
| mixer/page.tsx | ✅ 완료 | ✅ 완료 | Full-page + Anchor scroll (액센트: #10B981) |
| motor/page.tsx | ✅ 완료 | ✅ 완료 | Full-page + Anchor scroll (액센트: #F59E0B) |
| bearing-lubrication/page.tsx | ✅ 완료 | ✅ 완료 | Full-page + Anchor scroll (액센트: #8B5CF6) |

### 6.2 삭제 예정 페이지

| 페이지 | 상태 | Redirect 대상 |
|--------|------|---------------|
| bearing/page.tsx | ⬜ 대기 | → bearing-lubrication |
| oil-purifier/page.tsx | ⬜ 대기 | → bearing-lubrication |
| cylinder-liner/page.tsx | ⬜ 대기 | → compressor |

### 6.3 Redirect 설정

```typescript
// next.config.ts
async redirects() {
  return [
    { source: '/products/bearing', destination: '/products/bearing-lubrication', permanent: true },
    { source: '/products/oil-purifier', destination: '/products/bearing-lubrication', permanent: true },
    { source: '/products/cylinder-liner', destination: '/products/compressor', permanent: true }
  ]
}
```

---

## 7. 이미지 요구사항

| 카테고리 | 현재 | 필요 | 상태 |
|---------|------|------|------|
| COMPRESSOR | 37장 | 5장+ | ✅ 충분 |
| PUMP | 3장 | 5장 | ⚠️ pump_1 누락 |
| MIXER | 4장 | 5장 | ⚠️ 1장 부족 |
| BEARING | 4장 | 3장 | ✅ 충분 |
| OIL PURIFIER | 4장 | 3장 | ✅ 충분 |
| MOTOR | 2장 | 5장 | ⚠️ motor_1 누락, 2장 부족 |

---

## 8. 요약

| 카테고리 | Sub-Menu 수 | 주요 파트너 |
|---------|-------------|------------|
| COMPRESSOR | 4개 | FIMA, NEUMAN&ESSER, CASTANET, KB DELTA, WTQ |
| PUMP | 2개 | CP PUMP |
| MIXER | 5개 브랜드 | SPXFLOW (Lightnin, Plenty, Philadelphia, Stelzer, Uutechnic) |
| BEARING & LUBRICATION | 2개 | 터보링크, 삼영필텍 |
| MOTOR | 2개 | LDW, NIDEC |

**Business Area:** Oil & Gas / Power Plant / Shipbuilding

---

## 9. 참고 자료

| 문서 | 경로 | 용도 |
|------|------|------|
| UI 가이드 | `docs/UI_guide_2nd_organized.md` | 콘텐츠 원본 |
| 기획서 | `기획서 v1.0.md` | 제품 상세 정보 |
| TODO | `docs/02-TODO.md` | 작업 우선순위 확인 |
| 태산 벤치마킹 | taesan21.co.kr | 디자인 패턴 참조 |

---

**Version:** 2.0
**Last Updated:** 2026-01-21
