'use client'

import { useTransition, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type PlanType = 'monthly' | 'yearly' | 'forever'

export default function CheckoutButton({ planType, label }: { planType: PlanType; label: string }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleCheckout = () => {
    setError(null)
    startTransition(async () => {
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
        setError('Something went wrong. Please try again.')
        return
      }

      window.location.href = url
    })
  }

  return (
    <div>
      <button
        onClick={handleCheckout}
        disabled={isPending}
        className="btn btn-primary"
        style={{ width: '100%', fontSize: 15, padding: '14px' }}
      >
        {isPending ? 'Redirecting to checkout…' : label}
      </button>
      {error && (
        <p style={{ color: '#c0392b', fontSize: 13, marginTop: 8, textAlign: 'center', margin: '8px 0 0' }}>
          {error}
        </p>
      )}
    </div>
  )
}
