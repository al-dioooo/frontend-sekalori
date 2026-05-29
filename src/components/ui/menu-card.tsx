import Image from "next/image";
import type { MenuItem } from "@/lib/sekalori-data";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e3df]/70 bg-white p-px shadow-[0_10px_30px_-10px_rgba(45,106,79,0.12)]">
      <div className="relative bg-[#f4f4f0]/70 p-4">
        <div className="relative aspect-[1.35] overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <span className="absolute left-6 top-6 rounded-full border border-[#e2e3df]/70 bg-[#faf9f6]/95 px-4 py-1.5 font-body text-sm font-semibold leading-5 tracking-[0.05em] text-[#0f5238] shadow-sm backdrop-blur-sm">
          {item.day}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {item.nutrition.map((value, index) => (
            <span
              key={value}
              className={
                index === 0
                  ? "rounded-full border border-[#0f5238]/10 bg-[#0f5238]/10 px-3 py-1 font-body text-xs font-medium leading-4 text-[#0f5238]"
                  : "rounded-full bg-[#eeeeea] px-3 py-1 font-body text-xs font-medium leading-4 text-[#404943]"
              }
            >
              {value}
            </span>
          ))}
        </div>
        <h3 className="font-sans text-2xl font-semibold leading-tight text-[#1a1c1a] sm:text-[32px]">
          {item.title}
        </h3>
        <p className="mt-3 font-body text-base leading-[1.65] text-[#404943]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
