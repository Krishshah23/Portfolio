"use client";

import SR from "./ui/ScrollReveal";

const stats = [
  { label: "Projects delivered", value: "30+" },
  { label: "Duration", value: "1.3+ yrs" },
  { label: "Clients", value: "Int'l CS students" },
  { label: "Mode", value: "Remote" },
];

const domains = ["Java", "Python", "Databases", "Web Technologies"];

export default function FreelanceExperience() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SR>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.1em]">Ongoing Work</span>
            <span className="h-px flex-1 bg-border" />
          </div>
        </SR>

        <SR delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-text leading-[1]">
                Freelance Software Development
              </h2>
              <p className="text-[14px] text-text-secondary mt-2">
                Self-employed · Remote · May 2025 to Present
              </p>
            </div>
          </div>
        </SR>

        {/* Stats bar */}
        <SR delay={0.08}>
          <div className="flex flex-wrap gap-8 mb-10 pb-6 border-b border-border">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[11px] text-text-muted uppercase tracking-wider">{s.label}</div>
                <div className="text-[19px] font-bold text-text mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>
        </SR>

        <SR delay={0.1}>
          <div className="max-w-3xl mb-8">
            <p className="text-[16px] text-text-secondary leading-[1.75]">
              For the past year and a half, I&apos;ve been building software independently for
              international Computer Science students on real projects with real deadlines,
              not one-off gigs. It runs alongside my own products, not instead of them: the same
              habits that go into shipping PathPilot AI or Crictalx carry over here, just applied
              to someone else&apos;s problem instead of my own. Over 30 projects in, it&apos;s
              become a steady, ongoing part of how I work.
            </p>
          </div>
        </SR>

        <SR delay={0.12}>
          <div>
            <div className="text-[11px] text-text-muted uppercase tracking-wider mb-3">Across</div>
            <div className="flex flex-wrap gap-1.5">
              {domains.map((d) => (
                <span
                  key={d}
                  className="px-2.5 py-1 text-[12px] text-text-secondary border border-border rounded-md hover:border-border-hover hover:text-text transition-all cursor-default"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </SR>
      </div>
    </section>
  );
}
