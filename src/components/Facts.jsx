export default function Facts() {
    return (
      <section className="bg-[#F6ECE3] p-12 rounded-[40px] border border-[#442F2A] mx-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* VENSTRE STOR BOKS */}
          <div className="bg-[#442F2A] text-[#F6ECE3] rounded-[40px] p-10 flex flex-col justify-center">
            <h2 className="font-oleo text-3xl mb-10 ">
              Hvorfor er optimering vigtigt?
            </h2>
            <p className="text-md mb-4">
                At reducere datamængde, optimere billeder, vælge de rigtige formater og fjerne unødvendigt indhold handler ikke kun om at mindske klimaaftrykket. 
                Det gavner også dig og dine brugere. Det betyder kortere loadtider, mindre data der skal sendes frem og tilbage og en bedre brugeroplevelse.
            </p>

            <p className="text-md ">
                Samtidig bruger din hjemmeside mindre energi, hver gang den bliver besøgt. 
                Selv små ændringer kan derfor gøre en mærkbar forskel, både for brugeren og for klimaet.
            </p>
          </div>
  
          {/* HØJRE SIDE */}
          <div className="grid grid-cols-2 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-[#9C7F73] text-[#F6ECE3] rounded-[30px] p-6 text-center border border-[#442F2A]">
              <p className="text-md">
                100 MB svarer til det samme energiforbrug som 2–3 telefonopladninger.
              </p>
            </div>
  
            {/* CARD 2 */}
            <div className="bg-[#F6ECE3] text-[#442F2A] rounded-[30px] p-8 text-center border border-[#442F2A]">
              <p className="text-md">
                Du sparer typisk 50–80% ved at konvertere PNG → WebP.
              </p>
            </div>
  
            {/* CARD 3 */}
            <div className="bg-[#F6ECE3] text-[#442F2A] rounded-[30px] p-8 text-center border border-[#442F2A]">
              <p className="text-md">
                Vidste du, at farven blå bruger mere energi end andre farver?
              </p>
            </div>
  
            {/* CARD 4 */}
            <div className="bg-[#442F2A] text-[#F6ECE3] rounded-[30px] p-6 text-center border border-[#442F2A]">
              <p className="text-md">
                En besparelse på 100 MB kan gøre din hjemmeside op til 10–80 sek hurtigere.
              </p>
            </div>
  
            {/* CARD 5 */}
            <div className="col-span-2 bg-[#9C7F73] text-[#F6ECE3] rounded-[30px] p-6 text-center border border-[#442F2A]">
              <p className="text-md">
                Vidste du, at hvis internettet var et land, ville det ligge på en 6. plads over de mest forurenende lande?
              </p>
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }