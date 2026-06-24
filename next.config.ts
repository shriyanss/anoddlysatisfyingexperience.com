import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Outputs completely static HTML/CSS/JS into an /out folder
  images: {
    unoptimized: true,   // Required because GitHub Pages is a static host
  },
};

export default nextConfig;
