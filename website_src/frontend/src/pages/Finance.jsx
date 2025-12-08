import IndustryTemplate from "./IndustryTemplate";

export default function Finance() {
  return (
    <IndustryTemplate
      title="Finance"
      description="AI-powered solutions that modernize risk, compliance, fraud detection, and financial decision-making across the global finance ecosystem."
      points={[
        "Automated risk prediction & underwriting AI",
        "Fraud detection & anomaly intelligence",
        "Algorithmic trading & forecasting systems",
        "Document intelligence for KYC / AML automation",
      ]}
    />
  );
}
