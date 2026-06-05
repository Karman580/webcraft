"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Zap, Coins } from "lucide-react";

export default function Pricing() {
  const [supportIncluded, setSupportIncluded] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for local businesses, portfolios, and professionals.",
      price: supportIncluded ? 24999 : 19999,
      features: [
        "Up to 3 Custom Web Pages",
        "Free Custom Homepage Demo",
        "Fully Mobile Responsive Layout",
        "WhatsApp Chat Widget",
        "Contact intake forms",
        "Next.js Speed (95+ Core)",
        "Secure CDN Hosting Setup",
        "3 Days Post-Launch Support",
      ],
      cta: "Request Starter Demo",
      featured: false,
    },
    {
      name: "Professional",
      description: "Best for startups, medical clinics, and growing brands.",
      price: supportIncluded ? 47999 : 39999,
      features: [
        "Up to 8 Custom Web Pages",
        "Free Custom Homepage Demo",
        "Fully Mobile Responsive Layout",
        "WhatsApp & Social Widgets",
        "Interactive Intake / Lead Forms",
        "Next.js Speed (98+ Core)",
        "Secure CDN Hosting Setup",
        "Dynamic Clinic Booking or Map",
        "CMS Blog Integration",
        "14 Days Post-Launch Support",
      ],
      cta: "Request Professional Demo",
      featured: true,
    },
    {
      name: "Enterprise",
      description: "For complex web software, e-commerce, and AI products.",
      price: supportIncluded ? 94999 : 79999,
      features: [
        "Unlimited Custom Web Pages",
        "Free Custom Homepage Demo",
        "Fully Mobile Responsive Layout",
        "Full E-Commerce Cart & Payments",
        "WhatsApp Automations & Alerts",
        "Next.js Speed (99+ Core)",
        "Secure CDN Hosting Setup",
        "AI Chatbot / LLM integrations",
        "Admin Dashboard Console",
        "Custom Database APIs",
        "30 Days Post-Launch Support",
      ],
      cta: "Request Enterprise Demo",
      featured: false,
    },
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
      id="pricing"
      className="relative py-24 bg-luxury-bg overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4"
          >
            <Coins className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Clear Transparent Pricing
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Invest in Pure Quality
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            All plans start with a completely free homepage demo. Review our design before paying a single rupee.
          </p>
        </div>

        {/* Support Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-xs font-semibold ${!supportIncluded ? "text-foreground" : "text-luxury-muted/70"} transition-colors`}>
            Build Only
          </span>
          <button
            onClick={() => setSupportIncluded(!supportIncluded)}
            className="w-12 h-6.5 rounded-full bg-luxury-gray border border-luxury-border p-1 flex items-center transition-all duration-300 relative cursor-pointer"
          >
            <div
              className={`w-4.5 h-4.5 rounded-full bg-foreground transition-transform duration-300 ${
                supportIncluded ? "translate-x-5.5 bg-accent-purple" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1.5 ${supportIncluded ? "text-foreground animate-pulse" : "text-luxury-muted/70"} transition-colors`}>
            Build + 6 Months Support & Updates
            <span className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[8px] px-1.5 py-0.5 rounded font-extrabold tracking-wider uppercase">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-[24px] p-7 flex flex-col justify-between border relative overflow-hidden transition-all duration-300 theme-card-shadow ${
                plan.featured
                  ? "border-accent-purple bg-luxury-dark shadow-[0_15px_40px_rgba(134,92,255,0.15)] md:scale-105 z-10"
                  : "border-luxury-border bg-services-bg hover:border-luxury-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-accent-purple/10 border-b border-l border-accent-purple/20 text-accent-purple text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-bl-lg">
                  Recommended
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-[11px] leading-relaxed text-luxury-muted mb-6">{plan.description}</p>
                
                {/* Price display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-extrabold text-foreground">₹{plan.price.toLocaleString()}</span>
                  <span className="text-[10px] text-luxury-muted font-mono">/ flat project rate</span>
                </div>

                <div className="h-[1px] bg-luxury-border w-full mb-8" />

                <ul className="flex flex-col gap-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-luxury-muted font-medium">
                      <Check className="w-4.5 h-4.5 text-accent-purple flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.featured
                      ? "bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background shadow-lg"
                      : "border border-luxury-border text-foreground bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
