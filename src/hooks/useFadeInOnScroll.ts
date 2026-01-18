// src/hooks/useFadeInOnScroll.ts
import { useState, useEffect } from "react";

export const useFadeInOnScroll = (offset = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const handleScroll = () => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(elementTop < windowHeight - offset);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [element, offset]);

  return [setElement, isVisible] as const;
};
