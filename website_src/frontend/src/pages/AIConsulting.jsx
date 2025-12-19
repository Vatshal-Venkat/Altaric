import ServiceTemplate from "./ServiceTemplate";

export default function AIConsulting() {
  return (
    <ServiceTemplate
      title="AI Consulting"
      description="Strategic and technical guidance to help organizations design, deploy, and scale AI responsibly."
      features={[
        "AI strategy and roadmap design",
        "Architecture and feasibility assessment",
        "Production AI system planning",
        "Change management and adoption support",
      ]}
      useCases={[
        {
          title: "Enterprise AI Strategy",
          text: "Defining where and how AI creates measurable business value."
        },
        {
          title: "AI Readiness Assessment",
          text: "Evaluating data, infrastructure, and teams for AI adoption."
        },
        {
          title: "Responsible AI Frameworks",
          text: "Ensuring governance, transparency, and long-term sustainability."
        }
      ]}
    />
  );
}
