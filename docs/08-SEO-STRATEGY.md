# SEO Strategy - 라온토탈솔루션

**목적**: 라온토탈솔루션 B2B 웹사이트의 단계적 SEO 최적화 전략
**버전**: 1.0
**작성일**: 2025-12-18
**대상**: 개발팀, 마케팅 담당자

---

## 📊 Executive Summary

라온토탈솔루션은 정유·석유화학 및 조선 산업을 타겟으로 하는 회전기계 부품·솔루션 B2B 전문 기업입니다. 본 문서는 **Next.js 16 SSR 기반의 SEO 최적화 전략**을 제시하며, 현재 가능한 작업부터 단계적으로 구현합니다.

**핵심 전략**:
- **Schema.org 구조화 데이터**: Organization, Product, BreadcrumbList
- **메타 태그 최적화**: 페이지별 맞춤 title, description, OG 태그
- **네이버 & 구글 검색 최적화**: 국내외 검색 엔진 대응
- **sitemap.xml & robots.txt**: 크롤링 최적화
- **Local SEO**: 네이버 플레이스, 구글 비즈니스 프로필

---

## 🎯 현재 상태 분석

### 회사 정보
```
- 상호명: 라온토탈솔루션 (Raon Total Solution)
- 도메인: raontotalsolution.co.kr
- 주소: 서울 서초구 마방로 16, 5층
- 이메일: rts@raontotalsolution.co.kr
- 전화: 02-575-3051
- 설립: 2020년 (30년 경력 보유)
```

### 데이터 구조
```
- 6개 페이지 (HOME, COMPANY, INDUSTRIES, PRODUCTS, PARTNERS, CONTACT)
- 2개 산업 상세 (정유·석유화학, 조선)
- 7개 제품 상세 (Compressor, Mixer, Motor, Pump, Bearing, Cylinder Liner, Oil Purifier)
- 9개 글로벌 파트너사
- 7개 주요 고객사
```

### 현재 SEO 구현
✅ **완료된 항목**:
- 기본 메타 태그 (Next.js 기본 설정)
- 모바일 반응형 디자인
- Hero 비디오 배경 (데스크톱/태블릿)
- 파트너사/고객사 로고 수집

❌ **미구현 항목**:
- Schema.org 구조화 데이터
- 페이지별 맞춤 메타 태그
- OG 이미지 생성
- sitemap.xml 자동 생성
- robots.txt 설정
- 네이버/구글 서치 콘솔 등록

### SEO 강점
1. **Next.js SSR**: 크롤러에게 완전한 HTML 제공
2. **명확한 URL 구조**: `/industries/oil-refinery`, `/products/compressor`
3. **전문성**: 30년 경력, 글로벌 파트너십
4. **타겟 명확**: B2B, 정유·석유화학/조선 산업

### SEO 약점
1. **콘텐츠 볼륨**: 제한된 페이지 수 (15개)
2. **도메인 신규**: 아직 도메인 권위 없음
3. **백링크 부족**: 외부 링크 획득 전략 필요
4. **경쟁 치열**: 산업용 부품 시장 경쟁 심화

---

## 🚀 Phase별 구현 로드맵

### **Phase 1: 기본 SEO 구축 (1주)** ✅ 즉시 시작 가능

**목표**: 현재 데이터로 즉시 구현 가능한 SEO 기초 작업

#### 1.1 메타 태그 최적화
- [ ] 페이지별 맞춤 `<title>` 태그 (6개 페이지)
- [ ] 페이지별 `<meta description>` (6개 페이지)
- [ ] Open Graph 태그 (og:title, og:description, og:image)
- [ ] Twitter Card 태그
- [ ] Canonical URL 설정

#### 1.2 Schema.org 구조화 데이터
- [ ] Organization Schema (회사 정보)
- [ ] Product Schema (제품 7개)
- [ ] BreadcrumbList Schema (네비게이션)
- [ ] LocalBusiness Schema (주소, 연락처)

#### 1.3 sitemap.xml 생성
- [ ] Next.js sitemap.ts 생성
- [ ] 전체 페이지 URL 포함 (15개)
- [ ] 우선순위 및 갱신 빈도 설정

