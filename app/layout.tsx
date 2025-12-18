import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://raontotalsolution.co.kr'),
  title: {
    default: '라온토탈솔루션 | 회전기계 및 압축기 부품 전문 기업',
    template: '%s | 라온토탈솔루션'
  },
  description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업. 정유·석유화학, 조선 산업 대상 글로벌 파트너십 보유.',
  keywords: ['회전기계 부품', '압축기 부품', '정유석유화학', '조선 산업', 'Compressor', 'Pump', 'Motor', 'Bearing', 'SPXFLOW', 'NEUMAN & ESSER', 'NIDEC', '울산 대리점'],
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
    description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업. 정유·석유화학, 조선 산업 대상.',
    images: [
      {
        url: '/images/og/main-og.jpg',
        width: 1200,
        height: 630,
        alt: '라온토탈솔루션 - 회전기계 부품 전문',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
