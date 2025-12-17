import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import AboutAltaric from "./pages/AboutAltaric";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor"; // ✅ active premium cursor
import Footer from "./components/Footer";

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

// SERVICE DETAIL PAGES
import AgenticAI from "./pages/AgenticAI";
import NLP from "./pages/NLP";
import LLM from "./pages/LLM";
import MachineLearning from "./pages/MachineLearning";
import ComputerVision from "./pages/ComputerVision";
import AIConsulting from "./pages/AIConsulting";

import Finance from "./pages/Finance";
import Healthcare from "./pages/Healthcare";
import Manufacturing from "./pages/Manufacturing";
import Retail from "./pages/Retail";
import MediaEntertainment from "./pages/MediaEntertainment";
import Communications from "./pages/Communications";

import CareerDetail from "./pages/CareerDetail";


/* ================================
   THEME DEFINITIONS
================================ */
const darkTheme = {
  bg: "#000000",
  bgAlt: "#05070a",
  text: "#ffffff",
  border: "rgba(255,255,255,0.12)",
};

const lightTheme = {
  bg: "#ffffff",
  bgAlt: "#f5f7fa",
  text: "#0a0c12",
  border: "#e5e7eb",
};

/* ================================
   GLOBAL STYLES
================================ */
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;

    /* Hide default cursor (required for premium custom cursor) */
    cursor: none;

    transition: background 0.3s ease, color 0.3s ease;
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
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Track mouse position (used by premium cursor)
  useEffect(() => {
    const handler = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Loader logic
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        <AppContainer>
          <GlobalStyle />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                background: "linear-gradient(45deg, #fff, #bbb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ALTARIC
            </motion.div>
          </motion.div>
        </AppContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <AppContainer>
        <GlobalStyle />

        <CustomCursor mousePosition={mousePosition} />

        <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SnapContainer>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <Hero />
                    <ClientsBar />
                    <About />
                  </div>

                  <Statistics />
                  <IndustriesSection />
                  <Expertise />
                  <ContactForm />
                </SnapContainer>

                <div style={{ marginTop: "4rem" }} />
                <Footer />
              </>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/services/agentic-ai" element={<AgenticAI />} />
          <Route path="/services/nlp" element={<NLP />} />
          <Route path="/services/llm" element={<LLM />} />
          <Route path="/services/machine-learning" element={<MachineLearning />} />
          <Route path="/services/computer-vision" element={<ComputerVision />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />

          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/media" element={<MediaEntertainment />} />
          <Route path="/industries/communications" element={<Communications />} />

          <Route path="/about-altaric" element={<AboutAltaric />} />



          <Route path="/careers/ai-engineer" element={<CareerDetail role="ai-engineer" />} />
          <Route path="/careers/ai-intern" element={<CareerDetail role="ai-intern" />} />
          <Route path="/careers/frontend-engineer" element={<CareerDetail role="frontend-engineer" />} />
          <Route path="/careers/ai-strategy-consultant" element={<CareerDetail role="ai-strategy-consultant" />} />

        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
