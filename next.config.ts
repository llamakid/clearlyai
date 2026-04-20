import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow MDX remote content
  serverExternalPackages: ['gray-matter'],
}

export default nextConfig
