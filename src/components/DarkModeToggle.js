"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; 

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);


  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 px-4 py-2"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun size={24} /> 
      ) : (
        <Moon size={24} /> 
      )}
    </button>
  );
}
