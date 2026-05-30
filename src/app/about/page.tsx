import type { Metadata } from "next";
import Image from "next/image";
import { IconAward, IconChefHat, IconSalad } from "@tabler/icons-react";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { BenefitCard, PartnerPanel } from "@/components/ui/feature-cards";
import { benefits, partners } from "@/lib/sekalori-data";

export const metadata: Metadata = {
  title: {
    absolute: "SEKALORI - About",
  },
  description:
    "Learn about SEKALORI Kitchen & Catering, an IPB alumni-led halal catering team combining nutrition science, local ingredients, and reliable food service.",
};

export default function AboutPage() {
  return (
    <MainLayout activeRoute="about">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-16 lg:py-20">
        <div className="flex flex-1 flex-col items-start gap-6">
          <Badge className="motion-hero border border-[#b7d5c4] !bg-[#e7f3eb] font-semibold !text-[#0f5238] shadow-sm">
            <IconAward
              className="h-4 w-4 text-[#0f5238]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            Premium Catering Excellence
          </Badge>
          <h1 className="motion-hero max-w-xl font-sans text-5xl font-bold leading-[1.18] tracking-normal text-[#1a6b3a] sm:text-6xl lg:text-[61px]">
            Nourishment Designed by Experts.
          </h1>
          <p className="motion-hero font-sans text-lg leading-[1.65] text-[#404940]">
            Founded by alumni of <strong>Vokasi IPB</strong>, SEKALORI is more
            than just a meal service. We provide premium catering for daily
            nutrition and special events, merging culinary mastery with deep
            nutritional science. Every dish is a testament to farm-to-table
            freshness and balanced macros.
          </p>
          <div className="motion-hero flex flex-wrap gap-4 pt-2">
            <span className="inline-flex items-center gap-3 rounded-full border border-[#bfc9bd] bg-[#fcf9f8] px-5 py-4 font-sans text-base font-semibold text-[#1c1b1b]">
              <IconSalad
                className="h-5 w-5 text-[#1a6b3a]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              Daily Meal Plans
            </span>
            <span className="inline-flex items-center gap-3 rounded-full border border-[#bfc9bd] bg-[#fcf9f8] px-5 py-4 font-sans text-base font-semibold text-[#1c1b1b]">
              <IconChefHat
                className="h-5 w-5 text-[#1a6b3a]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              Event Catering
            </span>
          </div>
        </div>

        <div className="motion-image flex flex-1 justify-center">
          <div className="group relative h-[340px] w-full overflow-hidden rounded-[32px] shadow-[0_20px_60px_-30px_rgba(15,82,56,0.45)] sm:h-[408px] sm:rounded-[48px]">
            <Image
              src="/sekalori/about-hero-catering.png"
              alt="Fresh greens and vegetables prepared for a catering display."
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-12 sm:px-8 lg:px-16">
        <div className="motion-reveal mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-4xl font-bold leading-tight text-[#1a6b3a] sm:text-5xl">
            Why Choose SEKALORI?
          </h2>
          <p className="mt-5 font-sans text-base leading-6 text-[#404940]">
            Elevating your health through scientific nutrition and
            uncompromising quality.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-16 lg:pb-24">
        <PartnerPanel partners={partners} />
      </div>
    </MainLayout>
  );
}
