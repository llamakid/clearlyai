import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Hours after signup before unverified accounts lose access
const VERIFICATION_GRACE_HOURS = 72

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.NODE_ENV !== 'production' && process.env.SKIP_AUTH === 'true') {
    return <>{children}</>
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // email_verified is only set for accounts created via the new signup flow.
  // Accounts created before the new flow (undefined) are treated as verified.
  const emailVerified = user.app_metadata?.email_verified !== false
  if (!emailVerified) {
    const hoursSinceSignup =
      (Date.now() - new Date(user.created_at).getTime()) / 3_600_000
    if (hoursSinceSignup >= VERIFICATION_GRACE_HOURS) {
      redirect('/verify-required')
    }
  }

  return <>{children}</>
}
