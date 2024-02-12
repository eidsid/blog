/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.google.com",
      "avatars.githubusercontent.com",
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
