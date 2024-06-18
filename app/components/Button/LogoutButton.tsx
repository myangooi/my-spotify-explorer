"use client";

import CONST from "@/app/shared/constants";
import React from "react";

export default function LogoutButton() {
  async function logout() {
    await localStorage.clear();
    window.location.href = `${CONST.BASE_URL}/`;
  }

  return (
    <button className="btn btn-active btn-ghost btn-md" onClick={logout}>
      Logout
    </button>
  );
}
