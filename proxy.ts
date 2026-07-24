import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest, type NextFetchEvent } from 'next/server'

export async function proxy(request: NextRequest, _event: NextFetchEvent) {
  // Dev-only bypass — never runs in production
  if (process.env.NODE_ENV !== 'production' && process.env.SKIP_AUTH === 'true') {
    return NextResponse.next({ request })
  }

  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session — required for Server Components to pick up auth state.
  // Wrapped in try/catch so a Supabase connectivity blip never kills a page load.
  let user = null
  try {
    const { data } = await supabase.auth.getUser()
    user = data.user
  } catch {
    return supabaseResponse
  }

  const { pathname } = request.nextUrl

  // Protected routes: /dashboard and the module player /course/<id> — except
  // /course/0, the free starter, which is open to logged-out visitors.
  // NOTE: matches '/course/' (with the slash) so the PUBLIC course overview
  // pages at '/courses/<slug>' are NOT gated — they're crawlable landing pages.
  const isProtected =
    (pathname.startsWith('/dashboard') || pathname.startsWith('/course/')) &&
    pathname !== '/course/0'

  if (isProtected && !user) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/login'
    loginUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect logged-in users away from auth pages
  if (user && (pathname === '/login' || pathname === '/signup')) {
    const dashboardUrl = request.nextUrl.clone()
    dashboardUrl.pathname = '/dashboard'
    return NextResponse.redirect(dashboardUrl)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
