'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ExplainResult {
  summary: string
  takeaways: string[]
  meaning: string
  suggestedResponse?: string
}

type Step = 'input' | 'loading' | 'result'

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '32px',
}

export default function ExplainTool({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [step, setStep] = useState<Step>('input')
  const [text, setText] = useState('')
  const [result, setResult] = useState<ExplainResult | null>(null)
  const [error, setError] = useState('')
  const [authRequired, setAuthRequired] = useState(!isLoggedIn)

  async function handleExplain() {
    if (!text.trim()) return
    if (!isLoggedIn) {
      setAuthRequired(true)
      return
    }
    setStep('loading')
    setError('')
    setAuthRequired(false)
    try {
      const res = await fetch('/api/tools/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      if (res.status === 401) {
        setAuthRequired(true)
        setStep('input')
        return
      }
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setStep('input')
        return
      }
      setResult(data)
      setStep('result')
    } catch {
      setError('Something went wrong. Please try again.')
      setStep('input')
    }
  }

  function startOver() {
    setStep('input')
    setText('')
    setResult(null)
    setError('')
    setAuthRequired(false)
  }

  return (
    <div style={{ maxWidth: 660, margin: '0 auto' }}>
      <Link href="/tools" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, color: 'var(--ink-mid)', textDecoration: 'none', marginBottom: 28,
      }}>
        ← AI Tools
      </Link>

      {/* Input */}
      {step === 'input' && (
        <div style={{ ...card, padding: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 28, marginBottom: 8 }}>Explain This To Me</h1>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)', marginBottom: authRequired ? 20 : 28, lineHeight: 1.6 }}>
            Paste any text that confuses you. I'll break it down in plain English.
          </p>
          {authRequired && <div style={{ marginBottom: 20 }}><SignInPrompt /></div>}
          <div className="form-group" style={{ marginBottom: 20 }}>
            <textarea
              rows={8}
              placeholder="Paste an email, contract, message, or anything that's confusing you…"
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ resize: 'vertical', fontSize: 15, lineHeight: 1.65 }}
            />
          </div>
          {error && <p className="error-text" style={{ marginBottom: 12 }}>{error}</p>}
          <button
            onClick={handleExplain}
            disabled={!text.trim()}
            className="btn btn-primary"
            style={{ width: '100%', opacity: !text.trim() ? 0.5 : 1 }}
          >
            Explain this to me →
          </button>
        </div>
      )}

      {/* Loading */}
      {step === 'loading' && (
        <div style={{ ...card, padding: '64px 40px', textAlign: 'center' }}>
          <div style={{
            width: 40, height: 40,
            border: '3px solid var(--accent-lt)',
            borderTopColor: 'var(--accent)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            animation: 'spin 0.8s linear infinite',
          }} />
          <p style={{ fontSize: 16, color: 'var(--ink-mid)' }}>Reading and breaking it down…</p>
        </div>
      )}

      {/* Result */}
      {step === 'result' && result && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent-dk)', marginBottom: 12 }}>
              Plain English
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink)' }}>{result.summary}</p>
          </div>

          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent-dk)', marginBottom: 14 }}>
              Key Takeaways
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {result.takeaways.map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div style={card}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent-dk)', marginBottom: 12 }}>
              What This Means For You
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink)' }}>{result.meaning}</p>
          </div>

          {result.suggestedResponse && (
            <div style={{ ...card, borderColor: 'var(--accent-lt)' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent-dk)', marginBottom: 12 }}>
                Suggested Response
              </p>
              <pre style={{
                fontFamily: 'var(--font-b)', fontSize: 14, lineHeight: 1.7,
                whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                color: 'var(--ink)', margin: 0,
              }}>
                {result.suggestedResponse}
              </pre>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: 16 }}>
            <button
              onClick={startOver}
              style={{
                padding: '10px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                border: '1.5px solid var(--border-md)',
                background: 'white', color: 'var(--ink-mid)',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Explain something else
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function SignInPrompt() {
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
      marginBottom: 12,
    }}>
      <p style={{ fontSize: 14, color: 'var(--accent-dk)', fontWeight: 500, margin: 0 }}>
        Free account needed to generate. Takes 30 seconds.
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
