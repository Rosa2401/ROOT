const CaseL = ({
  title,
  subtitle,
  features = [],
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
          <div className="flex h-[420px] w-[200%] items-center overflow-hidden rounded-r-[3rem] border border-[#4b342f] lg:h-[520px]">
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className="max-h-[60%] max-w-[60%] object-contain ml-[10%]"
              />
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </div>

        {/* Tekst højre */}
        <div className="w-full pl-[10%] pr-[10%] text-[#442F2A]">
          <div className="max-w-[520px]">
            
            {/* Titel */}
            {title && (
              <h2 className="font-oleo mb-4 text-4xl font-semibold">
                {title}
              </h2>
            )}

            {/* Subtitle */}
            {subtitle && (
              <h2 className="font-oleo mb-4 text-4xl font-semibold">
                {subtitle}
              </h2>
            )}

            {/* Features */}
            {features.length > 0 && (
              <div className="mt-16 mb-3 grid grid-cols-3 gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    
                    {feature.icon && (
                      <img
                        src={feature.icon}
                        alt={feature.iconAlt || ""}
                        className="mb-3 h-[64px] w-[64px] object-contain"
                      />
                    )}

                    {feature.text && (
                      <p className="mt-2 text-lg font-sans leading-snug">
                        {feature.text}
                      </p>
                    )}

                  </div>
                ))}
              </div>
            )}

            {/* Button */}
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

      </div>
    </section>
  );
};

export default CaseL;