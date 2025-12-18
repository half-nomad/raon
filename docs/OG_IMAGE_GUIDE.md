# OG 이미지 생성 가이드
# Open Graph Image Creation Guide

**작성일**: 2025-12-18
**대상**: 디자이너, 마케팅 담당자

---

## 📊 개요

라온토탈솔루션 웹사이트의 소셜 미디어 공유 최적화를 위한 Open Graph (OG) 이미지 생성 가이드입니다.

### 필요한 OG 이미지

| 번호 | 파일명 | 용도 | 우선순위 |
|-----|--------|-----|---------|
| 1 | `main-og.jpg` | 메인 페이지 | ⭐⭐⭐ 높음 |
| 2 | `compressor-og.jpg` | Compressor 제품 | ⭐⭐⭐ 높음 |
| 3 | `mixer-og.jpg` | Mixer 제품 | ⭐⭐ 중간 |
| 4 | `motor-og.jpg` | Motor 제품 | ⭐⭐ 중간 |
| 5 | `pump-og.jpg` | Pump 제품 | ⭐⭐ 중간 |
| 6 | `bearing-og.jpg` | Bearing 제품 | ⭐⭐ 중간 |
| 7 | `cylinder-liner-og.jpg` | Cylinder Liner 제품 | ⭐⭐ 중간 |
| 8 | `oil-purifier-og.jpg` | Oil Purifier 제품 | ⭐⭐ 중간 |
| 9 | `oil-refinery-og.jpg` | 정유·석유화학 산업 | ⭐⭐⭐ 높음 |
| 10 | `shipbuilding-og.jpg` | 조선 산업 | ⭐⭐⭐ 높음 |
| 11 | `company-og.jpg` | 회사 소개 | ⭐ 낮음 |
| 12 | `partners-og.jpg` | 파트너사 | ⭐ 낮음 |
| 13 | `contact-og.jpg` | 문의 페이지 | ⭐ 낮음 |

**총 13개 이미지**

---

## 🎨 디자인 규격

### 기본 스펙

```
크기: 1200 x 630px (필수)
포맷: JPG 또는 PNG
용량: 최대 5MB (권장: 300KB 이하)
색상: RGB
해상도: 72 DPI
```

### 안전 영역 (Safe Zone)

소셜 미디어 플랫폼마다 이미지를 다르게 크롭하므로, 중요한 텍스트와 로고는 안전 영역 내에 배치해야 합니다.

```
┌─────────────────────────────────┐
│ [1200 x 630px]                  │
│  ┌───────────────────────────┐  │
│  │ [1000 x 500px]            │  │
│  │   안전 영역 (Safe Zone)   │  │
│  │   모든 중요 요소는        │  │
│  │   이 안에 배치            │  │
│  └───────────────────────────┘  │
│   상하좌우 100px 여백            │
└─────────────────────────────────┘
```

---

## 🎨 브랜드 가이드

### 색상 팔레트

```css
/* 주요 색상 */
Navy (Primary): #0A1628
White: #FFFFFF
Blue (Accent): #3B82F6
Red (Highlight): #EF4444

/* 그라데이션 */
Background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%)
```

### 타이포그래피

```
주 제목: Pretendard Bold, 60-80px
부제목: Pretendard SemiBold, 32-40px
본문: Pretendard Regular, 24-28px

영문: Pretendard 또는 Inter
한글: Pretendard
```

### 로고

- **위치**: 좌상단 또는 우하단
- **크기**: 최소 120px 너비
- **버전**: 흰색 로고 (어두운 배경)

---

## 📐 템플릿 레이아웃

### 템플릿 A: 메인 페이지 (main-og.jpg)

```
┌─────────────────────────────────────┐
│  라온토탈솔루션 로고 (좌상단)        │
│                                     │
│                                     │
│     라온토탈솔루션                  │
│     회전기계 및 압축기 부품 전문    │
│                                     │
│     30년 경험 | 글로벌 파트너십     │
│                                     │
│                                     │
│  [배경: 산업 플랜트 이미지 오버레이]│
└─────────────────────────────────────┘
```

**요소**:
- 배경: 정유 플랜트 또는 압축기 이미지 (어둡게 오버레이)
- 주 제목: "라온토탈솔루션" (70px, Bold, 흰색)
- 부제목: "회전기계 및 압축기 부품 전문" (36px, SemiBold, 흰색)
- 태그라인: "30년 경험 | 글로벌 파트너십" (28px, Regular, 연한 회색)
- 로고: 좌상단, 140px 너비

