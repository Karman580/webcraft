import { Search, Map, Hammer, FlaskConical, Rocket, TrendingUp, GitBranch } from "lucide-react";
import Reveal from "./Reveal";

/* Server Component. The spine fills via a CSS scroll-driven animation where
   supported, and simply shows filled where it isn't — no framer-motion
   useScroll, which required this whole section to be a Client Component. */

const STEPS = [
  { step: "01", title: "Understand", description: "Understand the business and the problem — how you work today, and what's actually getting in the way.", output: "Requirements brief", icon: Search },
  { step: "02", title: "Plan",       description: "Define scope, architecture and product direction, with a price and a timeline you agree to before anything is built.", output: "Scope + architecture", icon: Map },
  { step: "03", title: "Build",      description: "Design and develop the system — the interface people use and the machinery running behind it.", output: "Working product", icon: Hammer },
  { step: "04", title: "Test",       description: "Test functionality, performance and reliability, on real devices and slow connections, before anyone else sees it.", output: "Verified build", icon: FlaskConical },
  { step: "05", title: "Launch",     description: "Deploy the production system, connect your domain, and hand over full ownership of everything.", output: "Live in production", icon: Rocket },
  { step: "06", title: "Scale",      description: "Improve and extend it as the business grows — new features added to what exists, not bolted on the side.", output: "Ongoing roadmap", icon: TrendingUp },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-services-bg overflow-hidden">
      <div className="absolute inset-0 mesh-grid-lg opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <GitBranch className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            From Idea to Production.
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Six stages. Each one hands you something concrete before the next begins —
            so you always know where the project stands.
          </p>
        </Reveal>

        <div className="relative">
          {/* Spine */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-luxury-gray" aria-hidden="true" />
          <div
            className="spine-progress absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink z-10"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 lg:gap-6">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;

              return (
                <div key={step.step} className="relative pl-14 lg:pl-0">
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-3 z-20">
                    <div className="w-8 h-8 rounded-full bg-luxury-dark border-2 border-luxury-border flex items-center justify-center text-[10px] font-bold text-luxury-muted/80 font-mono transition-colors duration-500 hover:border-accent-purple hover:text-foreground">
                      {step.step}
                    </div>
                  </div>

                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <Reveal
                      variant={isLeft ? "left" : "right"}
                      className={isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"}
                    >
                      <div className="glass-panel theme-card-shadow rounded-2xl p-6 border border-luxury-border hover:border-luxury-border-hover transition-colors">
                        <div className={`flex items-center gap-2.5 mb-2.5 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                          <div className="w-8 h-8 rounded-lg bg-services-bg border border-luxury-border flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-accent-cyan" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground">{step.title}</h3>
                        </div>

                        <p className="text-[12px] leading-relaxed text-luxury-muted mb-4">{step.description}</p>

                        <div className={`flex ${isLeft ? "lg:justify-end" : ""}`}>
                          <span className="inline-flex items-center gap-1.5 bg-luxury-gray/40 border border-luxury-border rounded px-2.5 py-1 text-[9px] font-mono text-luxury-muted uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                            You get: {step.output}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
