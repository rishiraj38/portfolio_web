"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[200vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {[
            {
              title: "E-Commerce Platform",
              desc: "A full-stack shopping experience with real-time inventory and secure payments.",
              tech: "Next.js, Stripe, Prisma"
            },
            {
              title: "AI Dashboard",
              desc: "Analytics dashboard powered by machine learning models for predictive insights.",
              tech: "Python, React, D3.js"
            },
            {
              title: "Social Network",
              desc: "Real-time social platform with chat, notifications, and media sharing.",
              tech: "Socket.io, Node.js, MongoDB"
            },
            {
              title: "Portfolio v1",
              desc: "My previous portfolio site showcasing early work and experiments.",
              tech: "HTML, SCSS, JavaScript"
            },
            {
              title: "Task Manager",
              desc: "Productivity tool for teams to track progress and collaborate efficiently.",
              tech: "Vue.js, Firebase"
            }
          ].map((project, i) => (
            <div
              key={i}
              className="group relative h-[600px] w-[500px] overflow-hidden rounded-[2rem] bg-card-bg border border-card-border flex-shrink-0"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                 <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10" />
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-primary font-mono text-sm mb-2 block">0{i + 1}</span>
                  <h3 className="text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(", ").map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/90 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors">
                    View Case Study
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSection;
