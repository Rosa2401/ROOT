import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formular from "../components/Formular";
import Facts from "../components/Facts";

export default function Kontakt() {
    return (
      <div>
        <Facts />
        <Formular />
      </div>
    );
  }
