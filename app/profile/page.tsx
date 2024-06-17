"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { TopArtistsResponse, TopTracksResponse } from "../interfaces/api-top";
import TopTracks from "../components/TopItems/Tracks/TopTracks";
import GetTopItems, { TimeRange, Type } from "../components/Button/GetTopItems";
import TopTypeSelect from "../components/Select/TopTypeSelect";
import TopArtists from "../components/TopItems/Artists/TopArtists";
import CONST from "../constants";

export default function Profile() {
  const [isLogin, setIsLogin] = useState(false);
  const [topItems, setItems] = useState<
    TopTracksResponse | TopArtistsResponse | null
  >(null);
  const [mode, setMode] = useState<Type | "">("");
  const [timeRange, setTimeRange] = useState<TimeRange | null>(null);

  function handleFetch(data: TopTracksResponse | TopArtistsResponse) {
    setItems(data);
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
                <GetTopItems
                  timeRange="short_term"
                  type={mode}
                  handleFetch={handleFetch}
                  handleTimeRange={handleTimeRange}
                />
                <GetTopItems
                  timeRange="medium_term"
                  type={mode}
                  handleFetch={handleFetch}
                  handleTimeRange={handleTimeRange}
                />
                <GetTopItems
                  timeRange="long_term"
                  type={mode}
                  handleFetch={handleFetch}
                  handleTimeRange={handleTimeRange}
                />
              </div>
            </div>
            {mode === "tracks" ? (
              <TopTracks
                topTracks={topItems as TopTracksResponse}
                timeRange={timeRange}
              />
            ) : mode === "artists" ? (
              <TopArtists
                topArtists={topItems as TopArtistsResponse}
                timeRange={timeRange}
              />
            ) : (
              <></>
            )}
          </div>
        </>
      ) : null}
    </>
  );
}
