"use client";

import CONST from "@/app/lib/constants";
import {
  TopArtistsResponse,
  TopTracksResponse,
} from "@/app/lib/interfaces/getTopItem";
import { TimeRange, Type } from "@/app/lib/interfaces/types";
import { timeRangeDisplayString } from "@/app/lib/utils/displayString";

export default function GetTopItems({
  timeRange,
  type,
  handleFetchArtists,
  handleFetchTracks,
  handleTimeRange,
}: {
  timeRange: TimeRange;
  type: Type | "";
  handleFetchArtists: (data: TopArtistsResponse) => void;
  handleFetchTracks: (data: TopTracksResponse) => void;
  handleTimeRange: (timeRange: TimeRange) => void;
}) {
  const displayText = timeRangeDisplayString(timeRange);

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
        `${CONST.API_ROOT_URL}/me/top/${type}/?time_range=${timeRange}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (!response.ok) {
        window.location.href = `${CONST.BASE_URL}`;
        throw new Error("Request failed");
      }
      handleTimeRange(timeRange);
      if (type === "artists") {
        const data: TopArtistsResponse = await response.json();
        handleFetchArtists(data);
      } else {
        const data: TopTracksResponse = await response.json();
        handleFetchTracks(data);
      }
    } catch (error) {
      window.location.href = `${CONST.BASE_URL}`;
    }
  }

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
