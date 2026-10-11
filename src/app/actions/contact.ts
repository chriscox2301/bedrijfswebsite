"use server";

import { formMessages } from "@/content/contact";
import {
  HONEYPOT_FIELD,
  readContactForm,
  validateContact,
  type FieldErrors,
} from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/send-contact-email";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: FieldErrors;
  // De ingevulde waarden, zodat het formulier na een fout niet leeg raakt.
  values: Record<string, string>;
};

export async function submitContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = readContactForm(formData);

  // Honeypot ingevuld? Dan is het vrijwel zeker een bot. We doen alsof het gelukt is.
  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") {
    return { status: "success", message: formMessages.success, errors: {}, values: {} };
  }

  // Valideer altijd opnieuw op de server: browservalidatie is te omzeilen.
  const { data, errors } = validateContact(values);
  if (!data) {
    return { status: "error", message: formMessages.invalid, errors, values };
  }

  try {
    await sendContactEmail(data);
  } catch (error) {
    console.error("[contact] Versturen mislukt:", error);
    return { status: "error", message: formMessages.serverError, errors: {}, values };
  }

  return { status: "success", message: formMessages.success, errors: {}, values: {} };
}
