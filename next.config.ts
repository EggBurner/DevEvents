import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  experimental:{
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true
  }
};

export default nextConfig;
