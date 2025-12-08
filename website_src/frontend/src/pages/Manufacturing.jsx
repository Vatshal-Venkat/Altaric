import IndustryTemplate from "./IndustryTemplate";

export default function Manufacturing() {
  return (
    <IndustryTemplate
      title="Manufacturing"
      description="Smart factories powered by AI automation, real-time analytics, and predictive intelligence to increase efficiency and reduce downtime."
      points={[
        "Predictive maintenance AI",
        "Automated quality inspection",
        "Robotic vision & task automation",
        "Digital twins & process modeling",
      ]}
    />
  );
}
