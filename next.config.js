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
  serverExternalPackages: [
    '@emotion/react',
    '@emotion/styled',
    '@emotion/cache',
    '@emotion/server',
    '@mui/material',
    '@mui/styled-engine',
  ],
};

module.exports = nextConfig;
