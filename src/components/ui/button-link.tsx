import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/classnames";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3 font-sans text-base leading-6 transition",
        variant === "primary" &&
          "bg-[#1a6b3a] text-white hover:bg-[#15562e]",
        variant === "outline" &&
          "border border-[#15562e] bg-transparent text-[#15562e] hover:bg-[#dde9e1]",
        variant === "ghost" &&
          "border-b border-[#1a6b3a] px-0 py-1 text-[#1a6b3a] hover:text-[#15562e]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
