"use client";

import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    let timer: NodeJS.Timeout;

    // Pick 2 random pause checkpoints (e.g. at ~28% and ~68%) for readable log inspection
    const pausePoint1 = Math.floor(Math.random() * 12) + 25; // 25% - 37%
    const pausePoint2 = Math.floor(Math.random() * 12) + 65; // 65% - 77%

    const tick = () => {
      if (currentProgress >= 100) {
        setProgress(100);
        return;
      }

      // Variable chunk increment (+2 to +6%)
      const increment = Math.floor(Math.random() * 5) + 2;
      const nextProgress = Math.min(currentProgress + increment, 100);

      // Default tick delay (~40-60ms)
      let delay = Math.floor(Math.random() * 20) + 40;

      // Pause at key checkpoint milestones so the user can read the log message
      if (
        (currentProgress < pausePoint1 && nextProgress >= pausePoint1) ||
        (currentProgress < pausePoint2 && nextProgress >= pausePoint2)
      ) {
        delay = Math.floor(Math.random() * 200) + 450; // 450ms - 650ms pause
      } else if (Math.random() < 0.2) {
        // Occasional micro-stutter (150ms-250ms)
        delay = Math.floor(Math.random() * 100) + 150;
      }

      currentProgress = nextProgress;
      setProgress(currentProgress);

      if (currentProgress < 100) {
        timer = setTimeout(tick, delay);
      }
    };

    timer = setTimeout(tick, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small pause at 100% before starting fade-out transition
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 300);

      // Unmount component and unlock scroll after fade animation completes
      const removeTimeout = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 800);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(removeTimeout);
      };
    }
  }, [progress]);

  if (!isVisible) return null;

  // Dynamic system status logs based on progress percentage
  const getStatusMessage = () => {
    if (progress < 25) return "[01/04] INITIALIZING_KERNEL // BOOT_SEQUENCE";
    if (progress < 50) return "[02/04] LOADING_AI_ENGINES // SENTINELL_MODULE";
    if (progress < 75) return "[03/04] COMPILING_SYS_ARCH // NEURAL_PIPELINES";
    if (progress < 100) return "[04/04] VERIFYING_INTEGRITY // FINAL_CHECKS";
    return "[SYSTEM_READY] ACCESS_GRANTED";
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white font-mono flex flex-col items-center justify-center p-4 sm:p-8 select-none transition-all duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Top Header Label */}
      <div className="flex items-center gap-2 mb-8 text-xs text-neutral-400 uppercase tracking-widest border border-neutral-800 px-3 py-1.5 bg-neutral-950">
        <Terminal className="w-4 h-4 text-white animate-pulse" />
        <span>SHOAIB_AKHTAR // SYSTEM_BOOT_v2.6</span>
      </div>

      {/* Center Box Container */}
      <div className="w-full max-w-sm sm:max-w-md p-6 bg-black border-2 border-white text-center shadow-2xl">
        {/* Large Percentage Display */}
        <div className="text-4xl sm:text-6xl font-extrabold tracking-tighter mb-4 text-white font-mono">
          {progress < 10 ? `0${progress}` : progress}%
        </div>

        {/* Brutalist Progress Bar */}
        <div className="w-full h-4 sm:h-5 border-2 border-white bg-black p-0.5 relative mb-4">
          <div
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* System Logs Output */}
        <div className="text-[10px] sm:text-xs text-neutral-300 font-mono tracking-wider h-5 flex items-center justify-center gap-1">
          <span>{getStatusMessage()}</span>
          <span className="w-1.5 h-3 bg-white inline-block animate-pulse" />
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="mt-8 text-[10px] text-neutral-500 uppercase tracking-widest text-center">
        <span>PRESS ESC AT ANY TIME // NO_JS_FALLBACK_ACTIVE</span>
      </div>
    </div>
  );
};
