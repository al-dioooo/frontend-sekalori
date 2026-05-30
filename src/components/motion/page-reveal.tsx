"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type PageRevealProps = {
  children: React.ReactNode;
};

export function PageReveal({ children }: PageRevealProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const heroTargets = gsap.utils.toArray<HTMLElement>(".motion-hero");
      const revealTargets = gsap.utils.toArray<HTMLElement>(".motion-reveal");
      const imageTargets = gsap.utils.toArray<HTMLElement>(".motion-image");

      if (reduceMotion) {
        gsap.set([...heroTargets, ...revealTargets, ...imageTargets], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          clearProps: "all",
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return;
      }

      gsap
        .timeline({ defaults: { duration: 0.72, ease: "power3.out" } })
        .from(heroTargets, {
          autoAlpha: 0,
          y: 26,
          stagger: 0.08,
          clearProps: "all",
        })
        .from(
          imageTargets.slice(0, 1),
          {
            autoAlpha: 0,
            scale: 0.96,
            y: 18,
            duration: 0.85,
            clearProps: "all",
          },
          "<0.12",
        );

      if (revealTargets.length > 0) {
        gsap.set(revealTargets, { autoAlpha: 0, y: 34 });
        ScrollTrigger.batch(revealTargets, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.68,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: "auto",
              clearProps: "all",
            });
          },
        });
      }

      if (imageTargets.length > 1) {
        gsap.set(imageTargets.slice(1), { autoAlpha: 0, scale: 0.97, y: 20 });
        ScrollTrigger.batch(imageTargets.slice(1), {
          start: "top 85%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: "auto",
              clearProps: "all",
            });
          },
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { dependencies: [pathname], scope: scopeRef, revertOnUpdate: true },
  );

  return <div ref={scopeRef}>{children}</div>;
}
