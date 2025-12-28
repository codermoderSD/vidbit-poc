import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? basePath : "",
  assetPrefix: isProd ? basePath : "",
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly processed
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
