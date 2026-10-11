import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalPage title="Algemene voorwaarden">
      <p>[INHOUD ALGEMENE VOORWAARDEN]</p>
    </LegalPage>
  );
}
