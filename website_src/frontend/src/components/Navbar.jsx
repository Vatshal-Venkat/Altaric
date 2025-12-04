import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-scroll';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.5rem 2rem;
  margin: 1rem 2rem;
  border-radius: ${props => props.scrolled ? '25px' : '0'};
  background: ${props => props.scrolled ? 'rgba(0, 0, 0, 0.65)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  border: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const NavBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.scrolled ? 'transparent' : 'linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)'};
  backdrop-filter: blur(10px);
  border-bottom: none;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-decoration: none;
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  z-index: 2;

  .hamburger {
    width: 20px;
    height: 2px;
    background: #fff;
    position: relative;
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background: #fff;
      transition: all 0.3s ease;
    }

    &::before {
      top: -6px;
    }

    &::after {
      bottom: -6px;
    }
  }

  &.active .hamburger {
    background: transparent;

    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    &::after {
      transform: rotate(-45deg);
      bottom: 0;
    }
  }
`;

const ContactButton = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
  text-decoration: none;
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #fff;
`;

const MenuItem = styled(motion.div)`
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
`;

const DecorativeCircle = styled.div`
  width: 4px;
  height: 4px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-top: 1rem;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'ABOUT US',
    'SERVICES',
    'INDUSTRIES',
    'AI SOLUTIONS',
    'INSIGHTS',
    'CAREERS',
  ];

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        scrolled={scrolled}
      >
        {!scrolled && <NavBackground scrolled={scrolled} />}
        <NavContent>
          <MenuButton
            onClick={() => setMenuOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={menuOpen ? 'active' : ''}
          >
            <div className="hamburger" />
            <span>MENU</span>
          </MenuButton>

          <Logo
            as={Link}
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ALTARIC
          </Logo>

          <ContactButton
            as={Link}
            to="contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={16} />
            Contact Us
          </ContactButton>
        </NavContent>
      </NavContainer>

      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
              CLOSE
            </CloseButton>

            <MenuContent>
              <DecorativeCircle />
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
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