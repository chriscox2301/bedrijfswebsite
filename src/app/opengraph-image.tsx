import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Deelafbeelding voor WhatsApp, LinkedIn, enz. Vervang later gerust door een
// statische afbeelding: zet dan een opengraph-image.png in deze map en verwijder dit bestand.
export const alt = `${site.name}: webshops op maat in Zuid-Limburg`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#eef1f0",
          color: "#13201b",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600 }}>{site.name}</div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, maxWidth: 900 }}>
          Een snelle, overzichtelijke webshop in jouw eigen huisstijl.
        </div>
        <div style={{ width: 120, height: 12, borderRadius: 6, background: "#2742d6" }} />
      </div>
    ),
    size,
  );
}
