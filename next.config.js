/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.infura.io"],
  },
  webpack: (config) => {
    // Resolver erro "digital envelope routines::unsupported"
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: false,
    };
    return config;
  },
};
