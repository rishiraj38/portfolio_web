"use client";
import { useEffect, useRef, useState } from "react";

const DynamicBackground = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    // Listen for theme changes
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles for dark mode
    const initParticles = () => {
      const count = 80;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    };

    initParticles();

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isDark) {
        // Dark mode: Floating particles with connections
        ctx.strokeStyle = "rgba(0, 255, 204, 0.15)";
        ctx.lineWidth = 1;

        // Draw connections
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // Draw particles
        particlesRef.current.forEach((particle) => {
          ctx.fillStyle = `rgba(0, 255, 204, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
      } else {
        // Light mode: Subtle animated mesh/wave pattern
        const gridSize = 80;
        const amplitude = 20;
        const frequency = 0.002;
        
        ctx.strokeStyle = "rgba(59, 130, 246, 0.08)";
        ctx.lineWidth = 1.5;

        // Draw wavy horizontal lines
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          for (let x = 0; x <= canvas.width; x += 10) {
            const wave = Math.sin(x * frequency + time * 0.001) * amplitude;
            const yPos = y + wave;
            
            if (x === 0) {
              ctx.moveTo(x, yPos);
            } else {
              ctx.lineTo(x, yPos);
            }
          }
          ctx.stroke();
        }

        // Draw wavy vertical lines
        for (let x = gridSize; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          for (let y = 0; y <= canvas.height; y += 10) {
            const wave = Math.sin(y * frequency + time * 0.001) * amplitude;
            const xPos = x + wave;
            
            if (y === 0) {
              ctx.moveTo(xPos, y);
            } else {
              ctx.lineTo(xPos, y);
            }
          }
          ctx.stroke();
        }

        time += 1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: isDark ? 0.6 : 0.4 }}
    />
  );
};

export default DynamicBackground;
