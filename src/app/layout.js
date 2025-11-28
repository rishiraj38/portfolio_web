import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeAudioPlayer from "@/components/ThemeAudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RishiVerse - Portfolio",
  description: "A creative developer portfolio showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased overflow-x-hidden selection:bg-red-500/30 selection:text-red-200">
        <DynamicBackground />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <ThemeAudioPlayer />
      </body>
    </html>
  );
}
