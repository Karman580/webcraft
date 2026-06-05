"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, Zap, RefreshCw } from "lucide-react";

export default function OfferComparison() {
  const traditionalPoints = [
    "Weeks of painful waiting",
    "Expensive initial consultations",
    "Unclear and variable pricing",
    "No design preview before payment",
    "Slow feedback loops & delays",
  ];

  const webcraftPoints = [
    "Free personalized homepage demo",
    "Review & approve design first",
    "Full website live in 7 days",
    "Fixed, transparent pricing models",
    "Direct communication with developers",
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="offer"
      className="relative py-24 bg-luxury-bg overflow-hidden"
    >
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <RefreshCw className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              The WebCraft Standard
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            A Better Way To Build
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Traditional web development is broken. We re-engineered the agency experience to place trust, quality, and speed first.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Traditional Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-8 border border-luxury-border bg-luxury-gray/10 flex flex-col justify-between opacity-80"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-luxury-gray border border-luxury-border flex items-center justify-center text-luxury-muted/70 font-extrabold text-sm">
                  OLD
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Traditional Agencies</h3>
                  <p className="text-xs text-luxury-muted/70">The sluggish, outdated process</p>
                </div>
              </div>

              <div className="h-[1px] bg-luxury-gray/40 w-full mb-8" />

              <ul className="flex flex-col gap-5">
                {traditionalPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-luxury-muted text-sm">
                    <X className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 bg-luxury-dark/40 border border-luxury-border rounded-xl p-4 text-center">
              <span className="text-xs text-luxury-muted/70 font-medium font-mono">
                Average Project Cycle: 2 - 3 Months
              </span>
            </div>
          </motion.div>

          {/* WebCraft Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 border border-accent-purple/30 bg-luxury-dark/85 shadow-[0_20px_50px_rgba(134,92,255,0.15)] flex flex-col justify-between overflow-hidden group hover:border-accent-cyan/40 transition-colors duration-500"
          >
            {/* Ambient glows inside card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl group-hover:bg-accent-cyan/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple font-black text-sm">
                    WC
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">WebCraft Technologies</h3>
                    <p className="text-xs text-accent-purple font-semibold">The modern agency model</p>
                  </div>
                </div>
                <div className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Active
                </div>
              </div>

              <div className="h-[1px] bg-luxury-border w-full mb-8" />

              <ul className="flex flex-col gap-5">
                {webcraftPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-foreground text-sm font-medium">
                    <Check className="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-12 flex flex-col gap-4">
              <div className="bg-accent-purple/5 border border-accent-purple/10 rounded-xl p-4 text-center flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-accent-purple animate-pulse" />
                <span className="text-xs text-accent-purple font-semibold font-mono">
                  Guaranteed Delivery: 7 Days
                </span>
              </div>
              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-xl bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer"
              >
                Claim Free Homepage Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
