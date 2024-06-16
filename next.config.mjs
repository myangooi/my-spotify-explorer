/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/my-spotify-explorer" : "",
  basePath: isProd ? "/my-spotify-explorer" : "",
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URL: process.env.REDIRECT_URL,
    AUTHORIZATION_URL: process.env.AUTHORIZATION_URL,
    TOKEN_URL: process.env.TOKEN_URL,
    SCOPE: process.env.SCOPE,
  },
};

export default nextConfig;
