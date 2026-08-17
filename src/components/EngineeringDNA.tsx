"use client";

import SR from "./ui/ScrollReveal";

const patterns = [
  "Real-time, stateful features over simple request-response — BrainBrew's live quiz battles needed this, not just a nice-to-have",
  "Start small and let real usage dictate structure — Crictalx began as one Flask route with hardcoded polls before anything else got built",
  "Split services along what they're actually good at, not convenience — PathPilot keeps Node for orchestration and Django for ML instead of forcing one stack to do both",
  "Treat scoring and ranking logic as core infrastructure, not a feature bolted on later — it's the backbone of both Crictalx and BrainBrew",
  "Watch behavior before redesigning around it — Crictalx's self-explanatory redesign came from seeing where people actually dropped off, not guessing",
];

const problems = [
  "Compressing messy, multi-factor data into one number someone can act on — PathPilot's Path Score",
  "Making a product people come back to the next day for reasons besides new features — Crictalx's streak mechanic",
  "Keeping many users' state consistent in real time — BrainBrew's quiz battles",
  "Turning a manual, ad-hoc process into something a system can just do — PathPilot's roadmap and job matching",
  "Figuring out what actually drives engagement versus what just looks like it should — confidence scoring beat badges in BrainBrew",
];

const workbench = [
  {
    name: "PathPilot AI Hardening",
    status: "active",
    desc: "Security hardening, test coverage, and architecture cleanup post-v2.1",
    progress: 70,
  },
  {
    name: "DSA",
    status: "learning",
    desc: "Data structures and algorithms — building problem-solving fluency",
    progress: 25,
  },
  {
    name: "Exploring ML",
    status: "exploring",
    desc: "Regression, classification, and model evaluation — building to understand",
    progress: 30,
  },
];

const stack: Record<string, string[]> = {
  "Languages": ["Java", "Python", "JavaScript", "SQL"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "Backend": ["Node.js", "Express.js", "Flask", "Django", "REST APIs"],
  "Databases": ["MongoDB", "SQLite", "SQL"],
  "ML": ["Scikit-learn", "XGBoost", "CatBoost", "LightGBM", "Random Forest", "SHAP"],
  "Other": ["JWT", "Multer", "Firebase Auth", "Google Gemini API"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Vercel"],
};

const statusStyle: Record<string, string> = {
  active: "text-accent",
  learning: "text-text-secondary",
  exploring: "text-accent",
};

export default function EngineeringDNA() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SR>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-medium text-text-muted uppercase tracking-[0.1em]">
              Stack &amp; Approach
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-text mb-12">
            Engineering DNA
          </h2>
        </SR>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Systems patterns */}
          <SR>
            <div>
              <h3 className="text-[12px] font-medium text-accent uppercase tracking-wider mb-5">
                Systems Patterns I Gravitate Toward
              </h3>
              <div className="space-y-2.5">
                {patterns.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-[14px] text-text-secondary leading-[1.6]">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </SR>

          {/* Types of problems */}
          <SR delay={0.08}>
            <div>
              <h3 className="text-[12px] font-medium text-accent uppercase tracking-wider mb-5">
                Types of Problems I Enjoy
              </h3>
              <div className="space-y-2.5">
                {problems.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-[14px] text-text-secondary leading-[1.6]">
                    <span className="text-accent mt-0.5">→</span>
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
            <h3 className="text-[12px] font-medium text-text-muted uppercase tracking-wider mb-5">
              Current Workbench
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {workbench.map((item) => (
                <div key={item.name} className="panel p-4 md:p-5 hover:border-border-hover transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[14px] font-semibold text-text">{item.name}</h4>
                    <span className={`text-[11px] uppercase tracking-wider ${statusStyle[item.status]}`}>
                      {item.status} — {item.progress}%
                    </span>
                  </div>
                  <p className="text-[13px] text-text-secondary leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SR>

        {/* Tools — categorized stack, synced with resume */}
        <SR delay={0.08}>
          <h3 className="text-[12px] font-medium text-text-muted uppercase tracking-wider mb-5">
            Tools &amp; Technologies
          </h3>
          <div className="space-y-3">
            {Object.entries(stack).map(([cat, items]) => (
              <div key={cat} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-[12px] font-medium text-text-muted w-24 shrink-0">{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[12px] font-mono text-text-secondary border border-border rounded hover:border-border-hover hover:text-text transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SR>
      </div>
    </section>
  );
}
