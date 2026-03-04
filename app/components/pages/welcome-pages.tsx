import { LogIn, Menu } from "lucide-react";
import { Link } from "react-router";

export function WelcomePage() {
    return (
        <main className="min-h-screen md:flex md:items-center md:justify-center">
            <section className="px-4 py-2">
                <div className="grid grid-cols-3 grid-rows-2 gap-2 md:grid-cols-3 md:grid-rows-1 md:gap-4">
                    <div className="row-span-2 md:row-span-1 md:col-start-2 md:row-start-1 md:py-2">
                        <img src="/picture.jpeg" alt="Profile Picture" className="rounded-lg w-full md:max-w-92" />
                    </div>
                    <div className="md:relative col-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
                        <h1 className="md:absolute md:top-0 md:right-0">
                            <span className="block text-lg md:text-xl text-gray-500 tracking-wide leading-tight">
                                Hello, I’m
                            </span>
                            <span className="inline-block text-3xl md:text-6xl font-audiowide font-extrabold bg-clip-text text-transparent bg-linear-to-r from-gray-600 to-gray-400">
                                RANGGA MAULANA
                            </span>
                        </h1>
                    </div>
                    <div className="md:relative col-span-2 col-start-2 row-start-2 md:col-start-3 md:row-start-1">
                        <div className="md:absolute md:bottom-0 md:left-0">
                            <h2 className="text-base leading-tight md:text-2xl font-semibold text-gray-500">
                                I craft websites and business systems that <span className="text-gray-900 font-bold">just work.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}