---

### 템플릿 B: 제품 페이지 (7개)

```
┌─────────────────────────────────────┐
│  라온토탈솔루션 로고 (좌상단)        │
│                                     │
│  ┌─────────────┐                   │
│  │             │  Compressor       │
│  │ 제품 이미지  │  왕복동 압축기 부품│
│  │             │                   │
│  └─────────────┘  • 특징 1         │
│                   • 특징 2         │
│                   • 특징 3         │
│                                     │
│                 [제조사 로고]       │
└─────────────────────────────────────┘
```

**요소**:
- 배경: 그라데이션 (#0A1628 → #1a2942)
- 제품 이미지: 좌측 400x400px (또는 실제 제품 사진)
- 제품명: "Compressor" (60px, Bold, 흰색)
- 부제목: "왕복동 압축기 부품" (32px, SemiBold, 연한 회색)
- 특징: 3개 불릿 포인트 (24px, Regular, 흰색)
- 제조사 로고: 우하단 (SPXFLOW, NEUMAN & ESSER 등)

**제품별 특징 텍스트**:

1. **Compressor** (`compressor-og.jpg`)
   - 특징 1: "왕복동, 로터리 스크류, 원심식"
   - 특징 2: "Cylinder Liner, Piston, Valve"
   - 특징 3: "WTQ, Castanet, KB Delta"

2. **Mixer** (`mixer-og.jpg`)
   - 특징 1: "SPX FLOW 검증된 기술력"
   - 특징 2: "유체 혼합 및 균질화"
   - 특징 3: "Lightnin, Plenty, Stelzer"

3. **Motor** (`motor-og.jpg`)
   - 특징 1: "NIDEC 산업용 전동기"
   - 특징 2: "Inverter, Servo, Geared"
   - 특징 3: "8개 제품군 전문 공급"

4. **Pump** (`pump-og.jpg`)
   - 특징 1: "CP Pumpen 15개 모델"
   - 특징 2: "화학약품 안전 이송"
   - 특징 3: "MKP, MKPL, MCP, VCP"

5. **Bearing** (`bearing-og.jpg`)
   - 특징 1: "터보링크 고성능 베어링"
   - 특징 2: "Tilting Pad 기술"
   - 특징 3: "고속·고하중 환경 최적화"

6. **Cylinder Liner** (`cylinder-liner-og.jpg`)
   - 특징 1: "WTQ 선박용 실린더 라이너"
   - 특징 2: "직경 480~1500mm"
   - 특징 3: "조선 산업 필수 부품"

7. **Oil Purifier** (`oil-purifier-og.jpg`)
   - 특징 1: "삼영필텍 오일 정화 시스템"
   - 특징 2: "진공 증발 방식"
   - 특징 3: "수분·불순물 제거"

---

### 템플릿 C: 산업 페이지 (2개)

```
┌─────────────────────────────────────┐
│  라온토탈솔루션 로고 (좌상단)        │
│                                     │
│                                     │
│     정유·석유화학 산업              │
│     Oil Refinery & Petrochemical    │
│                                     │
│     30년 경험의 전문 솔루션         │
│     Compressor | Pump | Mixer      │
│                                     │
│  [배경: 정유 플랜트 실제 사진]      │
└─────────────────────────────────────┘
```

**요소**:
- 배경: 해당 산업 플랜트 실제 사진 (어둡게 오버레이)
- 주 제목: "정유·석유화학 산업" (66px, Bold, 흰색)
- 영문 제목: "Oil Refinery & Petrochemical" (32px, SemiBold, 연한 회색)
- 부제목: "30년 경험의 전문 솔루션" (28px, Regular, 흰색)
- 제품 태그: "Compressor | Pump | Mixer" (24px, Regular, #3B82F6)

**산업별 이미지**:

1. **정유·석유화학** (`oil-refinery-og.jpg`)
   - 배경: 정유 플랜트, 압축기, 파이프라인
   - 제품 태그: "Compressor | Pump | Mixer | Bearing"

2. **조선** (`shipbuilding-og.jpg`)
   - 배경: 선박 엔진, 조선소, 실린더 라이너
   - 제품 태그: "Cylinder Liner | Oil Purifier | Bearing"

---

## 🖼️ 이미지 소스 가이드

### 무료 이미지 사이트

1. **Unsplash** (https://unsplash.com/)
   - 검색어: "industrial plant", "oil refinery", "compressor", "machinery"
   - 라이선스: 상업적 이용 가능

2. **Pexels** (https://www.pexels.com/)
   - 검색어: "factory", "industrial equipment", "petrochemical"
   - 라이선스: 상업적 이용 가능

3. **Pixabay** (https://pixabay.com/)
   - 검색어: "industrial", "manufacturing", "pump"
   - 라이선스: 상업적 이용 가능

### 제조사 이미지 (저작권 주의)

- **SPXFLOW**: 공식 웹사이트 미디어 라이브러리
- **NEUMAN & ESSER**: 공식 카탈로그 이미지
- **NIDEC**: 공식 제품 이미지 라이브러리
- **CP Pumpen**: 공식 웹사이트 다운로드 센터

⚠️ **주의**: 제조사 이미지 사용 전 반드시 사용 권한 확인 필요

---

## 🛠️ 제작 도구

### 추천 도구

1. **Canva Pro** (권장)
   - 템플릿 제공
   - 1200x630px 프리셋 제공
   - 브랜드 키트 설정 가능
   - URL: https://www.canva.com/

2. **Figma**
   - 전문가용
   - 정밀한 디자인 가능
   - URL: https://www.figma.com/

3. **Adobe Photoshop**
   - 고급 편집 가능
   - PSD 템플릿 활용

### AI 이미지 생성 (선택)

- **Midjourney**: 산업용 배경 이미지 생성
- **DALL-E 3**: 제품 컨셉 이미지

---

## 📁 파일 저장 위치

생성된 OG 이미지는 다음 경로에 저장:

```
public/images/og/
├── main-og.jpg
├── compressor-og.jpg
├── mixer-og.jpg
├── motor-og.jpg
├── pump-og.jpg
├── bearing-og.jpg
├── cylinder-liner-og.jpg
├── oil-purifier-og.jpg
├── oil-refinery-og.jpg
├── shipbuilding-og.jpg
├── company-og.jpg
├── partners-og.jpg
└── contact-og.jpg
```

---

## ✅ 체크리스트

### 디자인 완료 전 확인사항

- [ ] 크기: 1200 x 630px 정확히 준수
- [ ] 안전 영역 (100px 여백) 내 중요 요소 배치
- [ ] 라온토탈솔루션 로고 포함
- [ ] 브랜드 색상 (#0A1628, #3B82F6) 사용
- [ ] 텍스트 가독성 확인 (어두운 배경 + 흰색 텍스트)
- [ ] 파일 용량 300KB 이하 (권장)
- [ ] 파일명 정확히 일치 (예: `compressor-og.jpg`)

### 테스트

OG 이미지 생성 후 다음 도구로 미리보기 테스트:

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/

---

## 📊 우선순위별 제작 순서

### Phase 1 (우선 제작) - 3개

1. `main-og.jpg` - 메인 페이지
2. `compressor-og.jpg` - 가장 중요한 제품
3. `oil-refinery-og.jpg` - 주요 산업

### Phase 2 (2차 제작) - 7개

4. `mixer-og.jpg`
5. `motor-og.jpg`
6. `pump-og.jpg`
7. `bearing-og.jpg`
8. `shipbuilding-og.jpg`
9. `cylinder-liner-og.jpg`
10. `oil-purifier-og.jpg`

### Phase 3 (3차 제작) - 3개

11. `company-og.jpg`
12. `partners-og.jpg`
13. `contact-og.jpg`

---

## 🎯 임시 대응 (OG 이미지 없을 경우)

OG 이미지가 아직 준비되지 않았을 경우, 현재 메타 태그에서 다음 경로를 참조하고 있으므로:

```typescript
images: ['/images/og/main-og.jpg']
```

**임시 해결책**:
1. `public/images/og/` 폴더 생성
2. Placeholder 이미지 (1200x630px, 단색 배경 + 로고 + 텍스트)를 임시로 배치
3. 정식 디자인 완료 시 교체

**Placeholder 템플릿**:
- 배경: Navy (#0A1628) 단색
- 가운데: 라온토탈솔루션 로고 + 페이지명
- 하단: "Coming Soon" 텍스트

---

## 📞 문의

OG 이미지 제작 관련 문의:
- 디자인 가이드: 이 문서 참조
- 기술 지원: 개발팀
- 브랜드 승인: 마케팅 담당자

---

**작성**: Claude Code AI
**최종 업데이트**: 2025-12-18
