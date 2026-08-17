"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import SR from "./ui/ScrollReveal";

const features = [
  { label: "Path Score", detail: "Single 0-100 readiness score across 5 weighted factors" },
  { label: "Resume Analyzer", detail: "ATS and structure scoring with red-flag detection" },
  { label: "Skill Gap Analysis", detail: "Compares current profile against target role requirements" },
  { label: "Growth Roadmap", detail: "Personalized weekly tasks generated for measurable progress" },
  { label: "Live Jobs", detail: "Market listings with cache-backed fetch and opportunity tracking" },
  { label: "Interview Coach", detail: "AI mock interviews with answer-level feedback" },
  { label: "AI Coach Chat", detail: "Gemini-backed mentoring and career guidance" },
  { label: "Resume Builder", detail: "In-app resume editor with PDF and DOCX export" },
  { label: "Reports", detail: "Progress snapshots for student career readiness" },
  { label: "Onboarding Engine", detail: "Role, skills, and semester-aware personalization" },
  { label: "Notifications", detail: "Scheduled nudges and job alerts via cron jobs" },
  { label: "Multi-Service Security", detail: "Internal-key-gated AI microservice architecture" },
];

/* Product journey screenshots — Dashboard leads since it shows the product actually working */
const heroShots = [
  {
    src: "/projects/pathpilot/dashboard.png",
    label: "Dashboard",
    why: "Surfaces Path Score, behavior signals, and immediate next actions.",
  },
  {
    src: "/projects/pathpilot/resume-analyzer.png",
    label: "Resume Analyzer",
    why: "Converts uploaded resumes into ATS and structure-level feedback.",
  },
  {
    src: "/projects/pathpilot/skill-roadmap.png",
    label: "Skill Roadmap",
    why: "Transforms weak areas into weekly, measurable improvement tasks.",
  },
  {
    src: "/projects/pathpilot/live-jobs.png",
    label: "Live Jobs",
    why: "Connects preparation with actual job opportunities and tracking.",
  },
  {
    src: "/projects/pathpilot/ai-interview-coach.png",
    label: "AI Interview Coach",
    why: "Simulates interview practice loops with contextual feedback.",
  },
  {
    src: "/projects/pathpilot/resume-builder.png",
    label: "Resume Builder",
    why: "Lets students ship application-ready resumes from inside the product.",
  },
  {
    src: "/projects/pathpilot/landing-page.png",
    label: "Landing",
    why: "Establishes value proposition and drives onboarding action.",
  },
];

/* Deploy timeline milestones */
const timeline = [
  { version: "v0.1", date: "Jan 2026", title: "Problem framing", desc: "Defined student career-readiness gaps and outlined a single-score product experience.", lesson: "A strong UX problem statement makes technical complexity worth it." },
  { version: "v0.4", date: "Mar 2026", title: "Core web platform", desc: "Built React + Node app with auth, onboarding, resume upload, and dashboard skeleton.", lesson: "Stable API contracts early reduced frontend churn later." },
  { version: "v0.7", date: "May 2026", title: "AI + ML integration", desc: "Added Django microservice, readiness prediction pipeline, and explainability via SHAP.", lesson: "Separating AI inference from app logic made iteration much faster." },
  { version: "v1.0", date: "Jul 31, 2026", title: "Capstone release", desc: "Shipped complete multi-service build with Path Score, roadmap, jobs, interview coach, and resume builder.", lesson: "Production-grade architecture matters even in student products." },
  { version: "v2.0", date: "Aug 1–2, 2026", title: "UI renovation + storage migration", desc: "Redesigned core UI and migrated file storage from ephemeral disk to MongoDB GridFS — an architectural change, not just a visual refresh.", lesson: "Ephemeral disk storage works fine until a redeploy wipes it. Persistent storage should be the default, not the upgrade." },
  { version: "v2.1", date: "Aug 17, 2026", title: "Security hardening", desc: "Added Helmet and rate limiting to the API layer, plus a 51-test Jest suite covering core service logic.", lesson: "Test coverage and hardening aren't a phase after launch — they're what makes launch trustworthy." },
];

/* Engineering decisions */
const decisions = [
  {
    question: "Why split into React + Node + Django?",
    answer: "Node handles auth, CRUD, files, and app orchestration while Django hosts ML inference where Python libraries are strongest. This separation keeps boundaries clear and deployments independent.",
  },
  {
    question: "Why both ML models and Gemini?",
    answer: "ML models produce structured numeric predictions for reliability, while Gemini explains those outputs and provides actionable guidance. Deterministic scoring first, narrative intelligence second.",
  },
];

