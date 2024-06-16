"use client";

import CONST from "@/app/constants";
import { TopTracksResponse } from "@/app/interfaces/api-top";

export type TimeRange = "short_term" | "medium_term" | "long_term";

export default function GetTopTracks({
  timeRange,
  handleFetch,
  handleTimeRange,
}: {
  timeRange: TimeRange;
  handleFetch: (data: TopTracksResponse) => void;
  handleTimeRange: (timeRange: TimeRange) => void;
}) {
  async function getTopTracks() {
    const accessToken = window.localStorage.getItem("access_token");
    try {
      if (!accessToken) {
        window.location.href = `${CONST.BASE_URL}`;
        throw new Error("Access token not found");
      }
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/tracks/?time_range=${timeRange}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (!response.ok) {
        window.location.href = `${CONST.BASE_URL}`;
        throw new Error("Request failed");
      }
      const data: TopTracksResponse = await response.json();
      handleFetch(data);
      handleTimeRange(timeRange);
    } catch (error) {
      console.error("Failed to get top tracks", error);
      window.location.href = `${CONST.BASE_URL}`;
    }
  }

  const displayText =
    timeRange === "short_term"
      ? "Last month"
      : timeRange === "medium_term"
      ? "Last 6 months"
      : "Last year";

  return (
    <button className="btn btn-info btn-sm" onClick={getTopTracks}>
      {displayText}
    </button>
  );
}
