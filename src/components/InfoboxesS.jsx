import { Link } from "react-router-dom";

export default function InfoboxesS() {
  return (
    <section className="bg-[#8B6F63] rounded-[50px] py-20 text-[#F6ECE3] max-w-7xl mx-auto px-8">
      
      <h2 className="font-oleo text-center text-5xl mb-16">
        Services
      </h2>

      <div className="flex gap-14 justify-center flex-wrap">
        
        {/* CARD 1 */}
        <Link 
          to="/services" 
          className="block w-[320px]"
        >
          <div className="bg-[#442F2A] rounded-[40px] px-8 py-10 text-center flex flex-col h-full transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
            
            <div className="flex flex-col flex-grow">
              <h3 className="font-oleo text-2xl mb-3">
                Optimering
              </h3>

              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>

              <p className="mb-6 text-md">
                Har du allerede en hjemmeside, men ønsker et hurtigere page load
                eller hjælp til at mindske dit klimaaftryk?
              </p>

              <ul className="mb-8 text-md space-y-2">
                <li>Optimerede billeder</li>
                <li>Hjælp til farver</li>
                <li>Hjælp til valg af skrifttyper</li>
                <li>Video/animationer</li>
              </ul>
              
              <p className="text-md mt-auto mb-6">
                Vi hjælper med at optimere din eksisterende hjemmeside, 
                så den passer til dine behov, men med en optimeret oplevelse.
              </p>
            </div>

            <div>
              <p className="font-oleo text-base">Pris</p>
              <p className="font-oleo text-2xl">Fra 4.995,-</p>
              <p className="font-oleo text-base mt-1">ekskl. moms</p>
            </div>
          </div>
        </Link>

        {/* CARD 2 */}
        <Link to="/services" className="block w-[320px]">
          <div className="bg-[#442F2A] rounded-[40px] px-8 py-10 text-center flex flex-col h-full transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
            
            <div className="flex flex-col flex-grow">
              <h3 className="font-oleo text-2xl mb-3">
                Optimeret brugerrejse
              </h3>

              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>

              <p className="mb-6 text-md">
                Er du i tvivl om din hjemmeside rammer dine brugere, og giver en god brugeroplevelse?
              </p>

              <ul className="mb-8 text-md space-y-2">
                <li>Klare budskaber</li>
                <li>Testet sitemap</li>
                <li>Mobile-first</li>
                <li>Lazy load</li>
                <li>Visuelt hierarki</li>
                <li>Intet unødvendigt indhold</li>
              </ul>

              <p className="text-md mt-auto mb-6">
                Vi hjælper med at optimere brugerrejsen på din hjemmeside, 
                så dine brugere bliver efterladt med en positiv oplevelse.
              </p>
            </div>

            <div>
              <p className="font-oleo text-base">Pris</p>
              <p className="font-oleo text-2xl">Fra 7.995,-</p>
              <p className="font-oleo text-base mt-1">ekskl. moms</p>
            </div>
          </div>
        </Link>

        {/* CARD 3 */}
        <Link to="/services" className="block w-[320px]">
          <div className="bg-[#442F2A] rounded-[40px] px-8 py-10 text-center flex flex-col h-full transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer">
            
            <div className="flex flex-col flex-grow">
              <h3 className="font-oleo text-2xl mb-3">
                Alt i én
              </h3>

              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>

              <p className="mb-6 text-md">
                Mangler du en hjemmeside, som både tænker på en god brugeroplevelse,
                men også med omtanke for miljøet?
              </p>

              <ul className="mb-8 text-md space-y-2">
                <li>Sitemap</li>
                <li>Visuel identitet</li>
                <li>Optimeret indhold</li>
                <li>Mindre klimaaftryk</li>
                <li>Valg af hosting</li>
              </ul>

              <p className="text-md mt-auto mb-6">
                Vi hjælper med at bygge din hjemmeside, så den passer til din virksomheds behov. 
                Så hjælper vi dig hele vejen.
              </p>
            </div>

            <div>
              <p className="font-oleo text-base">Pris</p>
              <p className="font-oleo text-2xl">Fra 14.995,-</p>
              <p className="font-oleo text-base mt-1">ekskl. moms</p>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}