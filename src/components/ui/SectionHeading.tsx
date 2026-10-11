import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id: string; // wordt gekoppeld aan aria-labelledby van de sectie
  label: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

/** Kop van een sectie: klein label (de naam uit het menu), grote titel, optionele intro. */
export function SectionHeading({ id, label, title, intro, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className="max-w-3xl">
      <p
        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide ring-1 ${
          dark ? "text-on-ink-soft ring-on-ink/15" : "text-ink-soft ring-ink/10"
        }`}
      >
        {label}
      </p>
      <h2 id={id} className="mt-5 font-display text-heading font-semibold text-balance">
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? "text-on-ink-soft" : "text-ink-soft"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
