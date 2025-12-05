import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageSquare, Cpu, Eye, Zap, Users } from "lucide-react";

/* -------------------- Styled Components -------------------- */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 5rem 2rem;
  color: #fff;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  font-weight: 800;
  background: linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto 3.5rem auto;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion(Link))`
  background: rgba(255, 255, 255, 0.06);
  padding: 2.2rem;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  backdrop-filter: blur(12px);
  text-decoration: none;
  color: inherit;
  display: block;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: rgba(255,255,255,0.25);
    box-shadow: 0 20px 50px rgba(0,0,0,0.45);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  color: #000;
  font-size: 1.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
`;

/* -------------------- Component -------------------- */

export default function ServicesIndex() {
  const services = [
    {
      title: "Agentic AI",
      description: "Autonomous AI agents designed for task execution & decision-making.",
      icon: <Brain size={32} />,
      link: "/services/agentic-ai",
    },
    {
      title: "Large Language Models",
      description: "LLM-powered systems for intelligence, automation, and reasoning.",
      icon: <MessageSquare size={32} />,
      link: "/services/llm",
    },
    {
      title: "Natural Language Processing",
      description: "Extract meaning, intent, and structured insights from text.",
      icon: <Cpu size={32} />,
      link: "/services/nlp",
    },
    {
      title: "Computer Vision",
      description: "AI systems that detect, classify, and analyze visual content.",
      icon: <Eye size={32} />,
      link: "/services/computer-vision",
    },
    {
      title: "Machine Learning",
      description: "Models that predict, classify, and recognize patterns in data.",
      icon: <Zap size={32} />,
      link: "/services/machine-learning",
    },
    {
      title: "AI Consulting",
      description: "End-to-end AI strategy, planning, and implementation guidance.",
      icon: <Users size={32} />,
      link: "/services/ai-consulting",
    },
  ];

  return (
    <PageWrapper>
      <PageTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our AI Services
      </PageTitle>

      <PageSubtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Explore our full suite of next-generation AI capabilities designed to help
        businesses automate, scale, and innovate with confidence.
      </PageSubtitle>

      <Grid>
        {services.map((service, index) => (
          <Card
            to={service.link}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.description}</CardDesc>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
}
