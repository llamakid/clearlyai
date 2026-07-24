import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { COURSES_META } from '@/lib/course-data/courses'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learnaiclearly.com'
  const posts = getAllPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/for/professionals`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/for/business-owners`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/for/curious-learners`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/curriculum`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/course/0`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/starter-kit`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Public course overview pages — one per published course.
  const coursePages: MetadataRoute.Sitemap = COURSES_META
    .filter((c) => c.modules.some((m) => m.available))
    .map((c) => ({
      url: `${baseUrl}/courses/${c.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...coursePages, ...blogPages]
}
