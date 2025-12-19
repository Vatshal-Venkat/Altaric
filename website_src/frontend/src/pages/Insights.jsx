import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

const Page = styled.div`
  background: radial-gradient(circle at top, #0b0f14, #000 65%);
  color: #eef7f9;
  min-height: 100vh;
  padding-bottom: 3.5rem; /* reduced */
`;

const Hero = styled.div`
  position: relative;
  padding: 6.5rem 2rem 4rem; /* ⬅ reduced */
  text-align: center;
  background: linear-gradient(180deg, #101820, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -180px;
    left: 50%;
    transform: translateX(-50%);
    width: 440px;
    height: 440px;
    background: radial-gradient(
      circle,
      rgba(140, 180, 220, 0.18),
      transparent 70%
    );
    filter: blur(110px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4.2rem);
    font-weight: 700;
    letter-spacing: -0.8px;
    margin-bottom: 0.6rem; /* tighter */
  }

  p {
    color: #c4d3e6;
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
    rgba(150, 190, 230, 0.55),
    transparent
  );
  box-shadow: 0 0 10px rgba(150, 190, 230, 0.25);
`;

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 3.2rem 2rem; /* ⬅ reduced */

  h2 {
    font-size: 2.2rem;
    background: linear-gradient(45deg, #e6eff8, #b3c8e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.9rem;
  }

  .lead {
    color: #c2d1e4;
    font-size: 1.05rem;
    max-width: 820px;
    margin-bottom: 2.2rem; /* ⬅ reduced */
    line-height: 1.65;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.1rem; /* slightly tighter */
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #101826, #0b121c);
  border: 1px solid rgba(160, 190, 230, 0.13);
  padding: 2.2rem;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.3s ease;
  overflow: hidden;
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
      rgba(160, 200, 240, 0.8),
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
    background: linear-gradient(180deg, #162238, #0f1726);
    box-shadow: 0 22px 46px rgba(100, 140, 200, 0.28);
  }

  h3 {
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-size: 1.35rem;
  }

  p {
    color: #c3d1e4;
    line-height: 1.6;
  }
`;

// ---------------------- COMPONENT ----------------------

const Insights = () => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <h1>Insights</h1>
        <p>
          Strategic perspectives, technical depth, and enterprise-grade AI
          thinking.
        </p>
      </Hero>

      <Divider />

      {/* SECTION 1 */}
      <Section>
        <h2>Latest Articles</h2>
        <p className="lead">
          Research-driven insights from AI engineers, enterprise architects,
          and digital transformation leaders.
        </p>

        <Grid>
          {[
            {
              title: "AI Strategy Roadmaps",
              text:
                "A structured approach to designing AI-first enterprise transformation with measurable outcomes."
            },
            {
              title: "Enterprise LLM Systems",
              text:
                "How retrieval-augmented generation and orchestration frameworks power secure, scalable AI platforms."
            },
            {
              title: "Computer Vision Intelligence",
              text:
                "Unlocking automation and quality assurance with high-accuracy visual inspection models."
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
        <h2>Insight Themes</h2>

        <Grid>
          {[
            {
              title: "Operational AI",
              text:
                "Embedding intelligence into everyday enterprise workflows and decision systems."
            },
            {
              title: "Automation Futures",
              text:
                "The evolution of intelligent automation across regulated and high-scale industries."
            },
            {
              title: "Data Governance",
              text:
                "Building compliant, auditable, and scalable data foundations for AI systems."
            }
          ].map((item, i) => (
            <Card key={i} whileHover={{ scale: 1.015 }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </Page>
  );
};

export default Insights;
