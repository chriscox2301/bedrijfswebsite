"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, primaryCta } from "@/content/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "./Logo";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";

/** Zwevende "pil"-header. Op mobiel opent de hamburger een schermvullend menu. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Escape sluit het menu, en de pagina scrollt niet mee zolang het open is.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-gutter pt-3 md:pt-5">
      <div className="mx-auto flex w-full max-w-page items-center justify-between gap-2 rounded-full bg-surface/80 p-1.5 pl-3 shadow-soft ring-1 ring-ink/[0.06] backdrop-blur-xl md:w-max md:pl-4">
        <Logo onClick={closeMenu} />

        <nav aria-label="Hoofdmenu" className="hidden md:block">
          <ul className="flex items-center">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full px-4 text-[0.95rem] text-ink-soft transition-colors duration-500 ease-spring hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
        </div>

        <MenuButton open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
      </div>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
