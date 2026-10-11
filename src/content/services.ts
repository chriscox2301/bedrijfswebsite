import type { IconName } from "@/components/ui/Icon";

export type Service = {
  icon: IconName;
  title: string;
  text: string;
};

export const servicesSection = {
  label: "Diensten",
  title: "Wat ik voor je doe",
};

export const services: Service[] = [
  {
    icon: "storefront",
    title: "Webshop op maat",
    text: "Productpagina's, categorieën met filters, zoekfunctie, winkelwagen en checkout. Gebouwd in Next.js en Tailwind.",
  },
  {
    icon: "palette",
    title: "Jouw eigen huisstijl",
    text: "Merkkleur, logo en USP's verwerkt in een herkenbare, overzichtelijke shop.",
  },
  {
    icon: "sparkle",
    title: "[DERDE DIENST]",
    text: "[OMSCHRIJVING DERDE DIENST]",
  },
];
