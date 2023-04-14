/** @type {import('next').NextConfig} */

const { nextDefaultConfig } = require('./next.config.default');

const DEFAULT_ENV_CONFIG = {
  API_DOMAIN: 'https://tiktok.fullstack.edu.vn',
};

const SERVER_CONFIG = {
  // Will only be available on the server side
  API_DOMAIN: process.env.API_DOMAIN || DEFAULT_ENV_CONFIG.API_DOMAIN,
  API_TIMEOUT: 5000,
};

const PUBLIC_CONFIG = {
  // Will be available on both server and client
  // secret: 'BBBBB',
  // staticFolder: '/static',
};

const IMG_DOMAINS = [
  'lh3.googleusercontent.com',
  'platform-lookaside.fbsbx.com',
  'files.fullstack.edu.vn',
];

const REWRITES = async () => [
  {
    source: '/proxy/api/:path*',
    destination: 'https://tiktok.fullstack.edu.vn/api/:path*', // Proxy to Backend
  },
];

const nextConfig = {
  ...nextDefaultConfig,
  env: DEFAULT_ENV_CONFIG,
  serverRuntimeConfig: SERVER_CONFIG,
  publicRuntimeConfig: PUBLIC_CONFIG,
  images: {
    domains: IMG_DOMAINS,
    minimumCacheTTL: 9999999,
  },
  rewrites: REWRITES,
};

module.exports = nextConfig;
