import React from 'react';
import styled, { keyframes } from 'styled-components';

// Add your logo images to src/assets/clients/ and import them here
// Example placeholders (replace with your own):
import logo1 from '../assets/react.svg';
// import logo2 from '../assets/clients/logo2.png';
// import logo3 from '../assets/clients/logo3.png';
// ...

const logos = [
  logo1,
  // logo2,
  // logo3,
  // ...add more logos here
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const BarWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 2rem 0;
  overflow: hidden;
  border-radius: 0 0 40px 40px;
`;

const LogosTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 60px;
  margin: 0 2.5rem;
  img {
    max-height: 60px;
    max-width: 160px;
    object-fit: contain;
    filter: grayscale(0.2) contrast(1.1);
    transition: filter 0.2s;
    &:hover {
      filter: none;
    }
  }
`;

const ClientsBar = () => {
  // Duplicate the logos array to create a seamless infinite scroll
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
      {/*
        Instructions:
        1. Add your logo images to src/assets/clients/ (create the folder if it doesn't exist).
        2. Import them at the top of this file.
        3. Add them to the 'logos' array above.
      */}
    </BarWrapper>
  );
};

export default ClientsBar;