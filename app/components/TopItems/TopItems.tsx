import {
  TopArtistsResponse,
  TopTracksResponse,
} from "@/app/lib/interfaces/getTopItem";
import { TimeRange, Type } from "@/app/lib/interfaces/types";
import { timeRangeDisplayString } from "@/app/lib/utils/displayString";
import { useEffect } from "react";
import TrackCollapse from "../Collapse/TrackCollapse";
import ArtistCollapse from "../Collapse/ArtistCollapse";

export default function TopItems({
  topTracks,
  topArtists,
  timeRange,
  mode,
}: {
  topTracks: TopTracksResponse | null;
  topArtists: TopArtistsResponse | null;
  timeRange: TimeRange | null;
  mode: Type | "";
}) {
  const displayText = timeRangeDisplayString(timeRange);

  function renderItemBasedOnMode() {
    return mode === "artists" ? (
      <>
        {topArtists?.items.map((artist, index) => (
          <ArtistCollapse artist={artist} index={index} key={index} />
        ))}
      </>
    ) : mode === "tracks" ? (
      <>
        {topTracks?.items.map((track, index) => (
          <TrackCollapse track={track} index={index} key={index} />
        ))}
      </>
    ) : (
      <></>
    );
  }

  useEffect(() => {
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
      const checkbox = document.getElementsByTagName("input").item(i);
      if (checkbox !== null) {
        checkbox.checked = false;
      }
    }
  }, [topTracks, topArtists, timeRange]);

  return (
    <>
      <div className="text-2xl font-bold px-4 py-2">
        {displayText !== null ? `Top 20 Tracks (${displayText})` : ""}
      </div>
      <div className="flex flex-wrap justify-center gap-2 px-6">
        {renderItemBasedOnMode()}
      </div>
    </>
  );
}
