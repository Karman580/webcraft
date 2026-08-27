import { Check, ArrowRight, Coins, Boxes, MessagesSquare, Tag, FileQuestion } from "lucide-react";
import Reveal from "./Reveal";
import ScrollLink from "./ScrollLink";

/* ══════════════════════════════════════════════════════════════
   PRICING — edit here. All figures are USD.
   `base` is the published starting price for each tier.
   `withSupport` is base + 20% (six months of support and updates),
   which is what the "Save 20%" badge on the toggle refers to.
   ══════════════════════════════════════════════════════════════ */

const PLANS = [
  {
    name: "Starter",
    bestFor: "Local businesses, portfolios and professionals",
    description: "A polished presence that loads fast and turns visitors into enquiries.",
    base: 1500,
    withSupport: 1800,
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
    featured: false,
  },
  {
    name: "Professional",
    bestFor: "Startups, clinics and growing brands",
    description: "More pages, real booking and lead capture, and a blog you can update yourself.",
    base: 2500,
    withSupport: 3000,
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
    featured: true,
  },
  {
    name: "Enterprise",
    bestFor: "Web software, e-commerce and AI products",
    description: "A full application — accounts, payments, dashboards and AI features.",
    base: 5000,
    withSupport: 6000,
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
    featured: false,
  },
];

const QUOTED = [
  { name: "Mobile Applications", note: "iOS and Android apps, and what runs behind them." },
  { name: "AI & Automation", note: "Calling agents, chatbots and automated workflows." },
  { name: "Custom Software", note: "Internal systems built for one business only." },
  { name: "Larger / Custom Systems", note: "Multi-part platforms and long-running builds." },
];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-scope relative py-24 bg-luxury-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Coins className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Scope & Investment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Clear Scope. Clear Pricing.
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Every price below is a starting point, not a final bill. Talk to us first —
            once we understand what you actually need, most projects come back with a
            better number.
          </p>
        </Reveal>

        {/* Two ways pricing works — explained plainly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="h-full rounded-2xl border border-accent-cyan/25 bg-accent-cyan/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-accent-cyan" />
                <h3 className="text-[13px] font-bold text-foreground">Starting prices</h3>
              </div>
              <p className="text-[11.5px] leading-relaxed text-luxury-muted">
                For projects where we already know the shape of the work — websites and
                standard web builds. These are where each tier begins; the final figure
                depends on what you need in it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-accent-purple/25 bg-accent-purple/5 p-5">
              <div className="flex items-center gap-2 mb-2">
                <FileQuestion className="w-4 h-4 text-accent-purple" />
                <h3 className="text-[13px] font-bold text-foreground">Custom quote</h3>
              </div>
              <p className="text-[11.5px] leading-relaxed text-luxury-muted">
                For apps, AI systems and custom software. We break the work into parts,
                price each part, and you can drop anything you don&apos;t need.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Support toggle — a checkbox and CSS, no JS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12">
          <input type="checkbox" id="support-toggle" className="sr-only" />
          <span className="toggle-off text-xs font-semibold text-foreground transition-colors">Build only</span>
          <label
            htmlFor="support-toggle"
            className="w-12 h-6.5 rounded-full bg-luxury-gray border border-luxury-border p-1 flex items-center transition-all duration-300 cursor-pointer flex-shrink-0"
          >
            <span className="toggle-knob w-4.5 h-4.5 rounded-full bg-foreground transition-transform duration-300" />
            <span className="sr-only">Include six months of support and updates</span>
          </label>
          <span className="toggle-on text-xs font-semibold flex items-center gap-1.5 text-center transition-colors">
            Build + 6 months support & updates
            <span className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-[8px] px-1.5 py-0.5 rounded font-extrabold tracking-wider uppercase">
              Save 20%
            </span>
          </span>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-10">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <div
                className={`h-full rounded-[24px] p-7 flex flex-col justify-between border relative overflow-hidden transition-all duration-300 theme-card-shadow ${
                  plan.featured
                    ? "border-accent-purple bg-luxury-dark shadow-[0_15px_40px_rgba(134,92,255,0.15)] md:scale-105 z-10"
                    : "border-luxury-border bg-services-bg hover:border-luxury-border-hover"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-accent-purple/10 border-b border-l border-accent-purple/20 text-accent-purple text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-bl-lg">
                    Most Chosen
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan mb-3">{plan.bestFor}</p>
                  <p className="text-[11.5px] leading-relaxed text-luxury-muted mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-luxury-muted/60 mb-1">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-foreground">
                        <span className="price-base">{usd(plan.base)}</span>
                        <span className="price-support">{usd(plan.withSupport)}</span>
                      </span>
                      <span className="text-[10px] text-luxury-muted font-mono">one-off</span>
                    </div>
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
                  <ScrollLink
                    to="quote"
                    className={`w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      plan.featured
                        ? "bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background shadow-lg"
                        : "border border-luxury-border text-foreground bg-luxury-gray/40 hover:bg-luxury-gray hover:border-luxury-border-hover"
                    }`}
                  >
                    Get a Free Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </ScrollLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Talk to us — the prices above are a starting point */}
        <Reveal className="max-w-6xl mx-auto mb-10">
          <div className="rounded-2xl border border-accent-cyan/25 bg-accent-cyan/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5">
            <MessagesSquare className="w-5 h-5 text-accent-cyan flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-[13px] font-bold text-foreground mb-1">
                Contact us for a better quote
              </h3>
              <p className="text-[11.5px] leading-relaxed text-luxury-muted">
                These are starting prices for a standard build. Tell us what you actually
                need and we&apos;ll put together a proper quote — often for less than the
                tier price once we drop what doesn&apos;t apply to you, and with more
                included where it matters. Bundles, phased builds and longer engagements
                are all priced better than the list.
              </p>
            </div>
            <ScrollLink
              to="quote"
              className="flex-shrink-0 px-5 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-wider bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Get a Better Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </ScrollLink>
          </div>
        </Reveal>

        {/* Quoted work */}
        <Reveal className="max-w-6xl mx-auto">
          <div className="glass-panel theme-card-shadow rounded-[24px] border border-luxury-border p-7 sm:p-9 relative overflow-hidden">
            <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-services-bg border border-luxury-border flex items-center justify-center">
                    <Boxes className="w-4.5 h-4.5 text-accent-purple" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-accent-purple uppercase font-mono">
                    Custom Quote
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3">
                  Apps, AI systems and custom software
                </h3>
                <p className="text-[12.5px] leading-relaxed text-luxury-muted max-w-xl mb-6">
                  These don&apos;t get a shelf price, because no two are the same. We map what
                  you need, break it into parts, and price each part — so you can see exactly
                  what you&apos;re paying for and remove anything you don&apos;t need.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {QUOTED.map((q) => (
                    <div key={q.name} className="rounded-xl border border-luxury-border bg-luxury-gray/30 px-4 py-3">
                      <div className="text-[12px] font-bold text-foreground mb-0.5">{q.name}</div>
                      <div className="text-[10.5px] text-luxury-muted leading-relaxed">{q.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-[280px] flex-shrink-0 flex flex-col gap-3">
                <ScrollLink
                  to="quote"
                  className="w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get a Free Quote
                  <ArrowRight className="w-3.5 h-3.5" />
                </ScrollLink>
                <div className="flex items-center gap-2 justify-center text-[10px] font-mono uppercase tracking-wider text-luxury-muted/70">
                  <MessagesSquare className="w-3.5 h-3.5" />
                  A conversation first, never an invoice
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
