const nextConfigSecurityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // }
];

module.exports.nextDefaultConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: nextConfigSecurityHeaders,
      },
    ];
  },
};
