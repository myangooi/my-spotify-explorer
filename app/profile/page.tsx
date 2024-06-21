"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  TopArtistsResponse,
  TopTracksResponse,
} from "../lib/interfaces/getTopItem";
import GetTopItems from "../components/Button/GetTopItems";
import TopTypeSelect from "../components/Select/TopTypeSelect";
import CONST from "../lib/constants";
import { TimeRange, timeRangeKeys, Type } from "../lib/interfaces/types";
import TopItems from "../components/TopItems/TopItems";

export default function Profile() {
  const [isLogin, setIsLogin] = useState(false);
  const [topTracks, setTopTracks] = useState<TopTracksResponse | null>(null);
  const [topArtists, setTopArtists] = useState<TopArtistsResponse | null>(null);
  const [type, setType] = useState<Type | "">("");
  const [timeRange, setTimeRange] = useState<TimeRange | null>(null);

  function handleFetchArtists(data: TopArtistsResponse) {
    setTopArtists(data);
    setTopTracks(null);
  }

  function handleFetchTracks(data: TopTracksResponse) {
    setTopTracks(data);
    setTopArtists(null);
  }

  function handleType(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "artists" || event.target.value === "tracks") {
      setType(event.target.value);
      setTopTracks(null);
      setTopArtists(null);
      setTimeRange(null);
    } else {
      setType("");
    }
  }

  function handleTimeRange(timeRange: TimeRange) {
    setTimeRange(timeRange);
  }

  useEffect(() => {
    if (window.localStorage.getItem("access_token") === null) {
      window.location.href = `${CONST.BASE_URL}/`;
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <>
      {isLogin ? (
        <>
          <NavBar />
          <div className="relative top-16">
            <div className="flex flex-row gap-4 flex-wrap justify-center py-3">
              <TopTypeSelect handleType={handleType} />
              <div className="flex flex-row justify-center gap-2">
                {timeRangeKeys.map((timeRange: TimeRange, index: number) => (
                  <GetTopItems
                    timeRange={timeRange}
                    type={type}
                    handleFetchArtists={handleFetchArtists}
                    handleFetchTracks={handleFetchTracks}
                    handleTimeRange={handleTimeRange}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <TopItems
              topArtists={topArtists}
              topTracks={topTracks}
              timeRange={timeRange}
              type={type}
            />
          </div>
        </>
      ) : null}
    </>
  );
}
