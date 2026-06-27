"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Shared inner-page hero with a calm forest gradient and animated headline.
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-radial-forest pt-36 pb-20 text-cream-50 sm:pt-44 sm:pb-28">
      {/* decorative blurred orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-forest-500/30 blur-3xl"
        animate={{ y: [0, 24, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-clay-500/20 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay"
      />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <motion.span
            className="eyebrow !text-gold-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-px w-8 bg-gold-400" />
            {eyebrow}
          </motion.span>

          <motion.h1
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>

          {intro && (
            <motion.p
              className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cream-100/85"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {intro}
            </motion.p>
          )}

          {children && (
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* soft curved divider */}
      <svg
        aria-hidden
        className="absolute -bottom-px left-0 w-full text-cream-50"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,80 480,80 720,56 C960,32 1200,16 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
