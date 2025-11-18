import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "라온토탈솔루션 | 회전기계 및 왕복동 압축기 부품 전문",
  description: "30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업. 정유·석유화학 및 조선 산업을 위한 최적의 품질과 납기를 제공합니다.",
  keywords: ["왕복동 압축기", "실린더 라이너", "회전기계", "SPXFLOW", "NEUMAN & ESSER", "정유석유화학", "조선"],
  authors: [{ name: "라온토탈솔루션" }],
  openGraph: {
    title: "라온토탈솔루션 | 회전기계 및 왕복동 압축기 부품 전문",
    description: "30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업",
    type: "website",
    locale: "ko_KR",
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
