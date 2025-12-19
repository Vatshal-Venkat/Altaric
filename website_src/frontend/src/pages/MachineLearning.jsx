import ServiceTemplate from "./ServiceTemplate";

export default function MachineLearning() {
  return (
    <ServiceTemplate
      title="Machine Learning"
      description="Custom machine learning models built to uncover patterns, predict outcomes, and drive intelligent decisions."
      features={[
        "Predictive and forecasting models",
        "Anomaly and outlier detection",
        "Pattern discovery in complex data",
        "Recommendation and personalization systems",
      ]}
      useCases={[
        {
          title: "Predictive Operations",
          text: "Anticipating failures, demand, or risks before they occur."
        },
        {
          title: "Fraud & Anomaly Detection",
          text: "Identifying unusual behavior across financial and operational data."
        },
        {
          title: "Personalization Engines",
          text: "Data-driven recommendations tailored to users and contexts."
        }
      ]}
    />
  );
}
