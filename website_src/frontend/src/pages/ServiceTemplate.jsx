import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

/* -------------------- Styled Components -------------------- */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  color: #fff;
`;

const HeroSection = styled.div`
  width: 100%;
  padding: 6rem 2rem 4rem 2rem;
  background: radial-gradient(circle at 20% 20%, #1a1a1a 0%, #000 70%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 10% 40%, rgba(66,133,244,0.35) 0%, transparent 50%),
    radial-gradient(circle at 90% 30%, rgba(251,188,5,0.28) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(52,168,83,0.28) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(234,67,53,0.25) 0%, transparent 50%);
  filter: blur(70px);
  opacity: 0.7;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  font-weight: 800;
  text-align: center;
  z-index: 2;
  position: relative;
  background: linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled(motion.p)`
  text-align: center;
  color: #ddd;
  max-width: 800px;
  margin: 1rem auto 0 auto;
  font-size: 1.2rem;
  line-height: 1.7;
  z-index: 2;
  position: relative;
`;

/* -------------------- Breadcrumbs -------------------- */

const BreadcrumbsWrapper = styled.div`
  margin: 1.5rem auto 3rem auto;
  max-width: 1100px;
  padding: 0 2rem;
`;

const Crumb = styled(Link)`
  color: #bbb;
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    color: #fff;
  }
`;

const CrumbCurrent = styled.span`
  color: #fff;
  font-weight: 600;
`;

const Section = styled(motion.div)`
  max-width: 900px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.06);
  padding: 2.5rem;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #4285F4;
    font-size: 1.4rem;
  }
`;

/* -------------------- Component -------------------- */

export default function ServiceTemplate({ title, description, features }) {
  const location = useLocation();

  return (
    <PageWrapper>

      {/* ---------- HERO SECTION ---------- */}
      <HeroSection>
        <HeroBackground />

        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {description}
        </HeroSubtitle>
      </HeroSection>

      {/* ---------- BREADCRUMBS ---------- */}
      <BreadcrumbsWrapper>
        <Crumb to="/">Home</Crumb> ›{" "}
        <Crumb to="/services">Services</Crumb> ›{" "}
        <CrumbCurrent>{title}</CrumbCurrent>
      </BreadcrumbsWrapper>

      {/* ---------- MAIN SECTION ---------- */}
      <Section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
      </Section>
    </PageWrapper>
  );
}
