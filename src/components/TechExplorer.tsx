"use client";

import { useState } from "react";
import {
  Code2, MonitorSmartphone, Server, Smartphone, Brain, Database, Cloud, Plug,
  Bot, Network, Search, AudioLines, Mic, Volume2, FileText, Workflow,
  Mail, Lock, CreditCard, Map, Users, Webhook, Activity, HardDrive,
  GitBranch, Layers, Terminal, Zap, MessageSquare, Globe, Coffee, X,
} from "lucide-react";
import type { GenericIcon } from "@/lib/tech";
import { useScrollLock } from "@/lib/useScrollLock";

/* Brand marks arrive pre-resolved from the server, so simple-icons itself
   never ships to the browser — only the paths this page uses. */

export interface ResolvedTech {
  name: string;
  /** SVG path data for the official brand mark, when there is one. */
  path?: string;
  /** Official brand colour, e.g. "F7DF1E". */
  hex?: string;
  /** Official name as registered by the brand, e.g. "Node.js". */
  brand?: string;
  icon?: GenericIcon;
}

export interface ResolvedCategory {
  id: string;
  name: string;
  blurb: string;
  techs: ResolvedTech[];
}

const GENERIC: Record<GenericIcon, React.ComponentType<{ className?: string }>> = {
  brain: Brain, bot: Bot, network: Network, search: Search, audio: AudioLines,
  mic: Mic, speaker: Volume2, fileText: FileText, workflow: Workflow,
  database: Database, cloud: Cloud, plug: Plug, smartphone: Smartphone,
  code: Code2, mail: Mail, lock: Lock, creditCard: CreditCard, map: Map,
  users: Users, webhook: Webhook, activity: Activity, hardDrive: HardDrive,
  gitBranch: GitBranch, layers: Layers, terminal: Terminal, zap: Zap,
  messageSquare: MessageSquare, server: Server, globe: Globe, coffee: Coffee,
};

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  languages: Code2, frontend: MonitorSmartphone, backend: Server, mobile: Smartphone,
  ai: Brain, data: Database, cloud: Cloud, integrations: Plug,
};

/* Very dark brand marks (Next.js, Vercel) vanish on the dark theme. */
function displayColor(hex?: string) {
  if (!hex) return undefined;
  const n = parseInt(hex, 16);
  const luma = 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  return luma < 40 ? "currentColor" : `#${hex}`;
}

function TechMark({ tech, size }: { tech: ResolvedTech; size: number }) {
  if (tech.path) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={displayColor(tech.hex)}
        role="img"
        aria-label={`${tech.brand ?? tech.name} logo`}
        className="flex-shrink-0"
      >
        <path d={tech.path} />
      </svg>
    );
  }
  const Icon = GENERIC[tech.icon ?? "code"];
  return <Icon className="flex-shrink-0 text-luxury-muted" />;
}

export default function TechExplorer({ categories }: { categories: ResolvedCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [selected, setSelected] = useState<ResolvedTech | null>(null);

  useScrollLock(selected !== null);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const ActiveIcon = CATEGORY_ICONS[active.id] ?? Code2;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
        {/* Category rail */}
        <div className="lg:col-span-4">
          <div className="no-scrollbar flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id] ?? Code2;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveId(cat.id); setSelected(null); }}
                  aria-pressed={isActive}
                  className={`snap-start flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 cursor-pointer flex-shrink-0 lg:w-full ${
                    isActive
                      ? "border-accent-purple/50 bg-accent-purple/10"
                      : "border-luxury-border bg-luxury-gray/30 hover:border-luxury-border-hover hover:bg-luxury-gray/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-accent-purple" : "text-luxury-muted"}`} />
                  <span className={`text-[12px] font-bold whitespace-nowrap ${isActive ? "text-foreground" : "text-luxury-muted"}`}>
                    {cat.name}
                  </span>
                  <span className={`ml-auto text-[9px] font-mono hidden lg:block ${isActive ? "text-accent-purple" : "text-luxury-muted/50"}`}>
                    {cat.techs.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-8">
          <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-7 relative overflow-hidden min-h-[320px]">
            <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center">
                  <ActiveIcon className="w-4.5 h-4.5 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-tight">{active.name}</h3>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-luxury-muted/60">
                    {active.techs.length} technologies · tap any for detail
                  </span>
                </div>
              </div>

              <p className="text-[12.5px] leading-relaxed text-luxury-muted mb-6 max-w-lg">{active.blurb}</p>

              <div className="flex flex-wrap gap-2">
                {active.techs.map((t, i) => (
                  <button
                    key={`${t.name}-${i}`}
                    onClick={() => setSelected(t)}
                    className="group flex items-center gap-2 bg-luxury-gray/40 border border-luxury-border rounded-lg pl-2.5 pr-3 py-2.5 sm:py-2 text-[11px] sm:text-[10.5px] font-mono text-luxury-muted hover:text-foreground hover:border-luxury-border-hover hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 grayscale group-hover:grayscale-0 transition-[filter] duration-200">
                      <TechMark tech={t} size={16} />
                    </span>
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech detail */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} detail`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-3xl glass-panel border border-luxury-border bg-luxury-dark/95 p-8 shadow-2xl relative fade-in"
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-3 p-2.5 rounded-full bg-luxury-gray/40 border border-luxury-border text-luxury-muted hover:text-foreground hover:border-luxury-border-hover transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-services-bg border border-luxury-border flex items-center justify-center mb-6 [&>svg]:w-12 [&>svg]:h-12">
                <TechMark tech={selected} size={48} />
              </div>

              <h3 className="text-xl font-black text-foreground mb-1.5">{selected.name}</h3>

              {selected.brand && selected.brand !== selected.name && (
                <p className="text-[11px] font-mono text-luxury-muted/70 mb-3">
                  Official name: {selected.brand}
                </p>
              )}

              <span className="inline-flex items-center gap-2 rounded-full border border-luxury-border bg-luxury-gray/40 px-3 py-1">
                {selected.hex ? (
                  <>
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ background: `#${selected.hex}` }}
                    />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-luxury-muted">
                      Official logo · #{selected.hex}
                    </span>
                  </>
                ) : (
                  <span className="text-[9px] font-mono uppercase tracking-wider text-luxury-muted">
                    {active.name}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
