"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/site";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* animated spine */}
      <div className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-forest-100 sm:left-1/2 sm:-translate-x-1/2">
        <motion.div
          className="absolute inset-x-0 top-0 w-px origin-top bg-gradient-to-b from-forest-500 to-gold-400"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: "100%" }}
        />
      </div>

      <ol className="space-y-10">
        {timeline.map((entry, i) => {
          const left = i % 2 === 0;
          return (
            <li key={entry.year} className="relative">
              <div
                className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
                  left ? "" : "sm:flex-row-reverse"
                }`}
              >
                {/* node */}
                <span className="absolute left-0 top-1 z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-cream-50 bg-forest-700 text-[0.65rem] font-bold text-cream-50 shadow-soft sm:left-1/2 sm:-translate-x-1/2">
                  {i + 1}
                </span>

                {/* card */}
                <motion.div
                  initial={{ opacity: 0, x: left ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`ml-14 w-full rounded-3xl border border-forest-100 bg-white/85 p-6 shadow-soft sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                    left ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-clay-500">
                    {entry.year}
                  </span>
                  <h3 className="mt-1.5 text-xl font-semibold text-ink">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink-soft">
                    {entry.body}
                  </p>
                </motion.div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
