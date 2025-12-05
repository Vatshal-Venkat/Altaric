import ServiceTemplate from "./ServiceTemplate";

export default function ComputerVision() {
  return (
    <ServiceTemplate
      title="Computer Vision"
      description="AI-powered vision systems that interpret and analyze images and video with exceptional accuracy."
      features={[
        "Object detection & tracking",
        "Image classification",
        "Facial recognition",
        "Video analytics & surveillance AI",
      ]}
    />
  );
}
