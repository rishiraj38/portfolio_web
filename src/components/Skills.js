"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaFigma,
  FaPython,
  FaGithub
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiPostgresql,
  SiGraphql,
  SiMongodb,
  SiFirebase
} from "react-icons/si";

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ];

  return (
    <section id="skills" ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-tight">
            Unleashing <br />
            <span className="text-gradient">Cutting-Edge</span> <br />
            Web Experiences
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-20">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card-bg border border-card-border backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ y: -8 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${skill.color}15`,
                      color: skill.color 
                    }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-sm font-bold text-center">{skill.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default Skills;
