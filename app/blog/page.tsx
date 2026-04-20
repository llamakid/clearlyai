import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Clearly, AI',
  description: 'Practical AI tips written in plain English for non-technical adults.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>

        {/* Header */}
        <div style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '64px 32px',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent)',
            marginBottom: 12,
          }}>
            The Clearly, AI Blog
          </div>
          <h1 style={{
            fontFamily: 'var(--font-dm-serif), Georgia, serif',
            fontSize: 'clamp(30px, 5vw, 44px)',
            color: 'var(--ink)',
            marginBottom: 14,
            letterSpacing: '-0.02em',
          }}>
            Practical AI tips.<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Plain English.</em>
          </h1>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', maxWidth: 480, margin: '0 auto' }}>
            No jargon. No fluff. Just things you can actually do with AI today.
          </p>
        </div>

        {/* Posts grid */}
        <div style={{ padding: '64px 32px' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            {posts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-lt)' }}>
                <p style={{ fontSize: 16 }}>Posts coming soon.</p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 24,
              }}>
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article className="card" style={{
                      padding: 28,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      transition: 'box-shadow 0.2s',
                      cursor: 'pointer',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                          background: 'var(--accent-xl)', color: 'var(--accent-dk)',
                          padding: '3px 10px', borderRadius: 999,
                        }}>
                          {post.tag}
                        </span>
                        <span style={{ fontSize: 12, color: 'var(--ink-lt)' }}>{post.readTime}</span>
                      </div>

                      <h2 style={{
                        fontFamily: 'var(--font-dm-serif), Georgia, serif',
                        fontSize: 20,
                        color: 'var(--ink)',
                        lineHeight: 1.3,
                      }}>
                        {post.title}
                      </h2>

                      <p style={{
                        fontSize: 14,
                        color: 'var(--ink-mid)',
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}>
                        {post.excerpt}
                      </p>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 14,
                        borderTop: '1px solid var(--border)',
                        marginTop: 'auto',
                      }}>
                        <span style={{ fontSize: 12, color: 'var(--ink-lt)' }}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })}
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>
                          Read →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
