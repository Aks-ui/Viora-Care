"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success";

const enquiryTypes = [
  "Arrange a visit / tour",
  "Care & availability",
  "Fees & funding",
  "Careers",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please tell us your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";
    if (!String(data.get("message") || "").trim())
      next.message = "A short message helps us help you.";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    // No backend wired up — simulate a network round-trip.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
    form.reset();
  }

  const fieldBase =
    "w-full rounded-2xl border bg-white px-4 py-3 text-ink shadow-soft outline-none transition-colors placeholder:text-ink-muted/70 focus:border-forest-500";

  return (
    <div className="relative rounded-[2rem] border border-forest-100 bg-white/85 p-7 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-forest-100 text-forest-700"
            >
              <CheckCircle2 className="h-9 w-9" />
            </motion.span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              Thank you — message received
            </h3>
            <p className="mt-2 max-w-sm text-pretty text-ink-soft">
              A member of our team will be in touch very soon. For anything
              urgent, please call us directly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-ghost mt-7"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className={`${fieldBase} ${errors.name ? "border-clay-400" : "border-forest-100"}`}
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="01452 000 000"
                  className={`${fieldBase} border-forest-100`}
                />
              </Field>
            </div>

            <Field label="Email address" error={errors.email}>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`${fieldBase} ${errors.email ? "border-clay-400" : "border-forest-100"}`}
              />
            </Field>

            <Field label="How can we help?">
              <select name="enquiry" className={`${fieldBase} border-forest-100`} defaultValue={enquiryTypes[0]}>
                {enquiryTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>

            <Field label="Your message" error={errors.message}>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about your situation and how we can help…"
                className={`${fieldBase} resize-none ${errors.message ? "border-clay-400" : "border-forest-100"}`}
              />
            </Field>

            <p className="text-xs text-ink-muted">
              We&apos;ll only use your details to respond to your enquiry. By
              sending this form you agree to us contacting you about your
              request.
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </span>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 block text-sm text-clay-600"
        >
          {error}
        </motion.span>
      )}
    </label>
  );
}
