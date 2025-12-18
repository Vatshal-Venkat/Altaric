import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Target } from "lucide-react";

// ---------------------- STYLES ----------------------

const PageContainer = styled.div`
  background: radial-gradient(circle at top, #0a0a0a, #000 60%);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const PageHero = styled.div`
  position: relative;
  width: 100%;
  padding: 9rem 2rem 6rem;
  text-align: center;
  background: linear-gradient(180deg, #0e0e0e, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 480px;
    height: 480px;
    background: radial-gradient(
      circle,
      rgba(0, 212, 255, 0.18),
      transparent 70%
    );
    filter: blur(90px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3.2rem, 5vw, 4.6rem);
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }

  p {
    color: #cfcfcf;
    font-size: 1.2rem;
    max-width: 720px;
    margin: 0.5rem auto 0;
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
    rgba(0, 212, 255, 0.65),
    transparent
  );
  box-shadow: 0 0 14px rgba(0, 212, 255, 0.4);
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ffffff, #bcbcbc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    color: #d2d2d2;
    font-size: 1.1rem;
    max-width: 850px;
    line-height: 1.65;
    margin-bottom: 3rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2.4rem;
`;

const IconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    rgba(0, 212, 255, 0.22),
    rgba(0, 212, 255, 0.08)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.4rem;
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.35);
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #0f0f0f, #0b0b0b);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2.4rem 2.2rem;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.35s ease;

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
      rgba(0, 212, 255, 0.9),
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
    background: linear-gradient(180deg, #151515, #0f0f0f);
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.75);
  }

  h3 {
    font-size: 1.45rem;
    margin-bottom: 0.8rem;
  }

  p {
    color: #c0c0c0;
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
                "LLM-powered assistants, RAG pipelines, multimodal AI systems, and enterprise knowledge copilots built securely on your proprietary data."
            },
            {
              title: "AI Strategy",
              icon: Target,
              text:
                "Clear AI roadmaps, transformation planning, and ROI-driven execution aligned with real business and technical constraints."
            },
            {
              title: "Machine Learning Engineering",
              icon: Cpu,
              text:
                "Robust ML systems covering data pipelines, model development, deployment, optimization, and continuous monitoring."
            },
            {
              title: "Computer Vision",
              icon: Eye,
              text:
                "Scalable visual intelligence solutions including detection, OCR, inspection, tracking, and real-time video analytics."
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
              <IconWrap>
                <item.icon size={22} color="#00d4ff" />
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
                "Systems designed for long-term scalability, maintainability, and performance — not short-lived demos."
            },
            {
              title: "End-to-End Ownership",
              text:
                "From strategy to deployment, we take full ownership to ensure real-world adoption and results."
            }
          ].map((item, i) => (
            <Card key={i} whileHover={{ scale: 1.02 }}>
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
