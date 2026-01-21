import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const isKorean = locale === 'ko';

  return {
    metadataBase: new URL('https://raontotalsolution.com'),
    title: {
      default: t('home.title'),
      template: `%s | ${t('siteName')}`
    },
    description: t('home.description'),
    keywords: isKorean
      ? ['회전기계 부품', '압축기 부품', '정유석유화학', '조선 산업', 'Compressor', 'Pump', 'Motor', 'Bearing', 'SPXFLOW', 'NEUMAN & ESSER', 'NIDEC']
      : ['rotating equipment parts', 'compressor parts', 'oil refinery', 'petrochemical', 'shipbuilding', 'Compressor', 'Pump', 'Motor', 'Bearing', 'SPXFLOW', 'NEUMAN & ESSER', 'NIDEC'],
    authors: [{ name: t('siteName') }],
    creator: t('siteName'),
    publisher: t('siteName'),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: isKorean ? 'ko_KR' : 'en_US',
      url: `https://raontotalsolution.com/${locale}`,
      siteName: t('siteName'),
      title: t('home.title'),
      description: t('home.description'),
      images: [
        {
          url: '/images/og/main-og.jpg',
          width: 1200,
          height: 630,
          alt: t('siteName'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
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
    alternates: {
      canonical: `https://raontotalsolution.com/${locale}`,
      languages: {
        'ko': 'https://raontotalsolution.com/ko',
        'en': 'https://raontotalsolution.com/en',
        'x-default': 'https://raontotalsolution.com/ko',
      },
    },
    // Search Console 인증 태그 (등록 후 실제 값으로 교체)
    verification: {
      google: 'GOOGLE_VERIFICATION_CODE', // Google Search Console에서 발급
      other: {
        'naver-site-verification': 'NAVER_VERIFICATION_CODE', // 네이버 서치어드바이저에서 발급
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // 유효하지 않은 locale인 경우 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 번역 메시지 로드
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* hreflang 태그 */}
        <link rel="alternate" hrefLang="ko" href="https://raontotalsolution.com/ko" />
        <link rel="alternate" hrefLang="en" href="https://raontotalsolution.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://raontotalsolution.com/ko" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
