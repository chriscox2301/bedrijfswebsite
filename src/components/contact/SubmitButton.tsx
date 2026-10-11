import { Icon } from "@/components/ui/Icon";

/** Verzendknop in dezelfde stijl als ButtonLink (primary). */
export function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex min-h-12 whitespace-nowrap w-full items-center justify-between gap-3 rounded-full bg-accent py-2 pr-2 pl-6 font-medium text-on-accent transition-[background-color,transform] duration-500 ease-spring hover:bg-accent-hover active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Bezig met versturen…" : "Offerte aanvragen"}
      <span className="flex size-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <Icon name="arrowUpRight" className="size-4" />
      </span>
    </button>
  );
}
