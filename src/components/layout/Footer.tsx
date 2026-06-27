import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { primaryNav, site } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream-100/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay"
      />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-cream-100/70">
              Warm, person-centred residential care for elderly adults in
              Gloucester — caring for our community since {site.establishedYear}.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream-100/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cream-100/80">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              CQC-registered care home
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-cream-100/70 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit / hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Opening times
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.hours.map((h) => (
                <li key={h.label} className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>
                    <span className="block text-cream-50">{h.label}</span>
                    <span className="text-cream-100/65">{h.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cream-50">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.postcode}
                </span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-cream-50"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-cream-50"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-pretty">
            {site.legalName} — registered in England &amp; Wales. Cavendish Care
            Home is registered with the Care Quality Commission.
          </p>
        </div>
      </div>
    </footer>
  );
}
