import ServiceTemplate from "./ServiceTemplate";

export default function LLM() {
  return (
    <ServiceTemplate
      title="Large Language Models"
      description="Advanced LLM systems that understand, reason over, and generate language to power intelligent enterprise applications."
      features={[
        "Context-aware text generation",
        "Conversational AI & copilots",
        "Enterprise RAG (Retrieval-Augmented Generation)",
        "Multilingual and domain-adapted models",
      ]}
      useCases={[
        {
          title: "Internal Knowledge Assistants",
          text: "LLM-powered copilots that surface insights from internal documents, policies, and data."
        },
        {
          title: "Customer Support Automation",
          text: "AI systems that handle complex customer queries with context and consistency."
        },
        {
          title: "Enterprise Content Intelligence",
          text: "Summarization, drafting, and analysis of large-scale textual data."
        }
      ]}
    />
  );
}
