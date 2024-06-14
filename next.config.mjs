/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/my-spotify-explorer/" : "",
  basePath: isProd ? "/my-spotify-explorer" : "",
};

export default nextConfig;
