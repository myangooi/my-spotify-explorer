import { Artist } from "@/app/lib/interfaces/getTopItem";
import Image from "next/image";

export default function ArtistCollapse({
  artist,
  index,
}: {
  artist: Artist;
  index: number;
}) {
  return (
    <div className="collapse collapse-arrow max-w-4xl min-w-80 bg-indigo-300 shadow-md rounded-lg">
      <input type="checkbox" id={`collapse-${index}`} />
      <div className="collapse-title flex flex-row gap-3">
        <span className="text-xl font-semibold min-w-8 text-right">
          {index + 1}.
        </span>
        <span className="text-xl font-semibold min-w-0">{artist.name}</span>
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
            <span className="font-medium">Popularity</span>: {artist.popularity}
          </div>
        </div>
      </div>
    </div>
  );
}
