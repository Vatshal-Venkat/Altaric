import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Heart, Building2, ShoppingCart, Radio, MessageSquare } from 'lucide-react';

const IndustriesContainer = styled.section`
  padding: 4rem 0 3rem 0;
  background: linear-gradient(135deg, #f7f7f7 0%, #f0f0f0 50%, #f7f7f7 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
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

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const IndustryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.02), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #000, transparent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(2deg) rotateY(2deg);
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IndustryIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #000, #333);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #000, #333);
    border-radius: 22px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
`;

const IndustryDescription = styled.p`
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const IndustryFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IndustryFeature = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #000;
    font-weight: bold;
  }
`;

const LearnMoreButton = styled(motion.button)`
  background: transparent;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: #000;
    background: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const Industries = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: <DollarSign size={40} />,
      title: "Finance",
      description: "Revolutionizing financial services with AI-powered risk assessment, fraud detection, and algorithmic trading solutions.",
      features: [
        "AI-powered risk assessment",
        "Fraud detection systems",
        "Algorithmic trading",
        "Customer service automation"
      ]
    },
    {
      icon: <Heart size={40} />,
      title: "Healthcare",
      description: "Transforming patient care with advanced diagnostics, personalized medicine, and medical imaging AI.",
      features: [
        "AI-powered diagnostics",
        "Personalized medicine",
        "Patient data analytics",
        "Medical imaging AI"
      ]
    },
    {
      icon: <Building2 size={40} />,
      title: "Manufacturing",
      description: "Revolutionizing production processes with AI-powered automation and predictive maintenance.",
      features: [
        "Smart factory automation",
        "Predictive maintenance",
        "Quality control AI",
        "Supply chain optimization"
      ]
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Retail & E-commerce",
      description: "Enhancing customer experiences with intelligent recommendations and inventory management.",
      features: [
        "Personalized recommendations",
        "Inventory optimization",
        "Customer behavior analytics",
        "Omnichannel solutions"
      ]
    },
    {
      icon: <Radio size={40} />,
      title: "Media",
      description: "Transforming content creation and distribution with AI-powered media solutions.",
      features: [
        "Content generation AI",
        "Media analytics",
        "Automated editing",
        "Audience insights"
      ]
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Communication",
      description: "Enhancing communication networks with intelligent routing and network optimization.",
      features: [
        "Network optimization",
        "Intelligent routing",
        "Communication analytics",
        "Infrastructure automation"
      ]
    }
  ];

  return (
    <IndustriesContainer ref={containerRef} id="industries">
      <BackgroundPattern />
      
      <ContentWrapper>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionTitle>Key Industries</SectionTitle>
          <SectionSubtitle>
            We serve diverse industries with tailored AI solutions that drive innovation and growth.
          </SectionSubtitle>
        </SectionHeader>

        <IndustriesGrid>
          {industries.map((industry, index) => (
            <IndustryCard
              as={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              className="interactive"
            >
              <IndustryIcon>
                {industry.icon}
              </IndustryIcon>
              <IndustryTitle>{industry.title}</IndustryTitle>
              <IndustryDescription>{industry.description}</IndustryDescription>
              <IndustryFeatures>
                {industry.features.map((feature, featureIndex) => (
                  <IndustryFeature key={featureIndex}>
                    {feature}
                  </IndustryFeature>
                ))}
              </IndustryFeatures>
              <LearnMoreButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="interactive"
              >
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