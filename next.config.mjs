import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  turbopack: {
    root: import.meta.dirname,
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
