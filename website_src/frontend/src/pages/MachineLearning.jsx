import ServiceTemplate from "./ServiceTemplate";

export default function MachineLearning() {
  return (
    <ServiceTemplate
      title="Machine Learning"
      description="Custom ML models designed to reveal patterns, predict outcomes, and power data-driven decision making."
      features={[
        "Predictive modeling",
        "Anomaly detection",
        "Pattern recognition",
        "Recommendation engines",
      ]}
    />
  );
}
