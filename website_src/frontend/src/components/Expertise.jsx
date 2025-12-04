import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Brain, MessageSquare, Eye, Cpu, Zap, Users } from 'lucide-react';
import { Link } from "react-router-dom";

const ExpertiseContainer = styled.section`
  padding: 4rem 0 3rem 0;
  background: linear-gradient(135deg, #faf9f6 0%, #f5f5f0 50%, #faf9f6 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 30% 70%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #000, #333);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ExpertiseCard = styled(motion.div)`
  background: #F6F6FB;
  border-radius: 20px;
  border: 1.5px solid #e5e7eb;
  box-shadow: 0 8px 32px rgba(44, 44, 84, 0.10), 0 1.5px 8px rgba(0,0,0,0.04);
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 260px;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  overflow: visible;

  &:hover {
    box-shadow: 0 16px 48px rgba(44, 44, 84, 0.16), 0 2px 12px rgba(0,0,0,0.10);
    border: 1.5px solid #bcbcdf;
    transform: translateY(-10px) scale(1.04);
  }
`;

const IconCircle = styled(motion.div)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(44, 44, 84, 0.10);
  margin-bottom: 1.2rem;
  font-size: 2.2rem;
  color: #7C7CB2;
`;

const CardTitle = styled.h4`
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #22223b;
  text-align: center;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #666;
  opacity: 0.85;
  text-align: center;
`;

const ExpertiseFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1.2rem;
`;

const ExpertiseFeature = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  text-align: left;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #000;
    font-weight: bold;
  }
`;

const StyledLinkButton = styled(Link)`
  background: linear-gradient(45deg, #000, #333);
  color: #fff;
  padding: 0.85rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #333, #000);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 16px rgba(0,0,0,0.16);
  }
`;

const Expertise = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const expertiseAreas = [
    {
      icon: <Brain size={40} />,
      title: "Agentic AI",
      link: "/services/agentic-ai",
      description: "Autonomous AI agents that can perform complex tasks, make decisions, and learn from their environment.",
      features: [
        "Autonomous decision making",
        "Task automation",
        "Multi-agent systems",
        "Adaptive learning"
      ]
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Large Language Models",
      link: "/services/llm",
      description: "Advanced language models that understand, generate, and process human language with unprecedented accuracy.",
      features: [
        "Natural language understanding",
        "Text generation",
        "Conversational AI",
        "Content summarization"
      ]
    },
    {
      icon: <Cpu size={40} />,
      title: "Natural Language Processing",
      link: "/services/nlp",
      description: "Sophisticated NLP solutions that extract meaning, sentiment, and insights from text data.",
      features: [
        "Sentiment analysis",
        "Named entity recognition",
        "Text classification",
        "Language translation"
      ]
    },
    {
      icon: <Eye size={40} />,
      title: "Computer Vision",
      link: "/services/computer-vision",
      description: "Advanced computer vision systems that analyze and interpret visual information.",
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "Video analytics"
      ]
    },
    {
      icon: <Zap size={40} />,
      title: "Machine Learning",
      link: "/services/machine-learning",
      description: "Custom machine learning models that learn patterns and make predictions from complex datasets.",
      features: [
        "Predictive modelling",
        "Pattern recognition",
        "Anomaly detection",
        "Recommendation engines"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "AI Consulting",
      link: "/services/ai-consulting",
      description: "End-to-end AI consulting to help organizations adopt, scale, and optimize AI solutions.",
      features: [
        "AI roadmap creation",
        "Technical advisory",
        "Implementation planning",
        "Change management"
      ]
    }
  ];

  return (
    <ExpertiseContainer ref={containerRef} id="expertise">
      <BackgroundPattern />
      
      <ContentWrapper>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionTitle>Our Expertise</SectionTitle>
          <SectionSubtitle>
            We specialize in cutting-edge AI technologies that drive innovation and transform businesses.
          </SectionSubtitle>
        </SectionHeader>

        <ExpertiseGrid>
          {expertiseAreas.map((expertise, index) => (
            <ExpertiseCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              className="interactive"
            >
              <IconCircle>
                {expertise.icon}
              </IconCircle>

              <CardTitle>{expertise.title}</CardTitle>
              <CardDesc>{expertise.description}</CardDesc>

              <ExpertiseFeatures>
                {expertise.features.map((feature, i) => (
                  <ExpertiseFeature key={i}>{feature}</ExpertiseFeature>
                ))}
              </ExpertiseFeatures>

              {/* UPDATED: Learn More Button with Navigation */}
              <StyledLinkButton to={expertise.link}>
                Learn More
              </StyledLinkButton>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </ContentWrapper>
    </ExpertiseContainer>
  );
};

export default Expertise;
