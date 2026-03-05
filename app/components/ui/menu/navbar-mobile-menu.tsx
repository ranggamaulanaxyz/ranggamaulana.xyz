import { LogIn, MenuIcon } from "lucide-react";
import { Link } from "react-router";

export default function NavbarMobileMenu({ session }: {session: Session}) {
    return (
        <ul className="flex items-center justify-center gap-4 md:hidden">
            <li>
                <Link to="/signin" title="Sign in">
                    <LogIn />
                </Link>
            </li>
            <li className="relative flex items-center">
                <button type="button" className="hover:text-gray-900 cursor-pointer p-1.5" aria-label="Menu" title="Menu">
                    <MenuIcon />
                </button>
                <div className="absolute top-full right-0 bg-white min-w-xs border border-default-color rounded hidden">
                    <ul className="py-2">
                        <li>
                            <Link to="/blog" className="block hover:bg-gray-100 px-4 py-2">Blog</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="block hover:bg-gray-100 px-4 py-2">Blog</Link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}