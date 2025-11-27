"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion",
    "Three.js", "PostgreSQL", "GraphQL", "AWS", "Docker", "Figma",
    "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion",
    "Three.js", "PostgreSQL", "GraphQL", "AWS", "Docker", "Figma"
  ];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-background border-y border-card-border">
      <div className="flex">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl font-bold text-muted/20 uppercase tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
