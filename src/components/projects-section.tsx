"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import {
  Code2,
  Music,
  FileCheck2,
  ChevronRight,
  X,
  Terminal,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  stack: string[];
  icon: React.ElementType;
  highlights: string[];
  architecture: string;
}

export const ProjectsSection: React.FC = () => {
  const { playHover, playClick } = useAudio();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "sentinell",
      title: "Sentinell",
      subtitle: "Event-Driven AI Code Reviewer Platform",
      year: "2026",
      category: "AI & DEVTOOLS",
      icon: Code2,
      stack: ["Next.js 16", "TypeScript", "tRPC", "PostgreSQL", "Inngest", "Vercel AI SDK", "AES-256-GCM"],
      highlights: [
        "Engineered an event-driven AI Code Review platform supporting GitHub and GitLab webhooks, utilizing a 3-stage pipeline (Repository Profiling, Intelligent Triage, Deep Review) to act as a virtual Principal Engineer.",
        "Architected a scalable data access layer by wrapping tRPC calls within custom React hooks for seamless state management, alongside optimizing PostgreSQL performance with connection pooling and health checks.",
        "Ensured high reliability with Inngest’s event bus for retriable background executions and fortified platform security by encrypting API keys at rest using AES-256-GCM within isolated environments."
      ],
      architecture: "[GitHub Webhook] --> [Inngest Event Bus] --> [3-Stage Triage Pipeline] --> [tRPC State] --> [AES-256 Encrypted DB]"
    },
    {
      id: "ai-music",
      title: "AI Music SaaS",
      subtitle: "Full-Stack Generative Music Platform",
      year: "2025",
      category: "FULL-STACK AI",
      icon: Music,
      stack: ["Next.js 15", "React", "Python", "FastAPI", "PostgreSQL", "AWS S3", "BetterAuth", "Polar", "Modal"],
      highlights: [
        "Engineered a full-stack AI music generation platform enabling users to create original songs from text prompts, lyrics, or musical styles using advanced AI models.",
        "Implemented a credit-based payment system with Polar, secure user authentication via BetterAuth, and scalable background task handling using Inngest and Modal for async processing.",
        "Delivered a modern responsive UI with Next.js 15 and ShadCN UI, supported by a Python/FastAPI backend coupled with Neon PostgreSQL and AWS S3 storage."
      ],
      architecture: "[Next.js 15 UI] --> [BetterAuth Auth] --> [Polar Credit API] --> [FastAPI Core] --> [Modal GPU AI] --> [AWS S3 Storage]"
    },
    {
      id: "ats-analyzer",
      title: "AI ATS Analyzer",
      subtitle: "Recruiter Logic Resume Screening Engine",
      year: "2025",
      category: "AI SAAS",
      icon: FileCheck2,
      stack: ["React.js", "React Router v7", "OpenAI GPT", "Zustand", "Playwright", "Puter.js", "Tailwind CSS"],
      highlights: [
        "Built an AI-powered resume screening tool leveraging GPT models to match resumes against job descriptions, identify skill gaps, and provide actionable improvement suggestions.",
        "Designed a dynamic responsive UI with React.js and Tailwind CSS, featuring efficient client-side routing and Zustand for centralized state management.",
        "Simulated real-world ATS behavior to mirror recruiter screening logic, helping job seekers optimize resumes for automated filtering systems."
      ],
      architecture: "[Resume PDF Parser] --> [Zustand Client Store] --> [GPT Match Engine] --> [ATS Matrix Scoring] --> [Feedback Dashboard]"
    }
  ];

  return (
    <section id="projects" className="py-28 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-block px-3 py-1 bg-black border border-white text-xs uppercase tracking-widest mb-3">
            [03] FLAGSHIP_ARCHITECTURES // FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            FLAGSHIP <span className="bg-white text-black px-2">AI SYSTEMS</span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                onMouseEnter={playHover}
                onClick={() => {
                  setSelectedProject(proj);
                  playClick();
                }}
                className="p-6 bg-black border border-white flex flex-col justify-between hover:bg-white hover:text-black transition-none cursor-pointer group text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-800 group-hover:border-black">
                    <div className="p-2 bg-white text-black font-bold group-hover:bg-black group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono border border-neutral-700 px-2 py-0.5 group-hover:border-black">
                      [{proj.year}]
                    </span>
                  </div>

                  <span className="text-[10px] tracking-widest uppercase block mb-1 opacity-80">
                    {proj.category}
                  </span>

                  <h3 className="text-xl font-bold uppercase mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs mb-4 line-clamp-2 opacity-90">
                    {proj.subtitle}
                  </p>

                  <div className="p-3 bg-neutral-950 border border-neutral-800 group-hover:bg-neutral-100 group-hover:text-black group-hover:border-black text-[11px] leading-relaxed mb-6">
                    {proj.highlights[0]}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-neutral-700 group-hover:border-black text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 border border-neutral-700 group-hover:border-black text-[10px]">
                        +{proj.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-neutral-800 group-hover:border-black text-xs font-bold uppercase">
                    <span>[VIEW BLUEPRINT]</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 font-mono text-white">
            <div className="relative w-full max-w-3xl p-8 bg-black border-2 border-white max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white text-black font-bold border border-white hover:bg-black hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs border border-white px-3 py-1 inline-block mb-3">
                [{selectedProject.year} // {selectedProject.category}]
              </div>

              <h2 className="text-2xl font-extrabold uppercase mb-1">{selectedProject.title}</h2>
              <p className="text-neutral-400 text-xs mb-6">{selectedProject.subtitle}</p>

              {/* Architecture text */}
              <div className="p-4 bg-neutral-950 border border-white mb-6">
                <div className="flex items-center gap-2 text-xs uppercase mb-2 text-neutral-300">
                  <Terminal className="w-4 h-4" />
                  <span>SYSTEM ARCHITECTURE DIAGRAM:</span>
                </div>
                <div className="text-xs text-white bg-black p-3 border border-neutral-800 overflow-x-auto whitespace-nowrap">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Key Bullet Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase text-neutral-400">ENGINEERING ACHIEVEMENTS:</h4>
                {selectedProject.highlights.map((bullet, idx) => (
                  <div key={idx} className="p-3 bg-neutral-950 border border-neutral-800 text-xs text-neutral-200">
                    • {bullet}
                  </div>
                ))}
              </div>

              {/* Stack Pills */}
              <div className="mb-6">
                <h4 className="text-xs uppercase text-neutral-400 mb-2">FULL TECHNOLOGIES USED:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((st) => (
                    <span key={st} className="px-2.5 py-1 border border-white text-xs">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-white text-black font-bold text-xs uppercase border border-white hover:bg-black hover:text-white"
                >
                  [CLOSE SPECIFICATION]
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
