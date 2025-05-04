"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaJs, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import Particles from "../../ReactBits2/Particles/Particles";

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
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 overflow-hidden bg-transparent">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.15}
          particleColors={["#00FFFF", "#FFD700", "#00FF00"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={25}
        />
      </div>

      {/* Glow Effects */}
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

      {/* Tech Skill Animation */}
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

      {/* Tech Icons */}
      <div className="absolute bottom-20 flex space-x-6 text-4xl">
        {[
          { icon: FaJs, label: "JavaScript", color: "text-yellow-400" },
          { icon: FaReact, label: "React", color: "text-blue-500" },
          { icon: FaPython, label: "Python", color: "text-yellow-500" },
          { icon: FaDatabase, label: "SQL", color: "text-green-500" },
        ].map(({ icon: Icon, label, color }, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={color} />
            <span className="absolute opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition-all duration-200 bottom-8 left-1/2 transform -translate-x-1/2">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
