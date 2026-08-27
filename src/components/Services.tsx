import React from "react";
import { Layers, Brain, Smartphone, Server, UserCheck, Blocks, Boxes } from "lucide-react";
import Reveal from "./Reveal";
import GlowGrid from "./GlowGrid";

/* Server Component. Every visual below is static markup; the only client code
   is GlowGrid's single delegated pointer listener. */

/* ─── Technical visuals ─── */

function VisualFullStack() {
  const rows = [
    { m: "GET",   p: "/api/orders",        s: "200", t: "34ms" },
    { m: "POST",  p: "/api/orders",        s: "201", t: "62ms" },
    { m: "GET",   p: "/api/customers/:id", s: "200", t: "21ms" },
    { m: "PATCH", p: "/api/inventory",     s: "200", t: "48ms" },
  ];
  return (
    <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] overflow-hidden font-mono text-[10px]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-luxury-border">
        <span className="w-2 h-2 rounded-full bg-red-500/60" />
        <span className="w-2 h-2 rounded-full bg-amber-500/60" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-luxury-muted/70 tracking-wider">api · production</span>
      </div>
      <div className="divide-y divide-[color:var(--card-border)]">
        {rows.map((r) => (
          <div key={r.m + r.p} className="flex items-center gap-3 px-3 py-2">
            <span className="w-12 text-accent-purple font-bold">{r.m}</span>
            <span className="flex-1 text-luxury-muted truncate">{r.p}</span>
            <span className="text-emerald-400 font-bold">{r.s}</span>
            <span className="w-12 text-right text-luxury-muted/60">{r.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualAI() {
  const chain = ["Request comes in", "AI agent decides", "Uses your tools + data", "Action taken"];
  return (
    <div className="flex flex-col gap-2">
      {chain.map((step, i) => (
        <div key={step} className="flex items-center gap-2.5">
          <div className="flex flex-col items-center">
            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center text-[9px] font-mono font-bold ${
              i === 1
                ? "border-accent-purple/60 bg-accent-purple/10 text-accent-purple"
                : "border-luxury-border bg-luxury-gray/40 text-luxury-muted"
            }`}>{i + 1}</div>
            {i < chain.length - 1 && <div className="w-[1px] h-3 bg-luxury-border" />}
          </div>
          <span className={`text-[11px] font-semibold ${i === 1 ? "text-accent-purple" : "text-luxury-muted"}`}>
            {step}
          </span>
          {i === 1 && <span className="live-dot text-accent-purple ml-auto" />}
        </div>
      ))}
      <div className="mt-2 pt-2.5 border-t border-luxury-border text-[9px] font-mono text-luxury-muted/70 tracking-wider uppercase">
        Runs without anyone doing it manually
      </div>
    </div>
  );
}

function VisualApps() {
  return (
    <div className="flex items-end justify-center gap-4">
      <div className="flex-1 max-w-[190px] rounded-lg border border-luxury-border bg-[color:var(--card-bg-solid)] overflow-hidden">
        <div className="flex gap-1 px-2 py-1.5 border-b border-luxury-border">
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-muted/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-muted/40" />
        </div>
        <div className="p-2.5 flex flex-col gap-1.5">
          <div className="h-6 rounded bg-accent-purple/15 border border-accent-purple/25" />
          <div className="h-1.5 w-3/4 rounded bg-luxury-muted/25" />
          <div className="h-1.5 w-full rounded bg-luxury-muted/15" />
          <div className="grid grid-cols-3 gap-1 mt-1">
            <div className="h-6 rounded bg-luxury-gray/60 border border-luxury-border" />
            <div className="h-6 rounded bg-luxury-gray/60 border border-luxury-border" />
            <div className="h-6 rounded bg-luxury-gray/60 border border-luxury-border" />
          </div>
        </div>
      </div>
      <div className="w-[68px] rounded-[14px] border-2 border-luxury-border bg-[color:var(--card-bg-solid)] p-1.5 flex flex-col gap-1.5">
        <div className="w-6 h-1 rounded-full bg-luxury-muted/30 mx-auto" />
        <div className="h-5 rounded bg-accent-cyan/15 border border-accent-cyan/25" />
        <div className="h-1 w-3/4 rounded bg-luxury-muted/25" />
        <div className="h-1 w-full rounded bg-luxury-muted/15" />
        <div className="h-4 rounded bg-luxury-gray/60 border border-luxury-border" />
        <div className="h-4 rounded bg-luxury-gray/60 border border-luxury-border" />
      </div>
    </div>
  );
}

function VisualCloud() {
  const services = [
    { name: "Logins", detail: "who can see what" },
    { name: "Database", detail: "where your data lives" },
    { name: "Files", detail: "documents & media" },
    { name: "Scheduled jobs", detail: "runs on its own" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {services.map((s) => (
        <div key={s.name} className="rounded-lg border border-luxury-border bg-luxury-gray/40 px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-bold text-foreground">{s.name}</span>
          </div>
          <div className="text-[9px] font-mono text-luxury-muted/70">{s.detail}</div>
        </div>
      ))}
    </div>
  );
}

function VisualFounderLed() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-[9px] font-mono uppercase tracking-wider text-luxury-muted/60 mb-2">Typical agency</div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {["You", "Sales", "Manager", "Team"].map((n, i, a) => (
            <React.Fragment key={n}>
              <span className="px-2 py-1 rounded border border-luxury-border bg-luxury-gray/30 text-[9px] font-mono text-luxury-muted/60">{n}</span>
              {i < a.length - 1 && <span className="text-luxury-muted/30 text-[9px]">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-luxury-border" />
      <div>
        <div className="text-[9px] font-mono uppercase tracking-wider text-accent-cyan mb-2">Here</div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1.5 rounded border border-accent-cyan/40 bg-accent-cyan/10 text-[10px] font-mono font-bold text-accent-cyan">You</span>
          <span className="flex-1 h-[1px] bg-gradient-to-r from-accent-cyan to-accent-purple" />
          <span className="px-2.5 py-1.5 rounded border border-accent-purple/40 bg-accent-purple/10 text-[10px] font-mono font-bold text-accent-purple">The builder</span>
        </div>
      </div>
    </div>
  );
}

function VisualScalable() {
  return (
    <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] p-4 font-mono text-[10px] leading-relaxed">
      <div className="text-accent-purple mb-1.5">{"// adding features shouldn't mean starting over"}</div>
      <div className="text-luxury-muted">{"export const system = {"}</div>
      <div className="pl-4 text-luxury-muted/80">{"parts:     "}<span className="text-accent-cyan">{"'swappable'"}</span>,</div>
      <div className="pl-4 text-luxury-muted/80">{"handover:  "}<span className="text-accent-cyan">{"'documented'"}</span>,</div>
      <div className="pl-4 text-luxury-muted/80">{"capacity:  "}<span className="text-accent-cyan">{"'grows on demand'"}</span>,</div>
      <div className="pl-4 text-luxury-muted/80">{"ownership: "}<span className="text-emerald-400">{"'yours'"}</span>,</div>
      <div className="text-luxury-muted">{"}"}</div>
    </div>
  );
}

/* ─── Capabilities ─── */

const SERVICES = [
  {
    title: "Full Stack Development",
    plain: "The complete system — what customers see, and everything running behind it.",
    description: "Complete platforms, APIs, dashboards and business applications built around real workflows.",
    icon: Layers, tag: "PLATFORMS",
    glow: "rgba(134, 92, 255, 0.09)", span: "lg:col-span-7", Visual: VisualFullStack,
  },
  {
    title: "AI & Automation Systems",
    plain: "Software that handles the repetitive work your team does by hand today.",
    description: "AI-powered workflows and intelligent automation that reduce repetitive work.",
    icon: Brain, tag: "INTELLIGENCE",
    glow: "rgba(0, 242, 254, 0.09)", span: "lg:col-span-5", Visual: VisualAI,
  },
  {
    title: "Mobile & Web Applications",
    plain: "Apps your customers use, and apps your staff use to run the business.",
    description: "Modern applications for customers, employees and internal business operations.",
    icon: Smartphone, tag: "PRODUCT",
    glow: "rgba(236, 72, 153, 0.08)", span: "lg:col-span-5", Visual: VisualApps,
  },
  {
    title: "Cloud Backend Infrastructure",
    plain: "The engine room — where your data lives and how everything stays secure.",
    description: "Secure APIs, databases, authentication, integrations and scalable infrastructure.",
    icon: Server, tag: "INFRASTRUCTURE",
    glow: "rgba(16, 185, 129, 0.08)", span: "lg:col-span-7", Visual: VisualCloud,
  },
  {
    title: "Founder-Led Projects",
    plain: "You talk to the person writing the code, not a middle layer.",
    description: "Direct communication with the person actually designing and building the system.",
    icon: UserCheck, tag: "PARTNERSHIP",
    glow: "rgba(59, 130, 246, 0.08)", span: "lg:col-span-6", Visual: VisualFounderLed,
  },
  {
    title: "Modern Scalable Solutions",
    plain: "Built so version two is an addition, not an expensive rebuild.",
    description: "Clean, maintainable technology designed to grow with the business.",
    icon: Blocks, tag: "ARCHITECTURE",
    glow: "rgba(245, 158, 11, 0.08)", span: "lg:col-span-6", Visual: VisualScalable,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-luxury-bg overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Boxes className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            What We Build
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Technology built around your business — described in plain terms first,
            with the technical detail underneath.
          </p>
        </Reveal>

        <GlowGrid className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const Visual = s.Visual;
            return (
              <Reveal key={s.title} delay={(i % 2) * 80} className={`col-span-1 ${s.span}`}>
                <div
                  data-glow
                  style={{ "--glow": s.glow } as React.CSSProperties}
                  className="glow-card h-full glass-panel theme-card-shadow rounded-[24px] p-7 border border-luxury-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-luxury-border-hover"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-purple" />
                      </div>
                      <span className="text-[9px] font-bold tracking-widest text-luxury-muted/70 uppercase font-mono">{s.tag}</span>
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>

                    {/* Plain-language line first, technical line second */}
                    <p className="text-[13px] leading-relaxed text-foreground/85 font-medium mb-2.5">{s.plain}</p>
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted mb-6">{s.description}</p>

                    <div className="mt-auto pt-5 border-t border-luxury-border">
                      <Visual />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </GlowGrid>
      </div>
    </section>
  );
}
