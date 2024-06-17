"use client";

import CONST from "@/app/constants";
import {
  TopArtistsResponse,
  TopTracksResponse,
} from "@/app/interfaces/api-top";

export type TimeRange = "short_term" | "medium_term" | "long_term";
export type Type = "artists" | "tracks";

export default function GetTopItems({
  timeRange,
  type,
  handleFetch,
  handleTimeRange,
}: {
  timeRange: TimeRange;
  type: Type | "";
  handleFetch: (data: TopTracksResponse | TopArtistsResponse) => void;
  handleTimeRange: (timeRange: TimeRange) => void;
}) {
  async function getTopItems() {
    const accessToken = window.localStorage.getItem("access_token");
    try {
      if (!accessToken) {
        window.location.href = `${CONST.BASE_URL}`;
        throw new Error("Access token not found");
      }
      if (type === "") {
        throw new Error("No type selected");
      }
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${type}/?time_range=${timeRange}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (!response.ok) {
        window.location.href = `${CONST.BASE_URL}`;
        throw new Error("Request failed");
      }
      let data: TopArtistsResponse | TopTracksResponse;
      if (type === "artists") {
        data = (await response.json()) as TopArtistsResponse;
      } else {
        data = (await response.json()) as TopTracksResponse;
      }
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
    <button
      className="btn btn-info btn-sm"
      onClick={getTopItems}
      disabled={type === ""}
    >
      {displayText}
    </button>
  );
}