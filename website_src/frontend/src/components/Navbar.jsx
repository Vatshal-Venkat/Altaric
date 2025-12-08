// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

/*
  Features included:
   - Active page highlight (NavLink)
   - Glass-effect background (backdrop-filter) + sticky stronger glass on scroll
   - Submenu dropdown (Services) on desktop + expandable on mobile
   - Sticky scroll animation (shrink / shadow)
   - Dark / Light theme toggle (persists to localStorage)
   - Animated logo reveal (framer-motion)
*/

// ---------------------- Styling (styled-components) ----------------------

const NAV_HEIGHT = 72;
const NAV_HEIGHT_SHRINK = 58;

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1200;
  display: flex;
  justify-content: center;
  transition: all 0.28s ease;
  will-change: transform, background-color;

  /* theme-aware */
  background: ${({ themeColors, scrolled }) =>
    scrolled ? themeColors.headerBgStrong : themeColors.headerBg};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 6px 20px rgba(2,8,23,0.45)" : "none"};
  backdrop-filter: blur(${({ scrolled }) => (scrolled ? "14px" : "8px")});
  border-bottom: 1px solid rgba(255,255,255,0.04);
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ scrolled }) =>
    scrolled ? `0.5rem 1.5rem` : `0.9rem 2rem`};
  height: ${({ scrolled }) =>
    scrolled ? `${NAV_HEIGHT_SHRINK}px` : `${NAV_HEIGHT}px`};
  transition: padding 0.22s ease, height 0.22s ease;
`;

/* Logo */
const Logo = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${({ themeColors }) => themeColors.logoColor};
  font-weight: 800;
  letter-spacing: 0.4px;
  font-size: 1.25rem;
`;

/* center nav (desktop) */
const CenterNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 920px) {
    display: none;
  }
`;

/* Single nav item */
const baseNavItem = css`
  position: relative;
  font-size: 0.95rem;
  color: ${({ themeColors }) => themeColors.textMuted};
  text-decoration: none;
  padding: 8px 0;
  cursor: pointer;
  transition: color 0.18s ease;
  &:hover {
    color: ${({ themeColors }) => themeColors.text};
  }
`;

/* NavLink wrapper styled */
const StyledNavLink = styled(NavLink)`
  ${baseNavItem}

  &.active {
    color: ${({ themeColors }) => themeColors.accent};
    font-weight: 600;
  }

  /* underline grow */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 0%;
    border-radius: 6px;
    background: ${({ themeColors }) => themeColors.accent};
    transition: width 0.26s ease;
  }
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

/* Services dropdown */
const ServicesWrap = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  ${baseNavItem}
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  background: ${({ themeColors }) => themeColors.dropdownBg};
  border-radius: 10px;
  padding: 0.6rem;
  box-shadow: 0 10px 30px rgba(2,8,23,0.45);
  backdrop-filter: blur(12px);
  overflow: hidden;
  z-index: 1400;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.55rem 0.7rem;
  color: ${({ themeColors }) => themeColors.text};
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: background 0.14s ease;
  &:hover {
    background: rgba(255,255,255,0.03);
  }
`;

/* Right section */
const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* Contact button */
const ContactBtn = styled(Link)`
  background: ${({ themeColors }) => themeColors.ctaBg};
  color: ${({ themeColors }) => themeColors.ctaText};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${({ themeColors }) => themeColors.ctaShadow};
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  &:hover {
    transform: translateY(-2px);
  }
  @media (max-width: 920px) {
    display: none;
  }
`;

/* Theme toggle button */
const IconButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ themeColors }) => themeColors.icon};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: rgba(255,255,255,0.03);
  }
`;

/* Mobile menu button */
const MobileButton = styled(IconButton)`
  display: none;
  @media (max-width: 920px) {
    display: inline-flex;
  }
`;

/* Mobile overlay */
const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ themeColors }) => themeColors.mobileBg};
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  gap: 1.25rem;
`;

/* Mobile nav link */
const MobileLink = styled(Link)`
  font-size: 1.25rem;
  color: ${({ themeColors }) => themeColors.text};
  text-decoration: none;
`;

/* small helper */
const SmallMuted = styled.div`
  font-size: 0.9rem;
  color: ${({ themeColors }) => themeColors.textMuted};
