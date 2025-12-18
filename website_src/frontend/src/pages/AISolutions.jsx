import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

const PageContainer = styled.div`
  background: radial-gradient(circle at top, #0c0f12, #000 65%);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const PageHero = styled.div`
  position: relative;
  padding: 9rem 2rem 6rem;
  text-align: center;
  background: linear-gradient(180deg, #0f1a1c, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -140px;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 520px;
    background: radial-gradient(
      circle,
      rgba(90, 200, 210, 0.22),
      transparent 70%
    );
    filter: blur(100px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3.2rem, 5vw, 4.6rem);
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    color: #cfeff3;
    font-size: 1.2rem;
    max-width: 760px;
    margin: 0.6rem auto 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  margin: 4rem auto;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(120, 210, 220, 0.65),
    transparent
  );
  box-shadow: 0 0 14px rgba(120, 210, 220, 0.35);
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.4rem;
    background: linear-gradient(45deg, #e6f8fb, #9fdde5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .lead {
    color: #d3eef1;
    font-size: 1.1rem;
    max-width: 850px;
    line-height: 1.65;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2.4rem;
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #0f1618, #0b1012);
  border: 1px solid rgba(160, 230, 240, 0.12);
  padding: 2.4rem 2.2rem;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.35s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);

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
      rgba(140, 225, 235, 0.95),
      transparent
    );
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(180deg, #141e21, #0f171a);
    box-shadow: 0 25px 55px rgba(80, 160, 170, 0.35);
  }

  h3 {
    font-size: 1.45rem;
    margin-bottom: 0.8rem;
  }

  p {
    color: #cfe8eb;
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
        <p>Modular, production-ready AI components built for enterprise deployment.</p>
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
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
            <Card key={i} whileHover={{ scale: 1.02 }}>
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
