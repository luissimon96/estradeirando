/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.estradeirando.com.br'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
}

module.exports = nextConfig 