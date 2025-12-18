import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import AboutAltaric from "./pages/AboutAltaric";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// LANDING PAGE SECTIONS
import Hero from "./components/Hero";
import ClientsBar from "./components/ClientsBar";
import About from "./components/About";
import IndustriesSection from "./components/Industries";
import Statistics from "./components/Statistics";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";

// FULL PAGES
import Services from "./pages/Services";
import Industries from "./pages/Industry";
import AISolutions from "./pages/AISolutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs"; // ✅ added

// SERVICE DETAIL PAGES
import AgenticAI from "./pages/AgenticAI";
import NLP from "./pages/NLP";
import LLM from "./pages/LLM";
import MachineLearning from "./pages/MachineLearning";
import ComputerVision from "./pages/ComputerVision";
import AIConsulting from "./pages/AIConsulting";

// INDUSTRIES
import Finance from "./pages/Finance";
import Healthcare from "./pages/Healthcare";
import Manufacturing from "./pages/Manufacturing";
import Retail from "./pages/Retail";
import MediaEntertainment from "./pages/MediaEntertainment";
import Communications from "./pages/Communications";

// CAREERS
import CareerDetail from "./pages/CareerDetail";

/* ================================
   THEME
================================ */
const darkTheme = {
  bg: "#000000",
  bgAlt: "#05070a",
  text: "#ffffff",
  border: "rgba(255,255,255,0.12)",
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Space Grotesk", sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    cursor: none;
  }

  input, textarea, select, button, a {
    cursor: auto;
  }

  html {
    scroll-behavior: smooth;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.bg};
`;

const SnapContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg};
`;

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handler = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // 🔥 IMAGE-ONLY LOADER
  if (isLoading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <GlobalStyle />

        <CustomCursor mousePosition={mousePosition} />
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <SnapContainer>
                  <Hero />
                  <ClientsBar />
                  <About />
                  <Statistics />
                  <IndustriesSection />
                  <Expertise />
                  <ContactForm />
                </SnapContainer>
                <Footer />
              </>
            }
          />

          {/* CORE PAGES */}
          <Route path="/about" element={<AboutUs />} /> {/* ✅ FIX */}
          <Route path="/about-altaric" element={<AboutAltaric />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:role" element={<CareerDetail />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* SERVICE DETAILS */}
          <Route path="/services/agentic-ai" element={<AgenticAI />} />
          <Route path="/services/nlp" element={<NLP />} />
          <Route path="/services/llm" element={<LLM />} />
          <Route
            path="/services/machine-learning"
            element={<MachineLearning />}
          />
          <Route
            path="/services/computer-vision"
            element={<ComputerVision />}
          />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />

          {/* INDUSTRIES */}
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route
            path="/industries/manufacturing"
            element={<Manufacturing />}
          />
          <Route path="/industries/retail" element={<Retail />} />
          <Route
            path="/industries/media"
            element={<MediaEntertainment />}
          />
          <Route
            path="/industries/communications"
            element={<Communications />}
          />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
