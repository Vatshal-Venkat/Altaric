import ServiceTemplate from "./ServiceTemplate";

export default function NLP() {
  return (
    <ServiceTemplate
      title="Natural Language Processing"
      description="Extract structured insight, intent, and meaning from large volumes of unstructured text with precision."
      features={[
        "Sentiment and intent analysis",
        "Named entity recognition",
        "Text classification & categorization",
        "Language translation and normalization",
      ]}
      useCases={[
        {
          title: "Document Intelligence",
          text: "Automated extraction of key entities and insights from contracts, reports, and communications."
        },
        {
          title: "Voice of Customer Analytics",
          text: "Understanding sentiment and themes across customer interactions at scale."
        },
        {
          title: "Compliance & Risk Monitoring",
          text: "Identifying sensitive language, anomalies, and policy violations in text streams."
        }
      ]}
    />
  );
}
