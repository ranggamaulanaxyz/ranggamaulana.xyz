import { Link } from "react-router";
import NavbarMenu from "./menu/navbar-menu";
import NavbarMobileMenu from "./menu/navbar-mobile-menu";

export default function Header({ session }: { session: Session }) {
  return (
    <header className="border-default-color sticky top-0 z-40 border-b bg-white text-gray-600">
      <div className="relative flex items-center justify-between px-4">
        <div className="py-3 text-xl font-bold">
          <Link to={"/"} className="text-gray-700 hover:text-gray-900 transition-all">
            RMXYZ
          </Link>
        </div>
        <NavbarMenu session={session} />
        <NavbarMobileMenu session={session} />
      </div>
    </header>
  );
}
