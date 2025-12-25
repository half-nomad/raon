# Code Review Report
# Raon Total Solution B2B Website

**Review Date:** 2025-12-24
**Reviewer:** Claude Code (code-reviewer agent)
**Version:** v0.9.0

---

## Summary

| 심각도 | 개수 | 주요 내용 |
|--------|------|-----------|
| Critical | 2 | XSS 취약점, 서버 사이드 검증 부족 |
| High | 6 | i18n Link 미적용, 하드코딩된 메타데이터 |
| Medium | 6 | 타입 안전성, 성능 최적화, 하드코딩 텍스트 |
| Low | 4 | 코드 스타일, 접근성 |

---

## Critical Issues (즉시 수정 필요)

### 1. XSS 취약점 - API 라우트에서 사용자 입력값 직접 HTML 삽입
**파일:** `app/api/contact/route.ts:216-241`

```typescript
// 사용자 입력이 HTML에 직접 삽입됨 - XSS 위험
<td><strong>${name}</strong></td>
<td>${company}</td>
<td><a href="mailto:${email}">${email}</a></td>
<td><a href="tel:${phone}">${phone}</a></td>
<div class="message-box">${message}</div>
<span class="badge">${categoryMap[category] || category}</span>
```

**문제:** 사용자가 입력한 `name`, `company`, `email`, `phone`, `message`, `category` 값이 HTML 이스케이프 없이 직접 이메일 템플릿에 삽입되어 XSS 공격에 취약합니다.

**해결방안:** HTML 특수문자를 이스케이프하는 함수 추가 필요
```typescript
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

---

### 2. 이메일 검증 불충분 - 서버 사이드
**파일:** `app/api/contact/route.ts:41-46`

```typescript
if (!category || !name || !company || !email || !phone || !message) {
  return NextResponse.json(
    { error: "모든 필수 항목을 입력해주세요." },
    { status: 400 }
  );
}
```

**문제:** 이메일 형식 검증이 서버에서 수행되지 않습니다. 클라이언트 검증만으로는 보안상 불충분합니다.

**해결방안:**
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return NextResponse.json(
    { error: "유효한 이메일 주소를 입력해주세요." },
    { status: 400 }
  );
}
```

---

## High Issues (조속히 수정 권장)

### 3. dangerouslySetInnerHTML 사용 - JSON-LD 스키마
**파일:** `components/seo/organization-schema.tsx`, `components/seo/product-schema.tsx`

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

**문제:** 현재는 정적 데이터를 사용하므로 안전하지만, props로 받은 사용자 입력이 schema에 포함될 경우 XSS 위험이 있습니다.

**해결방안:** JSON 데이터 내 문자열 값을 이스케이프하거나, Next.js의 Script 컴포넌트 사용 검토

---

### 4. 하드코딩된 URL 및 메타데이터
**파일:** `app/[locale]/industries/oil-refinery/page.tsx:10-19`

```typescript
export const metadata: Metadata = {
  title: '정유·석유화학 산업 | Oil Refinery & Petrochemical',
  description: '30년 경험의 왕복동 압축기...',
  // i18n을 사용하지 않고 하드코딩됨
};
```

**문제:** i18n이 적용된 프로젝트임에도 metadata가 한국어로 하드코딩되어 있어 영어 사용자에게 부적절한 메타데이터가 표시됩니다.

**해결방안:** `generateMetadata` 함수로 변경하여 locale별 메타데이터 생성

---

### 5. Footer에서 일반 Link 사용 (i18n 미적용)
**파일:** `components/layout/footer.tsx:4, 27-57`

```tsx
import Link from "next/link";  // next-intl의 Link가 아님
// ...
<Link href="/company">  // locale prefix 없이 링크
```

**문제:** i18n 적용된 프로젝트에서 `next/link`를 사용하면 locale prefix가 누락되어 라우팅 문제 발생 가능

**해결방안:**
```tsx
import { Link } from "@/i18n/navigation";
```

---

### 6. products-snapshot.tsx에서 일반 Link 사용
**파일:** `components/home/products-snapshot.tsx:4`

```tsx
import Link from "next/link";  // next-intl의 Link가 아님
```

**해결방안:** `import { Link } from "@/i18n/navigation";` 사용

---

### 7. products/page.tsx에서 일반 Link 사용
**파일:** `app/[locale]/products/page.tsx:1`

```tsx
import Link from "next/link";  // next-intl의 Link가 아님
```

---

### 8. oil-refinery/page.tsx에서 일반 Link 사용
**파일:** `app/[locale]/industries/oil-refinery/page.tsx:6`

```tsx
import Link from "next/link";  // next-intl의 Link가 아님
```

---

## Medium Issues (개선 권장)

### 9. 타입 안전성 - any 타입 사용
**파일:** `app/[locale]/contact/page.tsx:32`

```typescript
const createContactFormSchema = (t: any) => z.object({
```

