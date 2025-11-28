"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

      <div className="relative h-full bg-card-bg rounded-3xl border border-card-border overflow-hidden backdrop-blur-sm">
        {/* Image Area */}
        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}

          {/* Animated grid overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "20px 20px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Pulsing light effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 70%)",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Color shift overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, transparent, rgba(255,255,255,0.1))",
                "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
                "linear-gradient(225deg, transparent, rgba(255,255,255,0.1))",
                "linear-gradient(315deg, rgba(255,255,255,0.1), transparent)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 to-transparent" />
          <div className="absolute top-4 left-4 text-6xl font-black text-white/10">
            0{project.id}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-black group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              )}
            </motion.div>
          </div>

          <p className="text-muted mb-6 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <a href={project.link}>
            <motion.div
              className="flex items-center gap-2 text-primary font-bold pt-4 border-t border-card-border"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              View Project
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      desc: "A fully functional Netflix clone with user authentication, video streaming, and a responsive UI built with modern web technologies.",
      tech: ["React", "Firebase", "TMDB API", "Tailwind"],
      image: "/netflix.png",
      link: "https://netflix-gpt-theta-amber.vercel.app/",
      github: "https://github.com/rishiraj38/netflix-gpt",
    },
    {
      id: 2,
      title: "Foodie Hub",
      desc: "A food delivery platform with restaurant listings, menu browsing, cart functionality, and order tracking features.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/foodie_hub.jpg",
      link: "https://foodie-hub-beta.vercel.app/",
      github: "https://github.com/rishiraj38/foodie_hub",
    },
    {
      id: 3,
      title: "InkSpire",
      desc: "A Blogging platform for developers.",
      tech: [
        "React",
        "Express",
        "CloudFlare Workers",
        "Prisma",
        "NeonDB",
        "FramerMotion",
      ],
      image: "/inkspire.png",
      link: "https://ink-spire-rho.vercel.app/",
      github: "https://github.com/rishiraj38/blog_web",
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            My Work
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects showcasing my expertise in building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
