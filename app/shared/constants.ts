export const CONST = {
  BASE_URL: process.env.NODE_ENV === "production" ? "/my-spotify-explorer" : "",
  AUTHORIZATION_URL: "https://accounts.spotify.com/authorize",
  TOKEN_URL: "https://accounts.spotify.com/api/token",
  SCOPE: "user-top-read",
  API_ROOT_URL: "https://api.spotify.com/v1",
};

export default CONST;
