import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cavendish Care Home, 301 Stroud Road, Gloucester GL1 5LB. Call, email or send an enquiry to arrange a visit.",
};

const details = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "301 Stroud Road\nGloucester, GL1 5LB",
    href: `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}`,
  },
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email us", value: site.email, href: site.emailHref },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        intro="Whether you're exploring options for a loved one, have a question about fees, or would like to arrange a visit — our team is here to help, with no pressure at all."
      />

      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Details */}
          <div>
            <div className="space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <a
                    href={d.href}
                    target={d.icon === MapPin ? "_blank" : undefined}
                    rel={d.icon === MapPin ? "noreferrer" : undefined}
                    className="group flex items-start gap-4 rounded-3xl border border-forest-100 bg-white/85 p-5 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest-700 text-cream-50 shadow-soft transition-transform duration-300 group-hover:scale-105">
                      <d.icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-ink-muted">
                        {d.label}
                      </span>
                      <span className="mt-1 block whitespace-pre-line font-medium text-ink">
                        {d.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Opening hours */}
            <Reveal delay={0.2}>
              <div className="mt-6 rounded-3xl border border-forest-100 bg-cream-100 p-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-forest-700">
                  <Clock className="h-4 w-4" />
                  Opening times
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {site.hours.map((h) => (
                    <li
                      key={h.label}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-ink-soft">{h.label}</span>
                      <span className="font-medium text-ink">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.26}>
              <div className="mt-6 overflow-hidden rounded-3xl border border-forest-100 shadow-soft">
                <iframe
                  title="Map showing Cavendish Care Home, Gloucester"
                  src="https://www.google.com/maps?q=301+Stroud+Road,+Gloucester,+GL1+5LB&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
