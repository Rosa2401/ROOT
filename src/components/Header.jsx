import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav>
                <p>
                    <Link className="linktext" to="/">Home</Link>
                </p>
                                <p>
                    <Link className="linktext" to="/create">Create Event</Link>
                </p>
            </nav>
        </header>
    )
}