import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExplainTool from './ExplainTool'
import { createClient } from '@/lib/supabase/server'

export const metadata = { title: 'Explain This To Me — Clearly, AI' }

export default async function ExplainToolPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '40px 32px' }}>
        <ExplainTool isLoggedIn={!!user} />
      </main>
      <Footer />
    </>
  )
}
