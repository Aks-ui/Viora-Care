import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTA } from "@/components/sections/CTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { facilities } from "@/lib/site";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Home",
  description:
    "Take a look around Cavendish Care Home — 23 en-suite bedrooms, homely lounges, landscaped gardens and welcoming spaces for families in Gloucester.",
};

// Decorative illustrated gallery tiles (no external image assets required).
const tiles = [
  { label: "Bedrooms", from: "#234f42", to: "#14322a", kind: "room" },
  { label: "Gardens", from: "#357a64", to: "#234f42", kind: "garden" },
  { label: "Lounge", from: "#c66a45", to: "#8f4631", kind: "lounge" },
  { label: "Dining", from: "#2a6a56", to: "#1d4338", kind: "dining" },
  { label: "Activities", from: "#d9b25f", to: "#a87f30", kind: "activity" },
  { label: "Visiting areas", from: "#4f8d79", to: "#2a6a56", kind: "visit" },
];

function Tile({
  from,
  to,
  label,
  big = false,
}: {
  from: string;
  to: string;
  label: string;
  big?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-forest-100 shadow-soft ${
        big ? "sm:row-span-2" : ""
      }`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full opacity-30"
        aria-hidden
      >
        <circle cx="160" cy="40" r="50" fill="#ffffff" opacity="0.12" />
        <circle cx="40" cy="170" r="60" fill="#ffffff" opacity="0.08" />
      </svg>
      <div
        className={`relative flex ${big ? "min-h-[20rem]" : "min-h-[12rem]"} items-end p-6`}
      >
        <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-cream-50 backdrop-blur transition-colors group-hover:bg-white/25">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function OurHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Home"
        title="A warm, welcoming place to call home"
        intro="Cavendish is a small, homely dementia care home on Stroud Road, Gloucester — comfortable, safe and easy to navigate, with calm, dementia-friendly spaces designed around how our residents actually live."
      >
        <Link href="/contact" className="btn-accent">
          Book a tour
        </Link>
      </PageHero>

      {/* Gallery */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Look around"
          title="Spaces made for comfort & company"
          intro="An illustrated look at the home — the best impression, of course, comes from visiting in person."
          align="center"
        />
        <Reveal>
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t, i) => (
              <Tile
                key={t.label}
                from={t.from}
                to={t.to}
                label={t.label}
                big={i === 0}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Facilities */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Facilities"
            title="Everything close to hand"
            intro="Thoughtful, accessible spaces — designed for safety without ever feeling clinical."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <FeatureCard icon={f.icon as never} title={f.title} body={f.body} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Location */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Where to find us"
            title="Rooted in the Gloucester community"
            intro="We're on Stroud Road, close to local amenities and easily reached by family and friends — making visits simple and frequent."
          />
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] border border-forest-100 shadow-soft">
              <iframe
                title="Map showing Cavendish Care Home, 301 Stroud Road, Gloucester"
                src="https://www.google.com/maps?q=301+Stroud+Road,+Gloucester,+GL1+5LB&output=embed"
                className="h-72 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center gap-3 bg-white px-6 py-4">
                <MapPin className="h-5 w-5 text-clay-500" />
                <p className="text-sm font-medium text-ink-soft">
                  301 Stroud Road, Gloucester, GL1 5LB
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="The best way to see it is to visit"
        body="Photos and words only go so far. Come and feel the atmosphere, meet the team and picture your loved one here."
      />
    </>
  );
}
