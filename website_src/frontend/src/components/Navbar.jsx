import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

/* Theme Objects (unchanged) */
const LIGHT = {
  headerBg: "rgba(255,255,255,0.66)",
  headerBgStrong: "rgba(255,255,255,0.78)",
  dropdownBg: "rgba(255,255,255,0.98)",
  text: "#0a0a0a",
  textMuted: "#475569",
  logoColor: "#0a0a0a",
  accent: "#0066ff",
  ctaBg: "#00d0ff",
  ctaText: "#000000",
  icon: "#0a0a0a",
  mobileBg: "rgba(255,255,255,0.98)"
};

const DARK = {
  headerBg: "rgba(10,12,15,0.62)",
  headerBgStrong: "linear-gradient(180deg, rgba(6,8,12,0.95), rgba(10,12,15,0.85))",
  dropdownBg: "rgba(8,10,12,0.9)",
  text: "#eef2ff",
  textMuted: "#aab3bf",
  logoColor: "#ffffff",
  accent: "#00eaff",
  ctaBg: "#00d0ff",
  ctaText: "#000",
  icon: "#ffffff",
  mobileBg: "rgba(6,8,10,0.98)"
};

/* Styled Components */
const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1200;
  background: ${({ themeColors, scrolled }) =>
    scrolled ? themeColors.headerBgStrong : themeColors.headerBg};
  backdrop-filter: blur(${({ scrolled }) => (scrolled ? "16px" : "10px")});
  transition: 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 8px 24px rgba(0,0,0,0.35)" : "none"};
`;

const NavContainer = styled.nav`
  max-width: 1450px;
  padding: ${({ scrolled }) =>
    scrolled ? "0.6rem 2rem" : "1rem 2rem"};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion(Link))`
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 800;
  color: ${({ themeColors }) => themeColors.logoColor};
`;

const CenterMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 920px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ themeColors }) => themeColors.textMuted};
  font-size: 1rem;
  position: relative;

  &.active {
    color: ${({ themeColors }) => themeColors.accent};
    font-weight: 600;
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
    transition: 0.28s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 140%;
  left: 0;
  background: ${({ themeColors }) => themeColors.dropdownBg};
  padding: 1rem;
  min-width: 220px;
  border-radius: 10px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.3);
  backdrop-filter: blur(14px);
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem;
  border-radius: 6px;
  text-decoration: none;
  color: ${({ themeColors }) => themeColors.text};
  font-size: 0.95rem;

  &:hover {
    background: rgba(255,255,255,0.06);
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
  color: ${({ themeColors }) => themeColors.icon};
  cursor: pointer;

  @media (max-width: 920px) {
    margin-right: 1rem;
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 920px) {
    display: block;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ themeColors }) => themeColors.mobileBg};
  z-index: 2000;
  padding: 3rem;
`;

const MobileLink = styled(Link)`
  color: ${({ themeColors }) => themeColors.text};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
  text-decoration: none;
`;



/* MAIN COMPONENT */
const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("site-theme") || "dark"
  );

  const themeColors = theme === "light" ? LIGHT : DARK;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },

    {
      label: "Services",
      submenu: [{ label: "Services", path: "/services" }],
    },

    {
      label: "Industries",
      submenu: [{ label: "Industries", path: "/industries" }],
    },

    {
      label: "AI Solutions",
      submenu: [{ label: "AI Solutions", path: "/ai-solutions" }],
    },

    { label: "Insights", path: "/insights" },
    { label: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("site-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 6 },
  };

  return (
    <>
      <NavWrapper scrolled={scrolled} themeColors={themeColors}>
        <NavContainer scrolled={scrolled}>

          {/* Logo */}
          <Logo 
            to="/" 
            themeColors={themeColors}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ALTARIC
          </Logo>

          {/* CENTER MENU (desktop) */}
          <CenterMenu>
            {navLinks.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: "relative" }}
              >
                <StyledNavLink
                  to={item.path || "#"}
                  themeColors={themeColors}
                >
                  {item.label}
                </StyledNavLink>

                {item.submenu && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <Dropdown
                        themeColors={themeColors}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={dropdownVariants}
                      >
                        {item.submenu.map((s) => (
                          <DropdownItem
                            key={s.path}
                            to={s.path}
                            themeColors={themeColors}
                          >
                            {s.label}
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </CenterMenu>

          {/* RIGHT SIDE: Theme + Contact */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <IconButton themeColors={themeColors} onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </IconButton>

            <ContactBtn to="/ContactUs" themeColors={themeColors}>
              Contact Us
            </ContactBtn>

            <MobileMenuButton themeColors={themeColors} onClick={() => setMenuOpen(true)}>
              <Menu size={26} />
            </MobileMenuButton>
          </div>
        </NavContainer>
      </NavWrapper>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <MobileOverlay
            themeColors={themeColors}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <X
              size={32}
              color={themeColors.text}
              style={{ position: "absolute", top: "2rem", right: "2rem", cursor: "pointer" }}
              onClick={() => setMenuOpen(false)}
            />

            {navLinks.map((item) => (
              <div key={item.label}>
                <MobileLink
                  to={item.path || "#"}
                  themeColors={themeColors}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </MobileLink>

                {item.submenu && (
                  <div style={{ marginLeft: "1rem" }}>
                    {item.submenu.map((s) => (
                      <MobileLink
                        key={s.path}
                        to={s.path}
                        themeColors={themeColors}
                        onClick={() => setMenuOpen(false)}
                        style={{ fontSize: "1.2rem", opacity: 0.8 }}
                      >
                        {s.label}
                      </MobileLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
