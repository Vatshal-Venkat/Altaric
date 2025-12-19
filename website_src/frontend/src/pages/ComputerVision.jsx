import ServiceTemplate from "./ServiceTemplate";

export default function ComputerVision() {
  return (
    <ServiceTemplate
      title="Computer Vision"
      description="AI vision systems that interpret images and video to enable automation, monitoring, and real-time insight."
      features={[
        "Object detection and tracking",
        "Image and video classification",
        "Visual anomaly detection",
        "Real-time video analytics",
      ]}
      useCases={[
        {
          title: "Quality Inspection",
          text: "Automated visual inspection systems for defect detection and quality assurance."
        },
        {
          title: "Smart Surveillance",
          text: "AI-driven monitoring for safety, security, and operational awareness."
        },
        {
          title: "Industrial Vision Systems",
          text: "Vision-based automation for manufacturing and logistics environments."
        }
      ]}
    />
  );
}
