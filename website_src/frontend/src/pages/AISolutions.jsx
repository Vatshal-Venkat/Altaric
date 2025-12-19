import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

const PageContainer = styled.div`
  background: radial-gradient(circle at top, #0c1014, #000 65%);
  color: #eef7f9;
  min-height: 100vh;
  padding-bottom: 3.5rem; /* reduced */
`;

const PageHero = styled.div`
  position: relative;
  padding: 6.5rem 2rem 4rem; /* ⬅ reduced */
  text-align: center;
  background: linear-gradient(180deg, #0f1a1c, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -160px;
    left: 50%;
    transform: translateX(-50%);
    width: 460px;
    height: 460px;
    background: radial-gradient(
      circle,
      rgba(90, 200, 210, 0.16),
      transparent 70%
    );
    filter: blur(100px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4.2rem);
    font-weight: 700;
    letter-spacing: -0.8px;
    margin-bottom: 0.6rem; /* tighter */
  }

  p {
    color: #cfe7eb;
    font-size: 1.12rem;
    max-width: 720px;
    margin: 0.4rem auto 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 0.75px;
  margin: 2.6rem auto; /* ⬅ reduced */
  background: linear-gradient(
    90deg,
    transparent,
    rgba(120, 210, 220, 0.55),
    transparent
  );
  box-shadow: 0 0 10px rgba(120, 210, 220, 0.25);
`;

const Section = styled.section`
  padding: 3.2rem 2rem; /* ⬅ reduced */
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #e6f8fb, #b3e2e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.9rem;
  }

  .lead {
    color: #c9e2e6;
    font-size: 1.05rem;
    max-width: 820px;
    line-height: 1.65;
    margin-bottom: 2.2rem; /* ⬅ reduced */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.1rem; /* slightly tighter */
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #0f171a, #0b1012);
  border: 1px solid rgba(160, 230, 240, 0.1);
  padding: 2.2rem;
  border-radius: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(140, 225, 235, 0.8),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-6px); /* ⬅ less jumpy */
    background: linear-gradient(180deg, #142126, #0f181c);
    box-shadow: 0 22px 46px rgba(80, 160, 170, 0.28);
  }

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.7rem;
  }

  p {
    color: #c6e0e4;
    line-height: 1.6;
  }
`;

// ---------------------- COMPONENT ----------------------

const AISolutions = () => {
  return (
    <PageContainer>
      {/* HERO */}
      <PageHero>
        <h1>AI Solutions</h1>
        <p>
          Modular, production-ready AI components built for enterprise deployment.
        </p>
      </PageHero>

      <Divider />

      {/* SECTION 1 */}
      <Section>
        <h2>Our AI Solutions</h2>
        <p className="lead">
          Purpose-built AI systems designed to integrate seamlessly into
          enterprise workflows, infrastructure, and governance models.
        </p>

        <Grid>
          {[
            {
              title: "Vision Intelligence",
              text:
                "Computer vision systems for real-time tracking, inspection, visual analytics, and operational monitoring."
            },
            {
              title: "Document Intelligence",
              text:
                "Extraction, classification, summarization, retrieval, and compliance-ready document processing frameworks."
            },
            {
              title: "AI Agents & Automation",
              text:
                "LLM-driven agents that automate customer experience, internal operations, and knowledge workflows."
            }
          ].map((item, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.015 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Divider />

      {/* SECTION 2 */}
      <Section>
        <h2>Solution Benefits</h2>

        <Grid>
          {[
            {
              title: "Fast Deployment",
              text:
                "Pre-built accelerators enable rapid rollout without sacrificing quality or security."
            },
            {
              title: "Flexible Architecture",
              text:
                "Cloud-native, on-premise, or hybrid deployments aligned with enterprise IT policies."
            },
            {
              title: "Enterprise Security",
              text:
                "Compliance-ready solutions with data isolation, access control, and governance built in."
            }
          ].map((item, i) => (
            <Card key={i} whileHover={{ scale: 1.015 }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default AISolutions;
