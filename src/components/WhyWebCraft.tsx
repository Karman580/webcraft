"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Smartphone, Layers, ShieldCheck, Cpu } from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

/* ─── Visual components for each pillar ─── */

function VisualPremiumDesign() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(var(--mesh-color)_1px,transparent_1px),linear-gradient(90deg,var(--mesh-color)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center animate-pulse relative z-10">
        <Sparkles className="w-14 h-14 sm:w-16 sm:h-16 text-accent-cyan" />
      </div>
      <span className="text-[10px] font-mono text-luxury-muted/70 mt-6 tracking-widest relative z-10">
        AESTHETICS ENGINE ACTIVE
      </span>
    </div>
  );
}

function VisualFastDelivery() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="w-48 h-3 bg-luxury-gray border border-luxury-border rounded-full relative overflow-hidden mb-6">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "0%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
        />
      </div>
      <div className="text-center">
        <h4 className="text-4xl font-black text-amber-500 font-mono">7 Days</h4>
        <p className="text-[10px] font-mono text-luxury-muted/70 tracking-wider uppercase mt-2">
          CRITICAL PATH LAUNCH SPEED
        </p>
      </div>
    </div>
  );
}

function VisualMobileFirst() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", "end start"],
  });
  const phoneScrollY = useTransform(scrollYProgress, [0.2, 0.8], ["0px", "-180px"]);

  return (
    <div
      ref={phoneRef}
      className="w-full h-full flex items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden"
    >
      <div className="w-32 h-60 rounded-[30px] border-4 border-neutral-800 bg-[#0c0c0e] p-3 flex flex-col gap-2 relative shadow-2xl overflow-hidden">
        <div className="w-12 h-3.5 bg-black rounded-full mx-auto flex-shrink-0 z-20" />
        <div className="w-full h-full overflow-hidden relative rounded-xl bg-[#0c0c0e]">
          <motion.div style={{ y: phoneScrollY }} className="flex flex-col gap-3 pb-8">
            <div className="w-full h-12 rounded bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-2 rounded bg-accent-purple" />
            </div>
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div className="w-3/4 h-1.5 rounded bg-neutral-700" />
              <div className="w-full h-1 rounded bg-neutral-800" />
              <div className="w-5/6 h-1 rounded bg-neutral-800" />
            </div>
            <div className="grid grid-cols-2 gap-1.5 flex-shrink-0">
              <div className="h-10 rounded bg-neutral-800/40 border border-neutral-800" />
              <div className="h-10 rounded bg-neutral-800/40 border border-neutral-800" />
              <div className="h-10 rounded bg-neutral-800/40 border border-neutral-800" />
              <div className="h-10 rounded bg-neutral-800/40 border border-neutral-800" />
            </div>
            <div className="w-full h-12 rounded bg-accent-cyan/20 border border-accent-cyan/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-2 rounded bg-accent-cyan" />
            </div>
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div className="w-1/2 h-1.5 rounded bg-neutral-700" />
              <div className="w-full h-1 rounded bg-neutral-800" />
            </div>
            <div className="grid grid-cols-2 gap-1.5 flex-shrink-0">
              <div className="h-8 rounded bg-neutral-800/40" />
              <div className="h-8 rounded bg-neutral-800/40" />
            </div>
          </motion.div>
        </div>
        <div className="w-10 h-1 bg-white/30 rounded mx-auto mt-auto flex-shrink-0 z-20" />
      </div>
      <div className="absolute top-1/2 left-12 w-24 h-24 bg-accent-pink/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}

function VisualModernTech() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="w-full max-w-[280px] bg-[#0c0c0e] border border-neutral-800 rounded-xl p-4 font-mono text-[9px] text-neutral-400 leading-normal">
        <div className="text-[#865cff] mb-1">{"// tech_stack.config.ts"}</div>
        <div>{"import { next } from 'webcraft-framework';"}</div>
        <div className="mt-2 text-neutral-200">{"export default function App() {"}</div>
        <div className="pl-3 text-neutral-500">{"return ("}</div>
        <div className="pl-6 text-[#00f2fe]">{"<Website performance={100} />"}</div>
        <div className="pl-3 text-neutral-500">{");"}</div>
        <div className="text-neutral-200">{"}"}</div>
      </div>
    </div>
  );
}

