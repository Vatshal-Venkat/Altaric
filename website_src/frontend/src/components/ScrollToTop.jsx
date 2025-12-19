import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    // Disable smooth scroll temporarily
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0 });

    // Restore smooth scroll after jump
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior || "smooth";
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
