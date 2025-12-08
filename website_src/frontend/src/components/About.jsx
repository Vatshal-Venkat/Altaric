import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import heroImg from "../assets/altaric_hero_image.png"; // your imported image

// ------------------------ STYLES ------------------------

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #000;
  color: #fff;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const AboutWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #cde7ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #d4d4d4;
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const AboutButton = styled(motion.a)`
  display: inline-flex;
  padding: 0.95rem 1.8rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 40px;
  background: linear-gradient(135deg, #ffffff22, #ffffff07);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: 0.4s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #ffffff33, #ffffff0a);
    transform: translateY(-4px);
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.92;
    transition: 0.6s ease;
  }

  &:hover img {
    opacity: 1;
    transform: scale(1.05);
  }

  /* Smooth holographic shimmer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255,255,255,0.07),
      transparent
    );
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

// ------------------------ COMPONENT ------------------------

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <AboutSection ref={ref}>
      <AboutWrapper>
        
        {/* LEFT TEXT */}
        <AboutText
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Pioneering the Future</h2>

          <p>
            Founded with a vision to revolutionize how businesses operate in the digital
            age, Altaric has become a trusted partner for organizations worldwide seeking
            to harness the power of artificial intelligence and digital transformation.
          </p>

          <p>
            Our mission is to empower businesses with innovative technology solutions
            that drive growth, efficiency, and competitive advantage in an ever-evolving
            digital landscape.
          </p>

          <AboutButton
            whileTap={{ scale: 0.97 }}
            href="/about-altaric"
          >
            Learn More About Us ➜
          </AboutButton>
        </AboutText>

        {/* RIGHT IMAGE */}
        <AboutImage
          style={{ y }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={heroImg} alt="Altaric AI Vision" />
        </AboutImage>

      </AboutWrapper>
    </AboutSection>
  );
};

export default About;
