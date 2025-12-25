import Script from 'next/script';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '라온토탈솔루션',
    alternateName: 'Raon Total Solution',
    url: 'https://raontotalsolution.co.kr',
    logo: 'https://raontotalsolution.co.kr/images/company/raon-logo.png',
    description: '30년 경험의 회전기계 및 왕복동 압축기 부품·솔루션 전문 기업. 정유·석유화학 및 조선 산업을 위한 최적의 품질과 납기를 제공합니다.',
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
    foundingDate: '2020',
    slogan: "Technology Connecting Energy's Future",
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
