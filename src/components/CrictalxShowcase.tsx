"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SR from "./ui/ScrollReveal";

const features = [
  { label: "Match Prediction Polls", detail: "Auto-generated from live squad data" },
  { label: "Confidence Scoring", detail: "Stake points on prediction certainty" },
  { label: "Streak Systems", detail: "Bonus multipliers for consecutive accuracy" },
  { label: "Leaderboard Rankings", detail: "Real-time scoring with position tracking" },
  { label: "Reward Boosts", detail: "Strategic power-ups from roulette system" },
  { label: "Roulette Engine", detail: "Gamified spin mechanics with inventory" },
  { label: "Analytics Dashboard", detail: "Performance metrics and match insights" },
  { label: "Share Cards", detail: "Generated result cards for social sharing" },
  { label: "Live Countdowns", detail: "Poll deadlines synced to match schedules" },
  { label: "Admin Controls", detail: "Full scoring, poll, and user management" },
  { label: "Match Standings", detail: "Real-time score breakdowns per match" },
  { label: "Session Auth", detail: "Secure user sessions and role management" },
];

/* Curated screenshots — 4 hero shots only */
const heroShots = [
  { src: "/projects/crictalx/Dashboard_1.png", label: "Dashboard — main prediction interface" },
  { src: "/projects/crictalx/Dashboard_2.png", label: "Roulette Engine — gamified reward mechanics" },
  { src: "/projects/crictalx/Standings_and_pointstable.png", label: "Standings — real-time leaderboard state" },
  { src: "/projects/crictalx/User_profile_1.png", label: "Profile — performance analytics per user" },
];

/* Deploy timeline milestones */
const timeline = [
  { version: "v0.1", date: "Feb 2024", title: "Manual polls", desc: "WhatsApp group, manual scoring, spreadsheet leaderboard.", lesson: "The problem was real — 6 friends used it daily." },
  { version: "v1.0", date: "Mar 2024", title: "Automated generation", desc: "Flask app with auto-generated polls from squad data. First 20 users.", lesson: "Nobody read the instructions. Redesigned for zero-explanation UX." },
  { version: "v1.3", date: "May 2024", title: "Confidence scoring", desc: "Stake points on certainty. Streak bonuses. Daily return rate jumped.", lesson: "Real stakes > decorative gamification." },
  { version: "v2.0", date: "Jan 2025", title: "Full platform", desc: "Roulette, analytics, share cards, admin panel. 2,000+ votes.", lesson: "Architecture rewrites are inevitable. Start messy, refactor with understanding." },
  { version: "v2.4", date: "Current", title: "Live production", desc: "2,847 votes. Confidence system, reward boosts, leaderboard rankings.", lesson: "Still shipping. Still learning from user behavior." },
];

/* Engineering decisions */
const decisions = [
  {
    question: "Why Flask over Django?",
    answer: "Needed minimal overhead for rapid iteration. Django's ORM was overkill for SQLite + manual query patterns I was already comfortable with.",
  },
  {
    question: "Why SQLite in production?",
    answer: "At 50 concurrent users, SQLite handles the load. WAL mode + connection pooling. Will migrate to Postgres when it actually becomes a bottleneck, not before.",
  },
];

