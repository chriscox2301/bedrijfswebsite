import { packages, pricingSection } from "@/content/pricing";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "./PackageCard";

export function Pricing() {
  return (
    <section id="prijzen" aria-labelledby="prijzen-titel" className="py-section lg:py-section-lg">
      <div className="page-container">
        <SectionHeading
          id="prijzen-titel"
          label={pricingSection.label}
          title={pricingSection.title}
          intro={pricingSection.intro}
        />

        <ul className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:items-center">
          {packages.map((item, index) => (
            <li key={item.name}>
              <Reveal delay={index * 80}>
                <PackageCard item={item} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-soft">{pricingSection.footnote}</p>
      </div>
    </section>
  );
}
