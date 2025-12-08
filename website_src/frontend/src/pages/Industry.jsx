import React from "react";

const Industries = () => {
  return (
    <div className="page industries-page fade-in">

      <div className="page-hero industries-hero">
        <div>
          <h1>Industries We Serve</h1>
          <p>AI solutions designed for high-impact industry use cases.</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="section">
        <h2>Industries</h2>
        <p className="lead">
          We apply proven AI patterns across multiple sectors to enhance productivity,
          reduce operational cost, and accelerate innovation.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Healthcare</h3>
            <p>
              Imaging analytics, clinical triage systems, workflow automation, and 
              intelligent reporting tools.
            </p>
          </div>

          <div className="card">
            <h3>Manufacturing</h3>
            <p>
              Automated visual inspection, predictive maintenance, anomaly detection,
              and process optimization.
            </p>
          </div>

          <div className="card">
            <h3>Finance & Banking</h3>
            <p>
              Document intelligence, fraud detection, risk scoring, and compliance-driven
              workflow automation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section">
        <h2>Industry Advantages</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Domain Expertise</h3>
            <p>
              Our specialists understand regulatory requirements, domain-specific datasets,
              and operational workflows.
            </p>
          </div>
          <div className="card">
            <h3>Reliable Systems</h3>
            <p>
              We design robust, scalable technical architectures that support growth and 
              minimize downtime.
            </p>
          </div>
          <div className="card">
            <h3>Faster Implementation</h3>
            <p>
              Pre-built components and reusable ML accelerators help reduce development time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
