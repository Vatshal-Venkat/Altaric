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
import Statistics from "./components/Statistics";
import Expertise from "./components/Expertise";
import ContactForm from "./components/ContactForm";

// PAGES
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import AISolutions from "./pages/AISolutions";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import ContactUs from "./components/ContactUs";

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

  // TRACK MOUSE FOR CUSTOM CURSOR
  useEffect(() => {
    const handler = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // SHOW LOADING SCREEN
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

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

  return (
    <AppContainer>
      <GlobalStyle />
      <CustomCursor mousePosition={mousePosition} />
      <Navbar />

      <Routes>
        {/* ⭐ REAL WORKING HOMEPAGE */}
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
                <Industries />
                <Expertise />
                <ContactForm />
              </SnapContainer>

              <div style={{ marginTop: "4rem" }} />
              <Footer />
            </>
          }
        />

        {/* ⭐ NEW STANDALONE PAGES */}
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
