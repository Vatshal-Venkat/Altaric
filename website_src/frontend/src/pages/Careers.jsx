import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Page = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const Hero = styled.div`
  padding: 8rem 2rem 5rem;
  text-align: center;
  background: linear-gradient(180deg, #1f2a33, #000);

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
  }

  p {
    color: #d2e0ea;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    background: linear-gradient(45deg, #9baec1, #e5edf5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.3rem;
    font-weight: 600;
  }

  .lead {
    max-width: 780px;
    margin-bottom: 2.5rem;
    color: #cbd8e3;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled(motion.div)`
  background: #1a242c;
  border: 1px solid rgba(155, 174, 193, 0.2);
  padding: 2rem;
  border-radius: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
    background: #25323d;
    box-shadow: 0 18px 36px rgba(120, 150, 170, 0.25);
  }

  h3 {
    margin-bottom: 0.6rem;
    font-weight: 600;
  }

  p {
    color: #dfe8ef;
    margin-bottom: 1.4rem;
  }
`;

const ApplyButton = styled.a`
  align-self: flex-start;
  padding: 0.55rem 1.4rem;
  border-radius: 999px;
  background: #1f2933;
  border: 1px solid rgba(255,255,255,0.15);
  color: #e5e7eb;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    background: #00e5cc;
    color: #000;
    border-color: #00e5cc;
  }
`;

const Careers = () => {
  return (
    <Page>
      <Hero>
        <h1>Careers at Altaric</h1>
        <p>Be part of a team building advanced AI systems for global enterprises.</p>
      </Hero>

      <Section>
        <h2>Open Roles</h2>
        <p className="lead">
          We’re looking for innovators, problem-solvers & builders passionate
          about shaping the future of AI.
        </p>

        <Grid>
          <CardLink to="/careers/ai-engineer">
            <Card whileHover={{ scale: 1.01 }}>
              <div>
                <h3>AI Engineer</h3>
                <p>
                  Develop and deploy end-to-end AI systems including ML, NLP,
                  computer vision, and agentic AI solutions.
                </p>
              </div>
              <ApplyButton href="mailto:tarun@altaric.com?subject=Application%20for%20AI%20Engineer">
                Apply →
              </ApplyButton>
            </Card>
          </CardLink>

          <CardLink to="/careers/ai-intern">
            <Card whileHover={{ scale: 1.01 }}>
              <div>
                <h3>AI Intern</h3>
                <p>
                  Gain hands-on experience working with senior engineers on
                  real-world AI, ML, and modern AI systems.
                </p>
              </div>
              <ApplyButton href="mailto:tarun@altaric.com?subject=Application%20for%20AI%20Intern">
                Apply →
              </ApplyButton>
            </Card>
          </CardLink>

          <CardLink to="/careers/frontend-engineer">
            <Card whileHover={{ scale: 1.01 }}>
              <div>
                <h3>Frontend Engineer</h3>
                <p>
                  Build high-quality user interfaces and digital experiences
                  using React and modern UI frameworks.
                </p>
              </div>
              <ApplyButton href="mailto:tarun@altaric.com?subject=Application%20for%20Frontend%20Engineer">
                Apply →
              </ApplyButton>
            </Card>
          </CardLink>

          <CardLink to="/careers/ai-strategy-consultant">
            <Card whileHover={{ scale: 1.01 }}>
              <div>
                <h3>AI Strategy Consultant</h3>
                <p>
                  Help enterprises design, adopt, and scale AI-driven
                  transformation strategies.
                </p>
              </div>
              <ApplyButton href="mailto:tarun@altaric.com?subject=Application%20for%20AI%20Strategy%20Consultant">
                Apply →
              </ApplyButton>
            </Card>
          </CardLink>
        </Grid>
      </Section>
    </Page>
  );
};

export default Careers;
