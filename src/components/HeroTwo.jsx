import HeroSVG from "../assets/hero91766D.svg";

export default function HeroSectionSVG({ title, description }) {
  return (
    <>
      <section className="absolute top-0 left-0 w-full h-screen z-0">
        {/* Hero Image */}
        <img
          src={HeroSVG}
          alt="Hero Graphic"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Centered Text with Sheer Box */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="bg-[#F6ECE3]/50 px-8 py-6 rounded-xl">
            <h1 className="text-[#442F2A] font-oleo text-9xl font-bold text-center tracking-wide">
              {title}
            </h1>
            <p className="text-[#442F2A] text-lg text-center max-w-md mx-auto font-semibold mt-4">
              {description}
            </p>
          </div>
        </div>
      </section>

      <div className="h-[85vh] -mt-20" />
    </>
  );
}