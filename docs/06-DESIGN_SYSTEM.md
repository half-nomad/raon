# Design System
# Raon Total Solution B2B Website

**Version:** 1.0
**Last Updated:** 2025-11-18
**Status:** Active

## Overview

라온토탈솔루션 웹사이트의 UI/UX 일관성을 위한 디자인 시스템입니다. Tailwind CSS v4 및 shadcn/ui를 기반으로 B2B 기술 기업의 전문성과 신뢰감을 전달하는 모던한 디자인을 지향합니다.

## Design Principles

1. **Professional & Trustworthy**: 깔끔하고 신뢰감 있는 B2B 기술 기업 이미지
2. **Clear Information Hierarchy**: 정보의 우선순위가 명확히 드러나는 구조
3. **Mobile First**: 모바일 경험을 최우선으로 설계하고 데스크톱으로 확장
4. **Accessibility**: 모든 사용자가 쉽게 접근하고 이해할 수 있는 인터페이스

## Brand Identity

### Brand Values
- 30년 업력의 신뢰성
- 글로벌 파트너십
- 기술 전문성
- 고객 최우선

### Tone and Voice
**Tone:** Professional, Reliable, Approachable
**Voice Characteristics:**
- 전문적이지만 과도하게 기술적이지 않음
- 명확하고 직접적인 메시지
- 고객 니즈 중심의 커뮤니케이션

## Color System

### Primary Colors (Deep Navy + White)
```css
/* Deep Navy - Main Brand Color */
--color-primary: #0A1628;
--color-primary-light: #1A2D47;
--color-primary-dark: #000814;

/* White - Background & Text */
--color-white: #FFFFFF;
--color-off-white: #F8FAFC;
```

### Secondary Colors (Blue Gradient)
```css
/* Bright Blue - Gradient Start */
--color-secondary: #3B82F6;
--color-secondary-light: #60A5FA;
--color-secondary-lighter: #93C5FD;

/* Sky Blue - Background Accent */
--color-accent-bg: #E0F2FE;
--color-accent-bg-light: #F0F9FF;
```

### Accent Colors (Red Emphasis)
```css
/* Vibrant Red - CTA & Emphasis */
--color-accent-red: #EF4444;
--color-accent-red-dark: #DC2626;
--color-accent-red-light: #F87171;
--color-accent-red-bg: #FEF2F2;
```

### Neutral Colors
```css
/* Backgrounds */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F1F5F9;
--color-bg-tertiary: #E2E8F0;

/* Text */
--color-text-primary: #0F172A;    /* Almost black */
--color-text-secondary: #475569;  /* Gray 600 */
--color-text-tertiary: #94A3B8;   /* Gray 400 */

/* Borders */
--color-border: #CBD5E1;          /* Gray 300 */
--color-border-light: #E2E8F0;    /* Gray 200 */
```

### Semantic Colors
```css
/* Success */
--color-success: #10B981;
--color-success-bg: #D1FAE5;

/* Warning */
--color-warning: #F59E0B;
--color-warning-bg: #FEF3C7;

/* Error */
--color-error: #EF4444;
--color-error-bg: #FEE2E2;

/* Info */
--color-info: #3B82F6;
--color-info-bg: #DBEAFE;
```

### Usage Guidelines
- **Primary Navy**: Header, Footer, Section Backgrounds, Primary CTAs
- **White**: Main background, Card backgrounds, Text on dark backgrounds
- **Blue Gradient**: Hero backgrounds, Hover effects, Interactive elements
- **Red Accent**: Important CTAs ("상담 문의"), Emphasis text, Alerts
- **Neutral**: Text, Borders, Subtle backgrounds

### Gradient Combinations
```css
/* Blue Gradient (for backgrounds) */
.gradient-blue {
  background: linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%);
}

/* Navy to Blue Gradient */
.gradient-navy-blue {
  background: linear-gradient(135deg, #0A1628 0%, #1E40AF 100%);
}

/* Subtle Light Gradient */
.gradient-light {
  background: linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%);
}
```

## Typography

### Font Families
```css
/* Primary Font - Pretendard (Korean優先) */
--font-family-primary: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
                       'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Fallback for numbers and English */
--font-family-secondary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Monospace (Code, Technical Specs) */
--font-family-mono: 'Fira Code', 'SF Mono', Consolas, 'Courier New', monospace;
```

