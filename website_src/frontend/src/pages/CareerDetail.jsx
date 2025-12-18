import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

/* ================================
   PAGE LAYOUT
================================ */
const Page = styled.div`
  background: radial-gradient(circle at top, #0c0f12, #000 65%);
  color: #fff;
  min-height: 100vh;
  padding: 7rem 2rem 5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2.2rem;
  color: #9fbac2;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #9fdde5;
  }
`;

/* ================================
   HEADER
================================ */
const Header = styled.div`
  margin-bottom: 4rem;
  max-width: 850px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -120px;
    left: -80px;
    width: 420px;
    height: 420px;
    background: radial-gradient(
      circle,
      rgba(140, 220, 230, 0.22),
      transparent 70%
    );
    filter: blur(100px);
    pointer-events: none;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.7rem, 4vw, 3.4rem);
  margin-bottom: 0.6rem;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  color: #cfdadd;
  font-size: 1.15rem;
  line-height: 1.65;
`;

/* ================================
   GRID
================================ */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 3.2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ================================
   CONTENT SECTIONS
================================ */
const Section = styled.section`
  margin-bottom: 2.8rem;
  padding: 2.6rem 2.4rem;
  background: linear-gradient(180deg, #12181d, #0b1014);
  border: 1px solid rgba(160, 210, 220, 0.14);
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p {
    color: #d7e3e7;
    line-height: 1.75;
  }

  ul {
    padding-left: 1.2rem;
    margin-top: 0.8rem;
  }

  li {
    color: #d7e3e7;
    line-height: 1.75;
    margin-bottom: 0.55rem;
  }
`;

/* ================================
   APPLY FORM (RIGHT COLUMN)
================================ */
const ApplyCard = styled.div`
  position: sticky;
  top: 6.8rem;
  padding: 2.6rem 2.4rem;
  background: linear-gradient(180deg, #141e23, #0b1014);
  border: 1px solid rgba(160, 220, 230, 0.22);
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
`;

const Form = styled.form`
  margin-top: 1.4rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3rem;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.45rem;
    color: #cbd8de;
  }

  input,
  textarea {
    background: #05090d;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    color: #fff;
    font-size: 0.95rem;
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.85rem 0;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(160, 220, 230, 0.45);
  color: #cfeaed;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background: linear-gradient(90deg, #9fdde5, #5fcad6);
    color: #000;
    border-color: transparent;
  }
`;

/* ================================
   SUCCESS STATE
================================ */
const SuccessBox = styled.div`
  padding: 3.6rem;
  border-radius: 22px;
  background: linear-gradient(180deg, #141e23, #0b1014);
  border: 1px solid rgba(160, 220, 230, 0.3);
  text-align: center;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);

  h2 {
    margin-bottom: 0.8rem;
  }

  p {
    color: #cfdadd;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

/* ================================
   ROLE DATA
================================ */
const ROLE_DATA = {
  "ai-intern": {
    title: "AI Intern",
    subtitle:
      "Gain hands-on experience working on real-world artificial intelligence systems.",
    description:
      "As an AI Intern at Altaric, you will work alongside experienced engineers and consultants on applied AI projects, focusing on experimentation, evaluation, and real-world deployment contexts.",
    skills: [
      "Strong fundamentals in Python",
      "Basic understanding of machine learning concepts",
      "Familiarity with NumPy, Pandas, or PyTorch/TensorFlow",
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
      "You will develop end-to-end AI solutions, collaborating with consulting and engineering teams to deliver production-grade systems aligned with client needs.",
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
      "You will work with senior stakeholders to define AI roadmaps, identify high-impact opportunities, and ensure responsible AI adoption.",
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    payload.append("role", normalizedRole);
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("message", form.message);
    payload.append("resume", form.resume);

    try {
      await fetch("/api/apply", {
        method: "POST",
        body: payload,
      });
      setSubmitted(true);
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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

  if (submitted) {
    return (
      <Page>
        <Container>
          <SuccessBox>
            <h2>Application Submitted</h2>
            <p>
              Thank you for applying. Our team will review your application and
              get back to you if there is a match.
            </p>
            <BackLink to="/careers">← Back to Careers</BackLink>
          </SuccessBox>
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

        <Grid>
          {/* LEFT */}
          <div>
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
          </div>

          {/* RIGHT */}
          <ApplyCard>
            <h3>Apply for this role</h3>

            <Form onSubmit={handleSubmit}>
              <Field>
                <label>Full Name</label>
                <input name="name" required value={form.name} onChange={handleChange} />
              </Field>

              <Field>
                <label>Email</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} />
              </Field>

              <Field>
                <label>Resume (PDF / DOC)</label>
                <input type="file" name="resume" required onChange={handleChange} />
              </Field>

              <Field>
                <label>Why should we consider you?</label>
                <textarea name="message" value={form.message} onChange={handleChange} />
              </Field>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application →"}
              </SubmitButton>
            </Form>
          </ApplyCard>
        </Grid>
      </Container>
    </Page>
  );
};

export default CareerDetail;
