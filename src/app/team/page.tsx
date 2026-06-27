import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { Counter } from "@/components/motion/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { team } from "@/lib/site";
import { Award, HeartHandshake, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the experienced, long-serving team at Cavendish Care Home — led by a retained registered manager, with an average staff tenure of 8.3 years.",
};

const teamStats = [
  { value: 23, suffix: "", label: "Team members", icon: HeartHandshake },
  { value: 8.3, suffix: " yrs", label: "Average tenure", icon: Award, dec: 1 },
  { value: 100, suffix: "%", label: "Care that stays consistent", icon: GraduationCap },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people who make Cavendish feel like home"
        intro="Great care is, in the end, about people. Ours is a settled, experienced team — many of whom have been here for years — who know our residents not as cases, but as individuals."
      >
        <Link href="/contact" className="btn-accent">
          Join us / get in touch
        </Link>
      </PageHero>

      {/* Stats */}
      <section className="container-x py-20 sm:py-24">
        <Stagger className="grid gap-6 sm:grid-cols-3">
          {teamStats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="rounded-3xl border border-forest-100 bg-white/85 p-8 text-center shadow-soft">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-forest-100 text-forest-700">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <p className="mt-4 font-display text-4xl font-semibold text-forest-700">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.dec ?? 0} />
                </p>
                <p className="mt-1 text-sm font-medium text-ink-muted">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Continuity callout */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Continuity matters"
            title="The same faces, through the transition and beyond"
            intro="When Viora Care took over in 2025, our first commitment was to the team. We retained the experienced registered manager and the carers our residents already knew and trusted — because familiarity is part of good care, not a detail."
          />
          <Reveal direction="left">
            <div className="rounded-[2rem] border border-forest-100 bg-white/85 p-8 shadow-soft">
              <p className="font-display text-2xl font-semibold leading-snug text-ink">
                “Stability is the quiet ingredient in everything good about this
                home.”
              </p>
              <p className="mt-4 text-ink-soft">
                A long-serving team builds deep relationships, spots subtle
                changes early and creates the kind of trust that can&apos;t be
                rushed. It&apos;s why we protect it so fiercely.
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-forest-100 pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-700 font-display font-semibold text-cream-50">
                  RM
                </span>
                <div>
                  <p className="font-semibold text-ink">Registered Manager</p>
                  <p className="text-sm text-ink-muted">Retained &amp; leading the home</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team roles */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Who you'll meet"
          title="A team for every part of the day"
          intro="From the registered manager to housekeeping, every role exists to make our residents' lives easier, safer and happier."
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <article className="group flex h-full gap-5 rounded-3xl border border-forest-100 bg-white/85 p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 font-display text-lg font-semibold text-cream-50 shadow-soft">
                  {member.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                  <p className="text-sm font-medium text-clay-500">{member.role}</p>
                  <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTA
        title="Interested in joining our team?"
        body="We're always glad to hear from kind, dependable people who want to make a real difference in older people's lives. Get in touch to find out about opportunities."
      />
    </>
  );
}
