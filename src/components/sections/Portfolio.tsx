import { cases, portfolioSection } from "@/content/cases";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseCard } from "./CaseCard";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-titel"
      className="bg-surface py-section lg:py-section-lg"
    >
      <div className="page-container">
        <SectionHeading id="portfolio-titel" label={portfolioSection.label} title={portfolioSection.title} />

        {/* De eerste case staat breed bovenaan, de rest in twee kolommen eronder. */}
        <ul className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-20">
          {cases.map((item, index) => (
            <li key={`${item.name}-${index}`} className={index === 0 ? "md:col-span-2" : ""}>
              <Reveal delay={(index % 2) * 80}>
                <CaseCard item={item} wide={index === 0} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
