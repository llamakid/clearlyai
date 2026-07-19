'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { AuditReport } from '@/lib/aeo/types'
import ReportCard from '@/components/tools/ReportCard'

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '40px',
}

export default function AuditTool({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [authRequired, setAuthRequired] = useState(false)
  const [authMessage, setAuthMessage] = useState('')
  const [report, setReport] = useState<AuditReport | null>(null)
  const [tracking, setTracking] = useState(false)
  const [trackError, setTrackError] = useState('')
  const [tracked, setTracked] = useState(false)

  async function handleTrack() {
    if (!report || tracking) return
    setTracking(true)
    setTrackError('')
    try {
      const res = await fetch('/api/tracker/sites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: report.url }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setTrackError(data.error || 'Could not start tracking. Please try again.')
        return
      }
      setTracked(true)
    } catch {
      setTrackError('Could not start tracking. Please try again.')
    } finally {
      setTracking(false)
    }
  }

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
        <div style={{ marginTop: 20 }}>
          <ReportCard report={report} />

          <div style={{ marginTop: 20 }}>
            {isLoggedIn ? (
              <div style={{
                ...card,
                background: 'var(--accent-lt)',
                border: '1.5px solid var(--accent)',
                padding: '28px 32px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 20, flexWrap: 'wrap',
              }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 20, marginBottom: 6, color: 'var(--ink)' }}>
                    {tracked ? "You're tracking this site" : 'Want us to watch this weekly?'}
                  </h2>
                  <p style={{ fontSize: 14, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
                    {tracked
                      ? "We'll re-check it every week and email you if your score drops."
                      : "We'll re-run this check every week and email you if your score drops — free with your account."}
                  </p>
                  {trackError && <p className="error-text" style={{ marginTop: 8 }}>{trackError}</p>}
                </div>
                {tracked ? (
                  <Link href="/tools/tracker" className="btn btn-primary" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    View tracker →
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleTrack}
                    disabled={tracking}
                    style={{ whiteSpace: 'nowrap', opacity: tracking ? 0.6 : 1 }}
                  >
                    {tracking ? 'Starting…' : 'Track this site weekly →'}
                  </button>
                )}
              </div>
            ) : (
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
                  Our courses teach you how AI search works and how to make it work for your business — in plain English, no tech background needed. They&apos;re all free.
                </p>
                <a href="/course/0" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                  Start the free course →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
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
