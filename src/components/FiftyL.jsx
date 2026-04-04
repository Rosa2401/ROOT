

const FiftyL = ({
  title,
  paragraphs = [],
  buttonText,
  buttonLink,
  image,
  imageAlt = "",
}) => {

  return (
    <section className="w-full py-16">
        <div className="grid items-center lg:grid-cols-2">
        
            {/* Billede venstre */}
            <div className="w-full pr-[5%]">
                <div className="lg:h-[520px] overflow-hidden rounded-r-[3rem] border border-[#4b342f]">
                    {image ? (
                    <img
                        src={image}
                        alt={imageAlt}
                        className="h-full w-full object-cover"
                    />
                    ) : (
                    <div className="h-full w-full" />
                    )}
                </div>
            </div>

            {/* Tekst højre */}
            <div className="max-w-xl pl-[10%] text-[#4b342f]">
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

            {buttonText && buttonLink && (
                <a
                href={buttonLink}
                className="font-oleo mt-6 inline-block rounded-full border border-[#4b342f] bg-[#efc4cf] px-6 py-2 text-xs font-semibold uppercase tracking-wide"
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