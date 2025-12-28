import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vidbit-poc",
  assetPrefix: "/vidbit-poc/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
