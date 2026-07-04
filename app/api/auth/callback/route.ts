import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Handles Supabase auth redirects: email confirmation + OAuth (Google)
export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const raw = url.searchParams.get('next') || '/dashboard'
  const next = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { data } = await supabase.auth.exchangeCodeForSession(code)

    // OAuth providers put the name in given_name/full_name — copy it to
    // first_name, which the drip + greeting logic reads. Password signups
    // already set first_name, so this only fires for new OAuth users.
    const meta = data?.user?.user_metadata
    if (meta && !meta.first_name) {
      const derived =
        (typeof meta.given_name === 'string' && meta.given_name.trim()) ||
        (typeof meta.full_name === 'string' && meta.full_name.trim().split(/\s+/)[0]) ||
        (typeof meta.name === 'string' && meta.name.trim().split(/\s+/)[0]) ||
        ''
      if (derived) {
        await supabase.auth.updateUser({ data: { first_name: derived.slice(0, 80) } })
      }
    }
  }

  return NextResponse.redirect(new URL(next, request.url))
}
