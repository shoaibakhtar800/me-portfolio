"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import { Code2, Layout, Database, Cloud, Terminal } from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "cloud";
  level: string;
  highlight?: boolean;
}

export const SkillsSection: React.FC = () => {
  const { playHover, playClick } = useAudio();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: SkillItem[] = [
    // Languages
    { name: "TypeScript", category: "languages", level: "EXPERT", highlight: true },
    { name: "JavaScript (ES6+)", category: "languages", level: "EXPERT", highlight: true },
    { name: "C#", category: "languages", level: "ADVANCED", highlight: true },
    { name: "Python", category: "languages", level: "ADVANCED", highlight: true },
    { name: "SQL", category: "languages", level: "ADVANCED" },
    { name: "Java", category: "languages", level: "INTERMEDIATE" },
    { name: "C / C++", category: "languages", level: "INTERMEDIATE" },

    // Frontend
    { name: "React.js", category: "frontend", level: "EXPERT", highlight: true },
    { name: "Next.js 16", category: "frontend", level: "EXPERT", highlight: true },
    { name: "Angular", category: "frontend", level: "ADVANCED" },
    { name: "Tailwind CSS", category: "frontend", level: "EXPERT", highlight: true },
    { name: "ShadCN UI", category: "frontend", level: "EXPERT" },
    { name: "TanStack Query", category: "frontend", level: "ADVANCED" },
    { name: "Zustand", category: "frontend", level: "ADVANCED" },
    { name: "React Router v7", category: "frontend", level: "ADVANCED" },

    // Backend & DB
    { name: "Node.js", category: "backend", level: "EXPERT", highlight: true },
    { name: "Express.js", category: "backend", level: "EXPERT" },
    { name: "NestJS", category: "backend", level: "ADVANCED" },
    { name: "ASP.NET Core", category: "backend", level: "ADVANCED", highlight: true },
    { name: "Entity Framework Core", category: "backend", level: "ADVANCED" },
    { name: "FastAPI (Python)", category: "backend", level: "ADVANCED", highlight: true },
    { name: "tRPC", category: "backend", level: "ADVANCED", highlight: true },
    { name: "GraphQL", category: "backend", level: "ADVANCED" },
    { name: "PostgreSQL", category: "backend", level: "EXPERT", highlight: true },
    { name: "MongoDB", category: "backend", level: "ADVANCED" },
    { name: "Redis", category: "backend", level: "ADVANCED", highlight: true },
    { name: "SQL Server", category: "backend", level: "ADVANCED" },
    { name: "Prisma ORM", category: "backend", level: "ADVANCED" },
    { name: "Drizzle ORM", category: "backend", level: "ADVANCED" },

    // Cloud & DevOps
    { name: "AWS (EC2, S3)", category: "cloud", level: "ADVANCED", highlight: true },
    { name: "Docker", category: "cloud", level: "ADVANCED", highlight: true },
    { name: "Kubernetes", category: "cloud", level: "ADVANCED" },
    { name: "Kafka", category: "cloud", level: "ADVANCED", highlight: true },
    { name: "RabbitMQ", category: "cloud", level: "ADVANCED" },
    { name: "Inngest Event Bus", category: "cloud", level: "ADVANCED", highlight: true },
    { name: "Modal (Async GPU)", category: "cloud", level: "ADVANCED" },
    { name: "GitHub Actions", category: "cloud", level: "ADVANCED" },
    { name: "Vercel", category: "cloud", level: "ADVANCED" },
    { name: "OpenAI GPT API", category: "cloud", level: "EXPERT", highlight: true },
    { name: "BetterAuth / Polar", category: "cloud", level: "ADVANCED" },
  ];

  const categories = [
    { id: "all", label: "[ALL_SKILLS]", icon: Terminal },
    { id: "languages", label: "[LANGUAGES]", icon: Code2 },
    { id: "frontend", label: "[FRONTEND]", icon: Layout },
    { id: "backend", label: "[BACKEND_DB]", icon: Database },
    { id: "cloud", label: "[INFRA_CLOUD]", icon: Cloud },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-block px-2.5 py-1 bg-black border border-white text-[10px] sm:text-xs uppercase tracking-widest mb-3">
            [05] TECH_SPECIFICATIONS // CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            FULL-STACK & <span className="bg-white text-black px-1.5 sm:px-2">CLOUD MATRIX</span>
          </h2>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  playClick();
                }}
                onMouseEnter={playHover}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-mono transition-none cursor-pointer border ${
                  isActive
                    ? "bg-white text-black font-bold border-white"
                    : "bg-black text-neutral-400 border-neutral-800 hover:border-white hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 text-left font-mono">
          {filteredSkills.map((sk) => (
            <div
              key={sk.name}
              onMouseEnter={playHover}
              className={`p-3 sm:p-4 bg-black border transition-none group cursor-pointer ${
                sk.highlight
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-neutral-800 hover:border-white hover:bg-white hover:text-black"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold uppercase truncate pr-1">{sk.name}</h3>
                {sk.highlight && (
                  <span className="w-1.5 h-1.5 bg-white group-hover:bg-black shrink-0" />
                )}
              </div>
              <span className="text-[9px] sm:text-[10px] text-neutral-400 group-hover:text-black tracking-wider block">
                [{sk.level}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
