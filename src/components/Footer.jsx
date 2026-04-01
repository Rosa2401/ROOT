export default function Footer() {
    return (
      <footer className="bg-[#4A2E2A] text-[#F6ECE3] rounded-t-[80px] px-16 py-20">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          
          <div>
          <h2 className="text-6xl mb-8 -mt-8">ROOT</h2>
            <ul className="space-y-3 text-sm">
              <li>SØNDERHØJ 30</li>
              <li>8260 VIBY J</li>
              <li>CVR: 10101010</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-6 ">VI TILBYDER</h3>
            <ul className="space-y-3 text-sm">
              <li>ALT I ÉN</li>
              <li>OPTIMERING</li>
              <li>OPTIMERET BRUGERREJSE</li>
            </ul>
          </div>
  

        <div>
        <h3 className="text-2xl mb-6">MERE INFORMATION</h3>

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
            <h3 className="text-2xl mb-6 ">KONTAKT</h3>
            <p className="text-sm mb-2">+45 60 60 60 60</p>
            <p className="text-sm mb-6">INFO@ROOT.DK</p>
          </div>
  
        </div>
  
      </footer>
    );
  }