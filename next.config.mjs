/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
}

export default nextConfig