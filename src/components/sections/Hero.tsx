"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream-50 pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden
        style={{ y: yBlob }}
        className="pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem] rounded-full bg-forest-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-clay-100/50 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-forest-700 shadow-soft backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-forest-600" />
            CQC-rated &lsquo;Good&rsquo; · Specialist dementia care
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl lg:text-6xl"
          >
            A place to feel{" "}
            <span className="relative whitespace-nowrap text-forest-700">
              truly at home
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                className="absolute -bottom-2 left-0 w-full text-gold-400"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M3 11 C 60 4, 130 4, 297 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.7, ease }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft"
          >
            Cavendish Care Home is a specialist dementia care home in Gloucester —
            warm, person-centred residential, respite and day care, an experienced
            team that stays, and the small comforts that make a house a home.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Arrange a visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-ghost">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </span>
              Loved by families
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-400" />
              Caring for 30+ years
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-clay-400" />
              Experienced team retained
            </span>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative"
        >
          <motion.div
            style={{ y: yImage }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-forest-100 bg-gradient-to-br from-forest-700 via-forest-800 to-forest-900 shadow-glow"
          >
            {/* Stylised illustrative scene (no external assets needed) */}
            <div
              aria-hidden
              className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay"
            />
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a6a56" />
                  <stop offset="100%" stopColor="#14322a" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#sky)" />
              {/* sun */}
              <circle cx="300" cy="120" r="46" fill="#d9b25f" opacity="0.85" />
              {/* hills */}
              <path d="M0 360 Q120 300 240 350 T400 330 V500 H0 Z" fill="#1d4338" />
              <path d="M0 410 Q140 360 260 400 T400 390 V500 H0 Z" fill="#163a30" />
              {/* the home */}
              <g>
                <rect x="120" y="250" width="160" height="130" rx="8" fill="#faf6ee" />
                <path d="M110 252 L200 200 L290 252 Z" fill="#c66a45" />
                <rect x="150" y="300" width="34" height="80" rx="4" fill="#234f42" />
                <rect x="205" y="290" width="30" height="30" rx="4" fill="#aecfc2" />
                <rect x="245" y="290" width="30" height="30" rx="4" fill="#aecfc2" />
                <rect x="190" y="225" width="20" height="26" fill="#8f4631" />
              </g>
              {/* trees */}
              <circle cx="70" cy="330" r="34" fill="#2a6a56" />
              <rect x="64" y="350" width="12" height="36" fill="#5a2f24" />
              <circle cx="340" cy="340" r="28" fill="#357a64" />
              <rect x="335" y="356" width="10" height="30" fill="#5a2f24" />
            </svg>

            {/* Floating glass stat card */}
            <motion.div
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7, ease }}
            >
              <p className="text-sm font-medium text-cream-50">
                “The staff treat Mum like family.”
              </p>
              <p className="mt-1 text-xs text-cream-100/75">
                — Daughter of a resident
              </p>
            </motion.div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -left-4 top-8 hidden rounded-2xl border border-forest-100 bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-100 text-forest-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-semibold text-ink">Rated &lsquo;Good&rsquo;</p>
                <p className="text-xs text-ink-muted">by the CQC</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
