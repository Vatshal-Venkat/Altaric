// src/pages/Home.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero"; // adjust path if needed
import { Link } from "react-router-dom";

/*
  Home page: Hero + Why Altaric + Services + Industries + Solutions + Case studies + Testimonials + CTA + Footer
  Uses styled-components and framer-motion like your Hero.
*/

const PageWrapper = styled.div`
  font-family: 'Space Grotesk', sans-serif; /* Ensure font import in index.html or CSS */
  color: var(--color-text, #eaf9ff);
  background: var(--color-bg, #0e0f11);
`;

/* --- Section helpers --- */
const Section = styled.section`
  padding: 5.2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.25rem;
`;

const Eyebrow = styled.div`
  color: rgba(150,200,255,0.7);
  font-weight: 600;
  letter-spacing: 0.06em;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  margin: 0;
  color: #f1fbff;
  line-height: 1.05;
`;

const Lead = styled.p`
  color: rgba(210,230,255,0.86);
  max-width: 900px;
  margin: 0.8rem auto 0;
`;

/* --- Grid / Cards --- */
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius: 12px;
  padding: 1.6rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.03);
`;

const CardTitle = styled.h3`
  margin: 0 0 0.6rem 0;
  color: #eaffff;
  font-size: 1.05rem;
`;

const CardText = styled.p`
  margin: 0;
  color: rgba(210,230,255,0.8);
  font-size: 0.95rem;
`;

/* --- CTA --- */
const CTAWrap = styled(Section)`
  background: linear-gradient(180deg, rgba(0,18,28,0.6), rgba(0,0,0,0.35));
  border-top: 1px solid rgba(255,255,255,0.03);
  text-align: center;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg,#00d0ff,#00a4ff);
  color: #001;
  padding: 0.95rem 1.6rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 36px rgba(0,160,255,0.12);
  transition: transform 0.18s ease;

  &:hover { transform: translateY(-4px); }
`;

/* --- Footer --- */
const FooterWrap = styled.footer`
  padding: 2.25rem;
  text-align: center;
  color: rgba(200,215,230,0.7);
  border-top: 1px solid rgba(255,255,255,0.03);
  background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.04));
