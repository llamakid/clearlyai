import { NextResponse } from 'next/server'
import { getResend, fromAddress } from '@/lib/resend'

// Temporary diagnostic endpoint — remove after debugging
export async function GET() {
  const keySet = !!process.env.RESEND_API_KEY
  const keyPrefix = process.env.RESEND_API_KEY?.slice(0, 6) ?? 'missing'
  const fromAddr = fromAddress()

  if (!keySet) {
    return NextResponse.json({ ok: false, error: 'RESEND_API_KEY is not set' })
  }

  try {
    const { data, error } = await getResend().emails.send({
      from: fromAddr,
      to: process.env.RESEND_FROM_EMAIL ?? 'nate.guy@reusser.com',
      subject: '[Debug] Resend connection test',
      html: '<p>If you see this, Resend is wired up correctly.</p>',
    })

    if (error) {
      return NextResponse.json({ ok: false, keyPrefix, fromAddr, error })
    }

    return NextResponse.json({ ok: true, keyPrefix, fromAddr, emailId: data?.id })
  } catch (e) {
    return NextResponse.json({ ok: false, keyPrefix, fromAddr, threw: String(e) })
  }
}
