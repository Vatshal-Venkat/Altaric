import React from "react";

const Insights = () => {
  return (
    <div className="page insights-page fade-in">

      <div className="page-hero insights-hero">
        <div>
          <h1>Insights</h1>
          <p>Expert perspectives and AI knowledge to help shape strategic decisions.</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section">
        <h2>Latest Articles</h2>
        <p className="lead">
          Stay informed on advancements in AI, ML, and enterprise digital transformation.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>AI Transformation Roadmaps</h3>
            <p>
              What every enterprise leader needs to know before executing an AI-first strategy.
            </p>
          </div>

          <div className="card">
            <h3>The Rise of Enterprise LLMs</h3>
            <p>
              Understanding retrieval-augmented generation and how it reshapes productivity.
            </p>
          </div>

          <div className="card">
            <h3>Computer Vision Beyond Detection</h3>
            <p>
              How modern CV models deliver structured insights from unstructured visual data.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section">
        <h2>Insight Themes</h2>
        <div className="grid-3">
          <div className="card">
            <h3>AI for Operational Efficiency</h3>
            <p>Reducing manual workloads and streamlining decision-making cycles.</p>
          </div>
          <div className="card">
            <h3>Future of Automation</h3>
            <p>What next-generation intelligent automation will look like.</p>
          </div>
          <div className="card">
            <h3>Data Governance</h3>
            <p>Building strong data foundations for safe and scalable AI adoption.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insights;
