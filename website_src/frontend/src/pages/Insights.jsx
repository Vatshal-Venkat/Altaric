import React from "react";


const Insights = () => {
  return (
    <div className="insights-page fade-in">
      <h1>Insights</h1>
      <p className="subtitle">
        Explore strategic insights, technology trends, and industry research from Altaric.
      </p>

      <div className="insight-grid">
        <div className="insight-card">
          <h3>AI Transformation Roadmap for Enterprises</h3>
          <p>
            A deep dive into how companies can move from experimentation to full-scale AI adoption.
          </p>
        </div>

        <div className="insight-card">
          <h3>Emerging Trends in Computer Vision</h3>
          <p>
            Real-world use cases transforming manufacturing, healthcare, and mobility.
          </p>
        </div>

        <div className="insight-card">
          <h3>Large Language Models for Business Automation</h3>
          <p>
            How LLMs are reshaping customer experience, operations, and strategic decision-making.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Insights;
