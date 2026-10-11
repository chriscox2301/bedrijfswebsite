type MenuButtonProps = {
  open: boolean;
  onToggle: () => void;
};

/** Hamburger met twee lijnen die bij openen draaien tot een kruis. Alleen op mobiel. */
export function MenuButton({ open, onToggle }: MenuButtonProps) {
  const line =
    "absolute left-1/2 h-px w-5 -translate-x-1/2 bg-current transition-transform duration-500 ease-spring";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobiel-menu"
      aria-label={open ? "Menu sluiten" : "Menu openen"}
      className="relative size-11 rounded-full bg-ink/5 transition-transform duration-500 ease-spring active:scale-95 md:hidden"
    >
      <span className={`${line} top-1/2 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
      <span className={`${line} top-1/2 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
    </button>
  );
}
