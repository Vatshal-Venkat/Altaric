import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Statistics from './components/Statistics';
import Industries from './components/Industries';
import Expertise from './components/Expertise';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ClientsBar from './components/ClientsBar';

// Service Detail Pages
import AgenticAI from './pages/AgenticAI';
import LLM from './pages/LLM';
import NLP from './pages/NLP';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
    cursor: auto;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
  overflow-x: hidden;
`;

const SnapContainer = styled.div`
  width: 100%;
`;

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Simulated loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isLoading) {
    return (
      <AppContainer>
        <GlobalStyle />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fff, #888)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ALTARIC
          </motion.div>
        </motion.div>
      </AppContainer>
    );
  }

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
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
                        background: '#fff',
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        minHeight: '95vh',
                      }}
                    >
                      <Hero />
                      <ClientsBar />
                      <About />
                    </div>

                    {/* Other sections */}
                    {/* <Statistics /> */}
                    <Industries />
                    <Expertise />
                    <ContactForm />
                  </SnapContainer>

                  <Footer />
                </>
              }
            />

            {/* EXISTING ROUTES */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* NEW SERVICE PAGES */}
            <Route path="/services/agentic-ai" element={<AgenticAI />} />
            <Route path="/services/llm" element={<LLM />} />
            <Route path="/services/nlp" element={<NLP />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
