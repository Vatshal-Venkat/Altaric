import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

/* ===================== EFFECTS ===================== */

const scan = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 200%; }
`;

/* ===================== PAGE ===================== */

const PageContainer = styled.div`
  min-height: 100vh;
  margin-top: 5.5rem;
  padding-bottom: 5rem;
  color: #ffffff;

  background:
    linear-gradient(
      rgba(0,234,255,0.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(0,234,255,0.04) 1px,
      transparent 1px
    ),
    radial-gradient(circle at top, #05080c, #000 70%);
  background-size: 48px 48px, 48px 48px, cover;

  animation: ${scan} 40s linear infinite;
`;

/* ===================== HERO ===================== */

const Hero = styled.section`
  min-height: 42vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem 3rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 4.2rem);
  font-weight: 300;
  margin-bottom: 1.2rem;
  color: #7de9f1;
  text-shadow:
    0 0 18px rgba(0,234,255,0.55),
    0 0 42px rgba(0,234,255,0.25);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: rgba(200,245,255,0.7);
  max-width: 720px;
  line-height: 1.6;
`;

/* ===================== CARD SECTION ===================== */

const Section = styled.section`
  max-width: 900px;
  margin: 3.5rem auto 0;
  padding: 3.2rem 2.4rem;
  text-align: center;

  background:
    linear-gradient(180deg, rgba(15,20,26,0.9), rgba(5,8,12,0.95));
  border-radius: 24px;
  border: 1px solid rgba(0,234,255,0.35);

  box-shadow:
    0 0 40px rgba(0,234,255,0.25),
    inset 0 0 30px rgba(0,234,255,0.08);

  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 40%,
      rgba(0,234,255,0.08),
      transparent 60%
    );
    opacity: 0.6;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2.4rem 1.6rem;
  }
`;

/* ===================== CONTACT INFO ===================== */

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-bottom: 3rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  font-size: 1rem;
  color: rgba(200,245,255,0.75);
`;

/* ===================== FORM ===================== */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  max-width: 520px;
  margin: 0 auto;
`;

const inputBase = `
  padding: 0.95rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0,234,255,0.35);
  font-size: 0.95rem;
  background: rgba(5,10,14,0.85);
  color: #ffffff;
  transition: all 0.25s ease;
  font-family: inherit;

  &::placeholder {
    color: rgba(200,245,255,0.4);
  }

  &:focus {
    outline: none;
    border-color: rgba(0,234,255,0.9);
    box-shadow:
      0 0 12px rgba(0,234,255,0.6),
      inset 0 0 10px rgba(0,234,255,0.25);
    background: rgba(5,12,18,0.95);
  }
`;

const Input = styled.input`${inputBase}`;

const TextArea = styled.textarea`
  ${inputBase}
  min-height: 120px;
  resize: vertical;
`;

/* ===================== BUTTON ===================== */

const SubmitButton = styled(motion.button)`
  margin-top: 0.6rem;
  align-self: center;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.95rem 2.8rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;

  background: transparent;
  color: #7de9f1;
  border: 1px solid rgba(0,234,255,0.75);

  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow:
    0 0 18px rgba(0,234,255,0.35),
    inset 0 0 14px rgba(0,234,255,0.25);

  &:hover {
    box-shadow:
      0 0 30px rgba(0,234,255,0.85),
      inset 0 0 22px rgba(0,234,255,0.4);
    transform: translateY(-2px);
  }
`;

/* ===================== COMPONENT ===================== */

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageContainer>
      <Hero>
        <Title
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Establish a secure connection with Altaric.
          We’re ready to interface.
        </Subtitle>
      </Hero>

      <Section>
        <ContactInfo>
          <InfoItem><Mail size={18} /> tarun@altaric.com</InfoItem>
          <InfoItem><Phone size={18} /> +91 72073 48777</InfoItem>
          <InfoItem><MapPin size={18} /> Srinagar Colony, Banjara Hills, Hyderabad – 500073</InfoItem>
        </ContactInfo>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextArea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send size={18} /> Send Message
          </SubmitButton>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: 14,
                color: '#7de9f1',
                fontSize: '0.95rem',
                textShadow: '0 0 10px rgba(0,234,255,0.7)'
              }}
            >
              Transmission received. We’ll respond shortly.
            </motion.div>
          )}
        </Form>
      </Section>
    </PageContainer>
  );
};

export default ContactUs;
