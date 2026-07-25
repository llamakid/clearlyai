'use client'

import { useEffect } from 'react'
import { llamakidConsoleBanner } from '@/lib/console-banner'

export default function ConsoleBanner() {
  useEffect(() => {
    llamakidConsoleBanner('Made by llamakid.com')
  }, [])

  return null
}
