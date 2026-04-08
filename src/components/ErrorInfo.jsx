import { Link } from "react-router-dom";

export default function ErrorInfo () {

    return (
        <div className="flex flex-col items-center justify-center my-44">
            <h1 className="text-9xl font-oleo text-[#442F2A]">404</h1>
            <p className="text-6xl font-oleo text-[#442F2A] text-center">Indholdet du leder efter er desværre <br /> ikke tilgængeligt</p>
            <a
                href="/"
                className="mt-8 inline-block bg-[#FFCFD5] text-[#442F2A] text-base px-20 py-2 rounded-xl border border-[#442F2A] max-w-sm font-oleo uppercase transform hover:scale-105 hover:text-[#FFCFD5] hover:bg-[#442F2A] transition duration-300"
                >
                Gå til forsiden
            </a>
        </div>
    )
}