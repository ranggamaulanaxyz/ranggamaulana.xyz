import { Form } from "react-router";

export default function SigninPage() {
    return (
        <main className="min-h-screen">
            <div className="max-w-92 mx-auto md:py-42">
                <Form method="post">
                    <div className="mb-4">
                        <label htmlFor="identifier">Email Address</label>
                        <input type="text" name="identifier" className="w-full bg-transparent py-1.5 text-sm text-stone-800 placeholder:text-stone-300 outline-none border-b border-stone-200 transition-colors duration-200 focus:border-stone-800" placeholder="youremail@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="identifier">Password</label>
                        <input type="password" name="password" className="w-full bg-transparent py-1.5 text-sm text-stone-800 placeholder:text-stone-300 outline-none border-b border-stone-200 transition-colors duration-200 focus:border-stone-800" placeholder="********" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-gray-950 text-white py-1 px-2 cursor-pointer">Signin</button>
                    </div>
                </Form>
            </div>
        </main>
    )
}