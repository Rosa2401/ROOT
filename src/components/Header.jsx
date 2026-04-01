import { Link } from "react-router-dom";
import "tailwindcss";
export default function Header() {

    return (
        <header>
            <nav>
                <p>
                    <Link className="linktext" to="/services">Services</Link>
                </p>
                <p>
                    <Link className="linktext" to="/cases">Cases</Link>
                </p>
                <p>
                    <Link className="linktext" to="/om-os">Om os</Link>
                </p>
                <p>
                    <Link className="linktext" to="/kontakt">Kontakt</Link>
                </p>
            </nav>
        </header>
    )
}