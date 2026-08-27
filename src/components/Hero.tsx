import { ArrowRight, Check, Code2, Brain, Smartphone, Globe, Cloud } from "lucide-react";
import ScrollLink from "./ScrollLink";

/* Server Component. No preloader, no WebGL, no animation library —
   the first viewport is HTML + CSS so it paints immediately. */

const CAPABILITY_RAIL = [
  { label: "Software", Icon: Code2 },
  { label: "AI", Icon: Brain },
  { label: "Mobile", Icon: Smartphone },
  { label: "Web", Icon: Globe },
  { label: "Cloud", Icon: Cloud },
];

const TRUST_POINTS = [
  "Founder-led",
  "Transparent scope & pricing",
  "Modern, scalable technology",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-24 px-6 bg-luxury-bg"
    >
      {/* Ambient background — pure CSS */}
      <div className="absolute inset-0 ambient-field ambient-drift pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 mesh-grid-lg opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-bg/40 to-luxury-bg pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto text-center z-[2] flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex flex-wrap justify-center items-center gap-2 px-1.5 py-1.5 rounded-full border border-luxury-border bg-luxury-gray/35 backdrop-blur-md w-fit mb-8">
          <span className="px-3.5 py-1 rounded-full bg-luxury-gray/55 text-[10px] font-bold text-foreground uppercase tracking-[0.18em] font-mono">
            Software <span className="text-accent-purple">·</span> AI <span className="text-accent-purple">·</span> Systems
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mr-1">
            <span className="live-dot text-emerald-500" />
            Available for projects
          </span>
        </div>

        {/* Headline — the LCP element. Plain text, no JS. */}
        <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] glow-text-primary mb-6 max-w-4xl">
          We Build the Digital Systems Behind{" "}
          <span className="glow-text-blue-purple">Modern Businesses.</span>
        </h1>

        <p className="text-luxury-muted text-sm sm:text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Software, AI, mobile apps, web applications and cloud infrastructure — designed,
          built and connected around how your business actually works.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <ScrollLink
            to="quote"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-wide uppercase bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background hover:scale-105 shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </ScrollLink>
          <ScrollLink
            to="work"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-wide uppercase text-foreground border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            See Our Work
            <ArrowRight className="w-4 h-4" />
          </ScrollLink>
        </div>

        {/* Capability rail */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8">
          {CAPABILITY_RAIL.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-luxury-border bg-luxury-gray/35 backdrop-blur-md"
            >
              <Icon className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-muted font-mono">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-3 pt-7 border-t border-luxury-border max-w-3xl w-full">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-luxury-muted font-mono">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
