import path from "path";
import type { NextConfig } from "next";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
export default nextConfig;
