import IndustryTemplate from "./IndustryTemplate";

export default function Retail() {
  return (
    <IndustryTemplate
      title="Retail & E-commerce"
      description="AI-driven personalization, demand forecasting, and customer intelligence to elevate digital commerce experiences."
      points={[
        "Recommendation engine systems",
        "Customer segmentation & behavior AI",
        "Demand & inventory forecasting",
        "Omnichannel analytics",
      ]}
    />
  );
}
