import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  alternates: { canonical: "/privacyverklaring" },
};

export default function PrivacyverklaringPage() {
  return (
    <LegalPage title="Privacyverklaring">
      <p>[INHOUD PRIVACYVERKLARING]</p>
    </LegalPage>
  );
}
