import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/pipeline",
        destination: "/process",
      },
      {
        source: "/insights",
        destination: "/blog",
      },
    ];
  },
};

export default nextConfig;
