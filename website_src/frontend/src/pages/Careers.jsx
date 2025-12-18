import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ---------------------- STYLES ----------------------

const Page = styled.div`
  background: radial-gradient(circle at top, #0c0f12, #000 65%);
  color: #fff;
  min-height: 100vh;
  padding-bottom: 5rem;
`;

const Hero = styled.div`
  position: relative;
  padding: 9rem 2rem 6rem;
  text-align: center;
  background: linear-gradient(180deg, #141a1f, #000);
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
      rgba(120, 200, 210, 0.22),
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
    color: #cfdadd;
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
    rgba(140, 200, 210, 0.6),
    transparent
  );
  box-shadow: 0 0 14px rgba(140, 200, 210, 0.35);
`;

const Section = styled.section`
  padding: 4.5rem 2rem;
  max-width: 1300px;
  margin: 0 auto;

  h2 {
    font-size: 2.4rem;
    background: linear-gradient(45deg, #e5eef1, #a9cfd6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .lead {
    max-width: 850px;
    margin-bottom: 3rem;
    color: #cfdadd;
    line-height: 1.65;
    font-size: 1.1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2.4rem;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, #12181d, #0b1014);
  border: 1px solid rgba(160, 210, 220, 0.14);
  padding: 2.4rem 2.2rem;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      rgba(140, 220, 230, 0.9),
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
    background: linear-gradient(180deg, #182127, #11181d);
    box-shadow: 0 25px 55px rgba(90, 170, 180, 0.35);
  }

  h3 {
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-size: 1.45rem;
  }

  p {
    color: #d4e2e6;
    margin-bottom: 1.6rem;
    line-height: 1.6;
  }
`;

const ApplyButton = styled.a`
  align-self: flex-start;
  padding: 0.6rem 1.6rem;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(160, 220, 230, 0.45);
  color: #cfeaed;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.25s ease;

  &:hover {
    background: linear-gradient(90deg, #9fdde5, #5fcad6);
    color: #000;
    border-color: transparent;
  }
`;

const CTA = styled.section`
  max-width: 1100px;
  margin: 6rem auto 2rem;
  padding: 3.8rem 3rem;
  border-radius: 26px;
  background: linear-gradient(180deg, #121a1f, #0b1014);
  border: 1px solid rgba(160, 210, 220, 0.18);
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #cfdadd;
    max-width: 720px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    padding: 0.9rem 2.4rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #9fdde5, #5fcad6);
    color: #000;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }
  }
`;

// ---------------------- COMPONENT ----------------------

const Careers = () => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <h1>Careers at Altaric</h1>
        <p>Build advanced AI systems with a team that values depth, rigor, and real-world impact.</p>
      </Hero>

      <Divider />

      {/* ROLES */}
      <Section>
        <h2>Open Roles</h2>
        <p className="lead">
          We’re looking for engineers, strategists, and builders who care about
          solving meaningful problems — not chasing buzzwords.
        </p>

        <Grid>
          {[
            {
              title: "AI Engineer",
              desc:
                "Design and deploy end-to-end AI systems including ML, NLP, computer vision, and agent-based architectures.",
              mail: "AI%20Engineer"
            },
            {
              title: "AI Intern",
              desc:
                "Work closely with senior engineers on real-world AI systems while building strong fundamentals.",
              mail: "AI%20Intern"
            },
            {
              title: "Frontend Engineer",
              desc:
                "Craft high-quality user interfaces and enterprise-grade digital experiences using React.",
              mail: "Frontend%20Engineer"
            },
            {
              title: "AI Strategy Consultant",
              desc:
                "Help enterprises define, adopt, and scale AI-driven transformation strategies.",
              mail: "AI%20Strategy%20Consultant"
            }
          ].map((role, i) => (
            <CardLink key={i} to={`/careers/${role.title.toLowerCase().replace(/ /g, "-")}`}>
              <Card whileHover={{ scale: 1.01 }}>
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.desc}</p>
                </div>
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

      {/* CTA */}
      <CTA>
        <h2>Don’t See the Right Role?</h2>
        <p>
          If you believe you can add value, we want to hear from you.
          Reach out with your profile and what you’re excited to build.
        </p>
        <a href="mailto:tarun@altaric.com?subject=General%20Application">
          Get in Touch
        </a>
      </CTA>
    </Page>
  );
};

export default Careers;
