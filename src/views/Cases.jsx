import CaseLIndhold from "../components/CaseLindhold";
import CaseL from "../components/CaseL";
import CaseR from "../components/CaseR";
import CaseRIndhold from "../components/CaseRIndhold";

export default function Cases() {

    return (
        <div>
            <CaseL {...CaseLIndhold.freelancerFotograf}/>
            <CaseR {...CaseRIndhold.ugcCreator}/>
            <CaseL {...CaseLIndhold.grafiskDesigner}/>
        </div>
    )

    
}