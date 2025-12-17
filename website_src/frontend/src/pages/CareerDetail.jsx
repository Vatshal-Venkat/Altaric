import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const Page = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: #9baec1;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #00e5cc;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #cbd8e3;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
  }

  li {
    color: #dfe8ef;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  ul {
    padding-left: 1.2rem;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2.2rem;
  border-radius: 999px;
  background: #1f2933;
  border: 1px solid rgba(255,255,255,0.15);
  color: #e5e7eb;
  font-weight: 600;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    background: #00e5cc;
    color: #000;
    border-color: #00e5cc;
  }
`;

/* --------------------------------
   ROLE DATA
-------------------------------- */
const ROLE_DATA = {
  "ai-intern": {
    title: "AI Intern",
    subtitle:
      "Work on real-world AI problems alongside experienced engineers and consultants.",
    responsibilities: [
      "Assist in building and evaluating machine learning models",
      "Work with NLP, computer vision, or data-driven systems",
      "Support research, experimentation, and prototyping",
      "Collaborate with senior engineers on client-facing solutions",
    ],
    requirements: [
      "Strong fundamentals in Python",
      "Basic understanding of machine learning concepts",
      "Familiarity with at least one ML/DL framework",
      "Curiosity and willingness to learn",
    ],
  },

  "ai-engineer": {
    title: "AI Engineer",
    subtitle:
      "Design and deploy scalable AI systems for enterprise-grade applications.",
    responsibilities: [
      "Build ML, NLP, CV, and agentic AI solutions",
      "Deploy and optimize AI models in production",
      "Work closely with clients and internal teams",
    ],
    requirements: [
      "Strong experience in Python and ML frameworks",
      "Experience with real-world AI systems",
      "Ability to translate business problems into AI solutions",
    ],
  },

  "frontend-engineer": {
    title: "Frontend Engineer",
    subtitle:
      "Build high-quality, performance-focused user experiences.",
    responsibilities: [
      "Develop modern UI components using React",
      "Collaborate with designers and backend engineers",
      "Ensure performance and accessibility standards",
    ],
    requirements: [
      "Strong experience with React",
      "Understanding of modern frontend tooling",
      "Attention to detail and UI quality",
    ],
  },

  "ai-strategy-consultant": {
    title: "AI Strategy Consultant",
    subtitle:
      "Help enterprises define and execute AI-driven transformation strategies.",
    responsibilities: [
      "Define AI roadmaps and use cases",
      "Work with stakeholders and technical teams",
      "Guide AI adoption and scaling initiatives",
    ],
    requirements: [
      "Strong analytical and communication skills",
      "Experience in AI or technology consulting",
      "Ability to bridge business and technology",
    ],
  },
};

const CareerDetail = () => {
  const { role } = useParams();

  const normalizedRole =
    typeof role === "string" ? role.toLowerCase().trim() : null;

  const data = normalizedRole ? ROLE_DATA[normalizedRole] : null;

  if (!data) {
    return (
      <Page>
        <Container>
          <Title>Role not found</Title>
          <Subtitle>Please check the job listing.</Subtitle>
          <BackLink to="/careers">← Back to Careers</BackLink>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <BackLink to="/careers">← Back to Careers</BackLink>

        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>

        <Section>
          <h3>Responsibilities</h3>
          <ul>
            {data.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h3>Requirements</h3>
          <ul>
            {data.requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <ApplyButton
          href={`mailto:careers@altaric.com?subject=Application for ${data.title}`}
        >
          Apply via Email →
        </ApplyButton>
      </Container>
    </Page>
  );
};

export default CareerDetail;
