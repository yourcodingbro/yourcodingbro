import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "xlrbnndmoofhuzmejjfa.supabase.co",
      },
    ],
  },
};

export default nextConfig;
