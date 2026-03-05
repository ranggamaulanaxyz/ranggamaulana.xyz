import { data, Outlet } from "react-router";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import type { Route } from "./+types/layout";
import { api } from "libraries/api";
import { sessionStorage } from "libraries/session.server";

export async function loader({ request }: Route.LoaderArgs) {
    const headerCookie = request.headers.get("Cookie");
    const session = await sessionStorage.getSession(headerCookie);
    const results = await api<Data<User>>("/users/me", {session: session, retry: true});
    
    return data({
        session: {
            user: results?.item,
            authenticated: Boolean(results?.item)
        }
    }, {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session)
        }
    })
}

export default function Layout({loaderData}: Route.ComponentProps ) {
    const { session } = loaderData;
    return (
        <div>
            <Header session={session} />
            <Outlet />
            <Footer />
        </div>
    )
}