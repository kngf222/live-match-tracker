// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig;


module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/match/:matchId',
        destination: '/match/[matchId]',
      },
    ];
  },
};