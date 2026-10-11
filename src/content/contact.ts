import { site } from "./site";

export const contactSection = {
  label: "Contact",
  title: "Vraag een vrijblijvende offerte aan",
  text: "Vertel kort iets over je bedrijf en wat je webshop moet kunnen. Je hoort binnen [REACTIETIJD] van me.",
};

// De waarden ("start", "groei", ...) worden ook door de zod-validatie gebruikt.
export const interestOptions = [
  { value: "start", label: "Pakket Start" },
  { value: "groei", label: "Pakket Groei" },
  { value: "maatwerk", label: "Maatwerk" },
  { value: "onbekend", label: "Weet ik nog niet" },
] as const;

export const formMessages = {
  success: "Bedankt! Je aanvraag is verstuurd. Ik neem zo snel mogelijk contact met je op.",
  invalid: "Niet alle velden zijn goed ingevuld. Controleer de gemarkeerde velden.",
  serverError: `Je aanvraag kon niet worden verstuurd. Probeer het later opnieuw of mail direct naar ${site.email}.`,
};
