import {
  Globe, Smartphone, Brain, Code2, Cloud,
  Users, Database, Settings2, Workflow,
  Network, ArrowDown, UserCheck, Receipt, Layers3,
} from "lucide-react";
import Reveal from "./Reveal";

/* Server Component. The whole diagram is static SVG + CSS; the only client
   code involved is the shared Reveal observer wrapping it. */

const NODE_W = 186;
const NODE_H = 54;

const INPUTS = [
  { label: "Website",  sub: "Presence & conversion",   icon: Globe,      y: 45  },
  { label: "Mobile",   sub: "Apps in the hand",        icon: Smartphone, y: 129 },
  { label: "AI",       sub: "Agents & automation",     icon: Brain,      y: 213 },
  { label: "Software", sub: "Custom platforms",        icon: Code2,      y: 297 },
  { label: "Cloud",    sub: "APIs & infrastructure",   icon: Cloud,      y: 381 },
];

const OUTPUTS = [
  { label: "Customers",  sub: "Reach & retention",      icon: Users,     y: 81  },
  { label: "Data",       sub: "Visibility & insight",   icon: Database,  y: 169 },
  { label: "Operations", sub: "Running smoothly",       icon: Settings2, y: 257 },
  { label: "Automation", sub: "Work that runs itself",  icon: Workflow,  y: 345 },
];

const TRUST_POINTS = [
  { title: "Founder-led", body: "Direct communication with the person actually designing and building the system.", icon: UserCheck },
  { title: "Transparent scope & pricing", body: "Clear deliverables and clear timelines, agreed before any work starts.", icon: Receipt },
  { title: "Modern, scalable technology", body: "Architecture chosen to grow with the business, not to box it in.", icon: Layers3 },
];

