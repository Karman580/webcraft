import {
  Gauge, ShieldCheck, Smartphone, Lock, Code2,
  Layers3, FlaskConical, LifeBuoy, Zap,
} from "lucide-react";
import Reveal from "./Reveal";

/* Server Component.

   Every number here comes from the four projects in the Work section — the
   same figures shown on each case study. Nothing is extrapolated into an
   average, a guarantee, or a statistic about client outcomes. */

const SCORES = [
  { label: "Performance",    value: "99+",  ring: 99,  color: "var(--accent-cyan)",   note: "Lighthouse, live sites" },
  { label: "Accessibility",  value: "96+",  ring: 96,  color: "var(--accent-purple)", note: "Usable by more people" },
  { label: "Best Practices", value: "100",  ring: 100, color: "var(--accent-pink)",   note: "Modern, correct code" },
];

const LCP = { label: "LCP", value: "0.3–0.5s", note: "Main content, on the projects listed above" };

const PRACTICES = [
  { title: "Reliability",         body: "Built to keep working on a bad day — slow connections, odd inputs, everything at once.", icon: ShieldCheck },
  { title: "Responsive design",   body: "Laid out for phones first, then tablets and desktops. Most visitors arrive on a phone.", icon: Smartphone },
  { title: "Secure deployment",   body: "HTTPS everywhere, secrets kept out of the code, access limited to who needs it.", icon: Lock },
  { title: "Maintainable code",   body: "Readable and documented, so any competent engineer can pick it up later — including one who isn't us.", icon: Code2 },
  { title: "Scalable architecture", body: "Room to add features and handle more customers without starting again.", icon: Layers3 },
  { title: "Proper testing",      body: "Functionality, speed and layout checked before launch, not discovered by your customers.", icon: FlaskConical },
  { title: "Ongoing support",     body: "Someone to call after launch, when the real questions turn up.", icon: LifeBuoy },
];

export default function Performance() {
  return (
    <section id="performance" className="relative py-24 bg-luxury-bg overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[460px] h-[400px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <Gauge className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">
              Performance & Reliability
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            Fast Is a Feature.
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            Fast websites and applications mean less waiting, better user experience and
            fewer customers dropping off before they reach you.
          </p>
        </Reveal>

        {/* Scores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {SCORES.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 flex flex-col items-center text-center">
                <div
                  className="gauge relative w-[86px] h-[86px] rounded-full flex items-center justify-center mb-4"
                  style={{ "--v": s.ring, "--ring": s.color } as React.CSSProperties}
                >
                  <span className="relative z-10 text-lg font-black text-foreground font-mono">{s.value}</span>
                </div>
                <h3 className="text-[13px] font-bold text-foreground mb-1">{s.label}</h3>
                <p className="text-[10px] font-mono text-luxury-muted/70 leading-relaxed">{s.note}</p>
              </div>
            </Reveal>
          ))}

          {/* LCP is a duration, not a score — shown as one */}
          <Reveal delay={270}>
            <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 flex flex-col items-center justify-center text-center">
              <div className="w-[86px] h-[86px] rounded-full border-2 border-emerald-500/30 bg-emerald-500/5 flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <span className="text-lg font-black text-foreground font-mono mb-1">{LCP.value}</span>
              <h3 className="text-[13px] font-bold text-foreground mb-1">{LCP.label}</h3>
              <p className="text-[10px] font-mono text-luxury-muted/70 leading-relaxed">{LCP.note}</p>
            </div>
          </Reveal>
        </div>

        {/* Provenance — keeps the numbers honest */}
        <Reveal className="max-w-5xl mx-auto mb-16">
          <p className="text-center text-[11px] font-mono text-luxury-muted/60 leading-relaxed">
            Figures measured on the live projects in{" "}
            <span className="text-luxury-muted">Our Selected Work</span>. Every project is different —
            yours gets its own numbers, measured before launch.
          </p>
        </Reveal>

        {/* What reliability actually means */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {PRACTICES.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 hover:border-luxury-border-hover transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-services-bg border border-luxury-border flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent-purple" />
                    </div>
                    <h3 className="text-[13px] font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-luxury-muted">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