`;

// ---------------------- Theme helper ----------------------

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
  ctaShadow: "0 6px 18px rgba(0,0,0,0.12)",
  icon: "#0a0a0a",
  mobileBg: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,245,245,0.98))",
};

const DARK = {
  headerBg: "rgba(10,12,15,0.62)",
  headerBgStrong: "linear-gradient(180deg, rgba(6,8,12,0.95), rgba(10,12,15,0.85))",
  dropdownBg: "rgba(8,10,12,0.9)",
  text: "#eef2ff",
  textMuted: "#aab3bf",
  logoColor: "#fff",
  accent: "#00eaff",
  ctaBg: "#00d0ff",
  ctaText: "#000",
  ctaShadow: "0 8px 24px rgba(0,208,255,0.08)",
  icon: "#fff",
  mobileBg: "rgba(6,8,10,0.98)",
};

// ---------------------- Navbar Component ----------------------

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("site-theme") || "dark");
  const location = useLocation();
  const dropdownRef = useRef(null);

  const themeColors = theme === "light" ? LIGHT : DARK;

  useEffect(() => {
    // apply theme class to document root (so other CSS can react if you like)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (ev) => {
      if (dropdownRef.current && !dropdownRef.current.contains(ev.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // Navigation structure and submenu items
  const navLinks = [
    { label: "About", path: "/about" },
    { 
      label: "Services",
      path: "/services-index",
      submenu: [
        { label: "Services Index", path: "/services-index" },
        { label: "AI Consulting", path: "/ai-consulting" },
        { label: "Computer Vision", path: "/ComputerVision" },
        { label: "Machine Learning", path: "/MachineLearning" },
        { label: "LLM", path: "/LLM" },
        { label: "NLP", path: "/NLP" },
      ],
    },
    { label: "Industries", path: "/industries" },
    { label: "AI Solutions", path: "/ai-consulting" },
    { label: "Insights", path: "/insights" },
    { label: "Careers", path: "/careers" },
  ];

  // Framer variants
  const dropdownVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.18 } },
    closed: { opacity: 0, y: 6, transition: { duration: 0.12 } },
  };

  return (
    <>
      <NavWrapper scrolled={scrolled} themeColors={themeColors}>
        <NavContainer scrolled={scrolled}>
          {/* Logo (animated reveal) */}
          <Logo
            to="/"
            themeColors={themeColors}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* optionally you can swap text to an <img> */}
            <motion.div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                display: "grid",
                placeItems: "center",
                background: theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
              }}
              initial={{ rotate: -18, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h10" stroke={themeColors.accent} strokeWidth="2" strokeLinecap="round" />
                <path d="M21 3L12 12" stroke={themeColors.accent} strokeWidth="2" strokeLinecap="round" />
                <path d="M21 21L12 12" stroke={themeColors.accent} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            <span style={{ marginLeft: 6, fontSize: 16 }}>ALTARIC</span>
          </Logo>

          {/* Center navigation (desktop) */}
          <CenterNav>
            {navLinks.map((link, idx) => {
              if (link.submenu) {
                return (
                  <ServicesWrap
                    key={link.label}
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    themeColors={themeColors}
                    aria-haspopup="true"
                  >
                    <StyledNavLink
                      to={link.path}
                      themeColors={themeColors}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {link.label}
                    </StyledNavLink>

                    <AnimatePresence>
                      {servicesOpen && (
                        <Dropdown
                          themeColors={themeColors}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                        >
                          {link.submenu.map((s) => (
                            <DropdownItem
                              key={s.path}
                              to={s.path}
                              themeColors={themeColors}
                              onClick={() => setServicesOpen(false)}
                            >
                              {s.label}
                            </DropdownItem>
                          ))}
                        </Dropdown>
                      )}
                    </AnimatePresence>
                  </ServicesWrap>
                );
              }

              return (
                <li key={link.label}>
                  <StyledNavLink
                    to={link.path}
                    themeColors={themeColors}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </StyledNavLink>
                </li>
              );
            })}
          </CenterNav>

          {/* Right controls */}
          <RightControls>
            {/* Theme toggle */}
            <IconButton
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              themeColors={themeColors}
              title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>

            {/* Contact CTA */}
            <ContactBtn to="/ContactUs" themeColors={themeColors}>
              Contact Us
            </ContactBtn>

            {/* Mobile hamburger */}
            <MobileButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              themeColors={themeColors}
            >
              <Menu size={20} />
            </MobileButton>
          </RightControls>
        </NavContainer>
      </NavWrapper>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileOverlay
            key="mobile-menu"
            themeColors={theme === "light" ? LIGHT : DARK}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <SmallMuted themeColors={theme === "light" ? LIGHT : DARK}>ALTARIC</SmallMuted>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: theme === "light" ? LIGHT.icon : DARK.icon,
                }}
              >
                <X size={28} />
              </button>
            </div>

            {/* Primary links */}
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    onClick={() => setMobileServicesOpen((s) => !s)}
                  >
                    <MobileLink to={link.path} themeColors={themeColors} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </MobileLink>
                    <button
                      onClick={() => setMobileServicesOpen((s) => !s)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: theme === "light" ? LIGHT.icon : DARK.icon,
                      }}
                    >
                      {mobileServicesOpen ? "−" : "+"}
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div style={{ marginLeft: 8, marginTop: 6, display: "flex", flexDirection: "column", gap: 8 }}>
                      {link.submenu.map((s) => (
                        <MobileLink key={s.path} to={s.path} onClick={() => setMenuOpen(false)}>
                          {s.label}
                        </MobileLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <MobileLink key={link.path} to={link.path} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </MobileLink>
              )
            )}

            {/* Mobile Contact CTA */}
            <div style={{ marginTop: 18 }}>
              <ContactBtn to="/ContactUs" themeColors={theme === "light" ? LIGHT : DARK} onClick={() => setMenuOpen(false)}>
                Contact Us
              </ContactBtn>
            </div>

            <div style={{ marginTop: 14 }}>
              <SmallMuted themeColors={theme === "light" ? LIGHT : DARK}>© {new Date().getFullYear()} ALTARIC</SmallMuted>
            </div>
          </MobileOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
