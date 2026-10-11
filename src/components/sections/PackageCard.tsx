import type { Package } from "@/content/pricing";
import { Bezel } from "@/components/ui/Bezel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

/** Eén prijspakket. Het uitgelichte pakket is donker en iets hoger op desktop. */
export function PackageCard({ item }: { item: Package }) {
  const dark = Boolean(item.highlighted);
  const soft = dark ? "text-on-ink-soft" : "text-ink-soft";

  return (
    <Bezel
      tone={dark ? "dark" : "light"}
      className={dark ? "shadow-lift" : ""}
      coreClassName={`flex flex-col p-8 ${dark ? "lg:py-12" : ""}`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{item.name}</h3>
        {item.badge && (
          <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-on-accent">
            {item.badge}
          </span>
        )}
      </div>
      <p className={`mt-2 ${soft}`}>{item.description}</p>

      <p className="mt-8 flex items-baseline gap-2">
        {item.showFrom && <span className={soft}>vanaf</span>}
        <span className="font-display text-4xl font-semibold tracking-tight">{item.price}</span>
      </p>

      <ul className={`mt-8 flex flex-col gap-3 border-t pt-8 ${dark ? "border-on-ink/10" : "border-ink/[0.07]"}`}>
        {item.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Icon name="check" className={`mt-0.5 size-5 shrink-0 ${dark ? "text-on-ink" : "text-accent"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href={item.cta.href}
        variant={dark ? "primary" : "secondary"}
        className="mt-10 w-full"
      >
        {item.cta.label}
      </ButtonLink>
    </Bezel>
  );
}
