type BezelProps = {
  children: React.ReactNode;
  className?: string; // extra classes voor de buitenste schil (bijv. grid-span)
  coreClassName?: string; // extra classes voor de binnenkern
  tone?: "light" | "dark";
};

/**
 * "Double bezel": een buitenste schil met een binnenkern erin,
 * als een glasplaat in een aluminium bakje. De binnenradius is
 * precies de buitenradius min de padding, zodat de rondingen evenwijdig lopen.
 */
export function Bezel({ children, className = "", coreClassName = "", tone = "light" }: BezelProps) {
  const shell = tone === "dark" ? "bg-ink/90 ring-ink" : "bg-ink/[0.035] ring-ink/[0.06]";
  const core =
    tone === "dark"
      ? "bg-ink text-on-ink shadow-[inset_0_1px_1px_rgb(255_255_255/0.08)]"
      : "bg-surface shadow-[var(--inset-highlight)]";

  return (
    <div className={`rounded-shell p-1.5 ring-1 ${shell} ${className}`}>
      <div className={`h-full rounded-core ${core} ${coreClassName}`}>{children}</div>
    </div>
  );
}
