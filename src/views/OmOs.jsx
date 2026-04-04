import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLindhold";

export default function OmOs() {


    return (
       <main>
      <FiftyL {...FiftyLIndhold.laura} />
      <FiftyL {...FiftyLIndhold.rosa} />
    </main>
    )
    
}

