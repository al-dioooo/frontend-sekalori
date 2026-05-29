import Image from "next/image";
import type { ReactNode } from "react";
import { MenuCard } from "@/components/ui/menu-card";
import { SectionHeader } from "@/components/ui/section-header";
import type { MenuItem } from "@/lib/sekalori-data";

type MenuSectionProps = {
  id?: string;
  title: string;
  description: string;
  items: MenuItem[];
  action?: ReactNode;
  decorativeImage?: string;
};

export function MenuSection({
  id,
  title,
  description,
  items,
  action,
  decorativeImage = "/sekalori/botanical-decor.svg",
}: MenuSectionProps) {
  return (
    <section
      id={id}
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-16 sm:px-8 lg:px-16"
    >
      <Image
        src={decorativeImage}
        alt=""
        width={256}
        height={256}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 hidden opacity-70 lg:block"
      />
      <SectionHeader title={title} description={description} action={action} />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.day} item={item} />
        ))}
      </div>
    </section>
  );
}
