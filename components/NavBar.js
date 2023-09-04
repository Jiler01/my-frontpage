import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-gray-100 dark:bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/Computers-and-me"}>Computers and me 🦾</Link>
            </li>
            <li>
              <Link href={"/Learnings"}>Learnings ✨</Link>
              <ul className="p-2">
                <li>
                  <Link href={"/Learnings/of-life"}>Learnings of life</Link>
                </li>
                <li>
                  <Link href={"/Learnings/of-SiO2"}>Learnings on SiO2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/Contact-me"}>Contact me ! 🚀</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
          Rehan Jiva Lila
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/Computers-and-me"} className="ml-2 mr-2">
              💪 Computers and me 🦾
            </Link>
          </li>
          <li>
            <Link href={"/Learnings/of-life"} className="ml-2 mr-2">
              ✨ Learnings of life
            </Link>
          </li>
          <li>
            <Link href={"/Learnings/on-SiO2"} className="ml-2 mr-2">
              Learnings on SiO2 ✨
            </Link>
          </li>
          <li>
            <Link href={"/Contact-me"} className="ml-2 mr-2">
              🚀 Contact me ! 🚀
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary" href={"/Who-am-I"}>
          Who am I ?
        </Link>
      </div>
    </div>
  );
}