### Font Sizes (Tailwind v4 기반)
```css
/* Headings */
--font-size-h1: clamp(2rem, 5vw, 3rem);      /* 32px ~ 48px */
--font-size-h2: clamp(1.75rem, 4vw, 2.5rem); /* 28px ~ 40px */
--font-size-h3: clamp(1.5rem, 3vw, 2rem);    /* 24px ~ 32px */
--font-size-h4: clamp(1.25rem, 2.5vw, 1.5rem); /* 20px ~ 24px */
--font-size-h5: 1.125rem;                    /* 18px */
--font-size-h6: 1rem;                        /* 16px */

/* Body */
--font-size-base: 1rem;        /* 16px */
--font-size-small: 0.875rem;   /* 14px */
--font-size-xs: 0.75rem;       /* 12px */
--font-size-lg: 1.125rem;      /* 18px */
```

### Font Weights (Pretendard Variable)
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights
```css
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 1.75;
```

### Typography Usage Examples
```css
/* Heading 1 - Hero Title */
h1 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-primary);
}

/* Body Text */
body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
}

/* Emphasis Text (Red Accent) */
.emphasis-red {
  color: var(--color-accent-red);
  font-weight: var(--font-weight-semibold);
}
```

## Spacing System

### Spacing Scale (Tailwind v4 기반)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Section Spacing
```css
/* Desktop Section Spacing */
--section-padding-y-desktop: 120px;
--section-padding-y-tablet: 80px;
--section-padding-y-mobile: 48px;

/* Section Inner Spacing */
--section-gap-desktop: 64px;
--section-gap-tablet: 48px;
--section-gap-mobile: 32px;
```

## Layout

### Container Widths
```css
/* Max Container Width (기획서 기준) */
--container-max: 1240px;

/* Responsive Container Padding */
--container-padding-mobile: 1rem;    /* 16px */
--container-padding-tablet: 1.5rem;  /* 24px */
--container-padding-desktop: 2rem;   /* 32px */
```

### Breakpoints (Tailwind v4)
```css
/* Mobile First Breakpoints */
--breakpoint-sm: 640px;    /* Mobile → Tablet */
--breakpoint-md: 768px;    /* Tablet → Desktop */
--breakpoint-lg: 1024px;   /* Desktop → Large Desktop */
--breakpoint-xl: 1280px;   /* Large Desktop+ */
```

### Grid System
- **Mobile (< 640px)**: 1 column
- **Tablet (640px ~ 1023px)**: 2 columns
- **Desktop (1024px+)**: 3 columns
- **Gutter**: 24px (desktop), 16px (mobile)
- **Max Width**: 1240px (container)

## Components

### Buttons

#### Primary CTA Button (Navy)
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 2rem;           /* 12px 32px */
  border-radius: 9999px;           /* Pill shape */
  font-weight: var(--font-weight-semibold);
  font-size: 1rem;
  transition: all 200ms ease;
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(10, 22, 40, 0.2);
}
```

#### Secondary CTA Button (Outline White)
```css
.btn-secondary {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: var(--font-weight-semibold);
  transition: all 200ms ease;
}

.btn-secondary:hover {
  background: var(--color-white);
  color: var(--color-primary);
}
```

#### Accent CTA Button (Red)
```css
.btn-accent {
  background: var(--color-accent-red);
  color: var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: var(--font-weight-semibold);
  transition: all 200ms ease;
}

.btn-accent:hover {
  background: var(--color-accent-red-dark);
  transform: translateY(-2px);
}
```

**Usage:**
- **Primary (Navy)**: Main CTA ("상담 문의")
- **Secondary (Outline)**: Alternative CTA on dark backgrounds ("제품 문의")
- **Accent (Red)**: Urgent/Important CTAs ("긴급 문의")

### Input Fields (shadcn/ui Input 커스터마이즈)
```css
.input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--color-white);
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: var(--color-secondary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input::placeholder {
  color: var(--color-text-tertiary);
}
```

### Cards
```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border-light);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 300ms ease;
}

