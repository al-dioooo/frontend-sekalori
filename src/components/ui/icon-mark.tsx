import { cn } from "@/lib/classnames";

type IconMarkProps = {
  name: string;
  className?: string;
};

export function IconMark({ name, className }: IconMarkProps) {
  const common = "h-5 w-5";

  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
        <path
          d="M5 15c7 1 12-4 14-10-7 0-13 3-14 10Zm0 0c1.5 1.5 4 3 8 3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "grain") {
    return (
      <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
        <path
          d="M12 4v16M12 8c-3 0-5-1.5-6-4 3 0 5 1.5 6 4Zm0 4c3 0 5-1.5 6-4-3 0-5 1.5-6 4Zm0 4c-3 0-5-1.5-6-4 3 0 5 1.5 6 4Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "drop") {
    return (
      <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
        <path
          d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "cap") {
    return (
      <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
        <path
          d="m3 9 9-4 9 4-9 4-9-4Zm4 3v4c2 2 8 2 10 0v-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "seal") {
    return (
      <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
        <path
          d="m12 3 2 2.4 3.1-.3.8 3 2.8 1.5-1.4 2.8 1.4 2.8-2.8 1.5-.8 3-3.1-.3-2 2.4-2-2.4-3.1.3-.8-3-2.8-1.5 1.4-2.8-1.4-2.8 2.8-1.5.8-3 3.1.3L12 3Zm-3 9 2 2 4-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={cn(common, className)} aria-hidden>
      <path
        d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c.7-3.5 3-5 5-5s4.3 1.5 5 5m-2.5-1c.9-2.7 3-4 5.5-4 2 0 4.3 1.5 5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
