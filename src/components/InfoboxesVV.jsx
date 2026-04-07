export default function InfoboxesVV() {
    return (
      <section className="bg-[#8B6F63] rounded-[50px] py-18 text-[#F6ECE3] max-w-7xl mx-auto px-8">
        
        <h2 className="font-oleo text-center text-5xl mb-24">
          Vores værdier
        </h2>
  
        <div className="flex gap-14 justify-center flex-wrap">
          
          {/* CARD 1 */}
          <div className="relative w-[320px]">
            
            {/* IKON */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#F6ECE3] rounded-full flex items-center justify-center">
              <img 
                src="src/assets/omtanke2.svg" 
                alt="Omtanke ikon"
              />
            </div>
  
            <div className="bg-[#4B2E2A] rounded-[40px] px-8 pt-20 pb-10 text-center flex flex-col min-h-[500px]">
              
              <h3 className="font-oleo text-2xl mb-3">
                Design med omtanke
              </h3>
  
              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>
  
              <p className="mb-6 text-sm">
                Vi tænker fremad og skaber løsninger, der holder. Med effektivt design
                og optimerede medier gør vi det nemt at reducere klimaaftryk.
              </p>
  
              <ul className="text-ml space-y-2 mt-8">
                <li>• Langsigtede løsninger</li>
                <li>• Effektivt design</li>
                <li>• Optimerede medier</li>
              </ul>
  
            </div>
          </div>
  
          {/* CARD 2 */}
          <div className="relative w-[320px]">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#F6ECE3] rounded-full flex items-center justify-center">
              <img 
                src="src/assets/kreativt2.svg" 
                alt="Kreativitet ikon"
              />
            </div>
  
            <div className="bg-[#4B2E2A] rounded-[40px] px-8 pt-20 pb-10 text-center flex flex-col min-h-[500px]">
              
              <h3 className="font-oleo text-2xl mb-3">
                Kreativitet uden grænser
              </h3>
  
              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>
  
              <p className="mb-6 text-sm">
                Vi forstår hvor vigtigt dit visuelle udtryk er. Derfor går vi ikke på kompromis
                med dit design, men finder nye løsninger som giver mening for dig.
              </p>
  
              <ul className="text-ml space-y-2 mt-8">
                <li>• Kreativ frihed</li>
                <li>• Visuel identitet i fokus</li>
                <li>• Ingen kompromiser</li>
              </ul>
  
            </div>
          </div>
  
          {/* CARD 3 */}
          <div className="relative w-[320px]">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#F6ECE3] rounded-full flex items-center justify-center">
              <img 
                src="src/assets/effektivt2.svg" 
                alt="Effektiv ikon"
              />
            </div>
  
            <div className="bg-[#4B2E2A] rounded-[40px] px-8 pt-20 pb-10 text-center flex flex-col min-h-[500px]">
              
              <h3 className="font-oleo text-2xl mb-3">
                Enkelt og effektivt
              </h3>
  
              <div className="w-60 h-[1px] bg-[#F6ECE3] mx-auto mb-6"></div>
  
              <p className="mb-6 text-sm">
                Vi gør det nemt at forstå, hvad der kan forbedres, og hvad du får ud af det.
                Ingen tunge forklaringer, kun klare løsninger.
              </p>
  
              <ul className="text-ml space-y-2 mt-8">
                <li>• Let at forstå</li>
                <li>• Klare løsninger</li>
                <li>• Hurtigt overblik</li>
              </ul>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }