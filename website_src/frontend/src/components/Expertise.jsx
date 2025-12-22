import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Brain, MessageSquare, Eye, Cpu, Zap, Users } from 'lucide-react';
import { Link } from "react-router-dom";

/* ===================== CONTAINER ===================== */

const ExpertiseContainer = styled.section`
  padding: 6rem 0 5rem;
  background: radial-gradient(circle at top, #0b0f14, #000 70%);
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 234, 255, 0.06), transparent 45%),
    radial-gradient(circle at 80% 70%, rgba(0, 234, 255, 0.05), transparent 45%);
  pointer-events: none;
`;

/* ===================== LAYOUT ===================== */

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 1.2rem;
  color: #ffffff;
`;

const SectionSubtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

/* ===================== GRID ===================== */

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  max-width: 1150px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* ===================== CARD ===================== */

const ExpertiseCard = styled(motion.div)`
  background: linear-gradient(180deg, #0f141a, #0b0f14);
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 2.6rem 1.8rem 2.2rem;
  min-height: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow:
    0 10px 40px rgba(0,0,0,0.6),
    inset 0 0 0 rgba(0,0,0,0);

  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-10px) scale(1.035);
    border-color: rgba(0,234,255,0.35);
    box-shadow:
      0 20px 60px rgba(0,0,0,0.85),
      0 0 30px rgba(0,234,255,0.12);
  }
`;

/* ===================== ICON ===================== */

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(0,234,255,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7de9f1;
  margin-bottom: 1.4rem;
  box-shadow: 0 0 24px rgba(0,234,255,0.25);
`;

/* ===================== TEXT ===================== */

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
  text-align: center;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
  text-align: center;
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;

const ExpertiseFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.6rem;
  width: 100%;
`;

const ExpertiseFeature = styled.li`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.5rem;
  padding-left: 1.4rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #7de9f1;
    font-weight: bold;
  }
`;

/* ===================== BUTTON ===================== */

const StyledLinkButton = styled(Link)`
  margin-top: auto;
  padding: 0.7rem 1.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #7de9f1;
  text-decoration: none;

  border: 1px solid rgba(125,233,241,0.45);
  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,234,255,0.12);
    box-shadow: 0 0 18px rgba(0,234,255,0.35);
    transform: translateY(-2px);
  }
`;

/* ===================== COMPONENT ===================== */

const Expertise = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const expertiseAreas = [
    {
      icon: <Brain size={36} />,
      title: "Agentic AI",
      link: "/services/agentic-ai",
      description: "Autonomous AI agents capable of decision-making, coordination, and adaptive execution.",
      features: ["Autonomous decisions", "Task automation", "Multi-agent systems", "Adaptive learning"]
    },
    {
      icon: <MessageSquare size={36} />,
      title: "Large Language Models",
      link: "/services/llm",
      description: "State-of-the-art language intelligence for reasoning, generation, and dialogue.",
      features: ["NLU", "Text generation", "Conversational AI", "Summarization"]
    },
    {
      icon: <Cpu size={36} />,
      title: "Natural Language Processing",
      link: "/services/nlp",
      description: "Deep NLP systems extracting structured intelligence from raw text.",
      features: ["Sentiment analysis", "NER", "Text classification", "Translation"]
    },
    {
      icon: <Eye size={36} />,
      title: "Computer Vision",
      link: "/services/computer-vision",
      description: "Vision systems that interpret images and video at scale.",
      features: ["Object detection", "Image classification", "Facial recognition", "Video analytics"]
    },
    {
      icon: <Zap size={36} />,
      title: "Machine Learning",
      link: "/services/machine-learning",
      description: "Custom ML models built for prediction, insight, and automation.",
      features: ["Predictive models", "Pattern recognition", "Anomaly detection", "Recommendations"]
    },
    {
      icon: <Users size={36} />,
      title: "AI Consulting",
      link: "/services/ai-consulting",
      description: "Strategic guidance to design, deploy, and scale AI across organizations.",
      features: ["AI roadmaps", "Technical advisory", "Implementation", "Change management"]
    }
  ];

  return (
    <ExpertiseContainer ref={containerRef} id="expertise">
      <BackgroundPattern />

      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionTitle>Our Expertise</SectionTitle>
          <SectionSubtitle>
            Advanced AI capabilities engineered for real-world impact across industries.
          </SectionSubtitle>
        </SectionHeader>

        <ExpertiseGrid>
          {expertiseAreas.map((item, index) => (
            <ExpertiseCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <IconCircle>{item.icon}</IconCircle>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.description}</CardDesc>

              <ExpertiseFeatures>
                {item.features.map((f, i) => (
                  <ExpertiseFeature key={i}>{f}</ExpertiseFeature>
                ))}
              </ExpertiseFeatures>

              <StyledLinkButton to={item.link}>
                Learn More →
              </StyledLinkButton>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </ContentWrapper>
    </ExpertiseContainer>
  );
};

export default Expertise;
