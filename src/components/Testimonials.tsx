import { Star, MessageSquare, Quote } from "lucide-react";
import Reveal from "./Reveal";

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS — edit here.
   Carried over from the previous site. `outcome` is a short phrase
   lifted from the client's own quote, not a new claim or a metric
   we measured. The only edit made to any quote was removing the
   previous studio's brand name from the first one.
   ══════════════════════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Sameer Shah",
    role: "Chief Cardiologist",
    company: "CareFlow Cardiology Group",
    industry: "Healthcare",
    outcome: "Live in 6 days",
    quote: "The team launched our clinic website in 6 days. The patient booking integrations are seamless, and local patient registrations doubled in the first month. Incredible speed!",
    rating: 5,
    gradient: "from-teal-900 to-cyan-950",
  },
  {
    id: 2,
    name: "Riya Sen",
    role: "Co-Founder",
    company: "FinNova Analytics",
    industry: "Fintech",
    outcome: "Saw the design before paying",
    quote: "The free custom homepage demo was beautiful. Seeing our actual product wireframes styled inside an ultra-premium layout before paying anything made the choice trivial. 10/10.",
    rating: 5,
    gradient: "from-blue-900 to-indigo-950",
  },
  {
    id: 3,
    name: "Kabir Malhotra",
    role: "Culinary Director",
    company: "Le Bistro Group",
    industry: "Hospitality",
    outcome: "Flawless on mobile",
    quote: "Highly professional design, flawless mobile responsiveness. The speed indices are unbelievable. Our customers are constantly complimenting our digital menu card.",
    rating: 5,
    gradient: "from-amber-900 to-orange-950",
  },
];

function Initials({ name, gradient, large }: { name: string; gradient: string; large?: boolean }) {
  const initials = name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      className={`rounded-full bg-gradient-to-tr ${gradient} border border-luxury-border flex items-center justify-center font-black text-white flex-shrink-0 ${
        large ? "w-14 h-14 text-base" : "w-10 h-10 text-xs"
      }`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function Stars({ n, size = "w-3.5 h-3.5" }: { n: number; size?: string }) {
  return (
    <div className="flex gap-1 text-amber-400" aria-label={`${n} out of 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...supporting] = TESTIMONIALS;

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 bg-services-bg overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight glow-text-primary mb-6">
            What Clients Say
          </h2>
          <p className="text-luxury-muted text-sm sm:text-base leading-relaxed">
            The people who had to live with what we shipped.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          {/* Featured — editorial, not a card */}
          <Reveal className="mb-6">
            <figure className="glass-panel theme-card-shadow rounded-3xl border border-luxury-border p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />
              <Quote className="absolute top-8 right-8 w-16 h-16 text-luxury-border pointer-events-none" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Stars n={featured.rating} size="w-4 h-4" />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-cyan font-mono">
                      {featured.outcome}
                    </span>
                  </span>
                </div>

                <blockquote className="text-foreground text-base sm:text-xl leading-relaxed font-medium mb-8 max-w-3xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-4 pt-6 border-t border-luxury-border">
                  <Initials name={featured.name} gradient={featured.gradient} large />
                  <div>
                    <div className="text-sm font-extrabold text-foreground">{featured.name}</div>
                    <div className="text-[11px] text-luxury-muted mt-0.5">
                      {featured.role}, <span className="font-semibold">{featured.company}</span>
                    </div>
                    <span className="inline-block mt-2 bg-luxury-gray/40 border border-luxury-border rounded px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-luxury-muted">
                      {featured.industry}
                    </span>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* Supporting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supporting.map((t, i) => (
              <Reveal key={t.id} delay={i * 100}>
                <figure className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 hover:border-luxury-border-hover transition-colors duration-300 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Stars n={t.rating} size="w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-accent-cyan font-mono">
                      {t.outcome}
                    </span>
                  </div>

                  <blockquote className="text-[12.5px] leading-relaxed text-luxury-muted mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="flex items-center gap-3 pt-4 border-t border-luxury-border">
                    <Initials name={t.name} gradient={t.gradient} />
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-foreground truncate">{t.name}</div>
                      <div className="text-[10px] text-luxury-muted/80 truncate">{t.role}, {t.company}</div>
                    </div>
                    <span className="ml-auto text-[8px] font-mono uppercase tracking-wider text-luxury-muted/60 flex-shrink-0">
                      {t.industry}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
