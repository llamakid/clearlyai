'use client'

import { useState } from 'react'
import Link from 'next/link'

type WriteType = 'email' | 'social' | 'text'
type Tone = 'friendly' | 'professional' | 'casual'
type Step = 'type' | 'details' | 'loading' | 'result'

const TYPES = [
  { id: 'email' as WriteType, icon: '✉️', label: 'Email', desc: 'Professional or personal' },
  { id: 'social' as WriteType, icon: '📱', label: 'Social Post', desc: 'LinkedIn, Facebook, or X' },
  { id: 'text' as WriteType, icon: '💬', label: 'Text Message', desc: 'Short and to the point' },
]

const TONES: { id: Tone; label: string }[] = [
  { id: 'friendly', label: 'Friendly' },
  { id: 'professional', label: 'Professional' },
  { id: 'casual', label: 'Casual' },
]

const REFINE_ACTIONS = ['Make it shorter', 'Make it friendlier', 'Make it more professional']

const PLACEHOLDERS: Record<WriteType, { about: string; forWho: string }> = {
  email: {
    about: 'e.g. Following up on a job application I sent last week',
    forWho: 'e.g. A recruiter at a tech company',
  },
  social: {
    about: 'e.g. Announcing that I just started a new business',
    forWho: 'e.g. Small business owners and my network',
  },
  text: {
    about: "e.g. Letting my sister know I'll be 20 minutes late to dinner",
    forWho: 'e.g. My sister',
  },
}

const card: React.CSSProperties = {
  background: 'white',
  borderRadius: 20,
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-sm)',
  padding: '40px',
  maxWidth: 580,
  margin: '0 auto',
}

