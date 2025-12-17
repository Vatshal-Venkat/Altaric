import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: "Inter", system-ui, -apple-system, sans-serif;
    transition: background 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  section {
    background: ${({ theme }) => theme.bg};
  }

  hr {
    border: 1px solid ${({ theme }) => theme.border};
  }
`;

export default GlobalStyle;
