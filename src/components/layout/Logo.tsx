import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const text = variant === "light" ? "text-cream-50" : "text-ink";
  const sub = variant === "light" ? "text-cream-100/70" : "text-ink-muted";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {/* Mark: a stylised leaf/heart for care + growth */}
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-forest-700 text-cream-50 shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
          <path
            d="M12 21s-6.5-4.35-8.5-8.2C2.1 10 3 6.5 6.2 6c2-.3 3.4 1 3.8 2.2C10.4 7 11.8 5.7 13.8 6 17 6.5 17.9 10 16.5 12.8 15 16 12 21 12 21Z"
            fill="#d9b25f"
          />
          <path
            d="M12 8c1.6 1.6 1.6 4.4 0 6-1.6-1.6-1.6-4.4 0-6Z"
            fill="#1d4338"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold ${text}`}>
          Viora Care
        </span>
        <span className={`mt-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Cavendish Care Home
        </span>
      </span>
    </Link>
  );
}
