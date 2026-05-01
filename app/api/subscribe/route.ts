import { createClient } from '@supabase/supabase-js'
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

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return apiError('Something went wrong')
  }
}
