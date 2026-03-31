export default function Formular() {
    return (
      <div className="bg-[#91766D] rounded-3xl p-12 max-w-4xl w-full">
        
        <h2 className="text-4xl text-center mb-2 font-oleo">
          Kontakt
        </h2>
  
        <p className="text-center mb-10 text-sm">
          Udfyld formularen nedenfor, så kontakter vi dig hurtigst muligt.
        </p>
  
        <form className="grid grid-cols-2 gap-6">
          
          <div>
            <label className="block mb-2">Dit fulde navn:</label>
            <input
              type="text"
              placeholder="Dit fulde navn"
              className="w-full p-3 rounded-lg bg-[#F6ECE3] text-black"
            />
          </div>
  
          <div>
            <label className="block mb-2">Dit telefonnummer:</label>
            <input
              type="text"
              placeholder="Dit telefonnummer"
              className="w-full p-3 rounded-lg bg-[#F6ECE3] text-black"
            />
          </div>
  
          <div>
            <label className="block mb-2">E-mail:</label>
            <input
              type="email"
              placeholder="Din E-mail"
              className="w-full p-3 rounded-lg bg-[#F6ECE3] text-black"
            />
          </div>
  
          <div>
            <label className="block mb-2">Virksomhedsnavn:</label>
            <input
              type="text"
              placeholder="Navn på virksomhed - udfyldes hvis nødvendigt"
              className="w-full p-3 rounded-lg bg-[#F6ECE3] text-black"
            />
          </div>
  
          <div className="col-span-2">
            <label className="block mb-2">Besked:</label>
            <textarea
              placeholder="Fortæl gerne nærmere, hvad du ønsker hjælp med."
              className="w-full p-3 rounded-lg bg-[#F6ECE3] text-black h-32"
            />
          </div>
  
        </form>
      </div>
    );
  }