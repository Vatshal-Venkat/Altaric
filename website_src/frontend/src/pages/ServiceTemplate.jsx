import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* =======================
   PAGE FOUNDATION
======================= */

const PageWrapper = styled.div`
  min-height: 100vh;
  color: #e8ebf0;
  background:
    radial-gradient(circle at top, rgba(90, 200, 190, 0.12), transparent 45%),
    linear-gradient(180deg, #020408 0%, #000000 100%),
    repeating-linear-gradient(
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 48px
    );
`;

/* =======================
   HERO
======================= */

const HeroSection = styled.section`
  position: relative;
  padding: 7rem 2rem 4.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const StarGlow = styled.div`
  position: absolute;
  top: -180px;
  right: -120px;
  width: 520px;
  height: 520px;
  background: radial-gradient(
    circle,
    rgba(120, 255, 230, 0.22),
    transparent 70%
  );
  filter: blur(160px);
  pointer-events: none;
`;

const EnergyLine = styled.div`
  width: 120px;
  height: 2px;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, transparent, #7fffd4, transparent);
  opacity: 0.8;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 4.3rem);
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 0.8rem;
  background: linear-gradient(90deg, #eafffb, #7fffd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled(motion.p)`
  max-width: 720px;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #c7ccd4;
`;

/* =======================
   BREADCRUMBS
======================= */

const Breadcrumbs = styled.div`
  max-width: 1100px;
  margin: 0 auto 2.5rem;
  padding: 0 2rem;
  font-size: 0.9rem;
  color: #8e949d;
`;

const Crumb = styled(Link)`
  color: #8e949d;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

/* =======================
   SECTIONS
======================= */

const Section = styled(motion.section)`
  max-width: 960px;
  margin: 0 auto 3.8rem;
  padding: 2.8rem;
  background: linear-gradient(180deg, rgba(15, 18, 24, 0.9), rgba(8, 10, 14, 0.9));
  border-radius: 18px;
  border: 1px solid rgba(120, 200, 190, 0.18);
  box-shadow:
    0 0 0 1px rgba(120, 200, 190, 0.05),
    0 18px 50px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  color: #7fffd4;
`;

/* =======================
   CAPABILITIES
======================= */

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  padding: 1.3rem 1.4rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(120, 200, 190, 0.15);
  font-size: 0.98rem;
  line-height: 1.55;
  color: #d0d5dc;
`;

/* =======================
   USE CASES
======================= */

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
`;

const UseCaseCard = styled.div`
  padding: 1.6rem;
  border-radius: 16px;
  background: linear-gradient(180deg, #0b0f14, #070a0e);
  border: 1px solid rgba(160, 170, 255, 0.16);

  h4 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
    color: #e9ecf1;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.55;
    color: #c3c9d1;
  }
`;

/* =======================
   COMPONENT
======================= */

export default function ServiceTemplate({
  title,
  description,
  features,
  useCases = []
}) {
  return (
    <PageWrapper>
      {/* HERO */}
      <HeroSection>
        <StarGlow />
        <EnergyLine />

        <HeroTitle initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          {title}
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </HeroSubtitle>
      </HeroSection>

      {/* BREADCRUMBS */}
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb> › <Crumb to="/services">Services</Crumb> ›{" "}
        <strong>{title}</strong>
      </Breadcrumbs>

      {/* CAPABILITIES */}
      <Section initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}>
        <SectionTitle>Core Capabilities</SectionTitle>
        <FeatureGrid>
          {features.map((f, i) => (
            <FeatureItem key={i}>{f}</FeatureItem>
          ))}
        </FeatureGrid>
      </Section>

      {/* USE CASES */}
      {useCases.length > 0 && (
        <Section
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <SectionTitle>Typical Use Cases</SectionTitle>
          <UseCaseGrid>
            {useCases.map((u, i) => (
              <UseCaseCard key={i}>
                <h4>{u.title}</h4>
                <p>{u.text}</p>
              </UseCaseCard>
            ))}
          </UseCaseGrid>
        </Section>
      )}
    </PageWrapper>
  );
}
