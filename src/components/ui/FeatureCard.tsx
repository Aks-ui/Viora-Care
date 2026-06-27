"use client";

import { motion } from "framer-motion";
import { Icon, type IconName } from "@/components/ui/Icon";

// Animated feature card with a hover lift and a soft icon spotlight.
export function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-forest-100/70 bg-white/85 p-7 shadow-soft backdrop-blur-sm"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-forest-100/0 transition-colors duration-500 group-hover:bg-forest-100/70" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700 text-cream-50 shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon name={icon} className="h-6 w-6" strokeWidth={1.8} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-2.5 text-pretty leading-relaxed text-ink-soft">{body}</p>
      </div>
    </motion.article>
  );
}
