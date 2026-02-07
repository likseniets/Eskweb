import type { NextConfig } from "next";

const normalizeBasePath = (value?: string) =>
  value && value.startsWith("/") ? value : "";

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    // Required for static export (GitHub Pages) to avoid the image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
