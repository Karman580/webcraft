import React from "react";
import { Cpu, User, MonitorSmartphone, Brain, Plug, Database, CheckCircle2 } from "lucide-react";
import * as simpleIcons from "simple-icons";
import Reveal from "./Reveal";
import TechExplorer, { type ResolvedCategory } from "./TechExplorer";
import { TECH_CATEGORIES } from "@/lib/tech";

/* Server Component. simple-icons is resolved here, at build time, so the whole
   3,400-icon library stays out of the browser bundle — only the ~30 brand paths
   this page renders get serialised into the payload. */

type IconRecord = { title: string; hex: string; path: string };
const ICONS = simpleIcons as unknown as Record<string, IconRecord | undefined>;

const RESOLVED: ResolvedCategory[] = TECH_CATEGORIES.map((cat) => ({
  id: cat.id,
  name: cat.name,
  blurb: cat.blurb,
  techs: cat.techs.map((t) => {
    const brand = t.si ? ICONS[t.si] : undefined;
    return brand
      ? { name: t.name, path: brand.path, hex: brand.hex, brand: brand.title }
      : { name: t.name, icon: t.icon };
  }),
}));

const FLOW = [
  { label: "User",            sub: "a real person",        icon: User },
  { label: "Web / Mobile / Voice", sub: "how they reach you", icon: MonitorSmartphone },
  { label: "AI / Application", sub: "works out what to do", icon: Brain },
  { label: "API",             sub: "the connecting layer",  icon: Plug },
  { label: "Database / Tools", sub: "your data and systems", icon: Database },
  { label: "Business Action",  sub: "something actually happens", icon: CheckCircle2 },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-28 bg-services-bg overflow-hidden border-y border-luxury-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Technology Ecosystem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight glow-text-primary mb-6">
            Modern Technology. Built for What Comes Next.
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Technology is the tool. Solving the business problem is the goal.
          </p>
        </Reveal>

        {/* How it works together */}
        <Reveal variant="fade" className="max-w-6xl mx-auto mb-16">
          <div className="glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-muted/60 font-mono mb-6 text-center">
                What happens when someone contacts your business
              </h3>

              <ol className="flex flex-col lg:flex-row lg:items-stretch gap-2 lg:gap-0">
                {FLOW.map((stage, i) => {
                  const Icon = stage.icon;
                  const isLast = i === FLOW.length - 1;
                  return (
                    <React.Fragment key={stage.label}>
                      <li className="flex-1 min-w-0">
                        <div
                          className={`h-full rounded-xl border px-3 py-4 flex flex-col items-center text-center gap-1.5 ${
                            isLast
                              ? "border-emerald-500/30 bg-emerald-500/5"
                              : "border-luxury-border bg-luxury-gray/35"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isLast ? "text-emerald-400" : "text-accent-cyan"}`} />
                          <span className="text-[11px] font-bold text-foreground leading-tight">{stage.label}</span>
                          <span className="text-[9px] font-mono text-luxury-muted/70 leading-tight">{stage.sub}</span>
                        </div>
                      </li>

                      {!isLast && (
                        <li
                          aria-hidden="true"
                          className="flex items-center justify-center text-luxury-muted/40 text-xs px-1 lg:px-1.5 rotate-90 lg:rotate-0"
                        >
                          →
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>

        {/* Interactive explorer */}
        <Reveal variant="fade">
          <TechExplorer categories={RESOLVED} />
        </Reveal>
      </div>
    </section>
  );
}
