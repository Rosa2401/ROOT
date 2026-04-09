export default function Formular() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 mb-36">
      
      <div className="bg-[#91766D] rounded-3xl p-12 max-w-6xl w-full">
        
        <h2 className="font-oleo text-6xl text-center mb-6 text-[#F6ECE3]">
          Kontakt
        </h2>

        <p className="text-center mb-10 text-[#F6ECE3]">
          Udfyld formularen nedenfor, så kontakter vi dig hurtigst muligt.
        </p>

        <form className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-[#F6ECE3]">Dit fulde navn:</label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Dit fulde navn"
              required
              className="w-full p-3 rounded-lg bg-[#F6ECE3]"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#F6ECE3]">Dit telefonnummer:</label>
            <input
             type="tel"
             name="phone"
             autoComplete="tel"
             placeholder="Dit telefonnummer"
             required
              className="w-full p-3 rounded-lg bg-[#F6ECE3]"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#F6ECE3]">E-mail:</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="E-mail"
              required
              className="w-full p-3 rounded-lg bg-[#F6ECE3]"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#F6ECE3]">Virksomhedsnavn:</label>
            <input
              type="text"
              placeholder="Navn på virksomhed - udfyldes hvis nødvendigt"
              className="w-full p-3 rounded-lg bg-[#F6ECE3]"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-[#F6ECE3]">Besked:</label>
            <textarea
              placeholder="Fortæl gerne nærmere, hvad du ønsker hjælp med."
              required
              className="w-full p-3 rounded-lg bg-[#F6ECE3] h-32"/>
          </div>

          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
                className="mt-8 inline-block bg-[#FFCFD5] text-[#442F2A] text-base px-20 py-2 rounded-xl border-1 border-[#442F2A] max-w-sm font-oleo uppercase transform hover:scale-105 hover:text-[#FFCFD5] hover:bg-[#442F2A] transition duration-300">
              Send besked
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}