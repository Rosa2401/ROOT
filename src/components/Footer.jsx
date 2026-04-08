import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-[#442F2A] text-[#F6ECE3] rounded-t-[80px] px-12 py-18">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          
          <div>
          <Link to="/" className="inline-block">
            <h2 className="font-oleo text-6xl mb-8 -mt-8 cursor-pointer">ROOT</h2>
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
                <a href="/services" className="block hover:underline">ALT I ÉN</a>
            </li>
            <li>
                <a href="/services" className="block hover:underline">OPTIMERING</a>
            </li>
            <li>
                <a href="/services" className="block hover:underline">OPTIMERET BRUGERREJSE</a>
            </li>
          </ul>
          </div>
  

        <div>
        <h3 className="font-oleo text-2xl mb-6">OPLYSNINGER</h3>

            <ul className="space-y-3 text-sm">
            <li>
                <a href="/om-os" className="block hover:underline">OM OS</a>
            </li>
            <li>
                <a href="/cases" className="block hover:underline">CASES</a>
            </li>
            <li>
                <a href="/services" className="block hover:underline">SERVICES</a>
            </li>
            <li>
                <a href="/kontakt" className="block hover:underline">KONTAKT</a>
            </li>
            </ul>
        </div>
  
          <div>
            <h3 className=" font-oleo text-2xl mb-6 ">KONTAKT</h3>
            <p className="text-sm mb-2">+45 60 60 60 60</p>
            <p className="text-sm mb-4">INFO@ROOT.DK</p>
            
            <a href="https://www.linkedin.com">
              <img 
                src="src/assets/linkedin.svg" 
                alt="LinkedIn" 
                className="w-12 h-12"
              />
            </a>
          </div>
  
        </div>
  
      </footer>
    );
  }