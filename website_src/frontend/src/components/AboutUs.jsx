import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ================================
   CONSTANTS
================================ */
const NAVBAR_HEIGHT = "84px";

/* ================================
   ANIMATIONS
================================ */
const scanline = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 100%; }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================================
   BACKGROUND LAYERS (OPTIMIZED)
================================ */
const BackgroundGrid = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    linear-gradient(rgba(0,234,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.05) 1px, transparent 1px);
  background-size: 48px 48px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(255,255,255,0.03),
      rgba(0,0,0,0.18)
    );
    animation: ${scanline} 18s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

/* ================================
   PAGE WRAPPER
================================ */
const Page = styled.div`
  min-height: 100vh;
  color: #fff;
  position: relative;
  overflow-x: hidden;
`;

/* ================================
   HERO
================================ */
const Hero = styled.section`
  padding: calc(${NAVBAR_HEIGHT} + 5rem) 2rem 4.5rem;
  text-align: center;
  background: radial-gradient(circle at top, #041a21, #000);
  position: relative;
  z-index: 1;

  h1 {
    font-size: clamp(3.2rem, 5vw, 4.8rem);
    font-weight: 700;
    background: linear-gradient(90deg, #00eaff, #c7feff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 1.4rem;
    max-width: 900px;
    margin-inline: auto;
    font-size: 1.25rem;
    color: #cfdbe2;
    line-height: 1.7;
  }
`;

/* ================================
   LAYOUT
================================ */
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem 6rem;
  position: relative;
  z-index: 1;
`;

const Section = styled(motion.section)`
  margin-top: 3.5rem;
  padding: 3.2rem;
  border-radius: 24px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(0,234,255,0.18);
  box-shadow: 0 0 48px rgba(0,234,255,0.1);

  &:first-of-type {
    margin-top: 2.2rem;
  }

  @media (max-width: 768px) {
    padding: 2.2rem;
  }

  h2 {
    font-size: 2rem;
    color: #00eaff;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.05rem;
    color: #d6e1e7;
    line-height: 1.75;
    margin-bottom: 1.1rem;
  }
`;

/* ================================
   GRID / CARDS
================================ */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 2.2rem;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(0,234,255,0.08),
    rgba(255,255,255,0.02)
  );
  border: 1px solid rgba(0,234,255,0.25);

  h3 {
    color: #bffcff;
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 1rem;
    color: #d3dde4;
    line-height: 1.65;
  }
`;

/* ================================
   TIMELINE
================================ */
const Timeline = styled.div`
  margin-top: 2.2rem;
  display: grid;
  gap: 1.6rem;
`;

const Step = styled.div`
  padding-left: 1.4rem;
  border-left: 3px solid rgba(0,234,255,0.55);

  h4 {
    color: #9ff3ff;
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
  }

  p {
    color: #d0dae1;
    font-size: 1rem;
  }
`;

/* ================================
   COMPONENT
================================ */
const AboutUs = () => {
  return (
    <Page>
      <BackgroundGrid />

      <Hero>
        <h1>About Altaric</h1>
        <p>
          Altaric builds enterprise-grade AI systems that move beyond experimentation
          and become trusted, scalable infrastructure for real businesses.
        </p>
      </Hero>

      <Container>
        <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Who We Are</h2>
          <p>
            Altaric is a next-generation AI consulting and engineering firm focused
            on translating advanced AI research into production-ready systems.
          </p>
          <p>
            We operate at the intersection of deep engineering, system design,
            and enterprise strategy — delivering AI that organizations can deploy,
            govern, and scale with confidence.
          </p>
        </Section>

        <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Founding Principles</h2>
          <Grid>
            <Card>
              <h3>Production Over Prototypes</h3>
              <p>Systems built for real environments, not demos.</p>
            </Card>
            <Card>
              <h3>Engineering Discipline</h3>
              <p>Architecture, monitoring, security, and evaluation first.</p>
            </Card>
            <Card>
              <h3>Responsible AI</h3>
              <p>Transparency, governance, and compliance by design.</p>
            </Card>
          </Grid>
        </Section>

        <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Evolution</h2>
          <Timeline>
            <Step>
              <h4>Foundation</h4>
              <p>Applied AI with real-world deployment focus.</p>
            </Step>
            <Step>
              <h4>Enterprise Systems</h4>
              <p>LLM platforms, RAG pipelines, and AI agents.</p>
            </Step>
            <Step>
              <h4>Scalable Infrastructure</h4>
              <p>Secure, governed AI systems for large-scale adoption.</p>
            </Step>
          </Timeline>
        </Section>

        <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Enterprise Trust</h2>
          <Grid>
            <Card>
              <h3>Security-First</h3>
              <p>Secure data handling and access control.</p>
            </Card>
            <Card>
              <h3>Scalable by Design</h3>
              <p>High availability, resilient architectures.</p>
            </Card>
            <Card>
              <h3>Compliance-Ready</h3>
              <p>Auditability and governance built-in.</p>
            </Card>
          </Grid>
        </Section>

        <Section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Founder</h2>
          <p>
            <strong>Shailaja Gollapudi</strong> founded Altaric to bridge cutting-edge
            AI research and enterprise-grade engineering.
          </p>
          <p>
            With a deep focus on systems thinking and real-world deployment,
            Tarun leads Altaric’s mission to build AI organizations can trust,
            scale, and rely on.
          </p>
        </Section>
      </Container>
    </Page>
  );
};

export default AboutUs;
