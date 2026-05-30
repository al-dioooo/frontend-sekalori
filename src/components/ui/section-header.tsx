import type { ReactNode } from "react";
import { cn } from "@/lib/classnames";

type SectionHeaderProps = {
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "motion-reveal flex w-full flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-sans text-4xl font-bold leading-tight tracking-normal text-[#1a1c1a] sm:text-5xl">
          {title}
        </h2>
        {action}
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-2xl font-body text-base leading-6 text-[#404943]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
