"use client";

import { useActionState, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { formMessages, interestOptions } from "@/content/contact";
import {
  HONEYPOT_FIELD,
  readContactForm,
  validateContact,
  type ContactField,
  type FieldErrors,
} from "@/lib/contact-schema";
import { FormField, inputClass } from "./FormField";
import { SubmitButton } from "./SubmitButton";

const initialState: ContactState = { status: "idle", message: "", errors: {}, values: {} };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  // Fouten uit de browservalidatie. null = er is (nog) niet in de browser gevalideerd.
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);

  const errors = clientErrors ?? state.errors;
  const hasErrors = Object.keys(errors).length > 0;

  // 1. Eerst valideren in de browser met hetzelfde zod-schema als de server.
  //    Klopt er iets niet, dan stoppen we het versturen en tonen we de fouten.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const { errors } = validateContact(readContactForm(new FormData(event.currentTarget)));
    if (errors) {
      event.preventDefault();
      setClientErrors(errors);
      // Zet de focus op het eerste foute veld, zodat je direct kunt verbeteren.
      const firstField = Object.keys(errors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
    } else {
      setClientErrors(null); // 2. Daarna valideert de Server Action nog een keer.
    }
  }

  // Haalt de foutmelding van een veld weg zodra je het aanpast.
  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as ContactField;
    if (clientErrors?.[name]) {
      const remaining = { ...clientErrors };
      delete remaining[name];
      setClientErrors(remaining);
    }
  }

  // Props die elk veld nodig heeft: koppeling met label en foutmelding.
  const fieldProps = (name: ContactField) => ({
    id: name,
    name,
    defaultValue: state.values[name] ?? "",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-fout` : undefined,
    className: inputClass,
  });

  const statusMessage = hasErrors ? formMessages.invalid : state.message;
  const statusIsError = hasErrors || state.status === "error";

  return (
    <form action={formAction} onSubmit={handleSubmit} onChange={handleChange} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="name" label="Naam" error={errors.name}>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
        </FormField>
        <FormField id="company" label="Bedrijfsnaam" optional error={errors.company}>
          <input type="text" autoComplete="organization" {...fieldProps("company")} />
        </FormField>
      </div>

      <FormField id="email" label="E-mailadres" error={errors.email}>
        <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
      </FormField>

      <FormField id="interest" label="Interesse in" error={errors.interest}>
        <select required {...fieldProps("interest")}>
          <option value="" disabled>
            Maak een keuze
          </option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="message" label="Projectomschrijving" error={errors.message}>
        <textarea
          rows={5}
          required
          placeholder="Wat verkoop je, en wat moet de webshop kunnen?"
          {...fieldProps("message")}
        />
      </FormField>

      {/* Honeypot: onzichtbaar voor bezoekers en screenreaders. Bots vullen dit vaak wel in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Laat dit veld leeg</label>
        <input type="text" id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton pending={pending} />
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${statusIsError ? "text-error" : "text-success"}`}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
