/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Next.js expects the `images` key (lowercase) and domain entries without protocol
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
