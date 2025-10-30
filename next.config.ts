import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
