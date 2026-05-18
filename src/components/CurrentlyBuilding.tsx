"use client";

import SR from "./ui/ScrollReveal";

const items = [
  {
    name: "Crictalx 2.0",
    status: "active",
    desc: "Rebuilding the entire platform — new scoring engine, team-based leagues, historical analytics, and a complete UI overhaul.",
    progress: 65,
  },
  {
    name: "Student OS",
    status: "planning",
    desc: "A productivity system designed for how CS students actually work — assignment tracking, study sessions, and resource management.",
    progress: 15,
  },
  {
    name: "ML Fundamentals",
    status: "learning",
    desc: "Working through core ML concepts — regression, classification, neural networks. Building small projects to solidify understanding.",
    progress: 30,
  },
  {
    name: "Deployment Pipeline",
    status: "experimenting",
    desc: "Setting up proper CI/CD workflows, Docker containers, and automated deployments for all live projects.",
    progress: 40,
  },
];

const statusColor: Record<string, string> = {
  active: "text-live bg-live-dim border-live/20",
  planning: "text-accent bg-accent-dim border-accent/20",
  learning: "text-warn bg-warn/10 border-warn/20",
  experimenting: "text-text-secondary bg-bg-panel border-border",
};

export default function CurrentlyBuilding() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SR>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
              In Progress
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-white mb-10">
            Currently Building
          </h2>
        </SR>

        <div className="space-y-3">
          {items.map((item, i) => (
            <SR key={item.name} delay={i * 0.06}>
              <div className="panel p-4 md:p-5 hover:bg-bg-hover transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-[14px] font-semibold text-white">{item.name}</h3>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${statusColor[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-text-muted">{item.progress}%</span>
                </div>
                <p className="text-[12px] text-text-secondary leading-[1.65] mb-3 max-w-2xl">
                  {item.desc}
                </p>
                {/* Progress bar */}
                <div className="h-1 bg-bg-panel rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.status === "active" ? "#22c55e" : item.status === "planning" ? "#3b82f6" : item.status === "learning" ? "#eab308" : "#3f3f46",
                      animation: "fill-bar 1.2s ease-out",
                    }}
                  />
                </div>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
