import { services, servicesSection } from "@/content/services";
import { Bezel } from "@/components/ui/Bezel";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * Bento-indeling op desktop: de eerste dienst krijgt een grote kaart links,
 * de rest staat rechts gestapeld. Op mobiel gewoon onder elkaar.
 */
const layout = ["lg:col-span-7 lg:row-span-2", "lg:col-span-5", "lg:col-span-5"];

export function Services() {
  return (
    <section id="diensten" aria-labelledby="diensten-titel" className="py-section lg:py-section-lg">
      <div className="page-container">
        <SectionHeading id="diensten-titel" label={servicesSection.label} title={servicesSection.title} />

        <ul className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          {services.map((service, index) => {
            const featured = index === 0;
            return (
              <li key={service.title} className={layout[index] ?? "lg:col-span-6"}>
                <Reveal delay={index * 80} className="h-full">
                  <Bezel
                    className="h-full"
                    coreClassName={`flex flex-col p-8 ${featured ? "justify-between gap-16 lg:p-12" : "gap-10"}`}
                  >
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Icon name={service.icon} className="size-7" />
                    </span>
                    <div>
                      <h3
                        className={`font-display font-semibold tracking-tight ${
                          featured ? "text-3xl lg:text-4xl" : "text-2xl"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed text-ink-soft ${featured ? "max-w-md text-lg" : ""}`}
                      >
                        {service.text}
                      </p>
                    </div>
                  </Bezel>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
