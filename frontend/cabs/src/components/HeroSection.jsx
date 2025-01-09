import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Car from "../images/car.png";

const HeroSection = () => {
  const carRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const car = carRef.current;
    const section = sectionRef.current;

    // Initial position (hide off screen)
    gsap.set(car, { x: -100, y: -100 });

    const moveFollower = (e) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      
      // Calculate mouse position relative to the section
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Prevent the car from leaving the section
      if (x > 0 && x < width && y > 0 && y < height) {
        gsap.to(car, {
          duration: 1.3,
          x: x - 40,  // Offset to center image
          y: y - 40,
          ease: "back.out(1.7)"
        });
      }
    };

    // Attach event listener to the section, not window
    section.addEventListener('mousemove', moveFollower);

    return () => {
      section.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[50vh] flex flex-col items-center justify-center text-white text-center bg-blue-950 bg-cover bg-center relative overflow-hidden"
    >
      <img
        ref={carRef}
        src={Car}
        alt="Car"
        className="h-20 pointer-events-none absolute top-0 left-0"
      />
      <h2 className="text-4xl font-bold">Affordable Cab Service</h2>
      <p className="text-lg mt-2">Your destination awaits!</p>
    </section>
  );
};

export default HeroSection;