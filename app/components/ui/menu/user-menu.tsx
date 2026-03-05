import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function UserMenu({ session }: { session: Session }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <ul className="flex items-center">
      <li ref={ref} className="relative flex items-center">
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            rounded-full
            transition
            hover:scale-105
            active:scale-95
            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            focus:ring-offset-2
            cursor-pointer
          "
        >
          <img
            src="https://picsum.photos/48/48"
            alt={session.user?.first_name ?? "User"}
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>

        <div
          className={`
            absolute top-full right-0 mt-2 min-w-72
            bg-white rounded-lg border border-gray-200 shadow-lg
            origin-top-right
            transition-all duration-150 ease-out
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col">
            <li>
              <Link
                to="/me"
                className="
                  block px-3 py-2 text-sm rounded-md
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/signout"
                className="
                  block px-3 py-2 text-sm rounded-md
                  transition-colors
                  hover:bg-gray-100
                  active:bg-gray-200
                "
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}