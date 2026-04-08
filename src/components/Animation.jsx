import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import factsAnimation from "../assets/facts.json";

const FactsAnimation = () => {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && lottieRef.current) {
        lottieRef.current.play();
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full mb-32">
      <div className="flex justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={factsAnimation}
          autoplay={false}
          loop={false}
        />
      </div>
    </section>
  );
};

export default FactsAnimation;