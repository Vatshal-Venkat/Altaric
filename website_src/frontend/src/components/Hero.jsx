import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroVideo from "../assets/videos/myVideo.mp4";

/* ============================================================
   STYLED COMPONENTS
   ============================================================ */

const HeroSection = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
    transform: scale(1.1); /* Helps with scroll shifting */
    filter: brightness(0.6);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: 
    linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.0) 70%)
    , radial-gradient(circle at 50% 20%, rgba(0,140,255,0.12), transparent 60%);
  z-index: 1;
`;

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 160px;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.9));
  z-index: 2;
`;

const ParticlesLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(0,255,255,0.4);
    border-radius: 50%;
    filter: blur(1px);
    animation: floatParticle 6s infinite ease-in-out;
  }

  @keyframes floatParticle {
    0% { transform: translateY(0) scale(1); opacity: 0.4; }
    50% { transform: translateY(-80px) scale(1.5); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.4; }
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
    top: 20%;
    left: -20%;
    width: 150%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
    filter: blur(6px);
    animation: sweep 6s linear infinite;
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
  max-width: 850px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 800;
  color: #f1f1f1;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.05;
  text-shadow:
    0 4px 24px rgba(255,255,255,0.18),
    0 0 50px rgba(0,255,255,0.15);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.35rem;
  opacity: 0.92;
  color: #e7e7e7;
  margin-bottom: 2.6rem;
  max-width: 760px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.35);
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #fbb13c, #ffcc66);
  color: #181818;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1.15rem 2.8rem;
  border-radius: 50px;
  box-shadow: 0 6px 24px rgba(255,200,80,0.25);
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-3px) scale(1.04);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  color: #fafafa;
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

  // Smooth transforms for scroll shrink animation
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Scroll to next section
  const scrollToNext = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection ref={containerRef} id="hero">
      {/* VIDEO */}
      <VideoWrapper>
        <video src={heroVideo} autoPlay muted loop playsInline />
      </VideoWrapper>

      {/* OVERLAY ELEMENTS */}
      <GradientOverlay />
      <BottomFade />
      <ParticlesLayer>
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </ParticlesLayer>
      <GlowLines />

      {/* CONTENT */}
      <HeroContent
        initial={{ opacity: 0, y: 40 }}
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

        <HeroButton whileTap={{ scale: 0.95 }}>
          Explore More
        </HeroButton>
      </HeroContent>

      {/* SCROLL ICON */}
      <ScrollIndicator
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
      >
        <ArrowDown size={26} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
