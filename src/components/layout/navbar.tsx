import Image from "next/image";
import Link from "next/link";
import { IconShoppingBag } from "@tabler/icons-react";
import { cn } from "@/lib/classnames";
import { navLinks, type RouteKey } from "@/lib/sekalori-data";

type NavbarProps = {
  activeRoute: RouteKey;
};

export function Navbar({ activeRoute }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f0eded] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 sm:flex-nowrap sm:px-8 lg:px-16">
        <Link
          href="/"
          className="flex shrink-0 flex-col items-center justify-center gap-1"
          aria-label="Sekalori home"
        >
          <Image
            src="/sekalori/logo-nav.svg"
            alt="Sekalori"
            width={145}
            height={25}
            priority
            className="h-auto w-[118px] sm:w-[145px]"
          />
          <span className="font-sans text-[9px] font-extrabold leading-none tracking-[0.1em] text-[#217856] sm:text-[10px]">
            kitchen & catering
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center justify-center gap-6 sm:order-none sm:w-auto sm:gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-sm font-semibold leading-6 transition duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:text-base",
                activeRoute === link.route
                  ? "text-[#1a6b3a]"
                  : "text-[#404940] hover:text-[#15562e]",
              )}
              aria-current={activeRoute === link.route ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex h-12 shrink-0 items-center gap-2.5">
          <Link
            href="#"
            aria-label="Open cart"
            className="flex size-11 items-center justify-center rounded-full border border-[#cccccc] bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[#15562e] hover:bg-[#f6f3f2] active:translate-y-0 active:scale-95"
          >
            <IconShoppingBag
              className="h-5 w-5 text-[#1a1c1a]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/batch"
            className="hidden rounded-full bg-[#15562e] px-6 py-3 font-sans text-sm leading-6 text-white shadow-[0_12px_24px_-18px_rgba(15,82,56,0.85)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0f5238] hover:text-white active:translate-y-0 active:scale-95 sm:inline-flex lg:px-8 lg:text-base"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
