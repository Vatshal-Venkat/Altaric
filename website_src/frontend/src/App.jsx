import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

// LANDING PAGE SECTIONS
import Hero from "./components/Hero";
import ClientsBar from "./components/ClientsBar";
import About from "./components/About";
import IndustriesSection from "./components/Industries"; // ✔️ Landing version
import Statistics from "./components/Statistics";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";

// FULL PAGES
import Services from "./pages/Services";
import Industries from "./pages/Industry"; // ✔️ Full page version
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

// ------------------------------------
// GLOBAL STYLES
// ------------------------------------
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
  }

  html { scroll-behavior: smooth; }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #000;
`;

const SnapContainer = styled.div`
  width: 100%;
  background: #000;
`;

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Custom cursor tracking
  useEffect(() => {
    const handler = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Loader timeout
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // ------------------------------------
  // LOADING SCREEN
  // ------------------------------------
  if (isLoading) {
    return (
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
    );
  }

  // ------------------------------------
  // MAIN APP
  // ------------------------------------
  return (
    <AppContainer>
      <GlobalStyle />
      <CustomCursor mousePosition={mousePosition} />
      <Navbar />

      <Routes>

        {/* ⭐ HOMEPAGE (REAL WORKING ONE) */}
        <Route
          path="/"
          element={
            <>
              <SnapContainer>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "95vh",
                  }}
                >
                  <Hero />
                  <ClientsBar />
                  <About />
                </div>

                <Statistics />
                <IndustriesSection /> {/* ✔️ Correct landing industries */}
                <Expertise />
                <ContactForm />
              </SnapContainer>

              <div style={{ marginTop: "4rem" }} />
              <Footer />
            </>
          }
        />

        {/* ⭐ FULL PAGES */}
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} /> {/* ✔️ Full Industries page */}
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* ⭐ SERVICE DETAIL ROUTES */}
        <Route path="/services/agentic-ai" element={<AgenticAI />} />
        <Route path="/services/nlp" element={<NLP />} />
        <Route path="/services/llm" element={<LLM />} />
        <Route path="/services/machine-learning" element={<MachineLearning />} />
        <Route path="/services/computer-vision" element={<ComputerVision />} />
        <Route path="/services/ai-consulting" element={<AIConsulting />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
