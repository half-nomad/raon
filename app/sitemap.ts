import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://raontotalsolution.co.kr'

  // 정적 페이지
  const staticPages = [
    '',
    '/company',
    '/industries',
    '/industries/oil-refinery',
    '/industries/shipbuilding',
    '/products',
    '/partners',
    '/contact',
  ]

  // 제품 페이지
  const products = [
    '/products/compressor',
    '/products/mixer',
    '/products/motor',
    '/products/pump',
    '/products/bearing',
    '/products/cylinder-liner',
    '/products/oil-purifier',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...products.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
