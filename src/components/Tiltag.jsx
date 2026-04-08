import formindskningIcon from "../assets/formindskning-f6ece3.svg";
import svgIcon from "../assets/svg-2-f6ece3.svg";
import kreativIcon from "../assets/kreativ-forside-f6ece3.svg";
import sitemapIcon from "../assets/sitemap-f6ece3.svg";

const tiltag = [
  {
    svg: <img src={formindskningIcon} alt="Formindskning piktogram" className="w-50 h-50" />,
    text: "Vi komprimerer billeder, så de fylder mindre uden at miste kvalitet. Resultatet er, at din hjemmeside loader hurtigere og bruger mindre data."
  },    
  {
    svg: <img src={svgIcon} alt="SVG piktogram" className="w-50 h-50" />,
    text: "Vi bruger de rigtige filformater, som SVG og PNG, så grafik står skarpt og samtidig holder datamængden nede."
  },
  {
    svg: <img src={kreativIcon} alt="Kreativ piktogram" className="w-50 h-50" />,
    text: "Vi arbejder med en gennemtænkt farvepalette, der skaber et klart udtryk og sikrer en god visuel oplevelse uden unødvendig kompleksitet."
  },
  {
    svg: <img src={sitemapIcon} alt="Sitemap piktogram" className="w-50 h-50" />,
    text: "Vi opbygger et klart sitemap, så din hjemmeside er nem at navigere i og indholdet er struktureret på en overskuelig måde."
  },
];

export default function TiltagBox() {
  return (
    <section id="tiltagbox" className="bg-[#442F2A] text-[#F6ECE3] py-16 px-6">
      <h2 className="font-oleo mb-4 text-4xl font-semibold text-center pb-10">
        Hvad gør vi anderledes?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {tiltag.map((tiltag, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2">
            <div className="pb-10">{tiltag.svg}</div>
            <p className="text-md font-sans">{tiltag.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
