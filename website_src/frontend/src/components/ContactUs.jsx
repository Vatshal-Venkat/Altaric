import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #444;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #C6C6EB;
  font-size: 1rem;
  background: #faf9f6;
  color: #18181b;
  transition: border 0.2s;
  &:focus {
    border-color: #7C7CB2;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #C6C6EB;
  font-size: 1rem;
  background: #faf9f6;
  color: #18181b;
  min-height: 120px;
  resize: vertical;
  transition: border 0.2s;
  font-family: inherit;
  &:focus {
    border-color: #7C7CB2;
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #7C7CB2, #C6C6EB);
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 4px 16px rgba(44,44,84,0.10);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(45deg, #C6C6EB, #7C7CB2);
    transform: translateY(-2px) scale(1.04);
  }
`;

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageContainer>
      <Hero>
        <Title initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>Contact Us</Title>
        <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>We'd love to hear from you. Reach out to Altaric for partnership, support, or general inquiries.</Subtitle>
      </Hero>
      <Section>
        <ContactInfo>
          <InfoItem><Mail size={20} /> tarun@altaric.com</InfoItem>
          <InfoItem><Phone size={20} /> +91 72073 48777</InfoItem>
          <InfoItem><MapPin size={20} /> Srinagar Colony, Banjarahills, Hyderabad - 500073</InfoItem>
        </ContactInfo>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <TextArea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Send size={20} style={{ marginRight: 8 }} /> Send Message
          </SubmitButton>
          {submitted && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#7C7CB2', marginTop: 12 }}>Thank you! We'll get back to you soon.</motion.div>}
        </Form>
      </Section>
    </PageContainer>
  );
};

export default ContactUs; 