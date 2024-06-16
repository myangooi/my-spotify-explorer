"use client";

import React from "react";

export default function LoginButton() {
  async function login() {
    await redirectToSpotifyAuthorize();
  }

  return (
    <button className="btn btn-active btn-primary" onClick={login}>
      Login
    </button>
  );
}

async function redirectToSpotifyAuthorize() {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const randomString = randomValues.reduce(
    (acc, x) => acc + possible[x % possible.length],
    ""
  );

  const code_verifier = randomString;
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest("SHA-256", data);

  const code_challenge_base64 = btoa(
    String.fromCharCode(...new Uint8Array(hashed))
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  window.localStorage.setItem("code_verifier", code_verifier);
  document.cookie = `verifier=${code_verifier}`;

  const authUrl = new URL(process.env.AUTHORIZATION_URL ?? "");
  const params = {
    response_type: "code",
    client_id: process.env.CLIENT_ID ?? "",
    scope: process.env.SCOPE ?? "",
    code_challenge_method: "S256",
    code_challenge: code_challenge_base64,
    redirect_uri: process.env.REDIRECT_URL ?? "",
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}