function VisualFullyCustom() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="grid grid-cols-3 gap-2 w-full max-w-[260px]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-luxury-gray border border-luxury-border flex items-center justify-center text-[10px] text-luxury-muted font-bold hover:border-accent-cyan hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all duration-300"
          >
            {`0${i + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualLifetimeScalability() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-luxury-dark/80 rounded-2xl border border-luxury-border relative overflow-hidden">
      <div className="flex items-center gap-4 mb-4">
        <ShieldCheck className="w-12 h-12 text-accent-blue" />
        <div className="h-[2px] w-16 bg-luxury-muted/20 relative">
          <div className="absolute inset-0 bg-accent-blue animate-pulse" />
        </div>
        <div className="w-12 h-12 rounded-lg bg-luxury-gray/40 border border-luxury-border flex items-center justify-center font-bold text-foreground text-xs">
          CDN
        </div>
      </div>
      <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-widest">
        LIFETIME SCALE SECURED
      </span>
    </div>
  );
}

/* ─── Visual component map ─── */

const visualComponents: Record<string, React.FC> = {
  "premium-design": VisualPremiumDesign,
  "fast-delivery": VisualFastDelivery,
  "mobile-first": VisualMobileFirst,
  "modern-tech": VisualModernTech,
  "fully-custom": VisualFullyCustom,
  "lifetime-scalability": VisualLifetimeScalability,
};

/* ─── Single Pillar Row component ─── */

function PillarRow({ pillar, index }: { pillar: Pillar; index: number }) {
  const Icon = pillar.icon;
  const VisualComponent = visualComponents[pillar.id];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
    >
      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-luxury-gray/40 border border-luxury-border flex items-center justify-center text-foreground">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold tracking-wider text-accent-purple uppercase">
            {pillar.subtitle}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
          {pillar.title}
        </h3>
        <p className="text-luxury-muted text-sm sm:text-base leading-relaxed max-w-xl">
          {pillar.description}
        </p>
      </div>

      {/* Visual Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 h-[320px] sm:h-[380px] relative p-[1px] rounded-2xl bg-gradient-to-tr from-white/10 to-transparent shadow-2xl"
      >
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <VisualComponent />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ─── */

export default function WhyWebCraft() {
  const pillars: Pillar[] = [
    {
      id: "premium-design",
      title: "Premium Design",
      subtitle: "Bespoke Aesthetics",
      description:
        "We don't use generic templates. Every pixel, margin, and typography scale is crafted from scratch to align with Apple-level standards of detail and luxury.",
      icon: Sparkles,
    },
    {
      id: "fast-delivery",
      title: "Fast Delivery",
      subtitle: "7-Day Launch Cycle",
      description:
        "Our engineered workflow eliminates bureaucratic agency lag. We deliver complete, fully functional digital products in exactly 7 days.",
      icon: Zap,
    },
    {
      id: "mobile-first",
      title: "Mobile First",
      subtitle: "Fluid Layout Adaptation",
      description:
        "Over 65% of web traffic is mobile. We design fluid layouts that load instantly and look flawless on iPhones, Android devices, and foldables.",
      icon: Smartphone,
    },
    {
      id: "modern-tech",
      title: "Modern Technologies",
      subtitle: "Cutting-Edge Architecture",
      description:
        "We build on Next.js 15, React 19, TypeScript, and Tailwind CSS. The result is lightweight bundles, robust state, and search engine crawler readiness.",
      icon: Cpu,
    },
    {
      id: "fully-custom",
      title: "Fully Custom Solutions",
      subtitle: "Zero Code Bloat",
      description:
        "Every module is engineered strictly for your needs. We bypass heavy, slow plugins, giving you a clean codebase that achieves 99+ speed scores.",
      icon: Layers,
    },
    {
      id: "lifetime-scalability",
      title: "Lifetime Scalability",
      subtitle: "Future-Ready Codebase",
      description:
        "Your code is completely yours, hosted on global CDN nodes. When you are ready to expand your company, the codebase scales effortlessly with your team.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative py-28 bg-services-bg border-b border-luxury-border">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-luxury-border bg-luxury-gray/30 backdrop-blur-md w-fit mb-6 mx-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-luxury-muted">
            Why Choose WebCraft
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground"
        >
          Built Different.{" "}
          <span className="glow-text-blue-purple">Built Better.</span>
        </motion.h2>
      </div>

      {/* Pillar Rows */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 lg:gap-28">
        {pillars.map((pillar, index) => (
          <PillarRow key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  );
}
