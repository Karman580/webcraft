"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function TrustBar() {
  const checkmarks = [
    "Free Demo Website",
    "7-Day Delivery",
    "Fully Custom Design",
    "Mobile Optimized",
    "Deployment Included",
    "Ongoing Support",
  ];

  const techLogos = [
    { name: "Next.js", color: "text-white" },
    { name: "React", color: "text-accent-cyan" },
    { name: "Vercel", color: "text-white" },
    { name: "Stripe", color: "text-accent-purple" },
    { name: "OpenAI", color: "text-green-400" },
    { name: "Tailwind", color: "text-sky-400" },
    { name: "Three.js", color: "text-white" },
    { name: "GSAP", color: "text-emerald-400" },
    { name: "Framer", color: "text-accent-pink" },
  ];

  // Repeat logos twice to ensure seamless looping scroll
  const scrollingLogos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <section
      id="trust-bar"
      className="relative py-20 border-y border-luxury-border bg-services-bg"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-muted/70 mb-4">
            Why Businesses Choose Us
          </h2>
          <div className="h-[1px] w-20 bg-accent-purple/50 mx-auto" />
        </div>

        {/* Core Value Props Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {checkmarks.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-luxury-border shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:border-luxury-border transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0" />
              <span className="text-[12px] font-semibold tracking-wide text-foreground">
                {badge}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Infinite Logo Ribbon */}
        <div className="relative w-full overflow-hidden py-4 border-t border-luxury-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-carousel-scroll gap-16 py-2">
            {scrollingLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-default select-none text-luxury-muted/70 hover:text-white transition-colors duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-luxury-muted/20 border border-neutral-700 flex-shrink-0" />
                <span className={`text-sm font-extrabold tracking-widest uppercase ${logo.color} opacity-40 hover:opacity-100 transition-opacity duration-300`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
