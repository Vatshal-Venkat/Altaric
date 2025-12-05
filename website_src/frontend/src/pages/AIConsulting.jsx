import ServiceTemplate from "./ServiceTemplate";

export default function AIConsulting() {
  return (
    <ServiceTemplate
      title="AI Consulting"
      description="Strategic guidance and implementation support to help organizations adopt and scale AI successfully."
      features={[
        "AI strategy & roadmap development",
        "Technical feasibility assessments",
        "Implementation planning",
        "Change management & AI adoption",
      ]}
    />
  );
}
