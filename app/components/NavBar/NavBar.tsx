import LogoutButton from "../Button/LogoutButton";

export default function NavBar() {
  return (
    <div className="navbar bg-primary flex justify-around">
      <div className="font-bold">Test Site</div>
      <div className="">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="w-60">
              <summary>Top Tracks</summary>
              <ul className="w-full p-1 bg-base-100 rounded-t-none">
                <li>
                  <a>Last 4 weeks</a>
                </li>
                <li>
                  <a>Last 6 months</a>
                </li>
                <li>
                  <a>Last year</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="">
        <LogoutButton />
      </div>
    </div>
  );
}
