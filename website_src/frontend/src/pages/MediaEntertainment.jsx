import React from "react";
import IndustryTemplate from "./IndustryTemplate";

const MediaEntertainment = () => {
  return (
    <IndustryTemplate
      title="Media & Entertainment"
      description="AI supports media organizations in managing large-scale content ecosystems, improving audience engagement, and streamlining production and distribution workflows."
      context="Media and entertainment companies manage vast volumes of content across platforms while competing for audience attention in highly dynamic markets. Manual curation and static analytics are often insufficient to scale content discovery and operational efficiency. AI enables organizations to analyze content, audience behavior, and performance signals to inform editorial, distribution, and monetization strategies."
      solutions={[
        {
          title: "Content Intelligence",
          text:
            "AI models analyze audio, video, and text content to support tagging, categorization, and discovery at scale."
        },
        {
          title: "Audience Analytics",
          text:
            "Machine learning systems identify engagement patterns and audience preferences across channels and platforms."
        },
        {
          title: "Recommendation Systems",
          text:
            "Personalized recommendation engines improve content relevance and viewer engagement."
        },
        {
          title: "Workflow Automation",
          text:
            "Intelligent automation streamlines content operations, from ingestion to distribution."
        }
      ]}
      valueAreas={[
        {
          title: "Audience Engagement",
          text:
            "More relevant content experiences increase retention and time spent across platforms."
        },
        {
          title: "Operational Scale",
          text:
            "Automation reduces manual effort in managing large content libraries and workflows."
        },
        {
          title: "Data-Informed Decisions",
          text:
            "Insights into performance and engagement support better programming and distribution choices."
        },
        {
          title: "Monetization Efficiency",
          text:
            "Improved targeting and content alignment support advertising and subscription strategies."
        }
      ]}
      relatedCapabilities={[
        "Multimodal AI Models",
        "Recommendation Systems",
        "Media Analytics",
        "Scalable Inference Services"
      ]}
    />
  );
};

export default MediaEntertainment;
