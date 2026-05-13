import { createClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { getResend, fromAddress } from '@/lib/resend'
import { apiError } from '@/lib/api-error'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const schema = z.object({
  module_id:  z.number().int().min(0).max(6),
  stars:      z.number().int().min(1).max(5).nullable().optional(),
  recommend:  z.enum(['yes', 'maybe', 'no']).nullable().optional(),
  helpful:    z.string().max(2000).optional(),
  confusing:  z.string().max(2000).optional(),
  change:     z.string().max(2000).optional(),
  testimonial:z.string().max(2000).optional(),
  name:       z.string().max(200).optional(),
  email:      z.string().email().optional().or(z.literal('')),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 400)
    }

    // Get the current user's ID if logged in (non-blocking — feedback still saves without it)
    let userId: string | null = null
    try {
      const userClient = await createServerClient()
      const { data: { user } } = await userClient.auth.getUser()
      userId = user?.id ?? null
    } catch {}

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('feedback').insert({
      user_id:    userId,
      module_id:  parsed.data.module_id,
      stars:      parsed.data.stars ?? null,
      recommend:  parsed.data.recommend ?? null,
      helpful:    parsed.data.helpful || null,
      confusing:  parsed.data.confusing || null,
      change:     parsed.data.change || null,
      testimonial:parsed.data.testimonial || null,
      name:       parsed.data.name || null,
      email:      parsed.data.email || null,
    })

    if (error) {
      console.error('Feedback insert error:', error)
      return apiError('Could not save feedback')
    }

    // Notify Nate — fire and forget, never block the user response
    notifyNate(parsed.data).catch(err => console.error('Feedback notification failed:', err))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Feedback error:', err)
    return apiError('Something went wrong')
  }
}

async function notifyNate(data: z.infer<typeof schema>) {
  const stars = data.stars ? '⭐'.repeat(data.stars) : 'No rating'
  const recommend = { yes: 'Yes, definitely', maybe: 'Probably', no: 'Not yet', undefined: '—' }[data.recommend ?? 'undefined']
  const row = (label: string, value?: string | null) =>
    value ? `<tr><td style="padding:6px 0;font-weight:600;color:#1c2b35;width:140px;vertical-align:top">${label}</td><td style="padding:6px 0;color:#4a5568;line-height:1.5">${value}</td></tr>` : ''

  await getResend().emails.send({
    from: fromAddress(),
    to: 'nate.guy@reusser.com',
    subject: `Module ${data.module_id} feedback — ${stars}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
        <h2 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:22px;margin-bottom:4px;">
          New feedback — Module ${data.module_id}
        </h2>
        <p style="font-size:13px;color:#888;margin-top:0;margin-bottom:20px;">Saved to Supabase → feedback table</p>
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          ${row('Rating', stars)}
          ${row('Recommend?', recommend)}
          ${row('Most helpful', data.helpful)}
          ${row('Confusing', data.confusing)}
          ${row('Would change', data.change)}
          ${row('Testimonial', data.testimonial)}
          ${row('Name', data.name)}
          ${row('Email', data.email)}
        </table>
      </div>
    `,
  })
}
