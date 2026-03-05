import { Link } from "react-router";
import UserMenu from "./user-menu";
import GuestMenu from "./guest-menu";

export default function NavbarMenu({ session }: {session: Session}) {
    return (
        <div className="hidden md:flex items-center gap-4">
            <ul className="hidden md:flex items-center justify-between gap-4 uppercase">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
            { session.authenticated ? <UserMenu session={session} /> : <GuestMenu session={session} />}
        </div>
    )
}