import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Phone, Mail, Send, Building } from "lucide-react";

// ------------------ API URL ------------------
const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

// ------------------ Styled Components ------------------
const ContactFormContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #ffe4b5 0%, #fffbe6 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
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
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FormContainer = styled(motion.div)`
  background: #fff;
  border: 1px solid rgba(255, 140, 0, 0.2);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(255, 140, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: #fff;
  border: 1px solid rgba(255, 140, 0, 0.3);
  border-radius: 10px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #ff8c00;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: #fff;
  border: 1px solid rgba(255, 140, 0, 0.3);
  border-radius: 10px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff8c00;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: #fff;
  border: 1px solid rgba(255, 140, 0, 0.3);
  border-radius: 10px;
  color: #333;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #ff8c00;
    box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(45deg, #ff8c00, #ffa500);
  color: #fff;
  border: none;
  padding: 1.2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 140, 0, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fff;
  border: 1px solid rgba(255, 140, 0, 0.2);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 140, 0, 0.4);
    box-shadow: 0 4px 15px rgba(255, 140, 0, 0.2);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff8c00, #ffa500);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

// ------------------ Component ------------------
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API}/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      alert("✅ Meeting scheduled successfully!");

      setFormData({
        full_name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        project_details: "",
      });

    } catch (error) {
      alert("❌ Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFormContainer ref={containerRef} id="contact">
      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Schedule a Call</SectionTitle>
          <SectionSubtitle>
            Ready to transform your business with AI? 
            Let's discuss how we can help you achieve your goals.
          </SectionSubtitle>
        </SectionHeader>

        <FormGrid>
          
          {/* Form */}
          <FormContainer
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FormTitle>
              <Calendar size={24} />
              Schedule a Meeting
            </FormTitle>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="service">Select a Service</Label>
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">Choose a service...</option>
                  <option value="ai-consultation">AI Consultation</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="project_details">Project Details *</Label>
                <TextArea
                  id="project_details"
                  name="project_details"
                  value={formData.project_details}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project..."
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      border: "2px solid #fff",
                      borderTop: "2px solid transparent",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <>
                    <Send size={20} />
                    Schedule Meeting
                  </>
                )}
              </SubmitButton>
            </form>
          </FormContainer>

          {/* Contact Details */}
          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>
              <Clock size={24} /> Contact Information
            </h3>

            <ContactItem>
              <ContactIcon>
                <Phone size={24} />
              </ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p>+91 72073 48777</p>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <Mail size={24} />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>tarun@altaric.com</p>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <Building size={24} />
              </ContactIcon>
              <ContactText>
                <h4>Business Hours</h4>
                <p>Mon–Fri: 9 AM – 8 PM IST</p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
        </FormGrid>
      </ContentWrapper>
    </ContactFormContainer>
  );
};

export default ContactForm;
