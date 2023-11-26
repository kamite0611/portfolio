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
};

module.exports = nextConfig;
