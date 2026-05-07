import { getStripe } from '@/lib/stripe'
import { apiError } from '@/lib/api-error'
import { checkoutSchema } from '@/lib/schemas'
import { NextResponse } from 'next/server'

const PRICE_IDS: Record<string, string | undefined> = {
  monthly: process.env.STRIPE_PRICE_ID_MONTHLY,
  yearly: process.env.STRIPE_PRICE_ID_YEARLY,
  forever: process.env.STRIPE_PRICE_ID_FOREVER,
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = checkoutSchema.safeParse(body)

    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 400)
    }

    const { userId, email, planType } = parsed.data
    const priceId = PRICE_IDS[planType]

    if (!priceId) {
      return apiError(`No Stripe price configured for plan: ${planType}`, 500)
    }

    const stripe = getStripe()
    const isSubscription = planType !== 'forever'

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, planType },
      ...(isSubscription && {
        subscription_data: { metadata: { userId, planType } },
      }),
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?welcome=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return apiError('Failed to create checkout session')
  }
}
