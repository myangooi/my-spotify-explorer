import { TopTracksResponse } from "@/app/interfaces/api-top";
import { TimeRange } from "../../Button/GetTopTracks";

export default function TopTracks({
  topTracks,
  timeRange,
}: {
  topTracks: TopTracksResponse | null;
  timeRange: TimeRange;
}) {
  const displayText =
    timeRange === "short_term"
      ? "Last month"
      : timeRange === "medium_term"
      ? "Last 6 months"
      : "Last year";

  return (
    <>
      <div className="text-2xl font-bold px-4 py-2">
        Top Track ({displayText})
      </div>
      <div className="flex flex-wrap justify-center">
        {topTracks &&
          topTracks.items.map((track, index) => (
            <div key={index} className="card w-5/12 bg-blue-300 m-1">
              <div className="card-body">
                <div className="card-title">
                  {index + 1}. {track.name}
                </div>
                <div>{track.artists.map((value) => value.name).join(", ")}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
