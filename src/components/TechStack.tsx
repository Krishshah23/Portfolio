"use client";

import SR from "./ui/ScrollReveal";

const stack: Record<string, string[]> = {
  "Languages": ["JavaScript", "Python", "HTML", "CSS", "SQL", "C#"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Flask", "Express", "Node.js", "Django", ".NET"],
  "Data": ["SQLite", "MongoDB", "REST APIs"],
  "Infra": ["Git", "GitHub", "Vercel", "Render", "VS Code"],
  "Exploring": ["ML/AI", "Docker", "System Design"],
};

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SR>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
              Technical
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-white mb-10">
            Stack
          </h2>
        </SR>

        <div className="space-y-4">
          {Object.entries(stack).map(([cat, items], i) => (
            <SR key={cat} delay={i * 0.04}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-[11px] font-mono text-accent w-20 shrink-0">{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-mono text-text-secondary border border-border rounded hover:border-border-hover hover:text-text transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
