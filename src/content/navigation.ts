export type NavItem = { label: string; href: string };

// De hrefs beginnen met "/" zodat de links ook werken vanaf de juridische pagina's.
export const mainNav: NavItem[] = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Prijzen", href: "/#prijzen" },
];

export const legalNav: NavItem[] = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacyverklaring" },
];

export const primaryCta: NavItem = { label: "Offerte aanvragen", href: "/#contact" };
