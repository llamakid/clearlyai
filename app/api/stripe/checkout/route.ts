import { getStripe } from '@/lib/stripe'
import { apiError } from '@/lib/api-error'
import { checkoutSchema } from '@/lib/schemas'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = checkoutSchema.safeParse(body)

    if (!parsed.success) {
      return apiError(parsed.error.issues[0].message, 400)
    }

    const { userId, email } = parsed.data
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?welcome=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return apiError('Failed to create checkout session')
  }
}
