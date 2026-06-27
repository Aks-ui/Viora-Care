"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/motion/Counter";
import { stats } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="container-x -mt-4 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-forest-100 bg-forest-100 shadow-soft lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="group bg-cream-50 px-6 py-8 text-center transition-colors duration-300 hover:bg-white"
          >
            <p className="font-display text-4xl font-semibold text-forest-700 sm:text-5xl">
              {"raw" in s && s.raw ? (
                <Counter
                  value={s.value}
                  prefix={s.prefix ?? ""}
                  decimals={0}
                  duration={2}
                />
              ) : (
                <Counter
                  value={s.value}
                  suffix={s.suffix ?? ""}
                  decimals={s.value % 1 !== 0 ? 1 : 0}
                />
              )}
            </p>
            <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
