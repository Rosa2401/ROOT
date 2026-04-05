import Formular from "../components/Formular";
import Facts from "../components/Facts";
import FiftyR from "../components/FiftyR";
import FiftyRIndhold from "../components/FiftyRIndhold";

export default function Kontakt() {
    return (
      <div>
        <FiftyR {...FiftyRIndhold.uforpligtende} />
        <Facts />
        <Formular />
      </div>
    );
  }
