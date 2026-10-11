import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bouwt een zelfstandige server in .next/standalone, voor de Docker-image.
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
