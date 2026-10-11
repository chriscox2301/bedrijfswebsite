import "server-only";
import type { ContactData } from "./contact-schema";
import { interestOptions } from "@/content/contact";

/**
 * De enige plek waar een offerteaanvraag daadwerkelijk wordt verstuurd.
 *
 * TODO: kies een e-mailprovider (bijv. Resend, Postmark of SMTP via nodemailer)
 * en vervang de console.log hieronder door een echte verzending.
 * Zet API-sleutels in environment variables, nooit in de code.
 * Gooi een Error als het versturen mislukt; de Server Action toont dan een foutmelding.
 */
export async function sendContactEmail(data: ContactData): Promise<void> {
  const interest =
    interestOptions.find((option) => option.value === data.interest)?.label ?? data.interest;

  const body = [
    `Naam: ${data.name}`,
    `Bedrijfsnaam: ${data.company || "-"}`,
    `E-mailadres: ${data.email}`,
    `Interesse in: ${interest}`,
    "",
    data.message,
  ].join("\n");

  console.log("[contact] Nieuwe offerteaanvraag (nog niet verstuurd):\n" + body);
}
