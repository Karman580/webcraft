"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, HelpCircle } from "lucide-react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Scale the timeline line height based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  const steps = [
    {
      step: "01",
      title: "Request Free Demo",
      description: "Fill out our quick intake form detailing your business guidelines, budget, and desired style. No payment or credit card is required.",
    },
    {
      step: "02",
      title: "Receive Custom Homepage",
      description: "Within 48 hours, our premium design team crafts a personalized homepage prototype demonstrating the exact look and feel of your future website.",
    },
    {
      step: "03",
      title: "Review & Approve",
      description: "Test the interactive preview on desktop and mobile. Suggest changes and, once you are absolutely thrilled, approve full development.",
    },
    {
      step: "04",
      title: "Full Development Begins",
      description: "We build out all remaining inner pages, integrate forms, setup API calls, configure WhatsApp chat hooks, and optimize core business metrics.",
    },
    {
      step: "05",
      title: "Testing & Refinement",
      description: "We audit performance metrics (ensuring 95+ LCP scores), check responsive layout margins, test email triggers, and optimize SEO headers.",
    },
    {
      step: "06",
      title: "Deployment",
      description: "We deploy the production bundle to lightning-fast, secure edge networks (Vercel/Cloudflare) and connect your custom domains.",
    },
    {
      step: "07",
      title: "Website Live In 7 Days",
      description: "Congratulations! Your premium, high-converting digital storefront is fully live. We provide ongoing maintenance and full code ownership.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-28 bg-services-bg overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-accent-purple" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              The Project Journey
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            From Demo to Live in 7 Days
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            A transparent, highly organized engineering process that values your time, prioritizes your vision, and requires zero upfront commitment.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative pl-8 sm:pl-16">
          
          {/* Timeline BG Line */}
          <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-[2px] bg-luxury-gray" />
          
          {/* Animated Glowing Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-8 top-2 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink origin-top z-10 shadow-[0_0_10px_rgba(0,242,254,0.5)]"
          />

          {/* Steps */}
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-12 sm:-left-20 top-1.5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-luxury-dark border-2 border-luxury-border flex items-center justify-center text-[10px] font-bold text-luxury-muted/70 font-mono z-20 transition-all duration-500 hover:border-accent-purple hover:text-foreground">
                    {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="glass-panel rounded-2xl p-6 shadow-lg hover:border-luxury-border-hover transition-colors">
                  <span className="text-[9px] font-bold text-accent-cyan tracking-wider font-mono uppercase block mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    {step.title}
                    {idx === 0 && (
                      <span className="text-[8px] bg-accent-purple/10 border border-accent-purple/20 text-accent-purple px-1.5 py-0.5 rounded uppercase font-bold tracking-wider animate-pulse">
                        No Cost
                      </span>
                    )}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-luxury-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
