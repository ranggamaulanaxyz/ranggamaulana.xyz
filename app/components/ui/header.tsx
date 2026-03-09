import { Link } from "react-router";
import NavbarMenu from "./menu/navbar-menu";
import NavbarMobileMenu from "./menu/navbar-mobile-menu";

export default function Header({session}: {session: Session}) {
    return (
        <header className="sticky top-0 bg-white border-b border-default-color text-gray-600 z-40">
            <div className="flex items-center justify-between px-4 relative">
                <div className="text-xl font-bold py-3">
                    <Link to={"/"} className="hover:text-red-400 ">RMXYZ</Link>
                </div>
                <NavbarMenu session={session} />
                <NavbarMobileMenu session={session} />
            </div>
        </header>
    )
}