#### 1.4 robots.txt 생성
- [ ] Sitemap 위치 명시
- [ ] 크롤링 허용/차단 규칙

**예상 소요 시간**: 8시간
**예상 효과**:
- 검색 노출 기반 구축
- 리치 스니펫 표시 가능성
- 크롤링 효율 향상

---

### **Phase 2: OG 이미지 & 콘텐츠 강화 (2주)**

**목표**: 소셜 미디어 공유 최적화 및 콘텐츠 품질 향상

#### 2.1 OG 이미지 생성
- [ ] 메인 OG 이미지 (1200x630px)
- [ ] 페이지별 OG 이미지 (6개)
- [ ] 제품별 OG 이미지 (7개)
- [ ] 로고 포함, 브랜드 통일성 유지

#### 2.2 이미지 Alt 텍스트 추가
- [ ] 모든 이미지에 설명적 alt 추가
- [ ] 키워드 자연스럽게 포함

#### 2.3 내부 링크 최적화
- [ ] 페이지 간 링크 연결 강화
- [ ] Anchor 텍스트 최적화 (키워드 포함)
- [ ] Breadcrumb 네비게이션 추가

**예상 소요 시간**: 12시간
**예상 효과**:
- 소셜 미디어 공유 시 시각적 효과
- 이미지 검색 노출
- 사용자 경험 개선

---

### **Phase 3: 네이버 & 구글 등록 (1주)** ⚠️ 도메인 필요

**목표**: 검색 엔진 등록 및 모니터링 설정

#### 3.1 네이버 검색 최적화
- [ ] 네이버 서치어드바이저 등록
- [ ] 사이트 소유 확인
- [ ] sitemap 제출
- [ ] 메타 태그 검증

#### 3.2 구글 검색 최적화
- [ ] Google Search Console 등록
- [ ] 사이트 소유 확인
- [ ] sitemap 제출
- [ ] Core Web Vitals 확인

#### 3.3 Google Analytics 4 설정
- [ ] GA4 계정 생성
- [ ] 추적 코드 삽입
- [ ] 이벤트 설정 (문의 폼 제출 등)

**예상 소요 시간**: 4시간
**필수 조건**: 도메인 연결 완료

---

### **Phase 4: Local SEO (2주)** ⚠️ 사업자등록증 필요

**목표**: 지역 검색 노출 강화

#### 4.1 네이버 플레이스 등록
- [ ] 네이버 플레이스 등록
- [ ] 회사 정보 입력 (주소, 연락처, 영업 시간)
- [ ] 대표 사진 업로드 (사무실, 로고)
- [ ] 카테고리 설정 (산업용 기계 부품)

#### 4.2 구글 비즈니스 프로필
- [ ] Google Business Profile 등록
- [ ] 회사 정보 입력
- [ ] 대표 사진 업로드
- [ ] 카테고리 설정

#### 4.3 주소 일관성 확보
- [ ] 모든 플랫폼에서 동일한 주소 표기
- [ ] NAP (Name, Address, Phone) 일관성 유지

**예상 소요 시간**: 6시간
**필수 조건**: 사업자등록증, 회사 사진

---

## 📝 Phase 1 상세 구현 가이드 (즉시 시작)

### 1. 메타 태그 최적화

#### 페이지별 타겟 키워드

| 페이지 | 주요 키워드 | 보조 키워드 |
|--------|------------|-----------|
| HOME | 회전기계 부품, 압축기 부품 | 정유석유화학, 조선 산업 |
| COMPANY | 라온토탈솔루션, 회전기계 전문 | 30년 경력, B2B |
| INDUSTRIES - 정유 | 정유 압축기, 석유화학 부품 | Compressor, Pump |
| INDUSTRIES - 조선 | 선박용 실린더, 조선 부품 | Cylinder Liner, Motor |
| PRODUCTS | 산업용 기계 부품, 회전기계 | Compressor, Mixer, Motor |
| PARTNERS | 글로벌 파트너, SPXFLOW | NEUMAN & ESSER, NIDEC |
| CONTACT | 견적 문의, 상담 신청 | 서초구, 산업용 부품 |

#### Meta Tags 구현 예시

