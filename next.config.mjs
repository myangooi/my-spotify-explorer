/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/my-spotify-explorer" : "",
  basePath: isProd ? "/my-spotify-explorer" : "",
  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

export default nextConfig;
