import { cn } from "@/lib/classnames";
import { IconMark } from "@/components/ui/icon-mark";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <article className="motion-reveal group flex min-h-[320px] flex-col items-center justify-center rounded-[32px] border border-[#bfc9bd] bg-[#f6f3f2] p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_22px_46px_-30px_rgba(15,82,56,0.42)] sm:rounded-[48px] lg:p-10">
      <span className="flex size-14 items-center justify-center rounded-full bg-[#1a6b3a] text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#15562e]">
        <IconMark name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-8 font-sans text-2xl font-extrabold leading-tight text-[#1c1b1b]">
        {title}
      </h3>
      <p className="mt-4 font-sans text-base leading-6 text-[#404940]">
        {description}
      </p>
    </article>
  );
}

type IngredientCardProps = {
  icon: string;
  title: string;
  tone: string;
};

export function IngredientCard({ icon, title, tone }: IngredientCardProps) {
  return (
    <article className="motion-reveal group flex min-h-[202px] flex-col items-center justify-center rounded-2xl border border-[#e2e3df]/70 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#bfc9bd] hover:shadow-[0_20px_38px_-28px_rgba(15,82,56,0.38)]">
      <span
        className={cn(
          "flex size-20 items-center justify-center rounded-full transition duration-300 group-hover:scale-110",
          tone === "green" && "bg-[#0f5238]/10 text-[#0f5238]",
          tone === "amber" && "bg-[#895100]/10 text-[#895100]",
          tone === "stone" && "bg-[#424947]/10 text-[#424947]",
        )}
      >
        <IconMark name={icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-4 max-w-32 font-body text-sm font-semibold leading-5 tracking-[0.05em] text-[#1a1c1a]">
        {title}
      </h3>
    </article>
  );
}

export function PartnerPanel({ partners }: { partners: string[] }) {
  return (
    <section className="motion-reveal rounded-[32px] border border-[#bfc9bd] bg-white px-6 py-12 sm:rounded-[48px] sm:px-12">
      <h2 className="text-center font-sans text-4xl font-bold leading-tight text-[#1a6b3a] sm:text-5xl">
        Our Partners
      </h2>
      <div className="mt-10 grid gap-8 opacity-70 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="group flex flex-col items-center gap-3 text-center transition duration-300 hover:-translate-y-1"
          >
            <div className="size-28 rounded-full bg-[#f0eded] transition duration-300 group-hover:bg-[#dde9e1] sm:size-36" />
            <p className="font-sans text-sm leading-5 text-[#1c1b1b]">
              {partner}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
