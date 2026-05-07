'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type PlanType = 'monthly' | 'yearly' | 'forever'

export default function CheckoutButton({ planType, label }: { planType: PlanType; label: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/signup?redirectTo=/pricing')
      return
    }

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, email: user.email, planType }),
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
      style={{ width: '100%', fontSize: 15, padding: '14px' }}
    >
      {loading ? 'Redirecting to checkout…' : label}
    </button>
  )
}
