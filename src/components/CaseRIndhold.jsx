import webpIcon from "../assets/webp.svg";
import loadingIcon from "../assets/loading.svg";
import hostIcon from "../assets/host.svg";
import ugc from "../assets/ugc-creator.webp";

const CaseRIndhold = {

ugcCreator: {
  title: "UGC Creator",
  subtitle: "Optimering",
  buttonText: "Se case",
  buttonLink: "/cases",
  image: ugc,
  imageAlt: "mockup af en UGC creators hjemmeside",
  features: [
      {
        icon: webpIcon,
        text: "13 MB sparet",
      },
      {
        icon: loadingIcon,
        text: "31 % gns. hurtigere loadtime",
      },
      {
        icon: hostIcon,
        text: "Optimeret hosting drift",
      },
    ],
},

};
export default CaseRIndhold;