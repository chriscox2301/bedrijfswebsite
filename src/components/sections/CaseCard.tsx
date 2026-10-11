import Image from "next/image";
import type { Case } from "@/content/cases";
import { Icon } from "@/components/ui/Icon";

type CaseCardProps = {
  item: Case;
  wide?: boolean;
};

export function CaseCard({ item, wide = false }: CaseCardProps) {
  const aspect = wide ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3]";

  return (
    <article>
      <div className="rounded-shell bg-ink/[0.035] p-1.5 ring-1 ring-ink/[0.06]">
        <div className={`relative overflow-hidden rounded-core bg-paper ${aspect}`}>
          {item.image ? (
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-ink-soft">
              <Icon name="image" className="size-8" />
              <span className="text-sm">[CASE-AFBEELDING]</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 px-2 md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="max-w-xl">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </h3>
          <p className="mt-2 leading-relaxed text-ink-soft">{item.description}</p>
        </div>
        <p className="order-first w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent md:order-none">
          {item.industry}
        </p>
      </div>
    </article>
  );
}
