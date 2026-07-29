"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHover: () => {},
  playClick: () => {},
  playSuccess: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioCtx) {
        const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (Ctx) setAudioCtx(new Ctx());
      }
    };
    window.addEventListener("click", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [audioCtx]);

  const toggleMute = () => {
    if (isMuted && !audioCtx) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (Ctx) setAudioCtx(new Ctx());
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    setIsMuted((prev) => !prev);
  };

  const playSquareBlip = (freq: number, duration: number, gainVal: number = 0.04) => {
    if (isMuted || !audioCtx) return;
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "square"; // Old school retro square wave sound
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Catch audio errors silently
    }
  };

  const playHover = () => {
    playSquareBlip(800, 0.03, 0.015);
  };

  const playClick = () => {
    playSquareBlip(1200, 0.05, 0.04);
  };

  const playSuccess = () => {
    if (isMuted || !audioCtx) return;
    [600, 900, 1200, 1500].forEach((f, idx) => {
      setTimeout(() => playSquareBlip(f, 0.08, 0.03), idx * 40);
    });
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playSuccess }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);

export const AudioToggle: React.FC = () => {
  const { isMuted, toggleMute, playClick } = useAudio();

  return (
    <button
      onClick={() => {
        toggleMute();
        playClick();
      }}
      className="px-3 py-1 bg-black text-white border border-white font-mono text-xs hover:bg-white hover:text-black transition-none cursor-pointer rounded-none"
    >
      {isMuted ? "[AUDIO: OFF]" : "[AUDIO: ON]"}
    </button>
  );
};
