import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Server-side layout: checks auth + purchase before rendering any protected page
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Dev bypass: skip auth/purchase checks when SKIP_AUTH=true
  if (process.env.SKIP_AUTH === 'true') {
    return <>{children}</>
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check if user has a purchase record
  const { data: purchase } = await supabase
    .from('purchases')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (!purchase) {
    redirect('/pricing')
  }

  return <>{children}</>
}
