import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  will-change: transform;
`;

const CursorDot = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const CustomCursor = ({ mousePosition }) => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    
    if (!cursor || !dot) return;

    // Use requestAnimationFrame for smooth animation
    let animationId;
    
    const updateCursor = () => {
      if (cursor && dot) {
        cursor.style.transform = `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`;
        dot.style.transform = `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`;
      }
      animationId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleInteractiveHover = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px) scale(1.5)`;
        cursorRef.current.style.background = 'rgba(255, 255, 255, 0.9)';
      }
    };

    const handleInteractiveLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px) scale(1)`;
        cursorRef.current.style.background = 'rgba(255, 255, 255, 0.8)';
      }
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('.interactive');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleInteractiveHover);
      element.addEventListener('mouseleave', handleInteractiveLeave);
    });

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleInteractiveHover);
        element.removeEventListener('mouseleave', handleInteractiveLeave);
      });
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mousePosition]);

  return (
    <>
      <CursorContainer
        ref={cursorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        }}
      />
      <CursorDot
        ref={dotRef}
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${mousePosition.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 