import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard', '/courses/', '/course/'],
    },
    sitemap: 'https://learnaiclearly.com/sitemap.xml',
  }
}
