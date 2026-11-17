import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'
import { GUIDE_SLUGS, GUIDES_UPDATED } from '@/lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-05-21'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dental-implants-ecuador`,
      lastModified: new Date('2026-11-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/veneers-ecuador`,
      lastModified: new Date('2026-11-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(GUIDES_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...GUIDE_SLUGS.map((slug) => ({
      url: `${BASE_URL}/guides/${slug}`,
      lastModified: new Date(GUIDES_UPDATED),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-05-21'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
