# 🚀 이미지 수집 시작 가이드

**지금 바로 시작하세요!**

---

## 📋 단계별 진행

### ✅ Step 1: 무료 이미지 다운로드 (가장 쉬움, 10개)

**소요 시간:** 약 20분

#### 🎯 Hero 배경 이미지 (1개) - **지금 시작!**

1. **브라우저에서 열기:**
   ```
   https://unsplash.com/s/photos/oil-refinery-night
   ```

2. **이미지 선택:**
   - 정유 플랜트 야경 사진 선택
   - 조명이 켜진 산업 시설 이미지 추천

3. **다운로드:**
   - "Download free" 버튼 클릭
   - 크기: Large 또는 Original (1920x1080 이상)

4. **저장:**
   - 파일명: `plant-night.jpg`
   - 위치: `public/images/hero/plant-night.jpg`

5. **체크리스트 업데이트:**
   ```markdown
   - [x] plant-night.jpg ✅
   ```

---

#### 🏭 산업별 이미지 (2개)

**oil-refinery.jpg:**
```
1. 열기: https://unsplash.com/s/photos/oil-refinery
2. 다운로드: 플랜트 전경 이미지
3. 저장: public/images/industries/oil-refinery.jpg
```

**shipbuilding.jpg:**
```
1. 열기: https://unsplash.com/s/photos/shipyard
2. 다운로드: 조선소 이미지
3. 저장: public/images/industries/shipbuilding.jpg
```

---

#### ⚙️ 제품군 이미지 (7개)

**빠른 링크:**

1. **compressor.jpg**
   - 링크: https://unsplash.com/s/photos/industrial-compressor
   - 저장: `public/images/products/compressor.jpg`

2. **mixer.jpg**
   - 링크: https://unsplash.com/s/photos/industrial-mixer
   - 저장: `public/images/products/mixer.jpg`

3. **motor.jpg**
   - 링크: https://unsplash.com/s/photos/electric-motor
   - 저장: `public/images/products/motor.jpg`

4. **pump.jpg**
   - 링크: https://pixabay.com/images/search/industrial%20pump/
   - 저장: `public/images/products/pump.jpg`

5. **bearing.jpg**
   - 링크: https://unsplash.com/s/photos/bearing
   - 저장: `public/images/products/bearing.jpg`

6. **cylinder-liner.jpg**
   - 링크: https://unsplash.com/s/photos/ship-engine
   - 저장: `public/images/products/cylinder-liner.jpg`

7. **oil-purifier.jpg**
   - 링크: https://unsplash.com/s/photos/oil-filter
   - 저장: `public/images/products/oil-purifier.jpg`

---

### ✅ Step 2: 한국 고객사 로고 (4개)

**소요 시간:** 약 10분

#### 즉시 다운로드 가능:

**1. SK에너지:**
```
1. 열기: https://www.skenergy.com/company/ci?curTab=init
2. 로고 다운로드 클릭 (PNG)
3. 저장: public/images/clients/sk-logo.png
```

**2. S-OIL:**
```
1. 열기: https://www.s-oil.com/company/CI.aspx
2. PNG 또는 JPG 다운로드
3. 저장: public/images/clients/soil-logo.png
```

**3. GS칼텍스:**
```
1. 열기: https://www.gscaltex.com/kr/company/brand/ci
2. 로고 다운로드
3. 저장: public/images/clients/gs-caltex-logo.png
```

**4. HD현대오일뱅크:**
```
1. 열기: https://www.oilbank.co.kr
2. 상단 로고 우클릭 → 이미지 저장
3. 저장: public/images/clients/hd-oilbank-logo.png
```

---

### 🔍 Step 3: 검색 필요한 로고 (나중에)

**나머지 로고 (13개):**
- 한국 기업 3개: Hanwha, TKG, 휴켐스
- 글로벌 파트너 10개

**이 로고들은 다음 단계에서 수집:**
1. 구글 이미지 검색
2. 공식 웹사이트 방문
3. 또는 회사에 직접 문의

---

## 📂 파일 저장 구조

다운로드한 파일을 아래 위치에 저장하세요:

```
public/images/
├── hero/
│   └── plant-night.jpg             ← 1개
├── industries/
│   ├── oil-refinery.jpg            ← 2개
│   └── shipbuilding.jpg
├── products/
│   ├── compressor.jpg              ← 7개
│   ├── mixer.jpg
│   ├── motor.jpg
│   ├── pump.jpg
│   ├── bearing.jpg
│   ├── cylinder-liner.jpg
│   └── oil-purifier.jpg
└── clients/
    ├── sk-logo.png                 ← 4개
    ├── soil-logo.png
    ├── gs-caltex-logo.png
    └── hd-oilbank-logo.png
```

**총 14개 파일** (Step 1-2 완료 시)

---

## ✅ 진행 상황 체크

### 완료 확인:

**Step 1 완료 (10개):**
- [ ] plant-night.jpg
- [ ] oil-refinery.jpg
- [ ] shipbuilding.jpg
- [ ] compressor.jpg
- [ ] mixer.jpg
- [ ] motor.jpg
- [ ] pump.jpg
- [ ] bearing.jpg
- [ ] cylinder-liner.jpg
- [ ] oil-purifier.jpg

**Step 2 완료 (4개):**
- [ ] sk-logo.png
- [ ] soil-logo.png
- [ ] gs-caltex-logo.png
- [ ] hd-oilbank-logo.png

---

## 🎨 다운로드 후 확인

### 이미지 품질 체크:

```bash
# WSL에서 파일 확인
cd public/images
find . -name "*.jpg" -o -name "*.png"

# 파일 크기 확인
ls -lh hero/
ls -lh industries/
ls -lh products/
ls -lh clients/
```

### 권장 크기:
- Hero/Industries: 1920x1080px 이상
- Products: 800x600px 이상
- Logos: 200x100px 이상 (투명 배경)

---

## 🔧 문제 해결

### 이미지가 너무 큰 경우:
```bash
# ImageMagick으로 리사이즈 (WSL)
convert input.jpg -resize 1920x1080 output.jpg
```

### 로고 배경 제거:
1. https://www.remove.bg 방문
2. 이미지 업로드
3. 자동 배경 제거
4. PNG 다운로드

---

## 📝 다음 단계

Step 1-2 완료 후:
1. `IMAGE_COLLECTION_CHECKLIST.md` 업데이트
2. Git commit: `git add public/images && git commit -m "feat: add images (14/29)"`
3. 나머지 로고 수집 계획

---

## 💡 팁

### 빠른 다운로드:
- Unsplash: 회원가입 없이 다운로드 가능
- Pexels/Pixabay: 무료, 상업적 이용 가능
- 여러 탭 열어서 동시 다운로드

### 이미지 선택 기준:
- **선명도**: 흐릿하지 않은 고해상도
- **구도**: 수평/수직 맞춤
- **색감**: 전문적이고 깨끗한 이미지
- **적절성**: 제품/산업에 맞는 이미지

---

**🚀 지금 바로 시작하세요!**

첫 번째 링크부터 클릭: [Unsplash - Oil Refinery Night](https://unsplash.com/s/photos/oil-refinery-night)
