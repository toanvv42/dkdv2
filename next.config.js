/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/dkdv2', // Matches your repository name: toanvv42/dkdv2
}

module.exports = nextConfig 