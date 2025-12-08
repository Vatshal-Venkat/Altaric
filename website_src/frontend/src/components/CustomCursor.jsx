import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const mainRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    let mouseX = -50;
    let mouseY = -50;

    let trailX = -50;
    let trailY = -50;

    let lastX = 0;
    let lastY = 0;

    const speedFactor = 0.12;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      lastX = mouseX;
      lastY = mouseY;

      // Smooth follow (LERP)
      trailX += (mouseX - trailX) * speedFactor;
      trailY += (mouseY - trailY) * speedFactor;

      // Main orb position
      if (mainRef.current) {
        mainRef.current.style.left = `${trailX}px`;
        mainRef.current.style.top = `${trailY}px`;

        // Speed-reactive glow (0 to 1)
        const intensity = Math.min(speed / 25, 1);

        mainRef.current.style.boxShadow = `
          0 0 ${10 + intensity * 10}px rgba(0,255,200,0.7),
          0 0 ${20 + intensity * 20}px rgba(0,255,200,0.4),
          0 0 ${35 + intensity * 30}px rgba(0,255,200,0.2)
        `;
      }

      // Glow orb follows slower
      if (glowRef.current) {
        glowRef.current.style.left = `${trailX}px`;
        glowRef.current.style.top = `${trailY}px`;
      }

      // Cyber dust particles
      particlesRef.current.forEach((p, i) => {
        const delay = (i + 1) * 0.04;
        p.style.left = `${trailX - dx * delay}px`;
        p.style.top = `${trailY - dy * delay}px`;
        p.style.opacity = 0.5 - i * 0.12;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="cursor-main" ref={mainRef}></div>
      <div className="cursor-glow" ref={glowRef}></div>

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="cursor-particle"
          ref={(el) => (particlesRef.current[i] = el)}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
