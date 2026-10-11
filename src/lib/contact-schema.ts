import { z } from "zod";
import { interestOptions } from "@/content/contact";

/**
 * Eén schema voor zowel de browser (ContactForm) als de server (Server Action),
 * zodat de regels en foutmeldingen altijd gelijk zijn.
 */
const interestValues = interestOptions.map((option) => option.value) as [
  (typeof interestOptions)[number]["value"],
  ...(typeof interestOptions)[number]["value"][],
];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Vul je naam in." })
    .max(100, { error: "Je naam mag maximaal 100 tekens zijn." }),
  company: z
    .string()
    .trim()
    .max(120, { error: "De bedrijfsnaam mag maximaal 120 tekens zijn." }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Vul je e-mailadres in." })
    .pipe(z.email({ error: "Vul een geldig e-mailadres in, bijvoorbeeld naam@bedrijf.nl." })),
  interest: z.enum(interestValues, { error: "Kies waar je interesse in hebt." }),
  message: z
    .string()
    .trim()
    .min(20, { error: "Beschrijf je project in minimaal 20 tekens." })
    .max(5000, { error: "Je omschrijving mag maximaal 5000 tekens zijn." }),
});

export type ContactData = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactData;
export type FieldErrors = Partial<Record<ContactField, string>>;

/** Leest de formuliervelden uit FormData (lege velden worden ""). */
export function readContactForm(formData: FormData) {
  const get = (key: string) => String(formData.get(key) ?? "");
  return {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    interest: get("interest"),
    message: get("message"),
  };
}

/** Valideert en geeft per veld de eerste foutmelding terug. */
export function validateContact(values: Record<string, string>) {
  const result = contactSchema.safeParse(values);
  if (result.success) return { data: result.data, errors: null };

  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as ContactField;
    errors[field] ??= issue.message;
  }
  return { data: null, errors };
}

/** Naam van het honeypot-veld: echte bezoekers zien het niet, spambots vullen het in. */
export const HONEYPOT_FIELD = "website";
