import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// ---------------------- STYLES ----------------------

const Page = styled.div`
  background: radial-gradient(circle at top, #0b0e12, #000 65%);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 5rem;
`;

const Hero = styled.div`
  position: relative;
  padding: 9rem 2rem 6rem;
  text-align: center;
  background: linear-gradient(180deg, #101820, #000);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -160px;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 520px;
    background: radial-gradient(
      circle,
      rgba(140, 180, 220, 0.25),
      transparent 70%
    );
    filter: blur(110px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3.2rem, 5vw, 4.6rem);
    font-weight: 700;
    letter-spacing: -1px;
  }

  p {
    color: #c6d6e6;
    font-size: 1.15rem;
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
    rgba(150, 190, 230, 0.6),
    transparent
  );
  box-shadow: 0 0 14px rgba(150, 190, 230, 0.35);
`;

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4.5rem 2rem;

  h2 {
    font-size: 2.4rem;
    background: linear-gradient(45deg, #e3edf7, #9fb9d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .lead {
    color: #c4d3e6;
    font-size: 1.1rem;
    max-width: 850px;
    margin-bottom: 3rem;
    line-height: 1.65;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2.4rem;
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #101824, #0b111a);
  border: 1px solid rgba(160, 190, 230, 0.15);
  padding: 2.4rem 2.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.35s ease;
  overflow: hidden;
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
      rgba(160, 200, 240, 0.9),
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
    background: linear-gradient(180deg, #162033, #0f1624);
    box-shadow: 0 25px 55px rgba(100, 140, 200, 0.35);
  }

  h3 {
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.45rem;
  }

  p {
    color: #cbd9ec;
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
        <p>Strategic perspectives, technical depth, and enterprise-grade AI thinking.</p>
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
            <Card key={i} whileHover={{ scale: 1.02 }}>
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
