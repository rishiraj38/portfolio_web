"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaJs, FaReact, FaPython, FaDatabase } from "react-icons/fa";

export default function Hero() {
  const [techIndex, setTechIndex] = useState(0);
  const techList = ["JavaScript", "React", "Framer Motion", "Python", "SQL"];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techList.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [techList.length]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Overlay Glow Circles */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full bottom-10 right-10 blur-3xl animate-pulse" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center font-orbitron"
      >
        Hi, I&apos;m <span className="text-yellow-300">Rishi Raj</span>
      </motion.h1>

      {/* Animated Tech Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl md:text-2xl font-semibold mt-4 text-center"
      >
        Skilled in{" "}
        <motion.span
          key={techIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400"
        >
          {techList[techIndex]}
        </motion.span>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="/project"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block px-8 py-3 rounded-full text-lg border border-white backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <Link href="/project">View My Work</Link>
      </motion.a>

      {/* Tech Icons at the bottom */}
      <div className="absolute bottom-20 flex space-x-6 text-4xl">
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaJs className="text-yellow-400" />
          <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
            JavaScript
          </span>
        </motion.div>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaReact className="text-blue-500" />
          <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
            React
          </span>
        </motion.div>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaPython className="text-yellow-500" />
          <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
            Python
          </span>
        </motion.div>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FaDatabase className="text-green-500" />
          <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
            SQL
          </span>
        </motion.div>
      </div>
    </section>
  );
}
