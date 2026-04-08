import CaseLIndhold from "../components/CaseLindhold";
import CaseL from "../components/CaseL";
import CaseR from "../components/CaseR";
import CaseRIndhold from "../components/CaseRIndhold";
import HeroSectionSVG from "../components/HeroTwo";

export default function Cases() {

    return (
        <div>
            <HeroSectionSVG/>      
            <CaseL {...CaseLIndhold.freelancerFotograf}/>            
            <CaseR {...CaseRIndhold.ugcCreator}/>
            <CaseL {...CaseLIndhold.grafiskDesigner}/>
        </div>
    )

    
}