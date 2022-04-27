/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['firebasestorage.googleapis.com'],
    // loader: 'imgix',
    // path: '/',
  }
}


module.exports = nextConfig
