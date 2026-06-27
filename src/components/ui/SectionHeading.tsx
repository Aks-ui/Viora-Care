import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "!text-gold-300" : ""}`}>
            <span
              className={`h-px w-8 ${light ? "bg-gold-400" : "bg-forest-400"}`}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl ${
            light ? "text-cream-50" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-pretty text-lg leading-relaxed ${
              light ? "text-cream-100/80" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
