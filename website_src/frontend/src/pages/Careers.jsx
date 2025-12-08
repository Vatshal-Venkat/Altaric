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
  background: linear-gradient(180deg, #4f2500, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
  }
  p {
    color: #ffd6a1;
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    background: linear-gradient(45deg, #ff9f33, #ffd59c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.3rem;
  }

  .lead {
    max-width: 780px;
    margin-bottom: 2.5rem;
    color: #ffdcba;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #2a1400;
  border: 1px solid rgba(255, 190, 120, 0.2);
  padding: 2rem;
  border-radius: 18px;

  &:hover {
    transform: translateY(-8px);
    background: #3a1a00;
    box-shadow: 0 20px 40px rgba(255, 150, 90, 0.35);
  }

  h3 {
    margin-bottom: 0.7rem;
  }
  p {
    color: #ffd8b8;
  }
`;

const Careers = () => {
  return (
    <Page>
      <Hero>
        <h1>Careers at Altaric</h1>
        <p>Join a team building meaningful AI solutions.</p>
      </Hero>

      <Section>
        <h2>Open Roles</h2>
        <p className="lead">
          Work with AI engineers, researchers, and strategists creating real-world impact.
        </p>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Engineer</h3>
            <p>Build ML, CV, NLP, and agent solutions.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Frontend Engineer</h3>
            <p>Create next-gen UIs with React, WebGL, and 3D experiences.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Strategy Consultant</h3>
            <p>Guide enterprises through AI adoption and transformation.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2>Work Culture</h2>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Innovation First</h3>
            <p>We value experimentation and bold thinking.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Collaborative</h3>
            <p>We work as one high-performing team.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Career Growth</h3>
            <p>Mentorship and opportunities to grow fast.</p>
          </Card>
        </Grid>
      </Section>
    </Page>
  );
};

export default Careers;
