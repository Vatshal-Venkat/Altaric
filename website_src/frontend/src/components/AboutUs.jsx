import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #faf9f6 0%, #e2e8f0 100%);
  color: #18181b;
  padding-bottom: 4rem;
  margin-top: 5.5rem;
`;

const Hero = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #C6C6EB 0%, #fffbe6 100%);
  box-shadow: 0 4px 32px rgba(44,44,84,0.08);
  text-align: center;
  padding: 4rem 2rem 2rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.2rem;
  background: linear-gradient(45deg, #7C7CB2, #18181b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 4rem auto 0 auto;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(44,44,84,0.06);
  padding: 3rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #7C7CB2;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const AboutUs = () => (
  <PageContainer>
    <Hero>
      <Title initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>About Altaric</Title>
      <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Pioneering the future of technology with a relentless pursuit of excellence and innovation.</Subtitle>
    </Hero>
    <Section>
      <SectionTitle>Our Story</SectionTitle>
      <SectionText>
        Altaric was founded with a vision to revolutionize the digital landscape. From our inception, we've been committed to delivering transformative technology solutions that empower businesses to thrive in a rapidly evolving world.
      </SectionText>
      <SectionTitle>Our Mission</SectionTitle>
      <SectionText>
        To drive innovation and create value for our clients by harnessing the power of AI, digital transformation, and human ingenuity.
      </SectionText>
      <SectionTitle>Our Values</SectionTitle>
      <SectionText>
        <b>Excellence:</b> We set the highest standards in everything we do.<br/>
        <b>Integrity:</b> We act with honesty, transparency, and respect.<br/>
        <b>Innovation:</b> We embrace change and foster creativity.<br/>
        <b>Collaboration:</b> We believe in the power of teamwork and partnership.
      </SectionText>
    </Section>
  </PageContainer>
);

export default AboutUs; 