import Link from "next/link";
import { mainNav, primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Schermvullend menu voor mobiel. De links schuiven één voor één omhoog.
 * `inert` zorgt dat het gesloten menu niet met Tab bereikbaar is.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {

  return (
    <div
      id="mobiel-menu"
      inert={!open}
      className={`fixed inset-0 -z-10 flex flex-col bg-paper px-gutter pt-28 pb-10 transition-opacity duration-500 ease-spring md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav aria-label="Mobiel menu">
        <ul className="flex flex-col">
          {mainNav.map((item, index) => (
            <li key={item.href} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={onClose}
                style={{ transitionDelay: open ? `${100 + index * 60}ms` : "0ms" }}
                className={`flex min-h-16 items-center border-b border-ink/[0.07] font-display text-4xl font-semibold tracking-tight transition-[opacity,transform] duration-700 ease-spring ${
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{ transitionDelay: open ? `${100 + mainNav.length * 60}ms` : "0ms" }}
        className={`mt-auto transition-[opacity,transform] duration-700 ease-spring ${
          open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <ButtonLink href={primaryCta.href} onClick={onClose} className="w-full">
          {primaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
