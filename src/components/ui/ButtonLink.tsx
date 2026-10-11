import Link from "next/link";
import { Icon } from "./Icon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "bg-surface text-ink ring-1 ring-ink/10 hover:ring-ink/25",
  inverse: "bg-on-ink text-ink hover:bg-white",
};

const iconVariants = {
  primary: "bg-white/15",
  secondary: "bg-ink/5",
  inverse: "bg-ink/8",
};

/**
 * Pilvormige knop (eigenlijk een link). De pijl zit in een eigen rondje
 * dat bij hover een klein stukje schuift.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex min-h-12 whitespace-nowrap items-center justify-between gap-3 rounded-full py-2 pr-2 pl-6 text-[0.95rem] font-medium transition-[background-color,box-shadow,transform] duration-500 ease-spring active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${iconVariants[variant]}`}
      >
        <Icon name="arrowUpRight" className="size-4" />
      </span>
    </Link>
  );
}
