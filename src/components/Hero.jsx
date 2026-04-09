import Lottie from "lottie-react";
import animationData from "../assets/hero-forside-7.json";

export default function HeroSection() {
  return (
    <>
      <section className="absolute top-0 left-0 w-full h-screen z-0">
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

      {/* Spacer pushes the content below */}
      <div className="h-screen" />
    </>
  );
}