import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  padding: 1rem 2rem;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px) saturate(1.5);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  transition: 0.3s ease;

  ${(props) =>
    props.scrolled &&
    `
    width: 100%;
    border-radius: 0;
  `}
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1450px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavCenter = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ContactButton = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  
  font-size: 1rem;
  padding: 0.5rem 1rem;

  border-radius: 12px;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255,255,255,0.15);
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 5, 0.92);
  backdrop-filter: blur(25px);

  z-index: 2000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MenuItem = styled(motion.div)`
  font-size: 2.6rem;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #a5b4fc;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  background: rgba(255,255,255,0.2);
  padding: 12px;
  border-radius: 50%;
  color: #fff;

  &:hover {
    background: rgba(255,255,255,0.3);
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const menuItems = ["ABOUT US", "SERVICES", "INDUSTRIES", "AI SOLUTIONS", "INSIGHTS", "CAREERS"];

  return (
    <>
      <NavWrapper scrolled={scrolled}>
        <NavContent>
          {/* LEFT — MENU */}
          <NavLeft>
            <MenuButton onClick={() => setMenuOpen(true)}>
              <Menu size={22} /> MENU
            </MenuButton>
          </NavLeft>

          {/* CENTER — LOGO */}
          <NavCenter as={ScrollLink} to="hero" smooth duration={600}>
            ALTARIC
          </NavCenter>

          {/* RIGHT — CONTACT */}
          <NavRight>
            <ContactButton as={ScrollLink} to="contact" smooth duration={600}>
              CONTACT US
            </ContactButton>
          </NavRight>
        </NavContent>
      </NavWrapper>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseButton onClick={() => setMenuOpen(false)}>
              <X size={22} />
            </CloseButton>

            <MenuContent>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
