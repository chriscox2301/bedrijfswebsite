import { processSection, steps } from "@/content/steps";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Vier stappen als tijdlijn: op mobiel verticaal, op desktop horizontaal. */
export function Process() {
  return (
    <section id="werkwijze" aria-labelledby="werkwijze-titel" className="py-section lg:py-section-lg">
      <div className="page-container">
        <SectionHeading id="werkwijze-titel" label={processSection.label} title={processSection.title} />

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 90} className="h-full">
                <div className="h-full border-l border-ink/10 pb-8 pl-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-8 lg:pl-0">
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl font-semibold tracking-tight text-accent lg:text-7xl"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                    <span className="sr-only">Stap {step.number}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
