import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLIndhold";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";
import InfoxesVV from "../components/InfoboxesVV";

export default function OmOs() {


    return (
    <main>
        <InfoxesVV/>
        <FiftyL {...FiftyLIndhold.laura} />
        <FiftyR {...FiftyRIndhold.sabrina} />
        <FiftyL {...FiftyLIndhold.rosa} />
        <FiftyR {...FiftyRIndhold.samarbejde} />
    </main>
    )
    
}

