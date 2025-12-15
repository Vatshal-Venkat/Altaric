import React from "react";
import styled, { keyframes } from "styled-components";

// Import your client logos here
import logo1 from "../assets/react.svg";
// import logo2 from "../assets/clients/logo2.png";
// import logo3 from "../assets/clients/logo3.png";

const logos = [
  ];

// ------------------ Animations ------------------

const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// ------------------ Styled Components ------------------

const BarWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
  overflow: hidden;
  position: relative;

  /* Dark seamless continuation from Hero */
  background: linear-gradient(
    180deg,
    rgba(0,0,0,1) 0%,
    rgba(5,8,15,1) 100%
  );

  /* Subtle separator glow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0,255,255,0.35),
      transparent
    );
  }
`;

const LogosTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${scroll} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  min-width: 180px;
  height: 60px;
  margin: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 55px;
    max-width: 160px;
    object-fit: contain;
    opacity: 0.65;
    filter: grayscale(1) brightness(1.15);
    transition: all 0.35s ease;

    &:hover {
      opacity: 1;
      filter: none;
      transform: scale(1.05);
    }
  }
`;

// ------------------ Component ------------------

const ClientsBar = () => {
  // Duplicate logos for infinite loop
  const allLogos = [...logos, ...logos];

  return (
    <BarWrapper>
      <LogosTrack>
        {allLogos.map((logo, idx) => (
          <LogoItem key={idx}>
            <img src={logo} alt={`Client logo ${idx + 1}`} />
          </LogoItem>
        ))}
      </LogosTrack>
    </BarWrapper>
  );
};

export default ClientsBar;
