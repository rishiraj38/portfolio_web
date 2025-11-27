"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Ready to Start a <span className="text-gradient">Project?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
            Let&#39;s collaborate and bring your ideas to life with cutting-edge
            technology and stunning design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/contact"
              className="group px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full text-lg flex items-center gap-3 hover:gap-5 transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/about"
              className="px-10 py-5 bg-transparent border-2 border-foreground/10 text-foreground font-bold rounded-full text-lg hover:bg-foreground/5 hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { value: "20+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "3+", label: "Years Exp" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
