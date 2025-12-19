/*import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const StatisticsContainer = styled.section`
  padding: 4rem 0 3rem 0;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 50%, #f0f4f8 100%);
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
    radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.03) 0%, transparent 50%);
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #000, #333);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #fff;
`;

const StatNumber = styled(motion.div)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #000, #333);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;
`;

const StatDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
`;

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return [count, () => setStarted(true)];
};

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <TrendingUp size={40} />,
      number: 500,
      label: "Projects Completed",
      description: "Successfully delivered innovative solutions across industries",
    },
    {
      icon: <Users size={40} />,
      number: 50,
      label: "Global Clients",
      description: "Trusted by leading companies worldwide",
    },
    {
      icon: <Globe size={40} />,
      number: 25,
      label: "Countries Served",
      description: "Expanding our global footprint and impact",
    },
    {
      icon: <Award size={40} />,
      number: 15,
      label: "Industry Awards",
      description: "Recognized for excellence and innovation",
    },
  ];

  return (
    <StatisticsContainer ref={ref} id="statistics">
      <BackgroundPattern />
      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Our Achievements</SectionTitle>
          <SectionSubtitle>
            Numbers that tell the story of our success and the impact we've made.
          </SectionSubtitle>
        </SectionHeader>

        <StatsGrid>
          {stats.map((stat, i) => {
            const [count, startCounter] = useCounter(stat.number);

            useEffect(() => {
              if (isInView) startCounter();
            }, [isInView]);

            return (
              <StatCard key={i}>
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{count}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
                <StatDescription>{stat.description}</StatDescription>
              </StatCard>
            );
          })}
        </StatsGrid>
      </ContentWrapper>
    </StatisticsContainer>
  );
};

export default Statistics;*/
