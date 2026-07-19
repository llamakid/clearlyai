import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuditTool from './AuditTool'
import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'AI Search Checkup — Clearly, AI',
  description:
    'See how ready your website is for AI search. Get a score out of 100 and a plain-English list of what to fix so tools like ChatGPT and Perplexity can find and cite you.',
}

export default async function AuditToolPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '40px 32px' }}>
        <AuditTool isLoggedIn={!!user} />
      </main>
      <Footer />
    </>
  )
}
