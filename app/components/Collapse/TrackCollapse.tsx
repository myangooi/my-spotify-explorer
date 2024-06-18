import { Track } from "@/app/shared/interfaces/getTopItem";
import Image from "next/image";

export default function TrackCollapse({
  track,
  index,
}: {
  track: Track;
  index: number;
}) {
  return (
    <div className="collapse collapse-arrow max-w-4xl min-w-80 bg-indigo-300 shadow-md rounded-lg">
      <input type="checkbox" id={`collapse-${index}`} />
      <div className="collapse-title flex flex-row gap-3">
        <span className="text-xl font-semibold min-w-8 text-right">
          {index + 1}.
        </span>
        <div className="flex flex-row gap-2 items-baseline flex-wrap">
          <span className="text-xl font-semibold min-w-0">{track.name}</span>
          <span className="text-md">
            {track.artists.map((value) => value.name).join(", ")}
          </span>
        </div>
      </div>
      <div className="collapse-content flex flex-row px-16 gap-4 items-center">
        {track.album.images.length !== 0 && (
          <Image
            src={track.album.images[track.album.images.length - 1].url}
            alt={track.album.name}
            width={track.album.images[track.album.images.length - 1].width}
            height={track.album.images[track.album.images.length - 1].height}
            className="min-w-16 min-h-16"
          />
        )}
        <div className="flex flex-col gap-1">
          <div>
            <span className="font-medium">Album</span>: {track.album.name}
          </div>
          <div>
            <span className="font-medium">Popularity</span>: {track.popularity}
          </div>
        </div>
      </div>
    </div>
  );
}
