import React from "react";
import IndustryTemplate from "./IndustryTemplate";

const CommunicationsNetworks = () => {
  return (
    <IndustryTemplate
      title="Communications & Networks"
      description="AI-driven systems help communications providers manage complex networks, improve service reliability, and support data-driven operational decisions."
      context="Communications and network providers operate large-scale, distributed infrastructure with stringent reliability and performance requirements. Traditional monitoring approaches often struggle to detect subtle degradation patterns or predict failures in complex network environments. AI enables more proactive network management by learning from telemetry, traffic patterns, and historical performance data."
      solutions={[
        {
          title: "Network Monitoring & Analytics",
          text:
            "Machine learning models analyze network telemetry to detect anomalies and performance degradation."
        },
        {
          title: "Predictive Fault Detection",
          text:
            "AI systems identify early signals of potential failures, enabling proactive maintenance and intervention."
        },
        {
          title: "Traffic Optimization",
          text:
            "Data-driven models support dynamic traffic management and capacity planning."
        },
        {
          title: "Operational Automation",
          text:
            "Intelligent automation reduces manual intervention in network operations and incident response."
        }
      ]}
      valueAreas={[
        {
          title: "Service Reliability",
          text:
            "Earlier detection of issues helps maintain uptime and service quality across networks."
        },
        {
          title: "Operational Efficiency",
          text:
            "Automation and predictive insights reduce manual workload and operational costs."
        },
        {
          title: "Scalable Infrastructure",
          text:
            "AI supports growth by enabling more efficient management of complex, distributed systems."
        },
        {
          title: "Faster Incident Response",
          text:
            "Real-time insights allow teams to diagnose and respond to issues more quickly."
        }
      ]}
      relatedCapabilities={[
        "Time-Series Analytics",
        "Anomaly Detection",
        "Streaming Data Pipelines",
        "AI-Driven Monitoring Systems"
      ]}
    />
  );
};

export default CommunicationsNetworks;
