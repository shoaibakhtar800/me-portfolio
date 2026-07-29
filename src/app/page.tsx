import { AudioProvider } from "@/components/audio-controller";
import { CustomCursor } from "@/components/custom-cursor";
import { HeroCanvas } from "@/components/hero-canvas";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AtsInteractiveWidget } from "@/components/ats-interactive-widget";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <AudioProvider>
      {/* Background Interactive Particles WebGL Canvas */}
      <HeroCanvas />

      {/* Lusion-style Smooth Custom Cursor */}
      <CustomCursor />

      {/* Main Page Layout Container */}
      <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AtsInteractiveWidget />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AudioProvider>
  );
}
