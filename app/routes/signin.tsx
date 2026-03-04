import SigninPage from "~/components/pages/signin-page";
import type { Route } from "./+types/signin";
import { sessionStorage } from "libraries/session.server";
import { redirect } from "react-router";

export async function action({ request }: Route.ActionArgs) {
    const headerCookie = request.headers.get("Cookie");
    const session = await sessionStorage.getSession(headerCookie)

    const formData = await request.formData();
    const identifier = formData.get("identifier");
    const password = formData.get("password");

    if (typeof identifier !== "string" || typeof password !== "string") {
        return {error: "Invalid email and password"}
    }

    const body = new URLSearchParams();
    body.append("username", identifier);
    body.append("password", password);

    const response = await fetch("http://localhost:8000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        credentials: "include",
        body: body
    })

    const results = await response.json()
    session.set("accessToken", results.access_token);
    session.set("refreshToken", results.refresh_token);
    
    return redirect("/", {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session)
        }
    })
}

export default function Signin() {
    return <SigninPage />
}