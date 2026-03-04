import { LogIn, Menu } from "lucide-react";
import { Link } from "react-router";

export default function Header({user}: {user: User}) {
    return (
        <header className="sticky top-0 bg-white border-b border-default-color text-gray-600">
            <div className="flex items-center justify-between px-4 relative">
                <div className="text-xl font-bold py-3">
                    <Link to={"/"} className="hover:text-red-400 ">RMXYZ</Link>
                </div>
                <div>
                    <ul className="hidden md:flex items-center justify-between gap-4 uppercase">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign in</Link>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-center gap-4 md:hidden">
                        <li>
                            <Link to="/signin" title="Sign in">
                                <LogIn />
                            </Link>
                        </li>
                        <li className="relative flex items-center">
                            <button type="button" className="hover:text-gray-900 cursor-pointer p-1.5" aria-label="Menu" title="Menu">
                                <Menu />
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
                </div>
            </div>
        </header>
    )
}