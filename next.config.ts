import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// A stray package-lock.json in the home directory makes Turbopack infer `~` as
// the workspace root, so it would watch the entire home folder. Pin it to this
// file's own directory — cwd is not reliable, the config location is.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
