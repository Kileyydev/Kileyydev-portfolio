/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '*.picsum.photos',
      },
      // Add your own domain later when you have real images, e.g.:
      // {
      //   protocol: 'https',
      //   hostname: 'yourdomain.com',
      // },
    ],
  },

  // Optional: Fix the cross-origin warning (see below)
  allowedDevOrigins: ['192.168.56.1'],
};

module.exports = nextConfig;