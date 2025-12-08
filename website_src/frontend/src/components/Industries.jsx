import React, { useRef } from "react";
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
  padding: 4rem 0 3rem 0;
  background: #f5f5f5;
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
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #000, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.65);
  max-width: 620px;
  line-height: 1.6;
  margin: 0 auto;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const IndustryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.92);
  border-radius: 20px;
  padding: 2.2rem 1.8rem;

  border: 1px solid rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(14px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px; /* ⭐ Ensures equal card height */

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: 0.35s ease;
  cursor: pointer;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-10px) rotateX(6deg) rotateY(6deg) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  }
`;

const IndustryIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #000, #333);
  border-radius: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.7rem;
  transform: translateZ(20px);
`;

const IndustryTitle = styled.h3`
  font-size: 1.55rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #000;
  transform: translateZ(15px);
`;

const IndustryDescription = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  line-height: 1.55;
  transform: translateZ(10px);
`;

const IndustryFeatures = styled.ul`
  padding-left: 1.2rem;
  margin-bottom: 1.3rem;
  transform: translateZ(10px);
`;

const IndustryFeature = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.65);
`;

const LearnMoreButton = styled(motion.button)`
  margin-top: auto;

  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.75rem 1.8rem;
  border-radius: 30px;
  font-size: 0.95rem;
  cursor: pointer;

  transition: 0.3s ease;
  transform: translateZ(20px);

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

// ------------------------ DATA ------------------------

const industriesList = [
  {
    icon: <DollarSign size={38} />,
    title: "Finance",
    description:
      "AI is redefining financial operations—from automated risk assessment and fraud detection to intelligent portfolio management. We help financial institutions unlock deeper insights, reduce operational overhead, and deploy hyper-accurate predictive systems.",
    features: [
      "Risk prediction & underwriting AI",
      "Fraud detection & anomaly systems",
      "Algorithmic trading intelligence",
      "Conversational banking assistants",
    ],
  },
  {
    icon: <Heart size={38} />,
    title: "Healthcare",
    description:
      "AI-driven healthcare solutions enable precision medicine, enhance diagnostics, and optimize clinical workflows. We bring intelligent automation to hospitals, labs, and telemedicine platforms with measurable improvements in patient outcomes.",
    features: [
      "Advanced diagnostics & imaging AI",
      "Predictive patient risk scoring",
      "Care automation & triage agents",
      "Medical record intelligence",
    ],
  },
  {
    icon: <Building2 size={38} />,
    title: "Manufacturing",
    description:
      "Smart manufacturing is powered by real-time analytics, robotic automation, and AI-driven quality assurance. We enable factories to achieve zero downtime, boost throughput, and implement digital twins for process optimization.",
    features: [
      "Predictive maintenance AI",
      "Quality control automation",
      "Robotic vision & task automation",
      "Digital twins & process modeling",
    ],
  },
  {
    icon: <ShoppingCart size={38} />,
    title: "Retail & E-commerce",
    description:
      "From personalization to demand forecasting, AI empowers retailers to understand customers better and optimize the supply chain. Our solutions enhance CX, increase conversion, and optimize inventory flows with intelligent automation.",
    features: [
      "Recommendation engines",
      "Customer segmentation AI",
      "Inventory & demand forecasting",
      "Omnichannel behavior analytics",
    ],
  },
  {
    icon: <Radio size={38} />,
    title: "Media & Entertainment",
    description:
      "AI is transforming the media industry with automated editing, content generation, scene understanding, and behavioral analytics. We help studios & creators streamline workflows while unlocking new storytelling possibilities.",
    features: [
      "Generative content creation",
      "Media analysis & scene detection",
      "Audience insight modeling",
      "Automated post-production tools",
    ],
  },
  {
    icon: <MessageSquare size={38} />,
    title: "Communication & Networks",
    description:
      "Modern communication systems rely on AI for routing, optimization, and infrastructure management. Our intelligent network solutions deliver lower latency, stronger reliability, and proactive issue detection.",
    features: [
      "Network optimization AI",
      "Smart routing engines",
      "Communication analytics",
      "Intelligent infrastructure automation",
    ],
  },
];

// ------------------------ COMPONENT ------------------------

const Industries = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <IndustriesContainer id="industries" ref={containerRef}>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle>Key Industries</SectionTitle>
          <SectionSubtitle>
            AI-powered solutions that accelerate digital transformation across
            global industries.
          </SectionSubtitle>
        </SectionHeader>

        <IndustriesGrid>
          {industriesList.map((item, index) => (
            <IndustryCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <IndustryIcon>{item.icon}</IndustryIcon>
              <IndustryTitle>{item.title}</IndustryTitle>
              <IndustryDescription>{item.description}</IndustryDescription>

              <IndustryFeatures>
                {item.features.map((f, i) => (
                  <IndustryFeature key={i}>{f}</IndustryFeature>
                ))}
              </IndustryFeatures>

              <LearnMoreButton whileTap={{ scale: 0.9 }}>
                Learn More
              </LearnMoreButton>
            </IndustryCard>
          ))}
        </IndustriesGrid>
      </ContentWrapper>
    </IndustriesContainer>
  );
};

export default Industries;
