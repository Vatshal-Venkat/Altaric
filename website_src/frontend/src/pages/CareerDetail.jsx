import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

/* ================================
   PAGE LAYOUT
================================ */
const Page = styled.div`
  background: #000;
  color: #fff;
  min-height: 100vh;
  padding: 6rem 2rem 5rem;
`;

const Container = styled.div`
  max-width: 920px;
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

/* ================================
   HEADER
================================ */
const Header = styled.div`
  margin-bottom: 3.5rem;
`;

const Title = styled.h1`
  font-size: clamp(2.6rem, 4vw, 3.2rem);
  margin-bottom: 0.6rem;
`;

const Subtitle = styled.p`
  color: #cbd8e3;
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 760px;
`;

/* ================================
   CONTENT SECTIONS
================================ */
const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2.2rem;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
  }

  p {
    color: #dfe8ef;
    line-height: 1.7;
    max-width: 760px;
  }

  ul {
    padding-left: 1.2rem;
    margin-top: 0.6rem;
  }

  li {
    color: #dfe8ef;
    line-height: 1.7;
    margin-bottom: 0.5rem;
  }
`;

/* ================================
   APPLY FORM
================================ */
const ApplySection = styled(Section)`
  border-color: rgba(0,229,204,0.25);
  background: linear-gradient(
    180deg,
    rgba(0,229,204,0.06),
    rgba(255,255,255,0.03)
  );
`;

const Form = styled.form`
  margin-top: 1.4rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.35rem;
    color: #cbd8e3;
  }

  input,
  textarea {
    background: #020409;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 8px;
    padding: 0.7rem 0.85rem;
    color: #fff;
    font-size: 0.95rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 0.8rem;
  padding: 0.75rem 2.4rem;
  border-radius: 999px;
  background: #1f2933;
  border: 1px solid rgba(255,255,255,0.18);
  color: #e5e7eb;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: #00e5cc;
    color: #000;
    border-color: #00e5cc;
  }
`;

/* ================================
   ROLE DATA
================================ */
const ROLE_DATA = {
  "ai-intern": {
    title: "AI Intern",
    subtitle:
      "An opportunity to gain hands-on experience working on real-world artificial intelligence systems.",
    description:
      "As an AI Intern at Altaric, you will work alongside experienced engineers and consultants on applied AI projects. The role emphasizes practical exposure to machine learning workflows, experimentation, and evaluation in real business contexts.",
    skills: [
      "Strong fundamentals in Python",
      "Basic understanding of machine learning concepts",
      "Familiarity with libraries such as NumPy, Pandas, or PyTorch/TensorFlow",
      "Interest in NLP, Computer Vision, or AI systems",
      "Good analytical and problem-solving skills",
      "Willingness to learn and adapt",
    ],
  },

  "ai-engineer": {
    title: "AI Engineer",
    subtitle:
      "Design, build, and deploy scalable AI systems for enterprise applications.",
    description:
      "You will be responsible for developing end-to-end AI solutions, collaborating closely with consulting and engineering teams to deliver production-ready systems aligned with client needs.",
    skills: [
      "Strong experience with Python and ML frameworks",
      "Hands-on experience with NLP, CV, or deep learning",
      "Experience deploying models to production",
      "Understanding of data pipelines and evaluation metrics",
      "Ability to translate business problems into AI solutions",
    ],
  },

  "frontend-engineer": {
    title: "Frontend Engineer",
    subtitle:
      "Build refined, performant user interfaces for modern digital products.",
    description:
      "This role focuses on creating high-quality user experiences with attention to performance, accessibility, and visual precision.",
    skills: [
      "Strong experience with React",
      "Solid understanding of modern frontend tooling",
      "Strong UI/UX sensibility",
      "Attention to detail and performance",
      "Ability to collaborate across teams",
    ],
  },

  "ai-strategy-consultant": {
    title: "AI Strategy Consultant",
    subtitle:
      "Guide enterprises through AI adoption and transformation initiatives.",
    description:
      "You will work with senior stakeholders to define AI roadmaps, identify high-impact opportunities, and ensure responsible and effective AI adoption.",
    skills: [
      "Strong analytical and communication skills",
      "Experience in AI or technology consulting",
      "Ability to bridge business and technical teams",
      "Stakeholder management experience",
      "Clear presentation and documentation skills",
    ],
  },
};

/* ================================
   COMPONENT
================================ */
const CareerDetail = () => {
  const { role } = useParams();
  const normalizedRole =
    typeof role === "string" ? role.toLowerCase().trim() : null;

  const data = normalizedRole ? ROLE_DATA[normalizedRole] : null;

  useEffect(() => {
    document.title = data
      ? `${data.title} | Careers at Altaric`
      : "Careers | Altaric";
  }, [data]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:careers@altaric.com
      ?subject=Application for ${data.title}
      &body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
  };

  if (!data) {
    return (
      <Page>
        <Container>
          <Title>Role not found</Title>
          <BackLink to="/careers">← Back to Careers</BackLink>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <BackLink to="/careers">← Back to Careers</BackLink>

        <Header>
          <Title>{data.title}</Title>
          <Subtitle>{data.subtitle}</Subtitle>
        </Header>

        <Section>
          <h3>Role Description</h3>
          <p>{data.description}</p>
        </Section>

        <Section>
          <h3>Skills Required</h3>
          <ul>
            {data.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </Section>

        <ApplySection>
          <h3>Apply for this role</h3>

          <Form onSubmit={handleSubmit}>
            <Field>
              <label>Full Name</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <label>Why should we consider you?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </Field>

            <SubmitButton type="submit">
              Submit Application →
            </SubmitButton>
          </Form>
        </ApplySection>
      </Container>
    </Page>
  );
};

export default CareerDetail;
