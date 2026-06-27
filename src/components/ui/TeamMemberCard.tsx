"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/site";

function initials(name?: string) {
  if (!name) return "";
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, role, department, bio, photo } = member;
  const title = name || role;
  // For named members, show their role beneath the name. For placeholders the
  // title already is the role, so we skip the subtitle to avoid repetition.
  const subtitle = name ? role : undefined;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group h-full overflow-hidden rounded-3xl border border-forest-100 bg-white/85 shadow-soft"
    >
      {/* Portrait area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={name ? `${name}, ${role}` : role}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Tasteful placeholder until a real photo is supplied
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900">
            <div
              aria-hidden
              className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay"
            />
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5"
            />
            <span className="relative grid h-24 w-24 place-items-center rounded-full border border-cream-100/25 bg-white/10 text-cream-50 backdrop-blur transition-transform duration-500 group-hover:scale-105">
              {initials(name) ? (
                <span className="font-display text-2xl font-semibold">
                  {initials(name)}
                </span>
              ) : (
                <User className="h-10 w-10" strokeWidth={1.5} />
              )}
            </span>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-cream-100/80 backdrop-blur">
              Photo coming soon
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-clay-500">
          {department}
        </span>
        <h3 className="mt-1 text-lg font-semibold leading-tight text-ink">
          {title}
        </h3>
        {subtitle && <p className="mt-0.5 text-sm text-ink-muted">{subtitle}</p>}
        {bio && (
          <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{bio}</p>
        )}
      </div>
    </motion.article>
  );
}
