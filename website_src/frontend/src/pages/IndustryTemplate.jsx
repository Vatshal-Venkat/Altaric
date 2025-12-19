import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* =======================
   PAGE FOUNDATION
======================= */

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  color: #e7e9ec;
  padding-bottom: 4rem;
  background:
    linear-gradient(180deg, #0b0d10 0%, #050607 100%),
    linear-gradient(
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    );
  background-size:
    100% 100%,
    48px 48px,
    48px 48px;
`;

/* =======================
   HERO
======================= */

const Hero = styled.section`
  position: relative;
  padding: 6.5rem 2rem 4rem;
  max-width: 1100px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: -120px;
    right: -120px;
    width: 420px;
    height: 420px;
    background: radial-gradient(
      circle,
      rgba(90, 200, 190, 0.18),
      transparent 70%
    );
    filter: blur(140px);
    pointer-events: none;
  }

  h1 {
    font-size: clamp(2.9rem, 5vw, 4.1rem);
    font-weight: 700;
    letter-spacing: -0.7px;
    margin-bottom: 0.75rem;
    color: #f4f6f8;
  }

  p {
    max-width: 720px;
    font-size: 1.12rem;
    line-height: 1.55;
    color: #c8cdd4;
  }
`;

/* =======================
   SECTION
======================= */

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #9fe3db;
  }

  .lead {
    max-width: 860px;
    font-size: 1.02rem;
    line-height: 1.6;
    color: #c3c8cf;
  }
`;

/* =======================
   CONTEXT
======================= */

const ContextText = styled.p`
  font-size: 1.02rem;
  line-height: 1.65;
  color: #c6cbd2;
`;

/* =======================
   CARD GRID
======================= */

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
  margin-top: 1.6rem;
`;

const Card = styled(motion.div)`
  background: linear-gradient(180deg, #0f1114, #0b0c0e);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem;
  border-radius: 14px;
  transition: 0.25s ease;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.75);
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: #eef1f4;
  }

  p {
    font-size: 0.96rem;
    line-height: 1.55;
    color: #b8bec7;
  }
`;

/* =======================
   CAPABILITY TAGS
======================= */

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
`;

const Tag = styled.div`
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: rgba(90, 200, 190, 0.12);
  color: #9fe3db;
  border: 1px solid rgba(90, 200, 190, 0.25);
`;

/* =======================
   DIVIDER
======================= */

const Divider = styled.div`
  max-width: 900px;
  height: 1px;
  margin: 2.4rem auto;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.12),
    transparent
  );
`;

/* =======================
   COMPONENT
======================= */

const IndustryTemplate = ({
  title,
  description,
  context,
  solutions,
  valueAreas,
  relatedCapabilities
}) => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
      </Hero>

      {/* CONTEXT */}
      <Section>
        <h2>Industry Context</h2>
        <ContextText>{context}</ContextText>
      </Section>

      <Divider />

      {/* SOLUTIONS */}
      <Section>
        <h2>Key AI Solution Areas</h2>
        <CardGrid>
          {solutions.map((item, i) => (
            <Card
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Divider />

      {/* VALUE */}
      <Section>
        <h2>Where AI Delivers Value</h2>
        <CardGrid>
          {valueAreas.map((item, i) => (
            <Card key={i}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Divider />

      {/* CAPABILITIES */}
      <Section>
        <h2>Related Capabilities</h2>
        <TagGrid>
          {relatedCapabilities.map((cap, i) => (
            <Tag key={i}>{cap}</Tag>
          ))}
        </TagGrid>
      </Section>
    </Page>
  );
};

export default IndustryTemplate;
