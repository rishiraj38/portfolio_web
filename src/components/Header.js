"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 text-white"
    >
      <motion.div
        className="text-2xl font-semibold tracking-widest font-orbitron"
        animate={{ opacity: [0.85, 1, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        RishiVerse
      </motion.div>

      <nav className="space-x-6 text-sm uppercase tracking-wider font-medium">
        <Link href="/#about" className="relative group">
          About
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link href="/#projects" className="relative group">
          Projects
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        <Link href="/contact" className="relative group">
          Contact
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
      </nav>
    </motion.header>
  );
}
