import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://raontotalsolution.com'
  const locales = routing.locales

  // 모든 페이지 경로
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/company', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/oil-refinery', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/shipbuilding', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/power-plant', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/products/compressor', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/products/mixer', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/products/motor', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/products/pump', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/products/bearing-lubrication', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/partners', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // 각 페이지에 대해 모든 언어 버전 생성 + hreflang alternates
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      // 언어별 alternate URLs 생성
      const languages: Record<string, string> = {}
      for (const altLocale of locales) {
        languages[altLocale] = `${baseUrl}/${altLocale}${page.path}`
      }
      // x-default는 기본 언어(ko)로 설정
      languages['x-default'] = `${baseUrl}/ko${page.path}`

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages,
        },
      })
    }
  }

  return sitemapEntries
}
