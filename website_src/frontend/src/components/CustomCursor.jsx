import React, { useEffect, useState } from "react";

const CustomCursor = ({ mousePosition }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return null;

  const cursorStyle = {
    position: "fixed",
    left: mousePosition.x,
    top: mousePosition.y,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#3a3735", // matches your screenshot color
    zIndex: 9999,
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
