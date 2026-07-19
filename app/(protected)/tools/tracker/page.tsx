import { createClient as createServiceClient } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TrackerView from '@/components/tools/TrackerView'

export const metadata = {
  title: 'AI Visibility Tracker — Clearly, AI',
  description: 'Weekly AI search score tracking for your website, with an alert if your score drops.',
}

export default async function TrackerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: site } = await supabase
    .from('tracked_sites')
    .select('id, url, created_at')
    .eq('user_id', user!.id)
    .maybeSingle()

  let snapshots: { id: string; score: number; max_score: number; report: unknown; crawled_at: string }[] = []
  if (site) {
    const serviceClient = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const { data } = await serviceClient
      .from('visibility_snapshots')
      .select('id, score, max_score, report, crawled_at')
      .eq('tracked_site_id', site.id)
      .order('crawled_at', { ascending: false })
      .limit(12)
    snapshots = data ?? []
  }

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '40px 32px' }}>
        <TrackerView site={site ?? null} snapshots={snapshots} />
      </main>
      <Footer />
    </>
  )
}
