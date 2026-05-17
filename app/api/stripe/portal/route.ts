import { getStripe } from '@/lib/stripe'
import { apiError } from '@/lib/api-error'
import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return apiError('Unauthorized', 401)

    const { data: purchase } = await supabase
      .from('purchases')
      .select('stripe_customer_id, stripe_subscription_id, plan_type')
      .eq('user_id', user.id)
      .neq('plan_type', 'forever')
      .order('purchased_at', { ascending: false })
      .limit(1)
      .single()

    if (!purchase) return apiError('No active subscription found', 404)

    const stripe = getStripe()
    let customerId = purchase.stripe_customer_id

    // Fallback for existing subscribers who predate the customer_id column
    if (!customerId && purchase.stripe_subscription_id) {
      const sub = await stripe.subscriptions.retrieve(purchase.stripe_subscription_id)
      customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id

      // Backfill so we don't need to look it up again
      const admin = createAdminClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      )
      await admin
        .from('purchases')
        .update({ stripe_customer_id: customerId })
        .eq('stripe_subscription_id', purchase.stripe_subscription_id)
    }

    if (!customerId) return apiError('Could not resolve Stripe customer', 500)

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://learnaiclearly.com'
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${siteUrl}/dashboard`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (err) {
    console.error('Stripe portal error:', err)
    return apiError('Failed to open billing portal')
  }
}
