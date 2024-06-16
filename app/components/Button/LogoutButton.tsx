"use client";

import CONST from "@/app/constants";
import React from "react";

export default function LogoutButton() {
  async function logout() {
    await localStorage.clear();
    window.location.href = `${CONST.BASE_URL}/`;
  }

  return (
    <button className="btn btn-active btn-ghost" onClick={logout}>
      Logout
    </button>
  );
}