```typescript
// app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://raontotalsolution.co.kr'),
  title: {
    default: '라온토탈솔루션 | 회전기계 및 압축기 부품 전문 기업',
    template: '%s | 라온토탈솔루션'
  },
  description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업. 정유·석유화학, 조선 산업 대상 글로벌 파트너십 보유.',
  keywords: ['회전기계 부품', '압축기 부품', '정유석유화학', '조선 산업', 'Compressor', 'Pump', 'Motor', 'Bearing'],
  authors: [{ name: '라온토탈솔루션' }],
  creator: '라온토탈솔루션',
  publisher: '라온토탈솔루션',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://raontotalsolution.co.kr',
    siteName: '라온토탈솔루션',
    title: '라온토탈솔루션 | 회전기계 및 압축기 부품 전문 기업',
    description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업',
    images: [
      {
        url: '/images/og/main-og.jpg',
        width: 1200,
        height: 630,
        alt: '라온토탈솔루션 메인 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '라온토탈솔루션 | 회전기계 및 압축기 부품 전문 기업',
    description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업',
    images: ['/images/og/main-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console에서 발급
    other: {
      'naver-site-verification': 'naver-verification-code', // 네이버 서치어드바이저에서 발급
    },
  },
}
```

```typescript
// app/products/compressor/page.tsx
export const metadata: Metadata = {
  title: 'Compressor 부품 | 왕복동 압축기 전문',
  description: 'NEUMAN & ESSER, FIMA, CASTANET 등 글로벌 브랜드 Compressor 부품 공급. Piston, Valve, Cylinder Liner 등.',
  keywords: ['Compressor', '압축기 부품', 'NEUMAN & ESSER', 'FIMA', 'Piston', 'Valve'],
  openGraph: {
    title: 'Compressor 부품 | 라온토탈솔루션',
    description: 'NEUMAN & ESSER, FIMA, CASTANET 등 글로벌 브랜드 Compressor 부품 공급',
    images: ['/images/og/compressor-og.jpg'],
  },
}
```

---

### 2. Schema.org 구조화 데이터

#### Organization Schema

```typescript
// components/seo/organization-schema.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '라온토탈솔루션',
    alternateName: 'Raon Total Solution',
    url: 'https://raontotalsolution.co.kr',
    logo: 'https://raontotalsolution.co.kr/images/company/raon-logo.png',
    description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '마방로 16, 5층',
      addressLocality: '서초구',
      addressRegion: '서울',
      postalCode: '06776',
      addressCountry: 'KR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-2-575-3051',
      email: 'rts@raontotalsolution.co.kr',
      contactType: 'Customer Service',
      availableLanguage: ['Korean', 'English'],
    },
    sameAs: [
      // 소셜 미디어 링크 (있을 경우)
    ],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 10, // 실제 직원 수로 변경
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

#### Product Schema

```typescript
// app/products/compressor/page.tsx
export function CompressorSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Compressor Parts (왕복동 압축기 부품)',
    description: 'NEUMAN & ESSER, FIMA, CASTANET 등 글로벌 브랜드 Compressor 부품. Piston, Valve, Cylinder Liner, Piston Rod 등 소모성 부품 전문 공급.',
    brand: {
      '@type': 'Brand',
      name: '라온토탈솔루션',
    },
    manufacturer: [
      { '@type': 'Organization', name: 'NEUMAN & ESSER' },
      { '@type': 'Organization', name: 'FIMA' },
      { '@type': 'Organization', name: 'CASTANET' },
    ],
    category: '산업용 기계 부품',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'KRW',
        price: '0', // 견적 문의 (B2B는 가격 표시 불필요)
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

#### BreadcrumbList Schema

```typescript
// components/seo/breadcrumb-schema.tsx
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://raontotalsolution.co.kr${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 사용 예시: app/products/compressor/page.tsx
<BreadcrumbSchema
  items={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Compressor', url: '/products/compressor' },
  ]}
/>
```

---

