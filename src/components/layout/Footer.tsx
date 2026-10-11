import Link from "next/link";
import { legalNav } from "@/content/navigation";
import { site } from "@/content/site";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="page-container grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-on-ink-soft">{site.tagline}</p>
        </div>

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm md:col-span-4">
          <dt className="text-on-ink-soft">KvK</dt>
          <dd>{site.kvk}</dd>
          <dt className="text-on-ink-soft">Btw-id</dt>
          <dd>{site.btwId}</dd>
          <dt className="text-on-ink-soft">Vestigingsplaats</dt>
          <dd>{site.location}</dd>
        </dl>

        <nav aria-label="Juridisch" className="md:col-span-3">
          <ul className="flex flex-col text-sm">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="page-container border-t border-on-ink/10 py-6 text-sm text-on-ink-soft">
        <p>
          © <CurrentYear /> {site.name}
        </p>
      </div>
    </footer>
  );
}
