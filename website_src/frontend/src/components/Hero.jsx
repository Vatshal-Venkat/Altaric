import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroVideo from "../assets/videos/myVideo.mp4";
import { Link } from "react-router-dom";

/* ============================================================
   STYLED COMPONENTS
   ============================================================ */

const HeroSection = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  overflow: hidden;

`;

const VideoWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    filter: brightness(0.55) contrast(1.15);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 80%),
    radial-gradient(circle at 50% 20%, rgba(0,153,255,0.15), transparent 70%);
  z-index: 1;
`;

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
  z-index: 3;
`;

const ParticlesLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;

  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(0,255,255,0.45);
    border-radius: 50%;
    filter: blur(1px);
    animation: floatParticle 7s infinite ease-in-out;
  }

  @keyframes floatParticle {
    0% { transform: translateY(0) scale(1); opacity: 0.35; }
    50% { transform: translateY(-90px) scale(1.6); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.35; }
  }
`;

const GlowLines = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 18%;
    left: -25%;
    width: 160%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent);
    filter: blur(8px);
    animation: sweep 7s linear infinite;
  }

  @keyframes sweep {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(50%); }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 5;
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  font-weight: 700;
  color: #eaf9ff;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  line-height: 1.03;
  text-transform: uppercase;

  text-shadow:
    0 6px 26px rgba(0,255,255,0.25),
    0 0 24px rgba(0,180,255,0.2),
    0 0 42px rgba(0,255,255,0.15);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.42rem;
  opacity: 0.95;
  color: #d4f1ff;
  margin-bottom: 3rem;
  max-width: 760px;
  letter-spacing: -0.01em;

  text-shadow: 0 3px 14px rgba(0,0,0,0.4);
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #fbb13c, #ffcf7b);
  color: #181818;
  font-weight: 700;
  font-size: 1.22rem;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  box-shadow: 0 8px 30px rgba(255,200,80,0.35);
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-4px) scale(1.05);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  color: #dffaff;
  cursor: pointer;
`;

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const scrollToNext = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection ref={containerRef} id="hero">
      
      <VideoWrapper>
        <video src={heroVideo} autoPlay muted loop playsInline />
      </VideoWrapper>

      <GradientOverlay />
      <BottomFade />

      <ParticlesLayer>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </ParticlesLayer>

      <GlowLines />

      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle style={{ opacity }}>
          THE FUTURE OF
          <br />
          TECHNOLOGY
        </HeroTitle>

        <HeroSubtitle style={{ opacity }}>
          Transforming businesses through cutting-edge AI solutions and digital innovation.
        </HeroSubtitle>

        <Link to="/about-altaric" style={{ textDecoration: "none", display: "inline-block" }}>
          <HeroButton whileTap={{ scale: 0.97 }}>
            Explore More
          </HeroButton>
        </Link>

      </HeroContent>

      <ScrollIndicator
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 2.3, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ArrowDown size={28} />
      </ScrollIndicator>

    </HeroSection>
  );
};

export default Hero;
