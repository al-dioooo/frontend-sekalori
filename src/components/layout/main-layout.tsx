import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageReveal } from "@/components/motion/page-reveal";
import type { RouteKey } from "@/lib/sekalori-data";

type MainLayoutProps = {
  activeRoute?: RouteKey;
  children: ReactNode;
};

export function MainLayout({ activeRoute, children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcf9f8]">
      <Navbar activeRoute={activeRoute} />
      <main className="flex-1 pt-[104px] sm:pt-[92px]">
        <PageReveal>{children}</PageReveal>
      </main>
      <Footer />
    </div>
  );
}
