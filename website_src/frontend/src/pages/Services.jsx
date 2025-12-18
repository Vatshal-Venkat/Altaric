import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Brain, Cpu, Eye, Target } from "lucide-react";

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

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 1px;
  margin: 3.5rem auto;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 212, 255, 0.6),
    transparent
  );
  box-shadow: 0 0 12px rgba(0, 212, 255, 0.35);
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

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 212, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
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

      {/* HERO DIVIDER */}
      <Divider />

      {/* SECTION 1 */}
      <Section>
        <h2>What We Offer</h2>
        <p className="lead">
          We provide complete AI consulting and engineering services enabling companies
          to adopt intelligent systems with clarity, confidence, and technical excellence.
        </p>

        <CardGrid>
          <Card
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrap>
              <Brain size={22} color="#00d4ff" />
            </IconWrap>
            <h3>Generative AI</h3>
            <p>
              Production-grade Generative AI systems including LLM-powered assistants,
              RAG pipelines, multimodal AI, and enterprise knowledge copilots built on
              your proprietary data.
            </p>
          </Card>

          <Card
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrap>
              <Target size={22} color="#00d4ff" />
            </IconWrap>
            <h3>AI Strategy</h3>
            <p>
              Capability roadmaps, transformation planning, and ROI-driven execution
              aligned to business and technical realities.
            </p>
          </Card>

          <Card
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrap>
              <Cpu size={22} color="#00d4ff" />
            </IconWrap>
            <h3>Machine Learning Engineering</h3>
            <p>
              End-to-end ML system design covering data pipelines, model development,
              evaluation, deployment, optimization, and monitoring.
            </p>
          </Card>

          <Card
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrap>
              <Eye size={22} color="#00d4ff" />
            </IconWrap>
            <h3>Computer Vision</h3>
            <p>
              Advanced image and video intelligence including detection, OCR,
              inspection, tracking, and real-time analytics at scale.
            </p>
          </Card>
        </CardGrid>
      </Section>

      {/* SECTION DIVIDER */}
      <Divider />

      {/* SECTION 2 */}
      <Section>
        <h2>Why Choose Us</h2>

        <CardGrid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Proven Delivery</h3>
            <p>
              Engineering-first teams delivering reliable, secure, and production-ready
              AI systems using enterprise-grade practices.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Scalable Architecture</h3>
            <p>
              Systems designed for long-term scalability, maintainability, and
              performance — not one-off demos.
            </p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>End-to-End Ownership</h3>
            <p>
              From strategy to deployment, we take full ownership to ensure
              real-world adoption and impact.
            </p>
          </Card>
        </CardGrid>
      </Section>

    </PageContainer>
  );
};

export default Services;
