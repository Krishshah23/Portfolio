"use client";

import SR from "./ui/ScrollReveal";

const patterns = [
  "Event-driven architectures over request-response",
  "Progressive complexity — start simple, add layers when forced",
  "User behavior as the primary data source",
  "Gamification as engagement infrastructure, not decoration",
  "Manual process → automated system pipeline",
];

const problems = [
  "Turning manual processes into automated systems",
  "Designing scoring, ranking, and progression mechanics",
  "Building products that create daily habits",
  "Making data visible and actionable",
  "Real-time state management across users",
];

const workbench = [
  {
    name: "Crictalx 2.0",
    status: "active",
    desc: "Scoring engine rewrite, team leagues, analytics overhaul",
    progress: 65,
  },
  {
    name: "ML Fundamentals",
    status: "learning",
    desc: "Regression, classification, neural nets. Building to understand.",
    progress: 30,
  },
  {
    name: "Deployment Pipeline",
    status: "experimenting",
    desc: "Docker, CI/CD, automated deploys for all live projects",
    progress: 40,
  },
  {
    name: "Student OS",
    status: "planning",
    desc: "Productivity system for how CS students actually work",
    progress: 15,
  },
];

const statusStyle: Record<string, string> = {
  active: "text-live",
  learning: "text-text-secondary",
  experimenting: "text-text-secondary",
  planning: "text-accent",
};

export default function EngineeringDNA() {
  return (
    <section id="stack" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section label — mono, no large heading */}
        <SR>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em]">
              Engineering DNA
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </SR>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Systems patterns */}
          <SR>
            <div>
              <h3 className="text-[11px] font-mono text-accent uppercase tracking-wider mb-5">
                Systems Patterns I Gravitate Toward
              </h3>
              <div className="space-y-2.5">
                {patterns.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-[1.6]">
                    <span className="text-text-muted mt-0.5 font-mono text-[11px]">→</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </SR>

          {/* Types of problems */}
          <SR delay={0.08}>
            <div>
              <h3 className="text-[11px] font-mono text-accent uppercase tracking-wider mb-5">
                Types of Problems I Enjoy
              </h3>
              <div className="space-y-2.5">
                {problems.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-[1.6]">
                    <span className="text-text-muted mt-0.5 font-mono text-[11px]">→</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </SR>
        </div>

        {/* Current workbench */}
        <SR delay={0.05}>
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
              <h3 className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                Current Workbench
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
              {workbench.map((item) => (
                <div key={item.name} className="bg-bg p-4 md:p-5 hover:bg-bg-elevated transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[13px] font-semibold text-white">{item.name}</h4>
                    <span className={`text-[9px] font-mono uppercase tracking-wider ${statusStyle[item.status]}`}>
                      {item.status} — {item.progress}%
                    </span>
                  </div>
                  <p className="text-[12px] text-text-secondary leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SR>

        {/* Tools — minimal inline */}
        <SR delay={0.08}>
          <div className="space-y-1.5 font-mono text-[12px]">
            <div className="flex flex-wrap gap-x-1">
              <span className="text-accent w-24 shrink-0">primary</span>
              <span className="text-text-secondary">javascript, python, flask, react, next.js, sqlite</span>
            </div>
            <div className="flex flex-wrap gap-x-1">
              <span className="text-accent w-24 shrink-0">infra</span>
              <span className="text-text-secondary">git, vercel, render, github, vs code</span>
            </div>
            <div className="flex flex-wrap gap-x-1">
              <span className="text-accent w-24 shrink-0">exploring</span>
              <span className="text-text-secondary">docker, ml/ai, system design, ci/cd</span>
            </div>
          </div>
        </SR>
      </div>
    </section>
  );
}
