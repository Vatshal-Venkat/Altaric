import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

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
  font-size: 1.45rem;
  font-weight: 800;
  text-decoration: none;
  color: ${({ themeColors }) => themeColors.logoColor};
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
  display: flex;
  align-items: center;
  gap: 4px;
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
  overflow-y: auto;
`;

const MobileLink = styled(Link)`
  display: block;
  color: ${({ themeColors }) => themeColors.text};
  font-size: 1.4rem;
  text-decoration: none;
  margin-bottom: 1.2rem;
`;

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("site-theme") || "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const themeColors = theme === "light" ? LIGHT : DARK;

  const navLinks = [
    
    { label: "About", path: "/about" },
    { label: "Services", path: "/services", arrow: true },
    { label: "Industries", path: "/industries", arrow: true },
    { label: "AI Solutions", path: "/ai-solutions", arrow: true },
    { label: "Insights", path: "/insights" },
    { label: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("site-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <NavWrapper themeColors={themeColors} scrolled={scrolled}>
        <NavContainer scrolled={scrolled}>
          <Logo themeColors={themeColors} to="/">
            ALTARIC
          </Logo>

          {/* CENTER NAVIGATION */}
          <CenterMenu>
            {navLinks.map((link) => (
              <li key={link.label}>
                <MenuItem
                  to={link.path}
                  themeColors={themeColors}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                  {link.arrow && (
                    <ChevronDown size={14} style={{ opacity: 0.6, marginTop: 1 }} />
                  )}
                </MenuItem>
              </li>
            ))}
          </CenterMenu>

          {/* RIGHT SIDE */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <IconButton themeColors={themeColors} onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </IconButton>

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

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <MobileOverlay themeColors={themeColors}>
            <X
              size={32}
              style={{ position: "absolute", top: "2rem", right: "2rem", cursor: "pointer" }}
              onClick={() => setMenuOpen(false)}
              color={themeColors.text}
            />

            {navLinks.map((item) => (
              <MobileLink
                key={item.label}
                to={item.path}
                themeColors={themeColors}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </MobileLink>
            ))}
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
