"use client";

import { useEffect } from "react";
import CONST from "../constants";

// Get access token and redirect to profile page
export default function Redirect() {
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
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI ?? "",
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
          code_verifier: codeVerifier ?? "",
        }),
      };

      try {
        const body = await fetch(CONST.TOKEN_URL, payload);
        if (!body.ok) {
          throw new Error("Request failed");
        }
        const response = await body.json();
        window.localStorage.setItem("access_token", response.access_token);
        window.localStorage.setItem("refresh_token", response.refresh_token);
        window.location.href = `${CONST.BASE_URL}/profile`;
      } catch (error) {
        window.location.href = `${CONST.BASE_URL}/`;
      }
    }

    getAccessToken();
  }, []);

  return <></>;
}
