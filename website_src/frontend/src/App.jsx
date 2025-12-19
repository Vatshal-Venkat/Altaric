import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import AboutAltaric from "./pages/AboutAltaric";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

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
import AboutUs from "./components/AboutUs";

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
    scroll-behavior: smooth; /* kept for normal scrolling */
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
  const location = useLocation();

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

        {/* GLOBAL UTILITIES */}
        <ScrollToTop />
        <CustomCursor mousePosition={mousePosition} />
        <Navbar />

        {/* ROUTES WITH CINEMATIC FADE */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* HOME */}
            <Route
              path="/"
              element={
                <PageTransition>
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
                </PageTransition>
              }
            />

            {/* CORE PAGES */}
            <Route
              path="/about"
              element={<PageTransition><AboutUs /></PageTransition>}
            />
            <Route
              path="/about-altaric"
              element={<PageTransition><AboutAltaric /></PageTransition>}
            />
            <Route
              path="/services"
              element={<PageTransition><Services /></PageTransition>}
            />
            <Route
              path="/industries"
              element={<PageTransition><Industries /></PageTransition>}
            />
            <Route
              path="/ai-solutions"
              element={<PageTransition><AISolutions /></PageTransition>}
            />
            <Route
              path="/insights"
              element={<PageTransition><Insights /></PageTransition>}
            />
            <Route
              path="/careers"
              element={<PageTransition><Careers /></PageTransition>}
            />
            <Route
              path="/careers/:role"
              element={<PageTransition><CareerDetail /></PageTransition>}
            />
            <Route
              path="/contactus"
              element={<PageTransition><ContactUs /></PageTransition>}
            />

            {/* SERVICE DETAILS */}
            <Route
              path="/services/agentic-ai"
              element={<PageTransition><AgenticAI /></PageTransition>}
            />
            <Route
              path="/services/nlp"
              element={<PageTransition><NLP /></PageTransition>}
            />
            <Route
              path="/services/llm"
              element={<PageTransition><LLM /></PageTransition>}
            />
            <Route
              path="/services/machine-learning"
              element={<PageTransition><MachineLearning /></PageTransition>}
            />
            <Route
              path="/services/computer-vision"
              element={<PageTransition><ComputerVision /></PageTransition>}
            />
            <Route
              path="/services/ai-consulting"
              element={<PageTransition><AIConsulting /></PageTransition>}
            />

            {/* INDUSTRIES */}
            <Route
              path="/industries/finance"
              element={<PageTransition><Finance /></PageTransition>}
            />
            <Route
              path="/industries/healthcare"
              element={<PageTransition><Healthcare /></PageTransition>}
            />
            <Route
              path="/industries/manufacturing"
              element={<PageTransition><Manufacturing /></PageTransition>}
            />
            <Route
              path="/industries/retail"
              element={<PageTransition><Retail /></PageTransition>}
            />
            <Route
              path="/industries/media"
              element={<PageTransition><MediaEntertainment /></PageTransition>}
            />
            <Route
              path="/industries/communications"
              element={<PageTransition><Communications /></PageTransition>}
            />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
