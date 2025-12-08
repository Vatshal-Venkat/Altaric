import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="page-wrapper fade-in">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p className="subtitle">
          Accelerating digital transformation through AI-driven strategy,
          automation, and advanced engineering.
        </p>
      </section>

      <section className="section">
        <h2>What We Do</h2>
        <p>
          At Altaric, we help organizations unlock the full potential of AI by
          combining deep technical expertise with strategic consulting. Our team
          delivers end-to-end solutions — from roadmap creation to production-grade
          deployment.
        </p>

        <div className="card-grid">
          <div className="service-card">
            <h3>AI Consulting & Strategy</h3>
            <p>
              We define scalable AI strategies aligned with your business goals.
              From maturity assessment to opportunity prioritization, we help you
              adopt AI with clarity and confidence.
            </p>
          </div>

          <div className="service-card">
            <h3>Machine Learning Development</h3>
            <p>
              Custom ML models built for prediction, classification, forecasting,
              personalization, and anomaly detection across industries.
            </p>
          </div>

          <div className="service-card">
            <h3>Computer Vision Solutions</h3>
            <p>
              Advanced image/video analytics, defect detection, OCR, facial
              recognition, and automated safety monitoring powered by CV models.
            </p>
          </div>

          <div className="service-card">
            <h3>AI Agents & LLM Automation</h3>
            <p>
              Build intelligent AI agents that automate workflows, customer
              support, knowledge search, document processing, and more using LLMs.
            </p>
          </div>

          <div className="service-card">
            <h3>Data Engineering</h3>
            <p>
              Scalable pipelines, ETL workflows, data lakes, and real-time
              analytics solutions designed for enterprise reliability.
            </p>
          </div>

          <div className="service-card">
            <h3>Full-Stack Development</h3>
            <p>
              End-to-end application engineering — web, mobile, and cloud-native
              platforms designed for performance and scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why Choose Altaric?</h2>
        <ul className="bullet-list">
          <li>Deep expertise in AI, ML, and digital product engineering</li>
          <li>Industry-specific solutions tailored to your workflows</li>
          <li>Proven experience in production-ready deployments</li>
          <li>Transparent communication and agile delivery</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;

