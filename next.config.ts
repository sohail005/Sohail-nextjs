import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["thewowstyle.com"], // allow this external image domain
  },
  font: {
    poppins: ["Poppins", "sans-serif"],
  },
};

export default nextConfig;
