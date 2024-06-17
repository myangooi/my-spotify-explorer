import { TopTracksResponse } from "@/app/interfaces/api-top";
import GetTopTracks, { TimeRange } from "../Button/GetTopTracks";
import LogoutButton from "../Button/LogoutButton";

export default function NavBar() {
  return (
    <div className="navbar bg-indigo-700 flex justify-between px-0 py-2 fixed z-10">
      <div className="text-2xl font-bold px-4 py-2 text-white">Test Site</div>
      <div className="px-4 text-white">
        <LogoutButton />
      </div>
    </div>
  );
}
