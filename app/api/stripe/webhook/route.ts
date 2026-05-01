import { getStripe } from '@/lib/stripe'
import { apiError } from '@/lib/api-error'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import type Stripe from 'stripe'

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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const userId = session.metadata?.userId
    if (!userId) {
      console.error('No userId in Stripe metadata')
      return apiError('No userId', 400)
    }

    // Service role key bypasses RLS — webhook has no user session
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabaseAdmin
      .from('purchases')
      .upsert({
        user_id: userId,
        stripe_session_id: session.id,
        amount_paid: session.amount_total,
        currency: session.currency,
        purchased_at: new Date().toISOString(),
      })

    if (error) {
      console.error('Supabase upsert error:', error)
      return apiError('DB error')
    }
  }

  return NextResponse.json({ received: true })
}
