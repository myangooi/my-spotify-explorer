"use client";

import { useState } from "react";

export default function DontClickButton() {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <>
      {!hasClicked ? (
        <button
          className="btn btn-active btn-secondary"
          onClick={() => setHasClicked(true)}
        >
          Don&apos;t Click
        </button>
      ) : (
        <div>Told you not to click this</div>
      )}
    </>
  );
}
