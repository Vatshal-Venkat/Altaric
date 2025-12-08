import React from "react";


const AISolutions = () => {
  return (
    <div className="page-wrapper fade-in">

      <section className="page-hero">
        <h1>AI Solutions</h1>
        <p className="subtitle">
          Ready-to-deploy AI systems designed to accelerate business outcomes.
        </p>
      </section>

      <section className="section">
        <h2>Our AI Solution Areas</h2>
        <p>
          Altaric builds scalable AI solutions that solve complex operational and
          strategic challenges. These solutions combine machine learning,
          computer vision, natural language processing, and large language models
          to deliver measurable business impact.
        </p>

        <div className="solution-grid">

          <div className="solution-card">
            <h3>AI Assistants & Automation Agents</h3>
            <p>
              Custom AI agents that automate workflows, process documents, respond
              to customers, generate insights, and integrate with enterprise
              tools such as CRM, ERP, and knowledge systems.
            </p>
          </div>

          <div className="solution-card">
            <h3>Vision Intelligence Systems</h3>
            <p>
              Computer vision pipelines for detection, tracking, OCR, quality
              inspection, safety monitoring, and autonomous systems.
            </p>
          </div>

          <div className="solution-card">
            <h3>Predictive Analytics Platforms</h3>
            <p>
              Forecasting, demand prediction, anomaly detection, and KPI insight
              engines enabling data-driven decision-making.
            </p>
          </div>

          <div className="solution-card">
            <h3>NLP & Document Intelligence</h3>
            <p>
              Semantic search, automated summaries, sentiment analysis,
              contract intelligence, and chatbot systems using advanced LLMs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Our Delivery Approach</h2>
        <ul className="bullet-list">
          <li>Discovery workshops to identify high-value AI opportunities</li>
          <li>Rapid prototyping and iterative model validation</li>
          <li>Scalable deployment on cloud or on-prem</li>
          <li>Continuous monitoring and lifecycle improvement</li>
        </ul>
      </section>
    </div>
  );
};

export default AISolutions;
