import IndustryTemplate from "./IndustryTemplate";

export default function Healthcare() {
  return (
    <IndustryTemplate
      title="Healthcare"
      description="AI-driven solutions enabling better diagnostics, clinical automation, and improved patient care across hospitals, labs, and telemedicine."
      points={[
        "Diagnostic imaging & medical vision AI",
        "Predictive patient risk scoring",
        "Clinical workflow automation",
        "Medical record intelligence & extraction",
      ]}
    />
  );
}
