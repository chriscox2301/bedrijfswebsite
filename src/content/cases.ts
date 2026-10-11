export type Case = {
  name: string;
  industry: string;
  description: string;
  // Pad naar een afbeelding in /public, bijv. "/images/cases/bakkerij.jpg".
  // Laat null om de placeholder te tonen.
  image: { src: string; alt: string } | null;
  // Optioneel: link naar de live webshop.
  url?: string;
};

export const portfolioSection = {
  label: "Portfolio",
  title: "Recent werk",
};

export const cases: Case[] = [
  {
    name: "[KLANTNAAM 1]",
    industry: "[BRANCHE]",
    description: "[KORTE OMSCHRIJVING VAN HET PROJECT]",
    image: null,
  },
  {
    name: "[KLANTNAAM 2]",
    industry: "[BRANCHE]",
    description: "[KORTE OMSCHRIJVING VAN HET PROJECT]",
    image: null,
  },
  {
    name: "[KLANTNAAM 3]",
    industry: "[BRANCHE]",
    description: "[KORTE OMSCHRIJVING VAN HET PROJECT]",
    image: null,
  },
];
