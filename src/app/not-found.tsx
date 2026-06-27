import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-cream-50 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-forest-100/60 blur-3xl"
      />
      <div className="container-x relative text-center">
        <p className="font-display text-7xl font-semibold text-forest-700 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-ink-soft">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back to somewhere familiar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link href="/contact" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