.card:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.card-image {
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
}
```

### Header (고정 헤더)
```css
.header {
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  transition: background 300ms ease, backdrop-filter 300ms ease;
  z-index: 50;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
```

### Placeholder Image Component
```css
.placeholder-image {
  aspect-ratio: 4 / 3;
  border: 2px dashed var(--color-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  color: var(--color-text-tertiary);
  font-size: 0.875rem;
}

.placeholder-image::after {
  content: "이미지 삽입 예정";
}
```

### Tags/Chips (제품 카테고리)
```css
.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  transition: background 200ms ease;
}

.chip:hover {
  background: var(--color-secondary);
  color: var(--color-white);
}
```

## Iconography

### Icon System
**Library:** Lucide React (shadcn/ui 기본)
**Sizes:**
- 16px (sm): Inline text icons
- 20px (md): Button icons
- 24px (lg): Section icons
- 32px (xl): Feature icons
**Style:** Outline (default), consistent 2px stroke width

### Usage Guidelines
- Use outline style for all icons
- Maintain 2px stroke width
- Icon color matches text color unless emphasized
- Add 8px gap between icon and text

## Elevation (Shadows)

```css
/* Shadows */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

**Usage:**
- **xs/sm**: Subtle hover effects
- **md**: Cards, Dropdowns
- **lg**: Floating CTAs, Navigation
- **xl/2xl**: Modals, Overlays

## Border Radius

```css
--radius-xs: 4px;
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

**Usage:**
- **xs/sm**: Small elements (badges, tags)
- **md**: Input fields
- **lg**: Cards, Buttons
- **xl/2xl**: Large cards, Hero sections
- **full**: Pills, CTA buttons, Avatars

## Animations

### Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Animations (Framer Motion 또는 Tailwind)
```css
/* Fade Up (스크롤 섹션) */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide In from Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**Usage:**
- **fadeUp**: Section reveals on scroll
- **scaleIn**: Modal/Dialog entrances
- **slideInLeft**: Card list reveals

## Accessibility

### Color Contrast
- **Text on White**: Navy (#0A1628) - 15.8:1 (AAA)
- **Text on Navy**: White (#FFFFFF) - 15.8:1 (AAA)
- **Red Accent on White**: #EF4444 - 4.6:1 (AA)
- **Blue Secondary on White**: #3B82F6 - 4.5:1 (AA)

### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
  border-radius: var(--radius-md);
}
```

### Touch Targets
- Minimum size: 44x44px (iOS/Android guidelines)
- Button padding ensures comfortable touch area
- CTA buttons: 48px+ height

### Screen Reader Support
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Alt text for all images (or placeholder description)

## Dark Mode

```css
.dark {
  --color-bg-primary: #0F172A;
  --color-bg-secondary: #1E293B;
  --color-bg-tertiary: #334155;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #CBD5E1;
  --color-text-tertiary: #64748B;
  --color-border: #334155;
  --color-border-light: #475569;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Auto dark mode based on system preference */
  }
}
```

**Note:** Phase 1에서는 Light Mode 우선, Dark Mode는 Phase 2 고려

## Responsive Design

### Mobile First Approach
1. **Mobile (320px ~ 639px)**: 1 column, stacked layout
2. **Tablet (640px ~ 1023px)**: 2 columns, side-by-side
3. **Desktop (1024px+)**: 3 columns, full layout

### Key Responsive Considerations
- **Font sizes**: Use `clamp()` for fluid typography
- **Images**: Responsive with `aspect-ratio`, lazy loading
- **Navigation**: Hamburger menu (mobile) → Full menu (desktop)
- **Spacing**: Tighter on mobile (48px), generous on desktop (120px)

## Design Tokens (Tailwind v4 CSS Variables)

**File Location:** `app/globals.css`

**Usage Example:**
```css
.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: var(--space-20) 0;
  color: var(--color-white);
}

.cta-button {
  background: var(--color-accent-red);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  transition: var(--transition-base);
}
```

## Component Library (shadcn/ui)

### Installed Components
- [ ] Button (completed)
- [ ] Input
- [ ] Textarea
- [ ] Select
- [ ] Form
- [ ] Card
- [ ] Sheet (Mobile Navigation)
- [ ] Accordion (Products Expand/Collapse)
- [ ] Carousel (Partners/Clients Logos)
- [ ] Dialog (Modals)

### Custom Components (Project-Specific)
- [ ] Header (Fixed, with scroll effect)
- [ ] Footer
- [ ] PlaceholderImage
- [ ] IndustryCard
- [ ] ProductCard
- [ ] PartnerLogo Slider
- [ ] TimelineComponent (Company History)
- [ ] CTABanner

## Resources

### Design References
- JEI 레퍼런스 사이트 (모던한 카드 라운딩, 여백 감각)
- shadcn/ui 공식 문서: https://ui.shadcn.com
- Tailwind CSS v4 문서: https://tailwindcss.com

### Font Resources
- Pretendard Variable: https://github.com/orioncactus/pretendard
- Fallback: System fonts (-apple-system, BlinkMacSystemFont)

### Icon Library
- Lucide React: https://lucide.dev

## Changelog
- 2025-11-18: Initial version (v1.0)
  - 색상 시스템 정의 (Navy + White + Blue Gradient + Red Accent)
  - Typography 시스템 (Pretendard Variable)
  - Component styles (Buttons, Cards, Inputs)
  - Responsive breakpoints
