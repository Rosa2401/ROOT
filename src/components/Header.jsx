import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logoLightBrown from "../assets/logoF6ECE3.svg";
import logoDarkBrown from "../assets/logo442F2A.svg";
import logoPink from "../assets/logoFFCFD5.svg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoVariant, setLogoVariant] = useState("default");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      setScrolled(scrollY > 5);
  

      const section = document.getElementById("tiltagbox");
      if (!section) return;
  
      const headerOffset = 100; 
  
      const start = section.offsetTop - headerOffset;
      const end = section.offsetTop + section.offsetHeight - headerOffset;
  
      if (scrollY >= start && scrollY <= end) {
        setLogoVariant("tiltagbox");
      } else {
        setLogoVariant("default");
      }
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
          
          <div className="relative group">
          {/* Normal logo */}
          <img
            src={logoVariant === "tiltagbox" ? logoLightBrown : logoDarkBrown}
            alt="Logo"
            className="h-10 w-auto transition duration-300 group-hover:opacity-0"
          />

          {/* Hover logo */}
          <img
            src={logoPink}
            alt="Logo"
            className="h-10 w-auto absolute top-0 left-0 opacity-0 transition duration-300 group-hover:opacity-100"
          />
        </div>

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