### 3. sitemap.xml 생성

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://raontotalsolution.co.kr'

  // 정적 페이지
  const staticPages = [
    '',
    '/company',
    '/industries',
    '/industries/oil-refinery',
    '/industries/shipbuilding',
    '/products',
    '/partners',
    '/contact',
  ]

  // 제품 페이지
  const products = [
    '/products/compressor',
    '/products/mixer',
    '/products/motor',
    '/products/pump',
    '/products/bearing',
    '/products/cylinder-liner',
    '/products/oil-purifier',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...products.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
```

---

### 4. robots.txt 생성

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://raontotalsolution.co.kr/sitemap.xml',
  }
}
```

---

## 📊 타겟 키워드 전략

### 네이버 키워드 (한국어)

| 키워드 | 월간 검색량 (예상) | 경쟁 강도 | 우선순위 |
|--------|-------------------|----------|---------|
| 회전기계 부품 | 1,000 | 중 | 높음 |
| 압축기 부품 | 2,000 | 높음 | 높음 |
| 정유 압축기 | 500 | 낮음 | 높음 |
| 선박용 실린더 | 300 | 낮음 | 중간 |
| 왕복동 압축기 | 800 | 중 | 높음 |
| 산업용 펌프 | 1,500 | 높음 | 중간 |
| 전동기 부품 | 600 | 중 | 중간 |

### 구글 키워드 (영어)

| 키워드 | 월간 검색량 (예상) | 경쟁 강도 | 우선순위 |
|--------|-------------------|----------|---------|
| reciprocating compressor parts | 500 | 중 | 높음 |
| industrial pump parts korea | 200 | 낮음 | 높음 |
| ship cylinder liner | 300 | 낮음 | 높음 |
| petrochemical equipment parts | 400 | 중 | 중간 |
| marine engine parts | 600 | 높음 | 중간 |

### 롱테일 키워드 (Long-tail)

- "NEUMAN & ESSER 압축기 부품 한국"
- "SPX FLOW 믹서 대리점"
- "NIDEC 전동기 울산 공급"
- "선박용 실린더 라이너 교체"
- "정유공장 압축기 정비 부품"

---

## 📈 모니터링 및 KPI

### SEO 성과 지표

| 지표 | 현재 | 1개월 목표 | 3개월 목표 | 측정 도구 |
|-----|------|-----------|-----------|----------|
| 네이버 검색 노출 | 0 | 20위권 | 10위권 | 네이버 서치어드바이저 |
| 구글 검색 노출 | 0 | 30위권 | 15위권 | Google Search Console |
| 월간 유기적 방문자 | 0 | 100 | 500 | Google Analytics |
| 인덱싱된 페이지 수 | 0 | 15 | 15 | Search Console |
| 평균 체류 시간 | - | 2분 | 3분 | Google Analytics |

---

## 🎯 즉시 실행 가능한 체크리스트

### Phase 1 (1주 내 완료)
- [ ] 메타 태그 최적화 (6개 페이지)
- [ ] Organization Schema 추가
- [ ] Product Schema 추가 (7개 제품)
- [ ] BreadcrumbList Schema 추가
- [ ] sitemap.xml 생성
- [ ] robots.txt 생성

### Phase 2 (2주 내 완료)
- [ ] OG 이미지 생성 (14개)
- [ ] 이미지 Alt 텍스트 추가
- [ ] 내부 링크 최적화
- [ ] Breadcrumb 네비게이션 추가

### Phase 3 (도메인 연결 후)
- [ ] 네이버 서치어드바이저 등록
- [ ] Google Search Console 등록
- [ ] Google Analytics 4 설정

---

## 📝 작업 순서 요약

**즉시 시작 (현재 데이터로 가능)**:
1. 메타 태그 최적화
2. Schema.org 구조화 데이터
3. sitemap.xml & robots.txt 생성

**2주 내 (OG 이미지 제작 필요)**:
4. OG 이미지 생성 및 적용
5. 이미지 Alt 텍스트 추가
6. 내부 링크 최적화

**도메인 연결 후**:
7. 네이버 & 구글 서치 콘솔 등록
8. Google Analytics 설정

**추가 데이터 보완 후**:
9. 네이버 플레이스 등록
10. 구글 비즈니스 프로필 등록

---

**다음 단계**: Phase 1 메타 태그 최적화 시작
