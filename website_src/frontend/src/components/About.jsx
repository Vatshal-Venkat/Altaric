import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

import altaricHero from "../assets/altaric_hero_Image.png";

/* =======================
   Styled Components
======================= */

const Section = styled.section`
  padding: 6rem 2rem;
  background: radial-gradient(circle at top, #041014, #000);
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled(motion.div)`
  h2 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    background: linear-gradient(90deg, #00eaff, #8cfbff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 1.4rem;
    font-size: 1.15rem;
    color: #c7d2da;
    line-height: 1.7;
  }
`;

const CTA = styled(motion.div)`
  margin-top: 2.2rem;
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  border: 1px solid #00eaff;
  color: #00eaff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 22px rgba(0, 234, 255, 0.25);

  &:hover {
    background: #00eaff;
    color: #000;
  }
`;

const Visual = styled(motion.div)`
  border-radius: 20px;
  border: 1px solid rgba(0, 234, 255, 0.25);
  background: linear-gradient(135deg, rgba(0, 234, 255, 0.08), transparent);
  box-shadow: inset 0 0 60px rgba(0, 234, 255, 0.15);
  height: 320px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
  }
`;

/* =======================
   Component
======================= */

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Section ref={ref}>
      <Wrapper>
        <Text
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2>Engineering the Future of AI</h2>
          <p>
            Altaric is an AI-first technology company focused on building
            production-grade intelligent systems — from enterprise LLM platforms
            to real-time computer vision and automation.
          </p>
          <p>
            We bridge deep engineering with business strategy to turn AI into
            real operational advantage.
          </p>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <CTA whileTap={{ scale: 0.96 }}>Learn More →</CTA>
          </Link>
        </Text>

        <Visual
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.img
            src={altaricHero}
            alt="Altaric AI Core Visualization"
            initial={{ scale: 1.05 }}
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Visual>
      </Wrapper>
    </Section>
  );
};

export default About;
