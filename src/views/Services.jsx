import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLIndhold";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";

export default function Services() {


    return (
       <div>
            <FiftyL {...FiftyLIndhold.altIEn}/>
            <FiftyR {...FiftyRIndhold.optimeretBrugerrejse}/>
            <FiftyL {...FiftyLIndhold.optimering}/>
        </div>
    )
    
}

