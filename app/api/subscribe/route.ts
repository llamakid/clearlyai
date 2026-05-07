import { createClient } from '@supabase/supabase-js'
import { getResend, fromAddress } from '@/lib/resend'
import { apiError } from '@/lib/api-error'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const schema = z.object({
  email: z.string().email('Invalid email'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 400)
    }

    // Service role to bypass RLS on public insert
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase
      .from('subscribers')
      .upsert({ email: parsed.data.email }, { onConflict: 'email' })

    if (error) {
      console.error('Subscribe error:', error)
      return apiError('Could not save email')
    }

    try {
      await getResend().emails.send({
        from: fromAddress(),
        to: parsed.data.email,
        subject: 'You\'re on the list — Clearly, AI',
        html: `
          <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
            <h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:26px;margin-bottom:8px;">
              Got it — you're on the list.
            </h1>
            <p style="font-size:16px;line-height:1.6;">
              Thanks for signing up for <strong>Clearly, AI</strong>. I'll be in touch when the course opens —
              no spam, no fluff, just the good stuff.
            </p>
            <p style="font-size:14px;color:#666;line-height:1.6;">
              — Nate
            </p>
          </div>
        `,
      })
    } catch (emailErr) {
      // Don't fail the signup if email fails — subscriber is already saved
      console.error('Confirmation email failed:', emailErr)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return apiError('Something went wrong')
  }
}
