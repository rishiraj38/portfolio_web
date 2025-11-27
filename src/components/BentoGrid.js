"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Zap, ArrowRight } from "lucide-react";

const ExpertiseCard = ({ icon: Icon, title, description, stats, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-3xl bg-card-bg border border-card-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        <div className="relative z-10 flex items-start gap-6">
          {/* Icon */}
          <motion.div 
            className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary border border-primary/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={32} strokeWidth={2} />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              {description}
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-gradient">{stat.value}</span>
                  <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Arrow indicator */}
            <motion.div 
              className="flex items-center gap-2 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              View Details
              <ArrowRight size={18} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with React, Next.js, and modern JavaScript frameworks. Expertise in creating pixel-perfect user interfaces.",
      stats: [
        { value: "5+", label: "Years" },
        { value: "50+", label: "Projects" },
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive user experiences with a focus on accessibility and usability. Proficient in Figma, Adobe XD, and design systems.",
      stats: [
        { value: "100+", label: "Designs" },
        { value: "98%", label: "Satisfaction" },
      ]
    },
    {
      icon: Server,
      title: "Backend Engineering",
      description: "Developing scalable server-side applications with Node.js, Express, databases, and cloud infrastructure. API design and microservices architecture.",
      stats: [
        { value: "20+", label: "APIs" },
        { value: "99.9%", label: "Uptime" },
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Fine-tuning applications for maximum speed and efficiency. Core Web Vitals optimization, lazy loading, code splitting, and caching strategies.",
      stats: [
        { value: "3x", label: "Faster" },
        { value: "90+", label: "Lighthouse" },
      ]
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            What I Do
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Specialized skills and proven experience across the full development stack
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
