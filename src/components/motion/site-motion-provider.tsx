"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";
import { LoadingScreen } from "@/components/motion/loading-screen";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type SiteMotionProviderProps = {
  children: React.ReactNode;
};

function LenisGsapBridge({ loaderDone }: { loaderDone: boolean }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  useEffect(() => {
    if (!loaderDone) return;
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [loaderDone]);

  return null;
}

export function SiteMotionProvider({ children }: SiteMotionProviderProps) {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        anchors: {
          offset: -96,
          duration: 1.05,
        },
      }}
    >
      <LoadingScreen onComplete={() => setLoaderDone(true)} />
      <LenisGsapBridge loaderDone={loaderDone} />
      {children}
    </ReactLenis>
  );
}
