import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/about/software-product-dev-OLD",
        destination: "/research-development/software-product-dev",
        permanent: true,
      },
      {
        source: "/consulting-services/marine",
        destination: "/consulting-services#marine",
        permanent: true,
      },
      {
        source: "/research-development/ess-solutions",
        destination: "/consulting-services#ess-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
