import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import InteractiveBackground from './InteractiveBackground';
import FlowBackground from './FlowBackground';

const DynamicBackground = () => {
  const { darkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint (tailwind's md)
    };
    
    // Initial check
    checkIfMobile();
    
    // Listen for window resize events
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Logic for choosing background:
  // 1. Light mode (all devices): InteractiveBackground
  // 2. Dark mode on mobile: InteractiveBackground
  // 3. Dark mode on desktop: FlowBackground
  if (!darkMode) {
    return <InteractiveBackground />;
  } else {
    return isMobile ? <InteractiveBackground /> : <FlowBackground />;
  }
};

export default DynamicBackground;