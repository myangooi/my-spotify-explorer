"use client";

import React from "react";

export default function LogoutButton() {
  async function logout() {
    await localStorage.clear();
    window.location.href = "/";
  }

  return (
    <button className="btn btn-active btn-primary" onClick={logout}>
      Logout
    </button>
  );
}
