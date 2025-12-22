import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Phone, Mail, Send, Building } from "lucide-react";

/* ------------------ API URL (UNCHANGED) ------------------ */
const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

/* ===================== CONTAINER ===================== */

const ContactFormContainer = styled.section`
  padding: 8rem 2rem;
  background: radial-gradient(circle at top, #0b0f14, #000 75%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

/* ===================== HEADER ===================== */

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 400;
  margin-bottom: 1.2rem;
  color: #ffffff;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255,255,255,0.65);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`;

/* ===================== GRID ===================== */

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* ===================== FORM ===================== */

const FormContainer = styled(motion.div)`
  background: linear-gradient(180deg, #0f141a, #0b0f14);
  border-radius: 22px;
  padding: 3rem;
  border: 1px solid rgba(255,255,255,0.08);

  box-shadow:
    0 12px 40px rgba(0,0,0,0.7),
    0 0 30px rgba(0,234,255,0.05);

  @media (max-width: 768px) {
    padding: 2.2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

/* ===================== INPUTS ===================== */

const FormGroup = styled.div`
  margin-bottom: 1.6rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.4rem;
`;

const inputBase = `
  width: 100%;
  padding: 0.95rem 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.25s ease;

  &::placeholder {
    color: rgba(255,255,255,0.4);
  }

  &:focus {
    outline: none;
    border-color: rgba(0,234,255,0.55);
    box-shadow: 0 0 0 2px rgba(0,234,255,0.15);
    background: rgba(255,255,255,0.06);
  }
`;

const Input = styled.input`${inputBase}`;

const Select = styled.select`
  ${inputBase}
  cursor: pointer;

  /* 🔥 FIX FOR WHITE DROPDOWN */
  option {
    background: #0b0f14;
    color: #ffffff;
  }

  option:checked {
    background: rgba(0,234,255,0.25);
  }
`;

const TextArea = styled.textarea`
  ${inputBase}
  min-height: 120px;
  resize: vertical;
`;

/* ===================== BUTTON ===================== */

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.1rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  color: #7de9f1;
  background: transparent;
  border: 1px solid rgba(125,233,241,0.45);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,234,255,0.12);
    box-shadow: 0 0 18px rgba(0,234,255,0.35);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

/* ===================== CONTACT INFO ===================== */

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.8rem;
  padding: 1.4rem;
  background: linear-gradient(180deg, #0f141a, #0b0f14);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0,234,255,0.35);
    box-shadow: 0 0 25px rgba(0,234,255,0.15);
  }
`;

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(0,234,255,0.15);
  color: #7de9f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.65);
  }
`;

/* ===================== COMPONENT ===================== */

const ContactForm = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    project_details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API}/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      alert("✅ Meeting scheduled successfully!");

      setFormData({
        full_name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        project_details: "",
      });
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFormContainer ref={containerRef} id="contact">
      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Schedule a Call</SectionTitle>
          <SectionSubtitle>
            Ready to transform your business with AI? Let’s talk.
          </SectionSubtitle>
        </SectionHeader>

        <FormGrid>
          <FormContainer
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <FormTitle>
              <Calendar size={22} /> Schedule a Meeting
            </FormTitle>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Full Name *</Label>
                <Input name="full_name" value={formData.full_name} onChange={handleInputChange} required />
              </FormGroup>

              <FormGroup>
                <Label>Email *</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </FormGroup>

              <FormGroup>
                <Label>Company</Label>
                <Input name="company" value={formData.company} onChange={handleInputChange} />
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input name="phone" value={formData.phone} onChange={handleInputChange} />
              </FormGroup>

              <FormGroup>
                <Label>Service</Label>
                <Select name="service" value={formData.service} onChange={handleInputChange}>
                  <option value="">Choose a service</option>
                  <option value="ai-consultation">AI Consultation</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="data-analytics">Data Analytics</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Project Details *</Label>
                <TextArea name="project_details" value={formData.project_details} onChange={handleInputChange} required />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Scheduling..." : <><Send size={18} /> Schedule Meeting</>}
              </SubmitButton>
            </form>
          </FormContainer>

          <ContactInfo
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3><Clock size={22} /> Contact Information</h3>

            <ContactItem>
              <ContactIcon><Phone size={20} /></ContactIcon>
              <ContactText><h4>Phone</h4><p>+91 72073 48777</p></ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon><Mail size={20} /></ContactIcon>
              <ContactText><h4>Email</h4><p>tarun@altaric.com</p></ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon><Building size={20} /></ContactIcon>
              <ContactText><h4>Business Hours</h4><p>Mon–Fri: 9 AM – 8 PM IST</p></ContactText>
            </ContactItem>
          </ContactInfo>
        </FormGrid>
      </ContentWrapper>
    </ContactFormContainer>
  );
};

export default ContactForm;
