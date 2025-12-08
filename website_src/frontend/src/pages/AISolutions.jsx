import React from "react";

const AISolutions = () => {
  return (
    <div className="page ai-solutions-page fade-in">

      <div className="page-hero ai-hero">
        <div>
          <h1>AI Solutions</h1>
          <p>Modular and production-ready AI solutions designed for real-world impact.</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section">
        <h2>Our AI Solutions</h2>
        <p className="lead">
          From document intelligence to computer vision and AI agents, our solutions are built
          to integrate quickly into your business systems.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Vision Intelligence</h3>
            <p>
              Real-time detection, inspection, image understanding, and surveillance analytics
              for high accuracy environments.
            </p>
          </div>

          <div className="card">
            <h3>Document Intelligence</h3>
            <p>
              Automated extraction, classification, summarization, and retrieval systems for
              enterprise workflows.
            </p>
          </div>

          <div className="card">
            <h3>AI Agents & Automation</h3>
            <p>
              Custom LLM-driven agents for customer service, internal operations, and knowledge
              management.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section">
        <h2>Solution Benefits</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Faster Deployment</h3>
            <p>Our solution frameworks reduce integration time and allow quick rollout.</p>
          </div>

          <div className="card">
            <h3>Flexible Architecture</h3>
            <p>Deploy on cloud, on-premise, or hybrid environments based on your needs.</p>
          </div>

          <div className="card">
            <h3>Enterprise-Grade Security</h3>
            <p>Data privacy, access controls, and compliance aligned with enterprise standards.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AISolutions;
