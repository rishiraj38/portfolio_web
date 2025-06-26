"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "../../../ReactBits2/Particles/Particles";
import Header from "@/components/Header";
import SplashCursor from "../../../ReacBits3/SplashCursor/SplashCursor";

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div>
        <Header />
      </div>
      <div className="absolute inset-0 z-0">
        <Particles />
        <SplashCursor />
      </div>

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

      {/* Project Grid */}
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
          screenshot="/foodie_hub.jpg"
        />
        <ProjectCard
          title="Random Color Generator 🎨"
          description="Click to generate beautiful random colors with HEX values."
          link="https://rishiraj38.github.io/Color-Generation/"
          screenshot="/color_genrator.jpg"
        />
        <ProjectCard
          title="Ping Pong Score Keeper 🏓"
          description="Fun interactive game to track scores between two players."
          link="https://rishiraj38.github.io/Ping-Pong-Score-Keeper/"
          screenshot="/ping_pong.jpg"
        />

        {/* Wrap the Netflix GPT card in a div to center it */}
        <div className="md:col-span-1 md:col-start-2">
          <ProjectCard
            title="Netflix GPT"
            description="A Netflix clone with a GPT-powered search feature."
            link="https://github.com/rishiraj38/netflix-gpt"
            screenshot="/netflix.png"
          />
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, description, link, screenshot }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-transparent border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={screenshot}
          alt={`${title} screenshot`}
          className="w-full h-auto object-cover"
          width={500}
          height={300}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/80 mb-4">{description}</p>
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
