'use client';

import Script from 'next/script';

export function NaverAnalytics() {
  const naverId = process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID;

  if (!naverId) return null;

  return (
    <Script id="naver-analytics" strategy="afterInteractive">
      {`
        if(!wcs_add) var wcs_add = {};
        wcs_add["wa"] = "${naverId}";
        if(window.wcs) {
          wcs_do();
        }
      `}
    </Script>
  );
}
