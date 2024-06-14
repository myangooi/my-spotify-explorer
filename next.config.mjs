/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-spotify-explorer",
  assetPrefix: "/my-spotify-explorer/",
};

export default nextConfig;
