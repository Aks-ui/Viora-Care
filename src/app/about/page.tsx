import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { owners, strategy, values } from "@/lib/site";
import { Building2, HeartHandshake } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Cavendish Care Home and Viora Care Limited — over two decades of trusted residential care in Gloucester, and our plans for the future.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Viora Care"
        title="Two decades of care, a fresh commitment to the future"
        intro="Cavendish Care Home has cared for elderly residents on Stroud Road since 2003. In 2025 it became part of Viora Care Limited — new stewardship, the same familiar faces, and a clear plan to make a good home even better."
      >
        <Link href="/contact" className="btn-accent">
          Arrange a visit
        </Link>
        <Link
          href="/care"
          className="btn border border-cream-100/30 bg-white/10 text-cream-50 backdrop-blur hover:bg-white/20"
        >
          Our care approach
        </Link>
      </PageHero>

      {/* Intro / mission */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who we are"
            title="A Gloucester care home, under thoughtful new ownership"
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <Reveal>
              <p>
                Cavendish Care Home is a 23-bed residential care home at 301
                Stroud Road, Gloucester. Since 2003 it has provided personal care
                for elderly adults in a warm, homely setting, earning the trust of
                generations of local families.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Viora Care Limited acquired the home in 2025. We deliberately kept
                what works — most importantly the experienced registered manager
                and a settled team whose average tenure is{" "}
                <strong className="font-semibold text-ink">8.3 years</strong>.
                Continuity of care isn&apos;t a nice-to-have; for our residents,
                it&apos;s everything.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                From here, we&apos;re investing carefully: improving the
                building, standardising our care processes, and introducing a
                digital care management system — always in service of the people
                who live and work here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / vision cards */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-cream-50 shadow-soft">
                <HeartHandshake className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Our mission
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
                To give every resident a later life of comfort, dignity and
                connection — care shaped around the individual, delivered by
                people who genuinely know and value them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-clay-500 text-cream-50 shadow-soft">
                <Building2 className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Our vision
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
                A sustainable, much-loved home with a balanced community of
                private and local-authority residents — where modern, well-run
                care never comes at the cost of warmth and familiarity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-20 sm:py-28">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Our journey"
            title="From 2003 to today"
            intro="A short history of Cavendish — and where Viora Care is taking it next."
            align="center"
          />
        </div>
        <Timeline />
      </section>

      {/* Ownership */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ownership"
            title="The people behind Viora Care"
            intro="Viora Care Limited is led by three beneficial owners committed to long-term, responsible stewardship of Cavendish."
            align="center"
          />
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {owners.map((o) => (
              <StaggerItem key={o.name}>
                <div className="group rounded-3xl border border-forest-100 bg-white/85 p-7 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest-700 font-display text-2xl font-semibold text-cream-50 shadow-soft">
                    {o.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{o.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{o.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Strategy */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Our strategy"
          title="How we're investing in Cavendish"
          intro="Four commitments that guide every decision we make about the home."
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {strategy.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="flex h-full gap-5 rounded-3xl border border-forest-100 bg-white/85 p-7 shadow-soft">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                  <Icon name={s.icon as never} className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Values strip */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="The principles we hold to"
            align="center"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex items-start gap-3 rounded-2xl border border-forest-100 bg-white/85 p-5 shadow-soft">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-700 text-cream-50">
                    <Icon name={v.icon as never} className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {v.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
