"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Gauge, ArrowUpRight, Shield, Zap, LayoutGrid, RotateCcw } from "lucide-react";

export default function PerformanceDashboard() {
  const [running, setRunning] = useState(false);
  const [metrics, setMetrics] = useState({
    performance: 100,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
    lcp: 0.6,
    inp: 12,
    cls: 0.00,
    speedIndex: 0.5,
  });

  const runTest = () => {
    if (running) return;
    setRunning(true);

    // Reset metrics to show animation
    setMetrics({
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0,
      lcp: 2.4,
      inp: 120,
      cls: 0.08,
      speedIndex: 2.1,
    });

    setTimeout(() => {
      // Step by step count up
      const duration = 1200;
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress * (2 - progress);

        setMetrics({
          performance: Math.round(100 * ease),
          accessibility: Math.round(100 * ease),
          bestPractices: Math.round(100 * ease),
          seo: Math.round(100 * ease),
          lcp: parseFloat((2.4 - (2.4 - 0.6) * ease).toFixed(1)),
          inp: Math.round(120 - (120 - 12) * ease),
          cls: parseFloat((0.08 - 0.08 * ease).toFixed(2)),
          speedIndex: parseFloat((2.1 - (2.1 - 0.5) * ease).toFixed(1)),
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setRunning(false);
        }
      };

      requestAnimationFrame(update);
    }, 800);
  };

  const dialStyle = (score: number) => {
    const perimeter = 2 * Math.PI * 32; // Radius 32
    const offset = perimeter - (score / 100) * perimeter;
    return {
      strokeDasharray: perimeter,
      strokeDashoffset: offset,
      transition: "stroke-dashoffset 0.8s ease-out",
    };
  };

  return (
    <section
      id="performance"
      className="relative py-24 bg-services-bg"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <Gauge className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Web Performance Audit
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Engineered For Pure Speed
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Speed is the highest leverage feature of any modern website. Our architectures achieve a perfect Lighthouse score, driving user retention and SEO ranking.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 border border-luxury-border bg-luxury-dark shadow-2xl relative overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-luxury-border pb-6 mb-8">
            <div>
              <span className="text-[9px] font-mono font-bold text-luxury-muted/70 uppercase tracking-widest block mb-1">
                Lighthouse Analytics v10.4
              </span>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                Live Speed Performance Diagnostics
                {running && (
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                )}
              </h3>
            </div>
            
            <button
              onClick={runTest}
              disabled={running}
              className="px-5 py-2.5 rounded-xl border border-luxury-border bg-luxury-gray/40 hover:bg-luxury-gray/60 hover:border-luxury-border-hover transition-all text-xs font-semibold text-foreground flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${running ? "animate-spin text-accent-cyan" : ""}`} />
              {running ? "Analyzing Codebase..." : "Run Speed Diagnostics"}
            </button>
          </div>

          {/* Core Lighthouse Rings Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Performance", score: metrics.performance, col: "text-green-500" },
              { title: "Accessibility", score: metrics.accessibility, col: "text-green-500" },
              { title: "Best Practices", score: metrics.bestPractices, col: "text-green-500" },
              { title: "SEO", score: metrics.seo, col: "text-green-500" },
            ].map((dial) => (
              <div key={dial.title} className="flex flex-col items-center bg-luxury-gray/40 border border-luxury-border p-4 rounded-2xl">
                <div className="w-20 h-20 relative mb-4">
                  <svg className="w-full h-full transform -rotate-95" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" fill="none" stroke="var(--circle-bg)" strokeWidth="6" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      fill="none"
                      stroke={running ? "#865cff" : "#00f2fe"}
                      strokeWidth="6"
                      strokeLinecap="round"
                      style={dialStyle(dial.score)}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono font-black text-sm text-foreground">
                    {dial.score}
                  </div>
                </div>
                <span className="text-xs font-bold text-luxury-muted/90 tracking-wide">{dial.title}</span>
              </div>
            ))}
          </div>

          {/* Core Web Vitals Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* LCP */}
            <div className="bg-luxury-gray/40 border border-luxury-border p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-wide">Largest Contentful Paint</span>
                <h4 className="text-xl font-extrabold text-foreground mt-1">{metrics.lcp}s</h4>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded w-fit border border-green-500/20 uppercase tracking-wider">
                <Zap className="w-3 h-3" />
                Good (&lt; 2.5s)
              </div>
            </div>

            {/* INP */}
            <div className="bg-luxury-gray/40 border border-luxury-border p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-wide">Interaction to Next Paint</span>
                <h4 className="text-xl font-extrabold text-foreground mt-1">{metrics.inp}ms</h4>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded w-fit border border-green-500/20 uppercase tracking-wider">
                <Shield className="w-3 h-3" />
                Good (&lt; 200ms)
              </div>
            </div>

            {/* CLS */}
            <div className="bg-luxury-gray/40 border border-luxury-border p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-wide">Cumulative Layout Shift</span>
                <h4 className="text-xl font-extrabold text-foreground mt-1">{metrics.cls.toFixed(2)}</h4>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded w-fit border border-green-500/20 uppercase tracking-wider">
                <LayoutGrid className="w-3 h-3" />
                Perfect (0.00)
              </div>
            </div>

            {/* Speed Index */}
            <div className="bg-luxury-gray/40 border border-luxury-border p-5 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-luxury-muted/70 uppercase tracking-wide">Speed Index</span>
                <h4 className="text-xl font-extrabold text-foreground mt-1">{metrics.speedIndex}s</h4>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded w-fit border border-green-500/20 uppercase tracking-wider">
                <Zap className="w-3 h-3" />
                Good (&lt; 3.4s)
              </div>
            </div>

          </div>

          {/* Specs banner */}
          <div className="mt-8 border-t border-luxury-border pt-6 flex flex-wrap justify-between items-center gap-4 text-[10px] text-luxury-muted/70 font-mono">
            <span>Verified Server: Vercel CDN Edge Node Node-14 (Mumbai, IN)</span>
            <span className="text-accent-cyan flex items-center gap-1">
              ALL GREEN METRICS DETECTED
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
