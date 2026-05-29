import Image from "next/image";
import Link from "next/link";
import { footerGroups } from "@/lib/sekalori-data";

export function Footer() {
  return (
    <footer className="border-t border-[#f0eded] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[480px] flex-col gap-7">
            <Image
              src="/sekalori/logo-footer-wordmark.svg"
              alt="Sekalori"
              width={363}
              height={25}
              className="h-auto w-[220px] sm:w-[300px] lg:w-[363px]"
            />
            <p className="max-w-[454px] font-sans text-sm leading-6 text-[#404940] sm:text-base">
              Jl. Kumbang No.14, Babakan, Kec. Bogor Tengah, Kota Bogor, Jawa
              Barat 16128
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Sekalori Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-[#f0eded] transition hover:bg-[#dde9e1]"
              >
                <Image
                  src="/sekalori/social-instagram.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#"
                aria-label="Sekalori WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-[#f0eded] transition hover:bg-[#dde9e1]"
              >
                <Image
                  src="/sekalori/social-whatsapp.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-12">
            {footerGroups.map((group) => (
              <div key={group.title} className="flex min-w-28 flex-col gap-4">
                <h2 className="font-sans text-xs font-bold uppercase leading-4 tracking-[0.1em] text-[#1a6b3a]">
                  {group.title}
                </h2>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-sans text-sm font-medium leading-5 text-[#404940] transition hover:text-[#15562e]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#f0eded]">
        <div className="mx-auto flex max-w-7xl px-5 py-8 sm:px-8 lg:px-16">
          <p className="font-sans text-[11px] uppercase leading-4 tracking-[0.1em] text-[#404940] sm:text-xs">
            (c) 2026 SEKALORI. Founded by IPB Vocational Alumni.
          </p>
        </div>
      </div>
    </footer>
  );
}
