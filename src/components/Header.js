"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Frustrated in your cubicle?",
  "Have a bold idea?",
  "Ready to break out?",
];

export default function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="text-center px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            {messages[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </header>
  );
}
