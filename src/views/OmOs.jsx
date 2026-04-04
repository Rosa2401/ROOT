import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLindhold";
import FiftyR from "../components/FiftyR";
import FiftyRindhold from "../components/FiftyRindhold";

export default function OmOs() {


    return (
    <main>
        <FiftyL {...FiftyLIndhold.laura} />
        <FiftyR {...FiftyRindhold.sabrina} />
        <FiftyL {...FiftyLIndhold.rosa} />
        <FiftyR {...FiftyRindhold.samarbejde} />
    </main>
    )
    
}

