// src/app/page.js
import Header from "@/components/Header";
import Hero from "./home/Hero";
import Projects from "./project/page";
import Footer from "@/components/Footer";
import Particles from "../../ReactBits2/Particles/Particles";
import SplashCursor from "../../ReacBits3/SplashCursor/SplashCursor";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Particles />
        <SplashCursor />
      </div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
      <Analytics />
    </main>
  );
}
