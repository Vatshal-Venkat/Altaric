import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroVideo from "../assets/videos/myVideo.mp4";

const HeroSection = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 82vh;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  padding-top: 5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  color: #E5E5E5;
  margin-bottom: 1.2rem;
  letter-spacing: -0.03em;
  line-height: 1.08;
  text-shadow: 0 2px 16px rgba(255,255,255,0.18);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.35rem;
  color: rgba(244, 244, 244, 0.86);
  margin-bottom: 2.5rem;
  max-width: 700px;
  text-shadow: 0 1px 8px rgba(255,255,255,0.12);
`;

const HeroButton = styled(motion.a)`
  display: inline-block;
  background: #fbb13c;
  color: #18181b;
  font-weight: 700;
  font-size: 1.15rem;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 24px rgba(251, 177, 60, 0.13);
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #18181b;
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 2.5rem;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  pointer-events: none;
`;

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const width = useTransform(scrollYProgress, [0, 1], ["100vw", "72vw"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.05], ["0px", "0px 0px 40px 40px"]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection
      ref={containerRef}
      id="hero"
      style={{ width, borderRadius }}
    >
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.6)"
        }}
      />

      {/* HERO CONTENT */}
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <HeroTitle
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          THE FUTURE OF
          <br />
          <span style={{ fontWeight: 700 }}>TECHNOLOGY</span>
        </HeroTitle>

        <HeroSubtitle
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Transforming businesses through cutting-edge AI solutions and digital innovation.
        </HeroSubtitle>

        <HeroButton whileTap={{ scale: 0.95 }}>
          Explore More
        </HeroButton>
      </HeroContent>

      {/* Scroll Indicator */}
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        onClick={scrollToNext}
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
