"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type LoadingScreenProps = {
  onComplete?: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".loader-progress", { scaleX: 1 });
        gsap.to(rootRef.current, {
          autoAlpha: 0,
          duration: 0.25,
          delay: 0.15,
          onComplete: () => {
            setVisible(false);
            onComplete?.();
          },
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setVisible(false);
          onComplete?.();
        },
      });

      timeline
        .from(".loader-logo", {
          autoAlpha: 0,
          y: 18,
          scale: 0.96,
          duration: 0.55,
        })
        .from(
          ".loader-caption",
          { autoAlpha: 0, y: 12, duration: 0.4 },
          "<0.12",
        )
        .fromTo(
          ".loader-progress",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.05, ease: "power2.inOut" },
          "<0.08",
        )
        .to(rootRef.current, {
          autoAlpha: 0,
          yPercent: -4,
          duration: 0.45,
          ease: "power2.inOut",
        });
    },
    { scope: rootRef },
  );

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a6b3a] px-6 text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading Sekalori"
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-7 text-center">
        <Image
          src="/sekalori/logo-primary.svg"
          alt="SEKALORI"
          width={392}
          height={68}
          priority
          className="loader-logo h-auto w-[250px] brightness-0 invert sm:w-[320px]"
        />
        <p className="loader-caption font-body text-xs font-semibold uppercase leading-5 tracking-[0.24em] text-white/85">
          Kitchen & Catering
        </p>
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-white/25"
          aria-hidden="true"
        >
          <div className="loader-progress h-full w-full rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
