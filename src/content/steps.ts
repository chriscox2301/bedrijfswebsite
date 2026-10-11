export type Step = {
  number: string;
  title: string;
  text: string;
};

export const processSection = {
  label: "Werkwijze",
  title: "Van eerste gesprek tot live webshop",
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Kennismaking",
    text: "We bespreken je bedrijf, je producten en wat je webshop moet kunnen. Daarna krijg je een offerte op maat.",
  },
  {
    number: "02",
    title: "Ontwerp",
    text: "Ik ontwerp je shop in jouw huisstijl, met je merkkleur, logo en USP's. Jij geeft feedback tot het klopt.",
  },
  {
    number: "03",
    title: "Bouw",
    text: "Ik bouw de webshop in Next.js en Tailwind. Tussendoor zie je de voortgang en kun je meekijken.",
  },
  {
    number: "04",
    title: "Live",
    text: "We zetten je webshop online en lopen samen alles na, zodat je direct zelf aan de slag kunt.",
  },
];
