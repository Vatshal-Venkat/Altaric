import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// GLOBAL COMPONENTS
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

// LANDING PAGE SECTIONS

import ContactUs from "./components/ContactUs";

// NEW PAGES YOU CREATED
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import AISolutions from "./pages/AISolutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";

// GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
    cursor: none;
  }

  html { scroll-behavior: smooth; }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Track mouse for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    setTimeout(() => setIsLoading(false), 1500);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading screen
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

  return (
    <AppContainer>
      <GlobalStyle />

      {/* Custom Cursor */}
      <CustomCursor mousePosition={mousePosition} />

      <Navbar />

      <MainContent>
        <Routes>



          {/* ⭐ NEW PROPER STANDALONE PAGES */}
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ContactUs" element={<ContactUs />} />

        </Routes>

        <Footer />
      </MainContent>
    </AppContainer>
  );
}

export default App;
