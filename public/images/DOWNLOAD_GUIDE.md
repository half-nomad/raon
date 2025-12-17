# 이미지 다운로드 가이드

**작성일:** 2025-12-15

이 가이드는 프로젝트에 필요한 이미지를 수집하는 방법을 단계별로 안내합니다.

---

## 🎯 빠른 시작

### 1단계: 무료 이미지 다운로드 (Unsplash)

Unsplash에서 고품질 무료 이미지를 다운로드하는 방법:

#### Hero 배경 이미지 (정유 플랜트 야경)
1. 링크 접속: https://unsplash.com/s/photos/oil-refinery-night
2. 마음에 드는 이미지 클릭
3. 우측 상단 "Download free" 버튼 클릭
4. 다운로드한 파일을 `plant-night.jpg`로 변경
5. `public/images/hero/` 폴더에 저장

**추천 이미지:**
- https://unsplash.com/photos/u13zBF4r56A (정유 플랜트 야경)
- https://unsplash.com/photos/industrial-plant-twilight 검색

#### 산업별 이미지

**oil-refinery.jpg (정유·석유화학)**
1. 검색: https://unsplash.com/s/photos/oil-refinery
2. 추천 검색어: "petrochemical plant", "industrial pipeline"
3. 다운로드 → 이름 변경: `oil-refinery.jpg`
4. 저장 위치: `public/images/industries/`

**shipbuilding.jpg (조선)**
1. 검색: https://unsplash.com/s/photos/shipyard
2. 추천 검색어: "ship building", "marine construction"
3. 다운로드 → 이름 변경: `shipbuilding.jpg`
4. 저장 위치: `public/images/industries/`

#### 제품군 이미지 (7개)

각 제품별로 아래 링크에서 다운로드:

