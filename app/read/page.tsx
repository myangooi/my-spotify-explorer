"use client";

import { useEffect } from "react";
import CONST from "../constants";

// Get access token and redirect to profile page
export default function Read() {
  useEffect(() => {
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
          redirect_uri: process.env.REDIRECT_URI ?? "",
          client_id: process.env.CLIENT_ID ?? "",
          code_verifier: codeVerifier ?? "",
        }),
      };

      const body = await fetch(CONST.TOKEN_URL, payload);
      const response = await body.json();
      window.localStorage.setItem("access_token", response.access_token);
    }

    getAccessToken().then(() => {
      window.location.href = "/profile";
    });
  }, []);

  return <></>;
}
