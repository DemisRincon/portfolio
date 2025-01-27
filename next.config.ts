import type { NextConfig } from "next";

const inDevelopment = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  assetPrefix: inDevelopment ? undefined : "/",
};

export default nextConfig;
