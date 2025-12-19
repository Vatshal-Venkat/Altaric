import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

/* =======================
   PAGE FOUNDATION
======================= */

const PageWrapper = styled.div`
  min-height: 100vh;
  color: #e7e9ec;
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

const HeroSection = styled.section`
  position: relative;
  padding: 6.5rem 2rem 4.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroGlow = styled.div`
  position: absolute;
  top: -120px;
  left: 60%;
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(90, 200, 190, 0.18),
    transparent 70%
  );
  filter: blur(140px);
  pointer-events: none;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 5vw, 4.1rem);
  font-weight: 700;
  letter-spacing: -0.6px;
  margin-bottom: 0.8rem;
  color: #f4f6f8;
`;

const HeroSubtitle = styled(motion.p)`
  max-width: 720px;
  font-size: 1.12rem;
  line-height: 1.6;
  color: #c8cdd4;
`;

/* =======================
   BREADCRUMBS
======================= */

const BreadcrumbsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto 2.5rem;
  padding: 0 2rem;
  font-size: 0.9rem;
`;

const Crumb = styled(Link)`
  color: #9aa0a8;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const CrumbCurrent = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

/* =======================
   MAIN SECTION
======================= */

const Section = styled(motion.section)`
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 2.6rem 2.4rem;
  background: linear-gradient(180deg, #0f1114, #0b0c0e);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.55);
`;

/* =======================
   FEATURE GRID
======================= */

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
`;

const FeatureItem = styled.div`
  padding: 1.2rem 1.3rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.98rem;
  line-height: 1.55;
  color: #c3c8cf;
`;

/* =======================
   COMPONENT
======================= */

export default function ServiceTemplate({ title, description, features }) {
  const location = useLocation();

  return (
    <PageWrapper>
      {/* HERO */}
      <HeroSection>
        <HeroGlow />

        <HeroTitle
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
      <BreadcrumbsWrapper>
        <Crumb to="/">Home</Crumb> ›{" "}
        <Crumb to="/services">Services</Crumb> ›{" "}
        <CrumbCurrent>{title}</CrumbCurrent>
      </BreadcrumbsWrapper>

      {/* MAIN CONTENT */}
      <Section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureGrid>
      </Section>
    </PageWrapper>
  );
}
