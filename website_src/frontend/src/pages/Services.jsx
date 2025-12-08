import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

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
  background: linear-gradient(180deg, #0d0d0d, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
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
    background: linear-gradient(45deg, #fff, #bbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    color: #ddd;
    font-size: 1.1rem;
    max-width: 820px;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);

  &:hover {
    transform: translateY(-8px);
    background: #151515;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }

  p {
    color: #bdbdbd;
    line-height: 1.5;
  }
`;

// ---------------------- COMPONENT ----------------------

const Services = () => {
  return (
    <PageContainer>

      {/* HERO */}
      <PageHero>
        <h1>Our Services</h1>
        <p>AI strategy, engineering, and implementation for modern enterprises.</p>
      </PageHero>

      {/* SECTION 1 */}
      <Section>
        <h2>What We Offer</h2>
        <p className="lead">
          We provide complete AI consulting and engineering services enabling companies
          to adopt intelligent systems with clarity, confidence, and technical excellence.
        </p>

        <CardGrid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Strategy</h3>
            <p>
              Capability roadmaps, transformation planning, and ROI-driven execution
              tailored to your business goals.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Machine Learning Engineering</h3>
            <p>
              End-to-end ML pipeline design including development, evaluation,
              deployment, optimization, and monitoring.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Computer Vision</h3>
            <p>
              Advanced image and video AI such as detection, OCR, inspection,
              tracking, and real-time analytics.
            </p>
          </Card>
        </CardGrid>
      </Section>

      {/* SECTION 2 */}
      <Section>
        <h2>Why Choose Us</h2>

        <CardGrid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Proven Delivery</h3>
            <p>
              Expert engineering teams using enterprise-grade tooling and best practices
              for reliable AI production systems.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Scalable Architecture</h3>
            <p>
              Scalable ML systems designed with long-term maintainability and
              high-performance infrastructure.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>End-to-End Ownership</h3>
            <p>
              From ideation to deployment, we partner across every stage for successful
              implementation and adoption.
            </p>
          </Card>
        </CardGrid>
      </Section>

    </PageContainer>
  );
};

export default Services;
