export default function ErrorInfo () {

    return (
        <div>
            <h1>404</h1>
            <p>Indholdet du leder efter er desværre ikke tilgængeligt</p>
            <a
                href={buttonLink}
                className="mt-8 inline-block bg-[#FFCFD5] text-[#442F2A] text-base px-16 py-2 rounded-xl border border-[#442F2A] max-w-sm font-oleo uppercase transform hover:scale-105 hover:text-[#FFCFD5] hover:bg-[#442F2A]">
                {buttonText}
                </a>
        </div>
    )
}