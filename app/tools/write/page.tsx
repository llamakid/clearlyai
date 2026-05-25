import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WriteTool from './WriteTool'
import { createClient } from '@/lib/supabase/server'

export const metadata = { title: 'Write This For Me — Clearly, AI' }

export default async function WriteToolPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <>
      <Navbar initialUser={user} />
      <main style={{ minHeight: '80vh', padding: '40px 32px' }}>
        <WriteTool isLoggedIn={!!user} />
      </main>
      <Footer />
    </>
  )
}
