"use client";

import React, { useState } from "react";
import { useAudio } from "./audio-controller";
import { GithubIcon, LinkedinIcon } from "./icons";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  Terminal,
  Code2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { playHover, playClick, playSuccess } = useAudio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCli, setCopiedCli] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const email = "shoaibakhtar.dev.eng@gmail.com";
  const phone = "+91-930-441-1572";
  const cliCommand = "npx shoaib-akhtar";

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyCli = () => {
    playClick();
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    playSuccess();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10 border-t border-neutral-800 bg-black font-mono text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-block px-2.5 py-1 bg-black border border-white text-[10px] sm:text-xs uppercase tracking-widest mb-3">
            [07] CONTACT_SHELL // INITIATE DIRECT COMMUNICATIONS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            GET IN <span className="bg-white text-black px-1.5 sm:px-2">TOUCH</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 text-left font-mono">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email */}
            <div className="p-4 sm:p-5 bg-black border border-white flex items-center justify-between">
              <div className="flex items-center gap-3 truncate pr-2">
                <div className="p-2 bg-white text-black font-bold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase block">EMAIL ADDRESS</span>
                  <a href={`mailto:${email}`} className="text-xs font-bold text-white hover:underline truncate block">
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                className="p-1.5 bg-black border border-neutral-700 hover:border-white text-neutral-300 hover:text-white cursor-pointer shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-4 sm:p-5 bg-black border border-white flex items-center gap-3">
              <div className="p-2 bg-white text-black font-bold shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase block">PHONE / WHATSAPP</span>
                <a href={`tel:${phone}`} className="text-xs font-bold text-white hover:underline">
                  {phone}
                </a>
              </div>
            </div>

            {/* CLI Command Box */}
            <div className="p-4 sm:p-5 bg-black border border-white">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-neutral-800">
                <span className="text-[9px] sm:text-[10px] text-neutral-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 shrink-0" />
                  CLI SHORTCUT
                </span>
                <button
                  onClick={handleCopyCli}
                  onMouseEnter={playHover}
                  className="px-2 py-0.5 bg-white text-black font-bold text-[10px] cursor-pointer"
                >
                  {copiedCli ? "[COPIED]" : "[COPY]"}
                </button>
              </div>
              <div className="text-xs text-white">
                $ {cliCommand}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-2">
              {[
                { name: "LINKEDIN", href: "https://linkedin.com", icon: LinkedinIcon },
                { name: "GITHUB", href: "https://github.com", icon: GithubIcon },
                { name: "LEETCODE", href: "https://leetcode.com", icon: Code2 },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-black border border-neutral-700 text-[10px] sm:text-[11px] text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-none text-center"
                >
                  <soc.icon className="w-3.5 h-3.5 shrink-0" />
                  <span>[{soc.name}]</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 bg-black border-2 border-white">
              {formSent ? (
                <div className="py-8 sm:py-10 text-center">
                  <div className="w-12 h-12 bg-white text-black font-bold flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-2">MESSAGE TRANSMITTED!</h3>
                  <p className="text-xs text-neutral-300 mb-6">
                    Thank you. Shoaib will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-4 py-2 bg-white text-black font-bold text-xs uppercase border border-white hover:bg-black hover:text-white"
                  >
                    [SEND ANOTHER MESSAGE]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold uppercase mb-1">DIRECT TRANSMISSION FORM</h3>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 mb-4">
                    Fill out fields below to initiate direct email communication.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] sm:text-[10px] text-neutral-400 uppercase block mb-1">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full p-3 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] sm:text-[10px] text-neutral-400 uppercase block mb-1">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full p-3 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] sm:text-[10px] text-neutral-400 uppercase block mb-1">MESSAGE CONTENT</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shoaib, we are looking for a Senior Full-Stack & AI Engineer to join our team..."
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 text-white text-xs font-mono focus:border-white outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="w-full py-3.5 bg-white text-black font-extrabold text-xs uppercase border border-white hover:bg-black hover:text-white transition-none flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>[TRANSMIT MESSAGE]</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
