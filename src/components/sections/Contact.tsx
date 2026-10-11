import { contactSection } from "@/content/contact";
import { site } from "@/content/site";
import { Bezel } from "@/components/ui/Bezel";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export function Contact() {
  // tel:-links mogen geen spaties bevatten
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <section id="contact" aria-labelledby="contact-titel" className="bg-surface py-section lg:py-section-lg">
      <div className="page-container grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-titel"
            label={contactSection.label}
            title={contactSection.title}
            intro={contactSection.text}
          />

          <Reveal delay={100}>
            <ul className="mt-10 flex flex-col gap-2">
              <ContactLink icon="mail" href={`mailto:${site.email}`} label={site.email} />
              <ContactLink icon="phone" href={phoneHref} label={site.phone} />
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <Bezel coreClassName="p-6 sm:p-10">
            <ContactForm />
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({ icon, href, label }: { icon: "mail" | "phone"; href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="inline-flex min-h-11 items-center gap-3 text-lg underline-offset-4 hover:underline"
      >
        <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon name={icon} className="size-5" />
        </span>
        {label}
      </a>
    </li>
  );
}
