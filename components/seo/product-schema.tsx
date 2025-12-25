import Script from 'next/script';

interface Manufacturer {
  name: string;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  category?: string;
  manufacturers?: Manufacturer[];
  image?: string;
}

export function ProductSchema({
  name,
  description,
  category = '산업용 기계 부품',
  manufacturers = [],
  image,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: '라온토탈솔루션',
    },
    ...(manufacturers.length > 0 && {
      manufacturer: manufacturers.map((m) => ({
        '@type': 'Organization',
        name: m.name,
      })),
    }),
    category,
    ...(image && {
      image: `https://raontotalsolution.co.kr${image}`,
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'KRW',
      },
      seller: {
        '@type': 'Organization',
        name: '라온토탈솔루션',
      },
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
