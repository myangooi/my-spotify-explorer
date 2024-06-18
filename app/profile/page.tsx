"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  TopArtistsResponse,
  TopTracksResponse,
} from "../shared/interfaces/getTopItem";
import GetTopItems from "../components/Button/GetTopItems";
import TopTypeSelect from "../components/Select/TopTypeSelect";
import CONST from "../shared/constants";
import { TimeRange, timeRangeKeys, Type } from "../shared/interfaces/types";
import TopItems from "../components/TopItems/TopItems";

export default function Profile() {
  const [isLogin, setIsLogin] = useState(false);
  const [topItems, setItems] = useState<
    TopTracksResponse | TopArtistsResponse | null
  >(null);
  const [topTracks, setTopTracks] = useState<TopTracksResponse | null>(null);
  const [topArtists, setTopArtists] = useState<TopArtistsResponse | null>(null);
  const [mode, setMode] = useState<Type | "">("");
  const [timeRange, setTimeRange] = useState<TimeRange | null>(null);

  function handleFetchArtists(data: TopArtistsResponse) {
    setTopArtists(data);
    setTopTracks(null);
  }

  function handleFetchTracks(data: TopTracksResponse) {
    setTopTracks(data);
    setTopArtists(null);
  }

  function handleMode(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "artists" || event.target.value === "tracks") {
      setMode(event.target.value);
      setItems(null);
      setTimeRange(null);
    } else {
      setMode("");
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
              <TopTypeSelect handleMode={handleMode} />
              <div className="flex flex-row justify-center gap-2">
                {timeRangeKeys.map((timeRange: TimeRange, index) => (
                  <GetTopItems
                    timeRange={timeRange}
                    type={mode}
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
              mode={mode}
            />
          </div>
        </>
      ) : null}
    </>
  );
}
