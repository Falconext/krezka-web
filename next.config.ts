import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["s3.amazonaws.com", "png.pngtree.com", "img.freepik.com", "static.vecteezy.com", "scontent.faqp1-1.fna.fbcdn.net", "gestion.pe", "mujeresejecutivas.pe", "play-lh.googleusercontent.com"]
  }
};

export default nextConfig;
