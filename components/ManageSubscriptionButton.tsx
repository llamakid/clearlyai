'use client'

import { useState } from 'react'

export default function ManageSubscriptionButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      style={{
        background: 'none',
        border: '1px solid var(--accent-lt)',
        borderRadius: 10,
        padding: '10px 20px',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--ink-mid)',
        cursor: loading ? 'default' : 'pointer',
        opacity: loading ? 0.6 : 1,
        transition: 'opacity 0.15s',
      }}
    >
      {loading ? 'Opening…' : 'Manage subscription'}
    </button>
  )
}
