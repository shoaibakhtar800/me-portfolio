import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoaib Akhtar | Full-Stack & AI Systems Engineer",
  description:
    "Portfolio of Shoaib Akhtar - Software Developer at Brain Payroll specializing in Next.js 16, TypeScript, .NET Core, Python, AI Agents, and Distributed Microservices.",
  keywords: [
    "Shoaib Akhtar",
    "Software Developer",
    "Full-Stack Engineer",
    "AI Systems Engineer",
    "Brain Payroll",
    "Next.js 16",
    "TypeScript",
    ".NET Core",
    "Sentinell",
    "AI Code Reviewer",
    "AI ATS Analyzer",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
