import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import {
  DollarSign,
  Heart,
  Building2,
  ShoppingCart,
  Radio,
  MessageSquare,
} from "lucide-react";

// ------------------------ STYLES ------------------------

const IndustriesContainer = styled.section`
  padding: 3.5rem 0 3rem; /* reduced */
  background: radial-gradient(circle at top, #0c1014, #000 65%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2.8rem; /* reduced */
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  font-weight: 600;
  margin-bottom: 0.7rem;
  background: linear-gradient(45deg, #ffffff, #cfd8dc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #bcc9cd;
  max-width: 680px;
  line-height: 1.6;
  margin: 0 auto;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.1rem; /* tighter */
`;

const IndustryCard = styled(motion.div)`
  background: linear-gradient(180deg, #12161a, #0b0f13);
  border-radius: 18px;
  padding: 2.1rem 1.9rem;
  border: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 46px rgba(0, 0, 0, 0.65);
  }
`;

const IndustryIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #9fdde5, #5fcad6);
  border-radius: 14px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const IndustryTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #eef7f9;
`;

const IndustryDescription = styled.p`
  font-size: 0.98rem;
  color: #c6d4d8;
  margin-bottom: 0.9rem;
  line-height: 1.55;
`;

const IndustryFeatures = styled.ul`
  padding-left: 1.1rem;
  margin-bottom: 1.1rem;
`;

const IndustryFeature = styled.li`
  font-size: 0.9rem;
  margin-bottom: 0.45rem;
  color: #b8c6cb;
`;

const LearnMoreButton = styled(motion.button)`
  margin-top: auto;
  background: transparent;
  border: 1px solid rgba(160, 220, 230, 0.45);
  padding: 0.65rem 1.6rem;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #cfeaed;
  transition: 0.25s ease;

  &:hover {
    background: linear-gradient(90deg, #9fdde5, #5fcad6);
    color: #000;
    border-color: transparent;
  }
`;

// ------------------------ INDUSTRY ROUTES MAP ------------------------

const industryRoutes = {
  Finance: "/industries/finance",
  Healthcare: "/industries/healthcare",
  Manufacturing: "/industries/manufacturing",
  "Retail & E-commerce": "/industries/retail",
  "Media & Entertainment": "/industries/media",
  "Communication & Networks": "/industries/communications",
};

// ------------------------ DATA ------------------------

const industriesList = [
  {
    icon: <DollarSign size={32} />,
    title: "Finance",
    description:
      "AI is redefining financial operations—from automated risk assessment and fraud detection to intelligent portfolio management.",
    features: [
      "Risk prediction & underwriting AI",
      "Fraud detection & anomaly systems",
      "Algorithmic trading intelligence",
      "Conversational banking assistants",
    ],
  },
  {
    icon: <Heart size={32} />,
    title: "Healthcare",
    description:
      "AI-driven healthcare solutions enabling precision medicine, advanced diagnostics, and workflow automation.",
    features: [
      "Advanced diagnostics & imaging AI",
      "Predictive patient risk scoring",
      "Care automation & triage agents",
      "Medical record intelligence",
    ],
  },
  {
    icon: <Building2 size={32} />,
    title: "Manufacturing",
    description:
      "AI-powered automation, predictive maintenance, and quality assurance for smarter manufacturing.",
    features: [
      "Predictive maintenance AI",
      "Quality control automation",
      "Robotic vision & task automation",
      "Digital twins & process modeling",
    ],
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "Retail & E-commerce",
    description:
      "AI-powered personalization, forecasting, and customer insights driving commerce innovation.",
    features: [
      "Recommendation engines",
      "Customer segmentation AI",
      "Inventory & demand forecasting",
      "Omnichannel behavior analytics",
    ],
  },
  {
    icon: <Radio size={32} />,
    title: "Media & Entertainment",
    description:
      "AI automation transforming content creation, analysis, and personalization in the media world.",
    features: [
      "Generative content creation",
      "Media analysis & scene detection",
      "Audience insight modeling",
      "Automated post-production tools",
    ],
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Communication & Networks",
    description:
      "AI-powered optimization of communication systems, routing, and infrastructure management.",
    features: [
      "Network optimization AI",
      "Smart routing engines",
      "Communication analytics",
      "Intelligent infrastructure automation",
    ],
  },
];

// ------------------------ COMPONENT ------------------------

const IndustriesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <IndustriesContainer ref={containerRef}>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle>Industries</SectionTitle>
          <SectionSubtitle>
            AI-powered solutions built for complex, regulated, and high-scale industries.
          </SectionSubtitle>
        </SectionHeader>

        <IndustriesGrid>
          {industriesList.map((item, index) => (
            <IndustryCard
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <IndustryIcon>{item.icon}</IndustryIcon>
              <IndustryTitle>{item.title}</IndustryTitle>
              <IndustryDescription>{item.description}</IndustryDescription>

              <IndustryFeatures>
                {item.features.map((f, i) => (
                  <IndustryFeature key={i}>{f}</IndustryFeature>
                ))}
              </IndustryFeatures>

              <Link
                to={industryRoutes[item.title]}
                style={{ textDecoration: "none" }}
              >
                <LearnMoreButton whileTap={{ scale: 0.95 }}>
                  Learn More →
                </LearnMoreButton>
              </Link>
            </IndustryCard>
          ))}
        </IndustriesGrid>
      </ContentWrapper>
    </IndustriesContainer>
  );
};

export default IndustriesSection;