| 제품 | Unsplash 검색 | 파일명 | 저장 위치 |
|------|---------------|--------|----------|
| Compressor | [검색](https://unsplash.com/s/photos/industrial-compressor) | compressor.jpg | products/ |
| Mixer | [검색](https://unsplash.com/s/photos/industrial-mixer) | mixer.jpg | products/ |
| Motor | [검색](https://unsplash.com/s/photos/electric-motor) | motor.jpg | products/ |
| Pump | [검색](https://unsplash.com/s/photos/industrial-pump) | pump.jpg | products/ |
| Bearing | [검색](https://unsplash.com/s/photos/bearing-mechanical) | bearing.jpg | products/ |
| Cylinder Liner | [검색](https://unsplash.com/s/photos/ship-engine) | cylinder-liner.jpg | products/ |
| Oil Purifier | [검색](https://unsplash.com/s/photos/oil-filter-industrial) | oil-purifier.jpg | products/ |

---

## 🏢 회사 로고 다운로드 (한국 기업)

### SK에너지
1. 접속: https://www.skenergy.com/company/ci?curTab=init
2. 로고 다운로드 버튼 클릭 (PNG 형식)
3. 이름 변경: `sk-logo.png`
4. 저장 위치: `public/images/clients/`

### S-OIL
1. 접속: https://www.s-oil.com/company/CI.aspx
2. PNG 또는 JPG 다운로드
3. 이름 변경: `soil-logo.png`
4. 저장 위치: `public/images/clients/`

### GS칼텍스
1. 접속: https://www.gscaltex.com/kr/company/brand/ci
2. 로고 이미지 다운로드
3. 이름 변경: `gs-caltex-logo.png`
4. 저장 위치: `public/images/clients/`

### HD현대오일뱅크
1. 접속: https://www.oilbank.co.kr
2. 하단 로고 또는 회사소개 > CI 섹션
3. 이름 변경: `hd-oilbank-logo.png`
4. 저장 위치: `public/images/clients/`

### 기타 고객사
- **Hanwha**: https://www.hanwha.com (CI/BI 섹션)
- **TKG, 휴켐스**: 구글 이미지 검색 또는 공식 웹사이트

---

## 🌍 글로벌 파트너사 로고

### 다운로드 가능한 사이트

#### SPX FLOW
1. 접속: https://brandfetch.com/spxflow.com
2. Logo 탭 클릭
3. PNG 형식 다운로드 (투명 배경)
4. 이름 변경: `spxflow-logo.png`
5. 저장 위치: `public/images/partners/`

#### NEUMAN & ESSER
1. 접속: https://www.neuman-esser.com/en/
2. 상단 로고 우클릭 → "이미지 저장" 또는
3. Brochures 섹션에서 PDF 다운로드 후 로고 추출
4. 이름 변경: `neuman-esser-logo.png`

#### NIDEC
1. 접속: https://www.nidec.com/en/
2. 상단 로고 저장 또는
3. Corporate Slogan 페이지에서 로고 다운로드
4. 이름 변경: `nidec-logo.png`

#### CASTANET
1. 접속: http://www.castanet-sa.fr/en/home
2. 로고 이미지 저장
3. 이름 변경: `castanet-logo.png`

### 구글 이미지 검색 방법 (공식 로고 없을 경우)

나머지 파트너사 로고는 구글 이미지 검색으로 찾을 수 있습니다:

1. 구글에서 `[회사명] logo png transparent` 검색
2. 이미지 탭 → 도구 → 색상: 투명
3. 고해상도 이미지 선택 (최소 200x100px 이상)
4. 다운로드 후 배경 제거 (필요 시)

**배경 제거 도구:**
- https://www.remove.bg (무료, 자동)
- Photoshop, GIMP (수동)

---

## 📦 일괄 다운로드 스크립트 (선택사항)

터미널에서 실행 (curl 사용):

```bash
# Hero 이미지 예시 (Unsplash 직접 링크)
cd public/images/hero
curl -L -o plant-night.jpg "https://images.unsplash.com/photo-[ID]?w=1920&h=1080"

# 제품 이미지 예시
cd ../products
curl -L -o compressor.jpg "https://images.unsplash.com/photo-[ID]?w=800&h=600"
```

**주의:** Unsplash는 API 키가 필요하므로, 수동 다운로드를 권장합니다.

---

## 🎨 이미지 최적화 가이드

### 다운로드 후 최적화

모든 이미지는 다운로드 후 최적화해야 합니다:

#### 온라인 도구
1. **TinyPNG** (https://tinypng.com)
   - JPG/PNG 압축 (품질 손실 최소)
   - 최대 5MB, 20개까지 무료

2. **Squoosh** (https://squoosh.app)
   - 브라우저 기반, 무료
   - WebP 변환 가능

#### CLI 도구 (선택사항)

```bash
# ImageMagick 설치 (WSL/Linux)
sudo apt install imagemagick

# 이미지 리사이즈
convert input.jpg -resize 1920x1080 output.jpg

# 품질 조정
convert input.jpg -quality 85 output.jpg
```

### 권장 설정

| 용도 | 크기 | 포맷 | 품질 |
|------|------|------|------|
| Hero 배경 | 1920x1080 | JPG | 85% |
| 산업 이미지 | 1920x1080 | JPG | 85% |
| 제품 이미지 | 800x600 | JPG | 80% |
| 로고 (파트너) | 200x100 | PNG | - |
| 로고 (고객사) | 200x100 | PNG | - |

---

## ✅ 완료 체크

다운로드 후 `IMAGE_COLLECTION_CHECKLIST.md`에서 체크박스를 업데이트하세요:

```markdown
- [x] plant-night.jpg ✅
- [ ] oil-refinery.jpg
- [ ] shipbuilding.jpg
```

---

## 🆘 문제 해결

### 로고를 찾을 수 없는 경우
1. 회사 공식 웹사이트 → About/Company → CI/BI 섹션
2. 구글: `[회사명] logo download`
3. Brandfetch: https://brandfetch.com
4. 회사에 직접 이메일로 요청

### 이미지 품질이 낮은 경우
1. Unsplash에서 더 큰 크기 다운로드
2. Pexels (https://www.pexels.com) 대체 검색
3. AI 업스케일링: https://www.upscale.media

### 투명 배경이 필요한 경우
1. Remove.bg (https://www.remove.bg)
2. Photoshop/GIMP에서 배경 제거
3. PNG 형식으로 저장

---

## 📞 도움 요청

이미지 수집에 어려움이 있는 경우:
- 회사 내부 마케팅팀에 로고 요청
- 파트너사에 브랜드 가이드 요청 (sales@raontotalsolution.co.kr)
