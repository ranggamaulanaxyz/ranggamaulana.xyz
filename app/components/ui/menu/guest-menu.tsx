import { Link } from "react-router";

export default function GuestMenu({ session }: { session: Session }) {
    return (
        <ul className="uppercase">
            <li>
                <Link to="/signin" >Sign In</Link>
            </li>
        </ul>
    )
}