export default function WriteTool({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [step, setStep] = useState<Step>('type')
  const [writeType, setWriteType] = useState<WriteType | null>(null)
  const [about, setAbout] = useState('')
  const [forWho, setForWho] = useState('')
  const [tone, setTone] = useState<Tone>('friendly')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [authRequired, setAuthRequired] = useState(false)
  const [authMessage, setAuthMessage] = useState('')
  const [copied, setCopied] = useState(false)

  async function generate(refine?: string) {
    const prevResult = result
    setStep('loading')
    setError('')
    setAuthRequired(false)
    try {
      const res = await fetch('/api/tools/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: writeType, about, forWho, tone, refine }),
      })
      const data = await res.json()
      if (res.status === 401) {
        setAuthRequired(true)
        setAuthMessage(data.error || '')
        setStep(prevResult ? 'result' : 'details')
        return
      }
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setStep(prevResult ? 'result' : 'details')
        return
      }
      setResult(data.result)
      setStep('result')
    } catch {
      setError('Something went wrong. Please try again.')
      setStep(prevResult ? 'result' : 'details')
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function startOver() {
    setStep('type')
    setWriteType(null)
    setAbout('')
    setForWho('')
    setTone('friendly')
    setResult('')
    setError('')
    setAuthRequired(false)
    setAuthMessage('')
    setCopied(false)
  }

  const ph = writeType ? PLACEHOLDERS[writeType] : PLACEHOLDERS.email

  return (
    <div style={{ maxWidth: 580, margin: '0 auto' }}>
      <Link href="/tools" style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, color: 'var(--ink-mid)', textDecoration: 'none', marginBottom: 28,
      }}>
        ← AI Tools
      </Link>

      {/* Step 1: Type */}
      {step === 'type' && (
        <div style={card}>
          <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 28, marginBottom: 8 }}>Write This For Me</h1>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)', marginBottom: authRequired ? 20 : 28 }}>What are you writing today?</p>
          {authRequired && <div style={{ marginBottom: 20 }}><SignInPrompt message={authMessage} /></div>}
          {!isLoggedIn && !authRequired && (
            <p style={{ fontSize: 13, color: 'var(--accent-dk)', fontWeight: 600, marginTop: -16, marginBottom: 20 }}>
              ✓ Try it free — no account needed
            </p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TYPES.map(t => (
              <button
                key={t.id}
                onClick={() => { setWriteType(t.id); setStep('details') }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '18px 20px', borderRadius: 12,
                  border: '1.5px solid var(--border-md)',
                  background: 'white', cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.15s', fontFamily: 'inherit',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'var(--accent-xl)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-md)'
                  e.currentTarget.style.background = 'white'
                }}
              >
                <span style={{ fontSize: 28, lineHeight: 1 }}>{t.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>{t.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-mid)' }}>{t.desc}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: 16 }}>→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 'details' && (
        <div style={card}>
          <button
            onClick={() => setStep('type')}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: 'var(--ink-mid)', marginBottom: 20,
              padding: 0, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4,
            }}
          >
            ← Change type
          </button>
          <h1 style={{ fontFamily: 'var(--font-h)', fontSize: 28, marginBottom: 6 }}>Tell me about it</h1>
          <p style={{ fontSize: 15, color: 'var(--ink-mid)', marginBottom: authRequired ? 20 : 28 }}>
            A few quick questions and I'll write it for you.
          </p>
          {authRequired && <div style={{ marginBottom: 20 }}><SignInPrompt message={authMessage} /></div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div className="form-group">
              <label htmlFor="about">What is it about?</label>
              <textarea
                id="about"
                rows={3}
                placeholder={ph.about}
                value={about}
                onChange={e => setAbout(e.target.value)}
                style={{ resize: 'vertical' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="forWho">
                Who is it for?{' '}
                <span style={{ fontWeight: 400, color: 'var(--ink-lt)' }}>(optional)</span>
              </label>
              <input
                id="forWho"
                type="text"
                placeholder={ph.forWho}
                value={forWho}
                onChange={e => setForWho(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>What tone?</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {TONES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    style={{
                      padding: '8px 18px', borderRadius: 8,
                      border: '1.5px solid',
                      borderColor: tone === t.id ? 'var(--accent)' : 'var(--border-md)',
                      background: tone === t.id ? 'var(--accent-lt)' : 'white',
                      color: tone === t.id ? 'var(--accent-dk)' : 'var(--ink-mid)',
                      fontWeight: tone === t.id ? 600 : 400,
                      fontSize: 14, cursor: 'pointer',
                      transition: 'all 0.1s', fontFamily: 'inherit',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            {error && <p className="error-text">{error}</p>}
            <button
              onClick={() => generate()}
              disabled={!about.trim()}
              className="btn btn-primary"
              style={{ opacity: !about.trim() ? 0.5 : 1 }}
            >
              Write this for me →
            </button>
          </div>
        </div>
      )}

      {/* Loading */}
      {step === 'loading' && (
        <div style={{ ...card, textAlign: 'center', padding: '64px 40px' }}>
          <div style={{
            width: 40, height: 40,
            border: '3px solid var(--accent-lt)',
            borderTopColor: 'var(--accent)',
            borderRadius: '50%',
            margin: '0 auto 20px',
            animation: 'spin 0.8s linear infinite',
          }} />
          <p style={{ fontSize: 16, color: 'var(--ink-mid)' }}>Writing this for you…</p>
        </div>
      )}

      {/* Result */}
      {step === 'result' && (
        <div style={{ ...card, padding: '36px 40px' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 10,
          }}>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 22 }}>Here you go</h2>
            <button
              onClick={handleCopy}
              style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                border: '1.5px solid var(--border-md)',
                background: copied ? 'var(--accent-lt)' : 'white',
                color: copied ? 'var(--accent-dk)' : 'var(--ink-mid)',
                cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
              }}
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          <pre style={{
            fontFamily: 'var(--font-b)', fontSize: 15, lineHeight: 1.7,
            whiteSpace: 'pre-wrap', wordBreak: 'break-word',
            background: 'var(--bg)', padding: '20px', borderRadius: 12,
            border: '1px solid var(--border)', color: 'var(--ink)',
            marginBottom: 24,
          }}>
            {result}
          </pre>
          {error && <p className="error-text" style={{ marginBottom: 16 }}>{error}</p>}
          {authRequired && <div style={{ marginBottom: 16 }}><SignInPrompt message={authMessage} /></div>}
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-mid)', marginBottom: 10 }}>
              Adjust it:
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {REFINE_ACTIONS.map(action => (
                <button
                  key={action}
                  onClick={() => generate(action)}
                  style={{
                    padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 500,
                    border: '1.5px solid var(--border-md)',
                    background: 'white', color: 'var(--ink-mid)',
                    cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-md)'
                    e.currentTarget.style.color = 'var(--ink-mid)'
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <button
              onClick={startOver}
              style={{
                padding: '10px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                border: '1.5px solid var(--border-md)',
                background: 'white', color: 'var(--ink-mid)',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Write something else
            </button>
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
