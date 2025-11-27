"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; 

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={24} 
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isDarkMode 
              ? 'rotate-180 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          size={24} 
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isDarkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
