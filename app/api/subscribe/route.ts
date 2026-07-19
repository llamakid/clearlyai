import { createClient } from '@supabase/supabase-js'
import { getResend, fromAddress } from '@/lib/resend'
import { apiError } from '@/lib/api-error'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const schema = z.object({
  email: z.string().email('Invalid email'),
  firstName: z.string().trim().max(80).optional(),
  source: z.enum(['starter-kit', 'free-course', 'blog-tools']).optional(),
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

    // 'blog-tools' captures share the Starter Kit deliverable + email, but keep
    // their own stored source so blog conversions can be measured separately.
    const isStarterKit = parsed.data.source === 'starter-kit' || parsed.data.source === 'blog-tools'
    const firstName = parsed.data.firstName || undefined

    const { data: existing } = await supabase
      .from('subscribers')
      .select('email, first_name')
      .eq('email', parsed.data.email)
      .maybeSingle()

    // A returning subscriber who gives a name this time gets it saved
    if (existing && !existing.first_name && firstName) {
      await supabase
        .from('subscribers')
        .update({ first_name: firstName })
        .eq('email', parsed.data.email)
    }

    // Existing newsletter subscribers requesting the starter kit still get the kit email
    if (existing && !isStarterKit) {
      return NextResponse.json({ ok: true })
    }

    if (!existing) {
      const { error } = await supabase
        .from('subscribers')
        .insert({
          email: parsed.data.email,
          first_name: firstName ?? null,
          source: parsed.data.source ?? 'newsletter',
        })

      if (error) {
        console.error('Subscribe error:', error)
        return apiError('Could not save email')
      }
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learnaiclearly.com'
    const safeName = firstName
      ? firstName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      : undefined
    const starterKitEmail = {
      subject: 'Your AI Starter Kit — Clearly, AI',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
          <h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:26px;margin-bottom:8px;">
            Here's your AI Starter Kit.
          </h1>
          <p style="font-size:16px;line-height:1.6;">
            ${safeName ? `Hi ${safeName} — thanks` : 'Thanks'} for grabbing the <strong>Clearly, AI Starter Kit</strong> — practical things
            you can do with AI today, each with a prompt you can copy and use right away.
          </p>
          <p style="margin:24px 0;">
            <a href="${siteUrl}/api/download/starter-kit"
               style="background:#3d7a8a;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:10px;font-size:15px;font-weight:700;display:inline-block;">
              Download the Starter Kit
            </a>
          </p>
          <p style="font-size:16px;line-height:1.6;">
            When you're ready for more, the free course
            <a href="${siteUrl}/signup" style="color:#3d7a8a;font-weight:600;">"10 Things You Can Do With AI Today"</a>
            walks through everything step by step — no credit card needed.
          </p>
          <p style="font-size:14px;color:#666;line-height:1.6;">
            — Nate
          </p>
        </div>
      `,
    }
    const newsletterEmail = {
      subject: 'You\'re on the list — Clearly, AI',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
          <h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:26px;margin-bottom:8px;">
            Got it — you're on the list.
          </h1>
          <p style="font-size:16px;line-height:1.6;">
            ${safeName ? `Hi ${safeName} — thanks` : 'Thanks'} for joining the <strong>Clearly, AI</strong> newsletter. We'll be sending practical AI tips
            straight to your inbox — no jargon, no fluff, just things you can actually use.
          </p>
          <p style="font-size:14px;color:#666;line-height:1.6;">
            — Nate
          </p>
        </div>
      `,
    }
    const freeCourseEmail = {
      subject: 'You finished the free course — here\'s what\'s next',
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
          <h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:26px;margin-bottom:8px;">
            Nice work finishing the free course.
          </h1>
          <p style="font-size:16px;line-height:1.6;">
            ${safeName ? `${safeName}, you` : 'You'} just learned 10 things most people don't know how to do with AI. All ten prompts
            are yours to reuse any time — just revisit
            <a href="${siteUrl}/course/0" style="color:#3d7a8a;font-weight:600;">the course</a>.
          </p>
          <p style="font-size:16px;line-height:1.6;">
            When you're ready to go deeper, the full curriculum has eight courses — 240 plain-English
            lessons on using AI at work, in your business, and in everyday life. And it's all free:
            a free account unlocks everything.
          </p>
          <p style="margin:24px 0;">
            <a href="${siteUrl}/signup"
               style="background:#3d7a8a;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:10px;font-size:15px;font-weight:700;display:inline-block;">
              Create your free account
            </a>
          </p>
          <p style="font-size:14px;color:#666;line-height:1.6;">
            — Nate
          </p>
        </div>
      `,
    }
    const emailContent = isStarterKit
      ? starterKitEmail
      : parsed.data.source === 'free-course'
        ? freeCourseEmail
        : newsletterEmail

    try {
      await getResend().emails.send({
        from: fromAddress(),
        to: parsed.data.email,
        subject: emailContent.subject,
        html: emailContent.html,
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
