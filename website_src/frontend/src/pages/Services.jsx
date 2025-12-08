import React from "react";

const Services = () => {
  return (
    <div className="page services-page fade-in">

      {/* HERO */}
      <div className="page-hero services-hero">
        <div>
          <h1>Our Services</h1>
          <p>AI strategy, engineering, and implementation for modern enterprises.</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section">
        <h2>What We Offer</h2>
        <p className="lead">
          We provide complete AI consulting and engineering services enabling companies to
          adopt intelligent systems with confidence, clarity, and technical excellence.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>AI Strategy</h3>
            <p>
              Comprehensive assessments, capability roadmaps, and ROI-driven transformation
              plans tailored for your business objectives.
            </p>
          </div>

          <div className="card">
            <h3>Machine Learning Engineering</h3>
            <p>
              End-to-end ML pipelines including model development, evaluation, deployment,
              optimization, and monitoring.
            </p>
          </div>

          <div className="card">
            <h3>Computer Vision</h3>
            <p>
              Advanced image and video AI solutions such as detection, OCR, inspection,
              tracking, and real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section">
        <h2>Why Choose Us</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Proven Delivery</h3>
            <p>
              Our engineering teams work with global-grade tooling and best practices to
              deliver reliable production AI systems.
            </p>
          </div>

          <div className="card">
            <h3>Scalable Architecture</h3>
            <p>
              We design ML systems with long-term scalability in mind, from data pipelines
              to serving infrastructure.
            </p>
          </div>

          <div className="card">
            <h3>End-to-End Ownership</h3>
            <p>
              From ideation to deployment, we partner across every stage to ensure
              successful implementation and organizational adoption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
