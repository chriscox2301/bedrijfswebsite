import { hero } from "@/content/hero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroMockup } from "./HeroMockup";

/**
 * Bovenste deel van de homepage. De tekst komt bij het laden één keer
 * gestaffeld binnen (animate-rise); verder staat alles stil.
 */
export function Hero() {
  // Kleine helper zodat elk element net iets later binnenkomt dan het vorige.
  const rise = (step: number) => ({ animationDelay: `${step * 90}ms` });

  return (
    <section aria-labelledby="hero-titel" className="overflow-x-clip pt-32 pb-section md:pt-44 lg:pb-section-lg">
      <div className="page-container grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p
            style={rise(0)}
            className="inline-flex animate-rise items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-sm text-ink-soft shadow-soft ring-1 ring-ink/[0.06]"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-titel"
            style={rise(1)}
            className="mt-7 animate-rise font-display text-display font-semibold text-balance"
          >
            {hero.title}
          </h1>

          <p style={rise(2)} className="mt-7 max-w-[34rem] animate-rise text-lg leading-relaxed text-ink-soft">
            {hero.intro}
          </p>

          <div style={rise(3)} className="mt-10 flex animate-rise flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div style={rise(4)} className="animate-rise lg:col-span-6">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
