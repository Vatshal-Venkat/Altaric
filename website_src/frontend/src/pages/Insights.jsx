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
  padding: 8rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(180deg, #0a1a33, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
  }

  p {
    color: #bcd2f7;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0.6rem auto 0;
  }
`;

const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    background: linear-gradient(45deg, #70b8ff, #d3e8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.3rem;
    font-weight: 600;
  }

  .lead {
    color: #a9c4e8;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 780px;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: #0f1824;
  border: 1px solid rgba(112, 168, 255, 0.25);
  padding: 2rem;
  border-radius: 18px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #152337;
    box-shadow: 0 20px 40px rgba(60, 120, 200, 0.35);
  }

  h3 {
    margin-bottom: 0.6rem;
    font-weight: 600;
  }

  p {
    color: #c9dbf3;
    line-height: 1.5;
  }
`;

const Insights = () => {
  return (
    <Page>
      <Hero>
        <h1>Insights</h1>
        <p>Deep analysis and strategic perspectives on the future of AI.</p>
      </Hero>

      <Section>
        <h2>Latest Articles</h2>
        <p className="lead">
          Expert insights from AI engineers, enterprise architects, and digital transformation strategists.
        </p>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>AI Strategy Roadmaps</h3>
            <p>A structured approach to designing AI-first enterprise transformation.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Enterprise LLM Systems</h3>
            <p>How RAG and orchestration frameworks power enterprise-grade AI solutions.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Computer Vision Intelligence</h3>
            <p>Unlocking automation with high-accuracy visual inspection models.</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2>Insight Themes</h2>

        <Grid>
          <Card whileHover={{ scale: 1.02 }}>
            <h3>Operational AI</h3>
            <p>Embedding intelligence into everyday enterprise workflows.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Automation Futures</h3>
            <p>The evolution of intelligent automation across industries.</p>
          </Card>

          <Card whileHover={{ scale: 1.02 }}>
            <h3>Data Governance</h3>
            <p>Building compliant, scalable data foundations for AI systems.</p>
          </Card>
        </Grid>
      </Section>
    </Page>
  );
};

export default Insights;
