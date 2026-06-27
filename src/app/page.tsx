import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { values, careServices, strategy } from "@/lib/site";

const welcomePoints = [
  "Specialist residential, respite & dementia day care",
  "Rated 'Good' by the CQC in all areas",
  "Experienced home manager and team retained",
  "Senior care staff on site 24 hours a day",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />

      {/* Welcome */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative">
              <div className="aspect-[5/4] overflow-hidden rounded-[2.5rem] border border-forest-100 bg-gradient-to-br from-forest-100 to-cream-200 shadow-soft">
                <svg viewBox="0 0 500 400" className="h-full w-full" aria-hidden>
                  <rect width="500" height="400" fill="#eef5f2" />
                  <circle cx="120" cy="110" r="60" fill="#d6e7e0" />
                  <circle cx="380" cy="300" r="80" fill="#f6e2d6" />
                  <rect x="150" y="160" width="200" height="150" rx="14" fill="#faf6ee" />
                  <path d="M140 162 L250 110 L360 162 Z" fill="#c66a45" />
                  <rect x="185" y="210" width="40" height="100" rx="5" fill="#234f42" />
                  <rect x="265" y="200" width="34" height="34" rx="5" fill="#aecfc2" />
                  <rect x="310" y="200" width="34" height="34" rx="5" fill="#aecfc2" />
                </svg>
              </div>
              {/* badge */}
              <div className="absolute -bottom-6 -right-2 rounded-2xl border border-forest-100 bg-white px-5 py-4 shadow-lift sm:-right-6">
                <p className="font-display text-3xl font-semibold text-forest-700">
                  30+ yrs
                </p>
                <p className="text-sm text-ink-muted">caring for Gloucester</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to Cavendish"
              title="Specialist dementia care that feels like home"
              intro="For more than 30 years, Cavendish on Stroud Road has cared for older people in Gloucester — growing into the specialist, CQC-rated 'Good' dementia care home it is today. Under Viora Care, we're protecting everything that makes it special and thoughtfully investing in what comes next."
            />
            <Stagger className="mt-8 space-y-3.5">
              {welcomePoints.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-ink-soft">{point}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 font-semibold text-forest-700 link-underline"
              >
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind every day at Cavendish"
            intro="Good residential care isn't one big thing — it's a thousand small kindnesses, done consistently. These are the principles that guide ours."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <FeatureCard icon={v.icon as never} title={v.title} body={v.body} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Care preview */}
      <section className="container-x py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our care"
            title="Everything we do, centred on wellbeing"
            intro="From everyday personal care to companionship, nutrition and coordinated healthcare — delivered with patience and warmth."
          />
          <Reveal>
            <Link href="/care" className="btn-ghost shrink-0">
              Explore our care
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careServices.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <FeatureCard icon={s.icon as never} title={s.title} body={s.body} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Strategy / investment */}
      <section className="relative overflow-hidden bg-radial-forest py-20 text-cream-50 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay"
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="The Viora commitment"
            title="Building on strong foundations"
            intro="Our plan is simple: protect what residents and families already love, and invest carefully in the things that make care safer, kinder and more sustainable."
            align="center"
            light
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategy.map((s, i) => (
              <StaggerItem key={s.title} className="h-full">
                <div className="h-full rounded-3xl border border-cream-100/15 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                  <span className="font-display text-2xl font-semibold text-gold-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-cream-50">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/75">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
