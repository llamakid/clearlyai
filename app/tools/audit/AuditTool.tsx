'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { AuditReport, CategoryResult, FindingStatus } from '@/lib/aeo/types'

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '40px',
}

const statusColors: Record<FindingStatus, { bg: string; border: string; text: string }> = {
  good: { bg: '#eef6ef', border: '#cde3d0', text: '#2e6136' },
  warn: { bg: '#fdf6e8', border: '#f0e0bb', text: '#8a6420' },
  bad: { bg: '#fbeeec', border: '#efd0cb', text: '#963f33' },
}

const statusIcon: Record<FindingStatus, string> = { good: '✓', warn: '!', bad: '✕' }

function scoreColor(pct: number): string {
  if (pct >= 80) return '#2e6136'
  if (pct >= 60) return '#8a6420'
  return '#963f33'
}

export default function AuditTool({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [authRequired, setAuthRequired] = useState(false)
  const [authMessage, setAuthMessage] = useState('')
  const [report, setReport] = useState<AuditReport | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim() || loading) return
    setLoading(true)
    setError('')
    setAuthRequired(false)
    setReport(null)
    try {
      const res = await fetch('/api/tools/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      if (res.status === 401) {
        setAuthRequired(true)
        setAuthMessage(data.error || '')
        return
      }
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setReport(data as AuditReport)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <Link href="/tools" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, color: 'var(--ink-mid)', textDecoration: 'none', marginBottom: 28,
      }}>
        ← AI Tools
      </Link>

      <div style={card}>
        <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 28, marginBottom: 8 }}>
          AI Search Checkup
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-mid)', marginBottom: 24, lineHeight: 1.6 }}>
          More people are finding businesses through AI tools like ChatGPT and Perplexity instead
          of Google. Enter your website and we&apos;ll check how easy it is for those tools to find,
          read, and recommend you — with a score out of 100 and a plain-English list of fixes.
        </p>
        {!isLoggedIn && !authRequired && (
          <p style={{ fontSize: 13, color: 'var(--accent-dk)', fontWeight: 600, marginBottom: 20 }}>
            ✓ Try it free — no account needed
          </p>
        )}
        {authRequired && <div style={{ marginBottom: 20 }}><SignInPrompt message={authMessage} /></div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="yourwebsite.com"
            disabled={loading}
            style={{ flex: '1 1 240px' }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading || !url.trim()}
            style={{ opacity: loading || !url.trim() ? 0.5 : 1, whiteSpace: 'nowrap' }}
          >
            {loading ? 'Checking…' : 'Check my site →'}
          </button>
        </form>

        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <div style={{
              width: 22, height: 22,
              border: '3px solid var(--accent-lt)',
              borderTopColor: 'var(--accent)',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              flexShrink: 0,
            }} />
            <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
              Visiting your page and checking how AI tools see it — this can take up to 20 seconds.
            </p>
          </div>
        )}

        {error && <p className="error-text" style={{ marginTop: 20 }}>{error}</p>}
      </div>

      {report && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
          <div style={{
            ...card,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 24, flexWrap: 'wrap',
          }}>
            <div style={{ minWidth: 200, flex: 1 }}>
              <p style={{
                fontSize: 12, fontWeight: 700, color: 'var(--accent-dk)',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6,
              }}>
                Your AI Search Report
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', wordBreak: 'break-all', marginBottom: 4 }}>
                {report.url}
              </p>
              <p style={{ fontSize: 13, color: 'var(--ink-mid)' }}>
                Checked {new Date(report.crawledAt).toLocaleString()}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-h)', fontSize: 56, lineHeight: 1,
                color: scoreColor(report.score),
              }}>
                {report.score}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-mid)', marginTop: 4 }}>out of 100</div>
              <div style={{
                display: 'inline-block', marginTop: 10,
                border: `1.5px solid ${scoreColor(report.score)}`,
                color: scoreColor(report.score),
                borderRadius: 999, padding: '4px 14px',
                fontSize: 13, fontWeight: 700,
              }}>
                Grade {report.grade}
              </div>
            </div>
          </div>

          {report.categories.map(category => (
            <CategoryCard key={category.key} category={category} />
          ))}

          {!isLoggedIn && (
            <div style={{
              ...card,
              background: 'var(--accent-lt)',
              border: '1.5px solid var(--accent)',
              padding: '28px 32px',
            }}>
              <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 22, marginBottom: 8, color: 'var(--ink)' }}>
                Want to fix these yourself?
              </h2>
              <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.65, marginBottom: 16 }}>
                Our courses teach you how AI search works and how to make it work for your
                business — in plain English, no tech background needed.
              </p>
              <a href="/course/0" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Start the free course →
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function CategoryCard({ category }: { category: CategoryResult }) {
  const pct = Math.round((category.score / category.maxScore) * 100)
  return (
    <div style={{ ...card, padding: '28px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
        <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 20, color: 'var(--ink)' }}>{category.label}</h3>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-mid)', whiteSpace: 'nowrap' }}>
          {category.score}/{category.maxScore}
        </span>
      </div>
      <div style={{ height: 8, borderRadius: 999, background: 'var(--bg)', overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: scoreColor(pct), borderRadius: 999 }} />
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, padding: 0, margin: 0 }}>
        {category.findings.map(finding => {
          const c = statusColors[finding.status]
          return (
            <li key={finding.id} style={{
              background: c.bg, border: `1px solid ${c.border}`,
              borderRadius: 12, padding: '12px 16px', fontSize: 14, color: c.text,
              display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.55,
            }}>
              <span style={{ fontWeight: 700, flexShrink: 0 }}>{statusIcon[finding.status]}</span>
              <div>
                <p style={{ margin: 0 }}>{finding.message}</p>
                {finding.recommendation && (
                  <p style={{ margin: '4px 0 0', fontSize: 13, opacity: 0.85 }}>
                    How to fix it: {finding.recommendation}
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function SignInPrompt({ message }: { message?: string }) {
  return (
    <div style={{
      background: 'var(--accent-lt)',
      border: '1.5px solid var(--accent)',
      borderRadius: 12,
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
    }}>
      <p style={{ fontSize: 14, color: 'var(--accent-dk)', fontWeight: 500, margin: 0, flex: 1, minWidth: 200 }}>
        {message || 'Create a free account to keep going. Takes 30 seconds.'}
      </p>
      <a
        href="/signup"
        style={{
          background: 'var(--accent)', color: 'white',
          fontSize: 13, fontWeight: 600,
          padding: '8px 18px', borderRadius: 8,
          textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Create free account →
      </a>
    </div>
  )
}
