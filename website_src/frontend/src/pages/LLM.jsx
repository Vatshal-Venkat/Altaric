import ServiceTemplate from "./ServiceTemplate";

export default function LLM() {
  return (
    <ServiceTemplate
      title="Large Language Models"
      description="Advanced LLM-powered systems for natural language understanding, intelligent automation, and content generation."
      features={[
        "Text generation & summarization",
        "Conversational AI",
        "Context-aware reasoning",
        "Multilingual understanding",
      ]}
    />
  );
}
