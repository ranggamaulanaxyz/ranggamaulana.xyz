import { Menu } from "lucide-react";
import { Link } from "react-router";

export function WelcomePage() {
    return (
        <div>
            <header className="sticky top-0">
                <div className="flex items-center justify-between px-2 relative">
                    <div className="text-xl font-bold py-3">
                        <Link to={"/"} className="hover:text-red-500 ">RMXYZ</Link>
                    </div>
                    <div>
                        <ul>
                            <li className="flex items-center">
                                <button className="hover:text-red-500 cursor-pointer p-1.5">
                                    <Menu />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <main className="min-h-screen md:flex md:items-center md:justify-center">
                <section className="px-4">
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 md:grid-cols-3 md:grid-rows-1 md:gap-4">
                        <div className="row-span-2 md:row-span-1 md:col-start-2 md:row-start-1 md:py-2">
                            <img src="/picture.jpeg" alt="Profile Picture" className="rounded-lg w-full md:max-w-92" />
                        </div>
                        <div className="relative col-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
                            <h1 className="md:absolute md:top-0 md:right-0">
                                <span className="block text-lg md:text-xl text-gray-500 tracking-wide leading-tight">
                                    Hello, I’m
                                </span>
                                <span className="block text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-red-600 to-orange-900 pb-1 md:pb-2">
                                    Rangga Maulana
                                </span>
                            </h1>
                        </div>
                        <div className="relative col-span-2 col-start-2 row-start-2 md:col-start-3 md:row-start-1">
                            <div className="md:absolute md:bottom-0 md:left-0">
                                <h2 className="text-base leading-tight md:text-2xl font-semibold text-gray-700 md:text-shadow-2xs">
                                    I craft websites and business systems that just work.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="text-gray-500 text-center p-4">
                    &copy; {new Date().getFullYear()} Rangga Maulana. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}