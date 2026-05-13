import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  supabase
    .from('downloads')
    .insert({
      asset: 'starter-kit',
      user_agent: request.headers.get('user-agent'),
      referrer: request.headers.get('referer'),
    })
    .then(() => {})
    .catch(console.error)

  return NextResponse.redirect(new URL('/Clearly_AI_Starter_Kit.pdf', request.url))
}
