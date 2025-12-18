import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import logo from "../assets/loader.png";


/* ================= THEME ================= */

const LIGHT = {
  headerBg: "rgba(255,255,255,0.66)",
  headerBgStrong: "rgba(255,255,255,0.78)",
  text: "#0a0a0a",
  textMuted: "#475569",
  logoColor: "#0a0a0a",
  accent: "#00eaff",
  ctaBg: "#00d0ff",
  ctaText: "#000",
  icon: "#000",
  mobileBg: "rgba(255,255,255,0.96)",
};

const DARK = {
  headerBg: "rgba(10,12,15,0.62)",
  headerBgStrong: "rgba(6,8,12,0.92)",
  text: "#eef2ff",
  textMuted: "#aab3bf",
  logoColor: "#fff",
  accent: "#00eaff",
  ctaBg: "#00d0ff",
  ctaText: "#000",
  icon: "#fff",
  mobileBg: "rgba(6,8,10,0.96)",
};

/* ================= STYLES ================= */

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1200;
  background: ${({ themeColors, scrolled }) =>
    scrolled ? themeColors.headerBgStrong : themeColors.headerBg};
  backdrop-filter: blur(18px);
  transition: all 0.3s ease;
`;

const NavContainer = styled.nav`
  max-width: 1450px;
  margin: auto;
  padding: ${({ scrolled }) => (scrolled ? "0.6rem 2rem" : "1rem 2rem")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.85;
  }
`;


const CenterMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.3rem;

  @media (max-width: 920px) {
    display: none;
  }
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ themeColors }) => themeColors.textMuted};
  font-size: 1rem;
  position: relative;
  transition: 0.25s;

  &.active {
    color: ${({ themeColors }) => themeColors.accent};
  }

  &::after {
    content: "";
    width: 0%;
    height: 2px;
    background: ${({ themeColors }) => themeColors.accent};
    position: absolute;
    bottom: -6px;
    left: 0;
    border-radius: 4px;
    transition: 0.25s;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const ContactBtn = styled(Link)`
  background: ${({ themeColors }) => themeColors.ctaBg};
  color: ${({ themeColors }) => themeColors.ctaText};
  padding: 0.55rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;

  @media (max-width: 920px) {
    display: none;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ themeColors }) => themeColors.icon};
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 920px) {
    display: block;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ themeColors }) => themeColors.mobileBg};
  z-index: 2000;
  padding: 3rem;
`;

/* ================= COMPONENT ================= */

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const themeColors = theme === "light" ? LIGHT : DARK;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavWrapper themeColors={themeColors} scrolled={scrolled}>
        <NavContainer scrolled={scrolled}>
          {/* LOGO */}
          <Logo to="/">
            <LogoImg src={logo} alt="Altaric Logo" />
          </Logo>

          {/* CENTER MENU */}
          <CenterMenu>
            {[
              "About",
              "Services",
              "Industries",
              "AI Solutions",
              "Insights",
              "Careers",
            ].map((label) => (
              <li key={label}>
                <MenuItem
                  to={`/${label.toLowerCase().replace(" ", "-")}`}
                  themeColors={themeColors}
                >
                  {label}
                </MenuItem>
              </li>
            ))}
          </CenterMenu>

          {/* RIGHT */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ContactBtn themeColors={themeColors} to="/ContactUs">
              Contact Us
            </ContactBtn>

            <MobileMenuButton
              themeColors={themeColors}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={26} />
            </MobileMenuButton>
          </div>
        </NavContainer>
      </NavWrapper>

      <AnimatePresence>
        {menuOpen && (
          <MobileOverlay themeColors={themeColors}>
            <X
              size={32}
              style={{ position: "absolute", top: "2rem", right: "2rem" }}
              onClick={() => setMenuOpen(false)}
            />
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
