import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getResend, fromAddress } from '@/lib/resend'
import { randomUUID } from 'crypto'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })
  }

  if (user.app_metadata?.email_verified === true) {
    return NextResponse.json({ error: 'Email is already verified.' }, { status: 400 })
  }

  const admin = createAdminClient()
  const verificationToken = randomUUID()

  await admin.auth.admin.updateUserById(user.id, {
    app_metadata: {
      ...user.app_metadata,
      email_verification_token: verificationToken,
      email_verification_sent_at: new Date().toISOString(),
    },
  })

  const verifyUrl = `${SITE_URL}/api/auth/verify-email?uid=${user.id}&token=${verificationToken}`

  try {
    await getResend().emails.send({
      from: fromAddress(),
      to: user.email!,
      subject: 'Verify your Clearly, AI email',
      html: verificationEmailHtml(verifyUrl),
    })
  } catch (e) {
    console.error('Resend verification email failed:', e)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
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
          Here's your new verification link for Clearly, AI. Click below to confirm your email address.
        </p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${verifyUrl}" style="background:#3d7a8a;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;display:inline-block;">
            Verify my email →
          </a>
        </div>
        <p style="color:#718096;font-size:13px;line-height:1.6;">
          Didn't request this? You can safely ignore this email.
        </p>
      </div>
    </div>
  `
}
