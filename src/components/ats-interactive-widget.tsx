"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import {
  Terminal,
  Play,
  RotateCcw,
  CheckSquare,
  FileText,
} from "lucide-react";

export const AtsInteractiveWidget: React.FC = () => {
  const { playHover, playClick, playSuccess } = useAudio();

  const [mode, setMode] = useState<"ats" | "code">("ats");
  const [inputText, setInputText] = useState(
    "Senior Full-Stack & AI Developer with expertise in Next.js 16, TypeScript, .NET Core, Python, Microservices, PostgreSQL, and AI Agents."
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<null | {
    score: number;
    matchRate: string;
    triageStage: string;
    strengths: string[];
    recommendations: string[];
  }>(null);

  const samplePresets = {
    ats: [
      "Senior Full-Stack & AI Developer with expertise in Next.js 16, TypeScript, .NET Core, Python, Microservices, PostgreSQL, and AI Agents.",
      "Frontend React Engineer with HTML/CSS experience, basic REST API skills, and Git knowledge.",
      "Backend Developer proficient in C#, ASP.NET Core, Kafka, Redis, Docker, and Kubernetes microservices.",
    ],
    code: [
      "// Event-driven triage handler\nasync function handleCodeReview(repoId: string, diff: string) {\n  const triage = await ai.triage(diff);\n  if (triage.risk > 0.8) return await deepReview(repoId, diff);\n}",
      "// Legacy 60s synchronous loop\nfor (const item of dataset) {\n  const res = await callSlowTokenApi(item);\n  saveToDb(res);\n}",
    ],
  };

  const handleRunAnalysis = () => {
    playClick();
    setIsAnalyzing(true);
    setProgress(15);
    setResult(null);

    const timer1 = setTimeout(() => setProgress(45), 400);
    const timer2 = setTimeout(() => setProgress(80), 800);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setIsAnalyzing(false);

      if (mode === "ats") {
        setResult({
          score: 96,
          matchRate: "96% HIGH COMPATIBILITY",
          triageStage: "STAGE 1: RECRUITER SHORTLIST MATCH",
          strengths: [
            "Matches High-Demand Stack: Next.js 16, TypeScript, .NET Core, Python/FastAPI",
            "Quantified Impact Proven: 60s → 10ms execution, 98% query search speedup",
            "Production Security Expertise: 70%+ RBAC & AES-256 Encryption",
          ],
          recommendations: [
            "Optimal match for Senior Full-Stack / AI Systems Architect role.",
            "Strong background in distributed event queues (Kafka, RabbitMQ, Inngest).",
          ],
        });
      } else {
        setResult({
          score: 98,
          matchRate: "ZERO BOTTLENECKS DETECTED",
          triageStage: "STAGE 3: DEEP CODE REVIEW PASSED",
          strengths: [
            "3-Stage Intelligent Triage passed with 0 security risks",
            "Event-driven background processing eliminates synchronous token locks",
            "Isolated execution environment ensures memory safety",
          ],
          recommendations: [
            "AES-256 API Key encryption validated.",
            "PostgreSQL connection pooling active.",
          ],
        });
      }

      playSuccess();
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <section id="playground" className="py-20 sm:py-28 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-block px-2.5 py-1 bg-black border border-white text-[10px] sm:text-xs uppercase tracking-widest mb-3">
            [04] TERMINAL_SIMULATOR // AI AUDIT WIDGET
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            TRY THE <span className="bg-white text-black px-1.5 sm:px-2 selection:bg-black selection:text-white">AI TRIAGE ENGINE</span>
          </h2>
          <p className="text-neutral-400 text-xs mt-2">
            Simulate the logic powering Shoaib&apos;s AI ATS Analyzer and Sentinell Code Reviewer platforms.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="p-4 sm:p-6 bg-black border-2 border-white text-left font-mono">
          {/* Top Bar Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => {
                  setMode("ats");
                  setInputText(samplePresets.ats[0]);
                  setResult(null);
                  playClick();
                }}
                onMouseEnter={playHover}
                className={`px-3 py-1.5 text-xs font-bold border transition-none cursor-pointer ${
                  mode === "ats"
                    ? "bg-white text-black border-white selection:bg-black selection:text-white"
                    : "bg-black text-neutral-400 border-neutral-800 hover:border-white"
                }`}
              >
                [MODE: AI ATS AUDIT]
              </button>

              <button
                onClick={() => {
                  setMode("code");
                  setInputText(samplePresets.code[0]);
                  setResult(null);
                  playClick();
                }}
                onMouseEnter={playHover}
                className={`px-3 py-1.5 text-xs font-bold border transition-none cursor-pointer ${
                  mode === "code"
                    ? "bg-white text-black border-white selection:bg-black selection:text-white"
                    : "bg-black text-neutral-400 border-neutral-800 hover:border-white"
                }`}
              >
                [MODE: CODE TRIAGE]
              </button>
            </div>

            <div className="text-xs text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 shrink-0" />
              <span>STATUS: ENGINE_READY</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="mb-4">
            <span className="text-[10px] text-neutral-400 uppercase block mb-2">
              SELECT TEST PROMPT:
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePresets[mode].map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(preset);
                    setResult(null);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className="px-2.5 py-1 bg-black border border-neutral-800 text-[11px] text-neutral-300 hover:border-white hover:text-white transition-none cursor-pointer"
                >
                  [PRESET #{idx + 1}]
                </button>
              ))}
            </div>
          </div>

          {/* Textarea Input */}
          <div className="mb-6">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              className="w-full p-3 sm:p-4 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white outline-none resize-none"
              placeholder="Enter resume summary or code diff here..."
            />
          </div>

          {/* Action Row - Mobile Responsive Stacking */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
            <button
              onClick={() => {
                setInputText("");
                setResult(null);
                playClick();
              }}
              onMouseEnter={playHover}
              className="flex items-center justify-center gap-1.5 px-3 py-2 bg-black border border-neutral-800 text-xs text-neutral-400 hover:border-white hover:text-white cursor-pointer w-full sm:w-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>[RESET]</span>
            </button>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing || !inputText.trim()}
              onMouseEnter={playHover}
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black font-bold text-xs uppercase border border-white hover:bg-black hover:text-white transition-none cursor-pointer disabled:opacity-50 w-full sm:w-auto selection:bg-black selection:text-white"
            >
              <Play className="w-4 h-4 fill-black shrink-0" />
              <span>{isAnalyzing ? "EXECUTING TRIAGE..." : "[RUN AI ANALYSIS]"}</span>
            </button>
          </div>

          {/* Progress ASCII Bar */}
          {isAnalyzing && (
            <div className="space-y-2 mb-6 p-3 bg-neutral-950 border border-neutral-800 text-xs">
              <div className="flex justify-between text-neutral-300">
                <span>ANALYZING TOKENS & REPO MATCHES...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-black p-1 border border-neutral-700 font-mono text-[10px] text-white">
                {"=".repeat(Math.floor(progress / 4))}
              </div>
            </div>
          )}

          {/* Output Results */}
          {result && (
            <div className="p-4 sm:p-6 bg-black border border-white text-left font-mono">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white mb-6">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">
                    RESULT SCORE:
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {result.score} / 100
                  </h3>
                </div>

                <div className="px-3 py-1 border border-white text-xs text-white">
                  {result.triageStage}
                </div>
              </div>

              {/* Strengths */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] text-neutral-400 uppercase block mb-2">
                  VERIFIED SIGNALS:
                </span>
                {result.strengths.map((str, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckSquare className="w-4 h-4 text-white shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="p-3 bg-neutral-950 border border-neutral-800 text-xs">
                <span className="text-[10px] text-neutral-400 block mb-1">
                  RECOMMENDED ACTION:
                </span>
                {result.recommendations.map((rec, idx) => (
                  <p key={idx} className="text-neutral-300">
                    • {rec}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
