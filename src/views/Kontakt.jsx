import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formular from "../components/Formular";
import Facts from "../components/Facts";
import FiftyR from "../components/FiftyR";
import FiftyRindhold from "../components/FiftyRindhold";

export default function Kontakt() {
    return (
      <div>
        <FiftyR {...FiftyRindhold.uforpligtende} />
        <Facts />
        <Formular />
      </div>
    );
  }
