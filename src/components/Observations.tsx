"use client";

import SR from "./ui/ScrollReveal";

const observations = [
  {
    title: "Interfaces should be self-explanatory",
    body: "Early versions of Crictalx relied on written guides to explain each feature. Adoption stayed flat until I redesigned the flow so it needed no explanation — usage roughly tripled afterward.",
    tag: "user behavior",
    source: "crictalx v1.0, march 2026",
  },
  {
    title: "Engagement requires stakes, not just rewards",
    body: "Adding XP and badges to BrainBrew had little effect on behavior. Introducing confidence scoring — where users stake points on their own certainty — measurably increased engagement. The incentive structure mattered more than the reward itself.",
    tag: "engagement",
    source: "brainbrew, april 2026",
  },
  {
    title: "Early feedback outweighs early polish",
    body: "The first version of Crictalx was a single Flask route with hardcoded polls — functional, not refined. Friends used it daily regardless, and that usage taught me more than any amount of upfront planning would have.",
    tag: "iteration",
    source: "crictalx v0.1, february 2026",
  },
  {
    title: "Continuity mechanics outperform novelty",
    body: "Adding a streak counter to Crictalx increased daily return rate more than any single feature addition did. Users came back less for new functionality and more to preserve a habit already in motion.",
    tag: "retention",
    source: "crictalx v1.3, may 2026",
  },
  {
    title: "Schema design benefits from real usage data",
    body: "I initially tried to finalize the database schema before writing any code, then rewrote it three times anyway. I now start with a minimal structure and refactor once actual data patterns are clear.",
    tag: "engineering",
    source: "crictalx v2.0, 2026",
  },
  {
    title: "User friction is a reliable product roadmap",
    body: "Share cards, reward boosts, and the analytics dashboard all originated from specific complaints raised by users. Direct feedback consistently outperformed planning sessions as a source of prioritization.",
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
            <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.1em]">
              Building Notes
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-text mb-2">
            Observations from Building
          </h2>
          <p className="text-[14px] text-text-secondary mb-12">
            Things I learned by shipping, not by reading.
          </p>
        </SR>

        {/* ── Hero quote — cinematic pause ── */}
        <SR>
          <div className="py-10 md:py-14 mb-10 border-t border-b border-border">
            <div className="max-w-[640px] mx-auto text-center">
              <span className="text-[12px] text-accent px-2.5 py-1 rounded-md bg-accent-dim mb-5 inline-block">
                {heroObs.tag}
              </span>
              <h3 className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-semibold text-text leading-[1.35] tracking-[-0.025em] mb-4">
                &ldquo;{heroObs.title}&rdquo;
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.75] mb-4 max-w-lg mx-auto">
                {heroObs.body}
              </p>
              <span className="text-[12px] text-text-muted">
                — learned shipping {heroObs.source}
              </span>
            </div>
          </div>
        </SR>

        {/* ── Remaining observations — numbered grid with spacing ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((o, i) => (
            <SR key={o.title} delay={i * 0.04}>
              <div className="panel p-5 md:p-6 hover:border-border-hover transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] text-text-muted">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] text-accent px-1.5 py-0.5 rounded bg-accent-dim">
                    {o.tag}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-text mb-2.5 tracking-[-0.01em]">
                  {o.title}
                </h3>
                <p className="text-[13px] text-text-secondary leading-[1.7] mb-3">{o.body}</p>
                <span className="text-[11px] text-text-muted">— {o.source}</span>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
