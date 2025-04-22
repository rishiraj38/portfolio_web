// components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex justify-center items-center text-center text-white bg-black/60">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide font-orbitron">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Bringing Ideas to Life through Code and Design
        </p>
        <a
          href="#about"
          className="inline-block mt-6 px-8 py-3 border-2 border-white rounded-full text-lg uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore More
        </a>
      </motion.div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/path/to/your/image.jpg)" }}
      ></div>
    </section>
  );
}
