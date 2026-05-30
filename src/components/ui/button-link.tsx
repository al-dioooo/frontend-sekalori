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
          "bg-[#1a6b3a] text-white shadow-[0_14px_28px_-20px_rgba(15,82,56,0.9)] hover:-translate-y-0.5 hover:bg-[#15562e] hover:text-white active:translate-y-0 active:scale-95",
        variant === "outline" &&
          "border border-[#15562e] bg-transparent text-[#15562e] hover:-translate-y-0.5 hover:bg-[#dde9e1] active:translate-y-0 active:scale-95",
        variant === "ghost" &&
          "border-b border-[#1a6b3a] px-0 py-1 text-[#1a6b3a] hover:-translate-y-0.5 hover:text-[#15562e] active:translate-y-0",
        className,
      )}
    >
      {children}
    </Link>
  );
}
