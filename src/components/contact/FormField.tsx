type FormFieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode; // het <input>, <select> of <textarea>
};

/** Label + invoerveld + foutmelding. De foutmelding heeft id "<id>-fout" (zie aria-describedby). */
export function FormField({ id, label, optional = false, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="font-normal text-ink-soft"> (optioneel)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-fout`} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

/** Gedeelde stijl voor alle invoervelden. */
export const inputClass =
  "w-full min-h-12 rounded-2xl bg-paper px-4 py-3 text-base text-ink ring-1 ring-ink/[0.08] transition-[box-shadow,background-color] duration-300 ease-spring placeholder:text-ink-soft/70 hover:ring-ink/20 focus:bg-surface focus:ring-2 focus:ring-accent focus:outline-none aria-invalid:ring-2 aria-invalid:ring-error";
