import React from "react";
import { UserCheck, Workflow, Gauge, ShieldCheck, FileText, TrendingUp, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

/* Server Component — every pillar visual is static markup + CSS. */

function VisualFounderLed() {
  const thread = [
    { who: "You", text: "Can we add approvals before dispatch?", mine: false },
    { who: "Karman", text: "Yes — one extra step on the order. Live tomorrow.", mine: true },
    { who: "You", text: "Perfect.", mine: false },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-2.5 max-w-[340px] w-full mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <span className="live-dot text-emerald-500" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-muted/70">
            Direct line · no account manager
          </span>
        </div>
        {thread.map((m) => (
          <div
            key={m.text}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 border text-[11px] leading-snug ${
              m.mine
                ? "self-end bg-accent-purple/10 border-accent-purple/25 text-foreground"
                : "self-start bg-luxury-gray/50 border-luxury-border text-luxury-muted"
            }`}
          >
            <div className="text-[8px] font-mono uppercase tracking-wider opacity-60 mb-1">{m.who}</div>
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualBusinessFirst() {
  const rows = [
    { real: "Customer enquires", built: "Lead capture + routing" },
    { real: "Team quotes the job", built: "Quote builder + approvals" },
    { real: "Work gets scheduled", built: "Jobs board + reminders" },
    { real: "Invoice goes out", built: "Billing + payment link" },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-2 w-full max-w-[380px] mx-auto">
        <div className="grid grid-cols-2 gap-3 text-[8px] font-mono uppercase tracking-widest text-luxury-muted/60 mb-1 px-1">
          <span>How you work</span>
          <span className="text-accent-cyan">What we build</span>
        </div>
        {rows.map((r) => (
          <div key={r.real} className="grid grid-cols-2 gap-3 items-center">
            <span className="rounded-lg border border-luxury-border bg-luxury-gray/40 px-2.5 py-2 text-[10px] text-luxury-muted leading-tight">
              {r.real}
            </span>
            <span className="rounded-lg border border-accent-cyan/25 bg-accent-cyan/5 px-2.5 py-2 text-[10px] text-foreground leading-tight">
              {r.built}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualPerformanceFirst() {
  const bars = [
    { label: "Performance", value: 99, color: "from-emerald-400 to-emerald-500" },
    { label: "Accessibility", value: 96, color: "from-accent-cyan to-accent-blue" },
    { label: "Best Practices", value: 100, color: "from-accent-purple to-accent-pink" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 w-full max-w-[300px] flex flex-col gap-4">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-muted">{b.label}</span>
              <span className="text-sm font-black text-foreground font-mono">{b.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-luxury-gray overflow-hidden">
              <div className={`h-full rounded-full bg-gradient-to-r ${b.color}`} style={{ width: `${b.value}%` }} />
            </div>
          </div>
        ))}
        <div className="border-t border-luxury-border pt-3 mt-1 text-center">
          <span className="text-[9px] font-mono uppercase tracking-widest text-luxury-muted/70">
            Measured, not promised
          </span>
        </div>
      </div>
    </div>
  );
}

function VisualReliable() {
  const checks = [
    { label: "Handles real traffic", state: "pass" },
    { label: "Recovers from errors", state: "pass" },
    { label: "Works on slow networks", state: "pass" },
    { label: "Tested before launch", state: "pass" },
    { label: "Monitored after launch", state: "pass" },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 w-full max-w-[300px] rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] overflow-hidden">
        <div className="px-4 py-3 border-b border-luxury-border flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Built for real use</span>
          <span className="live-dot text-emerald-500" />
        </div>
        <div className="divide-y divide-[color:var(--card-border)]">
          {checks.map((c) => (
            <div key={c.label} className="flex items-center gap-2.5 px-4 py-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-[10.5px] text-luxury-muted flex-1">{c.label}</span>
              <span className="text-[9px] font-mono uppercase text-emerald-400">ok</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualTransparent() {
  const lines = [
    { k: "Scope", v: "listed, module by module" },
    { k: "Timeline", v: "dated milestones" },
    { k: "Price", v: "agreed up front" },
    { k: "Changes", v: "quoted before work" },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 w-full max-w-[300px] rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] overflow-hidden">
        <div className="px-4 py-3 border-b border-luxury-border flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground">Project scope</span>
          <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400">Agreed</span>
        </div>
        <div className="divide-y divide-[color:var(--card-border)]">
          {lines.map((l) => (
            <div key={l.k} className="flex items-center justify-between px-4 py-2.5 gap-3">
              <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-wider flex-shrink-0">{l.k}</span>
              <span className="text-[10px] text-foreground font-semibold text-right">{l.v}</span>
            </div>
          ))}
        </div>
        <div className="px-4 py-2.5 border-t border-luxury-border text-[9px] font-mono text-luxury-muted/60">
          No line item you have not seen.
        </div>
      </div>
    </div>
  );
}

function VisualScalable() {
  const stages = [
    { v: "v1", label: "Launch", note: "core system live" },
    { v: "v2", label: "Extend", note: "new features added" },
    { v: "v3", label: "Scale", note: "more load, same base" },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50 pointer-events-none" />
      <div className="relative z-10 flex flex-col w-full max-w-[300px]">
        {stages.map((s, i) => (
          <div key={s.v} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full border border-accent-purple/40 bg-accent-purple/10 flex items-center justify-center text-[10px] font-mono font-bold text-accent-purple flex-shrink-0">
                {s.v}
              </div>
              {i < stages.length - 1 && (
                <div className="w-[1.5px] flex-1 min-h-[26px] bg-gradient-to-b from-accent-purple/40 to-accent-cyan/20" />
              )}
            </div>
            <div className="pb-6">
              <div className="text-[12px] font-bold text-foreground leading-tight">{s.label}</div>
              <div className="text-[9px] font-mono text-luxury-muted/70 mt-0.5">{s.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PILLARS = [
  {
    title: "Founder-Led",
    subtitle: "Talk to the builder",
    description: "Direct communication with the builder. No account manager relaying your requirements to someone you never meet.",
    icon: UserCheck, Visual: VisualFounderLed,
  },
  {
    title: "Business-First",
    subtitle: "Workflow before technology",
    description: "We understand the workflow before choosing the technology. The stack is picked to fit how you actually work — never the other way round.",
    icon: Workflow, Visual: VisualBusinessFirst,
  },
  {
    title: "Performance-First",
    subtitle: "Speed is designed in",
    description: "Speed is designed into the product from the beginning, not bolted on at the end when it's expensive to fix.",
    icon: Gauge, Visual: VisualPerformanceFirst,
  },
  {
    title: "Reliable",
    subtitle: "Built for real conditions",
    description: "Systems are built for real-world use, not just demonstrations — slow networks, awkward inputs, and the days everything happens at once.",
    icon: ShieldCheck, Visual: VisualReliable,
  },
  {
    title: "Transparent",
    subtitle: "Nothing hidden",
    description: "Clear scope, timeline and pricing agreed before work starts. You always know what is being built and what it costs.",
    icon: FileText, Visual: VisualTransparent,
  },
  {
    title: "Scalable",
    subtitle: "Room to grow",
    description: "Architecture designed for future features and growth, so the next version is an addition rather than a rebuild.",
    icon: TrendingUp, Visual: VisualScalable,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-28 bg-services-bg border-y border-luxury-border">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-luxury-border bg-luxury-gray/30 backdrop-blur-md w-fit mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-luxury-muted">
              Why Work With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Built Different. <span className="glow-text-blue-purple">Built for What Matters.</span>
          </h2>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 lg:gap-28">
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          const Visual = pillar.Visual;
          const isEven = index % 2 === 0;

          return (
            <div
              key={pillar.title}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
            >
              <Reveal variant={isEven ? "left" : "right"} className="w-full lg:w-1/2">
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-accent-purple uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-luxury-muted text-sm sm:text-base leading-relaxed max-w-xl">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>

              <Reveal variant="scale" delay={120} className="w-full lg:w-1/2">
                <div className="h-[320px] sm:h-[380px] relative p-[1px] rounded-2xl bg-gradient-to-tr from-white/10 to-transparent shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <Visual />
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
