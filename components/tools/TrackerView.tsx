'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { AuditReport } from '@/lib/aeo/types'
import ReportCard, { scoreColor } from '@/components/tools/ReportCard'

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '40px',
}

type Site = { id: string; url: string; created_at: string }
type Snapshot = { id: string; score: number; max_score: number; report: unknown; crawled_at: string }

export default function TrackerView({ site, snapshots }: { site: Site | null; snapshots: Snapshot[] }) {
  const router = useRouter()

  return (
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <Link href="/tools" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, color: 'var(--ink-mid)', textDecoration: 'none', marginBottom: 28,
      }}>
        ← AI Tools
      </Link>

      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 28, marginBottom: 8 }}>
          AI Visibility Tracker
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-mid)', lineHeight: 1.6 }}>
          We re-check your site every week and email you if your AI search score drops. A subscriber perk — no extra charge.
        </p>
      </div>

      {!site ? (
        <AddSiteForm onAdded={() => router.refresh()} />
      ) : (
        <TrackedSite site={site} snapshots={snapshots} onRemoved={() => router.refresh()} />
      )}
    </div>
  )
}

function AddSiteForm({ onAdded }: { onAdded: () => void }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim() || loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/tracker/sites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      onAdded()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={card}>
      <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 20, marginBottom: 12 }}>
        Add a site to track
      </h2>
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
          {loading ? 'Starting…' : 'Start tracking →'}
        </button>
      </form>
      {loading && (
        <p style={{ fontSize: 14, color: 'var(--ink-mid)', marginTop: 16 }}>
          Running your first check — this can take up to 20 seconds.
        </p>
      )}
      {error && <p className="error-text" style={{ marginTop: 16 }}>{error}</p>}
    </div>
  )
}

function TrackedSite({ site, snapshots, onRemoved }: { site: Site; snapshots: Snapshot[]; onRemoved: () => void }) {
  const [removing, setRemoving] = useState(false)
  const [error, setError] = useState('')
  const latest = snapshots[0]

  async function handleRemove() {
    if (removing) return
    if (!confirm(`Stop tracking ${site.url}? This deletes its score history.`)) return
    setRemoving(true)
    setError('')
    try {
      const res = await fetch(`/api/tracker/sites/${site.id}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Could not remove this site.')
        return
      }
      onRemoved()
    } catch {
      setError('Could not remove this site.')
    } finally {
      setRemoving(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {latest ? (
        <ReportCard report={latest.report as AuditReport} />
      ) : (
        <div style={card}>
          <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
            No check has completed yet for {site.url}. Check back after the next weekly run.
          </p>
        </div>
      )}

      {snapshots.length > 1 && (
        <div style={{ ...card, padding: '28px 32px' }}>
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 18, marginBottom: 16 }}>Score history</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {snapshots.map(s => (
              <li key={s.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontSize: 14, padding: '8px 0', borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ color: 'var(--ink-mid)' }}>
                  {new Date(s.crawled_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <span style={{ fontWeight: 700, color: scoreColor(s.score) }}>{s.score}/100</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ ...card, padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <p style={{ fontSize: 14, color: 'var(--ink-mid)' }}>
          Tracking <strong>{site.url}</strong> since {new Date(site.created_at).toLocaleDateString()}.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={handleRemove}
          disabled={removing}
          style={{ whiteSpace: 'nowrap', opacity: removing ? 0.6 : 1 }}
        >
          {removing ? 'Removing…' : 'Stop tracking'}
        </button>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}
