/** @type {import('next').NextConfig} */

const nextConfig = {
  // i18n: {
  //   locales: ['en', 'ja'],
  //   defaultLocale: 'ja',
  // },
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
