import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s3.amazonaws.com" },
      { protocol: "https", hostname: "png.pngtree.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "scontent.faqp1-1.fna.fbcdn.net" },
      { protocol: "https", hostname: "gestion.pe" },
      { protocol: "https", hostname: "mujeresejecutivas.pe" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
    ],
  },
  output: "standalone",
};

export default nextConfig;
