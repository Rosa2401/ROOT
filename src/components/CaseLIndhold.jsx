import webpIcon from "../assets/webp.svg";
import sitemapIcon from "../assets/sitemap.svg";
import svgIcon from "../assets/svg.svg";
import loadingIcon from "../assets/loading.svg";
import freelance from "../assets/freelancer-fotograf.webp";
import grafisk from "../assets/grafisk-design.webp";

const CaseLIndhold = {

freelancerFotograf: {
  title: "Freelancer fotograf",
  subtitle: "Optimeret brugerrejse",
  buttonText: "Se case",
  buttonLink: "/",
  image: freelance,
  imageAlt: "mockup af en fotograf hjemmeside",
  features: [
      {
        icon: webpIcon,
        text: "6,4 MB sparet",
      },
      {
        icon: sitemapIcon,
        text: "Fokus på sitemap",
      },
      {
        icon: loadingIcon,
        text: "25 % gns. hurtigere loadtime",
      },
    ],
},

grafiskDesigner: {
  title: "Grafisk designer",
  subtitle: "Alt i én",
  buttonText: "Se case",
  buttonLink: "/",
  image: grafisk,
  imageAlt: "mockup grafisk designers hjemmeside",
  features: [
      {
        icon: webpIcon,
        title: "WEBP",
        text: "12,4 MB sparet",
      },
      {
        icon: sitemapIcon,
        title: "Sitemap",
        text: "Fokus på sitemap",
      },
      {
        icon: svgIcon,
        title: "SVG",
        text: "Fokus på SVG filer",
      },
    ],
},

};
export default CaseLIndhold;