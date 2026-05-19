import { createAdminClient } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const uid = searchParams.get('uid')
  const token = searchParams.get('token')
  const origin = new URL(request.url).origin

  if (!uid || !token) {
    return NextResponse.redirect(`${origin}/dashboard?verify_error=1`)
  }

  const admin = createAdminClient()
  const { data: { user }, error } = await admin.auth.admin.getUserById(uid)

  if (error || !user) {
    return NextResponse.redirect(`${origin}/dashboard?verify_error=1`)
  }

  const storedToken = user.app_metadata?.email_verification_token
  if (!storedToken || storedToken !== token) {
    return NextResponse.redirect(`${origin}/dashboard?verify_error=1`)
  }

  // Mark as verified — merge into existing app_metadata
  await admin.auth.admin.updateUserById(uid, {
    app_metadata: {
      ...user.app_metadata,
      email_verified: true,
      email_verification_token: null,
    },
  })

  return NextResponse.redirect(`${origin}/dashboard?verified=1`)
}
