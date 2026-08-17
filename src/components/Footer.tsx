"use client";

const liveProjects = [
  { name: "PathPilot AI", href: "https://pathpilot.kreesh.me" },
  { name: "Crictalx", href: "https://crictalx.kreesh.me" },
  { name: "BrainBrew", href: "https://brainbrew.kreesh.me" },
  { name: "SpiceGarden", href: "https://spicegarden.kreesh.me" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[12px] mb-5">
          <span className="text-text-muted">Live:</span>
          {liveProjects.map((p, i) => (
            <span key={p.name} className="flex items-center gap-2">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {p.name}
              </a>
              {i < liveProjects.length - 1 && <span className="text-border-hover">·</span>}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-border">
          <span className="text-[12px] text-text-muted">
            © {new Date().getFullYear()} Krish Shah
          </span>
          <div className="flex items-center gap-1 text-[12px]">
            <a href="https://github.com/Krishshah23" target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-3 px-2 text-text-muted hover:text-text transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/kreesh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-3 px-2 text-text-muted hover:text-text transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
