import React from "react";
import IndustryTemplate from "./IndustryTemplate";

const Finance = () => {
  return (
    <IndustryTemplate
      title="Finance & Banking"
      description="Financial institutions increasingly rely on AI-driven systems to manage risk, enhance decision-making, and operate securely at scale in highly regulated environments."
      context="Banks and financial services organizations operate in environments defined by regulatory scrutiny, risk exposure, and rapidly changing market conditions. Large volumes of transactional, customer, and document-based data place strain on traditional rule-based systems and manual review processes. AI enables financial institutions to improve accuracy, consistency, and responsiveness by identifying patterns, anomalies, and signals that are difficult to capture through static logic alone."
      solutions={[
        {
          title: "Risk & Anomaly Detection",
          text:
            "Machine learning models identify unusual patterns in transactions and behavior, supporting early detection of potential risk and operational irregularities."
        },
        {
          title: "Intelligent Document Processing",
          text:
            "AI systems extract and structure information from financial documents, contracts, and forms to reduce manual review effort and improve processing speed."
        },
        {
          title: "Decision Support & Analytics",
          text:
            "Predictive and analytical models support credit assessment, portfolio analysis, and strategic planning through data-driven insights."
        },
        {
          title: "Process Automation",
          text:
            "Intelligent automation streamlines back-office workflows, reducing operational friction while improving consistency and auditability."
        }
      ]}
      valueAreas={[
        {
          title: "Risk Mitigation",
          text:
            "Earlier identification of anomalies and potential issues helps institutions reduce exposure and respond proactively."
        },
        {
          title: "Operational Efficiency",
          text:
            "Automation and intelligent workflows reduce manual effort and accelerate high-volume financial processes."
        },
        {
          title: "Decision Quality",
          text:
            "Data-driven insights improve the consistency and reliability of financial and strategic decisions."
        },
        {
          title: "Regulatory Readiness",
          text:
            "Structured data, traceable models, and consistent outputs support compliance and internal governance requirements."
        }
      ]}
      relatedCapabilities={[
        "Anomaly Detection Models",
        "Document Intelligence",
        "Time-Series Analytics",
        "Model Monitoring & Governance"
      ]}
    />
  );
};

export default Finance;
