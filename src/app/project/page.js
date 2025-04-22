"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Overlay Glow Circles */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full top-10 left-10 blur-3xl animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full bottom-10 right-10 blur-3xl animate-pulse" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center text-white font-orbitron mt-32"
      >
        My Projects
      </motion.h1>

      {/* Project Screenshots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mx-auto px-4"
      >
        <ProjectCard
          title="FoodieHub 🍔"
          description="A sleek Swiggy-inspired food ordering UI."
          link="https://foodie-hub-beta.vercel.app/"
          screenshot="/foodie_hub.jpg" // Screenshot path inside the public folder
        />
        <ProjectCard
          title="Random Color Generator 🎨"
          description="Click to generate beautiful random colors with HEX values."
          link="https://rishiraj38.github.io/Color-Generation/"
          screenshot="/color_genrator.jpg" // Screenshot path inside the public folder
        />
        <ProjectCard
          title="Ping Pong Score Keeper 🏓"
          description="Fun interactive game to track scores between two players."
          link="https://rishiraj38.github.io/Ping-Pong-Score-Keeper/"
          screenshot="/ping_pong.jpg" // Screenshot path inside the public folder
        />
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, description, link, screenshot }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-yellow-200">{title}</h3>
      <p className="text-sm text-white/80 mb-4">{description}</p>

      {/* Project Screenshot */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={screenshot}
          alt={`${title} screenshot`}
          className="w-full h-auto object-cover"
          width={500}
          height={300}
        />
      </div>

      <a
        href={link}
        target="_blank"
        className="text-sm text-cyan-300 underline hover:text-cyan-400 transition"
      >
        View Project →
      </a>
    </motion.div>
  );
}
