import ServiceTemplate from "./ServiceTemplate";

export default function NLP() {
  return (
    <ServiceTemplate
      title="Natural Language Processing"
      description="Extract meaning, intent, and insights from structured and unstructured text data at scale."
      features={[
        "Sentiment analysis",
        "Named entity recognition",
        "Text classification",
        "Machine translation",
      ]}
    />
  );
}
