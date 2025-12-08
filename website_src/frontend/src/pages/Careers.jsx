import React from "react";

const Careers = () => {
  return (
    <div className="page careers-page fade-in">

      <div className="page-hero careers-hero">
        <div>
          <h1>Careers at Altaric</h1>
          <p>Grow your career with meaningful work in AI, engineering, and strategy.</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section">
        <h2>Join Our Mission</h2>
        <p className="lead">
          We are building a team of experts who thrive in innovation, collaboration, and 
          real-world impact.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>AI Engineer</h3>
            <p>
              Work on ML, CV, NLP, and agent-based architectures with high-performance
              production standards.
            </p>
          </div>

          <div className="card">
            <h3>Frontend Engineer</h3>
            <p>
              Create delightful user experiences using React, Next.js, and modern design
              systems.
            </p>
          </div>

          <div className="card">
            <h3>AI Strategy Consultant</h3>
            <p>
              Guide enterprises through AI adoption, change management, and strategic
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section">
        <h2>Work Culture</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Innovation-Driven</h3>
            <p>
              We encourage creativity and experimentation to solve real-world challenges.
            </p>
          </div>
          <div className="card">
            <h3>Collaborative</h3>
            <p>
              Cross-functional teamwork ensures better outcomes and rapid learning.
            </p>
          </div>
          <div className="card">
            <h3>Growth-Focused</h3>
            <p>
              Mentorship, training resources, and challenging projects accelerate your career.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