/* Lightbox */
function Lightbox({ items, index, onClose }: { items: typeof heroShots; index: number; onClose: () => void }) {
  const [idx, setIdx] = useState(index);

  const s = items[idx];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-8 cursor-pointer"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} key={idx}
        className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={s.src} alt={s.label} width={1400} height={900}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[13px] text-white/80">{s.label}</span>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-white/50">{idx + 1}/{items.length}</span>
            <button onClick={onClose} className="text-[12px] text-white/70 hover:text-white cursor-pointer">Close</button>
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

export default function PathPilotShowcase() {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);

  return (
    <>
      <AnimatePresence>
        {lbIdx !== null && <Lightbox items={heroShots} index={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SR>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.1em]">Featured Product</span>
              <span className="h-px flex-1 bg-border" />
            </div>
          </SR>

          <SR delay={0.05}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text leading-[1]">PathPilot AI</h2>
                <p className="text-[14px] text-text-secondary mt-2">Career Readiness Intelligence Platform</p>
              </div>
              <a href="https://pathpilot.kreesh.me" target="_blank" rel="noopener noreferrer"
                className="text-[13px] font-medium text-accent hover:text-accent/80 transition-colors self-start md:self-auto">pathpilot.kreesh.me →</a>
            </div>
          </SR>

          {/* Metrics bar */}
          <SR delay={0.08}>
            <div className="flex flex-wrap gap-8 mb-10 pb-6 border-b border-border">
              {[
                { label: "Users", value: "100+" },
                { label: "Resumes Analyzed", value: "100+" },
                { label: "Commits", value: "120+" },
                { label: "Build", value: "30+ days" },
                { label: "Architecture", value: "3 services" },
              ].map(m => (
                <div key={m.label}>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider">{m.label}</div>
                  <div className="text-[19px] font-bold text-text mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </SR>

          {/* Case study narrative */}
          <SR delay={0.1}>
            <div className="max-w-3xl mb-10">
              <p className="text-[16px] text-text-secondary leading-[1.75]">
                PathPilot AI unifies resume quality, role readiness, interview practice, and live opportunity tracking into one student workflow.
                The hard part was making multi-service AI feel simple and trustworthy in daily use, not just technically impressive.
                I shipped it through steady iteration over 120+ commits, balancing architecture discipline with product clarity.
              </p>
            </div>
          </SR>

          <SR delay={0.115}>
            <div className="panel p-5 md:p-6 mb-10 max-w-3xl">
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-4">Architecture Snapshot</div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-center mb-3">
                <div className="panel-inner p-3.5">
                  <div className="text-[13px] font-medium text-text">Browser</div>
                  <div className="text-[12px] text-text-secondary mt-1">React SPA</div>
                </div>
                <div className="text-accent text-center hidden lg:block">→</div>
                <div className="panel-inner p-3.5">
                  <div className="text-[13px] font-medium text-text">Node API</div>
                  <div className="text-[12px] text-text-secondary mt-1">Auth + Orchestration</div>
                </div>
                <div className="text-accent text-center hidden lg:block">→</div>
                <div className="panel-inner p-3.5">
                  <div className="text-[13px] font-medium text-text">Django ML</div>
                  <div className="text-[12px] text-text-secondary mt-1">7 model inference + SHAP</div>
                </div>
              </div>
              <p className="text-[12px] text-text-muted">MongoDB for persistence, Gemini for coaching, internal key gate between Node and Django.</p>
            </div>
          </SR>

          {/* ── Curated product screens ── */}
          <SR delay={0.12}>
            <h3 className="text-[11px] text-text-muted uppercase tracking-wider mb-4">Product Journey</h3>

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
              <div className="px-4 py-2.5 flex items-center justify-between border-t border-border">
                <span className="text-[12px] text-text-secondary">01. {heroShots[0].label} — {heroShots[0].why}</span>
                <span className="text-[11px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">Expand →</span>
              </div>
            </motion.div>

            {/* Supporting shots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
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
                  <div className="px-3 py-2.5 border-t border-border">
                    <div className="text-[12px] text-text-secondary mb-0.5">{String(i + 2).padStart(2, "0")}. {s.label}</div>
                    <div className="text-[11px] text-text-muted leading-[1.5]">{s.why}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SR>

          {/* ── System Evolution timeline ── */}
          <SR delay={0.1}>
            <div className="mb-12">
              <h3 className="text-[11px] text-text-muted uppercase tracking-wider mb-6">System Evolution</h3>
              <div className="relative">
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
                            <div className="relative shrink-0 mt-1.5 hidden md:block">
                              <span className={`block w-[9px] h-[9px] rounded-full border-2 ${isCurrent
                                  ? "bg-accent border-accent pulse-soft"
                                  : "bg-bg-elevated border-border group-hover:border-accent"
                                } transition-colors`} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-[12px] font-mono text-accent font-medium">{m.version}</span>
                                <span className="text-[12px] text-text-muted">{m.date}</span>
                                <span className="text-[14px] font-semibold text-text">{m.title}</span>
                                <span className="text-[13px] text-text-muted ml-auto">
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
                                <p className="text-[13px] text-text-secondary leading-[1.7] mb-2">{m.desc}</p>
                                <p className="text-[13px] text-text-muted italic pl-3 border-l-2 border-accent/25">
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
            <h3 className="text-[11px] text-text-muted uppercase tracking-wider mb-4">Engineering Decisions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {decisions.map(d => (
                <div key={d.question} className="panel p-4">
                  <h4 className="text-[14px] font-semibold text-text mb-2">{d.question}</h4>
                  <p className="text-[13px] text-text-secondary leading-[1.65]">{d.answer}</p>
                </div>
              ))}
            </div>
          </SR>

          {/* ── Feature Set ── */}
          <SR delay={0.1}><h3 className="text-[11px] text-text-muted uppercase tracking-wider mb-4">Feature Set</h3></SR>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {features.map((f, i) => (
              <SR key={f.label} delay={i * 0.02}>
                <div className="panel p-3.5 hover:border-border-hover transition-colors h-full">
                  <div className="text-[13px] font-medium text-text">{f.label}</div>
                  <div className="text-[12px] text-text-secondary mt-0.5">{f.detail}</div>
                </div>
              </SR>
            ))}
          </div>
          <SR delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {["React", "Vite", "Node", "Express", "MongoDB", "Django", "Gemini", "SHAP"].map((t) => (
                <span key={t} className="px-2.5 py-1 text-[12px] font-mono text-text-muted border border-border rounded">{t}</span>
              ))}
            </div>
          </SR>
        </div>
      </section>
    </>
  );
}
