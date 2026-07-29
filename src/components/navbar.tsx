"use client";

import React, { useState, useEffect } from "react";
import { AudioToggle, useAudio } from "./audio-controller";
import { Download, Menu, X, Terminal } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "[01] MANIFEST", href: "#manifest" },
    { name: "[02] EXP", href: "#experience" },
    { name: "[03] PROJECTS", href: "#projects" },
    { name: "[04] TRIAGE", href: "#playground" },
    { name: "[05] SKILLS", href: "#skills" },
    { name: "[06] CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-none font-mono text-xs ${
        scrolled
          ? "bg-black/95 border-b border-white py-3 backdrop-blur-md"
          : "bg-black border-b border-neutral-800 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Terminal Header */}
        <a
          href="#"
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center gap-2.5 text-white tracking-widest uppercase font-bold group cursor-pointer shrink-0 whitespace-nowrap"
        >
          <div className="p-1.5 bg-white text-black font-extrabold flex items-center justify-center">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="flex flex-col">
            <span className="text-white text-sm font-extrabold tracking-wider">
              SHOAIB_AKHTAR
            </span>
            <span className="text-[10px] text-neutral-400 font-mono tracking-tight font-normal">
              FULL-STACK & AI ENGINEER
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0 font-mono text-xs whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={playHover}
              onClick={playClick}
              className="text-neutral-400 hover:text-white hover:underline transition-none uppercase tracking-wider py-1 px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Row */}
        <div className="hidden md:flex items-center gap-3 shrink-0 whitespace-nowrap">
          <AudioToggle />

          <a
            href="mailto:shoaibakhtar.dev.eng@gmail.com?subject=Shoaib%20Akhtar%20Resume%20Request"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-white text-black font-bold text-xs uppercase tracking-wider border border-white hover:bg-black hover:text-white transition-none cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>[RESUME.PDF]</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <AudioToggle />
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              playClick();
            }}
            className="p-2 bg-black border border-white text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white px-4 pt-4 pb-6 mt-2 flex flex-col gap-4">
          <div className="flex flex-col gap-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  playClick();
                }}
                className="text-neutral-300 hover:text-white py-2 border-b border-neutral-800 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="mailto:shoaibakhtar.dev.eng@gmail.com?subject=Shoaib%20Akhtar%20Resume%20Request"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-wider border border-white hover:bg-black hover:text-white"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME PDF</span>
          </a>
        </div>
      )}
    </header>
  );
};
