import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// Handles Supabase email confirmation redirect
export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const raw = url.searchParams.get('next') || '/dashboard'
  const next = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/dashboard'

  if (code) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(next, request.url))
}
