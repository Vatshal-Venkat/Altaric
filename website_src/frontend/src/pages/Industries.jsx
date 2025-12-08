import React from "react";
import "./Industries.css";

const Industries = () => {
  return (
    <div className="page-wrapper fade-in">

      <section className="page-hero">
        <h1>Industries We Serve</h1>
        <p className="subtitle">
          AI solutions crafted for real-world impact across diverse sectors.
        </p>
      </section>

      <section className="section">
        <h2>Driving Innovation Across Key Markets</h2>
        <p>
          Altaric partners with organizations across multiple industries,
          enabling digital acceleration, operational efficiency, and intelligent
          automation. Our domain experts collaborate closely to tailor AI models
          and systems that solve real business challenges.
        </p>

        <div className="industry-grid">

          <div className="industry-card">
            <h3>Healthcare</h3>
            <p>
              AI-driven diagnostics, patient triage automation, medical imaging
              analysis, and hospital workflow optimization.
            </p>
          </div>

          <div class="industry-card">
            <h3>Manufacturing</h3>
            <p>
              Quality inspection, predictive maintenance, robotics vision,
              production line automation, and factory analytics.
            </p>
          </div>

          <div className="industry-card">
            <h3>Retail & E-Commerce</h3>
            <p>
              Recommendation engines, demand forecasting, chatbot assistants,
              customer analytics, and automation of order workflows.
            </p>
          </div>

          <div className="industry-card">
            <h3>Finance & Banking</h3>
            <p>
              Fraud detection, credit scoring, AI-driven risk analysis,
              automated document verification, and robo-advisory solutions.
            </p>
          </div>

          <div className="industry-card">
            <h3>Automotive & Mobility</h3>
            <p>
              Autonomous perception, driver monitoring, fleet analytics, and
              smart traffic systems powered by computer vision.
            </p>
          </div>

          <div className="industry-card">
            <h3>Education</h3>
            <p>
              Intelligent tutoring systems, automated assessments, student
              analytics, and personalized learning engines.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Industries;