**문제:** `any` 타입 사용으로 타입 안전성이 저하됩니다.

**해결방안:**
```typescript
import { useTranslations } from 'next-intl';
type TranslationFunction = ReturnType<typeof useTranslations>;
const createContactFormSchema = (t: TranslationFunction) => z.object({
```

---

### 10. 하드코딩된 텍스트 (i18n 미적용)
**파일:** `components/home/products-snapshot.tsx:48, 104`

```tsx
<span>Learn More</span>  // 하드코딩
<p className="...">Business Item</p>  // 하드코딩
```

**문제:** i18n 적용 프로젝트에서 일부 텍스트가 하드코딩되어 있음

---

### 11. 파일 검증 에러 메시지 하드코딩 (i18n 미적용)
**파일:** `app/[locale]/contact/page.tsx:91-94, 105`

```typescript
return `${file.name}: 지원하지 않는 파일 형식입니다. (PDF, 이미지, Word 문서만 가능)`;
return `${file.name}: 파일 크기가 5MB를 초과합니다.`;
setFileError(`최대 ${MAX_FILES}개의 파일만 첨부할 수 있습니다.`);
```

**문제:** 파일 검증 에러 메시지가 한국어로 하드코딩됨

---

### 12. Scroll 이벤트 최적화 필요
**파일:** `components/layout/header.tsx:29-36`

```typescript
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**문제:** 스크롤 이벤트가 throttle/debounce 없이 처리되어 성능 저하 가능

**해결방안:**
```typescript
useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

---

### 13. Image 컴포넌트에 sizes 속성 누락
**파일:** `app/[locale]/products/page.tsx:144-149`

```tsx
<Image
  src={product.image}
  alt={product.title}
  fill
  className="object-cover..."
  // sizes 속성 없음
/>
```

**문제:** `fill` 속성 사용 시 `sizes` 없으면 Next.js 최적화가 제대로 작동하지 않음

---

### 14. Location 컴포넌트 - img 태그 사용
**파일:** `components/company/location.tsx:96-100`

```tsx
<img
  src={MAP_CONFIG[activeMap].imageUrl}
  alt={`${MAP_CONFIG[activeMap].name}...`}
  className="w-full h-full object-cover"
/>
```

**문제:** Next.js Image 컴포넌트 대신 일반 img 태그 사용으로 이미지 최적화 미적용

---

## Low Issues (선택적 개선)

### 15. index를 key로 사용
**파일:** `components/home/products-snapshot.tsx:117`

```tsx
{products.map((product, index) => (
  <ProductCard key={index} {...product} />
))}
```

**문제:** 배열 index를 React key로 사용하면 리스트 재정렬 시 비효율적인 리렌더링 발생 가능

**해결방안:** 고유 id 사용
```tsx
<ProductCard key={product.href} {...product} />
```

---

### 16. 미사용 가능성 있는 페이지 링크
**파일:** `components/layout/footer.tsx:108-119`

```tsx
<Link href="/privacy">Privacy Policy</Link>
<Link href="/terms">Terms of Service</Link>
```

**문제:** `/privacy`, `/terms` 페이지가 실제로 존재하는지 확인 필요

---

### 17. 콘솔 에러 로깅만 수행
**파일:** `app/api/contact/route.ts:282`

```typescript
console.error("Contact form error:", error);
```

**문제:** 프로덕션에서 에러 모니터링 서비스(Sentry 등) 연동 없이 console.error만 사용

---

### 18. Button aria-label 하드코딩
**파일:** `components/layout/header.tsx:181`

```tsx
aria-label="메뉴 열기"  // 한국어 하드코딩
```

**해결방안:** 번역 키 사용

---

## Action Items

### 즉시 조치 필요 (Critical)
1. [ ] API 라우트의 XSS 취약점 수정 (HTML 이스케이프 함수 추가)
2. [ ] 서버 사이드 이메일 형식 검증 추가

### 우선 개선 권장 (High)
3. [ ] Footer에서 `next/link` → `@/i18n/navigation` Link로 변경
4. [ ] products-snapshot.tsx에서 Link 변경
5. [ ] products/page.tsx에서 Link 변경
6. [ ] oil-refinery/page.tsx에서 Link 변경
7. [ ] 하드코딩된 메타데이터를 `generateMetadata` 함수로 변환

### 개선 권장 (Medium)
8. [ ] any 타입을 구체적 타입으로 변경
9. [ ] 스크롤 이벤트에 requestAnimationFrame 적용
10. [ ] Image 컴포넌트에 sizes 속성 추가
11. [ ] 하드코딩된 텍스트 i18n 적용

---

## Notes

- 전체적으로 코드 품질은 양호함
- i18n 적용 시 일부 Link와 텍스트가 누락되어 있음
- 보안 관련 Critical 이슈 2개는 프로덕션 전 반드시 수정 필요
