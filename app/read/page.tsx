"use client";

import { useEffect } from "react";

export default function Read() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code") ?? "";

  async function getAccessToken() {
    let codeVerifier = window.localStorage.getItem("code_verifier");

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: process.env.REDIRECT_URL ?? "",
        client_id: process.env.CLIENT_ID ?? "",
        code_verifier: codeVerifier ?? "",
      }),
    };

    const body = await fetch("https://accounts.spotify.com/api/token", payload);
    const response = await body.json();
    window.localStorage.setItem("access_token", response.access_token);
  }

  useEffect(() => {
    getAccessToken();
    window.location.href = "/profile";
  });

  return <></>;
}
