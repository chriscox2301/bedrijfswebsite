import Link from "next/link";
import { site } from "@/content/site";

/**
 * LOGO-PLEK
 * Zolang er geen logo is, tonen we een tekst-wordmark.
 * Echt logo? Zet het bestand in /public (bijv. /public/logo.svg) en vervang
 * de <span>'s hieronder door:
 *   <Image src="/logo.svg" alt="Cox Studio" width={120} height={32} priority />
 * (import Image from "next/image")
 */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full pr-2 font-display text-lg font-semibold tracking-tight"
    >
      <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-ink text-sm text-on-ink">
        C
      </span>
      <span>{site.name}</span>
    </Link>
  );
}