function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 1000 480"
      className="w-full h-auto"
      role="img"
      aria-label="Website, mobile, AI, software and cloud connect into your business, producing customers, data, operations and automation"
    >
      <defs>
        <linearGradient id="sys-in" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="sys-out" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent-pink)" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="hub-glow">
          <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Flow lines in */}
      {INPUTS.map((n, i) => (
        <path
          key={`in-${n.label}`}
          d={`M 210 ${n.y + NODE_H / 2} C 300 ${n.y + NODE_H / 2}, 310 240, 400 240`}
          fill="none" stroke="url(#sys-in)" strokeWidth="1.5"
          className="flow-line" style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Flow lines out */}
      {OUTPUTS.map((n, i) => (
        <path
          key={`out-${n.label}`}
          d={`M 600 240 C 690 240, 700 ${n.y + NODE_H / 2}, 790 ${n.y + NODE_H / 2}`}
          fill="none" stroke="url(#sys-out)" strokeWidth="1.5"
          className="flow-line" style={{ animationDelay: `${i * 0.55}s` }}
        />
      ))}

      {/* Inputs */}
      {INPUTS.map((n, i) => (
        <g key={n.label} className="sys-node" style={{ "--from": "-16px", animationDelay: `${i * 80}ms` } as React.CSSProperties}>
          <rect x="24" y={n.y} width={NODE_W} height={NODE_H} rx="12"
            fill="var(--card-bg-solid)" stroke="var(--card-border)" strokeWidth="1" />
          <circle cx="52" cy={n.y + 27} r="4" fill="var(--accent-cyan)" opacity="0.9" />
          <text x="72" y={n.y + 24} fill="var(--foreground)" fontSize="14" fontWeight="700">{n.label}</text>
          <text x="72" y={n.y + 40} fill="var(--text-muted)" fontSize="10" fontFamily="ui-monospace, monospace">{n.sub}</text>
        </g>
      ))}

      {/* Hub */}
      <circle cx="500" cy="240" r="150" fill="url(#hub-glow)" />
      <g className="sys-node" style={{ animationDelay: "260ms" }}>
        <rect x="400" y="180" width="200" height="120" rx="20"
          fill="var(--card-bg-solid)" stroke="var(--accent-purple)" strokeWidth="1.5" />
        <text x="500" y="222" textAnchor="middle" fill="var(--text-muted)" fontSize="9"
          fontFamily="ui-monospace, monospace" letterSpacing="2">CONNECTED INTO</text>
        <text x="500" y="252" textAnchor="middle" fill="var(--foreground)" fontSize="21" fontWeight="800">Your Business</text>
        <text x="500" y="276" textAnchor="middle" fill="var(--accent-cyan)" fontSize="9"
          fontFamily="ui-monospace, monospace" letterSpacing="1.5">ONE SYSTEM · NOT SIX TOOLS</text>
      </g>

      {/* Outputs */}
      {OUTPUTS.map((n, i) => (
        <g key={n.label} className="sys-node" style={{ "--from": "16px", animationDelay: `${360 + i * 80}ms` } as React.CSSProperties}>
          <rect x="790" y={n.y} width={NODE_W} height={NODE_H} rx="12"
            fill="var(--card-bg-solid)" stroke="var(--card-border)" strokeWidth="1" />
          <circle cx="818" cy={n.y + 27} r="4" fill="var(--accent-pink)" opacity="0.9" />
          <text x="838" y={n.y + 24} fill="var(--foreground)" fontSize="14" fontWeight="700">{n.label}</text>
          <text x="838" y={n.y + 40} fill="var(--text-muted)" fontSize="10" fontFamily="ui-monospace, monospace">{n.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function StackedNode({
  icon: Icon, label, sub, accent,
}: { icon: React.ComponentType<{ className?: string }>; label: string; sub: string; accent: string }) {
  return (
    <div className="glass-panel rounded-xl border border-luxury-border px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-luxury-gray/50 border border-luxury-border flex items-center justify-center flex-shrink-0">
        <Icon className={`w-4 h-4 ${accent}`} />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold text-foreground leading-tight">{label}</div>
        <div className="text-[9px] font-mono text-luxury-muted/80 truncate">{sub}</div>
      </div>
    </div>
  );
}

export default function ConnectedSystem() {
  return (
    <section id="system" className="relative py-16 sm:py-24 bg-services-bg border-y border-luxury-border overflow-hidden">
      <div className="absolute inset-0 mesh-grid-lg opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Network className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Connected Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Everything Talks to Everything
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            We don&apos;t build isolated websites. Website, mobile, AI, software and cloud become
            one connected business system — so work flows between them instead of stopping at
            each one.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          <Reveal variant="fade" className="hidden lg:block">
            <div className="glass-panel theme-card-shadow rounded-3xl border border-luxury-border p-8 relative overflow-hidden">
              <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />
              <div className="relative z-10">
                <SystemDiagram />
              </div>
            </div>
          </Reveal>

          {/* Mobile: same story, stacked */}
          <div className="lg:hidden flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INPUTS.map((n) => (
                <StackedNode key={n.label} icon={n.icon} label={n.label} sub={n.sub} accent="text-accent-cyan" />
              ))}
            </div>

            <ArrowDown className="w-5 h-5 text-accent-purple mx-auto" aria-hidden="true" />

            <div className="rounded-2xl border border-accent-purple/50 bg-luxury-dark px-5 py-6 text-center">
              <div className="text-[9px] font-mono tracking-[0.2em] text-luxury-muted uppercase mb-1.5">Connected Into</div>
              <div className="text-xl font-black text-foreground">Your Business</div>
              <div className="text-[9px] font-mono tracking-wider text-accent-cyan mt-1.5 uppercase">One system · not six tools</div>
            </div>

            <ArrowDown className="w-5 h-5 text-accent-pink mx-auto" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {OUTPUTS.map((n) => (
                <StackedNode key={n.label} icon={n.icon} label={n.label} sub={n.sub} accent="text-accent-pink" />
              ))}
            </div>
          </div>
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-16">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 90}>
                <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 hover:border-luxury-border-hover transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-accent-purple" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">{point.title}</h3>
                  <p className="text-[12px] leading-relaxed text-luxury-muted">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
