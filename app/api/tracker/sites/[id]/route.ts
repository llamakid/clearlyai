import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Please sign in.' }, { status: 401 })

  // RLS scopes the delete to rows owned by this user — no separate ownership
  // check needed, but confirm a row actually existed for a clean 404.
  const { data, error } = await supabase
    .from('tracked_sites')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)
    .select('id')
    .maybeSingle()

  if (error) {
    console.error('Tracker: could not remove tracked site', error)
    return NextResponse.json({ error: 'Could not remove the tracked site.' }, { status: 500 })
  }
  if (!data) return NextResponse.json({ error: 'Site not found.' }, { status: 404 })

  return NextResponse.json({ ok: true })
}
