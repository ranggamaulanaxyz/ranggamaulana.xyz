import { redirect } from "react-router";
import type { Route } from "./+types/signout";
import { sessionStorage } from "libraries/session.server";
import { api } from "libraries/api";

export async function loader({ request }: Route.LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const session = await sessionStorage.getSession(cookieHeader);
    const data = await api("/auth/token/revoke", {
        session: session,
        method: "POST",
        body: JSON.stringify({
            "refresh_token": session.get("refreshToken")
        })
    })
    if (data?.item.is_revoked) {
        return redirect("/", {
            headers: {
                "Set-Cookie": await sessionStorage.destroySession(session)
            }
        })
    }
    return redirect("/");
}
