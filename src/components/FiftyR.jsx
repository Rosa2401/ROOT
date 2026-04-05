import { Link } from "react-router-dom";

const FiftyR = ({
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

            {/* Tekst højre */}
            <div className="w-full pl-[20%] pr-[5%] text-[#4b342f]">
                {title && (
                <h2 className="font-oleo mb-4 text-3xl font-semibold">
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
                className="font-oleo mt-6 inline-block rounded-full border border-[#4b342f] bg-[#efc4cf] px-6 py-2 text-lg font-semibold uppercase tracking-wide"
                >
                {buttonText}
                </a>
            )}
            </div>

            {/* Billede højre */}
            <div className="w-full pl-[5%]">
                <div className="lg:h-[520px] flex items-center justify-center overflow-hidden rounded-l-[3rem] border border-[#4b342f]">
                    {image ? (
                    <Link to={imageLink} className="flex items-center justify-center w-full h-full">  
                    <img
                        src={image}
                        alt={imageAlt}
                        className="h-[70%] w-[70%] object-contain"
                    />
                    </Link>  
                    ) : (
                    <div className="h-full w-full" />
                    )}
                </div>
            </div>

        </div>
    </section>
  );
};

export default FiftyR;