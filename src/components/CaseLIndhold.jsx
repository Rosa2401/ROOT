import webpIcon from "../assets/webp.svg";
import sitemapIcon from "../assets/sitemap.svg";
import svgIcon from "../assets/svg.svg";
import loadingIcon from "../assets/loading.svg";

const CaseLIndhold = {

freelancerFotograf: {
  title: "Freelancer fotograf",
  subtitle: "Optimeret brugerrejse",
  buttonText: "Se case",
  buttonLink: "/",
  image: "/images/vores-tilgang.jpg",
  imageAlt: "Billede af en fotograf i aktion",
  features: [
      {
        icon: webpIcon,
        title: "WEBP",
        text: "6,4 MB sparet",
      },
      {
        icon: sitemapIcon,
        title: "Sitemap",
        text: "Fokus på sitemap",
      },
      {
        icon: loadingIcon,
        title: "Loading",
        text: "25 % gns. hurtigere loadtime",
      },
    ],
},

grafiskDesigner: {
  title: "Grafisk designer",
  subtitle: "Alt i én",
  buttonText: "Se case",
  buttonLink: "/",
  image: "/images/vores-tilgang.jpg",
  imageAlt: "Billede af en grafisk designer i aktion",
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