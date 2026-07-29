"use client";

import React, { useEffect, useState } from "react";
import { useAudio } from "./audio-controller";
import { ArrowUp, Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  const { playHover, playClick } = useAudio();
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white bg-black text-xs font-mono text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white">
          <Terminal className="w-4 h-4" />
          <span>SHOAIB_AKHTAR &copy; {new Date().getFullYear()} // ALL_RIGHTS_RESERVED</span>
        </div>

        <div className="flex items-center gap-2 text-neutral-300 px-3 py-1 border border-neutral-700 bg-black">
          <span className="w-2 h-2 bg-white animate-ping" />
          <span>LOCAL_TIME: {timeStr || "12:00:00 PM"}</span>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={playHover}
          className="flex items-center gap-1.5 px-3 py-1 bg-white text-black font-bold border border-white hover:bg-black hover:text-white transition-none cursor-pointer"
        >
          <span>[TOP]</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
