import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Page = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const Hero = styled.div`
  padding: 8rem 2rem 5rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #2e004f, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
  }

  p {
    color: #e9b7ff;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0.6rem auto 0 auto;
  }
`;

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    background: linear-gradient(45deg, #b55cff, #f2c1ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.3rem;
  }

  .lead {
    color: #dcb4ff;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 780px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #1d0b2a;
  border: 1px solid rgba(240, 150, 255, 0.22);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #260e38;
    box-shadow: 0 20px 40px rgba(210, 100, 255, 0.3);
  }

  h3 {
    margin-bottom: 0.6rem;
  }

  p {
    color: #f3d6ff;
  }
`;

const Insights = () => {
  return (
    <Page>
      <Hero>
        <h1>Insights</h1>
        <p>AI perspectives for leaders shaping tomorrow.</p>
      </Hero>

      <Section>
        <h2>Latest Articles</h2>
        <p className="lead">
          Knowledge from AI practitioners, system architects, and enterprise strategists.
        </p>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Roadmaps</h3>
            <p>Everything leaders need to plan AI-first transformation.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Enterprise LLMs</h3>
            <p>RAG-driven systems unlocking enterprise productivity.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Advanced Vision Systems</h3>
            <p>How modern CV models extract structured insights.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2>Insight Themes</h2>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI for Operations</h3>
            <p>Improving efficiency and decision automation.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Future of Automation</h3>
            <p>The next leap in intelligent systems.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Data Governance</h3>
            <p>Scalable foundations for enterprise AI adoption.</p>
          </Card>
        </Grid>
      </Section>
    </Page>
  );
};

export default Insights;
