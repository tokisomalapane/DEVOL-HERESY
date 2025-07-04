/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Required for static export (GitHub Pages)
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
