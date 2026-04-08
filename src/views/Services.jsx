import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLIndhold";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";
import Animation from "../components/Animation";
import HeroSectionSVG from "../components/HeroTwo";

export default function Services() {


    return (
       <div>
        <HeroSectionSVG
                        title="Vores services"
                        description="Browse igennem vores pakke løsninger. 
                        Hvis der ikke er en pakke som passer til dig, så send os en e-mail, 
                        så skræddersyer vi et forløb, som passer til nøjagtigt til dig og din virksomheds behov."
        />   
            <FiftyL {...FiftyLIndhold.altIEn}/>
            <FiftyR {...FiftyRIndhold.optimeretBrugerrejse}/>
            <FiftyL {...FiftyLIndhold.optimering}/>
            <Animation />
        </div>
    )
    
}

