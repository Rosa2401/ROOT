import FiftyL from "../components/FiftyL";
import FiftyLIndhold from "../components/FiftyLindhold";
import FiftyR from "../components/FiftyR";
import FiftyRindhold from "../components/FiftyRindhold";

export default function Services() {


    return (
       <div>
            <FiftyL {...FiftyLIndhold.altIEn}/>
            <FiftyR {...FiftyRindhold.optimeretBrugerrejse}/>
            <FiftyL {...FiftyLIndhold.optimering}/>
        </div>
    )
    
}

