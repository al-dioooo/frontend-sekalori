import type { LegalDocument } from "@/lib/sekalori-data";

type LegalPageProps = {
  document: LegalDocument;
};

export function LegalPage({ document }: LegalPageProps) {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-16 sm:px-8 lg:px-16 lg:py-20">
      <div className="motion-hero flex flex-col gap-5">
        <p className="font-body text-sm font-semibold uppercase leading-5 tracking-[0.14em] text-[#1a6b3a]">
          Effective {document.effectiveDate}
        </p>
        <h1 className="font-sans text-5xl font-bold leading-tight text-[#092514] sm:text-6xl">
          {document.title}
        </h1>
        <p className="max-w-3xl font-body text-lg leading-[1.7] text-[#404943]">
          {document.intro}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {document.sections.map((section) => (
          <article
            key={section.title}
            className="motion-reveal rounded-2xl border border-[#e2e3df] bg-white px-6 py-7 shadow-[0_14px_32px_-28px_rgba(15,82,56,0.45)] sm:px-8"
          >
            <h2 className="font-sans text-2xl font-semibold leading-tight text-[#1a6b3a]">
              {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-base leading-[1.75] text-[#404943]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
