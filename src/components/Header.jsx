import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-6 py-2 rounded-full transition ${
      isActive
        ? "border-2 border-[#FFCFD5] text-[#FFCFD5]"
        : "text-[#F6ECE3] hover:text-[#FFCFD5]"
    }`;

  return (
    <header className="w-full flex items-center justify-center sticky top-0 z-50 py-4">
      
      {/* Logo */}
      <div className="absolute left-6">
        <NavLink to="/" className="group relative">
          
          {/* Normal logo */}
          <img
            src="/src/assets/logo442F2A.svg"
            alt="Logo"
            className="h-10 w-auto transition duration-300 group-hover:opacity-0"
          />

          {/* Pink logo - hover */}
          <img
            src="/src/assets/logoFFCFD5.svg"
            alt="Logo"
            className="h-10 w-auto absolute top-0 left-0 opacity-0 transition duration-300 group-hover:opacity-100"
          />

        </NavLink>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-[#442F2A] w-[40%] max-w-xl rounded-full py-6 px-10 flex justify-around items-center text-lg font-semibold transition-all duration-300 ${
          scrolled ? "border border-[#F6ECE3]" : ""
        }`}
      >
        
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