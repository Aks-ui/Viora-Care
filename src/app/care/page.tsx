import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTA } from "@/components/sections/CTA";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { careServices } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Care",
  description:
    "Residential personal care for elderly adults at Cavendish Care Home — person-centred care plans, companionship, nutrition and coordinated healthcare.",
};

const approach = [
  {
    step: "01",
    title: "Getting to know you",
    body: "Before anyone moves in, we sit down with the resident and their family to understand their history, health, routines and the things that bring them joy.",
  },
  {
    step: "02",
    title: "A plan built around the person",
    body: "We translate that into a person-centred care plan — practical, detailed and owned by the resident, not imposed on them.",
  },
  {
    step: "03",
    title: "Consistent, everyday care",
    body: "A familiar team delivers that care day in, day out, adapting gently as needs change and always protecting choice and dignity.",
  },
  {
    step: "04",
    title: "Reviewing & staying in touch",
    body: "We review plans regularly and keep families genuinely informed — supported by our digital care management system.",
  },
];

const promises = [
  "Round-the-clock residential dementia care",
  "Support with washing, dressing, mobility & continence",
  "Safe medication management",
  "Freshly prepared meals with mealtime support",
  "Meaningful, dementia-friendly activities & companionship",
  "Coordination with GPs, nurses & dementia specialists",
  "Respite, short-stay & day care options",
  "Dignified end-of-life care with compassion",
];

export default function CarePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Care"
        title="Specialist dementia care, delivered with warmth"
        intro="We provide CQC-rated 'Good' residential dementia care for older people — plus respite and day care — supporting everyday life, health and happiness in a home that feels like one."
      >
        <Link href="/admissions" className="btn-accent">
          Admissions & fees
        </Link>
        <Link
          href="/contact"
          className="btn border border-cream-100/30 bg-white/10 text-cream-50 backdrop-blur hover:bg-white/20"
        >
          Speak to our team
        </Link>
      </PageHero>

      {/* Services */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we provide"
          title="Care that covers the whole person"
          intro="Physical, emotional and social wellbeing all matter. Here's how our care comes together for every resident."
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careServices.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <FeatureCard icon={s.icon as never} title={s.title} body={s.body} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Approach */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our approach"
            title="Person-centred, from day one"
            intro="Truly individual care follows a simple, consistent rhythm — one built on listening."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
            {approach.map((a) => (
              <StaggerItem key={a.step} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl border border-forest-100 bg-white/85 p-7 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-forest-100">
                    {a.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Promises checklist */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Included as standard"
            title="What every resident can count on"
            intro="No surprises and no hidden essentials — these are the foundations of life at Cavendish."
          />
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {promises.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-3 rounded-2xl border border-forest-100 bg-white/85 p-4 shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-ink-soft">{p}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA
        title="Wondering if Cavendish is right for your loved one?"
        body="Our team is happy to talk through care needs, answer questions and arrange an assessment — with no pressure and no obligation."
      />
    </>
  );
}
