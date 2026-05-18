"use client";

import SR from "./ui/ScrollReveal";

const observations = [
  {
    title: "Users don't read instructions",
    body: "When I launched Crictalx, I wrote detailed guides for every feature. Nobody read them. I redesigned the entire flow to be self-explanatory. Usage went up 3x.",
    tag: "user behavior",
    source: "crictalx v1.0, march 2024",
  },
  {
    title: "Gamification needs real stakes",
    body: "Adding XP and badges to BrainBrew didn't change behavior. Adding confidence scoring — where you stake points on your certainty — did. People need skin in the game.",
    tag: "engagement",
    source: "brainbrew, april 2024",
  },
  {
    title: "Ship the ugly version first",
    body: "Crictalx v1 was a single Flask route with hardcoded polls. It was embarrassing. But my friends used it daily. That feedback loop taught me more than any tutorial.",
    tag: "iteration",
    source: "crictalx v0.1, february 2024",
  },
  {
    title: "Streaks are underrated",
    body: "Adding a streak counter to Crictalx increased daily return rate significantly. People came back not because of new features, but because they didn't want to break their streak.",
    tag: "retention",
    source: "crictalx v1.3, may 2024",
  },
  {
    title: "Architecture evolves, not designed",
    body: "I tried to design the perfect database schema before writing any code. Rewrote it three times anyway. Now I start messy and refactor once I understand the actual data patterns.",
    tag: "engineering",
    source: "crictalx v2.0, 2025",
  },
  {
    title: "The best features come from complaints",
    body: "Share cards, reward boosts, and analytics dashboard — all came from friends complaining about something missing. Real users generate better roadmaps than planning sessions.",
    tag: "product",
    source: "all projects, ongoing",
  },
];

export default function Observations() {
  const heroObs = observations[0];
  const rest = observations.slice(1);

  return (
    <section id="observations" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section header */}
        <SR>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em]">
              Building Notes
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-white mb-2">
            Observations from Building
          </h2>
          <p className="text-[13px] text-text-secondary font-mono mb-12">
            Things I learned by shipping, not by reading.
          </p>
        </SR>

        {/* ── Hero quote — cinematic pause ── */}
        <SR>
          <div className="py-10 md:py-14 mb-10 border-t border-b border-border">
            <div className="max-w-[640px] mx-auto text-center">
              <span className="text-[10px] font-mono text-accent px-2 py-0.5 rounded bg-accent-dim border border-accent/10 mb-5 inline-block">
                {heroObs.tag}
              </span>
              <h3 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-semibold text-white leading-[1.35] tracking-[-0.025em] mb-4">
                &ldquo;{heroObs.title}&rdquo;
              </h3>
              <p className="text-[13px] text-text-secondary leading-[1.75] mb-4 max-w-lg mx-auto">
                {heroObs.body}
              </p>
              <span className="text-[10px] font-mono text-text-muted">
                — learned shipping {heroObs.source}
              </span>
            </div>
          </div>
        </SR>

        {/* ── Remaining observations — numbered grid with spacing ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((o, i) => (
            <SR key={o.title} delay={i * 0.04}>
              <div className="panel p-5 md:p-6 hover:bg-bg-hover transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono text-text-muted">
                    {String(i + 2).padStart(2, "0")}/
                  </span>
                  <span className="text-[10px] font-mono text-accent px-1.5 py-0.5 rounded bg-accent-dim border border-accent/10">
                    {o.tag}
                  </span>
                </div>
                <h3 className="text-[14px] font-semibold text-white mb-2.5 tracking-[-0.01em]">
                  {o.title}
                </h3>
                <p className="text-[12px] text-text-secondary leading-[1.7] mb-3">{o.body}</p>
                <span className="text-[9px] font-mono text-text-muted">— {o.source}</span>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
