import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    `px-6 py-2 rounded-full transition ${
      isActive
        ? "border-2 border-[#FFCFD5] text-[#FFCFD5]"
        : "text-[#F6ECE3] hover:text-[#FFCFD5]"
    }`;

  return (
    <header className="w-full flex justify-center">
      <nav className="bg-[#5B3A32] w-[40%] max-w-xl rounded-full py-6 px-10 flex justify-around items-center text-lg font-semibold">
        
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>

        <NavLink to="/cases" className={navLinkClass}>
          Cases
        </NavLink>

        <NavLink to="/om-os" className={navLinkClass}>
          Om os
        </NavLink>

        <NavLink to="/kontakt" className={navLinkClass}>
          Kontakt
        </NavLink>

      </nav>
    </header>
  );
}