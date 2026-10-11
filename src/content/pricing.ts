export type Package = {
  name: string;
  description: string;
  // Zet showFrom op true om "vanaf" voor de prijs te tonen.
  price: string;
  showFrom: boolean;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: { label: string; href: string };
};

export const pricingSection = {
  label: "Prijzen",
  title: "Duidelijke pakketten",
  intro:
    "Elke shop is anders. Deze vanaf-prijzen geven een indicatie; je krijgt altijd een offerte op maat.",
  // Bijv. "Alle prijzen zijn exclusief btw."
  footnote: "[PRIJSVOETNOOT, BIJV. INCL./EXCL. BTW]",
};

export const packages: Package[] = [
  {
    name: "Start",
    description: "[KORTE OMSCHRIJVING PAKKET START]",
    price: "[PRIJS]",
    showFrom: true,
    features: ["[FEATURE]", "[FEATURE]", "[FEATURE]", "[FEATURE]"],
    cta: { label: "Offerte aanvragen", href: "#contact" },
  },
  {
    name: "Groei",
    description: "[KORTE OMSCHRIJVING PAKKET GROEI]",
    price: "[PRIJS]",
    showFrom: true,
    features: ["[FEATURE]", "[FEATURE]", "[FEATURE]", "[FEATURE]", "[FEATURE]"],
    highlighted: true,
    badge: "Meest gekozen",
    cta: { label: "Offerte aanvragen", href: "#contact" },
  },
  {
    name: "Maatwerk",
    description: "[KORTE OMSCHRIJVING PAKKET MAATWERK]",
    price: "Op aanvraag",
    showFrom: false,
    features: ["[FEATURE]", "[FEATURE]", "[FEATURE]", "[FEATURE]"],
    cta: { label: "Offerte aanvragen", href: "#contact" },
  },
];
