import Lottie from "lottie-react";
import animationData from "../assets/hero-forside-6.json";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Lottie Background */}
      <div className="absolute inset-0">
        <Lottie
  animationData={animationData}
  loop={false}
  autoplay={true}
  rendererSettings={{ preserveAspectRatio: "xMidYMid slice", progressiveLoad: true }}
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
      </div>
    </section>
  );
}