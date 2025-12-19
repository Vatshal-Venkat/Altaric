import React from "react";
import IndustryTemplate from "./IndustryTemplate";

const Healthcare = () => {
  return (
    <IndustryTemplate
      title="Healthcare"
      description="AI-driven systems are reshaping healthcare delivery by improving diagnostic accuracy, optimizing clinical workflows, and enabling data-informed patient care at scale."
      context="Healthcare systems generate vast volumes of clinical, imaging, and operational data, yet much of this information remains underutilized due to fragmentation and manual processes. As care delivery models become more complex, healthcare organizations face growing pressure to improve outcomes, reduce clinician burden, and manage risk. AI enables healthcare providers to extract actionable insights from structured and unstructured data, supporting earlier intervention, operational efficiency, and more consistent decision-making across care settings."
      solutions={[
        {
          title: "Clinical Decision Support",
          text:
            "AI models assist clinicians by identifying patterns in patient data that support diagnosis, risk stratification, and treatment planning."
        },
        {
          title: "Medical Imaging Analysis",
          text:
            "Computer vision systems analyze medical images to highlight potential abnormalities, supporting radiology and diagnostic workflows."
        },
        {
          title: "Care Workflow Automation",
          text:
            "Intelligent systems automate routine administrative and clinical tasks, reducing manual effort and improving care coordination."
        },
        {
          title: "Health Data Intelligence",
          text:
            "Natural language processing and analytics tools extract insights from electronic health records and clinical documentation."
        }
      ]}
      valueAreas={[
        {
          title: "Improved Clinical Outcomes",
          text:
            "Earlier detection, risk assessment, and decision support contribute to more timely and informed patient care."
        },
        {
          title: "Operational Efficiency",
          text:
            "Automation reduces administrative overhead and enables clinicians to focus more time on patient-facing activities."
        },
        {
          title: "Risk & Compliance Management",
          text:
            "Consistent monitoring and documentation support regulatory compliance and reduce clinical and operational risk."
        },
        {
          title: "Scalable Care Delivery",
          text:
            "AI-enabled systems support healthcare organizations as they scale services across departments and geographies."
        }
      ]}
      relatedCapabilities={[
        "Medical Imaging AI",
        "Natural Language Processing",
        "Clinical Data Pipelines",
        "Model Evaluation & Governance"
      ]}
    />
  );
};

export default Healthcare;
