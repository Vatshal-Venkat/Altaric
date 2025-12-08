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
  padding: 8rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(180deg, #1f2a33, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
  }

  p {
    color: #d2e0ea;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    background: linear-gradient(45deg, #9baec1, #e5edf5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.3rem;
    font-weight: 600;
  }

  .lead {
    max-width: 780px;
    margin-bottom: 2.5rem;
    color: #cbd8e3;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #1a242c;
  border: 1px solid rgba(155, 174, 193, 0.2);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #25323d;
    box-shadow: 0 20px 40px rgba(120, 150, 170, 0.3);
  }

  h3 {
    margin-bottom: 0.7rem;
    font-weight: 600;
  }

  p {
    color: #dfe8ef;
  }
`;

const Careers = () => {
  return (
    <Page>
      <Hero>
        <h1>Careers at Altaric</h1>
        <p>Be part of a team building advanced AI systems for global enterprises.</p>
      </Hero>

      <Section>
        <h2>Open Roles</h2>
        <p className="lead">
          We’re looking for innovators, problem-solvers, and builders passionate about shaping the future of AI.
        </p>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Engineer</h3>
            <p>Develop end-to-end AI systems including ML, CV, NLP & LLM agents.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Frontend Engineer</h3>
            <p>Craft exceptional digital experiences using React, WebGL & modern UI systems.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Strategy Consultant</h3>
            <p>Guide enterprises through AI adoption, design, and transformation.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2>Work Culture</h2>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Innovation First</h3>
            <p>We encourage bold thinking and constant experimentation.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Collaboration</h3>
            <p>A supportive team environment fostering creativity and growth.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Career Growth</h3>
            <p>Personalized mentorship, training, and advancement opportunities.</p>
          </Card>
        </Grid>
      </Section>
    </Page>
  );
};

export default Careers;
