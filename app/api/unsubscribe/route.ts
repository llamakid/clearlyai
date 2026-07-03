import { createClient } from '@supabase/supabase-js'
import { verifyUnsubscribeToken } from '@/lib/email-drip'

// One-click unsubscribe target for drip emails.
// GET so it works from any mail client without JS.

function page(title: string, body: string, status = 200): Response {
  return new Response(
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>${title} — Clearly, AI</title>
</head>
<body style="margin:0;background:#f5f3ee;font-family:Inter,Helvetica,Arial,sans-serif;color:#1c2b35;">
  <div style="max-width:480px;margin:12vh auto 0;padding:40px 32px;background:#ffffff;border:1px solid #e5e2da;border-radius:20px;text-align:center;">
    <h1 style="font-family:Georgia,serif;color:#3d7a8a;font-size:28px;margin:0 0 12px;">${title}</h1>
    <p style="font-size:16px;line-height:1.65;color:#4a5a64;margin:0 0 24px;">${body}</p>
    <a href="https://learnaiclearly.com" style="color:#3d7a8a;font-weight:600;font-size:14px;">← Back to Clearly, AI</a>
  </div>
</body>
</html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const email = url.searchParams.get('email')?.trim().toLowerCase()
  const token = url.searchParams.get('token') ?? ''

  if (!email || !token || !verifyUnsubscribeToken(email, token)) {
    return page(
      'That link didn’t work',
      'This unsubscribe link looks incomplete or expired. Reply to any of our emails and we’ll take you off the list by hand.',
      400
    )
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // The subscribers table doubles as the opt-out list for the whole drip
  // audience (auth users included). ilike: stored emails may be mixed-case,
  // the token pipeline lowercases. If no row exists (auth-only user), insert
  // one so the drip skips them.
  const { data: updated, error } = await supabase
    .from('subscribers')
    .update({ unsubscribed: true })
    .ilike('email', email)
    .select('id')

  let insertError = null
  if (!error && (!updated || updated.length === 0)) {
    const { error: insErr } = await supabase
      .from('subscribers')
      .insert({ email, source: 'unsubscribe', unsubscribed: true })
    insertError = insErr
  }

  if (error || insertError) {
    console.error('Unsubscribe error:', error ?? insertError)
    return page(
      'Something went wrong',
      'We couldn’t process that just now. Reply to any of our emails and we’ll take you off the list by hand.',
      500
    )
  }

  return page(
    'You’re unsubscribed',
    'No more emails from us. If you change your mind, you can always rejoin from the homepage. Thanks for giving us a look.'
  )
}
