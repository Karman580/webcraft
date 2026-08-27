import { User, Terminal, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import ScrollLink from "./ScrollLink";
import { CONTACT } from "@/lib/contact";

/* Server Component. */

const PRINCIPLES = [
  {
    title: "Founder-led, start to finish",
    body: "The person scoping your project is the person writing the code. Nothing gets lost between the brief and the build.",
  },
  {
    title: "Direct communication",
    body: "Plain answers about what's possible, what it costs and what it will really take. If something is a bad idea, you hear that before you pay for it.",
  },
  {
    title: "Business-first engineering",
    body: "We work out how the business actually runs before choosing any technology. The problem comes first; the stack follows.",
  },
  {
    title: "Practical technology",
    body: "Tools get picked because they fit the job, not because they're new. Boring and dependable beats clever and fragile.",
  },
  {
    title: "Long-term thinking",
    body: "Built expecting a second year and a third. Adding to the system shouldn't mean starting it again.",
  },
  {
    title: "Systems you can maintain",
    body: "Readable, documented code you fully own — so any competent engineer can take it forward, including one who isn't us.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28 bg-services-bg overflow-hidden border-t border-luxury-border">
      <div className="absolute top-0 right-1/4 w-[460px] h-[400px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Identity */}
          <div className="lg:col-span-5">
            <Reveal variant="left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-border bg-luxury-gray/40 backdrop-blur-md mb-6">
                <User className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-luxury-muted">About</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight glow-text-primary mb-8 leading-tight">
                Built by People Who Build.
              </h2>
            </Reveal>

            <Reveal variant="left" delay={100}>
              <div className="glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-6 relative overflow-hidden">
                <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src="/logo-mark.png"
                      alt=""
                      aria-hidden="true"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain theme-logo"
                    />
                    <div>
                      <h3 className="text-base font-black text-foreground leading-tight">{CONTACT.name}</h3>
                      <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-accent-purple">
                        Founder · Engineer
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-luxury-border bg-[color:var(--card-bg-solid)] p-4 font-mono text-[10px] leading-relaxed">
                    <div className="flex items-center gap-1.5 mb-2 text-luxury-muted/60">
                      <Terminal className="w-3 h-3" />
                      <span className="tracking-wider uppercase">whoami</span>
                    </div>
                    <div className="text-luxury-muted"><span className="text-accent-purple">role</span>: designs and builds the work</div>
                    <div className="text-luxury-muted"><span className="text-accent-purple">scope</span>: problem → architecture → launch</div>
                    <div className="text-luxury-muted"><span className="text-accent-purple">stack</span>: software · AI · systems</div>
                    <div className="text-luxury-muted"><span className="text-accent-purple">contact</span>: <span className="text-accent-cyan">direct</span></div>
                  </div>

                  <ScrollLink
                    to="quote"
                    className="w-full mt-5 py-3.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider bg-background text-foreground border border-luxury-border hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Work With Us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </ScrollLink>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Philosophy */}
          <div className="lg:col-span-7">
            <Reveal variant="right">
              <p className="text-luxury-muted text-sm sm:text-base leading-relaxed mb-4">
                A founder-led studio, run by <span className="text-foreground font-semibold">{CONTACT.name}</span>.
                Not a chain of handovers — the person who understands the problem is the one who
                designs the system and writes the code that runs it.
              </p>
              <p className="text-luxury-muted text-sm sm:text-base leading-relaxed mb-10">
                The approach is simple: understand the business before writing a line of code,
                choose the least complicated thing that will hold, and build it so the next
                version is an addition rather than a rewrite.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 80}>
                  <div className="h-full glass-panel theme-card-shadow rounded-2xl border border-luxury-border p-5 hover:border-luxury-border-hover transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                      <h3 className="text-[13px] font-bold text-foreground leading-tight">{p.title}</h3>
                    </div>
                    <p className="text-[11.5px] leading-relaxed text-luxury-muted">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
