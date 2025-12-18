import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

const PageContainer = styled.div`
  background: radial-gradient(circle at top, #0a0f2b, #000 65%);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const PageHero = styled.div`
  position: relative;
  width: 100%;
  padding: 9rem 2rem 6rem;
  text-align: center;
  background: linear-gradient(180deg, #0a0f2b, #000);
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
      rgba(95, 168, 255, 0.25),
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
    color: #cbd5ff;
    font-size: 1.2rem;
    max-width: 720px;
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
    rgba(95, 168, 255, 0.7),
    transparent
  );
  box-shadow: 0 0 14px rgba(95, 168, 255, 0.45);
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #5fa8ff, #cfd8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    color: #d6dcff;
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

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #0d0f1a, #0b0d17);
  border: 1px solid rgba(120, 150, 255, 0.15);
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
      rgba(95, 168, 255, 0.95),
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
    background: linear-gradient(180deg, #121528, #0f1222);
    box-shadow: 0 25px 55px rgba(80, 120, 255, 0.35);
  }

  h3 {
    font-size: 1.45rem;
    margin-bottom: 0.8rem;
  }

  p {
    color: #c4ccff;
    line-height: 1.6;
  }
`;

// ---------------------- COMPONENT ----------------------

const Industries = () => {
  return (
    <PageContainer>
      {/* HERO */}
      <PageHero>
        <h1>Industries We Serve</h1>
        <p>AI solutions tailored for complex, industry-specific challenges.</p>
      </PageHero>

      <Divider />

      {/* SECTION 1 */}
      <Section>
        <h2>Industries</h2>
        <p className="lead">
          We work across critical industries, applying machine learning,
          computer vision, and automation to solve real operational problems
          at scale.
        </p>

        <CardGrid>
          {[
            {
              title: "Healthcare",
              text:
                "Medical imaging analysis, workflow automation, triage systems, diagnostics support, and clinical reporting tools."
            },
            {
              title: "Manufacturing",
              text:
                "Visual inspection, predictive maintenance, anomaly detection, quality control, and real-time monitoring."
            },
            {
              title: "Finance & Banking",
              text:
                "Fraud detection, document intelligence, risk scoring, compliance automation, and process optimization."
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
        </CardGrid>
      </Section>

      <Divider />

      {/* SECTION 2 */}
      <Section>
        <h2>Industry Advantages</h2>

        <CardGrid>
          {[
            {
              title: "Domain Expertise",
              text:
                "Strong understanding of vertical-specific constraints, data patterns, and AI use cases."
            },
            {
              title: "Reliable Architecture",
              text:
                "Enterprise-grade ML systems built for long-term scalability, robustness, and accuracy."
            },
            {
              title: "Faster Deployment",
              text:
                "Pre-built accelerators and proven frameworks reduce development cycles significantly."
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

export default Industries;
