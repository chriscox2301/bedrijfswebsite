/**
 * Dunne lijn-iconen als inline SVG (geen extra library nodig).
 * Nieuw icoon? Voeg een naam + <path>-inhoud toe aan `paths`.
 */
const paths = {
  storefront: (
    <>
      <path d="M4 10v9.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V10" />
      <path d="M3 6.5 4.6 4h14.8L21 6.5v1.75a2.75 2.75 0 0 1-5.5 0 2.75 2.75 0 0 1-5.5 0 2.75 2.75 0 0 1-5.5 0V6.5" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.75-.8 1.75-1.7 0-.45-.17-.83-.43-1.13-.26-.3-.42-.67-.42-1.12 0-.94.77-1.55 1.7-1.55H16.5A4.5 4.5 0 0 0 21 11c0-4.4-4-8-9-8Z" />
      <circle cx="7.5" cy="11.5" r="1" />
      <circle cx="10.5" cy="7.5" r="1" />
      <circle cx="15" cy="7.5" r="1" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5c.5 3.9 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5 3.9-.5 6-2.6 6.5-6.5ZM18.5 15.5c.2 1.6 1 2.4 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.1 2.3-.9 2.5-2.5Z" />
  ),
  arrowUpRight: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M8.6 3.5H6A2.5 2.5 0 0 0 3.5 6c0 7.95 6.55 14.5 14.5 14.5a2.5 2.5 0 0 0 2.5-2.5v-2.6l-4-1.6-1.9 1.9a11.6 11.6 0 0 1-6.3-6.3l1.9-1.9-1.6-4Z" />
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="9.5" r="1.5" />
      <path d="m21 15.5-4.5-4.5L6 20" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
