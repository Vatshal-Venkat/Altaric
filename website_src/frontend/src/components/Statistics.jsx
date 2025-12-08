import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

// ---------------------- WAVE STYLES ----------------------

const WaveTop = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  position: relative;
  margin-bottom: -1px;

  svg {
    display: block;
    width: 100%;
    height: 80px;
  }
`;

const WaveBottom = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  position: relative;
  margin-top: -1px;

  svg {
    display: block;
    width: 100%;
    height: 80px;
  }
`;

// ---------------------- SECTION STYLES ----------------------

const StatisticsContainer = styled.section`
  padding: 6rem 0;
  background: #000;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%);
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(45deg, #fff, #d1d1d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #aaa;
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;

// ---------------------- CARDS ----------------------

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  background: #0f0f0f;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    background: #171717;
    box-shadow: 0 20px 40px rgba(0,0,0,0.9);
  }
`;

const StatIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e1e1e, #2d2d2d);
  border-radius: 16px;
  margin: 0 auto 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00e5ff;
`;

const StatNumber = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #cfcfcf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.h4`
  color: #eee;
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
`;

const StatDescription = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

// ---------------------- COUNTER HOOK ----------------------

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

// ---------------------- MAIN COMPONENT ----------------------

const Statistics = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: <TrendingUp size={36} />, number: 500, label: "Projects Completed", description: "Enterprise AI deployments" },
    { icon: <Users size={36} />, number: 50, label: "Clients Worldwide", description: "Trusted by global innovators" },
    { icon: <Globe size={36} />, number: 25, label: "Countries Served", description: "Expanding global footprint" },
    { icon: <Award size={36} />, number: 15, label: "Industry Awards", description: "Recognized for excellence" },
  ];

  return (
    <>
      {/* ---------------- TOP WAVE ---------------- */}
      <WaveTop>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,120 1080,-40 1440,30 L1440,0 L0,0 Z" fill="#000" />
        </svg>
      </WaveTop>

      {/* ---------------- STATISTICS SECTION ---------------- */}
      <StatisticsContainer ref={ref}>
        <BackgroundPattern />

        <ContentWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Our Achievements</SectionTitle>
            <SectionSubtitle>Numbers that highlight our enterprise AI impact.</SectionSubtitle>
          </SectionHeader>

          <StatsGrid>
            {stats.map((stat, index) => {
              const [count, startCounter] = useCounter(stat.number);

              useEffect(() => {
                if (isInView) startCounter();
              }, [isInView]);

              return (
                <StatCard key={index}>
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

      {/* ---------------- BOTTOM WAVE ---------------- */}
      <WaveBottom>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C360,-40 1080,120 1440,50 L1440,90 L0,90 Z" fill="#000" />
        </svg>
      </WaveBottom>
    </>
  );
};

export default Statistics;
