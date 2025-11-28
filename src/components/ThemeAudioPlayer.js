"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function ThemeAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check for dark mode changes
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme === "dark");
    };

    // Initial check
    checkTheme();

    // Observer for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      // Try to play automatically when entering dark mode
      if (audioRef.current) {
        audioRef.current.play().catch((e) => {
          console.log("Autoplay blocked, waiting for interaction", e);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    } else {
      // Pause when leaving dark mode
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isDarkMode]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!isDarkMode) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src="/stranger-things-theme.mp3"
        loop
        preload="auto"
      />
      
      <div className="flex items-center gap-2 p-2 rounded-full bg-black/80 border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] backdrop-blur-sm">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full hover:bg-red-900/30 text-red-500 transition-colors"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <Music size={20} className={isPlaying ? "animate-pulse" : ""} />
        </button>
        
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-red-900/30 text-red-500 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {isPlaying && !isMuted && (
          <div className="flex gap-0.5 h-4 items-end mx-1">
            <div className="w-1 bg-red-500 animate-[bounce_1s_infinite] h-2"></div>
            <div className="w-1 bg-red-500 animate-[bounce_1.2s_infinite] h-4"></div>
            <div className="w-1 bg-red-500 animate-[bounce_0.8s_infinite] h-3"></div>
            <div className="w-1 bg-red-500 animate-[bounce_1.1s_infinite] h-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}
