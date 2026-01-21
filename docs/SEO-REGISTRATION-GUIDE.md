# SEO 검색 엔진 등록 가이드

**대상 도메인**: raontotalsolution.com
**프레임워크**: Next.js 16 (App Router)
**Sitemap URL**: https://raontotalsolution.com/sitemap.xml
**작성일**: 2025-01-21

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

## 3. 인증 코드 적용 방법

### 3.1 파일 위치

인증 코드는 Next.js의 메타데이터 설정에서 관리됩니다.

**파일 경로**: `app/[locale]/layout.tsx`

### 3.2 현재 설정 확인

```typescript
// app/[locale]/layout.tsx (78-84번째 줄)
verification: {
  google: 'GOOGLE_VERIFICATION_CODE', // Google Search Console에서 발급
  other: {
    'naver-site-verification': 'NAVER_VERIFICATION_CODE', // 네이버 서치어드바이저에서 발급
  },
},
```

### 3.3 인증 코드 교체

1. **네이버 인증 코드 적용**
   - `NAVER_VERIFICATION_CODE`를 실제 코드로 교체
   ```typescript
   'naver-site-verification': '실제네이버인증코드',
   ```

2. **구글 인증 코드 적용**
   - `GOOGLE_VERIFICATION_CODE`를 실제 코드로 교체
   ```typescript
   google: '실제구글인증코드',
   ```

### 3.4 적용 예시

```typescript
verification: {
  google: 'Abc123XYZ789def456', // 실제 구글 인증 코드
  other: {
    'naver-site-verification': 'abc123def456ghi789', // 실제 네이버 인증 코드
  },
},
```

### 3.5 배포

```bash
# 변경사항 커밋
git add app/[locale]/layout.tsx
git commit -m "feat: add search console verification codes"

# 배포 (Vercel)
git push origin main
```

### 3.6 배포 후 검증

#### 메타 태그 확인

브라우저에서 소스 코드 확인:
1. https://raontotalsolution.com 접속
2. `Ctrl + U` (또는 `Cmd + Option + U`)로 소스 보기
3. `<head>` 태그 내에서 검색:
   - `naver-site-verification`
   - `google-site-verification`

#### 예상 결과

```html
<head>
  ...
  <meta name="google-site-verification" content="Abc123XYZ789def456" />
  <meta name="naver-site-verification" content="abc123def456ghi789" />
  ...
</head>
```

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
