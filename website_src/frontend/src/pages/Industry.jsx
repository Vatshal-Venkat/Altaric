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
  width: 100%;
  padding: 8rem 2rem 5rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #0a0f2b, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
  }
  p {
    color: #cbd5ff;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0.5rem auto 0 auto;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #5fa8ff, #cfd8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    color: #ddd;
    font-size: 1.1rem;
    max-width: 780px;
    margin-bottom: 2.5rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #0d0f1a;
  border: 1px solid rgba(120, 150, 255, 0.15);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #121528;
    box-shadow: 0 20px 40px rgba(90, 120, 255, 0.2);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }

  p {
    color: #bfc6ff;
  }
`;

const Industries = () => {
  return (
    <PageContainer>
      <PageHero>
        <h1>Industries We Serve</h1>
        <p>AI solutions tailored for diverse industry challenges.</p>
      </PageHero>

      {/* SECTION 1 */}
      <Section>
        <h2>Industries</h2>
        <p className="lead">
          We empower organizations across key sectors to innovate using
          computer vision, machine learning, and automation systems.
        </p>

        <CardGrid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Healthcare</h3>
            <p>
              Imaging analytics, workflow automation, triage systems, reporting tools.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Manufacturing</h3>
            <p>Inspection automation, predictive maintenance, anomaly detection.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Finance & Banking</h3>
            <p>
              Fraud detection, document intelligence, risk scoring, workflow automation.
            </p>
          </Card>
        </CardGrid>
      </Section>

      {/* SECTION 2 */}
      <Section>
        <h2>Industry Advantages</h2>

        <CardGrid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Domain Expertise</h3>
            <p>Deep understanding of vertical-specific AI problem spaces.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Reliable Architecture</h3>
            <p>Robust ML pipelines with long-term scalability and accuracy.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Faster Deployment</h3>
            <p>Pre-built components and accelerators reduce development time.</p>
          </Card>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default Industries;
