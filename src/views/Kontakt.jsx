import Formular from "../components/Formular";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";
import HeroSectionSVG from "../components/HeroTwo";

export default function Kontakt() {
    return (
      <div>
        <HeroSectionSVG
                        title="Skal vi hjælpe dig?"
                        description="Vi står klar til at hjælpe dig med at skabe en 
                        løsning, der både fungerer og ser godt ud. Fortæl os om dit 
                        projekt, så finder vi den bedste vej frem sammen."
        />    
        <FiftyR {...FiftyRIndhold.uforpligtende} />
        <Formular />
      </div>
    );
  }
