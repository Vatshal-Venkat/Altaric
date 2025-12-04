import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #000 0%, #111 50%, #000 100%);
  color: #fff;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CompanySection = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #fff, #888);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 400px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.95rem;

    &:hover {
      color: #fff;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const ScrollToTop = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <BackgroundPattern />
      
      <ContentWrapper>
        <FooterGrid>
          <CompanySection>
            <h3>ALTARIC</h3>
            <p>
              Transforming businesses through cutting-edge AI solutions and digital innovation. 
              We help organizations harness the power of artificial intelligence to drive growth and success.
            </p>
            <SocialLinks>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="interactive"
              >
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="interactive"
              >
                <Twitter size={20} />
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="interactive"
              >
                <Github size={20} />
              </SocialLink>
            </SocialLinks>
          </CompanySection>

          <FooterSection>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#expertise">Our Expertise</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Services</h4>
            <ul>
              <li><a href="#expertise">Agentic AI</a></li>
              <li><a href="#expertise">Large Language Models</a></li>
              <li><a href="#expertise">Natural Language Processing</a></li>
              <li><a href="#expertise">Computer Vision</a></li>
              <li><a href="#expertise">Machine Learning</a></li>
              <li><a href="#expertise">AI Consulting</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Contact</h4>
            <ContactInfo>
              <ContactItem>
                <Mail size={18} />
                hello@altaric.com
              </ContactItem>
              <ContactItem>
                <Phone size={18} />
                +91 72073 48777
              </ContactItem>
              <ContactItem>
                <MapPin size={18} />
                123 Innovation Drive<br />
                Tech City, TC 12345
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <BottomBar>
          <Copyright>
            © 2024 Altaric. All rights reserved. | Privacy Policy | Terms of Service
          </Copyright>
          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="interactive"
          >
            <ArrowUp size={24} />
          </ScrollToTop>
        </BottomBar>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer; 