import { Link } from "react-router-dom";
import "tailwindcss";
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
                    <Link className="linktext" to="/kontakt">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}