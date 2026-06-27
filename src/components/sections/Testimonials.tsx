"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count],
  );

  // Auto-advance, paused for reduced motion.
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(t);
  }, [count, reduce]);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 text-cream-50 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-forest-500/30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Families on Cavendish"
            title="Trusted by the people who matter most"
            align="center"
            light
          />
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <Quote
            aria-hidden
            className="mx-auto h-12 w-12 text-gold-400"
            strokeWidth={1.5}
          />
          <div className="relative mt-6 min-h-[12rem] sm:min-h-[10rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="text-balance text-xl font-medium leading-relaxed text-cream-50 sm:text-2xl">
                  “{current.quote}”
                </p>
                <footer className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-gold-300">
                  {current.author}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/20 text-cream-100/80 transition-colors hover:bg-white/10 hover:text-cream-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-7 bg-gold-400"
                      : "w-2 bg-cream-100/30 hover:bg-cream-100/60"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream-100/20 text-cream-100/80 transition-colors hover:bg-white/10 hover:text-cream-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
