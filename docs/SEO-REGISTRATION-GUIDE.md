# SEO 검색 엔진 등록 가이드

**대상 도메인**: raontotalsolution.com
**프레임워크**: Next.js 16 (App Router)
**Sitemap URL**: https://raontotalsolution.com/sitemap.xml
**작성일**: 2025-01-21
**최종 수정**: 2026-02-24 (v1.6.0 환경변수 방식 반영)

---

## 목차

1. [네이버 Search Advisor 등록](#1-네이버-search-advisor-등록)
2. [Google Search Console 등록](#2-google-search-console-등록)
3. [인증 코드 적용 방법](#3-인증-코드-적용-방법)
4. [체크리스트](#4-체크리스트)

---

## 1. 네이버 Search Advisor 등록

### 1.1 접속 및 로그인

1. **네이버 Search Advisor 접속**: https://searchadvisor.naver.com/
2. **네이버 계정으로 로그인**
   - 회사 공용 네이버 계정 사용 권장
   - 개인 계정 사용 시 담당자 변경 시 권한 이전 필요

### 1.2 사이트 등록

1. **웹마스터 도구 시작하기** 클릭
2. **사이트 추가** 버튼 클릭
3. **URL 입력**: `https://raontotalsolution.com`
   - 반드시 `https://` 포함
   - 끝에 `/` 없이 입력

### 1.3 사이트 소유 확인 (HTML 태그 방식)

네이버는 여러 소유권 확인 방법을 제공합니다. **HTML 태그 방식**이 가장 간편합니다.

#### 단계별 진행

1. **소유확인** 페이지에서 **HTML 태그** 탭 선택
2. 아래와 같은 형식의 메타 태그가 표시됨:
   ```html
   <meta name="naver-site-verification" content="발급된인증코드" />
   ```
3. **content 값 복사** (예: `abc123def456...`)
4. [3. 인증 코드 적용 방법](#3-인증-코드-적용-방법) 섹션 참고하여 적용
5. 배포 후 **소유확인** 버튼 클릭

#### 확인 성공 시

- "사이트 소유확인이 완료되었습니다" 메시지 표시
- 웹마스터 도구 대시보드로 이동

### 1.4 Sitemap 제출

소유권 확인 완료 후:

1. 좌측 메뉴에서 **요청** > **사이트맵 제출** 클릭
2. Sitemap URL 입력: `https://raontotalsolution.com/sitemap.xml`
3. **확인** 버튼 클릭

#### 제출 결과 확인

- **정상**: "사이트맵이 제출되었습니다" 표시
- **오류 시**: sitemap.xml 접근 가능 여부 확인
  ```bash
  curl https://raontotalsolution.com/sitemap.xml
  ```

### 1.5 추가 설정 (권장)

#### RSS 제출 (선택)

블로그/뉴스 콘텐츠가 있는 경우:
1. **요청** > **RSS 제출**
2. RSS 피드 URL 입력

#### 웹 페이지 수집 요청

특정 페이지 빠른 인덱싱이 필요한 경우:
1. **요청** > **웹 페이지 수집**
2. URL 입력 후 **수집 요청**

---

## 2. Google Search Console 등록

### 2.1 접속 및 로그인

1. **Google Search Console 접속**: https://search.google.com/search-console/
2. **Google 계정으로 로그인**
   - 회사 Google Workspace 계정 권장
   - 또는 회사 전용 Gmail 계정

### 2.2 속성 유형 선택

Google은 두 가지 속성 유형을 제공합니다:

| 유형 | 설명 | 권장 |
|-----|------|-----|
| **도메인** | 모든 서브도메인 포함 (DNS 인증 필요) | 대규모 사이트 |
| **URL 프리픽스** | 특정 URL 경로만 (다양한 인증 방법) | **권장** |

#### URL 프리픽스 선택 이유

- HTML 태그 인증으로 빠른 설정 가능
- DNS 설정 변경 불필요
- Next.js 프로젝트와 호환성 우수

### 2.3 속성 추가

1. **URL 프리픽스** 선택
2. URL 입력: `https://raontotalsolution.com`
3. **계속** 버튼 클릭

### 2.4 소유권 확인 (HTML 태그 방식)

#### 단계별 진행

1. **소유권 확인** 페이지에서 **HTML 태그** 섹션 확장
2. 아래와 같은 형식의 메타 태그가 표시됨:
   ```html
   <meta name="google-site-verification" content="발급된인증코드" />
   ```
3. **content 값 복사** (예: `Abc123XYZ...`)
4. [3. 인증 코드 적용 방법](#3-인증-코드-적용-방법) 섹션 참고하여 적용
5. 배포 후 **확인** 버튼 클릭

#### 확인 성공 시

- "소유권이 확인되었습니다" 메시지 표시
- Search Console 대시보드로 이동

### 2.5 Sitemap 제출

소유권 확인 완료 후:

1. 좌측 메뉴에서 **Sitemaps** 클릭
2. "새 사이트맵 추가" 입력란에: `sitemap.xml`
3. **제출** 버튼 클릭

#### 제출 결과 확인

| 상태 | 의미 |
|-----|------|
| **성공** | 사이트맵이 정상 처리됨 |
| **가져올 수 없음** | URL 접근 불가 - robots.txt 확인 |
| **오류가 있음** | XML 형식 오류 - sitemap 파일 검증 |

### 2.6 Core Web Vitals 확인

사이트 성능 지표 확인:

1. 좌측 메뉴에서 **환경** > **Core Web Vitals** 클릭
2. 데이터 수집까지 1-2일 소요
3. 주요 지표:
   - **LCP** (Largest Contentful Paint): 2.5초 이하 권장
   - **FID** (First Input Delay): 100ms 이하 권장
   - **CLS** (Cumulative Layout Shift): 0.1 이하 권장

#### 문제 발견 시

- **보고서 열기** 클릭하여 상세 분석
- 문제 페이지 URL 확인
- Lighthouse 도구로 개선점 파악

### 2.7 추가 설정 (권장)

#### URL 검사

특정 페이지 인덱싱 상태 확인:
1. 상단 검색창에 URL 입력
2. **Enter** 또는 **URL 검사** 클릭
3. 인덱싱 상태, 모바일 사용성 확인

#### 색인 생성 요청

새 페이지 빠른 인덱싱:
1. URL 검사 후 **색인 생성 요청** 클릭
2. 일일 제한 있음 (약 10-50건)

---

## 3. 인증 코드 적용 방법 (v1.6.0 환경변수 방식)

### 3.1 구조

인증 코드는 **환경변수**로 관리됩니다. 코드 변경 없이 Vercel 대시보드에서 설정 가능합니다.

**코드 위치**: `app/[locale]/layout.tsx`
```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  other: {
    'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
  },
},
```

**환경변수 참조**: `.env.example`
```
NEXT_PUBLIC_GOOGLE_VERIFICATION=
NEXT_PUBLIC_NAVER_VERIFICATION=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_NAVER_ANALYTICS_ID=
```

### 3.2 적용 방법 A: Vercel 대시보드 (권장)

코드 수정/배포 없이 즉시 적용:

1. **Vercel 대시보드** 접속 → 해당 프로젝트 선택
2. **Settings** → **Environment Variables**
3. 환경변수 추가:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | `구글에서 발급한 인증코드` | Production |
| `NEXT_PUBLIC_NAVER_VERIFICATION` | `네이버에서 발급한 인증코드` | Production |

4. **Save** 클릭
5. **Deployments** → 최신 배포의 **...** → **Redeploy** 클릭 (환경변수 반영)

### 3.3 적용 방법 B: .env.local 파일 (로컬 테스트용)

```bash
# 프로젝트 루트에 .env.local 생성 (git에 포함되지 않음)
NEXT_PUBLIC_GOOGLE_VERIFICATION=Abc123XYZ789def456
NEXT_PUBLIC_NAVER_VERIFICATION=abc123def456ghi789
```

### 3.4 배포 후 검증

브라우저에서 소스 코드 확인:
1. https://raontotalsolution.com 접속
2. `Ctrl + U` (또는 `Cmd + Option + U`)로 소스 보기
3. `<head>` 태그 내에서 검색:
   - `google-site-verification`
   - `naver-site-verification`

예상 결과:
```html
<meta name="google-site-verification" content="Abc123XYZ789def456" />
<meta name="naver-site-verification" content="abc123def456ghi789" />
```

### 3.5 Analytics 설정 (선택)

GA4와 Naver Analytics도 동일하게 환경변수로 설정:

| Key | Value | 발급처 |
|-----|-------|--------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Google Analytics 4 |
| `NEXT_PUBLIC_NAVER_ANALYTICS_ID` | `발급코드` | Naver Analytics |

환경변수가 비어있으면 스크립트가 렌더링되지 않으므로 안전합니다.

---

## 3-A. 권한 이전 가이드

본인 계정으로 먼저 등록 후 고객에게 권한 이전하는 방법:

### Google Search Console 권한 이전

1. **Search Console** → **설정** → **사용자 및 권한**
2. **사용자 추가** 클릭
3. 고객 Google 계정 입력 → 권한: **소유자** 선택
4. 고객이 이메일 수락 후 소유자 등록 완료
5. (선택) 본인 계정을 제거하거나 **전체** 권한으로 유지

### Naver Search Advisor 권한 이전

네이버는 직접적인 권한 이전이 불가하므로:
1. 고객 네이버 계정으로 **새로 등록** (같은 도메인 중복 등록 가능)
2. 고객 계정에서 소유권 확인 (동일 메타태그가 이미 적용되어 있으므로 즉시 인증 성공)
3. 본인 계정의 등록은 삭제해도 무관

---

## 4. 체크리스트

### 사전 준비

- [ ] 도메인 연결 완료 (raontotalsolution.com)
- [ ] HTTPS 적용 확인
- [ ] sitemap.xml 접근 가능 확인
- [ ] robots.txt 접근 가능 확인

### 네이버 Search Advisor

- [ ] 네이버 계정 준비 (회사 공용 권장)
- [ ] https://searchadvisor.naver.com/ 접속
- [ ] 사이트 등록: `https://raontotalsolution.com`
- [ ] HTML 태그 인증 코드 복사
- [ ] layout.tsx에 인증 코드 적용
- [ ] 배포 완료
- [ ] 소유권 확인 완료
- [ ] Sitemap 제출: `https://raontotalsolution.com/sitemap.xml`
- [ ] Sitemap 정상 처리 확인

### Google Search Console

- [ ] Google 계정 준비 (회사 공용 권장)
- [ ] https://search.google.com/search-console/ 접속
- [ ] URL 프리픽스 선택
- [ ] 속성 추가: `https://raontotalsolution.com`
- [ ] HTML 태그 인증 코드 복사
- [ ] layout.tsx에 인증 코드 적용
- [ ] 배포 완료
- [ ] 소유권 확인 완료
- [ ] Sitemap 제출: `sitemap.xml`
- [ ] Sitemap 정상 처리 확인
- [ ] Core Web Vitals 데이터 수집 대기 (1-2일)

### 등록 완료 후

- [ ] 인덱싱 상태 모니터링 (1-2주)
- [ ] 주요 페이지 인덱싱 확인
- [ ] 검색 결과 노출 확인 (2-4주)
- [ ] 정기 모니터링 일정 수립 (월 1회 권장)

---

## 참고 자료

- [네이버 Search Advisor 도움말](https://searchadvisor.naver.com/guide/)
- [Google Search Console 도움말](https://support.google.com/webmasters/)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

**작성자**: SEO Strategist Agent
**버전**: 1.0
