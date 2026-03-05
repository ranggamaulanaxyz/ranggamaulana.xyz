import { HeartCrack } from "lucide-react";
import { Link } from "react-router";

interface ErrorPageProps {
    message: string,
    details: string,
    stack?: string,
}

export default function ErrorPage(props: ErrorPageProps) {
    return (
        <main className="min-h-screen flex items-center p-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 justify-center mb-3">
                    <div className="text-red-500 animate-pulse">
                        <HeartCrack className="w-32 h-32" />
                    </div>
                    <div>
                        <h1 className="text-9xl tracking-tight leading-tight text-gray-800">{props.message}</h1>
                    </div>
                </div>
                <div className="text-center mb-3">
                    <p className="uppercase text-xl text-gray-600">{props.details}</p>
                    {!props.stack && <div className="flex items-center justify-center gap-3 mt-3">
                        <Link to="/" className="inline-block bg-red-500 text-white px-4 py-2 rounded-full uppercase font-semibold">Back to Home</Link>
                        <Link to="/contact" className="inline-block bg-red-500 text-white px-4 py-2 rounded-full uppercase font-semibold">Contact Us</Link>
                    </div>}
                </div>
                {props.stack && (
                    <pre className="w-full p-4 overflow-x-auto bg-red-100 border border-red-200 rounded">
                    <code>{props.stack}</code>
                    </pre>
                )}
            </div>
        </main>
    )
}