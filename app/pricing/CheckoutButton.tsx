'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Not logged in — send to signup first, then come back to pricing
    if (!user) {
      router.push('/signup?redirectTo=/pricing')
      return
    }

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, email: user.email }),
    })

    const { url, error } = await res.json()

    if (error) {
      alert('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    window.location.href = url
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="btn btn-primary"
      style={{ width: '100%', fontSize: 16, padding: '16px' }}
    >
      {loading ? 'Redirecting to checkout…' : 'Get instant access — $97'}
    </button>
  )
}
