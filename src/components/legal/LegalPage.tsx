import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Eenvoudige opmaak voor juridische pagina's (voorwaarden, privacy). */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="inhoud" className="flex-1 pt-36 pb-section md:pt-44">
        <article className="page-container max-w-3xl">
          <h1 className="font-display text-heading font-semibold">{title}</h1>
          <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-ink-soft">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
