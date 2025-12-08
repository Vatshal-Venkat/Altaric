import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-scroll";

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  padding: 1rem 2rem;
  margin-top: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  transition: 0.3s ease;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(22px);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);

  ${(props) =>
    props.scrolled &&
    `
    width: 100%;
    margin-top: 0;
    border-radius: 0;
    border: none;
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(25px);
  `}
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;
`;

const IconButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;

  transition: 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 5, 0.9);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const MenuContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const MenuItem = styled(motion.div)`
  font-size: 2.8rem;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #9eaaff;
    transform: scale(1.07);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "ABOUT US",
    "SERVICES",
    "INDUSTRIES",
    "AI SOLUTIONS",
    "INSIGHTS",
    "CAREERS",
  ];

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <NavContent>
          <IconButton
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={20} /> Menu
          </IconButton>

          <Logo
            as={Link}
            to="hero"
            smooth={true}
            duration={600}
            whileHover={{ scale: 1.05 }}
          >
            ALTARIC
          </Logo>

          <IconButton as={Link} to="contact" smooth duration={600}>
            <Search size={18} /> Contact
          </IconButton>
        </NavContent>
      </NavContainer>

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
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  whileTap={{ scale: 0.95 }}
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
