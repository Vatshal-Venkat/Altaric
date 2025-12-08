import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PageContainer = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const PageHero = styled.div`
  padding: 8rem 2rem 5rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #00373d, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
  }

  p {
    color: #9ff2ff;
    font-size: 1.2rem;
    max-width: 750px;
    margin: 0.6rem auto 0 auto;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.3rem;
    background: linear-gradient(45deg, #23dfff, #9ff2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .lead {
    color: #d4ffff;
    font-size: 1.1rem;
    max-width: 780px;
    margin-bottom: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #032326;
  border: 1px solid rgba(120, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #063d42;
    box-shadow: 0 20px 40px rgba(80, 255, 255, 0.2);
  }

  h3 {
    margin-bottom: 0.7rem;
  }
  p {
    color: #caffff;
  }
`;

const AISolutions = () => {
  return (
    <PageContainer>
      <PageHero>
        <h1>AI Solutions</h1>
        <p>Modular, production-ready AI components for enterprise deployment.</p>
      </PageHero>

      <Section>
        <h2>Our AI Solutions</h2>
        <p className="lead">
          Purpose-built systems covering vision, automation, document intelligence,
          and agent workflows.
        </p>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Vision Intelligence</h3>
            <p>
              Real-time tracking, image understanding, inspection workflows.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Document Intelligence</h3>
            <p>
              Extraction, summarization, retrieval, and classification frameworks.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Agents & Automation</h3>
            <p>
              Intelligent LLM-driven agents for CX, operations, and knowledge tasks.
            </p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2>Solution Benefits</h2>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Fast Deployment</h3>
            <p>Deploy in days, not months.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Flexible Architecture</h3>
            <p>Cloud, on-prem, hybrid — your choice.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Enterprise Security</h3>
            <p>Compliance-ready models with access governance.</p>
          </Card>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default AISolutions;
