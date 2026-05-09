import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Server-side layout: checks auth + purchase before rendering any protected page
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Dev bypass: skip auth/purchase checks when SKIP_AUTH=true (never in production)
  if (process.env.NODE_ENV !== 'production' && process.env.SKIP_AUTH === 'true') {
    return <>{children}</>
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Forever plans: any row with plan_type='forever'
  // Subscription plans: any row with subscription_status='active' or 'past_due'
  const { data: purchases } = await supabase
    .from('purchases')
    .select('plan_type, subscription_status')
    .eq('user_id', user.id)

  const hasAccess = purchases?.some(
    (p) =>
      p.plan_type === 'forever' ||
      p.subscription_status === 'active' ||
      p.subscription_status === 'past_due'
  )

  if (!hasAccess) {
    redirect('/pricing')
  }

  return <>{children}</>
}
