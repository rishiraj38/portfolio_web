"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const TextScramble = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const x = useSpring(useTransform(mouseX, [0, 1], [-50, 50]), {
    stiffness: 100,
    damping: 30,
  });
  const y = useSpring(useTransform(mouseY, [0, 1], [-50, 50]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Interactive Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20 backdrop-blur-md">
            Available for hire
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Crafting
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Digital
            </motion.div>
          </div>
          <div className="text-gradient">
            <TextScramble text="Experiences" />
          </div>
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build accessible, pixel-perfect, and performant web experiences.
          Let&#39;s turn your vision into reality.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-8 py-4 bg-transparent border border-foreground/10 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-colors backdrop-blur-sm">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
