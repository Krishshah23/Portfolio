"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SR from "./ui/ScrollReveal";

/* ── BrainBrew gets medium depth — it has real users ── */
const brainbrew = {
  name: "BrainBrew",
  tagline: "Multiplayer Gamified Learning Platform",
  url: "https://brainbrew.kreesh.me",
  stats: [
    { label: "Users (48h)", value: "260+" },
    { label: "Quiz Attempts", value: "1,000+" },
    { label: "Battle Mode", value: "Live" },
  ],
  description:
    "Multiplayer quiz ecosystem with real-time quiz battles, XP progression, and performance analytics. Built to make studying competitive and addictive.",
  insight:
    "260+ users in 48 hours. First time building real-time multiplayer state management. The matchmaking logic was rewritten three times.",
  tech: ["Flask", "SQLite", "Real-time State", "JSON APIs"],
  features: [
    "Quiz Battles: real-time multiplayer with live scoring",
    "XP Progression: leveling system tied to quiz performance",
    "Adaptive Learning: difficulty scales based on accuracy patterns",
    "Analytics: performance tracking across subjects and time",
  ],
  screenshots: [
    { src: "/projects/brainbrew/dashboard.png", label: "Dashboard" },
    { src: "/projects/brainbrew/battle_lobby.png", label: "Battle Lobby" },
    { src: "/projects/brainbrew/Battle_quiz.png", label: "Quiz Battle" },
    { src: "/projects/brainbrew/global_leaderboard.png", label: "Leaderboard" },
  ],
};

/* ── Secondary projects with screenshots ── */
const secondary = [
  {
    name: "Crictalx",
    desc: "Fantasy cricket prediction and engagement product featuring poll generation, scoring systems, leaderboards, and analytics loops.",
    lesson:
      "Predictions only felt worth making once scoring updated instantly instead of after the match ended. Moving to live scoring was a small backend change that made a much bigger difference to engagement than any new feature.",
    tech: ["Flask", "SQLite", "Gamification", "Analytics"],
    url: "https://crictalx.kreesh.me",
    screenshots: [
      { src: "/projects/crictalx/Dashboard_1.png", label: "Dashboard" },
      { src: "/projects/crictalx/Dashboard_2.png", label: "Prediction System" },
      { src: "/projects/crictalx/Standings_and_pointstable.png", label: "Standings" },
    ],
  },
  {
    name: "SpiceGarden",
    desc: "Front-end coursework project. Multi-page restaurant site with menu, reservation flow, and responsive design in vanilla HTML/CSS/JS.",
    lesson:
      "First project where I had to keep a consistent layout across five separate pages by hand, with no framework or component system. Fighting CSS drift between Menu, Reservation, and Gallery pages taught me why component-based styling exists.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://spicegarden.kreesh.me",
    screenshots: [
      { src: "/projects/spicegarden/Dashboard_heroppage.png", label: "Homepage" },
      { src: "/projects/spicegarden/Menu.png", label: "Menu" },
      { src: "/projects/spicegarden/Reservation.png", label: "Reservation" },
    ],
  },
];

export default function ProjectsSection() {
  const [lb, setLb] = useState<{ src: string; label: string } | null>(null);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-8 cursor-pointer"
            onClick={() => setLb(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }}
              className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <Image src={lb.src} alt={lb.label} width={1400} height={900}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[13px] text-white/80">{lb.label}</span>
                <button onClick={() => setLb(null)}
                  className="text-[12px] text-white/70 hover:text-white cursor-pointer">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SR>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.1em]">Other Work</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </SR>

          {/* ── BrainBrew: Medium depth ── */}
          <SR delay={0.05}>
            <div className="panel overflow-hidden mb-10">
              <div className="p-5 md:p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[18px] font-bold text-text tracking-[-0.02em]">{brainbrew.name}</h3>
                      <span className="text-[12px] text-text-muted px-1.5 py-0.5 rounded border border-border">
                        {brainbrew.tagline}
                      </span>
                    </div>
                    <a href={brainbrew.url} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-medium text-accent hover:text-accent/80 transition-colors">
                      {brainbrew.url.replace("https://", "")} →
                    </a>
                  </div>
                  <div className="flex gap-4">
                    {brainbrew.stats.map(s => (
                      <div key={s.label} className="text-right">
                        <div className="text-[11px] text-text-muted">{s.label}</div>
                        <div className="text-[14px] font-semibold text-text">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[14px] text-text-secondary leading-[1.7] max-w-xl mb-3">
                  {brainbrew.description}
                </p>

                {/* Builder insight */}
                <p className="text-[13px] text-text-muted leading-[1.6] italic mb-5 pl-3 border-l-2 border-accent/25">
                  {brainbrew.insight}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-4">
                  {brainbrew.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-[13px] text-text-secondary py-1">
                      <span className="text-accent mt-0.5">›</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {brainbrew.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[11px] font-mono text-text-muted border border-border rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* BrainBrew Screenshots — proper grid with contain */}
              <div className="border-t border-border p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {brainbrew.screenshots.map((s) => (
                    <div key={s.src} className="panel overflow-hidden cursor-pointer group" onClick={() => setLb(s)}>
                      <div className="relative aspect-[16/10] overflow-hidden bg-bg-panel">
                        <Image src={s.src} alt={s.label} fill sizes="25vw"
                          className="object-contain group-hover:scale-[1.03] transition-transform duration-300" />
                      </div>
                      <div className="px-2 py-1.5 border-t border-border">
                        <span className="text-[11px] text-text-muted">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SR>

          {/* ── Secondary projects: With screenshots ── */}
          <div className="space-y-6">
            {secondary.map((p, idx) => (
              <SR key={p.name} delay={0.05 + idx * 0.06}>
                <div className="panel overflow-hidden">
                  <div className="p-5 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-[16px] font-semibold text-text">{p.name}</h3>
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer"
                          className="text-[12px] font-medium text-accent hover:text-accent/80 transition-colors">
                          {p.url.replace("https://", "")} →
                        </a>
                      ) : (
                        <span className="text-[12px] text-text-muted">
                          case study + screenshots incoming
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-text-secondary leading-[1.6] mb-3">{p.desc}</p>

                    {/* What I learned */}
                    <p className="text-[13px] text-text-muted leading-[1.6] italic mb-3 pl-3 border-l-2 border-accent/25">
                      {p.lesson}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-mono text-text-muted border border-border rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Project Screenshots */}
                  <div className="border-t border-border p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {p.screenshots.map((s) => (
                        <div key={s.src} className="panel overflow-hidden cursor-pointer group" onClick={() => setLb(s)}>
                          <div className="relative aspect-[16/10] overflow-hidden bg-bg-panel">
                            <Image src={s.src} alt={s.label} fill sizes="33vw"
                              className="object-contain group-hover:scale-[1.03] transition-transform duration-300" />
                          </div>
                          <div className="px-2 py-1.5 border-t border-border">
                            <span className="text-[11px] text-text-muted">{s.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SR>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
