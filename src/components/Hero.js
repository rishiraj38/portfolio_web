"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [techIndex, setTechIndex] = useState(0);
  const techList = ["JavaScript", "React", "Framer Motion", "Python", "SQL"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techList.length]);

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
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block px-8 py-3 rounded-full text-lg border border-white backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        View My Work
      </motion.a>

      {/* Projects */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <ProjectCard
          title="FoodieHub 🍔"
          description="A sleek Swiggy-inspired food ordering UI."
          link="https://foodie-hub-beta.vercel.app/"
        />
        <ProjectCard
          title="Random Color Generator 🎨"
          description="Click to generate beautiful random colors with HEX values."
          link="https://rishiraj38.github.io/Color-Generation/"
        />
        <ProjectCard
          title="Ping Pong Score Keeper 🏓"
          description="Fun interactive game to track scores between two players."
          link="https://rishiraj38.github.io/Ping-Pong-Score-Keeper/"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-yellow-200">{title}</h3>
      <p className="text-sm text-white/80 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        className="text-sm text-cyan-300 underline hover:text-cyan-400 transition"
      >
        View Project →
      </Link>
    </motion.div>
  );
}
