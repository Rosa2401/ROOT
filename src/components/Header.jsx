import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav>
                <p>
                    <Link className="linktext" to="/">Services</Link>
                </p>
                <p>
                    <Link className="linktext" to="/create">Cases</Link>
                </p>
                <p>
                    <Link className="linktext" to="/create">Om os</Link>
                </p>
                <p>
                    <Link className="linktext" to="/create">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}