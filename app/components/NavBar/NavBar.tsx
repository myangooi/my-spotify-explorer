import { TopTracksResponse } from "@/app/interfaces/api-top";
import GetTopTracks, { TimeRange } from "../Button/GetTopTracks";
import LogoutButton from "../Button/LogoutButton";

export default function NavBar() {
  return (
    <div className="navbar bg-blue-400 flex justify-between p-0">
      <div className="font-bold p-2">Test Site</div>
      <div className="p-2">
        <LogoutButton />
      </div>
    </div>
  );
}
