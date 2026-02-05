import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    // Required for static export (GitHub Pages) to avoid the image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