`;

/* ---------------- HOME PAGE COMPONENT ---------------- */

const Home = () => {
  return (
    <PageWrapper>
      {/* HERO (from components) */}
      <Hero /> {/* uses your upgraded Hero with Space Grotesk — make sure it's at src/components/Hero.jsx */} 

      {/* WHY ALTARIC */}
      <Section id="why">
        <SectionHeader>
          <Eyebrow>Why Altaric</Eyebrow>
          <Title>AI with business-first outcomes</Title>
          <Lead>
            We partner with enterprise teams to craft AI strategies, build
            production-grade systems, and bring measurable outcomes — faster.
            Our approach blends domain expertise, engineering rigor, and product-first design.
          </Lead>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Strategy & Roadmap</CardTitle>
            <CardText>
              Discovery workshops, maturity assessments and pragmatic roadmaps that prioritize high-value, low-risk AI initiatives.
            </CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>Data & ML Engineering</CardTitle>
            <CardText>
              Scalable pipelines, feature stores, model-serving and observability for reliable ML in production.
            </CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>Computer Vision</CardTitle>
            <CardText>
              End-to-end CV systems: detection, tracking, inspection, OCR and video analytics tailored for the domain.
            </CardText>
          </Card>
        </Grid>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section id="services">
        <SectionHeader>
          <Eyebrow>Services</Eyebrow>
          <Title>What we deliver</Title>
          <Lead>From prototypes to production — our services cover the full lifecycle of AI products.</Lead>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>AI Consulting</CardTitle>
            <CardText>Strategy, opportunity sizing, ROI modelling and stakeholder roadmaps.</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>ML Model Development</CardTitle>
            <CardText>Custom models for classification, forecasting, ranking and embeddings-based search.</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>AI Agents & LLMs</CardTitle>
            <CardText>Conversational assistants, document automation, retrieval-augmented generation and workflows.</CardText>
          </Card>
        </Grid>

        <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
          <CTAButton to="/services">
            Explore services <ArrowRight size={16} />
          </CTAButton>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section id="industries">
        <SectionHeader>
          <Eyebrow>Industries</Eyebrow>
          <Title>Industry solutions</Title>
          <Lead>
            We apply proven AI patterns across verticals — healthcare, manufacturing, finance, retail and mobility.
          </Lead>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Healthcare</CardTitle>
            <CardText>Imaging analytics, clinical decision support and patient workflow automation.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Manufacturing</CardTitle>
            <CardText>Visual inspection, predictive maintenance and process optimization.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Finance</CardTitle>
            <CardText>Risk modelling, fraud detection and document intelligence.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* SOLUTIONS */}
      <Section id="solutions">
        <SectionHeader>
          <Eyebrow>Solutions</Eyebrow>
          <Title>AI solutions you can deploy</Title>
          <Lead>
            Prebuilt architectures and tailored integrations that accelerate time-to-value.
          </Lead>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Vision Intelligence</CardTitle>
            <CardText>High-accuracy pipelines for detection, classification, and real-time analytics.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Predictive Analytics</CardTitle>
            <CardText>Demand forecasting, anomaly detection and KPI-driven insights.</CardText>
          </Card>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Document Intelligence</CardTitle>
            <CardText>OCR, extraction, semantic search and contract analytics powered by embeddings & LLMs.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* CASE STUDIES / TRUST */}
      <Section id="cases">
        <SectionHeader>
          <Eyebrow>Case Studies</Eyebrow>
          <Title>Selected success stories</Title>
          <Lead>
            Real outcomes from deployments with measurable business impact.
          </Lead>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>Manufacturing — Quality Inspection</CardTitle>
            <CardText>Reduced defect escape rate by 42% using automated CV pipelines and edge inference.</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>Finance — Document Automation</CardTitle>
            <CardText>Automated verification and extraction saving 20k manual hours per year and improving compliance checks.</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>Retail — Demand Forecasting</CardTitle>
            <CardText>Improved in-stock rate and reduced waste using short-to-medium term demand forecasting models.</CardText>
          </Card>
        </Grid>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials">
        <SectionHeader>
          <Eyebrow>Clients</Eyebrow>
          <Title>What partners say</Title>
        </SectionHeader>

        <Grid>
          <Card whileHover={{ y: -6 }}>
            <CardTitle>"Delivered with clarity"</CardTitle>
            <CardText>“Altaric helped us go from idea to production quickly, with strong engineering and domain focus.” — Head of Product, Manufacturing</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>"Practical & business-first"</CardTitle>
            <CardText>“Their team balanced speed with best practices and delivered measurable ROI.” — VP Engineering, Retail</CardText>
          </Card>

          <Card whileHover={{ y: -6 }}>
            <CardTitle>"High technical quality"</CardTitle>
            <CardText>“Production-ready ML, strong MLOps and thoughtful architecture.” — CTO, Fintech</CardText>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <CTAWrap>
        <SectionHeader>
          <Title>Ready to accelerate with AI?</Title>
          <Lead>Book a short consultation and see how AI can unlock value faster.</Lead>
        </SectionHeader>

        <div style={{ textAlign: "center" }}>
          <CTAButton to="/ContactUs">
            Request Consultation <ArrowRight size={16} />
          </CTAButton>
        </div>
      </CTAWrap>

      {/* FOOTER */}
      <FooterWrap>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 800, color: "#fff", marginBottom: 6 }}>ALTARIC</div>
              <div style={{ color: "rgba(200,215,230,0.6)" }}>AI · ML Consulting · Digital Solutions</div>
            </div>

            <div style={{ display: "flex", gap: 24 }}>
              <Link to="/about" style={{ color: "rgba(200,215,230,0.8)", textDecoration: "none" }}>About</Link>
              <Link to="/services" style={{ color: "rgba(200,215,230,0.8)", textDecoration: "none" }}>Services</Link>
              <Link to="/industries" style={{ color: "rgba(200,215,230,0.8)", textDecoration: "none" }}>Industries</Link>
              <Link to="/ContactUs" style={{ color: "rgba(200,215,230,0.8)", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>

          <div style={{ marginTop: 20, fontSize: 13, color: "rgba(200,215,230,0.6)" }}>
            © {new Date().getFullYear()} ALTARIC. All rights reserved.
          </div>
        </div>
      </FooterWrap>
    </PageWrapper>
  );
};

export default Home;
