"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import {
  Briefcase,
  Calendar,
  MapPin,
  Cpu,
  Zap,
  FileSpreadsheet,
  Bot,
  ShieldCheck,
  Search,
  CheckSquare,
} from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { playHover, playClick } = useAudio();
  const [activeTab, setActiveTab] = useState<number>(0);

  const achievements = [
    {
      title: "AI-Powered Data Migration Pipeline",
      impact: "ACCELERATED CLIENT ONBOARDING & DATA ACCURACY",
      icon: Zap,
      description:
        "Architected an event-driven AI data migration engine supporting Excel & CSV files with automated schema detection, cleaning, validation, and field mapping.",
    },
    {
      title: "Runtime Code Generation Service",
      impact: "60+ SECONDS → 10MS EXECUTION TIME (0 TOKEN COST)",
      icon: Cpu,
      description:
        "Engineered a dynamic code generation service for data transformation that synthesizes & executes transformation scripts at runtime inside isolated sandboxes.",
    },
    {
      title: "Natural Language Excel Utility",
      impact: "DYNAMIC MULTI-SHEET MANIPULATION & COMPLETE DATA PRIVACY",
      icon: FileSpreadsheet,
      description:
        "Developed an enterprise Excel Utility capable of processing multi-file and multi-sheet transformations driven purely by natural language user prompts.",
    },
    {
      title: "Tool-Calling AI Conversational Agent",
      impact: "NATURAL LANGUAGE AUTOMATION ACROSS PLATFORM OPERATIONS",
      icon: Bot,
      description:
        "Implemented an intelligent AI conversational interface equipped with dynamic tool-calling capabilities to execute complex system commands on command.",
    },
    {
      title: "Enterprise RBAC & Field Encryption",
      impact: "FORTIFIED SECURITY ACROSS 70%+ OF SYSTEM APIS",
      icon: ShieldCheck,
      description:
        "Strengthened payroll compliance with granular Role-Based Access Control and field-level encryption for sensitive financial and employee data without latency penalty.",
    },
    {
      title: "Global Search Engine Optimization",
      impact: "98% PERFORMANCE BOOST ACROSS MULTI-MILLION RECORD DATASETS",
      icon: Search,
      description:
        "Refactored search APIs, optimized complex SQL queries, and implemented compound indexing to scale high-frequency searches effortlessly.",
    },
  ];

  const brainPayrollTech = [
    "TypeScript", "React.js", "Angular", "Node.js", "Express.js", "NestJS", 
    "C#", ".NET / ASP.NET Core", "Web API", "Entity Framework Core", "Microservices",
    "PostgreSQL", "MongoDB", "SQL Server", "Redis", "Kafka", "RabbitMQ",
    "Docker", "Kubernetes", "AWS", "Azure", "Git", "GitHub Actions", "Jest", "Swagger"
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-block px-2.5 py-1 bg-black border border-white text-[10px] sm:text-xs uppercase tracking-widest mb-3">
            [02] COMMERCIAL_EXPERIENCE // BRAIN PAYROLL
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            ENGINEERING AT <span className="bg-white text-black px-1.5 sm:px-2">ENTERPRISE SCALE</span>
          </h2>
        </div>

        {/* Main Experience Container */}
        <div className="p-4 sm:p-8 bg-black border border-white relative text-left">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 bg-white text-black font-extrabold shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white leading-tight">Software Developer</h3>
                <span className="text-neutral-400 text-xs sm:text-sm font-bold block">BRAIN PAYROLL (AHMEDABAD, INDIA)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 border border-neutral-700 bg-black">
                <Calendar className="w-3.5 h-3.5" />
                <span>DEC 2023 – PRESENT</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 border border-neutral-700 bg-black">
                <MapPin className="w-3.5 h-3.5" />
                <span>AHMEDABAD, INDIA</span>
              </div>
            </div>
          </div>

          {/* Tab Selection Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Nav list */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {achievements.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setActiveTab(idx);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className={`text-left p-3 sm:p-3.5 border transition-none font-mono text-xs flex items-start gap-2.5 sm:gap-3 cursor-pointer ${
                    activeTab === idx
                      ? "bg-white text-black font-bold border-white"
                      : "bg-black text-neutral-300 border-neutral-800 hover:border-white"
                  }`}
                >
                  <span className="font-extrabold text-xs sm:text-sm shrink-0">[{idx + 1}]</span>
                  <div className="min-w-0">
                    <h4 className="font-bold truncate text-xs sm:text-sm">{item.title}</h4>
                    <span className="text-[9px] sm:text-[10px] tracking-tight block opacity-90 truncate">{item.impact}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Box */}
            <div className="lg:col-span-7 p-4 sm:p-6 bg-neutral-950 border border-neutral-700 flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-widest mb-2">
                  [MILESTONE #{activeTab + 1} SPECIFICATION]
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 uppercase">
                  {achievements[activeTab].title}
                </h3>

                <p className="text-neutral-300 text-xs leading-relaxed mb-6">
                  {achievements[activeTab].description}
                </p>

                <div className="p-3 bg-black border border-white mb-6">
                  <span className="text-[10px] text-neutral-400 block mb-1">
                    SYSTEM IMPACT:
                  </span>
                  <span className="text-xs font-bold text-white break-words">
                    {achievements[activeTab].impact}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-400">
                <CheckSquare className="w-4 h-4 text-white shrink-0" />
                <span>STATUS: PRODUCTION DEPLOYED & SERVING CLIENTS</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <span className="text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest block mb-3">
              PRODUCTION TECH STACK:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {brainPayrollTech.map((tech) => (
                <span
                  key={tech}
                  onMouseEnter={playHover}
                  className="px-2 py-1 bg-black border border-neutral-800 text-[10px] sm:text-[11px] text-neutral-300 hover:border-white hover:text-white transition-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
