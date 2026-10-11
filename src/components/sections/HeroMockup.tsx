import Image from "next/image";
import { hero } from "@/content/hero";
import { Bezel } from "@/components/ui/Bezel";

/**
 * AFBEELDINGSPLEK voor de laptop + telefoon mockup.
 * Zet `hero.image` in src/content/hero.ts en de echte afbeelding verschijnt hier.
 * Tot die tijd tekenen we een simpele webshop in CSS, in de merkkleur van de site.
 */
export function HeroMockup() {
  if (hero.image) {
    return (
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        width={1200}
        height={900}
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label="Placeholder voor een mockup van een webshop op laptop en telefoon"
      className="relative mx-auto max-w-xl pb-10 pl-6 sm:pl-12"
    >
      <Laptop />
      <Phone />
      <span className="absolute top-3 right-3 rounded-full bg-ink px-3 py-1 text-xs font-medium text-on-ink">
        [MOCKUP-AFBEELDING]
      </span>
    </div>
  );
}

function Laptop() {
  return (
    <div>
      <Bezel className="shadow-lift" coreClassName="overflow-hidden">
        <BrowserBar />
        <div className="p-4 sm:p-5">
          <ShopHeader />
          <div className="mt-4 flex h-24 flex-col justify-center gap-2 rounded-xl bg-accent-soft px-5 sm:h-28">
            <div className="h-2.5 w-2/5 rounded-full bg-accent" />
            <div className="h-2 w-3/5 rounded-full bg-accent/30" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }, (_, i) => (
              <ProductTile key={i} />
            ))}
          </div>
        </div>
      </Bezel>
      {/* Onderkant van de laptop */}
      <div className="-mx-[4%] h-3 rounded-b-2xl bg-linear-to-b from-ink/15 to-ink/5" />
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute bottom-0 left-0 w-28 sm:w-36 md:-rotate-3">
      <div className="rounded-[1.75rem] bg-ink p-1.5 shadow-lift">
        <div className="overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-surface p-2.5">
          <div className="mx-auto mb-2.5 h-1 w-8 rounded-full bg-ink/15" />
          <ShopHeader compact />
          <div className="mt-2.5 aspect-square rounded-lg bg-accent-soft" />
          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-ink/15" />
          <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-ink/30" />
          <div className="mt-3 h-6 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}

function BrowserBar() {
  return (
    <div className="flex items-center gap-3 border-b border-ink/[0.06] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
      </div>
      <div className="h-5 flex-1 rounded-full bg-ink/[0.04]" />
    </div>
  );
}

function ShopHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className={`rounded-md bg-accent ${compact ? "h-3 w-8" : "h-4 w-12"}`} />
      {!compact && (
        <div className="hidden gap-3 sm:flex">
          <span className="h-1.5 w-8 rounded-full bg-ink/15" />
          <span className="h-1.5 w-8 rounded-full bg-ink/15" />
          <span className="h-1.5 w-8 rounded-full bg-ink/15" />
        </div>
      )}
      <div className={`rounded-full bg-ink/10 ${compact ? "size-3" : "size-4"}`} />
    </div>
  );
}

function ProductTile() {
  return (
    <div>
      <div className="aspect-[4/5] rounded-lg bg-ink/[0.05]" />
      <div className="mt-2 h-1.5 w-4/5 rounded-full bg-ink/15" />
      <div className="mt-1.5 h-1.5 w-2/5 rounded-full bg-ink/30" />
    </div>
  );
}
