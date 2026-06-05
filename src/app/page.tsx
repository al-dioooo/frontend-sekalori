import type { Metadata } from "next";
import Image from "next/image";
import {
  IconArrowRight,
  IconCircleCheck,
  IconSparkles,
} from "@tabler/icons-react";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { FAQList } from "@/components/ui/faq-list";
import { MenuSection } from "@/components/sections/menu-section";
import { faqItems, sekaloriLinks } from "@/lib/sekalori-data";
import { getCurrentCateringBatchData } from "@/lib/arsanawa/menu-adapter";

export const metadata: Metadata = {
  title: {
    absolute: "Home: Isi Kalorimu dengan SEKALORI - SEKALORI Kitchen & Catering",
  },
  description:
    "Isi kalorimu dengan SEKALORI, layanan halal meal prep dan catering Bogor untuk menu harian yang segar, seimbang, dan siap diantar.",
};

export default async function Home() {
  const batchData = await getCurrentCateringBatchData();
  const menuItems = batchData.items.slice(0, 3);

  return (
    <MainLayout activeRoute="home">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-16 lg:py-20">
        <div className="flex flex-1 flex-col items-start gap-8">
          <Badge className="motion-hero">
            <span className="relative flex size-5 items-center justify-center">
              <IconCircleCheck
                className="h-5 w-5 text-white"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <IconSparkles
                className="absolute -right-2 -top-2 h-3.5 w-3.5 text-[#f5d572]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
            Halal Certified
          </Badge>
          <div className="motion-hero flex max-w-xl flex-col gap-4">
            <h1 className="font-sans text-5xl font-bold leading-none tracking-normal text-[#092514] sm:text-6xl lg:text-[80px]">
              Isi Kalorimu Dengan
            </h1>
            <Image
              src="/sekalori/logo-primary.svg"
              alt="Sekalori"
              width={392}
              height={68}
              priority
              className="h-auto w-[260px] sm:w-[360px] lg:w-[392px]"
            />
          </div>
          <p className="motion-hero max-w-md font-sans text-lg leading-[1.6] text-[#404940]">
            Premium meal prep designed for the health-conscious university
            community. Fresh, balanced, and chef-curated nutrition delivered to
            your door.
          </p>
          <div className="motion-hero flex flex-wrap gap-4">
            <ButtonLink
              href={sekaloriLinks.orderForm}
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </ButtonLink>
            <ButtonLink href="#menu-batch" variant="outline">
              View Batch
            </ButtonLink>
          </div>
        </div>

        <div className="motion-image relative flex w-full flex-1 items-center justify-center">
          <div className="absolute inset-[-10%] rounded-full bg-[#8cf9b0]/20 blur-3xl" />
          <div className="group relative aspect-square w-full max-w-[560px] overflow-hidden rounded-[36px] sm:rounded-[48px]">
            <Image
              src="/sekalori/home-hero-bowl.png"
              alt="A clean nutrition bowl with egg, chickpeas, grains, beans, and herbs."
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#f6f3f2] py-16 sm:py-24 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:gap-24 lg:px-16">
          <div className="motion-image relative flex-1">
            <div className="absolute inset-[28px_-22px_-22px_28px] rounded-[28px] border-2 border-[#1a6b3a] sm:inset-[36px_-36px_-36px_36px] sm:rounded-[36px]" />
            <div className="group relative h-[340px] overflow-hidden rounded-[32px] sm:h-[500px] sm:rounded-[48px]">
              <Image
                src="/sekalori/home-chefs.png"
                alt="Two chefs reviewing freshly prepared dishes in a kitchen."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="motion-reveal flex flex-1 flex-col gap-6">
            <h2 className="font-sans text-4xl font-bold leading-tight text-[#1a6b3a] sm:text-5xl">
              Roots in Excellence
            </h2>
            <p className="font-sans text-lg leading-[1.6] text-[#404940]">
              Founded by alumni of Vokasi IPB, SEKALORI combines academic
              precision in nutrition with the artistry of farm-to-table cooking.
              We are dedicated to providing affordable, high-quality nutrition
              for the future leaders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      <MenuSection
        id="menu-batch"
        title="Menu Batch"
        description="Temukan nutrisi terbaik Anda minggu ini. Disiapkan dengan sepenuh hati menggunakan bahan-bahan musiman pilihan."
        items={menuItems}
        action={
          <ButtonLink href="/batch" variant="ghost" className="gap-2">
            Lihat Detail
            <IconArrowRight
              className="h-4 w-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </ButtonLink>
        }
      />

      <section id="faq" className="bg-[#fcf9f8] px-5 py-20 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-12">
          <div className="motion-reveal text-center">
            <h2 className="font-sans text-4xl font-bold leading-tight text-[#1a6b3a] sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 font-sans text-lg leading-6 text-[#404940]">
              Everything you need to know about our service.
            </p>
          </div>
          <FAQList items={faqItems} />
        </div>
      </section>
    </MainLayout>
  );
}
