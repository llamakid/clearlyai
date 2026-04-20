import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tag: string
  readTime: string
}

export interface Post extends PostMeta {
  content: string
}

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 220))
  return `${minutes} min read`
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))

  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      if (data.draft) return null

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tag: data.tag || 'Beginner',
        readTime: calcReadTime(content),
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as PostMeta[]
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  if (data.draft) return null

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tag: data.tag || 'Beginner',
    readTime: calcReadTime(content),
    content,
  }
}
