import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroVideo from "../assets/videos/myVideo.mp4";

const HeroSection = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 82vh; // Changed from 85vh to 82vh
  overflow: hidden;
  // background: #C6C6EB;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
`;

// const AnimatedGradient = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
//   pointer-events: none;
//   background: radial-gradient(ellipse at 60% 40%, #fffbe6 0%, #C6C6EB 60%, #7C7CB2 100%);
//   opacity: 0.35;
//   animation: gradientMove 12s ease-in-out infinite alternate;

//   @keyframes gradientMove {
//     0% { background-position: 60% 40%; }
//     100% { background-position: 40% 60%; }
//   }
// `;

// const GlassOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(255,255,255,0.15);
//   backdrop-filter: blur(18px) saturate(1.2);
//   z-index: 2;
// `;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
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
  margin: 0 0.5rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  border: none;
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
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #18181b;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.04em;
  opacity: 0.85;
  pointer-events: none;
`;





const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // In the Hero component, update the scroll transformations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]); // Adjusted to match 82vh
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Animate width from 100vw to 70vw as you scroll down
  const width = useTransform(scrollYProgress, [0, 1], ["100vw", "72vw"]); // Slightly reduced from 75vw
  const margin = useTransform(scrollYProgress, [0, 1], ["0 auto", "0 auto"]); // always centered
  // Animate border-radius from 0 to 40px on bottom corners as it shrinks
  const borderRadius = useTransform(scrollYProgress, [0, 0.05], ["0px", "0px 0px 40px 40px"]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection ref={containerRef} id="hero" style={{ width, margin, borderRadius }}>
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.6)" // dims video for readability
        }}
      />

      {/* <AnimatedGradient /> */}
      {/* <FloatingElements>
        {[...Array(20)].map((_, i) => (
          <FloatingElement
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </FloatingElements>
      <FloatingShape
        style={{ width: 80, height: 80, top: '12%', left: '8%', background: '#fffbe6' }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FloatingShape
        style={{ width: 48, height: 48, top: '30%', left: '70%', background: '#7C7CB2' }}
        animate={{ y: [0, -20, 0], x: [0, -15, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <FloatingShape
        style={{ width: 36, height: 36, bottom: '18%', left: '18%', background: '#fbb13c' }}
        animate={{ y: [0, 25, 0], x: [0, 10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <FloatingShape
        style={{ width: 60, height: 60, bottom: '10%', right: '12%', background: '#C6C6EB' }}
        animate={{ y: [0, -30, 0], x: [0, -20, 0], rotate: [0, 90, 180] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <FloatingShape
        style={{ width: 24, height: 24, top: '55%', left: '50%', background: '#fffbe6', boxShadow: '0 0 16px 4px #fffbe6' }}
        animate={{ y: [0, -15, 0], x: [0, 8, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <FloatingShape
        style={{ width: 18, height: 18, top: '20%', right: '20%', background: '#fbb13c', boxShadow: '0 0 12px 2px #fbb13c' }}
        animate={{ y: [0, 10, 0], x: [0, -6, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      /> */}
      {/* <GlassOverlay /> */}

      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <HeroTitle
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          THE FUTURE OF
          <br />
          <span style={{ fontWeight: 700 }}>TECHNOLOGY</span>
        </HeroTitle>

        <HeroSubtitle
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Transforming businesses through cutting-edge AI solutions and digital innovation
        </HeroSubtitle>

        <HeroButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="interactive"
        >
          Explore More
        </HeroButton>
      </HeroContent>

      {/* <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        onClick={scrollToNext}
        className="interactive"
        style={{ pointerEvents: 'auto' }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </ScrollIndicator> */}
    </HeroSection>
  );
};

export default Hero; 