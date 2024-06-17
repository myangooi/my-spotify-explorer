import { TopArtistsResponse } from "@/app/interfaces/api-top";
import { TimeRange } from "../../Button/GetTopItems";
import { useEffect } from "react";
import Image from "next/image";

export default function TopArtists({
  topArtists,
  timeRange,
}: {
  topArtists: TopArtistsResponse | null;
  timeRange: TimeRange | null;
}) {
  const displayText =
    timeRange === "short_term"
      ? "Last month"
      : timeRange === "medium_term"
      ? "Last 6 months"
      : timeRange === "long_term"
      ? "Last year"
      : null;

  useEffect(() => {
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
      const checkbox = document.getElementsByTagName("input").item(i);
      if (checkbox !== null) {
        checkbox.checked = false;
      }
    }
  }, [topArtists, timeRange]);

  return (
    <>
      <div className="text-2xl font-bold px-4 py-2">
        {displayText !== null ? `Top 20 Artists (${displayText})` : ""}
      </div>
      <div className="flex flex-wrap justify-center gap-2 px-6">
        {topArtists?.items.map((artist, index) => (
          <div
            key={index}
            className="collapse collapse-arrow max-w-4xl min-w-80 bg-indigo-300 shadow-md rounded-lg"
          >
            <input type="checkbox" id={`collapse-${index}`} />
            <div className="collapse-title flex flex-row gap-3">
              <span className="text-xl font-semibold min-w-8 text-right">
                {index + 1}.
              </span>
              <span className="text-xl font-semibold min-w-0">
                {artist.name}
              </span>
            </div>
            <div className="collapse-content flex flex-row px-16 gap-4 items-center">
              {artist.images.length !== 0 && (
                <Image
                  src={artist.images[artist.images.length - 1].url}
                  alt={artist.name}
                  width={64}
                  height={64}
                  className="min-w-16"
                />
              )}
              <div className="flex flex-col gap-1">
                <div>
                  <span className="font-medium">Followers</span>:{" "}
                  {artist.followers.total}
                </div>
                <div>
                  <span className="font-medium">Popularity</span>:{" "}
                  {artist.popularity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
