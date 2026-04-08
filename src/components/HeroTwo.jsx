import HeroSVG from "../assets/hero91766D.svg";

export default function HeroSectionSVG() {
  return (
    <>
      <section className="absolute top-0 left-0 w-full h-screen z-0">
        <img
          src={HeroSVG}
          alt="Hero Graphic"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-[#442F2A] font-oleo text-9xl font-bold text-center">
  Cases
</h1>
          <p className="text-[#442F2A] text-lg text-center max-w-2xl font-semibold w-120">
            Vi har hjulpet flere vrksomheder med at skabe deres visuelle identitet, som afspejler hvem de er.
          </p>
        </div>
      </section>

      <div className="h-[85vh] -mt-20" />
    </>
  );
}