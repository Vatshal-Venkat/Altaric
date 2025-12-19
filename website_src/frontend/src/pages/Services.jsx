import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Target } from "lucide-react";

// ---------------------- STYLES ----------------------

const PageContainer = styled.div`
  background: radial-gradient(circle at top, #0b0f12, #000 60%);
  color: #eef7f9;
  min-height: 100vh;
  padding-bottom: 3rem;
`;

const PageHero = styled.div`
  position: relative;
  width: 100%;
  padding: 6.5rem 2rem 4rem; /* ⬅ reduced */
  text-align: center;
  background: linear-gradient(180deg, #0e1114, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -140px;
    left: 50%;
    transform: translateX(-50%);
    width: 420px;
    height: 420px;
    background: radial-gradient(
      circle,
      rgba(0, 212, 255, 0.14),
      transparent 70%
    );
    filter: blur(90px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4.2rem);
    font-weight: 700;
    letter-spacing: -0.8px;
    margin-bottom: 0.7rem;
  }

  p {
    color: #c7d3d8;
    font-size: 1.15rem;
    max-width: 700px;
    margin: 0.3rem auto 0;
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
    rgba(0, 212, 255, 0.55),
    transparent
  );
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.25);
`;

const Section = styled.section`
  padding: 3.2rem 2rem; /* ⬅ reduced */
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.9rem;
    background: linear-gradient(45deg, #ffffff, #c9d3d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    color: #c5d0d4;
    font-size: 1.05rem;
    max-width: 820px;
    line-height: 1.65;
    margin-bottom: 2.2rem; /* ⬅ reduced */
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.1rem; /* slightly tighter */
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0.18),
    rgba(0, 212, 255, 0.06)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  box-shadow: 0 0 14px rgba(0, 212, 255, 0.25);
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #101416, #0b0e10);
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2.2rem;
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  transition: 0.3s ease;

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
      rgba(0, 212, 255, 0.8),
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
    background: linear-gradient(180deg, #151a1d, #0f1316);
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.65);
  }

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.7rem;
  }

  p {
    color: #bfc8cc;
    line-height: 1.6;
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

      <Divider />

      {/* SECTION 1 */}
      <Section>
        <h2>What We Offer</h2>
        <p className="lead">
          We provide end-to-end AI consulting and engineering services that help
          organizations adopt intelligent systems with confidence, clarity,
          and measurable impact.
        </p>

        <CardGrid>
          {[
            {
              title: "Generative AI",
              icon: Brain,
              text:
                "LLM-powered assistants, RAG pipelines, multimodal AI systems, and enterprise knowledge copilots built securely on proprietary data."
            },
            {
              title: "AI Strategy",
              icon: Target,
              text:
                "Clear AI roadmaps, transformation planning, and ROI-driven execution aligned with real business constraints."
            },
            {
              title: "Machine Learning Engineering",
              icon: Cpu,
              text:
                "Robust ML systems covering pipelines, model development, deployment, optimization, and monitoring."
            },
            {
              title: "Computer Vision",
              icon: Eye,
              text:
                "Scalable visual intelligence including detection, OCR, inspection, tracking, and real-time video analytics."
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
              <IconWrap>
                <item.icon size={21} color="#00d4ff" />
              </IconWrap>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Divider />

      {/* SECTION 2 */}
      <Section>
        <h2>Why Choose Us</h2>

        <CardGrid>
          {[
            {
              title: "Proven Delivery",
              text:
                "Engineering-first teams delivering secure, reliable, and production-grade AI systems."
            },
            {
              title: "Scalable Architecture",
              text:
                "Systems designed for long-term scalability, maintainability, and performance."
            },
            {
              title: "End-to-End Ownership",
              text:
                "From strategy to deployment, we take full ownership to ensure adoption and results."
            }
          ].map((item, i) => (
            <Card key={i} whileHover={{ scale: 1.015 }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default Services;