/* Lightbox */
function Lightbox({ items, index, onClose }: { items: typeof heroShots; index: number; onClose: () => void }) {
  const [idx, setIdx] = useState(index);

  const s = items[idx];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-pointer"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} key={idx}
        className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={s.src} alt={s.label} width={1400} height={900}
          className="w-full h-auto max-h-[80vh] object-contain rounded-md" />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[12px] font-mono text-text-secondary">{s.label}</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-text-muted">{idx + 1}/{items.length}</span>
            <button onClick={onClose} className="text-[11px] font-mono text-text-muted hover:text-text cursor-pointer">[close]</button>
          </div>
        </div>
        <button onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + items.length) % items.length); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors">
          ‹
        </button>
        <button onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % items.length); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors">
          ›
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function CrictalxShowcase() {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  return (
    <>
      <AnimatePresence>
        {lbIdx !== null && <Lightbox items={heroShots} index={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>

      <section id="work" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SR>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-live pulse-live" />
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.15em]">Featured Product</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </SR>

          <SR delay={0.05}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.035em] text-white leading-[1]">Crictalx Polls</h2>
                <p className="text-[13px] font-mono text-text-secondary mt-2">Fantasy Cricket Prediction & Gamification Platform</p>
              </div>
              <a href="https://crictalx.kreesh.me" target="_blank" rel="noopener noreferrer"
                className="text-[12px] font-mono text-accent hover:text-accent/80 transition-colors self-start md:self-auto">crictalx.kreesh.me →</a>
            </div>
          </SR>

          {/* Metrics bar */}
          <SR delay={0.08}>
            <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-border">
              {[
                { label: "Total Votes", value: "2,847" },
                { label: "Seasons Tracked", value: "4" },
                { label: "Features Shipped", value: "12" },
                { label: "Architecture Rewrites", value: "3" },
              ].map(m => (
                <div key={m.label}>
                  <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{m.label}</div>
                  <div className="text-[18px] font-bold text-text mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </SR>

          {/* Origin story — concise */}
          <SR delay={0.1}>
            <div className="max-w-2xl mb-12">
              <p className="text-[14px] text-text-secondary leading-[1.75] mb-3">
                Started as a friend group manually creating prediction polls every IPL match day. Highest scorer, top wicket taker, match winner. Every single day, manually.
              </p>
              <p className="text-[14px] text-text-secondary leading-[1.75]">
                The repetition was painful. So I automated it. Then kept building — confidence scoring, streak bonuses, reward boosts, analytics. What started as a group chat solution became a full gamification platform with <span className="text-text font-medium">2,847 votes</span> and active daily usage.
              </p>
            </div>
          </SR>

          {/* ── Curated product screens ── */}
          <SR delay={0.12}>
            <h3 className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-4">Product Screens</h3>

            {/* Large hero shot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="panel overflow-hidden cursor-pointer group mb-3"
              onClick={() => setLbIdx(0)}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-bg-panel">
                <Image src={heroShots[0].src} alt={heroShots[0].label} fill className="object-contain group-hover:scale-[1.01] transition-transform duration-500" sizes="100vw" />
              </div>
              <div className="px-3 py-2 flex items-center justify-between border-t border-border">
                <span className="text-[11px] font-mono text-text-secondary">{heroShots[0].label}</span>
                <span className="text-[9px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">click to expand →</span>
              </div>
            </motion.div>

            {/* Supporting shots — 3 column */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
              {heroShots.slice(1).map((s, i) => (
                <motion.div
                  key={s.src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                  className="panel overflow-hidden cursor-pointer group"
                  onClick={() => setLbIdx(i + 1)}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-panel">
                    <Image src={s.src} alt={s.label} fill className="object-contain group-hover:scale-[1.02] transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="px-3 py-2 flex items-center justify-between border-t border-border">
                    <span className="text-[10px] font-mono text-text-secondary">{s.label}</span>
                    <span className="text-[9px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">expand →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </SR>

          {/* ── Deploy Timeline — THE interactive moment ── */}
          <SR delay={0.1}>
            <div className="mb-12">
              <h3 className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-6">System Evolution</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border hidden md:block" />

                <div className="space-y-1">
                  {timeline.map((m, i) => {
                    const isExpanded = expandedMilestone === i;
                    const isCurrent = i === timeline.length - 1;

                    return (
                      <motion.div
                        key={m.version}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <button
                          onClick={() => setExpandedMilestone(isExpanded ? null : i)}
                          className="w-full text-left group cursor-pointer"
                        >
                          <div className="flex items-start gap-4 p-3 rounded-md hover:bg-bg-elevated transition-colors">
                            {/* Timeline dot */}
                            <div className="relative shrink-0 mt-1 hidden md:block">
                              <span className={`block w-[9px] h-[9px] rounded-full border-2 ${isCurrent
                                  ? "bg-live border-live pulse-live"
                                  : "bg-bg-elevated border-border group-hover:border-accent"
                                } transition-colors`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-[12px] font-mono text-accent font-medium">{m.version}</span>
                                <span className="text-[10px] font-mono text-text-muted">{m.date}</span>
                                <span className="text-[13px] font-semibold text-text">{m.title}</span>
                                <span className="text-[10px] font-mono text-text-muted ml-auto">
                                  {isExpanded ? "−" : "+"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 md:pl-[45px] pr-3 pb-4">
                                <p className="text-[12px] text-text-secondary leading-[1.65] mb-2">{m.desc}</p>
                                <p className="text-[11px] font-mono text-text-muted italic pl-3 border-l-2 border-accent/20">
                                  &ldquo;{m.lesson}&rdquo;
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </SR>

          {/* ── Engineering Decisions ── */}
          <SR delay={0.1}>
            <h3 className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-4">Engineering Decisions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {decisions.map(d => (
                <div key={d.question} className="panel p-4">
                  <h4 className="text-[12px] font-mono text-accent font-medium mb-2">{d.question}</h4>
                  <p className="text-[12px] text-text-secondary leading-[1.65]">{d.answer}</p>
                </div>
              ))}
            </div>
          </SR>

          {/* ── Feature Set ── */}
          <SR delay={0.1}><h3 className="text-[11px] font-mono text-text-muted uppercase tracking-wider mb-4">Feature Set</h3></SR>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden mb-6">
            {features.map((f, i) => (
              <SR key={f.label} delay={i * 0.02}>
                <div className="bg-bg-elevated p-3.5 hover:bg-bg-hover transition-colors">
                  <div className="text-[12px] font-mono text-text font-medium">{f.label}</div>
                  <div className="text-[11px] text-text-secondary mt-0.5">{f.detail}</div>
                </div>
              </SR>
            ))}
          </div>
          <SR delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {["Flask", "SQLite", "REST APIs", "Session Auth", "Dynamic Generation", "Jinja2"].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-mono text-text-muted border border-border rounded">{t}</span>
              ))}
            </div>
          </SR>
        </div>
      </section>
    </>
  );
}
