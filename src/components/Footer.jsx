import { Link } from "react-router-dom";
import logoPink from "../assets/logoFFCFD5.svg";
import logoLightBrown from "../assets/logoF6ECE3.svg";
import linkedIn from "../assets/linkedin.svg";
import linkedInPink from "../assets/linkedinpink.svg";

export default function Footer() {
    return (
      <footer className="bg-[#442F2A] text-[#F6ECE3] rounded-t-[80px] px-12 py-18">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">

        <div>
  <Link to="/" className="inline-block mb-8 -mt-8">
    
    <div className="relative group w-fit">
      
      {/* Hvidt logo */}
      <img
        src={logoLightBrown}
        alt="ROOT logo"
        className="h-16 w-auto transition duration-400 group-hover:opacity-0"
      />

      {/* Pink logo */}
      <img
        src={logoPink}
        alt="ROOT logo"
        className="h-16 w-auto absolute inset-0 opacity-0 transition duration-400 group-hover:opacity-100"
      />

    </div>

  </Link>

  <ul className="space-y-3 text-sm">
    <li>SØNDERHØJ 30</li>
    <li>8260 VIBY J</li>
    <li>CVR: 10101010</li>
  </ul>
</div>

          <div>
            <h3 className="font-oleo text-2xl mb-6 ">VI TILBYDER</h3>
            <ul className="space-y-3 text-sm">
            <li>
                <Link to="/services" className="block hover:text-[#FFCFD5]">ALT I ÉN</Link>
            </li>
            <li>
                <Link to="/services" className="block hover:text-[#FFCFD5]">OPTIMERING</Link>
            </li>
            <li>
                <Link to="/services" className="block hover:text-[#FFCFD5]">OPTIMERET BRUGERREJSE</Link>
            </li>
          </ul>
          </div>
  

        <div>
        <h3 className="font-oleo text-2xl mb-6">OPLYSNINGER</h3>

            <ul className="space-y-3 text-sm">
            <li>
                <Link to="/om-os" className="block hover:text-[#FFCFD5]">OM OS</Link>
            </li>
            <li>
                <Link to="/cases" className="block hover:text-[#FFCFD5]">CASES</Link>
            </li>
            <li>
                <Link to="/services" className="block hover:text-[#FFCFD5]">SERVICES</Link>
            </li>
            <li>
                <Link to="/kontakt" className="block hover:text-[#FFCFD5]">KONTAKT</Link>
            </li>
            </ul>
        </div>
  
          <div>
            <h3 className=" font-oleo text-2xl mb-6 ">KONTAKT</h3>
            <p className="text-sm mb-2">+45 60 60 60 60</p>
            <p className="text-sm mb-4">INFO@ROOT.DK</p>
            
            
            <a href="https://www.linkedin.com" className="relative group inline-block w-12 h-12">
              <img 
                src={linkedIn} 
                alt="LinkedIn" 
                className="absolute inset-0 w-full h-full object-contain transition duration-300 group-hover:opacity-0"
              />

              <img 
                src={linkedInPink} 
                alt="LinkedInPink" 
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition duration-300 group-hover:opacity-100"
              />
            </a>
          </div>
  
        </div>
  
      </footer>
    );
  }