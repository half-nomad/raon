import type { Metadata } from "next";
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { NaverAnalytics } from '@/components/analytics/naver-analytics';
import { OrganizationSchema } from '@/components/seo/organization-schema';
import "../globals.css";

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

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
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
      other: {
        'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
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
    <html lang={locale} className={pretendard.variable}>
      <head>
        {/* hreflang 태그 */}
        <link rel="alternate" hrefLang="ko" href="https://raontotalsolution.com/ko" />
        <link rel="alternate" hrefLang="en" href="https://raontotalsolution.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://raontotalsolution.com/ko" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <OrganizationSchema />
        <GoogleAnalytics />
        <NaverAnalytics />
      </body>
    </html>
  );
}
