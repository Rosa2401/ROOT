import { Link } from "react-router-dom";

const FiftyL = ({
title,
paragraphs = [],
buttonText,
buttonLink,
image,
imageAlt = "",
price,
priceNote,
imageLink,
}) => {

  return (
    <section className="w-full py-16">
        <div className="grid items-center lg:grid-cols-2">
        
            {/* Billede venstre */}
            <div className="w-full pr-[5%]">
                <div className="lg:h-[520px] overflow-hidden rounded-r-[3rem] border border-[#4b342f]">
                    {image ? (
                    <Link to={imageLink} className="flex items-center justify-center w-full h-full">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="h-[60%] w-[60%] object-contain"
                    />
                    </Link>
                    ) : (
                    <div className="h-full w-full" />
                    )}
                </div>
            </div>

            {/* Tekst højre */}
            <div className="max-w-xl pl-[10%] text-[#4b342f]">
                {title && (
                <h2 className="font-oleo mb-4 text-4xl font-semibold">
                {title}
                </h2>
            )}

            <div className="space-y-4 text-sm leading-7 md:text-base">
                {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}
            </div>

            {(price || priceNote) && (
            <div className="mt-6">
                
                {/* ekskl. moms */}
                {priceNote && (
                <p className="font-oleo text-sm italic">
                    {priceNote}
                </p>
                )}

                {/* pris */}
                {price && (
                <p className="font-oleo text-4xl font-bold">
                    {price}
                </p>
                )}

            </div>
            )}

            {buttonText && buttonLink && (
                <a
                href={buttonLink}
                className="mt-8 inline-block bg-[#FFCFD5] text-[#442F2A] text-base px-16 py-2 rounded-xl border-1 border-[#442F2A] max-w-sm font-oleo uppercase transform hover:scale-105 hover:text-[#FFCFD5] hover:bg-[#442F2A] transition duration-300"
                >
                {buttonText}
                </a>
            )}
            </div>

        </div>
    </section>
  );
};

export default FiftyL;