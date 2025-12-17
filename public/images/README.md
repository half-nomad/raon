# Image Assets Directory

이 디렉토리는 라온토탈솔루션 웹사이트에 사용되는 모든 이미지 에셋을 관리합니다.

## 디렉토리 구조

```
images/
├── hero/           # 메인 히어로 배경 이미지/비디오
├── industries/     # 산업별 섹션 이미지
├── products/       # 제품군 이미지
├── partners/       # 파트너사 로고
├── clients/        # 주요 고객사 로고
└── company/        # 회사 관련 이미지 (CEO, 로고 등)
```

## 이미지 요구사항

### 파일 포맷
- **사진**: JPG (웹 최적화)
- **로고**: PNG (투명 배경)
- **히어로**: JPG 또는 MP4 (비디오 배경)

### 권장 크기
- **Hero 이미지**: 1920x1080px (Full HD)
- **제품 이미지**: 800x600px (4:3 비율)
- **로고**: 200x100px (비율 유지)

### 최적화
- Next.js Image 컴포넌트 사용 (자동 최적화)
- 업로드 전 이미지 압축 (TinyPNG, ImageOptim)
- Lazy loading 기본 활성화

## 상세 목록

각 하위 디렉토리의 README.md를 참조하세요.
