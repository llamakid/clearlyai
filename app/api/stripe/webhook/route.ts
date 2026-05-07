import { getStripe } from '@/lib/stripe'
import { getResend, fromAddress } from '@/lib/resend'
import { apiError } from '@/lib/api-error'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import type Stripe from 'stripe'

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  const stripe = getStripe()

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return apiError('Invalid signature', 400)
  }

  const supabaseAdmin = getSupabaseAdmin()

  // ── One-time payment OR initial subscription checkout ──────────────────────
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const userId = session.metadata?.userId
    const planType = session.metadata?.planType

    if (!userId || !planType) {
      console.error('Missing metadata in checkout session')
      return apiError('Missing metadata', 400)
    }

    const isSubscription = session.mode === 'subscription'
    const subscriptionId = isSubscription
      ? (typeof session.subscription === 'string' ? session.subscription : session.subscription?.id ?? null)
      : null

    const { error } = await supabaseAdmin
      .from('purchases')
      .upsert({
        user_id: userId,
        stripe_session_id: session.id,
        stripe_subscription_id: subscriptionId,
        plan_type: planType,
        subscription_status: isSubscription ? 'active' : null,
        amount_paid: session.amount_total,
        currency: session.currency,
        purchased_at: new Date().toISOString(),
      }, { onConflict: 'stripe_session_id' })

    if (error) {
      console.error('Supabase upsert error:', error)
      return apiError('DB error')
    }

    const customerEmail = session.customer_details?.email
    if (customerEmail) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://learnaiclearly.com'
      try {
        await getResend().emails.send({
          from: fromAddress(),
          to: customerEmail,
          subject: 'Welcome to Clearly, AI — you\'re in!',
          html: `
            <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;color:#1c2b35;">
              <h1 style="font-family:'DM Serif Display',Georgia,serif;color:#3d7a8a;font-size:28px;margin-bottom:8px;">
                You're in. Let's get started.
              </h1>
              <p style="font-size:16px;line-height:1.6;">
                Thanks for joining <strong>Clearly, AI</strong>. Your course access is ready — six modules,
                plain English, no jargon.
              </p>
              <p style="margin:24px 0;">
                <a href="${siteUrl}/dashboard"
                   style="background:#3d7a8a;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">
                  Go to your dashboard →
                </a>
              </p>
              <p style="font-size:14px;color:#666;line-height:1.6;">
                Questions? Just reply to this email — it goes straight to me.<br>
                — Nate
              </p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Welcome email failed:', emailErr)
      }
    }
  }

  // ── Subscription status changes (renewal failures, cancellations, etc.) ────
  if (
    event.type === 'customer.subscription.updated' ||
    event.type === 'customer.subscription.deleted'
  ) {
    const subscription = event.data.object as Stripe.Subscription

    const { error } = await supabaseAdmin
      .from('purchases')
      .update({ subscription_status: subscription.status })
      .eq('stripe_subscription_id', subscription.id)

    if (error) {
      console.error('Supabase subscription update error:', error)
      return apiError('DB error')
    }
  }

  return NextResponse.json({ received: true })
}
