import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Industries from "./components/Industries";
import Expertise from "./components/Expertise";
import Statistics from "./components/Statistics";     // ⭐ ADDED BACK
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";  // ⭐ ADDED BACK
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs"; 
import ClientsBar from "./components/ClientsBar";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Industries from "./pages/Industry";
import AISolutions from "./pages/AISolutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";


// Service Pages
import AgenticAI from "./pages/AgenticAI";
import LLM from "./pages/LLM";
import NLP from "./pages/NLP";
import ComputerVision from "./pages/ComputerVision";
import MachineLearning from "./pages/MachineLearning";
import AIConsulting from "./pages/AIConsulting";
import ServicesIndex from "./pages/ServicesIndex";

// Global Styles
const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
    cursor: none;   /* ⭐ Enables custom cursor */
  }

  html { scroll-behavior: smooth; }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #111; }
  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #000 0%, #0a0a0a 50%, #000 100%);
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

const SnapContainer = styled.div`
  width: 100%;
`;

// App Component
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Track mouse for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading Screen
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
            background: "#000",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #fff, #888)",
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

  // Main App JSX
  return (
    <AppContainer>
      <GlobalStyle />

      {/* ⭐ Custom Cursor */}
      <CustomCursor mousePosition={mousePosition} />

      <Navbar />

      <MainContent>
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <SnapContainer>
                  <div
                    style={{
                      background: "#fff",
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      minHeight: "95vh",
                    }}
                  >
                    <Hero />
                    <ClientsBar />
                    <About />
                  </div>

                  {/* ⭐ ADDED STATISTICS SECTION BACK */}
                  <Statistics />

                  <Industries />
                  <Expertise />
                  <ContactForm />
                </SnapContainer>

                {/* Space before footer */}
                <div style={{ marginTop: "4rem" }}></div>

                <Footer />
              </>
            }
          />

          {/* Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Service Pages */}
          <Route path="/services/agentic-ai" element={<AgenticAI />} />
          <Route path="/services/llm" element={<LLM />} />
          <Route path="/services/nlp" element={<NLP />} />
          <Route path="/services/computer-vision" element={<ComputerVision />} />
          <Route path="/services/machine-learning" element={<MachineLearning />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App;
