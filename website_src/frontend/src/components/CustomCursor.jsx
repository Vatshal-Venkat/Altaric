import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const mainRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;

    let trailX = -100;
    let trailY = -100;

    const speedFactor = 0.15;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHover = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, label, [role='button'], [onclick], .clickable"
      );
      if (target && mainRef.current) {
        mainRef.current.classList.add("cursor-hover");
      }
    };

    const handleLeave = () => {
      if (mainRef.current) {
        mainRef.current.classList.remove("cursor-hover");
      }
    };

    const handleDown = () => {
      if (mainRef.current) {
        mainRef.current.classList.add("cursor-click");
      }
    };

    const handleUp = () => {
      if (mainRef.current) {
        mainRef.current.classList.remove("cursor-click");
      }
    };

    const animate = () => {
      trailX += (mouseX - trailX) * speedFactor;
      trailY += (mouseY - trailY) * speedFactor;

      if (mainRef.current) {
        mainRef.current.style.left = `${trailX}px`;
        mainRef.current.style.top = `${trailY}px`;
      }

      if (glowRef.current) {
        glowRef.current.style.left = `${trailX}px`;
        glowRef.current.style.top = `${trailY}px`;
      }

      particlesRef.current.forEach((p, i) => {
        const delay = (i + 1) * 0.05;
        p.style.left = `${trailX}px`;
        p.style.top = `${trailY}px`;
        p.style.opacity = 0.5 - i * 0.12;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
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
