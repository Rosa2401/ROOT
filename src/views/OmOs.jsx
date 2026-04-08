import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLIndhold";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";
import InfoxesVV from "../components/InfoboxesVV";
import HeroSectionSVG from "../components/HeroTwo";

export default function OmOs() {


    return (
    <div>
        <HeroSectionSVG
            title="Hvem er vi?"
            description="Her kan du få et indblik i, hvem vi er som virksomhed, 
            og hvordan vi arbejder som din kommende samarbejdspartner  - tag et kig længere nede."
        />  
        <div className="-mt-32">
            <InfoxesVV/>
        </div>
        <FiftyL {...FiftyLIndhold.laura} />
        <FiftyR {...FiftyRIndhold.sabrina} />
        <FiftyL {...FiftyLIndhold.rosa} />
        <FiftyR {...FiftyRIndhold.samarbejde} />
    </div>
    )
    
}

