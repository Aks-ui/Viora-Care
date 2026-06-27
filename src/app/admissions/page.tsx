import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Check, Banknote, Building, HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Fees",
  description:
    "How to arrange a place at Cavendish Care Home in Gloucester — our admissions process, funding options for private and local-authority residents, and FAQs.",
};

const steps = [
  {
    n: "01",
    title: "Get in touch",
    body: "Call or message us with a few details about your loved one and what you're looking for. There's no obligation.",
  },
  {
    n: "02",
    title: "Visit & look around",
    body: "Come for a tour, meet the team and ask anything. We want you to feel completely confident.",
  },
  {
    n: "03",
    title: "Care assessment",
    body: "We carry out a friendly, thorough assessment of care needs to make sure Cavendish is the right fit.",
  },
  {
    n: "04",
    title: "Welcome home",
    body: "We agree a care plan and funding, then help with a calm, well-supported move into the home.",
  },
];

const funding = [
  {
    icon: HandCoins,
    title: "Privately funded",
    body: "Residents funding their own care benefit from a clear, transparent fee that covers accommodation, personal care, meals and activities.",
  },
  {
    icon: Building,
    title: "Local-authority funded",
    body: "We welcome local-authority funded residents and work with Gloucestershire County Council. We're growing toward a balanced private/LA mix.",
  },
  {
    icon: Banknote,
    title: "Help understanding options",
    body: "Funding can feel daunting. Our team will help you understand assessments, NHS-funded nursing care and what support you may be entitled to.",
  },
];

const included = [
  "En-suite bedroom & all accommodation",
  "24-hour residential personal care",
  "All freshly prepared meals & refreshments",
  "Activities, outings & companionship",
  "Housekeeping, laundry & utilities",
  "Care planning & family updates",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Fees"
        title="A calm, supported path to moving in"
        intro="Choosing a care home is a big decision. We aim to make the process simple, honest and reassuring — for both privately funded and local-authority funded residents."
      >
        <Link href="/contact" className="btn-accent">
          Start a conversation
        </Link>
      </PageHero>

      {/* Steps */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="Four simple steps"
          intro="From your first call to moving-in day, we'll guide you at every stage."
          align="center"
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n} className="h-full">
              <div className="relative h-full rounded-3xl border border-forest-100 bg-white/85 p-7 shadow-soft">
                <span className="font-display text-5xl font-semibold text-forest-100">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Funding */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Funding & fees"
            title="Clear options, whoever is funding care"
            intro="Fees depend on individual care needs and room choice. We'll always give you a clear, written breakdown — no jargon, no surprises."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {funding.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <div className="h-full rounded-3xl border border-forest-100 bg-white/85 p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-cream-50 shadow-soft">
                    <f.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What's included */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="In your fee"
            title="What's included as standard"
            intro="One straightforward fee covers the essentials of a comfortable, well-cared-for life at Cavendish."
          />
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-2xl border border-forest-100 bg-white/85 p-4 shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-ink-soft">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Good to know"
              title="Frequently asked questions"
              intro="Can't find what you're looking for? We're only a phone call away."
              align="center"
            />
          </div>
          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>

      <CTA
        title="Ready to take the next step?"
        body="Talk to our team about availability, fees and arranging a care assessment. We're here to help, at your pace."
      />
    </>
  );
}
