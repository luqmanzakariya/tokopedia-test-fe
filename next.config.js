/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "custom"
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
})

module.exports = nextConfig
