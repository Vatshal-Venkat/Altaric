import ServiceTemplate from "./ServiceTemplate";

export default function AgenticAI() {
  return (
    <ServiceTemplate
      title="Agentic AI"
      description="Autonomous AI agents designed to plan, act, and adapt across complex environments with minimal human intervention."
      features={[
        "Autonomous decision-making systems",
        "Goal-driven task orchestration",
        "Multi-agent coordination and negotiation",
        "Adaptive learning from real-world feedback",
      ]}
      useCases={[
        {
          title: "Enterprise Workflow Automation",
          text: "AI agents that autonomously manage multi-step business processes across tools, systems, and teams."
        },
        {
          title: "Operational Decision Support",
          text: "Agents that monitor signals, evaluate trade-offs, and trigger actions in real time."
        },
        {
          title: "Digital Operations Assistants",
          text: "Always-on agents that assist teams with planning, execution, and exception handling."
        }
      ]}
    />
  );
}
