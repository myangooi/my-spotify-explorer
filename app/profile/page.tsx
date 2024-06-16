"use client";

import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { TopTracksResponse } from "../interfaces/api-top";
import GetTopTracks, { TimeRange } from "../components/Button/GetTopTracks";
import TopTracks from "../components/TopItems/Tracks/TopTracks";

export default function Profile() {
  const [topTracks, setTopTracks] = useState<TopTracksResponse | null>(null);
  const [mode, setMode] = useState<"tracks" | "artists">();
  const [timeRange, setTimeRange] = useState<TimeRange | null>(null);

  function handleFetch(data: TopTracksResponse) {
    setTopTracks(data);
  }

  function handleTimeRange(timeRange: TimeRange) {
    setTimeRange(timeRange);
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center py-3 gap-3">
        <GetTopTracks
          timeRange="short_term"
          handleFetch={handleFetch}
          handleTimeRange={handleTimeRange}
        />
        <GetTopTracks
          timeRange="medium_term"
          handleFetch={handleFetch}
          handleTimeRange={handleTimeRange}
        />
        <GetTopTracks
          timeRange="long_term"
          handleFetch={handleFetch}
          handleTimeRange={handleTimeRange}
        />
      </div>
      <TopTracks topTracks={topTracks} timeRange={timeRange} />
    </>
  );
}
