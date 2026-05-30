import type { Metadata } from "next";
import Image from "next/image";
import { IconBowlSpoon, IconCalendarWeek } from "@tabler/icons-react";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { IngredientCard } from "@/components/ui/feature-cards";
import { MenuSection } from "@/components/sections/menu-section";
import { batchMenuItems, ingredients } from "@/lib/sekalori-data";

export const metadata: Metadata = {
  title: {
    absolute: "SEKALORI - Batch",
  },
  description:
    "Explore SEKALORI batch menus with balanced daily meals, fresh Bogor ingredients, and calorie-conscious nutrition for the week.",
};

export default function BatchPage() {
  return (
    <MainLayout activeRoute="batch">
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-[42%_58%_64%_36%] bg-[#b1f0ce]/30 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-64 w-64 rounded-[55%_45%_38%_62%] bg-[#dde4e0]/30 blur-3xl" />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-16 lg:py-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <Badge className="motion-hero bg-[#0f5238]/10 font-body text-sm tracking-[0.05em] text-[#0f5238]">
              <span
                aria-hidden="true"
                className="size-2 rounded-sm bg-[#0f5238]"
              />
              Nov 13 - Nov 17
            </Badge>
            <h1 className="motion-hero font-sans text-5xl font-bold leading-tight tracking-normal text-[#1a1c1a] sm:text-6xl">
              Fiber Boost Week
            </h1>
            <p className="motion-hero max-w-xl font-body text-lg leading-7 text-[#404943]">
              Tingkatkan energi harian Anda dengan hidangan padat nutrisi dan
              tinggi serat yang dirancang untuk kesehatan pencernaan. Bahan
              segar langsung dari pertanian lokal Bogor.
            </p>
            <div className="motion-hero flex flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 rounded-xl border border-[#bfc9bd]/30 bg-[#eeeeea] px-5 py-3 font-body text-sm font-semibold leading-5 tracking-[0.05em] text-[#1a1c1a]">
                <IconCalendarWeek
                  className="h-4 w-4 text-[#1a6b3a]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                5 Days
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-[#bfc9bd]/30 bg-[#eeeeea] px-5 py-3 font-body text-sm font-semibold leading-5 tracking-[0.05em] text-[#1a1c1a]">
                <IconBowlSpoon
                  className="h-4 w-4 text-[#895100]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                ~1800 kkal/hari
              </span>
            </div>
          </div>

          <div className="motion-image relative flex h-[360px] w-full flex-1 items-center sm:h-[550px] lg:w-auto">
            <div className="absolute inset-[16px_-16px_-16px_16px] rounded-[50%_12%_56%_22%] bg-[#b1f0ce]/30" />
            <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-[#e2e3df] bg-white shadow-[0_10px_30px_-10px_rgba(45,106,79,0.12)]">
              <Image
                src="/sekalori/batch-hero-bowl.png"
                alt="Fiber boost bowl with quinoa, kale, avocado, and roasted sweet potato."
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <MenuSection
        title="Menu Harian"
        description="Temukan nutrisi terbaik Anda minggu ini. Disiapkan dengan sepenuh hati menggunakan bahan-bahan musiman pilihan."
        items={batchMenuItems}
        decorativeImage="/sekalori/batch-botanical-decor.svg"
      />

      <section className="relative overflow-hidden bg-[#f4f4f0] py-16 lg:py-20">
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-[58%_42%_34%_66%] bg-[#ffdcbd]/25 blur-3xl" />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
          <div className="motion-reveal max-w-md">
            <h2 className="font-sans text-4xl font-bold leading-tight text-[#1a1c1a] sm:text-5xl">
              Bahan Segar dari Bogor
            </h2>
            <p className="mt-6 font-body text-lg leading-[1.625] text-[#404943]">
              Kami bermitra langsung dengan petani lokal di dataran tinggi Bogor
              untuk menghadirkan hasil tani paling segar dan padat nutrisi.
              Transparansi adalah bahan utama kami.
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            {ingredients.map((ingredient) => (
              <IngredientCard key={ingredient.title} {...ingredient} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
