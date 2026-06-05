import Image from "next/image";
import type { MenuItem } from "@/lib/sekalori-data";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="motion-reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e3df]/70 bg-white p-px shadow-[0_10px_30px_-10px_rgba(45,106,79,0.12)] transition duration-300 hover:-translate-y-1.5 hover:border-[#bfc9bd] hover:shadow-[0_22px_46px_-28px_rgba(15,82,56,0.45)]">
      <div className="relative bg-[#f4f4f0]/70 p-4">
        <div className="relative aspect-[1.35] overflow-hidden rounded-xl bg-[#eeeeea]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
        <h3 className="font-sans text-2xl font-semibold leading-tight text-[#1a1c1a] sm:text-[32px]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}
