import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Koppen: expressieve grotesk. Lopende tekst: rustige, goed leesbare sans.
// De CSS-variabelen worden in globals.css gekoppeld aan font-display en font-sans.
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Webshops op maat in Zuid-Limburg`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Webshops op maat in Zuid-Limburg`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef1f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {/* Zonder JavaScript is er geen scroll-animatie: toon dan alles direct. */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <a
          href="#inhoud"
          className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-ink px-5 py-3 text-on-ink focus:translate-y-0"
        >
          Naar de inhoud
        </a>
        {children}
      </body>
    </html>
  );
}
