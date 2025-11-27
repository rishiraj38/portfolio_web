"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <Skills />
      <BentoGrid />
      <Projects />
      <CTA />
    </main>
  );
}
