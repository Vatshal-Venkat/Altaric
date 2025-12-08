import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Page = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const Hero = styled.div`
  padding: 8rem 2rem 5rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #0f1928, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    background: linear-gradient(45deg, #aee9ff, #e4f8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    max-width: 780px;
    margin: 1rem auto 0;
    color: #c7def5;
    font-size: 1.2rem;
  }
`;

const Section = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.3rem;
    background: linear-gradient(45deg, #85d4ff, #c8f0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
  }

  ul {
    margin-top: 1.5rem;
    padding-left: 1.3rem;
    line-height: 1.7;
    color: #d8e8f7;
  }
`;

const IndustryTemplate = ({ title, description, points }) => {
  return (
    <Page>
      <Hero>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          {title}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          {description}
        </motion.p>
      </Hero>

      <Section>
        <h2>Key Solutions</h2>
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </Section>
    </Page>
  );
};

export default IndustryTemplate;
