import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ===================== PAGE ===================== */

const Page = styled.div`
  background:
    radial-gradient(circle at 20% 10%, rgba(80,120,255,0.08), transparent 35%),
    radial-gradient(circle at 80% 20%, rgba(255,200,120,0.06), transparent 40%),
    linear-gradient(180deg, #07090c 0%, #000 100%);
  color: #eef6f8;
  min-height: 100vh;
  padding-bottom: 5rem;
`;

/* ===================== HERO ===================== */

const Hero = styled.section`
  position: relative;
  padding: 8rem 2rem 6rem;
  text-align: center;
  background:
    radial-gradient(circle at center, rgba(120,200,255,0.14), transparent 55%),
    linear-gradient(180deg, #0a0d12, #000);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.12;
    pointer-events: none;
  }

  h1 {
    font-size: clamp(3.4rem, 6vw, 5rem);
    font-weight: 800;
    letter-spacing: -1.2px;
    background: linear-gradient(
      90deg,
      #f5f7fa,
      #9fdde5,
      #e9d8a6
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 1rem;
    font-size: 1.18rem;
    max-width: 820px;
    margin-inline: auto;
    color: #c3d2d9;
    line-height: 1.6;
  }
`;

/* ===================== SECTION ===================== */

const Section = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  padding: 4.5rem 2rem 3.5rem;

  h2 {
    font-size: 2.6rem;
    margin-bottom: 0.6rem;
    background: linear-gradient(45deg, #ffffff, #9fb3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lead {
    max-width: 860px;
    color: #b8c6cc;
    font-size: 1.08rem;
    line-height: 1.75;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.8rem;
`;

/* ===================== CARD ===================== */

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled(motion.div)`
  position: relative;
  padding: 2.8rem;
  border-radius: 22px;
  background:
    linear-gradient(180deg, #0d1118, #070a0f);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.06),
    0 30px 80px rgba(0,0,0,0.8);
  overflow: hidden;
  transition: 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(120,180,255,0.25),
      rgba(255,210,150,0.22),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.1),
      0 45px 120px rgba(80,140,255,0.45);
  }

  h3 {
    font-size: 1.55rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }

  p {
    color: #c9d6dc;
    line-height: 1.65;
    font-size: 1.02rem;
  }
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.8rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    #9fdde5,
    #6fa8ff,
    #e9d8a6
  );
  color: #000;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(120,180,255,0.45);
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

/* ===================== CTA ===================== */

const CTA = styled.section`
  max-width: 1150px;
  margin: 6rem auto 2rem;
  padding: 3.8rem 3rem;
  text-align: center;
  border-radius: 28px;
  background:
    linear-gradient(180deg, #0c1016, #070a0f);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 40px 120px rgba(0,0,0,0.8);

  h2 {
    font-size: 2.4rem;
    margin-bottom: 0.9rem;
    background: linear-gradient(90deg, #ffffff, #e9d8a6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    max-width: 760px;
    margin: 0 auto 2.2rem;
    color: #bfcdd3;
    line-height: 1.7;
  }

  a {
    display: inline-block;
    padding: 1rem 2.6rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #6fa8ff, #9fdde5);
    color: #000;
    font-weight: 700;
    text-decoration: none;
  }
`;

/* ===================== COMPONENT ===================== */

const Careers = () => {
  const roles = [
    {
      title: "AI Engineer",
      desc:
        "Design and deploy production-grade AI systems across ML, NLP, CV, and agentic workflows.",
      mail: "AI%20Engineer"
    },
    {
      title: "AI Intern",
      desc:
        "Work on real-world AI systems while building strong theoretical and practical foundations.",
      mail: "AI%20Intern"
    },
    {
      title: "Frontend Engineer",
      desc:
        "Build high-performance, design-forward interfaces for enterprise AI platforms.",
      mail: "Frontend%20Engineer"
    },
    {
      title: "AI Strategy Consultant",
      desc:
        "Bridge business objectives with scalable AI adoption strategies.",
      mail: "AI%20Strategy%20Consultant"
    }
  ];

  return (
    <Page>
      <Hero>
        <h1>Careers at Altaric</h1>
        <p>
          We build serious AI systems. Depth, rigor, and impact are not optional
          here — they are the baseline.
        </p>
      </Hero>

      <Section>
        <h2>Open Roles</h2>
        <p className="lead">
          We’re hiring people who care about craftsmanship, long-term thinking,
          and building systems that actually survive production.
        </p>

        <Grid>
          {roles.map((role, i) => (
            <CardLink
              key={i}
              to={`/careers/${role.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <Card whileHover={{}}>
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
                <ApplyButton
                  href={`mailto:tarun@altaric.com?subject=Application%20for%20${role.mail}`}
                >
                  Apply →
                </ApplyButton>
              </Card>
            </CardLink>
          ))}
        </Grid>
      </Section>

      <CTA>
        <h2>Didn’t Find Your Role?</h2>
        <p>
          If you believe you can create real impact here, don’t wait for a job
          title. Reach out.
        </p>
        <a href="mailto:tarun@altaric.com?subject=General%20Application">
          Contact Us
        </a>
      </CTA>
    </Page>
  );
};

export default Careers;
