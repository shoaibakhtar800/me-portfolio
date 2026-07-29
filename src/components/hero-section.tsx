"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  ArrowRight,
  Code2,
  Terminal,
  Zap,
  ShieldCheck,
  Cpu,
  Mail,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const { playHover, playClick } = useAudio();
  const [copiedCli, setCopiedCli] = useState(false);
  const cliCmd = "npx shoaib-akhtar";

  const metrics = [
    {
      label: "CODE EXECUTION SPEEDUP",
      value: "60s → 10ms",
      detail: "ISOLATED RUNTIME CODE GENERATION (0 TOKEN COST)",
      icon: Zap,
    },
    {
      label: "GLOBAL SEARCH BOOST",
      value: "98%",
      detail: "API REFACTORING & DB INDEX OPTIMIZATION",
      icon: Cpu,
    },
    {
      label: "API & DATA ENCRYPTION",
      value: "70%+",
      detail: "RBAC SAFEGUARDED PAYROLL SECURITY",
      icon: ShieldCheck,
    },
  ];

  const handleCopyCli = () => {
    playClick();
    navigator.clipboard.writeText(cliCmd);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section id="manifest" className="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col justify-center items-center bg-black font-mono text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
        {/* Section Manifest Header */}
        <div className="inline-block px-2.5 py-1 bg-black border border-white text-[10px] sm:text-xs font-mono text-white uppercase tracking-widest mb-6 sm:mb-8">
          [01] SYSTEM_MANIFEST // ARCHITECTURAL SPECIFICATION
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 uppercase leading-tight font-mono break-words">
          SOFTWARE DEVELOPER & <br className="hidden sm:inline" />
          <span className="bg-white text-black px-1.5 sm:px-2 py-0.5 sm:py-1 inline-block mt-1 sm:mt-0">AI SYSTEMS ARCHITECT</span>
        </h1>

        {/* Bio Text */}
        <p className="max-w-3xl text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed mb-8 sm:mb-10 border-l-2 border-white pl-3 sm:pl-4">
          SHOAIB AKHTAR — Software Developer at <strong className="text-white">Brain Payroll</strong>. 
          Specialized in high-scale distributed systems, AI agents, Next.js 16, TypeScript, .NET Core, Python/FastAPI, 
          and event-driven architectures. Transform 60+ second processes into 10ms isolated runtime executions.
        </p>

        {/* Action Buttons & CLI Prompt */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#projects"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider border border-white hover:bg-black hover:text-white transition-none cursor-pointer"
          >
            <span>[VIEW PROJECTS]</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#playground"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-black text-white font-bold text-xs uppercase tracking-wider border border-white hover:bg-white hover:text-black transition-none cursor-pointer"
          >
            <Code2 className="w-4 h-4" />
            <span>[LAUNCH AI TRIAGE SIMULATOR]</span>
          </a>

          {/* CLI Terminal Copy Box */}
          <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 bg-neutral-950 border border-neutral-700 text-xs font-mono w-full sm:w-auto">
            <div className="flex items-center gap-2 truncate">
              <Terminal className="w-4 h-4 text-white shrink-0" />
              <span className="truncate">$ {cliCmd}</span>
            </div>
            <button
              onClick={handleCopyCli}
              onMouseEnter={playHover}
              className="p-1 bg-white text-black hover:bg-neutral-300 text-[10px] font-bold cursor-pointer shrink-0"
              title="Copy CLI command"
            >
              {copiedCli ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-12 sm:mb-16 font-mono text-xs">
          {[
            { name: "LINKEDIN", href: "https://linkedin.com", icon: LinkedinIcon },
            { name: "GITHUB", href: "https://github.com", icon: GithubIcon },
            { name: "EMAIL", href: "mailto:shoaibakhtar.dev.eng@gmail.com", icon: Mail },
          ].map((soc) => (
            <a
              key={soc.name}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3.5 py-2 bg-black border border-neutral-700 text-neutral-300 hover:text-black hover:bg-white hover:border-white transition-none text-center"
            >
              <soc.icon className="w-4 h-4 shrink-0" />
              <span>[{soc.name}]</span>
            </a>
          ))}
        </div>

        {/* Quantified Real Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {metrics.map((m) => (
            <div
              key={m.label}
              onMouseEnter={playHover}
              className="p-4 sm:p-6 bg-black border border-white text-left font-mono relative group hover:bg-white hover:text-black transition-none"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-700 group-hover:border-black">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-wider">{m.label}</span>
                <m.icon className="w-4 h-4 shrink-0" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono leading-relaxed">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <a
        href="#experience"
        onMouseEnter={playHover}
        onClick={playClick}
        className="mt-12 sm:mt-16 flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-none group cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-center">SCROLL FOR EXPERIENCE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-white" />
      </a>
    </section>
  );
};
