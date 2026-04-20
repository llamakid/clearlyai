import { getPost, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Clearly, AI`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Post header */}
        <div style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '56px 32px',
        }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link href="/blog" style={{
              fontSize: 13, color: 'var(--ink-lt)', fontWeight: 500,
              textDecoration: 'none', display: 'inline-block', marginBottom: 24,
            }}>
              ← All posts
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
                textTransform: 'uppercase',
                background: 'var(--accent-xl)',
                color: 'var(--accent-dk)',
                padding: '3px 12px', borderRadius: 999,
              }}>
                {post.tag}
              </span>
              <span style={{ fontSize: 13, color: 'var(--ink-lt)' }}>{post.readTime}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--ink)',
              lineHeight: 1.25,
              marginBottom: 14,
              letterSpacing: '-0.02em',
            }}>
              {post.title}
            </h1>

            <p style={{ fontSize: 13, color: 'var(--ink-lt)' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Post body */}
        <div style={{ padding: '56px 32px 80px' }}>
          <div style={{
            maxWidth: 720,
            margin: '0 auto',
            fontSize: 17,
            lineHeight: 1.75,
            color: 'var(--ink-mid)',
          }}>
            <div className="prose">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          background: 'var(--accent-xl)',
          padding: '48px 32px',
          textAlign: 'center',
          borderTop: '1px solid var(--accent-lt)',
        }}>
          <div style={{ maxWidth: 520, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-dm-serif), Georgia, serif',
              fontSize: 26,
              marginBottom: 12,
            }}>
              Ready to go further?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', marginBottom: 24 }}>
              The full Clearly, AI course goes deep on everything in this post — with hands-on exercises, real prompts, and six complete modules.
            </p>
            <Link href="/pricing" className="btn btn-primary">
              Get full course access — $97
            </Link>
          </div>
        </div>

      </main>
      <Footer />

      <style>{`
        .prose h2 {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: 26px;
          color: var(--ink);
          margin: 40px 0 14px;
        }
        .prose h3 {
          font-family: var(--font-dm-serif), Georgia, serif;
          font-size: 21px;
          color: var(--ink);
          margin: 28px 0 10px;
        }
        .prose p { margin-bottom: 20px; }
        .prose strong { color: var(--ink); font-weight: 700; }
        .prose ul, .prose ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .prose li { margin-bottom: 8px; }
        .prose blockquote {
          border-left: 3px solid var(--accent);
          margin: 28px 0;
          padding: 14px 20px;
          background: var(--accent-xl);
          border-radius: 0 10px 10px 0;
          color: var(--ink);
          font-style: italic;
        }
        .prose code {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 2px 7px;
          font-size: 14px;
          color: var(--accent-dk);
        }
        .prose pre {
          background: var(--ink);
          color: var(--accent-lt);
          border-radius: 12px;
          padding: 20px 24px;
          overflow-x: auto;
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 1.6;
        }
        .prose pre code {
          background: none;
          border: none;
          padding: 0;
          color: inherit;
          font-size: inherit;
        }
        .prose a { color: var(--accent); font-weight: 500; }
        .prose a:hover { color: var(--accent-dk); }
        .prose hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 40px 0;
        }
      `}</style>
    </>
  )
}
