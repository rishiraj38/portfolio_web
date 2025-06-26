"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import DarkModeToggle from "./DarkModeToggle"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-black/10 text-white"
    >
      {/* Logo */}
      <div className="flex items-center justify-center space-x-1 pl-3">
        {["R", "i", "s", "h", "i", "V", "e", "r", "s", "e"].map(
          (letter, index) => (
            <motion.span
              key={index}
              className="text-xl md:text-2xl font-semibold tracking-normal font-orbitron"
              style={{
                display: "inline-block",
                color: "white",
                textShadow:
                  "0 0 5px rgba(255, 165, 0, 0.7), 0 0 10px rgba(255, 165, 0, 0.6), 0 0 15px rgba(255, 165, 0, 0.5)",
              }}
              animate={{
                textShadow: [
                  "0 0 5px rgba(255, 165, 0, 0.7), 0 0 10px rgba(255, 165, 0, 0.6), 0 0 15px rgba(255, 165, 0, 0.5)",
                  "0 0 10px rgba(255, 100, 0, 0.8), 0 0 20px rgba(255, 100, 0, 0.6), 0 0 30px rgba(255, 100, 0, 0.4)",
                  "0 0 5px rgba(255, 165, 0, 0.7), 0 0 10px rgba(255, 165, 0, 0.6), 0 0 15px rgba(255, 165, 0, 0.5)",
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          )
        )}
      </div>
      <div className="pl-20">
        <DarkModeToggle />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wider font-medium pr-4">
        <Link href="/" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link href="/about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/project" className="relative group">
          Projects
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/contact" className="relative group">
          Contact
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md text-white py-6 flex flex-col items-center space-y-6 text-lg font-semibold md:hidden"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/project" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
