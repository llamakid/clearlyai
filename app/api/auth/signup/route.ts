import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getResend, fromAddress } from '@/lib/resend'
import { randomUUID } from 'crypto'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export async function POST(request: Request) {
  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { email, password } = body
  if (!email || !password || password.length < 8) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 400 })
  }

  const admin = createAdminClient()
  const verificationToken = randomUUID()

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // mark as confirmed so signInWithPassword works immediately; app tracks verification separately
    app_metadata: {
      email_verified: false,
      email_verification_token: verificationToken,
      email_verification_sent_at: new Date().toISOString(),
    },
  })

  if (error) {
    const msg = error.message.toLowerCase().includes('already')
      ? 'An account with that email already exists.'
      : error.message
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  const verifyUrl = `${SITE_URL}/api/auth/verify-email?uid=${data.user.id}&token=${verificationToken}`

  // Fire-and-forget — never block account creation on email delivery
  try {
    const { data: emailData, error: emailError } = await getResend().emails.send({
      from: fromAddress(),
      to: email,
      subject: 'Verify your Clearly, AI email',
      html: verificationEmailHtml(verifyUrl),
    })
    if (emailError) {
      console.error('[signup] Resend error:', JSON.stringify(emailError))
    }
  } catch (e) {
    console.error('[signup] Verification email threw:', e)
  }

  return NextResponse.json({ ok: true })
}

function verificationEmailHtml(verifyUrl: string) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:520px;margin:0 auto;background:#f5f3ee;padding:40px 24px;">
      <div style="text-align:center;margin-bottom:32px;">
        <span style="font-family:Georgia,serif;font-size:26px;color:#1c2b35;">
          Clearly,&nbsp;<span style="color:#3d7a8a;">AI</span>
        </span>
      </div>
      <div style="background:#fff;border-radius:16px;padding:36px;border:1px solid #e5e2da;">
        <h2 style="font-family:Georgia,serif;font-size:22px;color:#1c2b35;margin-top:0;">
          Verify your email address
        </h2>
        <p style="color:#4a5568;font-size:15px;line-height:1.6;">
          Thanks for joining Clearly, AI! Click the button below to verify your email.
          Your account is already active — this just confirms your address.
        </p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${verifyUrl}" style="background:#3d7a8a;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;display:inline-block;">
            Verify my email →
          </a>
        </div>
        <p style="color:#718096;font-size:13px;line-height:1.6;">
          Didn't create this account? You can safely ignore this email.
        </p>
      </div>
    </div>
  `
}
