import React from "react";
import IndustryTemplate from "./IndustryTemplate";

const Retail = () => {
  return (
    <IndustryTemplate
      title="Retail"
      description="AI enables retailers to better understand customer behavior, optimize operations, and respond dynamically to changing demand across physical and digital channels."
      context="Retail organizations operate in fast-moving environments where customer expectations, inventory dynamics, and market conditions shift rapidly. Traditional analytics often struggle to keep pace with real-time demand signals and omnichannel complexity. AI allows retailers to move beyond static reporting by continuously learning from customer interactions, sales data, and supply chain signals to support more responsive decision-making."
      solutions={[
        {
          title: "Demand Forecasting & Planning",
          text:
            "Machine learning models analyze historical sales, seasonality, and external factors to improve demand forecasting and inventory planning."
        },
        {
          title: "Customer Intelligence",
          text:
            "AI-driven analytics extract insights from customer behavior and engagement data to support personalization and segmentation strategies."
        },
        {
          title: "Pricing & Promotion Optimization",
          text:
            "Data-driven models evaluate pricing and promotional effectiveness, enabling more informed and adaptive commercial strategies."
        },
        {
          title: "Operational Analytics",
          text:
            "AI systems monitor store and supply chain performance to identify inefficiencies and opportunities for improvement."
        }
      ]}
      valueAreas={[
        {
          title: "Revenue Optimization",
          text:
            "Improved demand planning and pricing decisions contribute directly to revenue growth and margin protection."
        },
        {
          title: "Inventory Efficiency",
          text:
            "Better forecasting reduces overstock, stockouts, and working capital tied up in inventory."
        },
        {
          title: "Customer Experience",
          text:
            "More relevant interactions and consistent availability improve customer satisfaction and retention."
        },
        {
          title: "Decision Agility",
          text:
            "Near real-time insights enable faster responses to changing consumer and market conditions."
        }
      ]}
      relatedCapabilities={[
        "Predictive Analytics",
        "Customer Data Platforms",
        "Optimization Models",
        "Data Engineering Pipelines"
      ]}
    />
  );
};

export default Retail;
