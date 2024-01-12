/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/your-target-page',
      },
    ];
  },
};
