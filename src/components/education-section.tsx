"use client";

import React from "react";
import { useAudio } from "./audio-controller";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export const EducationSection: React.FC = () => {
  const { playHover } = useAudio();

  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Machine Learning & Data Mining",
    "Cyber Security",
    "Compiler Design",
    "Discrete Mathematics",
  ];

  return (
    <section className="py-24 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-black border-2 border-white text-left font-mono">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white text-black font-extrabold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                  [06] ACADEMIC_RECORD
                </span>
                <h3 className="text-xl font-bold uppercase text-white">PARUL UNIVERSITY</h3>
                <p className="text-xs text-neutral-300">
                  BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="px-3 py-1.5 bg-white text-black font-bold border border-white">
                CGPA: 8.06 / 10
              </div>
              <div className="px-3 py-1.5 bg-black text-white border border-neutral-700">
                NOV 2021 – APR 2024
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4 text-white" />
              <span>RELEVANT COMPUTER SCIENCE COURSEWORK:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span
                  key={c}
                  onMouseEnter={playHover}
                  className="px-3 py-1.5 bg-black border border-neutral-800 text-xs text-neutral-300 hover:border-white hover:text-white transition-none"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
