"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/80 border border-red-600 text-red-500 shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:shadow-[0_0_25px_rgba(255,0,0,0.8)] hover:scale-110 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="group-hover:animate-pulse" />
    </button>
  );
}
