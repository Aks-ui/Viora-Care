"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { primaryNav, site } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Inner pages have a dark forest hero; the homepage hero is light cream.
  // When at the top (not scrolled) over a dark hero, switch the header to
  // light text for legibility. Once scrolled, the header always has a cream
  // background, so dark text is used everywhere.
  const light = !scrolled && pathname !== "/";

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-forest-100/70 bg-cream-50/85 py-2 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between" aria-label="Primary">
        <Logo variant={light ? "light" : "dark"} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? light
                        ? "text-cream-50"
                        : "text-forest-800"
                      : light
                        ? "text-cream-100/85 hover:text-cream-50"
                        : "text-ink-soft hover:text-forest-700"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        light ? "bg-white/15" : "bg-forest-100"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={
              light
                ? "btn !py-2.5 border border-cream-100/30 bg-white/10 text-cream-50 backdrop-blur hover:bg-white/20"
                : "btn-ghost !py-2.5"
            }
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className={
              light
                ? "btn !py-2.5 bg-cream-50 text-forest-800 shadow-soft hover:bg-white hover:-translate-y-0.5"
                : "btn-primary !py-2.5"
            }
          >
            Arrange a visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid h-11 w-11 place-items-center rounded-2xl border backdrop-blur transition-colors lg:hidden ${
            light
              ? "border-cream-100/30 bg-white/10 text-cream-50"
              : "border-forest-200 bg-white/70 text-forest-800"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream-50 px-6 pb-8 pt-24 shadow-lift"
            >
              <ul className="flex flex-col gap-1">
                {primaryNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-2xl px-4 py-3.5 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-forest-100 text-forest-800"
                          : "text-ink-soft hover:bg-forest-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a href={site.phoneHref} className="btn-ghost w-full">
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
                <Link href="/contact" className="btn-primary w-full">
                  Arrange a visit
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
