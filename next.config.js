const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "avatars.githubusercontent.com", // Twitter Profile Picture
      "cdn.sanity.io",
    ],
  },
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
