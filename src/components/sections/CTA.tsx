"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function CTA({
  title = "Come and see Cavendish for yourself",
  body = "The best way to understand our home is to visit. Arrange a tour and meet the team who would care for your loved one.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-5xl bg-radial-forest px-7 py-14 text-center text-cream-50 shadow-glow sm:px-12 sm:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-clay-500/20 blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-forest-400/30 blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-cream-100/85">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-accent w-full sm:w-auto">
              Arrange a visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="btn w-full border border-cream-100/30 bg-white/10 text-cream-50 backdrop-blur hover:bg-white/20 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
