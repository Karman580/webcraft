import React from "react";
import {
  PhoneCall, MessagesSquare, Workflow, Headphones, TrendingUp,
  CalendarCheck, BookOpen, Bot, Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import GlowGrid from "./GlowGrid";
import ScrollLink from "./ScrollLink";

/* Server Component. Business-language first: every capability leads with what
   it does for the owner, and only then names the technology. */

/* ─── Visuals for the three headline agents ─── */

function VisualCalling() {
  const bars = [7, 14, 22, 12, 26, 18, 9, 20, 28, 15, 11, 24, 8, 19, 13];
  return (
    <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="live-dot text-emerald-500" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">On a call</span>
        </div>
        <span className="text-[10px] font-mono text-luxury-muted/60">00:42</span>
      </div>

      <div className="flex items-center justify-center gap-[3px] h-9 mb-3" aria-hidden="true">
        {bars.map((h, i) => (
          <span key={i} className="w-[3px] rounded-full bg-accent-cyan/70" style={{ height: `${h}px` }} />
        ))}
      </div>

      <div className="space-y-1.5 text-[10px] font-mono border-t border-luxury-border pt-3">
        <div className="text-luxury-muted/70">Caller: &ldquo;Are you open on Sunday?&rdquo;</div>
        <div className="text-accent-cyan">Agent: answered · booking offered</div>
        <div className="text-accent-purple">→ handed to your team when asked</div>
      </div>
    </div>
  );
}

function VisualChatbot() {
  const thread = [
    { who: "them", text: "Do you deliver to Ludhiana?" },
    { who: "bot", text: "Yes — 2 to 3 days. Want me to check your pincode?" },
    { who: "them", text: "Yes please" },
  ];
  return (
    <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1 pb-2.5 border-b border-luxury-border">
        <MessagesSquare className="w-3.5 h-3.5 text-accent-purple" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-luxury-muted/70">Website · WhatsApp</span>
        <span className="ml-auto text-[9px] font-mono text-emerald-400">24/7</span>
      </div>
      {thread.map((m, i) => (
        <div
          key={i}
          className={`max-w-[85%] rounded-xl px-3 py-2 text-[10.5px] leading-snug border ${
            m.who === "bot"
              ? "self-start bg-accent-purple/10 border-accent-purple/25 text-foreground"
              : "self-end bg-luxury-gray/50 border-luxury-border text-luxury-muted"
          }`}
        >
          {m.text}
        </div>
      ))}
    </div>
  );
}

function VisualAutomation() {
  const tools = ["Enquiry", "CRM", "WhatsApp", "Email", "Invoice"];
  return (
    <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] p-4">
      <div className="text-[9px] font-mono uppercase tracking-wider text-luxury-muted/60 mb-3">
        One enquiry, five things done
      </div>
      <div className="flex flex-col gap-1.5">
        {tools.map((t, i) => (
          <div key={t} className="flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-accent-cyan" : "bg-emerald-400"}`} />
            <span className="text-[10.5px] text-luxury-muted flex-1">{t}</span>
            <span className="text-[9px] font-mono text-emerald-400">
              {i === 0 ? "received" : "done"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2.5 border-t border-luxury-border text-[9px] font-mono text-luxury-muted/70">
        Nobody had to remember to do any of it.
      </div>
    </div>
  );
}

/* ─── Content ─── */

const HEADLINE_AGENTS = [
  {
    title: "AI Calling Agents",
    plain: "An AI employee that can answer or make calls, handle routine conversations and pass important conversations to your team.",
    detail: "Answers questions, qualifies leads, schedules appointments and handles routine calls — day or night.",
    icon: PhoneCall,
    glow: "rgba(0, 242, 254, 0.10)",
    Visual: VisualCalling,
  },
  {
    title: "AI Chatbots",
    plain: "An intelligent assistant that can help your customers 24/7.",
    detail: "Website, WhatsApp and business chatbots that understand context and hand over to a human when it matters.",
    icon: MessagesSquare,
    glow: "rgba(134, 92, 255, 0.10)",
    Visual: VisualChatbot,
  },
  {
    title: "AI Business Automation",
    plain: "Connect your tools and let software handle repetitive work automatically.",
    detail: "AI joined up with your CRM, email, WhatsApp, databases and internal systems so workflows run themselves.",
    icon: Workflow,
    glow: "rgba(236, 72, 153, 0.09)",
    Visual: VisualAutomation,
  },
];

const MORE_AGENTS = [
  {
    title: "AI Customer Support",
    plain: "Handles the same questions your team answers fifty times a week.",
    detail: "Repetitive enquiries and support requests resolved automatically, with the rest escalated.",
    icon: Headphones,
  },
  {
    title: "AI Sales & Lead Agents",
    plain: "Replies to every enquiry immediately, so no lead goes cold.",
    detail: "Responds, qualifies prospects, collects information and routes high-intent leads to you.",
    icon: TrendingUp,
  },
  {
    title: "AI Appointment Agents",
    plain: "Books, confirms and reminds — without anyone chasing.",
    detail: "Voice or chat agents for scheduling, confirmations, reminders and follow-ups.",
    icon: CalendarCheck,
  },
  {
    title: "AI Knowledge Systems",
    plain: "Ask your own documents a question and get a real answer.",
    detail: "RAG, embeddings and vector search so AI can work with your company documents and internal knowledge.",
    icon: BookOpen,
  },
  {
    title: "Custom AI Agents",
    plain: "Built for the one job nobody sells software for.",
    detail: "Purpose-built agents with tools, memory, workflows and integrations into your systems.",
    icon: Bot,
  },
];

export default function AIAgents() {
  return (
    <section id="ai" className="relative py-24 bg-services-bg border-y border-luxury-border overflow-hidden">
      <div className="absolute inset-0 mesh-grid-lg opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 right-0 w-[520px] h-[420px] bg-accent-cyan/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              AI Agents & Automation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Real AI Systems. Not AI Demos.
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            AI that actually does the work — answering calls, handling enquiries, booking
            appointments and moving information between the tools you already use.
          </p>
        </Reveal>

        {/* Three headline agents */}
        <GlowGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {HEADLINE_AGENTS.map((a, i) => {
            const Icon = a.icon;
            const Visual = a.Visual;
            return (
              <Reveal key={a.title} delay={i * 90}>
                <div
                  data-glow
                  style={{ "--glow": a.glow } as React.CSSProperties}
                  className="glow-card h-full glass-panel theme-card-shadow rounded-[24px] p-7 border border-luxury-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-luxury-border-hover flex flex-col"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-11 h-11 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-accent-purple" />
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-3">{a.title}</h3>

                    <p className="text-[13px] leading-relaxed text-foreground/85 font-medium mb-3">
                      &ldquo;{a.plain}&rdquo;
                    </p>
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted mb-6">{a.detail}</p>

                    <div className="mt-auto">
                      <Visual />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </GlowGrid>

        {/* Remaining capabilities */}
        <GlowGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {MORE_AGENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <div
                  data-glow
                  style={{ "--glow": "rgba(134, 92, 255, 0.07)" } as React.CSSProperties}
                  className="glow-card h-full glass-panel theme-card-shadow rounded-2xl p-6 border border-luxury-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-luxury-border-hover"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className="w-9 h-9 rounded-lg bg-services-bg border border-luxury-border flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-accent-cyan" />
                      </div>
                      <h3 className="text-[13.5px] font-bold text-foreground leading-tight">{a.title}</h3>
                    </div>
                    <p className="text-[12.5px] leading-relaxed text-foreground/85 font-medium mb-2">{a.plain}</p>
                    <p className="text-[11px] leading-relaxed text-luxury-muted">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </GlowGrid>

        <Reveal className="text-center mt-14">
          <ScrollLink
            to="quote"
            className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer"
          >
            Talk About an AI Agent
          </ScrollLink>
        </Reveal>
      </div>
    </section>
  );
}
